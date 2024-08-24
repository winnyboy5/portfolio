import React from 'react';
import Image from 'next/image'
import { TextGenerateEffect } from './ui/GenerateText';


const About = () => {
  return (
    <section className='min-h-screen w-full flex items-center justify-center text-justify overflow-auto' id="about">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
                <div>
                    <Image
                        src="/img/profile.jpg"
                        width={600}
                        height={600}
                        alt="Anime Me"
                        style={{objectFit: "contain"}}
                        loading="lazy"
                        className='rounded-md'
                        />
                </div>
                    
                <div className='px-5'>
                    <TextGenerateEffect
                        words="ABOUT ME"
                        className="md:text-7xl text-5xl text-yellow-500 dark:text-yellow-500"
                    />
                    
                    <TextGenerateEffect
                        words="Experienced Full Stack / Frontend Developer with 10+ years in Frontend and
        Backend development. Skilled in creating scalable web solutions. Proven
        record of boosting user experiences by 20-35% and cutting company
        costs by 15-35%."
                        className="mr-2 inline-block text-xl"
                    />
                
                </div>
            </div>
    </section>
  )
}

export default About;
