import React from "react";
import { ReactNode } from "react";

interface GamesCardProps {
    title: string;
    message: string;
    icon: ReactNode
}
export function GamesCard(props: GamesCardProps) {
    return (
        <div className='relative rounded-md flex-col text-center bg-primary-800 w-full max-w-96 h-[440px] flex items-center px-8 mb-10'>
            <span className="absolute top-[-50px] shadow-lg shadow-primary-300/30 rounded-full bg-gradient-to-r from-primary-200 to-primary-100 p-7">
                {props.icon}
            </span>
            <h3 className="font-bold mt-24 text-primary-100 py-4">{props.title}</h3>
            <p className="font-medium text-primary-300">
                {props.message}
            </p>
        </div>
    );
}