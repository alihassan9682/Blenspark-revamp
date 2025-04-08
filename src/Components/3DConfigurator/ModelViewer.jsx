import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls, Environment } from "@react-three/drei";
import { WineCooler } from "./Wine_cooler.jsx";
import { ConfiguratorBar } from "./ConfiguratorBar";
import ConfigSidebar from "./ConfigSidebar";
import { handleExportUSDZ } from "../exporter.jsx";
import hdri from "../../assets/goegap_road_2k.hdr";
import { SofaModel } from "./Sofa test.jsx"
import { Car } from "./Bmw_x7_m60i.jsx"
const InteractiveModelViewer = () => {
    const [selectedOption, setSelectedOption] = useState({
        label: "Sofa",
        value: "option2",
        image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png"
    },
    );
    const [showQRScanner, setShowQRScanner] = useState(false);
    const [qrCodeData, setQrCodeData] = useState("");
    const [metalStand, setMetalStand] = useState(false); // State for metal stands
    const ModelRef = useRef();
    const CCl3Ref = useRef();
    const SofeRef = useRef({
        Stands: useRef(null),
        Plane: useRef(null),
        Cussion002: useRef(null),
        Cussion001: useRef(null),
        Back_seat_R: useRef(null),
        Taylor_Sofa001: useRef(null),
    });
    const cameraControlRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const footer = document.querySelector("footer"); // Select the footer element
        if (footer) {
            setFooterHeight(footer.offsetHeight); // Get the footer's height
        }
    }, []);
    const handleStandChange = (isMetal) => setMetalStand(isMetal);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setQrCodeData(option.label); // Set QR code data to the selected option's label
    };

    const colorHandlers = {
        "Frame": (color) => {
            console.log("Applying color to Frame:", color);
            SofeRef.current.Stands.current.material.color.set(color);
            SofeRef.current.Back_seat_R.current.material.color.set(color);
        },
        "Cushions": (color) => {
            console.log("Applying color to Cushions:", color);
            SofeRef.current.Cussion002.current.material.color.set(color);
            SofeRef.current.Cussion001.current.material.color.set(color);
        },
    };

    const handleColorChange = (meshName, color) => {
        console.log("Color Change:", meshName, color);
        const handler = colorHandlers[meshName];
        if (handler) handler(color);
    };

    const Options = [
        { label: "Car", value: "option1", image: "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" },
        { label: "Sofa", value: "option2", image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png" },
        { label: "Fridge", value: WineCooler, image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
    ];
    useEffect(() => {
        if (cameraControlRef.current) {
            const controls = cameraControlRef.current;

            // Listen for changes in OrbitControls
            const handleChange = () => {
                const cameraPosition = controls.object.position; // Current camera position
                console.log("Camera Position:", cameraPosition);
            };

            controls.addEventListener("change", handleChange);

            // Cleanup on unmount
            return () => {
                controls.removeEventListener("change", handleChange);
            };
        }
    }, []);




    return (
        <div className="flex overflow-hidden relative">
            {/* Fullscreen Canvas */}
            <div className="relative flex-1">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                    </div>
                )}
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    style={{ height: "100vh" }}
                >
                    <ambientLight intensity={1} />
                    <directionalLight
                        position={[0, 5, 0]} // Directly above
                        target-position={[0, 0, 0]} // Points straight down
                        intensity={2.5}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <Environment files={hdri} />
                    <group ref={ModelRef} position={[0, -1, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                        {{
                            "Fridge": <WineCooler />,
                            "Car": <Car />,
                            "Sofa": <SofaModel SofeRef={SofeRef} Stand={metalStand} />,
                        }[selectedOption.label] || null}
                    </group>

                    <OrbitControls
                        target={[0, 0, 0]}
                        enableZoom={true}
                        enableRotate={true}
                        enablePan={true}
                        maxPolarAngle={Math.PI / 2}
                    />

                    {/* Constant shadow plane */}
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -1.01, 0]}
                    >
                        <planeGeometry args={[100, 100]} />
                        <shadowMaterial transparent opacity={0.5} color="#d0d0d0" />
                    </mesh>
                </Canvas>
                {/* Overlay Buttons */}
                <div className="absolute top-10 left-5 z-10 flex flex-col gap-4">
                    <button
                        onClick={async () => {
                            setLoading(true);
                            await handleExportUSDZ(ModelRef);
                            setLoading(false);
                        }}
                        className="text-white bg-blue-400 rounded-xl px-3 py-2"
                    >
                        View in AR
                    </button>
                </div>

                {/* Configurator Bar */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-4">
                    <ConfiguratorBar
                        selectedOption={selectedOption}
                        handleStandChange={handleStandChange}
                        handleColorChange={handleColorChange}
                    />
                </div>
            </div>

            {/* Fixed Sidebar */}
            <div className="fixed top-1/2 transform -translate-y-1/2 w-32 flex justify-center h-auto right-0 mr-4 z-10">
                <ConfigSidebar options={Options} onOptionSelect={handleOptionSelect} />
            </div>

            {/* QR Code Scanner Modal */}
            {/* {showQRScanner && (
                <div className="absolute left-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Scan QR Code</h2>
                        <DownloadQRCode value={qrCodeData} />
                        <p className="text-sm text-gray-500 mt-2">
                            Scan the QR code to download the model or use the link that has already been downloaded.
                        </p>
                        <button
                            onClick={() => setShowQRScanner(false)}
                            className="text-white bg-red-500 rounded-xl px-3 py-2 mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    );
};


const LoadingIndicator = () => {
    return (
        <mesh visible position={[0, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
                color="orange"
                transparent
                opacity={0.5}
                roughness={1}
                metalness={1}
            />
        </mesh>
    );
};

export default InteractiveModelViewer;
