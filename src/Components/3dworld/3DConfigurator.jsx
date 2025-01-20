// import React, { Suspense, useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// import model from '../../assets/GLBs/';

// // Import model files
// import model1 from "../../assets/GLBs/scene.gltf";

// // Model Component
// const Model = ({ baseColor, isCustomColorApplied }) => {
//     const { scene } = useGLTF(model);

//     useEffect(() => {
//         // Traverse through the model's meshes
//         scene.traverse((child) => {
//             if (child.isMesh) {
//                 if (isCustomColorApplied) {
//                     // Apply the custom base color to the material
//                     child.material.color.set(baseColor);
//                 } else {
//                     // Reset to the original material color if no custom color is applied
//                     child.material.color.set(0xffffff); // Default white color (or any original color)
//                 }
//                 child.material.needsUpdate = true; // Ensure the material updates
//             }
//         });
//     }, [scene, baseColor, isCustomColorApplied]);

//     return <primitive object={scene} scale={3} position={[0, -0.8, 0]} />;
// };

// // Configurator Component
// const Configurator = () => {
//     const [baseColor, setBaseColor] = useState("#ff0000"); // Default color (red)
//     const [isCustomColorApplied, setIsCustomColorApplied] = useState(false);

//     const handleColorChange = (color) => {
//         setBaseColor(color);
//         setIsCustomColorApplied(true);
//     };

//     const handleReset = () => {
//         setBaseColor("#ff0000"); // Reset to default red color
//         setIsCustomColorApplied(false);
//     };

//     return (
//         <div className="bg-white w-full shadow-lg rounded-lg p-6 my-8 mx-auto text-center">
//             <div className="flex justify-center items-center space-x-4 mb-6">
//                 {/* Color change buttons */}
//                 <button
//                     onClick={() => handleColorChange("#ff0000")} // Red
//                     className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
//                 >
//                     Red
//                 </button>
//                 <button
//                     onClick={() => handleColorChange("#00ff00")} // Green
//                     className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
//                 >
//                     Green
//                 </button>
//                 <button
//                     onClick={() => handleColorChange("#0000ff")} // Blue
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
//                 >
//                     Blue
//                 </button>
//                 <button
//                     onClick={handleReset}
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
//                 >
//                     Reset
//                 </button>
//             </div>
//             <div className="bg-gray-100 rounded-lg w-full h-[400px] flex items-center justify-center">
//                 <Canvas>
//                     <Suspense fallback={null}>
//                         <ambientLight intensity={2} />
//                         <pointLight position={[10, 10, 10]} />
//                         <OrbitControls />
//                         <Model
//                             baseColor={baseColor}
//                             isCustomColorApplied={isCustomColorApplied}
//                         />
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     );
// };

// export default Configurator;
