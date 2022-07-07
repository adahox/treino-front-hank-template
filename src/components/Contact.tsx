import React from "react";
import { ContactLabel } from "./ContactLabel";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

export function Contact() {
    return (
        <section className="block overflow-x-clip px-5 lg:px-[100px] w-full lg:max-h-[1040px]">
            <div>
                <h4 className="font-bold text-xx-large text-primary-700 opacity-5 py-3 lg:-ml-36">
                    Contact Us
                </h4>
            </div>
            <div className="flex md:pb-10 flex-col lg:flex-row flex-1 w-full md:-mt-40 gap-4">
                <div className="lg:max-w-[751px] w-full">
                    <h5 className="text-center sm:text-left text-x-medium">
                        Send a message
                    </h5>
                    <form action="#" className="drop-shadow-xl rounded-lg mt-9 bg-primary-900 flex lg:max-h-[610px] w-full lg:max-w-[648px] px-5 md:px-[70px] pt-[67px] pb-5 md:pb-[70px] flex-col">
                        <label htmlFor="email" className="mb-1 text-primary-100 font-semibold">
                            Enter your email
                        </label>
                        <input className="w-full sm:max-w-[343px] h-10 rounded-sm" type="email" id="email" name="email" />

                        <label htmlFor="message" className="mt-7 mb-1 text-primary-100 font-semibold">
                            Enter your message
                        </label>
                        <textarea className="w-full h-60 rounded-sm" id="message" name="message" />

                        <button className='mt-12 w-full sm:w-60 font-bold rounded text-primary-900 py-1 bg-primary-200'>
                            Send Message
                        </button>
                    </form>
                </div>
                <div>
                    <h5 className="text-center sm:text-left text-x-medium">
                        Contact Info
                    </h5>
                    <div className="drop-shadow-xl mt-9 rounded-t-lg bg-primary-900">
                        <h6 className="text-center md:text-left font-bold max-text-[28px] text-primary-200 py-[26px] px-[34px]">
                            Follow us on social media!
                        </h6>
                        <div className="flex flex-col w-full bg-white py-[26px] px-[34px]">
                            <div className="flex flex-col">
                                <ContactLabel icon={<InstagramIcon />} text="@Hawk_Industries" />
                                <ContactLabel icon={<LinkedinIcon />} text="Hank Industries" />
                                <ContactLabel icon={<YoutubeIcon />} text="Hank Indutries" />
                                <ContactLabel icon={<FacebookIcon />} text="Hawk Industries" />
                                <ContactLabel icon={<MailIcon />} text="Hank@industries.com" />
                                <ContactLabel icon={<PhoneIcon />} text="111-1111-111-1" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}