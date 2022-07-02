export function Footer() {
    return (
        <section className="flex w-full flex-row h-full max-h-[336px] bg-white  pb-[42px] px-[53px]">
            <div>
                <h6 className="text-x-large text-primary-900 font-bold opacity-5">
                    Hawk Industries
                </h6>
                <div className="flex flex-row justify-around -mt-9">
                    <div className="flex flex-col">
                        <strong className="pt-2 pb-6">
                            About
                        </strong>
                        <span className="text-sm font-light">
                            <a href="">
                                Who We Are
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Our Team
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Careers
                            </a>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong className="pt-2 pb-6">
                            About
                        </strong>
                        <span className="text-sm font-light">
                            <a href="">
                                Latest
                            </a>

                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Trending
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Most Popular
                            </a>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <strong className="pt-2 pb-6">
                            Legal
                        </strong>
                        <span className="text-sm font-light">
                            <a href="">
                                Terms of Use
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Terms & Conditions
                            </a>
                        </span>
                        <span className="text-sm font-light">
                            <a href="">
                                Privacy Policy
                            </a>
                        </span>
                    </div>
                </div>
                <div className="pl-20 mt-8 text-xs">
                    © Hawk Industries 2022.
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-center pl-6 mt-6">
                <h6 className="text-base text-primary-800 font-bold">
                    Subscribe to our newsletter to receive news!
                </h6>
                <div className="rounded-lg bg-gradient-to-r from-[#262626] to-[#4D4D4D] px-9 py-[32px] w-full max-w-[443px]">
                    <label htmlFor="mail" className="block text-primary-100 text-sm mb-2">
                        Enter your email
                    </label>
                    <div className="flex flex-row flex-1">

                        <input type="mail" id="mail" name="mail" className="w-full max-w-[241px] h-10 rounded-sm" />
                        <button className='w-full max-w-60 font-bold rounded-r-md max-text-[12px] transition duration-200 hover:bg-primary-200 hover:text-primary-800 text-primary-100 py-1 bg-primary-900'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}