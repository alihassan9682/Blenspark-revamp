import { IoCarSportOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";

import { ReactComponent as Cushion } from "../../assets/configurator/cushions.svg";
import leg from "../../assets/configurator/legs (1).png";
import leg1 from "../../assets/configurator/legs.png";
import R1 from "../../assets/Renders/R1.png";
import R2 from "../../assets/Renders/R2.png";
import R3 from "../../assets/Renders/R3.png";
import R4 from "../../assets/Renders/R4.png";
import R5 from "../../assets/Renders/R5.png";
import S1 from "../../assets/Sofa renders/R1.png";
import S4 from "../../assets/Sofa renders/R4.png";
import S3 from "../../assets/Sofa renders/R3.png";
import S2 from "../../assets/Sofa renders/R2.png";
import metal from "../../assets/Sofa renders/M.png";
import wood from "../../assets/Sofa renders/W.png";
export const Options = [
  { label: "Car", value: "Car", image: "/bmwX7.png" },
  {
    label: "Sofa",
    value: "SOfa",
    image: S4,
  },
  {
    label: "Fridge",
    value: "wineCooler",
    image:
      "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg",
  },
];
export const SofaOptions = [
  {
    label: "Cushions",
    icon: <Cushion style={{ width: 50, height: 50, fill: "#0086a4" }} />,
    subOptions: [
      {
        label: "Brown",
        icon: <IoCarSportOutline size={20} color="#E0B778" />,
        color: "#E0B778",
        bg: "#E0B778", // dark contrast for white car
      },
      {
        label: "Blue",
        icon: <IoCarSportOutline size={20} color="#3A6EA5" />, // Slightly deeper blue
        color: "#3A6EA5", // Denim Blue
      },
      {
        label: "Black",
        icon: <IoCarSportOutline size={20} color="#212121" />, // Charcoal Black
        color: "#212121", // Charcoal
      },
      {
        label: "Gray",
        icon: <IoCarSportOutline size={20} color="#B0B0B0" />, // Light Gray
        color: "#B0B0B0", // Silver Gray
      },
    ],
  },
  {
    label: "Frame",
    icon: <img src={S4} className="w-20 h-10" alt="sofa" />,
    subOptions: [
      {
        label: "Brown",
        iconUrl: S4,
        color: "#E0B778",
        bg: "#E0B778", // dark contrast for white car
      },
      {
        label: "Blue",
        iconUrl: S3,
        color: "#4B6A91", // Stormy Blue
        bg: "#2A4B70", // Deep Slate Blue for contrast
      },
      {
        label: "Black",
        iconUrl: S2,
        color: "#212121", // Charcoal Black
        bg: "#D1D1D1", // Pale Light Gray to contrast black
      },
      {
        label: "Gray",
        iconUrl: S1,
        color: "#B0B0B0", // Silver Gray
        bg: "#F2F2F2",
      },
    ],
  },
  {
    label: "Legs",
    icon: <img src={wood} alt="legs" className="w-7 h-7" />,
    subOptions: [
      {
        label: "WoodenStands",
        iconUrl: wood,
        color: "#6B3F2E", // Rich Walnut Brown
      },
      {
        label: "MetalStands",
        iconUrl: metal,
        color: "#A4A4A4", // Steel Gray
      },
    ],
  },
];

export const Caroptions = [
  {
    label: "Body",
    icon: (
      <img
        src={R1}
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "Alpine",
        iconUrl: R2,
        color: "#FFFFFF",
        bg: "#1A1A1A",
      },
      {
        label: "Blue",
        iconUrl: R1,
        color: "#7C9AAE",
        bg: "#1C1F24",
      },
      {
        label: "Black",
        iconUrl: R3,
        color: "#4A4F42",
        bg: "#E0E0E0",
      },
      {
        label: "Gray",
        iconUrl: R4,
        color: "gray",
        bg: "#DCDCDC",
      },
    ],
  },
  {
    label: "Wheels",
    icon: <TbWheel size={40} />,
    subOptions: [
      {
        label: "Rim1",
        icon: <TbWheel size={20} color="#7C9AAE" />,
      },
      {
        label: "Rim2",
        icon: <TbWheel size={20} color="#4A4F42" />,
      },
    ],
  },
  {
    label: "Chassis",
    icon: <GiCarDoor size={40} />,
    subOptions: [
      {
        label: "Alpine",
        icon: <GiCarDoor size={20} color="#FFFFFF" />,
        color: "#FFFFFF",
      },
      {
        label: "Blue",
        icon: <GiCarDoor size={20} color="#7C9AAE" />,
        color: "#7C9AAE",
      },
      {
        label: "Black",
        icon: <GiCarDoor size={20} color="#4A4F42" />,
        color: "#4A4F42",
      },
      {
        label: "Gray",
        icon: <GiCarDoor size={20} color="gray" />,
        color: "gray",
      },
    ],
  },
];
