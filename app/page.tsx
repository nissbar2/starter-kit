import React from 'react';
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT, GENERATE } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import Gen from './Gen';
import Start from './Start';


export default function Home() {
    return (
        <WebsiteScreen>
            <div className="grid">
                <div className="center padding-2 text-xl">
                    <span>{COURSE_WELCOME_TEXT}</span>
                </div>

                <div className="center padding-2">
                    <Start/>;
                </div>
                {/*<div className="grid">*/}
                {/*    {GENERATE.map((gen) => (*/}
                {/*        <div key={gen.slug} className={`${gen.cssClass} margin-bottom-1 padding-1`}>*/}
                {/*            <h2>{gen.title}</h2>*/}
                {/*            <p>{gen.description}</p>*/}
                {/*            /!* Include the generated content directly in the JSX *!/*/}
                {/*            <Link href={`.${gen.slug}`}>*/}
                {/*                <a className="button" onClick={handleGenerateClick}>*/}
                {/*                    Generate*/}
                {/*                </a>*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </WebsiteScreen>
    );
}
