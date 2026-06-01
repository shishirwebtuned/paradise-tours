"use client";

import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { usePathname } from "next/navigation";

const HIDE_NAVBAR_PATHS = ["/login", "/register"];
const HIDE_FOOTER_PATHS = ["/login", "/register"];

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();

    const hideNavbar = HIDE_NAVBAR_PATHS.includes(pathname);
    const hideFooter = HIDE_FOOTER_PATHS.includes(pathname);

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
            {!hideFooter && <Footer />}
        </>
    );
};

export default AppWrapper;