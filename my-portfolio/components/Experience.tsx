"use client";
import React from 'react'
import Timeline from './ui/Timeline';
import { experiences } from '@/data';


const Experience = () => {
  return (
    <section className='min-h-screen w-full flex items-center lg:items-center justify-center text-justify overflow-auto' id="experience">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center p-10'>
                <h2 className='text-5xl sm:text-5xl lg:text-7xl xl:text-8xl mb-3 text-yellow-500'>Work Experience</h2>
                <Timeline workExperience={experiences} />
            </div>
            
    </section>
  )
}

export default Experience
