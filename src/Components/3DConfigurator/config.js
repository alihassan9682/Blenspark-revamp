import R1 from "../../assets/Renders/R1.png";
import R2 from "../../assets/Renders/R2.png";
import R3 from "../../assets/Renders/R3.png";
import R4 from "../../assets/Renders/R4.png";
import Seat from "../../assets/Renders/Seat.png";
import rim from "../../assets/Renders/Rim.png";
import S1 from "../../assets/Sofa renders/R1.png";
import S4 from "../../assets/Sofa renders/R4.png";
import S3 from "../../assets/Sofa renders/R3.png";
import S2 from "../../assets/Sofa renders/R2.png";
import metal from "../../assets/Sofa renders/Wood.png";
import wood from "../../assets/Sofa renders/Gold.png";
import sliver from "../../assets/Sofa renders/Silver.png";
// import { IoCarSport, IoDoor, IoTrunk } from "react-icons/io5";

export const Options = [
  {
    label: "Car",
    value: "Car",
    image: R2, // Your car category image
    currentModel: {
      id: "car-1",
      label: "BMW X7",
      image: R3,
      details: {
        description:
          "Luxury SUV with premium features and powerful performance",
        exterior: 'Laserlight headlights • 22" alloys • Panoramic roof',
        interior: "Leather seats • Wood trim • Ambient lighting",
        performance: "3.0L Turbo • 335HP • 0-60 in 5.3s",
      },
      controls: [
        { label: "Doors", action: "Doors" },
        { label: "Hood", action: "Hood" },
        { label: "Trunk", action: "Trunk" },
      ],
    },
  },
  {
    label: "Sofa",
    value: "Sofa",
    image: S4, // Your sofa category image
    currentModel: {
      id: "sofa-1",
      label: "Modern Leather Sofa",
      image: S4,
      details: {
        description: "Premium comfort with elegant contemporary design",
        material: "Italian full-grain aniline leather",
        dimensions: '84" W × 38" D × 32" H',
        features: "Hand-tufted • Reclining • Modular design",
      },
    },
  },
  {
    label: "Fridge",
    value: "wineCooler",
    image:
      "https://cdn.pixabay.com/photo/2023/03/25/20/21/ai-generated-7876757_1280.jpg",
    currentModel: {
      id: "fridge-1",
      label: "Smart French Door",
      image: "/assets/smart-fridge.jpg",
      details: {
        description: "Advanced cooling technology with smart features",
        capacity: "25 cu. ft. total (15.5 fridge / 9.5 freezer)",
        features: "Touch screen • Smart cooling • Ice maker",
        energy: "Energy Star certified • 650 kWh/year",
      },
    },
  },
];
export const SofaOptions = [
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
        label: "Wooden",
        iconUrl: wood,
        color: "#6B3F2E", // Rich Walnut Brown
      },
      {
        label: "Metal",
        iconUrl: metal,
        color: "#A4A4A4", // Steel Gray
      },
      {
        label: "Sliver",
        iconUrl: sliver,
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
    icon: (
      <img
        src={rim}
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "Rim1",
        iconUrl: rim,
      },
      {
        label: "Rim2",
        iconUrl: rim,
      },
    ],
  },
  {
    label: "Chassis",
    icon: (
      <img
        src={Seat}
        className="w-10 h-10 rounded-full object-cover"
        alt="Body"
      />
    ),
    subOptions: [
      {
        label: "Alpine",
        iconUrl: Seat,
        color: "#FFFFFF",
      },
      {
        label: "Blue",
        iconUrl: Seat,
        color: "#7C9AAE",
      },
      {
        label: "Black",
        iconUrl: Seat,
        color: "#4A4F42",
      },
      {
        label: "Gray",
        iconUrl: Seat,
        color: "gray",
      },
    ],
  },
];
