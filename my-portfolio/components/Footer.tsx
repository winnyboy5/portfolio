"use client";
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import BorderButton from "./ui/BorderButton";
import dynamic from 'next/dynamic';

const LottieWrapper = dynamic(() => import('./ui/LottieWrapper'), { ssr: false });

const createLottieOptions = (animationData: any) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' as const }
});

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-40 md:pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading text-5xl lg:max-w-[60vw] mb-5">
                    Wanna reach out to me today !!!
                </h1>
                <a href="mailto:winnyboy5@gmail.com">
                    <BorderButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        iconPos="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Aswin Krishnamoorthy
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-100 bg-white rounded-lg border border-black-300"
                        >
                            <a href={info.link} target="_blank" rel="noopener noreferrer">
                                <LottieWrapper
                                    options={createLottieOptions(info.data)}
                                    height={32}
                                    width={32}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;