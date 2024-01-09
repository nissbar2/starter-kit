"use client";

import Image from "next/image";
import { useState } from "react";

interface GenProps {
    imageSrc: number; // Adjust the type based on your requirements
    setShowGen: React.Dispatch<React.SetStateAction<boolean>>;
    isHero: boolean; // Adjust the type based on your requirements
    setIsHero: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gen: React.FC<GenProps> = ({ imageSrc, setShowGen, isHero, setIsHero }) => {
    const hero_images = ["/idan.png", "/roey.png", "/bezalel.png"];
    const horror_images = ["/huji.png", "/roey.png", "/bezalel.png"];
    return (
        <div>

            <Image
                src={isHero? hero_images[imageSrc]: horror_images[imageSrc]}
                alt="Picture"
                width={320}
                height={320}
                priority
            />
            {/* Add any additional content or logic for your Gen component */}
        </div>
    );
};

export default Gen;