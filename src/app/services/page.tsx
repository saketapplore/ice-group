"use client";

import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate MICE",
      description: "Comprehensive MICE solutions from corporate events to incentive programs, managed with perfect aplomb.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Conferences & Summits",
      description: "From venue selection to keynote speaker management, we handle every detail of your large-scale industry gatherings.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Flight Bookings & Travel Reservations",
      description: "Seamless flight bookings and travel reservations to destinations worldwide, ensuring comfort and convenience.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Travel Insurance & VISAs",
      description: "Comprehensive travel insurance coverage and hassle-free VISA processing for all your travel needs.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Itinerary Planning & Package Tours",
      description: "Customized itinerary planning and curated package tours to exotic destinations, creating unforgettable experiences.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cruise Lines",
      description: "Luxury cruise experiences with world-class amenities and exceptional service on the high seas.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Design impactful booths and manage logistics for a standout presence on the trade floor.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "VIP Airport Lounge Access",
      description: "Premium airport lounge access for a comfortable and luxurious travel experience.",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fleet Management",
      description: "Comprehensive fleet management solutions for seamless transportation during events and travel.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Expeditions & Excursions",
      description: "Curated expeditions and excursions to explore newer geographies and locales with fun, frolic, and fanfare.",
      image: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Incentive Travel Programs",
      description: "Employee motivation and reward programs with luxury retreats and exclusive travel experiences.",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Product Launches & Corporate Events",
      description: "Create buzz with immersive launch events and execute flawless corporate gatherings that reflect your brand's prestige.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="pt-[130px] pb-10 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center mb-12">
          <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
            <div>
              <h1 className="text-gradient text-4xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-white/70 max-w-[560px] text-sm leading-relaxed">
                Comprehensive MICE solutions combining events, conferences,
                exhibitions, and travel services. We deliver experiences that
                move people and brands forward.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInRight" delay={0.2}>
            <div className="relative h-[220px] rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.05] transition">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Event"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="fadeInUp"
              delay={0.1 + index * 0.05}
            >
              <article className="group bg-gradient-to-br from-[#454545] to-black rounded-2xl border border-white/10 overflow-hidden shadow-xl transition hover:-translate-y-2 hover:scale-[1.02]">
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10 opacity-0 group-hover:opacity-100 transition flex items-end p-4 text-sm text-white">
                    {service.description}
                  </div>
                </div>

                <div className="px-4 pt-2 pb-4">
                  <h3 className="text-white text-lg font-semibold transition group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
                    {service.title}
                  </h3>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fadeInUp" delay={0.3}>
          <div className="mt-16 text-center bg-gradient-to-br from-[#454545] to-black rounded-2xl p-10 hover:-translate-y-1 transition shadow-xl">
            <h2 className="text-white text-2xl font-semibold mb-5">
              Need a custom solution?
            </h2>
            <Link href="/contact">
              <Button variant="outline">Consult Our Experts</Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
