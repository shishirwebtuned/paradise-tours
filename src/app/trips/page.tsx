"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Topsection from "@/Components/TopSection";
import { tripsData } from "@/data/data";
import { useRouter } from "next/navigation";

export default function TripsPage() {
    const [selectedTrip, setSelectedTrip] = useState<number | null>(null);
    const router = useRouter();

    const handleNavigate = (id: number) => {
        router.push(`/trips/${id}`);
    }

    return (
        <>
            <Topsection title="Trips" image="/new-images/trips/image-5.jpg" />

            <div className="tw:pt-0 tw:z-20 tw:pb-16 tw:text-center tw:relative tw:lg:px-32 tw:md:px-16 tw:px-6">

                <div className="section-title tw:text-center tw:mb-12 tw:flex tw:items-center tw:flex-col">
                    <h3 className="wow fadeInUp">Our Trips</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Unforgettable Journeys, Day by Day
                    </h2>
                    <p className="wow fadeInUp tw:lg:text-[15px] tw:md:text-[13px] tw:text-[11px] tw:max-w-3xl tw:text-center tw:text-gray-800" data-wow-delay="0.2s">
                        Browse through our curated trips featuring stunning destinations,
                        detailed itineraries, and exclusive highlights. Explore what’s
                        included, get a day-by-day breakdown, and plan your adventure with
                        ease. Ready to go? Enquire or book your trip today.
                    </p>
                </div>

                <div className="tw:grid tw:md:grid-cols-3 tw:sm:grid-cols-2 tw:gap-6 tw:mt-20">
                    {tripsData.map((trip) => (
                        <div
                            key={trip.id}
                            className="tw:relative tw:overflow-hidden tw:rounded-xl tw:group tw:h-[280px]"
                        >
                            <div className="tw:w-full tw:h-full tw:overflow-hidden">
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    width={400}
                                    height={250}
                                    className="tw:w-full tw:h-full tw:object-cover tw:transition-transform tw:duration-500 tw:group-hover:scale-110"
                                />
                            </div>

                            <div className="tw:absolute tw:bottom-0 tw:left-0 tw:w-full tw:p-4 tw:bg-gradient-to-t tw:from-black/70 tw:to-transparent">
                                <motion.div
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                    className="tw:flex tw:flex-col tw:space-y-3 tw:items-start"
                                >
                                    {/* Text content slides up */}
                                    <motion.div
                                        variants={{
                                            rest: { y: 40 },
                                            hover: { y: -5 },
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="tw:flex tw:flex-col tw:space-y-1 tw:text-left "
                                    >
                                        <span className="tw:text-white tw:text-lg tw:md:text-2xl tw:font-semibold">
                                            {trip.title}
                                        </span>
                                        <span className="tw:text-gray-200 tw:text-sm tw:md:text-base tw:line-clamp-2">
                                            {trip.shortDescription}
                                        </span>
                                    </motion.div>

                                    <motion.span
                                        variants={{
                                            rest: { opacity: 0, y: 20 },
                                            hover: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="tw:bg-[#c1d86a] tw:text-gray-900 tw:font-medium tw:px-4 tw:py-2 tw:rounded-md tw:shadow-md tw:w-[130px] tw:cursor-pointer tw:mt-2"
                                        onClick={() => handleNavigate(trip.id)}
                                    >
                                        Details
                                    </motion.span>
                                </motion.div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </>
    );
}
