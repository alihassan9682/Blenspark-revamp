import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
// import { Model } from "./newf/GLB Red V/Untitled"; // Import the converted model
import ConfiguratorBar from "./ConfiguratorBar"; // Import the ConfiguratorBar component
import ConfigSidebar from "./ConfigSidebar"; // Import the ConfigSidebar component
import { Model } from "./Untitled.jsx";
import { WineCooler } from "./Wine_cooler.jsx"
import { Beetle } from "./Beetle_-_BLEND.jsx"
const InteractiveModelViewer = () => {
    const [selectedOption, setSelectedOption] = useState({ label: "Fridge", value: WineCooler, image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
);

    const handleOptionSelect = (option) => {
        console.log("Selected option:", option);
        setSelectedOption(option);
    };

    const Options = [
        { label: "Car", value: "option1", image: "https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_1280.jpg" },
        { label: "Sofa", value: "option2", image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png" },
        { label: "Fridge", value: WineCooler, image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
        { label: "Sofa", value: "option2", image: "https://cdn.pixabay.com/photo/2024/06/13/12/43/sofa-8827533_1280.png" },
        { label: "Fridge", value: "option3", image: "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg" },
    ];

    return (
        <div className="flex overflow-hidden">
            {/* Fullscreen Canvas */}
            <div className="relative flex-1">
                <Canvas
                    shadows
                    style={{ width: "100vw", height: "100vh" }} // Fullscreen dimensions
                    camera={{ position: [0, 0, 5], fov: 50 }} // Adjust the camera position and field of view
                >
                    <Suspense fallback={<LoadingIndicator />}>
                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={4}
                            castShadow
                        />
                        {/* Display the converted GLTF model */}
                        {selectedOption.label === "Fridge" ? <WineCooler scale={[0.5, 0.5, 0.5]} />
                            : selectedOption.label === "Sofa" ? <Model /> : selectedOption.label === "Car" ? <Beetle scale={[0.3,0.3,0.3]} /> : null}
                        <OrbitControls />
                        {/* Ground plane to receive shadows */}
                        <mesh
                            rotation={[-Math.PI / 2, 0, 0]}
                            position={[0, -1.4, 0]}
                            receiveShadow
                        >
                            <planeGeometry args={[100, 100]} />
                            <shadowMaterial opacity={0.3} />
                        </mesh>
                    </Suspense>
                </Canvas>
                <ConfiguratorBar options={Options} onOptionSelect={handleOptionSelect} />
            </div>
            <ConfigSidebar options={Options} onOptionSelect={handleOptionSelect} />
        </div>
    );
};

const LoadingIndicator = () => {
    return (
        <mesh visible position={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshStandardMaterial
                attach="material"
                color="orange"
                transparent
                opacity={0.1}
                roughness={1}
                metalness={1}
            />
        </mesh>
    );
};

export default InteractiveModelViewer;