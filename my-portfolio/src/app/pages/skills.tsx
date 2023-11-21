import Image from 'next/image'
import stacks from '../lib/placeholder-data';

const SkillsPage = () => {

    return (
        <>
            <div className="w-full h-full p-5 overflow-y-auto">
                <div className="columns-3 gap-4 place-content-center">
                    <div className="bg-gradient-to-r from-[#1b295e]/60 to-[#1b295e]/30 p-10 rounded-lg h-3/4">
                        <div className="text-[#f8e1d4] lg:text-6xl md:text-5xl">
                            About Me
                        </div>
                        <div className="text-lg text-justify font-bold text-[#f8e1d4]">
                            Greetings! I&apos;m{" "}
                            <span className="text-accent">
                                Aswin Krishnamoorthy
                            </span>
                            , a seasoned{" "}
                            <span className="text-accent">
                                Full-Stack Developer
                            </span>{" "}
                            with 10+ years of experience in crafting powerful
                            software solutions. Proficient in React, Angular,
                            Node.js, and Django, I excel in solving complex
                            problems to deliver user-friendly applications.
                            Let&apos;s connect and explore exciting opportunities in
                            the world of software development!
                        </div>
                    </div>
                    {stacks.map(stack => (
                        <div className={`bg-gradient-to-r from-[#1b295e]/60 to-[#1b295e]/30 rounded-lg flex flex-col items-center ${stack.grid}`} key={stack.category}>
                        <div className="text-lg font-bold text-[#f8e1d4] rounded-lg p-2 flex items-center gap-4 w-full justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-2 rounded-full bg-[#fb6190]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            {stack.category}
                        </div>
                        <div className="flex flex-wrap justify-start w-full gap-2 p-2">
                            {stack.skills.map(skill => (
                                skill?.icon?(<Image
                                    key={skill.title}
                                    className='saturate-200 rounded-lg p-2'
                                    src={"/assets/"+ skill.icon}
                                    width={48}
                                    height={48}
                                    alt={skill.title}
                                />):  (<div key={skill.title} className="badge badge-lg badge-accent">{skill.title}</div>)
                            ))}
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </>
    );
};

export default SkillsPage;
