import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { FaArrowTrendUp, FaBusinessTime, FaCode, FaCompassDrafting, FaCubesStacked, FaDatabase, FaFileCircleQuestion, FaSignature, FaTableColumns } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { architectures, databases, frameworks, langs, methodologies, tools } from '@/data';
import { FaTools } from 'react-icons/fa';
import TagCloud from './ui/TagCloud';


interface IconItem {
  title: string;
  icon: IconType;
}

interface IconGrouperProps {
  icons: IconItem[];
}

const IconGrouper: React.FC<IconGrouperProps> = ({ icons }) => {
  if (!Array.isArray(icons)) {
    console.error('IconGrouper: icons prop must be an array');
    return null;
  }

 return (
    <div className='flex justify-around items-center gap-2 w-full overflow-auto flex-wrap'>
      {icons.map((item, index) => (
        <div key={index} className='group relative flex'>
        <div className='text-3xl h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] text-yellow-500 hover:text-white' key={index}>
        <item.icon />
        </div>
        <div className="absolute top-5 max-h-8 text-ellipsis -inset-1 scale-0 rounded overflow-auto bg-gray-800/90 p-2 text-xs text-white group-hover:scale-100 z-50">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
    
    const items = [
    {
        title: "Skills",
    },
    {
        title: "Programming Languages",
        description: "Extensive experience in developing robust, efficient code across various platforms",
        header: <IconGrouper icons={langs} />,
        icon: <FaCode className="h-4 w-4 text-yellow-500" />,
    },
    {
        title: "Frameworks",
        description: "Experienced in utilizing diverse frameworks to accelerate development and enhance application functionality.",
        header: <IconGrouper icons={frameworks} />,
        icon: <FaCubesStacked className="h-4 w-4 text-yellow-500" />,
    },
    {
        title: "Databases",
        description: "Strong expertise in database design, management, and optimization. Proficient in both SQL and NoSQL databases.",
        header: <IconGrouper icons={databases} />,
        icon: <FaDatabase className="h-4 w-4 text-yellow-500" />,
    },   
    {
        title: "Architecture",
        description: "Proven ability to design and implement scalable, robust software architectures.",
        header: <TagCloud tags={architectures} />,
        icon: <FaCompassDrafting className="h-4 w-4 text-yellow-500" />,
    },
    {
        title: "Tools/Cloud",
        description:
        "Proficient in a wide range of development tools and platforms.",
        header: <IconGrouper icons={tools} />,
        icon: <FaTools className="h-4 w-4 text-yellow-500" />,
    },
    {
        title: "Methodologies",
        description: "Well-versed in modern software development methodologies.",
        header: <TagCloud tags={methodologies} />,
        icon: <FaBusinessTime className="h-4 w-4 text-yellow-500" />,
    }
   
    ];

  return (
    <section className="min-h-screen w-full flex md:items-center justify-center left-0 top-0 text-center overflow-auto lg:py-0 py-12" id="skills">
            <BentoGrid className="mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 5 ? "lg:col-span-2 md:col-span-1" : ""}
                />
            ))}
            </BentoGrid>
    </section>
  )
}

export default Skills