"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ title }: { title: string }) => {
    const pathname = usePathname();
    const router = useRouter();

    const generateBreadcrumbItems = () => {
        if (!pathname || pathname === "/") {
            return [{ label: "Home", path: "/" }];
        }

        const segments = pathname.split("/").filter((segment) => segment);

        const items = segments.reduce(
            (acc, segment, index) => {
                const path = `/${segments.slice(0, index + 1).join("/")}`;
                const label =
                    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
                acc.push({ label, path });
                return acc;
            },
            [{ label: "Home", path: "/" }]
        );

        return items;
    };

    const items = generateBreadcrumbItems();

    const handleNavigate = (path: string) => {
        router.push(path);
    }

    return (
        <div className="tw:flex tw:flex-col tw:items-center tw:justify-center">
            {title && (
                <span className="tw:font-bold tw:text-white tw:text-xl tw:md:text-3xl tw:lg:text-5xl tw:mb-1">
                    {title}
                </span>
            )}
            <nav
                className="tw:flex tw:items-center tw:space-x-2 tw:text-xl tw:jakarta tw:text-white tw:z-40"
                aria-label="Breadcrumb"
            >
                <ol className="tw:flex tw:items-center tw:space-x-2 tw:pr-7 tw:lg:pt-3 tw:pt-2 tw:z-40">
                    {items.map((item, index) => (
                        <li key={item.path} className="tw:flex tw:items-center tw:z-40">
                            {index < items.length - 1 ? (
                                <>
                                    <span
                                        onClick={() => { handleNavigate(item.path) }}
                                        className={` tw:hover:text-blue-300 tw:lg:text-lg tw:md:text-base tw:text-sm tw:z-40 tw:transition-colors tw:duration-200 tw:cursor-pointer
                                         ${pathname === item.path
                                                ? "tw:font-semibold tw:text-blue-300"
                                                : ""
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                    <FiChevronRight
                                        className="tw:lg:h-4 tw:lg:w-4 tw:md:h-3 tw:md:w-3 tw:h-3 tw:w-3 tw:md:ml-3 tw:md:mr-2 tw:ml-2 tw:mr-1 tw:text-white"
                                        aria-hidden="true"
                                    />
                                </>
                            ) : (
                                <span
                                    className="tw:lg:text-lg tw:md:text-base tw:text-sm tw:text-white"
                                    aria-current="page"
                                >
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;