import React from "react";
import { Nav } from './Nav';

function getImageUrl() {
    return new URL(`../assets/soldado.webp`, import.meta.url).href
  }

export function StartPage() {
    return (
        <>
            <Nav />
            <section className='px-5 pb-6 lg:pb-0 grid md:grid-cols-2 max-h-[985px] h-full lg:items-center items-start'>
                <div className="flex-row justify-center pt-28 lg:pt-0  h-full lg:h-auto  lg:items-center">
                    <h1 className='text-center md:text-left font-bold text-x-large text-primary-700'>
                        We create gaming breakthroughs.
                    </h1>
                    <p className='text-center md:text-left font-medium text-primary-700'>
                        Hawk Industries is a company that inspires new ways to play games by combining innovative software with an easy to use interface.
                    </p>
                    <div className="flex flex-col  md:flex-row gap-4 mt-14">
                        <button className='shadow-lg shadow-primary-700/40 border border-primary-900 font-bold text-primary-100 rounded bg-primary-900 px-[53px] py-4 hover:bg-primary-200 transition duration-150 hover:border-primary-200 hover:text-primary-700'>See Products</button>
                        <button className='shadow-lg shadow-primary-700/20 border border-primary-200 font-bold rounded text-primary-900 px-[53px] py-4 bg-primary-200'>Contact Us</button>
                    </div>
                </div>
                <div className='hidden sm:h-full md:block w-full sm:ml-6'>
                    <img width="100%" height="100%" alt="soldado" src={getImageUrl()} />
                </div>
            </section>
        </>
    );
}