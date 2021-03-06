import React from "react";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { GamesTechnology } from "../components/GamesTechnology";
import { StartPage } from "../components/StartPage";

export function Home() {

    return (
        <main className='lg:mx-auto flex lg:flex-1 flex-col w-full h-screen bg-primary-100 lg:max-w-[1440px] pt-14'>
            <StartPage />
             <GamesTechnology />
            <Contact />
            <Footer /> 
        </main>
    );
}
