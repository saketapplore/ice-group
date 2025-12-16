import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobCursor from "@/components/BlobCursor";
import "./globals.css";

// Configure Montserrat (Primary)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Configure Poppins (Secondary/Headings)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ICE Group - Innovative Xperiences",
  description: "Corporate Events Management Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <BlobCursor />
        <div className="site-shell">
          <Navbar />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
