import { motion } from "framer-motion";


const item = {
    visible: {
        x: [0, 5,10, -10, -5, 0],
        y: [0, 5,10, -10, -5, 0],
      },
    hidden: { scale: 0, borderRadius: 0, rotate: 0 },
}


const AnimatedBackground = () => {
    return (
        <motion.div
            animate="visible"
            variants={item}
            transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 3
            }}
        >   
            <div className="box w-full h-auto p-0 md:p-5">
                <span className="text-[#f8e1d4] text-2xl lg:text-6xl md:text-4xl 2xl:text-8xl">Hey there, I&apos;m </span><br />
                <span className="text-accent text-3xl lg:text-7xl md:text-5xl 2xl:text-9xl">Aswin Krishnamoorthy</span><br/>
                {/* <span className="text-2xl lg:text-5xl md:text-4xl 2xl:text-7xl">Full-Stack Dev</span> */}
            </div>
        </motion.div>
    );
};

export default AnimatedBackground;
