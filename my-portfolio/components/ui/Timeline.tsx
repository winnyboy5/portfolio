import React from 'react';
import Image from 'next/image'
import { TbSquareRoundedArrowLeftFilled } from 'react-icons/tb';
import { HiBriefcase } from 'react-icons/hi2';

interface Job {
  company: string;
  location: string;
  position: string;
  duration: string;
  current?: boolean;
  logo?: string;
}

interface TimelineItemProps extends Job {}

const TimelineItem: React.FC<TimelineItemProps> = ({ company, location, position, duration, current, logo }) => (
  <li className="mb-10 ms-10">
    <span className="absolute flex items-center justify-center w-12 h-12 bg-black-100 rounded-full -start-3 ring-1 ring-yellow-200 dark:ring-yellow-200 dark:bg-black-100 -ml-3">
        {logo ? 
        (
            <Image
            src={logo}
            width={28}
            height={28}
            alt={company}
            style={{objectFit: "contain"}}
            loading="lazy"
            className='rounded-sm'
            />
        ):(
            <HiBriefcase className='text-yellow-500 text-2xl' />
        )
    }
      
    </span>
    <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
      {position} at {company} {current && <div className="bg-black-100 text-yellow-500 text-sm font-medium -mt-2 px-2.5 py-0.5 rounded backdrop-filter backdrop-blur-sm dark:bg-yellow-300 dark:text-black-100 ms-3 flex items-center"> <TbSquareRoundedArrowLeftFilled className='mr-1' /> <span className="hidden lg:block">Current</span> </div>}
    </h3>

    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{duration}</time>
    <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">{location}</p>
  </li>
);

interface TimelineProps {
  workExperience: Job[];
}

const Timeline: React.FC<TimelineProps> = ({ workExperience }) => {
  return (
    <ol className="relative border-s border-dashed border-gray-200 dark:border-yellow-500">
      {workExperience.map((job, index) => (
        <TimelineItem
          key={index}
          company={job.company}
          location={job.location}
          position={job.position}
          duration={job.duration}
          current={job.current}
          logo={job.logo}
        />
      ))}
    </ol>
  );
};

export default Timeline;