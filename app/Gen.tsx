"use client";

import Image from "next/image";
import  { useState } from "react";

interface GenProps {
    imageSrc: number; // Adjust the type based on your requirements
    setShowGen: React.Dispatch<React.SetStateAction<boolean>>;
    isHero: boolean; // Adjust the type based on your requirements
    setIsHero: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gen: React.FC<GenProps> = ({ imageSrc, setShowGen, isHero, setIsHero }) => {
    const hero_images = ["/idan.png", "/roey.png", "/ziv.png"];
    const hero_detail = [" הוא זמר־יוצר ושחקן ישראלי וחייל שנפצע בעת לחימה על המדינה",
        "היה קצין צה\"ל שנהרג בקרב בינת ג'בייל במלחמת לבנון השנייה," +
        " לאחר שזינק על רימון יד כדי להציל את חיי חייליו. שירת באותה עת כסגן מפקד" +
        " גדוד 51 של חטיבת גולני. על מעשה זה הוענק לו לאחר מותו עיטור העוז.",
        "שירת כקצין בחטיבת גבעתי, נפצע במהלך הלחימה ברצועת עזה ב-2012 ואיבד את ידו השמאלית."];
    const horror_images = ["/image1.png", "/image2.png", "/image3.png"];
    const horror_detail = ["רומי גונן בת ה-23 נחטפה מפסטיבל נובה ומוחזקת בעזה ",
        "מפעל חייו של אלכס דנציג, בן לניצולי שואה, הוא בהדרכת משלחות בפולין, " +
        "לספר ולזכור את מה שקרה שם. לפני שלושה שבועות הוא נחטף מביתו בקיבוץ ניר עוז וכעת הוא נמצא בשבי החמאס. נספר " +
        "על העשייה החשובה שלו עם בתיה דביר, חברה קרובה והיסטוריונית שכתבה עימו מדריכים לטיול בפולין",
        "שירי ביבס, שנחטפה ביחד עם בעלה ירדן וילדיהם אריאל וכפיר לשבי"];

    return (
        <div>
            <p>
                {isHero? hero_detail[imageSrc]: horror_detail[imageSrc]}
            <Image
                src={isHero? hero_images[imageSrc]: horror_images[imageSrc]}
                alt="Picture"
                width={320}
                height={320}
                priority
            />
            </p>
            {/* Add any additional content or logic for your Gen component */}
        </div>
    );
};

export default Gen;