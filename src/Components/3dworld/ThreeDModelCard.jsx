import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Model = React.memo(({ modelPath, scale = 1 }) => {
    const { scene: originalScene } = useGLTF(modelPath);
    // Create a deep clone of the scene to ensure unique instances
    const clonedScene = originalScene.clone();

    return (
        <primitive
            object={clonedScene}
            scale={[scale, scale, scale]}
            position={[0, -0.8, 0]} // Lowers the model by 0.5 units
        />
    );
});

const LoadingIndicator = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.05; // Adjust rotation speed as needed
        }
    });

    return (
        <mesh ref={meshRef} visible position={[0, 0, 0]}>
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
const ThreeDModelViewer = ({ modelPath, scale, onSceneReady }) => {
    const handleSceneReady = (state) => {
        if (onSceneReady) {
            onSceneReady(state.scene);
        }
    };

    return (
        <Canvas onCreated={handleSceneReady}>
            <PerspectiveCamera
                makeDefault
                position={[0, 1, 5]} // Lowered the y-position from 2 to 1
                fov={75}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
            />
            <ambientLight intensity={15} />
            <directionalLight position={[0, 10, 5]} intensity={20} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Suspense
                fallback={<LoadingIndicator />}
            >
                <Model
                    modelPath={modelPath}
                    scale={scale}
                />
            </Suspense>
        </Canvas>
    );
};

const ThreeDModelCard = ({ modelPath, title, description, scale = 1 }) => {
    const [scene, setScene] = React.useState(null);
    const cardRef = React.useRef(); // Reference to the card

    const handleExportUSDZ = () => {
        if (!scene) {
            toast.error("Scene is not ready for export.", { containerStyle: { position: 'relative', zIndex: 9999 } });
            return Promise.reject("Scene not ready");
        }

        return new Promise((resolve, reject) => {
            try {
                THREE.Cache.clear();
                const exporter = new USDZExporter();

                exporter.parse(scene, (usdz) => {
                    try {
                        const blob = new Blob([usdz], { type: "model/vnd.usdz+zip" });
                        const url = URL.createObjectURL(blob);
                        resolve(url);
                    } catch (error) {
                        toast.error("Error processing USDZ export.", { containerStyle: { position: 'relative', zIndex: 9999 } });
                        reject(error);
                    }
                });
            } catch (error) {
                toast.error("USDZ export failed.", { containerStyle: { position: 'relative', zIndex: 9999 } });
                reject(error);
            }
        });
    };

    const handleARView = async () => {
        try {
            const url = await handleExportUSDZ();

            const link = document.createElement("a");
            link.href = url;
            link.rel = "ar";
            link.download = "model.usdz";
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
            toast.success("AR view started.", { containerStyle: { position: 'relative', zIndex: 9999 } });
        } catch (error) {
            toast.error(
                navigator.userAgent.includes("Android")
                    ? "AR is not supported in your browser. Please use a compatible AR app."
                    : "AR view is supported only on iOS devices.",
                { containerStyle: { position: 'relative', zIndex: 9999 } }
            );
        }
    };

    return (
        <div
            ref={cardRef}
            className="relative w-full max-w-[320px] bg-gradient-to-br from-white to-gray-100 rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-lg m-4 border border-gray-200 hover:shadow-2xl transform transition-all duration-300"
        >
            <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
                <ThreeDModelViewer
                    modelPath={modelPath}
                    scale={scale}
                    onSceneReady={setScene}
                />
            </div>

            <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center mb-3">{description}</p>
                <div className="flex justify-center gap-4">
                    <button
                        className="px-4 py-2 bg-[#00a7b4] text-white rounded-full shadow-lg hover:bg-[#0086a4] hover:shadow-md transition-all duration-300"
                        onClick={handleARView}
                    >
                        View in Room
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-[#0086a4] text-[#0086a4] rounded-full hover:bg-[#0086a4] hover:text-white hover:shadow-md transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Add Toaster once in your root App component, not here */}
        </div>
    );
};

export default ThreeDModelCard;


