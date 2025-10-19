import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const menus = [
        { name: "HOME", href: "/" },
        {
            name: "ABOUT US",
            href: "/about",
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
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link href="/" className="navbar-brand">
                            <Image
                                src="/new-images/logo/Untitled-1-16.svg"
                                alt="Logo"
                                width={160}
                                height={50}
                                priority
                            />
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    {menus.map((menu, idx) => (
                                        <li
                                            key={idx}
                                            className={`nav-item ${menu.children ? "submenu" : ""}`}
                                        >
                                            <Link href={menu.href} className="nav-link">
                                                {menu.name}
                                            </Link>

                                            {menu.children && (
                                                <ul>
                                                    {menu.children.map((child, childIdx) => (
                                                        <li key={childIdx} className="nav-item">
                                                            <Link href={child.href} className="nav-link">
                                                                {child.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="header-btn d-inline-flex">
                                <Link href="/reserve" className="btn-default">
                                    RESERVE NOW
                                </Link>
                            </div>
                        </div>

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
};

export default Navbar;
