"use client";

import { BlogPost } from "@/data/type";
import { useRouter } from "next/navigation";

interface BlogCardProps {
    blog: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const router = useRouter();

    const handleNavigate = (blogId: number) => {
        router.push(`/blog/${blogId}`);
    };

    return (
        <div className="tw:bg-white tw:rounded-lg tw:overflow-hidden tw:shadow-sm tw:hover:shadow-md tw:transition-shadow tw:duration-300 tw:flex tw:flex-col">
            {/* Blog Image */}
            <div className="tw:aspect-[16/9] tw:w-full tw:overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="tw:w-full tw:h-full tw:object-cover"
                />
            </div>

            {/* Blog Content */}
            <div className="tw:p-4 tw:flex tw:flex-col tw:justify-between tw:flex-grow">
                <p className="tw:text-sm tw:text-gray-500 tw:mb-1 tw:lora tw:border-t tw:border-gray-200 tw:pt-2">
                    {blog.date} · {blog.readTime}
                </p>

                <span
                    onClick={() => handleNavigate(blog.id)}
                    className="tw:lg:text-xl tw:md:text-lg tw:text-base tw:font-semibold tw:text-[#495057] tw:cursor-pointer tw:line-clamp-2 tw:hover:text-[#2A78A6] tw:ease-in-out tw:duration-300 tw:transition-all
                    tw:mb-3"
                >
                    {blog.title}
                </span>

                <p className="tw:lg:text-sm tw:md:text-[13px] tw:text-xs tw:jakarta tw:text-gray-600 tw:mt-1 tw:line-clamp-4">
                    {blog.excerpt}
                </p>

                {/* Tags */}
                {blog.tags.length > 0 && (
                    <div className="tw:flex tw:flex-wrap tw:gap-2 tw:mt-2 tw:mb-1">
                        {blog.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="tw:text-xs tw:text-blue-600 tw:bg-blue-100 tw:px-2 tw:py-1 tw:rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
