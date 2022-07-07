import React from "react";
import { GamesCard } from "./GamesCard";
import GearIcon from "./icons/Gear";
import PersonIcon from "./icons/Person";
import SettingsIcon from "./icons/Settings";


export function GamesTechnology() {
    return (
        <section className='py-2 px-2  w-full lg:flex-1 lg:max-h-[1040px] lg:py-48 bg-white lg:px-[7.5rem]'>
            <h2 className='text-center text-2xl font-bold lg:text-left md:text-5xl'>
                Advanced technology for gamers
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mt-20 lg:mt-[151px]">
                <GamesCard
                    title="Friends"
                    message="We offer an amazing community of gamers that is constantly growing in numbers. You can find people with your simillar interests in various video game genres and play together, chat and exchange ideas."
                    icon={<PersonIcon />}
                />
                <GamesCard
                    title="Efficiency"
                    message="Our Machine Learning technology carefully  analyzes your behavior for patterns and recommends video games that you might like based on the games you’re already playing. That way you save time and have a general idea of what to play next!"
                    icon={<GearIcon />}
                />
                <GamesCard
                    title="Freedom"
                    message="Our software is fully customizable with shortcuts, themes, and various other options. You are in complete control and you can modify it to suit your taste.We don’t force you to have our software look a certain way. It’s your canvas!"
                    icon={<SettingsIcon />}
                />
            </div>
        </section>
    );
}