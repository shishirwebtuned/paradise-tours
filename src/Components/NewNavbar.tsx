"use client";
import { useState } from "react";
import Link from "next/link";
import { IoChevronDown, IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menus = [
        { name: "HOME", href: "/" },
        {
            name: "ABOUT US",
            href: "",
            children: [
                { name: "OUR GALLERY", href: "/gallery" },
                { name: "SUPPORT & FAQS", href: "/support" },
                { name: "BLOGS", href: "/blogs" },
            ],
        },
        { name: "SPECIAL OFFER", href: "/special-offer" },
        { name: "ATTRACTIONS", href: "/attractions" },
        { name: "CONTACT", href: "/contact" },
        { name: "TRIPS", href: "/trips" },
    ];

    return (
        <header className="main-header">
            <nav className="top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 to-transparent">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">
                    <div className="flex items-center space-x-2">
                        <img src="new-images/logo/Untitled-1-16.svg" alt="Logo" className="h-[4.6rem] w-auto" />
                    </div>

                    {/* Menu */}
                    <ul className="md:flex hidden items-center mt-3 xl:space-x-11 lg:space-x-9 md:space-x-6 space-x-4 text-white font-medium">
                        {menus.map((menu) => (
                            <li
                                key={menu.name}
                                className="relative group"
                                onMouseEnter={() => setOpenMenu(menu.name)}
                                onMouseLeave={() => setOpenMenu(null)}
                            >

                                <Link
                                    href={menu.href}
                                    className="transition text-white group-hover:text-red-500 xl:text-[15px] lg:text-[13px] text-xs"
                                >
                                    {menu.name}


                                    {menu.children &&
                                        <IoChevronDown className="inline-block ml-1 text-xs transition-transform duration-300 group-hover:rotate-180" />

                                    }
                                    <span>

                                    </span>
                                </Link>

                                {/* Dropdown */}
                                {menu.children && openMenu === menu.name && (
                                    <div className="absolute top-full left-0 mt-1 bg-[#1789fc] rounded-xl shadow-lg py-3 w-52 text-white hover:text-black">
                                        {menu.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 font-normal hover:text-black text-white transition"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}

                        <li>
                            <div className="header-btn d-inline-flex pb-2">
                                <a href="#" className="btn-default">RESERVE NOW</a>
                            </div>
                        </li>
                    </ul>
                    <div className="flex md:hidden">
                        <span
                            className="bg-[#1789fc] p-1 rounded-md text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <IoClose className="text-2xl" />
                            ) : (
                                <IoMenu className="text-2xl" />
                            )}
                        </span>
                    </div>

                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-[#1789fc] text-[#f9f9f9] px-6 py-4 space-y-2">
                        {menus.map((menu) => (
                            <div key={menu.name} className="group">
                                {/* Parent row */}
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={menu.href}
                                        className="block py-1 text-xs sm:text-sm text-white font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {menu.name}
                                    </Link>
                                    {menu.children && (
                                        <IoChevronDown className="text-white text-sm sm:text-base" />
                                    )}
                                </div>

                                {/* Children → hidden until hover */}
                                {menu.children && (
                                    <div className="ml-4 mt-1 space-y-1 hidden group-hover:block">
                                        {menu.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block py-0 text-white text-[10px] sm:text-xs"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

            </nav>
        </header>

    );
}
