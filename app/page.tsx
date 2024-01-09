'use client';

import React, { useState } from 'react';
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT, GENERATE } from '@/lib/config';
import Image from 'next/image';

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    // Update the state to show the image
    setShowImage(true);
  };

  return (
      <WebsiteScreen>
        <div className="grid">
          <div className="center padding-2 text-xl">
            <span>{COURSE_WELCOME_TEXT}</span>
          </div>
          <div className="center padding-2">
            {showImage && (
                <Image
                    src="/huji.png"
                    alt="HUJI Logo"
                    width={320}
                    height={100}
                    priority
                />
            )}

            <div className="grid">
              {GENERATE.map((gen) => (
                  <div key={gen.slug} className={`${gen.cssClass} margin-bottom-1 padding-1`}>
                    <h2>{gen.title}</h2>
                    <p>{gen.description}</p>
                    <button className="button" onClick={handleClick}>
                      Generate
                    </button>
                  </div>
              ))}
            </div>
          </div>
          <div>
            {/* ... Your existing content */}
          </div>
        </div>
      </WebsiteScreen>
  );
}
