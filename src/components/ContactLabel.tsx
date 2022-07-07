import React, { ReactNode } from "react";

interface ContactLabelProps {
    icon: ReactNode,
    text: string
}

export function ContactLabel(props: ContactLabelProps) {

    return (
        <div className="hover:text-primary-200 flex flex-row justify-start py-3 transition duration-300">
            <a href="#" className="flex items-center">
                <span>{props.icon}</span>
                <p className="text-xs md:font-semibold md:text-[22px] pl-4">{props.text}</p>
            </a>
        </div>
    );
}