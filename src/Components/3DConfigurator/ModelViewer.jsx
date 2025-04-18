import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { WineCooler } from "./Wine_cooler.jsx";
import { ConfiguratorBar } from "./ConfiguratorBar";
import ConfigSidebar from "./ConfigSidebar";
import { handleExportUSDZ } from "../exporter.jsx";
import hdri from "../../assets/brown_photostudio_01_2k.hdr";
// import hdri from "../../assets/photo_studio_loft_hall_2k.hdr";
import * as THREE from "three";
import AutoCamera from "./autoCamera.jsx"
import { useFrame } from '@react-three/fiber';
import { Options } from "./config.js"
import QRCode from "react-qr-code";
import { Model } from "./BMW.jsx"
import { Sofa } from "./Sofa.jsx"
import { Sofa1 } from "./Sofa1.jsx"
const InteractiveModelViewer = () => {
    const [selectedOption, setSelectedOption] = useState(Options[0]);
    const [showQRScanner, setShowQRScanner] = useState(false);
    const [qrCodeData, setQrCodeData] = useState("");
    const [metalStand, setMetalStand] = useState(false);
    const [barActive, setBarActive] = useState(false);
    const [rim1,setRIm1] = useState(false)
    const [bg, setBg] = useState()// State for metal stands
    const ModelRef = useRef();
    const [position, setPosition] = useState([0, 0, 5])
    const SofeRef = useRef({});
    const CarRefs = useRef({});
    const [zooming, setZooming] = useState(false);
    const [cameraPos, setCameraPos] = useState([0, 0, 0]); // default position
    const [loading, setLoading] = useState(false);



    const resetToDefault = () => {
        setCameraPos([0, 0, 5]); // your default camera position
        if (ModelRef?.current) {
            ModelRef.current.rotation.y = 0;
        }

        setZooming(false);
    };



    const handleStandChange = (bool) => setMetalStand(bool);
    const handleRimChange =(bool) => setRIm1(bool)
    const handleRefsReady = (refs, name) => {
        if (name === "car") {
            CarRefs.current = refs;
        }
        if (name === "sofa") {
            SofeRef.current = refs;
        }
        // // console.log("CarRefs populated:", CarRefs.current);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // setQrCodeData(option.label); // Set QR code data to the selected option's label
    };
    function CameraRig({ position: [x, y, z], active, onDone }) {
        useFrame((state) => {
            if (!active) return;

            const cam = state.camera;
            const current = cam.position;
            const target = new THREE.Vector3(x, y, z);

            // Smooth transition
            current.lerp(target, 0.1);
            cam.lookAt(0, 0, 0);

            // Check if close enough to stop animating
            if (current.distanceTo(target) < 0.01) {
                cam.position.copy(target);
                if (onDone) onDone(); // notify parent
            }
        });

        return null;
    }


    const colorHandlers = {
        Frame: (color) => {

            SofeRef.current.Taylor_Sofa001.current.material.color.set(color);
            SofeRef.current.Stands.current.material.color.set(color);
            setBg(color)
        },
        Cushions: (color) => {
            SofeRef.current.Cussion002.current.material.color.set(color);
            // SofeRef.current.Cussion001.current.material.color.set(color);
        },

        // Body handler: Applies color to all body components
        Body: (color) => {
            if (CarRefs.current.Body) CarRefs?.current?.Body?.current.material?.color?.set(color);
            setBg(color)
        },
        Wheels: (color) => {
            if (CarRefs.current.wheel) CarRefs?.current?.wheel?.current.material?.color?.set(color);

        },
        Chassis: (color) => {
            console.log("Chassis color changed to:", color);
            console.log("CarRefs", CarRefs.current)
            if (CarRefs.current.interiorLeather) CarRefs?.current?.interiorLeather?.current.material?.color?.set(color);
            if (CarRefs.current.chassisCarpet) CarRefs?.current?.chassisCarpet?.current.material?.color?.set(color);
            handleZoom()
        }
    };
    const handleColorChange = (meshName, color, bg) => {
        const handler = colorHandlers[meshName];
        setBg(bg)
        if (handler) handler(color);
    };



    const handleExport = async () => {
        setLoading(true);
        const device = getDevicePlatform();

        // if (device !== "iOS" && device !== "Android") {
        //     console.log("Platform:", device);
        //     setShowQRScanner(true);
        //     setQrCodeData("https://www.dropbox.com/scl/fi/m8bc2mg5dt8k95b8adpel/model-3.usdz?rlkey=vp3ihoc4ts6cu3488r4ljth2o&st=k0s3wb8a&dl=1")
        //     // if (selectedOption.label === "Car") {
        //     //     // Do something for car
        //     //     console.log("Set value for Car");
        //     //     // setValue("car");
        //     // } else if (selectedOption.label === "Sofa") {
        //     //     console.log("Set value for Sofa");
        //     //     // setValue("sofa");
        //     // } else if (selectedOption.label === "Fridge") {
        //     //     console.log("Set value for Fridge");
        //     //     // setValue("fridge");
        //     // }

        //     setLoading(false);

        //     return;
        // }

        // For iOS or Android
        await handleExportUSDZ(ModelRef);
        setLoading(false);
    };


    const getDevicePlatform = () => {
        const ua = navigator.userAgent;

        if (/android/i.test(ua)) return "Android";
        if (/iPad|iPhone|iPod/.test(ua)) return "iOS";
        if (/Windows NT/.test(ua)) return "Windows";
        if (/Macintosh/.test(ua)) return "Mac";
        return "Unknown";
    };

    const handleZoom = () => {
        const pos = CarRefs?.current?.chassisCarpet?.current?.position;
        // Set camera to door position
        setCameraPos([pos.x, pos.y, 1]);

        // Rotate the model 180 degrees around Y axis
        if (ModelRef?.current) {
            ModelRef.current.rotation.y = Math.PI; // 180 degrees in radians
        }

        setZooming(true);
    };
    useEffect(() => {
        setLoading(true);
        setBg("white")
        const timeout = setTimeout(() => setLoading(false), 1500); // or wait for actual loading
        return () => clearTimeout(timeout);
    }, [selectedOption.label]);
    useEffect(() => {
        const device = getDevicePlatform()

        console.log("device", device)
    }, [])
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
                    style={{
                        height: "100vh",
                        transition: "background 1s ease", // Smooth background transition
                        background: bg
                    }}
                >
                    <AutoCamera modelRef={ModelRef} />
                    <CameraRig
                        position={cameraPos}
                        active={zooming}
                        onDone={() => setZooming(false)} // Stop animating
                    />                    <ambientLight intensity={1} />
                    <directionalLight
                        position={[0, 5, 0]} // Directly above
                        target-position={[0, 0, 0]} // Points straight down
                        intensity={2.5}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <Environment files={hdri} />
                    <Suspense fallback={null}>
                        <group ref={ModelRef} position={[0, -1, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                            {{
                                "Fridge": <WineCooler />,
                                "Car": <Model onRefsReady={handleRefsReady} />,
                                "Sofa": <Sofa1 onRefsReady={handleRefsReady} Stand={metalStand} />,
                            }[selectedOption.label] || null}
                        </group>
                    </Suspense>
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
                        <shadowMaterial transparent opacity={0.5} color="" />
                    </mesh>
                </Canvas>
                {/* Overlay Buttons */}
                {/* <div className="absolute top-10 left-5 z-10 flex flex-col gap-4">
                    <button
                        onClick={
                        className="text-white bg-blue-400 rounded-xl px-3 py-2"
                    >
                        View in AR
                    </button>
                </div> */}

                {/* Configurator Bar */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-4">
                    <ConfiguratorBar
                        selectedOption={selectedOption}
                        handleStandChange={handleStandChange}
                        handleColorChange={handleColorChange}
                        handleZoom={handleZoom}
                        barActive={barActive}
                        handleRimChange={handleRimChange}
                    />
                </div>
            </div>

            {/* Fixed Sidebar */}
            <div className="fixed top-1/2 transform -translate-y-1/2 w-1/4 flex justify-center h-auto right-0 mr-4 z-10 border rounded-xl">
                <ConfigSidebar options={Options} onOptionSelect={handleOptionSelect} handleExport={handleExport} setBarActive={setBarActive} barActive={barActive} />
            </div>

            {/* QR Code Scanner Modal */}
            {showQRScanner && (
                <div className="absolute left-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-4 rounded-lg w-1/3 flex flex-col justify-center">
                        <h2 className="text-lg font-bold mb-4">Scan QR Code</h2>
                        <QRCode value={qrCodeData} className="w-full" />
                        <p className="text-sm text-gray-500 mt-2">
                            Scan the QR code to download the model
                        </p>
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

export default InteractiveModelViewer;
