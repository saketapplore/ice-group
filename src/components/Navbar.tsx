"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`
        fixed top-0 w-full z-[1000]
        border-b border-white/10
        transition-all duration-300
        ${isScrolled ? "bg-black/95 backdrop-blur-xl shadow-lg" : "bg-black"}
      `}
        >
            <div className="mx-auto max-w-7xl px-6 h-[72px] md:h-[88px] flex items-center justify-between gap-4">

                {/* LEFT — LOGO */}
                <Link href="/" className="-ml-8">
                    <Image
                        src="/images/ice-logo.gif"
                        alt="ICE Group Logo"
                        width={350}
                        height={60}
                        priority
                        unoptimized
                        className="object-contain h-[60px] w-auto md:h-[70px] lg:h-[120px]"
                    />
                </Link>

                {/* CENTER — NAV LINKS (Desktop) */}
                <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                    {[
                        ["Home", "/"],
                        ["About Us", "/about"],
                    ].map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            className="
                text-sm font-medium text-white/90
                px-3 py-2 rounded-md
                hover:bg-white/10
                transition
              "
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <span className="cursor-pointer text-sm font-medium text-white/90 px-3 py-2 rounded-md hover:bg-white/10 transition">
                            Services
                        </span>

                        <div className="absolute top-full left-0 mt-3 w-44 rounded-lg bg-black border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                            <Link
                                href="/services/ice-events"
                                className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5"
                            >
                                Events
                            </Link>
                            <Link
                                href="/services/mice"
                                className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5"
                            >
                                M.I.C.E
                            </Link>
                        </div>
                    </div>

                    {[
                        ["Gallery", "/gallery"],
                        ["Newsletter", "/newsletter"],
                        ["Contact Us", "/contact"],
                    ].map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            className="
                text-sm font-medium text-white/90
                px-3 py-2 rounded-md
                hover:bg-white/10
                transition
              "
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* RIGHT — BADGE (Desktop) */}
                <div className="hidden md:flex items-center ml-6">
                    <Image
                        src="/images/certification-badge.png"
                        alt="Great Place to Work Certified"
                        width={140}
                        height={160}
                        priority
                        className="h-[105px] w-auto translate-y-2"
                    />
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden ml-auto flex flex-col gap-1.5"
                >
                    <span
                        className={`h-[2px] w-6 bg-white transition ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                            }`}
                    />
                    <span
                        className={`h-[2px] w-6 bg-white transition ${isMobileMenuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-[2px] w-6 bg-white transition ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                            }`}
                    />
                </button>
            </div>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-2">
                    {[
                        ["Home", "/"],
                        ["About Us", "/about"],
                    ].map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition"
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="pt-3 pl-4 space-y-2">
                        <p className="text-white/90 font-medium mb-2">Services</p>
                        <Link
                            href="/services/ice-events"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 text-sm pl-4"
                        >
                            Events
                        </Link>
                        <Link
                            href="/services/mice"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 text-sm pl-4"
                        >
                            M.I.C.E
                        </Link>
                    </div>

                    {[
                        ["Gallery", "/gallery"],
                        ["Newsletter", "/newsletter"],
                        ["Contact Us", "/contact"],
                    ].map(([label, href]) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
