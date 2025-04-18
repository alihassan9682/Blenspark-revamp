
import { FaVrCardboard } from "react-icons/fa";
import weapon from "../../assets/GLBs/weapon.glb";
import ThreeDModelCard from "./ThreeDModelCard";
import Configurator from "./3DConfigurator";
// import model1 from "../../assets/GLBs/GLB Black V/Untitled.glb";
const CategoriesShowcase = () => {
  const threeDSpaceModels = [
    {
      id: 1,
      path: weapon,
      title: "Tank Model 1",
      description: "A futuristic tank with advanced features.",
      scale: 1.5,
    },
    {
      id: 2,
      path: weapon,
      title: "Tank Model 2",
      description: "A robust tank for heavy combat.",
      scale: 1.5,
    },
    {
      id: 3,
      path: weapon,
      title: "Tank Model 3",
      description: "An innovative tank design.",
      scale: 1.5,
    }
  ];

  // const categoryTwoItems = [
  //   { media: video1, description: "Augmented Reality Video", isVideo: true },
  //   { media: video6, description: "Augmented Reality Video", isVideo: true },
  //   { media: video2, description: "Augmented Reality Video", isVideo: true },
  //   { media: video5, description: "Augmented Reality Video", isVideo: true },
  //   { media: video3, description: "Augmented Reality Video", isVideo: true },
  //   { media: video4, description: "Augmented Reality Video", isVideo: true },
  // ];

  return (
    <div className="mx-auto p-4">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          3D Space
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {threeDSpaceModels.map((model) => (
            <ThreeDModelCard
              key={model.id}
              modelPath={model.path}
              title={model.title}
              description={model.description}
              scale={model.scale}
            />
          ))}
        </div>
      </div>
      <div className="w-full mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          3D Configurator
        </h2>
        <Configurator />
      </div>
    </div>
  );
};

export default CategoriesShowcase;