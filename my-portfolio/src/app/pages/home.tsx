import Image from 'next/image'
import AnimatedBackground from "../components/animatedbackground";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import astronaut from "../../../public/assets/astronaut.json";

const HomePage = () => {
    return (
        <div className="w-full h-full py-8 md:py-5 md:px-5">
            <div className="h-full items-center justify-stretch flex flex-col md:flex-row">
                <motion.div className="md:z-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', ease: "easeInOut", delay:1 }}
                    viewport={{once:true}}
                >
                    <AnimatedBackground />
                </motion.div>
                <div className="-z-5 md:mt-5">
                    <motion.div className="w-2/3 md:w-full relative m-auto"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', ease: "easeInOut" }}
                        viewport={{once:true}}
                    >
                        <Image
                            className="rounded-full profileImg"
                            src="/assets/381af335a60e4432b9bd42cd2e79d7cc.jpg"
                            alt="Picture of the author"
                            fill
                            sizes="100%"
                            priority
                        />
                    </motion.div>
                </div>
                 <motion.div className="-z-5 lg:w-full md:w-2/3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', ease: "easeInOut", delay:1 }}
                    viewport={{once:true}}
                 >
                    <Lottie animationData={astronaut} loop={true} />
                </motion.div>
            </div>
           
        </div>
    );
}

export default HomePage;