"use client";

import AccordionComp from "@/Components/AccordianComp";
import AnimatedButton from "@/Components/AnimatedButton";
import Tabs from "@/Components/Tab";
import Topsection from "@/Components/TopSection";
import { faqData, offers, redeemData, specialOfferFAQ, termsData } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";



export default function SpecialOfferPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const tabData = [
        {
            label: "Terms&Conditions",
            content: (
                <div className="w-full">
                    {termsData.map((item, index) => (
                        <AccordionComp key={index} title={item.title}>
                            {item.content}
                        </AccordionComp>
                    ))}
                </div>
            ),
        },
        {
            label: "FAQs",
            content: (
                <div className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionComp key={index} title={item.title}>
                            {item.content}
                        </AccordionComp>
                    ))}
                </div>
            ),
        },
        {
            label: "Redeem",
            content: (
                <div className="w-full">
                    {redeemData.map((item, index) => (
                        <AccordionComp key={index} title={item.title}>
                            {item.content}
                        </AccordionComp>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <>
            <Topsection title="Special Offer" image="/aboutbg.png" />
            <div className="tw:z-20 tw:relative">

                <div className="section-title tw:text-center tw:mb-12 tw:flex tw:items-center tw:flex-col">
                    <h3 className="wow fadeInUp">Special Offers</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Special Offers Just for You
                    </h2>
                    <p className="wow fadeInUp tw:lg:text-[15px] tw:md:text-[13px] tw:text-[11px] tw:max-w-3xl tw:text-center tw:text-gray-800" data-wow-delay="0.2s">
                        Grab our limited-time deals and enjoy amazing savings!
                    </p>
                </div>

                <section className="tw:grid container tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6 tw:lg:mt-24
                tw:md:mt-16 tw:mt-10 tw:mb-12 ">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="tw:bg-amber-50/90 tw:rounded-lg tw:shadow-sm tw:overflow-hidden tw:flex tw:flex-col tw:transition-shadow tw:duration-300 hover:tw:shadow-md"
                        >
                            <div className="tw:relative tw:overflow-hidden tw:h-52">
                                <img
                                    src={offer.image}
                                    alt={offer.headline}
                                    className="tw:w-full tw:h-full tw:object-cover tw:rounded-t-xl tw:transition-transform tw:duration-500 hover:tw:scale-105"
                                />
                                {offer.savings && (
                                    <span className="tw:absolute tw:top-3 tw:right-3 tw:bg-red-500 tw:text-white tw:text-xs tw:font-semibold tw:px-3 tw:py-1 tw:rounded-full tw:shadow">
                                        Save {offer.savings}
                                    </span>
                                )}
                            </div>
                            <div className="tw:p-4 tw:flex-1 tw:flex tw:flex-col tw:justify-between">
                                <div className="tw:space-y-2 tw:mt-2">
                                    <span className="tw:md:text-lg tw:text-base tw:lg:text-xl tw:font-semibold tw:text-gray-700 ">{offer.headline}</span>
                                    <p className="tw:text-gray-600 tw:text-sm tw:pt-2">{offer.description}</p>
                                </div>
                                <div className="tw:flex tw:flex-row tw:items-center tw:justify-between">
                                    <div className=" tw:flex tw:items-center tw:gap-3">
                                        <span className="tw:md:text-lg tw:text-base tw:lg:text-xl tw:font-semibold tw:text-green-600">
                                            {offer.price}
                                        </span>

                                        <span className="tw:lg:text-sm tw:md:text-xs text-[10px] tw:text-gray-500 tw:line-through tw:font-medium">
                                            {offer.discount}
                                        </span>


                                    </div>
                                    <span className="tw:text-xs tw:text-gray-500 tw:font-medium ">{offer.validity}</span>

                                </div>



                            </div>
                        </div>
                    ))}
                </section>

                <section className="tw:pb-12 tw:space-y-10 tw:flex tw:flex-col tw:pt-12 tw:bg-[#EBFBFF] tw:lg:px-32 tw:md:px-16 tw:px-6">
                    <span className="tw:text-3xl tw:font-semibold tw:text-gray-700 tw:text-center ">
                        Details & FAQs
                    </span>
                    <div className="tw:flex tw:md:flex-row tw:flex-col tw:gap-y-4 tw:items-center tw:justify-between tw:md:items-start tw:md:gap-x-7">
                        <div className="tw:md:w-1/2 w-full">
                            <Tabs
                                tabs={tabData}
                                defaultTab="Terms&Conditions"
                            />
                        </div>

                        <motion.div
                            className="tw:md:w-1/2 tw:w-full tw:flex tw:justify-center tw:items-center"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            <div className="tw:relative tw:w-full tw:h-full tw:rounded-lg tw:overflow-hidden tw:shadow-md tw:group">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/new-images/trips/image-6.jpeg"
                                    alt="FAQ Image"
                                    className="tw:w-full tw:h-full tw:rounded-lg tw:group-hover:scale-125 tw:object-cover tw:transition-transform tw:duration-500 tw:ease-in-out"
                                />


                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="tw:absolute tw:inset-0 tw:bg-black/50 tw:flex tw:flex-col tw:items-start tw:justify-center tw:rounded-lg tw:cursor-pointer tw:text-center tw:text-white tw:px-4 tw:space-y-5"
                                >
                                    <motion.div
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="tw:absolute tw:top-4 tw:right-4 tw:flex tw:items-center tw:space-x-2 tw:text-[#D5E880]"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="tw:w-5 tw:h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 18.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                            />
                                        </svg>
                                        <span className="tw:text-sm">Top Destination</span>
                                    </motion.div>
                                    <span className="tw:lg:text-3xl tw:md:text-2xl tw:text-xl tw:font-semibold">Discover Bali</span>
                                    <span className="tw:text-xs tw:md:text-sm tw:lg:text-base tw:opacity-90">
                                        7 Days, 6 Nights — starting from $999
                                    </span>
                                    <div className="tw:mt-2 tw:px-4 tw:py-2 tw:bg-[#D5E880] tw:rounded-md tw:text-black tw:hover:bg-[#c1d86a] tw:text-sm hover:tw:bg-blue-600 tw:transition">
                                        Book Now
                                    </div>

                                </motion.div>
                            </div>
                        </motion.div>

                    </div>


                </section>


                <div className="tw:fixed tw:bottom-6 tw:right-5 tw:transform tw:px-6 tw:py-3  tw-font-semibold tw:z-50 ">
                    <AnimatedButton label="Book Now" onClick={() => { }} />                </div>


            </div>

        </>

    );
}
