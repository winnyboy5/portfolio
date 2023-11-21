import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-screen fixed top-0 left-0">
            <div className="h-screen flex flex-col justify-center">
            
                <ul className="menu rounded-box">
                    <motion.li
                        whileHover={{scale: 1.5, rotate: [0, 0, 360, 360, 360]}}
                        whileTap={{ scale: 0.9 ,rotate: [0, 0, 360, 360, 360]}}
                    >
                        <Link href="/#home">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{scale: 1.5, rotate: [0, 0, 360, 360, 360]}}
                        whileTap={{ scale: 0.9 ,rotate: [0, 0, 360, 360, 360]}}
                    >
                        <Link href="/#skills">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </motion.li>
                   <motion.li
                        whileHover={{scale: 1.5, rotate: [0, 0, 360, 360, 360]}}
                        whileTap={{ scale: 0.9 ,rotate: [0, 0, 360, 360, 360]}}
                    >
                        <Link href="/#contact">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
