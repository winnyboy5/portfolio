"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/Highlight";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/GenerateText";
import { FlipWords } from "./ui/PulseText";
import dynamic from 'next/dynamic';

const HeroClient = dynamic(() => import('./ui/HeroClient'), { ssr: false });

const Hero: React.FC = () => {
    const roles: string[] = ["Full Stack Developer", "Front-end Developer"];

    const animationConfig = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: [20, -5, 0] },
        transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
    };

    return (
        <section className="min-h-screen w-full flex items-center justify-center text-center" id="home">
            <div className="relative pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <HeroHighlight>
                <motion.h1
                    {...animationConfig}
                    className="text-4xl px-4 md:text-5xl lg:text-6xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    <span className="mr-2 mb-5 inline-block">Hello! I&apos;m </span>
                    <span className="mr-2 inline-block">
                        <Highlight className="text-black">
                            Aswin Krishnamoorthy
                        </Highlight>
                    </span>
                </motion.h1>
                <div className="mb-5">
                    <TextGenerateEffect
                        words="A"
                        className="mr-2 inline-block text-xl md:text-5xl"
                    />
                    <FlipWords
                        words={roles}
                        className="inline-block text-xl md:text-5xl text-yellow-500 dark:text-yellow-500"
                    />
                    <TextGenerateEffect
                        words="from India"
                        className="ml-2 inline-block text-xl md:text-5xl"
                    />
                </div>
                <motion.div {...animationConfig}>
                    <HeroClient />
                </motion.div>
            </HeroHighlight>
        </section>
    );
};

export default Hero;