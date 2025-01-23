import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls, Environment } from "@react-three/drei";
import { WineCooler } from "./Wine_cooler.jsx";
import ConfiguratorBar from "./ConfiguratorBar";
import ConfigSidebar from "./ConfigSidebar";
import { Model } from "./Untitled.jsx";
import { handleExportUSDZ } from "../exporter.jsx";
import DownloadQRCode from "react-qr-code"; // Import QR Code component
import hdri from "../../assets/goegap_road_2k.hdr";
import { Corolla } from "./Ccl3.jsx";

const InteractiveModelViewer = () => {
    const [selectedOption, setSelectedOption] = useState({
        label: "Fridge",
        value: WineCooler,
        image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg",
    });
    const [showQRScanner, setShowQRScanner] = useState(false);
    const [qrCodeData, setQrCodeData] = useState(""); // State for QR code data
    const ModelRef = useRef();
    const CCl3Ref = useRef();
    const cameraControlRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const footer = document.querySelector('footer'); // Select the footer element
        if (footer) {
            setFooterHeight(footer.offsetHeight); // Get the footer's height
        }
    }, []);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setQrCodeData(option.label); // Set QR code data to the selected option's label
    };

    const moveToMesh = () => {
        if (cameraControlRef.current && CCl3Ref.current) {
            const meshPosition = CCl3Ref.current.position;
            cameraControlRef.current.setPosition(meshPosition.x + 1.4, meshPosition.y, meshPosition.z + 2);
            cameraControlRef.current.setTarget(meshPosition.x, meshPosition.y, meshPosition.z);
        }
    };
    const handleQR = async () => {
        if (ModelRef.current) {
            setLoading(true);
            const url = await handleExportUSDZ(ModelRef);
            console.log("QR Code Data", url)
            if (url) {
                setQrCodeData(url);
                setShowQRScanner(true);
            }
            setLoading(false);
        }
        return;
    }
    useEffect(() => {
        console.log("QR Code", qrCodeData)
        console.log("Loading", loading)
    }, [qrCodeData, loading])

    const Options = [
        { label: "Car", value: "option1", image: "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" },
        { label: "Sofa", value: "option2", image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png" },
        { label: "Fridge", value: WineCooler, image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
    ];

    return (
        <div className="flex overflow-hidden relative">
            {/* Fullscreen Canvas */}
            <div className="relative flex-1">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
                    </div>
                )}
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }} style={{ height: "100vh" }}>
                    <Suspense fallback={<LoadingIndicator />}>
                        <CameraControls ref={cameraControlRef} />
                        <Environment files={hdri} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={4} castShadow />
                        <group ref={ModelRef}>
                            {selectedOption.label === "Fridge" ? (
                                <WineCooler />
                            ) : selectedOption.label === "Car" ? (
                                <Corolla CCl3Ref={CCl3Ref} />
                            ) : selectedOption.label === "Sofa" ? (
                                <Model />
                            ) : null}
                        </group>
                        <OrbitControls target={[0, 0, 0]} />
                        {/* Ground plane to receive shadows */}
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
                            <shadowMaterial opacity={0.3} />
                            <planeGeometry args={[100, 100]} />
                        </mesh>
                    </Suspense>
                </Canvas>

                {/* Overlay Buttons */}
                <div className="absolute top-10 left-5 z-10 flex flex-col gap-4">
                    <button onClick={() => {
                        setLoading(true);
                        handleExportUSDZ(ModelRef)
                        setLoading(false);
                    }} className="text-black bg-gray-500 rounded-xl px-3 py-4">
                        Download model
                    </button>
                    <button onClick={moveToMesh} className="text-black bg-gray-500 rounded-xl px-3 py-4">
                        Move to Model
                    </button>
                    <button onClick={handleQR} className="text-black bg-blue-500 rounded-xl px-3 py-4">
                        Scan QR Code
                    </button>
                </div>

                {/* Configurator Bar */}
                <div className="absolute bottom-10 left-1/2 transform   -translate-x-1/2 z-10  flex items-center justify-center gap-4 ">
                    <ConfiguratorBar options={Options} onOptionSelect={handleOptionSelect} moveToMesh={() => moveToMesh()} />
                </div>
            </div>

            {/* Fixed Sidebar */}
            <div className="fixed top-1/2 transform -translate-y-1/2 w-32 flex justify-center h-auto right-0  mr-4 z-10 mb-20" style={{ bottom: `${footerHeight}px` }}>
                <ConfigSidebar options={Options} onOptionSelect={handleOptionSelect} />
            </div>
            {/* QR Code Scanner Modal */}
            {showQRScanner && (
                <div className="absolute left-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Scan QR Code</h2>
                        <DownloadQRCode value={qrCodeData} />
                        <button
                            onClick={() => setShowQRScanner(false)}
                            className="text-white bg-red-500 rounded-xl px-3 py-2 mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
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
