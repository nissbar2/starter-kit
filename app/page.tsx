import React from 'react';
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
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
            </div>
        </WebsiteScreen>
    );
}
