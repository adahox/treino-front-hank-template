import React from "react";
export function Footer() {
    return (
        <section className="mt-10 md:mt-0 flex w-full flex-col md:flex-row lg:h-full lg:max-h-[336px] bg-white  pb-[42px] lg:px-[53px]">
            <div className="flex flex-col justify-center">
                <h6 className="text-center md:text-left py-30 text-x-large text-primary-900 font-bold opacity-5">
                    Hawk Industries
                </h6>
                <div className="p-10 md:p-0 flex text-center md:text-left flex-col md:flex-row justify-around -mt-9">
                    <div className="flex flex-col">
                        <strong className="pt-2 md:pt-2 md:pb-6">
                            About
                        </strong>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Who We Are
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Our Team
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Careers
                            </a>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong className="pt-2 md:pt-2 md:pb-6">
                            About
                        </strong>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Latest
                            </a>

                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Trending
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Most Popular
                            </a>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong className="pt-2 md:pt-2 md:pb-6">
                            Legal
                        </strong>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Terms of Use
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Terms & Conditions
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="https://hawk.olharacessivel.com.br">
                                Privacy Policy
                            </a>
                        </span>
                    </div>
                </div>
                <div className="text-center md:text-right md:pl-20 md:mt-8 md:text-xs">
                    © Hawk Industries 2022.
                </div>
            </div>
            <div className="m-10 md:m-0 flex flex-col md:flex-1 justify-center md:pl-6 lg:mt-6 px-4">
                <h6 className="text-center md:text-left text-base text-primary-800 font-bold">
                    Subscribe to our newsletter to receive news!
                </h6>
                <div className="rounded-lg bg-gradient-to-r from-[#262626] to-[#4D4D4D] px-9 py-[32px] w-full lg:max-w-[443px]">
                    <label htmlFor="mail" className="block text-primary-100 text-sm mb-2">
                        Enter your email
                    </label>
                    <div className="flex flex-row flex-1">

                        <input type="mail" id="mail" name="mail" className="w-full lg:max-w-[241px] h-10 rounded-sm" />
                        <button className='w-full max-w-60 font-bold rounded-r-md max-text-[12px] transition duration-200 hover:bg-primary-200 hover:text-primary-800 text-primary-100 py-1 bg-primary-900'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}