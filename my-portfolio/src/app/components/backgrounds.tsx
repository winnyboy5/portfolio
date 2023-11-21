import { motion } from 'framer-motion';
import Image from 'next/image';


const Backgrounds = () => {
    return (
        <>
        <motion.div 
            className="absolute inset-0 -z-10"
            initial={{y: 0}}
            whileInView={{
                y: [-100, -80,-60, -40,-20,0],
                transition: { duration: 1, ease: "easeIn" },
            }}

        >
                <Image
                    className="bg-cover bg-top w-full -z-10"
                    src="/assets/layer-1.png"
                    alt="background image"
                    fill
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />
            </motion.div>
            <div className="absolute inset-0 -z-10">
                <Image
                    className="bg-cover bg-center w-full -z-10"
                    src="/assets/layer-2.png"
                    alt="background image"
                    quality={100}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="absolute inset-0 -z-10">
                <Image
                    className="bg-cover bg-bottom w-full -z-10"
                    src="/assets/layer-3.png"
                    alt="background image"
                    fill
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />
            </div>
            </>
    );
};

export default Backgrounds;
