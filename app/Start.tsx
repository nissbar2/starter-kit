"use client";

import React, { useState } from "react";
import { GENERATE } from "@/lib/config";
import Link from "next/link";
import Gen from "@/app/Gen";

const Start = () => {
    const [showGen, setShowGen] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<number>(0);
    const [isHero, setIsHero] = useState<boolean>(false);
    const handleGenerateClick = (gen: any) => {
        // Update the state to show the Gen component
        setShowGen(true);
        setImageSrc(imageSrc === 2 ? 0 : imageSrc + 1);
        setIsHero(gen.title == "Hero" );
    };

    return (
        <div className="grid">
            {GENERATE.map((gen) => (
                <div key={gen.slug} className={`${gen.cssClass} margin-bottom-1 padding-1`}>
                    <h2>{gen.title}</h2>
                    <p>{gen.description}</p>
                    {/* Use state to conditionally render Gen component */}
                    <a className="button" onClick={() => handleGenerateClick(gen)}>
                        Generate
                    </a>
                </div>
            ))}
            {/* Conditionally render Gen component based on state */}
            {showGen && <Gen imageSrc={imageSrc} setShowGen={setShowGen} isHero={isHero} setIsHero={setIsHero} />}
        </div>
    );
};

export default Start;
