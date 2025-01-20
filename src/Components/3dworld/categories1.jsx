/** @format */

import React, { useState } from "react";
import { FaCube, FaVrCardboard } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCollage from "./categoryCollage";
import InteractiveModelModal from "./modalFor3D";
import weaponImage from "../../assets/GLBs/weapon.png";
import video1 from "../../assets/ARVideos/1.mp4";
import video2 from "../../assets/ARVideos/2.mp4";
import video3 from "../../assets/ARVideos/3.mp4";
import video4 from "../../assets/ARVideos/4.mp4";
import video5 from "../../assets/ARVideos/5.mp4";
import video6 from "../../assets/ARVideos/6.mp4";

const CategoriesShowcase = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const categoryOneItems = [
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
        { media: weaponImage, description: "Futuristic Tank", isVideo: false },
    ];

    const categoryTwoItems = [
        { media: video1, description: "Augmented Reality Video", isVideo: true },
        { media: video6, description: "Augmented Reality Video", isVideo: true },
        { media: video2, description: "Augmented Reality Video", isVideo: true },
        { media: video5, description: "Augmented Reality Video", isVideo: true },
        { media: video3, description: "Augmented Reality Video", isVideo: true },
        { media: video4, description: "Augmented Reality Video", isVideo: true },
    ];

    return (
        <div className="mx-auto p-4 -mt-12">
            <CategoryCollage
                categoryTitle="3D Model Explorer"
                items={categoryOneItems}
                Icon={FaCube}
                onOpenModal={handleOpenModal}
            />
            <CategoryCollage
                categoryTitle="AR Vision"
                items={categoryTwoItems}
                Icon={FaVrCardboard}
            />
            <InteractiveModelModal open={modalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default CategoriesShowcase;
