"use client";
import React, { useState } from "react";
import clsx from "clsx";

export interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs = [], defaultTab = "" }) => {
    const initialTab = tabs.find((tab) => tab.label === defaultTab)
        ? defaultTab
        : tabs[0]?.label || "";
    const [selectedTab, setSelectedTab] = useState<string>(initialTab);

    const handleTabClick = (tabLabel: string) => {
        setSelectedTab(tabLabel);
    };

    const activeTab = tabs.find((tab) => tab.label === selectedTab);

    return (
        <div className="tw:w-full">
            <div className="tw:flex tw:w-full tw:overflow-x-auto tw:lg:gap-x-3 tw:gap-x-2 tw:mb-4 tw:sm:overflow-x-visible">
                {tabs.map(({ label }) => (
                    <div
                        key={label}
                        onClick={() => handleTabClick(label)}
                        onTouchStart={() => handleTabClick(label)} // Ensure touch support
                        className={clsx(
                            "tw:lg:px-4 tw:px-3 tw:py-2 tw:rounded-md tw:font-medium tw:w-full tw:text-xs tw:md:text-sm tw:xl:text-base tw:text-center tw:transition-colors tw:duration-200 tw:whitespace-nowrap tw:cursor-pointer",
                            selectedTab === label
                                ? "tw:bg-[#0D3A48] tw:text-white"
                                : "tw:bg-[#D5E880] tw:text-black tw:hover:bg-[#c1d86a]"
                        )}
                    >
                        {label}
                    </div>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tw:p-4 tw:w-full tw:rounded-md tw:bg-white">
                {activeTab?.content || "No content available."}
            </div>
        </div>
    );
};

export default Tabs;
