"use client";
import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionCompProps {
    title: string;
    children: React.ReactNode;
}
const AccordionComp = ({ title, children }: AccordionCompProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tw:flex tw:flex-col tw:px-2 tw:md:px-4 tw:lg:px-5 tw:md:py-3 tw:py-2 tw:w-full">
            <div className="tw:flex tw:flex-row tw:items-center tw:justify-between tw:w-full tw:md:gap-1 tw:gap-0">
                <span className="tw:font-medium tw:tracking-wide  tw:lg:text-base tw:md:text-sm tw:text-xs">
                    {title}
                </span>
                <span
                    onClick={toggleOpen}
                    className="tw:bg-[#0d2d3fe4] tw:cursor-pointer tw:rounded-full tw:flex tw:items-center tw:justify-center tw:lg:w-8 tw:lg:h-8 tw:md:w-7 tw:md:h-7 tw:w-6 tw:h-6"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="minus"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <HiMinus className="tw:lg:size-5 tw:md:size-4 tw:size-3 tw:fill-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="plus"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <HiPlus className="tw:lg:size-5 tw:md:size-4 tw:size-3 tw:fill-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="tw:mt-4 tw:overflow-hidden tw:w-full tw:rounded-xl tw:lg:text-base tw:md:text-sm tw:text-xs"
                        style={{ backgroundColor: "#f2f6f9" }}
                    >
                        <div className="tw:p-4 tw:text-gray-700">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionComp;
