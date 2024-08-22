"use client";
import React from 'react'

const BorderButton = ({title, icon, iconPos, handleClick}:{
    title: string;
    icon?: React.ReactNode;
    iconPos?: string;
    handleClick?: () => void;
}) => {

    const onClickHandler = () => {
        if (handleClick) handleClick();
    };
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10" onClick={onClickHandler}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#eab308_0%,#333333_50%,#eab308_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl`}>
        {iconPos === 'left' && (<span className='mr-2'>{icon}</span>) }
        {title}
        {iconPos === 'right' && (<span className='ml-2'>{icon}</span>) }
    </span>
    </button>
  )
}

export default BorderButton;