"use client";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { TbHome, TbUser } from "react-icons/tb";

const Navbar = () => {
    const menus = [
        {
            name: "Home",
            link: "#home",
            icon: <TbHome />,
        },
        {
            name: "About Me",
            link: "#about",
            icon: <TbUser />,
        },
        {
            name: "Skills",
            link: "#skills",
            icon: <GiSkills />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <MdOutlineWorkHistory />,
        },
    ];

    const handleScroll = (e: any) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="fixed bottom-2 h-16 md:top-2 left-0 mx-auto inset-x-0 w-11/12 sm:w-10/12 md:w-9/12 lg:w-6/12 z-30">
            <ul className="flex gap-14 sm:gap-5 items-center justify-center bg-yellow-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-yellow-500 p-5 rounded-3xl mx-auto border-2 border-black-100/20">
                {menus.map((menu) => (
                    <li key={menu.name}>
                        <a className="group" href={menu.link} onClick={handleScroll}>
                            <div className="flex items-center gap-2 font-semibold">
                                {menu.icon} <h4 className="hidden sm:block">{menu.name}</h4>
                            </div>
                            <div className="h-0.5 w-0 rounded-sm bg-yellow-500 group-hover:w-[90%] ease-in-out delay-300 transition-all"></div>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
