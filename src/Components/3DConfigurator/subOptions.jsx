import { IoCarSportOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";

import { ReactComponent as Cushion } from '../../assets/configurator/cushions.svg';
import leg from "../../assets/configurator/legs (1).png";
import leg1 from "../../assets/configurator/legs.png";

export const SofaOptions = [
    {
        label: "Cushions",
        icon: <Cushion style={{ width: 50, height: 50, fill: "#0086a4" }} />,
        subOptions: [
            {
                label: "Orche Yellow",
                icon: <Cushion style={{ width: 30, height: 30, fill: "orange" }} />,
                color: "orcheyellow"
            },
            {
                label: "Blue",
                icon: <Cushion style={{ width: 30, height: 30, fill: "blue" }} />,
                color: "blue"
            },
            {
                label: "Green",
                icon: <Cushion style={{ width: 30, height: 30, fill: "green" }} />,
                color: "green"
            },
            {
                label: "Gray",
                icon: <Cushion style={{ width: 30, height: 30, fill: "gray" }} />,
                color: "gray"
            }
        ]
    },
    {
        label: "Frame",
        icon: <img src="/sofa.png" className="w-10 h-10" alt="sofa" />,
        subOptions: [
            {
                label: "Red",
                icon: <img src="/sofa.png" className="w-5 h-5" alt="sofa-red" />,
                color: "red"
            },
            {
                label: "Blue",
                icon: <img src="/sofa.png" className="w-10 h-10 border border-red-500" alt="sofa-blue" />,
                color: "blue"
            },
            {
                label: "Green",
                icon: <img src="/sofa.png" className="w-14 h-14 object-cover" alt="sofa-green" />,
                color: "green"
            },
            {
                label: "Gray",
                icon: <img src="/sofa.png" className="w-5 h-5 bg-[#0086a4]" alt="sofa-gray" />,
                color: "gray"
            }
        ]
    },
    {
        label: "Legs",
        icon: <img src={leg} alt="legs" className="w-7 h-7" />,
        subOptions: [
            {
                label: "Wooden Stands",
                icon: <img src={leg1} alt="wooden" className="w-5 h-5" />
            },
            {
                label: "Metal Stands",
                icon: <img src={leg} alt="metal" className="w-5 h-5" />
            }
        ]
    }
];

export const Caroptions = [
    {
        label: "Body",
        icon: <IoCarSportOutline size={40} />,
        subOptions: [
            { label: "Red", icon: <IoCarSportOutline size={20} color="red" />, color: "red" },
            { label: "Blue", icon: <IoCarSportOutline size={20} color="blue" />, color: "blue" },
            { label: "Green", icon: <IoCarSportOutline size={20} color="green" />, color: "green" },
            { label: "Gray", icon: <IoCarSportOutline size={20} color="gray" />, color: "gray" }
        ],
    },
    {
        label: "Wheels",
        icon: <TbWheel size={40} />,
        subOptions: [
            { label: "Red", icon: <TbWheel size={20} color="red" />, color: "red" },
            { label: "Blue", icon: <TbWheel size={20} color="blue" />, color: "blue" },
            { label: "Green", icon: <TbWheel size={20} color="green" />, color: "green" },
            { label: "Gray", icon: <TbWheel size={20} color="gray" />, color: "gray" }
        ],
    },
    {
        label: "Chassis",
        icon: <GiCarDoor size={40} />,
        subOptions: [
            { label: "Red", icon: <GiCarDoor size={20} color="red" />, color: "red" },
            { label: "Blue", icon: <GiCarDoor size={20} color="blue" />, color: "blue" },
            { label: "Green", icon: <GiCarDoor size={20} color="green" />, color: "green" },
            { label: "Gray", icon: <GiCarDoor size={20} color="gray" />, color: "gray" }
        ],
    },
];