"use client";

import Image from "next/image";
import React from "react";
import Breadcrumb from "./Breadcrumb";

interface TopsectionProps {
    title: string;
    image: string;
}

const Topsection = ({ title, image }: TopsectionProps) => {
    return (
        <div
            className="tw:relative tw:h-[60vh] tw:sm:h-[80vh] tw:lg:h-[70vh] tw:lg:overflow-y-hidden tw:bg-cover tw:bg-center tw:bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="tw:absolute tw:inset-0 tw:bg-[#0D3A48B8] tw:z-10" />

            <div className="tw:relative tw:z-20 tw:flex tw:flex-col tw:items-center tw:text-center tw:pb-0 tw:justify-center tw:h-full tw:px-4 tw:sm:px-6 tw:lg:px-8 tw:text-white">
                <Breadcrumb title={title} />
            </div>

            <Image
                src="/clouds.png"
                alt="cloud"
                height={80}
                width={1920}
                className="tw:absolute tw:bottom-0 tw:left-0 tw:w-full tw:h-[90%] tw:md:object-fill tw:object-cover tw:z-10 tw:translate-y-1/2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
            />
        </div>
    );
};

export default Topsection;
