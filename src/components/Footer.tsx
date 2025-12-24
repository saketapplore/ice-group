import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { MapPin, Phone, Mail } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-8">
            {/* Main container */}
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 gap-y-14 gap-x-20 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_10fr]">

                {/* COLUMN 1 — LOGO + NEWSLETTER */}
                <div className="flex flex-col items-start gap-6">
                    {/* Logo (LEFT ALIGNED) */}
                    <Image
                        src="/images/logo.png"
                        alt="ICE Group Logo"
                        width={180}
                        height={80}
                        priority
                        unoptimized
                        className="object-contain self-start -ml-4"
                    />

                    {/* Newsletter */}
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <h3 className="text-white font-semibold text-lg">
                            Subscribe to Newsletter
                        </h3>

                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
                        />

                        <Button
                            variant="primary"
                            className="self-start"
                            style={{ padding: "8px 22px", fontSize: "0.85rem" }}
                        >
                            Subscribe Now
                        </Button>
                    </div>
                </div>

                {/* COLUMN 2 — COMPANY */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Company</h3>

                    <Link href="/about" className="text-white/70 hover:text-white">
                        About Us
                    </Link>
                    <Link href="/services" className="text-white/70 hover:text-white">
                        Services
                    </Link>
                    <Link href="/gallery" className="text-white/70 hover:text-white">
                        Gallery
                    </Link>
                </div>

                {/* COLUMN 3 — CONNECT */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-semibold text-lg">Connect</h3>

                    <Link href="/newsletter" className="text-white/70 hover:text-white">
                        Newsletter
                    </Link>
                    <Link href="/contact" className="text-white/70 hover:text-white">
                        Contact Us
                    </Link>

                    <div className="mt-4">
                        <p className="text-white font-semibold mb-3 whitespace-nowrap">Follow us on :</p>

                        <div className="flex gap-4 items-center">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/ICEGROUPINDIA/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ICE Group Facebook"
                                className="hover:opacity-80 transition"
                            >
                                <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/icexperiences/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ICE Group LinkedIn"
                                className="hover:opacity-80 transition"
                            >
                                <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/icegroupindia/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ICE Group Instagram"
                                className="hover:opacity-80 transition"
                            >
                                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* COLUMN 4 — GET IN TOUCH */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-white font-semibold text-lg">Get in Touch</h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* India */}
                        <div className="flex flex-col text-sm text-white/70">
                            <p className="text-white font-semibold flex items-center gap-2">
                                <MapPin size={16} /> India Office :
                            </p>

                            <p>
                                G-23 (GF), Aashirwad Commercial Complex, Green Park,
                                <br />
                                New Delhi - 110016, INDIA
                            </p>

                            <a
                                href="tel:01142211111"
                                className="flex items-center gap-2 hover:text-white transition mb-2"
                            >
                                <Phone size={14} />
                                Call : 011 - 4221 1111
                            </a>

                            <a
                                href="mailto:info@icegroupindia.com"
                                className="flex items-center gap-2 hover:text-white transition"
                            >
                                <Mail size={14} />
                                Email : info@icegroupindia.com
                            </a>
                        </div>


                        {/* UAE */}
                        <div className="flex flex-col text-sm text-white/70 w-full">
                            <p className="text-white font-semibold flex items-center gap-2">
                                <MapPin size={16} /> UAE Office :
                            </p>

                            <p>
                                BUILDING A1 DUBAI DIGITAL PARK
                                <br />
                                DUBAI SILICON OASIS
                                <br />
                                DUBAI, UNITED ARAB EMIRATES
                                <br />
                                P.O.Box 342001
                            </p>

                            <a
                                href="tel:01142211111"
                                className="flex items-center gap-2 hover:text-white transition mb-2"
                            >
                                <Phone size={14} />
                                Call : 011 - 4221 1111
                            </a>


                            <a
                                href="mailto:mohit.khanna@icegroupindia.com"
                                className="flex items-center gap-2 hover:text-white transition w-full whitespace-nowrap "
                            >
                                <Mail size={14} className="text-current flex-shrink-0" />
                                Email : mohit.khanna@icegroupindia.com
                            </a></div>


                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
                © {new Date().getFullYear()} ICE Group. All rights reserved.
            </div>
        </footer>
    );
}
