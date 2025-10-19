"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Topsection from "@/Components/TopSection";
import { Attraction } from "@/data/type";
import { attractionsData } from "@/data/data";
import { MdAccessTimeFilled } from "react-icons/md";

const categories = ["All", "Nature", "Culture", "Dining"];

const AttractionsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

    const filteredAttractions =
        selectedCategory === "All"
            ? attractionsData
            : attractionsData.filter((a) => a.category === selectedCategory);

    const handleNavigate = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <Topsection title="Attractions" image="/new-images/trips/image-4.jpeg" />

            <div className="tw:pt-0 tw:z-20 tw:pb-16 tw:text-center tw:relative tw:lg:px-32 tw:md:px-16 tw:px-6">

                <div className="section-title tw:text-center tw:mb-12 tw:flex tw:items-center tw:flex-col">
                    <h3 className="wow fadeInUp">Explore Nearby Attractions</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Discover the Best Spots Around You

                    </h2>
                    <p className="wow fadeInUp tw:lg:text-[15px] tw:md:text-[13px] tw:text-[11px] tw:max-w-3xl tw:text-center tw:text-gray-800" data-wow-delay="0.2s">
                        Find the top attractions, scenic spots, cultural landmarks, and dining experiences near your location. Filter by category, check distances, and get directions to plan your perfect visit.
                    </p>
                </div>

                {/* Filter Chips */}
                <div className="tw:flex tw:gap-3 tw:md:gap-4 tw:lg:gap-5 tw:mb-8 tw:flex-wrap tw:pt-14 tw:cursor-pointer">
                    {categories.map((cat) => (
                        <div
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`tw:px-4 tw:py-2 tw:rounded-lg tw:font-medium tw:transition-colors tw:duration-300 ${selectedCategory === cat
                                ? "tw:bg-[#0D3A48] tw:text-white"
                                : "tw:bg-[#D5E880] tw:text-black tw:hover:bg-[#c1d86a]"
                                }`}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                {/* Attractions Grid */}
                <motion.div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:sm:gap-6 tw:gap-5 tw:lg:gap-7 tw:pt-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}>
                    {filteredAttractions.map((attr) => (
                        <motion.div
                            key={attr.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="tw:relative tw:rounded-lg tw:overflow-hidden tw:shadow-md tw:cursor-pointer tw:duration-300 tw:hover:scale-[1.03] tw:hover:shadow-xl tw:transition-all tw:ease-in-out"
                            onClick={() => setSelectedAttraction(attr)}
                        >
                            <Image
                                src={attr.image}
                                alt={attr.name}
                                width={400}
                                height={300}
                                className="tw:w-full tw:h-48 tw:object-cover"
                            />
                            <div className="tw:p-4 tw:bg-white tw:h-full tw:space-y-3 tw:flex tw:flex-col tw:rounded-b-lg tw:shadow-inner">
                                {/* Category Tag */}
                                <span className="tw:lg:text-sm tw:text-xs tw:font-medium tw:text-[#63ab45] tw:tracking-wider tw:text-left  tw:bg-[#63ab45]/20 tw:px-4 tw:py-1 tw:self-start tw:rounded-md">
                                    {attr.category}
                                </span>

                                {/* Attraction Name */}
                                <span className="tw:lg:text-xl tw:md:text-lg text-base tw:font-medium tw:text-gray-700 tw:text-left tw:leading-snug tw:truncate">
                                    {attr.name}
                                </span>

                                {/* Description */}
                                <p className="tw:text-gray-600 tw:lg:text-sm tw:md:text-xs tw:text-[10px] tw:line-clamp-2 tw:text-left ">
                                    {attr.description}
                                </p>

                                {/* Distance / Time */}
                                <span className="tw:text-gray-400 tw:text-xs tw:mt-0 tw:mb-1 tw:flex tw:items-center tw:gap-1">
                                    <MdAccessTimeFilled className="tw:text-gray-600 tw:text-lg" />
                                    {attr.distance}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedAttraction && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="tw:fixed tw:inset-0 tw:bg-black/60 tw:flex tw:items-center tw:justify-center tw:z-60 md:px-0 tw:px-5 tw:md:px-6"
                            onClick={() => setSelectedAttraction(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="tw:bg-white tw:rounded-lg tw:max-w-sm tw:lg:max-w-xl tw:md:max-w-lg tw:w-full tw:overflow-hidden tw:relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedAttraction.image}
                                    alt={selectedAttraction.name}
                                    width={600}
                                    height={400}
                                    className="tw:w-full tw:h-64 tw:object-cover"
                                />
                                <div className="tw:p-6 tw:flex tw:flex-col tw:gap-2">
                                    <span className="tw:lg:text-sm tw:text-xs tw:font-medium tw:text-[#63ab45] tw:tracking-wider tw:text-left  tw:bg-[#63ab45]/20 tw:px-4 tw:py-1 tw:self-start tw:rounded-md">
                                        {selectedAttraction.category}
                                    </span>

                                    <span className="tw:lg:text-xl tw:md:text-lg text-base tw:font-medium tw:text-gray-700 tw:text-left tw:leading-snug tw:truncate">
                                        {selectedAttraction.name}
                                    </span>

                                    <p className="tw:text-gray-600 tw:lg:text-sm tw:md:text-xs tw:text-[10px] tw:line-clamp-2 tw:text-left ">
                                        {selectedAttraction.description}
                                    </p>

                                    <span className="tw:text-gray-400 tw:text-xs tw:mt-0 tw:mb-1 tw:flex tw:items-center tw:gap-1">
                                        <MdAccessTimeFilled className="tw:text-gray-600 tw:text-lg" />
                                        {selectedAttraction.distance}
                                    </span>
                                    <span
                                        onClick={() => handleNavigate(selectedAttraction.directionsUrl)}
                                        rel="noopener noreferrer"
                                        className="tw:mt-4 tw:px-4 tw:py-2 tw:bg-teal-500 tw:text-white tw:rounded-md tw-text-center tw-font-medium tw-transition-colors tw:duration-300 hover:tw:bg-teal-600 tw:cursor-pointer tw:lg:text-sm tw:text-xs"
                                    >
                                        Get Directions
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default AttractionsPage;
