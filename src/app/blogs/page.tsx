"use client";
import { BlogCard } from "@/Components/BlogCard";
import Topsection from "@/Components/TopSection";
import { postsData } from "@/data/data";
import { useState } from "react";
import { motion } from "framer-motion";


const Page = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Trekking & Hiking", "Peak Climbing", "Cultural Tours", "Adventure Activities", "Travel Tips", "Festivals & Events"];

    const filteredBlogs =
        selectedCategory === "All"
            ? postsData
            : postsData.filter((a) => a.category === selectedCategory);

    const loadMore = () => setVisiblePosts((prev) => prev + 3);

    return (
        <>
            <Topsection title="Blogs" image="/seaimg1.jpg" />
            <main className="tw:bg-white tw:relative tw:px-4 tw:pt-0 tw:pb-16 tw:z-30">
                <div className="section-title tw:text-center tw:mb-12 tw:flex tw:items-center tw:flex-col">
                    <h3 className="wow fadeInUp">Our Blog</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                        Insights & Stories
                    </h2>
                    <p className="wow fadeInUp tw:lg:text-[15px] tw:md:text-[13px] tw:text-[11px] tw:max-w-3xl tw:text-center tw:text-gray-800" data-wow-delay="0.2s">
                        Explore our latest articles, tips, and stories about travel, destinations, and experiences. Stay updated with insights and inspiration for your next adventure.
                    </p>

                </div>
                <div className="tw:w-full tw:mt-16 tw:md:px-10 tw:px-4 tw:lg:px-16">
                    <div className="tw:flex tw:flex-col tw:gap-8 tw:w-full tw:items-center tw:justify-center ">
                        <aside className="tw:w-full tw:flex tw:flex-col tw:gap-3 tw:mt-4">
                            <span className="tw:lg:text-3xl tw:md:text-2xl tw:text-xl tw:font-medium tw:text-gray-700 ">Popular Topics</span>
                            <div className="tw:flex items-center tw:justify-between tw:gap-4 tw:py-4">
                                <div className="tw:flex  tw:items-center tw:gap-x-4 tw:gap-y-3 tw:flex-wrap tw:lg:text-sm tw:md:text-xs tw:text-xs">
                                    {categories.map((cat) => (
                                        <span
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`tw:cursor-pointer tw:px-4 tw:py-2 tw:rounded-md tw:transition-colors tw:duration-300 ${selectedCategory === cat
                                                ? "tw:bg-[#D5E880] tw:text-black tw:hover:bg-[#c1d86a] tw:font-medium"
                                                : "tw:bg-gray-100 tw:text-gray-700"
                                                }`}
                                        >
                                            {cat}
                                        </span>
                                    ))}

                                </div>
                                {/* <span className="tw:text-gray-500 tw:text-sm tw:cursor-pointer">View All</span> */}
                            </div>
                        </aside>


                        <section className="tw:w-full">
                            <div className="tw:grid tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:gap-5 tw:lg:gap-6">
                                {filteredBlogs.slice(0, visiblePosts).map((post) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}

                                    >
                                        <BlogCard blog={post} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Load More */}
                            {visiblePosts < filteredBlogs.length && (
                                <div className="tw:text-center tw:mt-8">
                                    <span
                                        onClick={loadMore}
                                        className="tw:bg-[#0091ff] tw:text-white tw:px-6 tw:py-2 tw:rounded-md tw:hover:bg-[#0272c8] tw:cursor-pointer tw:transition-all tw:duration-300 tw:ease-in-out "
                                    >
                                        Load More
                                    </span>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Page;
