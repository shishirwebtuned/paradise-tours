"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tripsData } from "@/data/data";
import { useParams, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const TripDetailPage = () => {
    const { id } = useParams();
    const trip = tripsData.find((t) => t.id === Number(id));
    const router = useRouter();

    const [openDay, setOpenDay] = useState<number | null>(null);

    if (!trip) return <div className="tw:p-8">Trip not found.</div>;

    return (
        <div className="tw:relative">
            <div className="tw:bg-gray-800 tw:h-[94px]">

            </div>
            <div className="tw:pb-16 tw:p-10">

                <div className="tw:relative tw:w-full tw:h-[400px] tw:rounded-xl  tw:overflow-hidden tw:mb-8 ">
                    <Image src={trip.image} alt={trip.title} fill className="tw:object-cover" />
                </div>

                {/* Overview */}
                <div className="tw:mb-12">
                    <h1 className="tw:text-3xl tw:font-bold tw:mb-4">{trip.title}</h1>
                    <p className="tw:text-gray-700 tw:text-base">{trip.overview}</p>
                </div>

                {/* Itinerary */}
                <div className="tw:mb-12">
                    <h2 className="tw:text-2xl tw:font-semibold tw:mb-4">Day-by-Day Itinerary</h2>
                    <div className="tw:space-y-4">
                        {trip.itinerary.map((dayItem, index) => (
                            <div key={index} className="tw:border tw:rounded-md tw:overflow-hidden tw:shadow-sm">
                                <button
                                    onClick={() => setOpenDay(openDay === index ? null : index)}
                                    className="tw:flex tw:justify-between tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-100 tw:font-medium tw:text-left"
                                >
                                    <span>{dayItem.day}: {dayItem.details}</span>
                                    <FaChevronDown
                                        className={`tw:transition-transform tw:duration-300 ${openDay === index ? "tw:rotate-180" : ""}`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Highlights & Inclusions/Exclusions */}
                <div className="tw:grid tw:md:grid-cols-2 tw:gap-8 tw:mb-12">
                    <div>
                        <h2 className="tw:text-xl tw:font-semibold tw:mb-2">Highlights</h2>
                        <ul className="tw:list-disc tw:list-inside tw:text-gray-700">
                            {trip.highlights.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="tw:text-xl tw:font-semibold tw:mb-2">Inclusions / Exclusions</h2>
                        <ul className="tw:list-disc tw:list-inside tw:text-gray-700">
                            {trip.inclusions.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                            {trip.exclusions.map((item, idx) => (
                                <li key={idx} className="tw:text-red-500">Excl: {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="tw:mb-12 tw:bg-gray-100 tw:p-6 tw:rounded-lg tw:flex tw:items-center tw:justify-between">
                    <button
                        onClick={() => router.push("/contact")}
                        className="tw:bg-[#c1d86a] tw:text-gray-900 tw:font-medium tw:px-6 tw:py-3 tw:rounded-md hover:tw:bg-lime-500 tw:transition-colors"
                    >
                        Enquire / Book
                    </button>
                </div>

                {/* FAQ Placeholder */}
                <div className="tw:mb-12">
                    <h2 className="tw:text-2xl tw:font-semibold tw:mb-4">FAQs</h2>
                    <div className="tw:space-y-4">
                        <div className="tw:border tw:rounded-md tw:overflow-hidden tw:shadow-sm">
                            <button className="tw:flex tw:justify-between tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-100 tw:font-medium tw:text-left">
                                What’s included in the trip?
                                <FaChevronDown className="tw:transition-transform tw:duration-300" />
                            </button>
                            <div className="tw:px-4 tw:py-3 tw:bg-white tw:text-gray-700">
                                {trip.inclusions.join(", ")}
                            </div>
                        </div>
                        <div className="tw:border tw:rounded-md tw:overflow-hidden tw:shadow-sm">
                            <button className="tw:flex tw:justify-between tw:items-center tw:w-full tw:px-4 tw:py-3 tw:bg-gray-100 tw:font-medium tw:text-left">
                                What’s not included?
                                <FaChevronDown className="tw:transition-transform tw:duration-300" />
                            </button>
                            <div className="tw:px-4 tw:py-3 tw:bg-white tw:text-gray-700">
                                {trip.exclusions.join(", ")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TripDetailPage;
