import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, CameraControls, Environment } from "@react-three/drei";
import { WineCooler } from "./Wine_cooler.jsx";
// import { Beetle } from "./Beetle_-_BLEND.jsx";
import * as THREE from "three";
import gsap from "gsap";
import ConfiguratorBar from "./ConfiguratorBar"; // Import the ConfiguratorBar component
import ConfigSidebar from "./ConfigSidebar"; // Import the ConfigSidebar component
import { Model } from "./Untitled.jsx";
import { handleExportUSDZ } from "../exporter.jsx"
import hdri from "../../assets/goegap_road_2k.hdr"
import { Corolla } from "./Ccl3.jsx"
const InteractiveModelViewer = () => {
    const [selectedOption, setSelectedOption] = useState({
        label: "Fridge",
        value: WineCooler,
        image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg",
    });
    const ModelRef = useRef();

    const cameraRef = useRef(null);
    const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(0, 2, 5)); // Default camera position
    const [lookAtTarget, setLookAtTarget] = useState(new THREE.Vector3(0, 0, 0)); // Default look-at target

    const handleOptionSelect = (option) => {
        console.log("Selected option:", option);
        setSelectedOption(option);
    };

    const focusOnMesh = (meshRef) => {
        const mesh = meshRef?.current;
        const cameraObject = cameraRef.current?.object || cameraRef.current;

        // Log for debugging
        console.log("Mesh:", mesh);
        console.log("Camera Object:", cameraObject);

        // Check if mesh and camera object are valid
        if (!mesh || !(mesh instanceof THREE.Object3D)) {
            console.error("Invalid mesh reference.");
            return;
        }

        if (!cameraObject) {
            console.error("Camera reference is null or undefined.");
            return;
        }

        const boundingBox = new THREE.Box3().setFromObject(mesh);
        const center = boundingBox.getCenter(new THREE.Vector3());
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);

        // Ensure camera properties are valid
        const fov = cameraObject.fov || 50;
        const aspect = cameraObject.aspect || 1; // Default to square aspect ratio if undefined

        if (isNaN(fov) || isNaN(aspect)) {
            console.error("Invalid camera properties.");
            return;
        }

        const distance = maxSize / (2 * Math.tan((fov * Math.PI) / 360)) * aspect;

        // Calculate the new camera position along the camera's current direction
        const direction = new THREE.Vector3().subVectors(cameraObject.position, center).normalize();
        const newPosition = center.clone().add(direction.multiplyScalar(distance));

        // Update target position for CameraRig to move towards
        setTargetPosition(newPosition);

        // Update the lookAt target for CameraRig to look at
        setLookAtTarget(center);

        // Smoothly move the camera to the new position with GSAP
        gsap.to(cameraObject.position, {
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            duration: 1, // Smooth transition in 1 second
            onUpdate: () => cameraObject.lookAt(center), // Update look-at during animation
        });
    };



    function CameraRig({ targetPosition, lookAtTarget }) {
        useFrame((state) => {
            // Lerp for smooth animation to the new target position
            state.camera.position.lerp(targetPosition, 0.1);  // Lerp for smooth animation
            state.camera.lookAt(lookAtTarget);  // Make camera always look at the target
        });

        return null; // No visible component
    }

    const Options = [
        { label: "Car", value: "option1", image: "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" },
        { label: "Sofa", value: "option2", image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png" },
        { label: "Fridge", value: WineCooler, image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
    ];

    return (
        <div className="flex overflow-hidden">
            {/* Fullscreen Canvas */}
            <div className="relative flex-1">
                <Canvas shadows style={{ width: "100vw", height: "100vh" }}>
                    {/* <CameraRig targetPosition={targetPosition} lookAtTarget={lookAtTarget} /> */}
                    <Suspense fallback={<LoadingIndicator />}>
                        <Environment files={hdri} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={4} castShadow />
                        {/* Display the converted GLTF model */}
                        <group ref={ModelRef}>
                            {selectedOption.label === "Fridge" ? (
                                <WineCooler />
                            ) : selectedOption.label === "Car" ? (
                                <Corolla />
                            ) : null}
                        </group >
                        <OrbitControls ref={cameraRef} />
                        {/* Ground plane to receive shadows */}
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
                            <shadowMaterial opacity={0.3} />
                            <planeGeometry args={[100, 100]} />
                        </mesh>
                    </Suspense>
                </Canvas>
                <ConfiguratorBar options={Options} onOptionSelect={handleOptionSelect} />
                <button onClick={() => handleExportUSDZ(ModelRef)} className="text-black bg-gray-500"> Download model</button>
            </div>
            <ConfigSidebar options={Options} onOptionSelect={handleOptionSelect} />
        </div>
    );
};

const LoadingIndicator = () => {
    return (
        <mesh visible position={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial attach="material" color="orange" transparent opacity={0.1} roughness={1} metalness={1} />
        </mesh>
    );
};

export default InteractiveModelViewer;
