"use client";

import { useEffect, useState, useRef } from "react";
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import styles from './page.module.css';

function CountUpNumber({ target, duration = 3000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;
            const startValue = 0;
            const endValue = target;

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);

              // Smooth easing function (easeOutCubic)
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutCubic);

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return <div ref={elementRef}>{count}+</div>;
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "I wanted to express my sincere gratitude for your exceptional support in conducting a successful budget meeting. Your team's coordination during check-in, check-out and daily agenda execution was invaluable.",
      author: "Division Head",
      company: "Leading Healthcare & Pharma organization",
    },
    {
      text: "Flawless execution and seamless coordination - the ICE team made our Annual Meet a huge success. Despite last-minute changes, everything was handled beautifully with professionalism and calm.",
      author: "Deputy Manager",
      company: "Leading Global Tech Foundation",
    },
    {
      text: "The Thailand incentive was a perfect blend of adventure, relaxation, and impeccable arrangements. From travel to stay to on-ground experiences - everything was 10/10. Truly memorable.",
      author: "Regional Partner",
      company: "BFSI sector",
    },
    {
      text: "Thank you to the entire ICE team for delivering outstanding services and making our global conference in Budapest a success. We have received immensely positive feedback on every aspect.",
      author: "Senior Business Leader",
      company: "Global Pharma conglomerate",
    },
    {
      text: "Your team's support and coordination made our internal meet an absolute success. Grateful for your proactive approach and seamless execution.",
      author: "Division Head",
      company: "FMCG & Consumer Business Unit",
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, 2),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const cardWidth = 259;
  const gap = 20;
  const translateX = currentIndex * (cardWidth + gap);

  return (
    <div className="relative w-full max-w-[817px] mx-auto mt-10 overflow-hidden">
      {/* Track */}
      <div
        className="flex gap-5 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
        style={{ transform: `translateX(-${translateX}px)` }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              w-[259px] min-w-[259px] max-w-[259px]
              rounded-[20px]
              p-[2px]
              bg-gradient-to-br from-orange-500 to-purple-600
              shrink-0
            "
          >
            <div
              className="
                relative
                h-[259px]
                rounded-[18px]
                bg-[linear-gradient(135deg,#000000_0%,#1a1a1a_30%,#2a2a2a_50%,#1a1a1a_70%,#000000_100%)]
                backdrop-blur-md
                p-[27px_22px]
                flex flex-col justify-between items-center
                text-center
                overflow-hidden
                animate-[fadeInUp_0.8s_ease-out]
              "
            >
              {/* Text */}
              <p className="text-[0.75rem] leading-[1.6] text-white/95 line-clamp-5">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="mt-auto w-full">
                <div className="text-[0.8rem] font-bold text-white mb-1">
                  {testimonial.author}
                </div>
                <div className="text-[0.7rem] text-white/70 font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



function IntroSection() {
  return (
    <section
      className="
        relative
        py-[80px] md:py-[100px]
        bg-[linear-gradient(135deg,#454545_0%,#000000_30%,#000000_100%)]
        text-white
        overflow-hidden
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-fadeInLeft">
            <p className="uppercase tracking-[0.12em] font-bold text-orange-400 text-lg mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Welcome
              </span>
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight mb-5">
              Experiences that move people and brands forward.
            </h2>

            <p className="text-white/70 text-base md:text-[1.05rem] leading-relaxed max-w-[720px]">
              We design and deliver comprehensive MICE solutions: from corporate
              events and conferences to incentive travel and global expeditions.
              Our teams blend strategy, creativity, and precise execution to make
              every moment memorable. Whether it&apos;s planning your next corporate
              gathering or orchestrating travel experiences across the world, we
              ensure customer delight at every step.
            </p>

            {/* CTA ACTIONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  font-semibold text-white
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                  shadow-lg shadow-purple-500/30
                  transition-all duration-300
                  hover:text-white
                  hover:-translate-y-1 hover:shadow-xl
                "
              >
                Plan Your Experience
              </Link>

              <Link
                href="/about"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  font-semibold text-white
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                  shadow-lg shadow-purple-500/30
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl
                  hover:text-white
                "
              >
                Learn about our approach
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="animate-fadeInRight">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden bg-black shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/images/11.webp"
                alt="MICE solutions and corporate events"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


const clients = [
  "Untitled-1-01.png",
  "Untitled-1-02.png",
  "Untitled-1-03.png",
  "Untitled-1-04.png",
  "Untitled-1-05.png",
  "Untitled-1-06.png",
  "Untitled-1-07.png",
  "Untitled-1-08.png",
  "Untitled-1-09.png",
  "Untitled-1-10.png",
  "Untitled-1-11.png",
  "Untitled-1-12.png",
  "Untitled-1-13.png",
  "Untitled-1-14.png",
  "Untitled-1-15.png",
  "Untitled-1-16.png",
  "Untitled-1-17.png",
  "Untitled-1-18.png",
  "Untitled-1-19.png",
  "Untitled-1-20.png",
  "Untitled-1-21.png",
];

function ClientsSection() {
  return (
    <section className="relative py-20 bg-[#fafafa] overflow-hidden animate-fadeIn">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-10">

        {/* Title */}
        <div className="text-center animate-fadeInLeft">
          <h2 className="text-4xl font-bold bg-white px-8 py-4 rounded-xl shadow-md">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Our Prominent Patrons
            </span>
          </h2>
        </div>

        {/* Logos wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-scrollClients">

            {/* First set */}
            {clients.map((logo, index) => (
              <div
                key={`client-${index}`}
                className="flex items-center justify-center w-[220px] max-h-[140px] shrink-0"
              >
                <Image
                  src={`/images/${logo}`}
                  alt={`Client ${index + 1}`}
                  width={220}
                  height={140}
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clients.map((logo, index) => (
              <div
                key={`client-dup-${index}`}
                className="flex items-center justify-center w-[220px] max-h-[140px] shrink-0"
              >
                <Image
                  src={`/images/${logo}`}
                  alt={`Client duplicate ${index + 1}`}
                  width={220}
                  height={140}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



function CTASection() {
  return (
    <section
      className="
        relative
        py-[90px] pb-[40px]
        bg-[linear-gradient(135deg,#454545_0%,#000000_35%,#000000_100%)]
        overflow-hidden
      "
    >
      {/* Top gradient overlay */}
      <div
        className="
          pointer-events-none
          absolute top-0 left-0 right-0 h-[150px]
          bg-[linear-gradient(180deg,#454545_0%,rgba(69,69,69,0.8)_15%,rgba(69,69,69,0.5)_40%,rgba(69,69,69,0.2)_70%,transparent_100%)]
          blur-[2px]
          z-[1]
        "
      />

      <div className="relative z-[2] mx-auto max-w-7xl px-6">
        {/* CTA CARD */}
        <div
          className="
            flex flex-wrap items-center justify-between gap-[18px]
            rounded-[18px]
            border border-[rgba(246,140,32,0.2)]
            bg-[rgba(0,0,0,0.8)]
            p-8
          "
        >
          <div className="max-w-[780px]">
            <h2 className="mb-2 text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Ready to plan your next event?
              </span>
            </h2>

            <p className="text-[1.05rem] leading-[1.7] text-[#a7a7a7]">
              Tell us your objectives and we&apos;ll design an experience—whether
              it&apos;s an event or a travel journey—that exceeds expectations.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-xl
              px-6 py-3
              text-base font-semibold text-white
              whitespace-nowrap
              bg-[linear-gradient(135deg,var(--color-purple)_0%,var(--color-pink)_50%,var(--color-orange)_100%)]
              shadow-[0_4px_16px_rgba(121,27,84,0.3)]
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:shadow-[0_6px_20px_rgba(121,27,84,0.4)]
              hover:bg-[linear-gradient(135deg,var(--color-orange)_0%,var(--color-pink)_50%,var(--color-purple)_100%)]
            "
          >
            Talk to Our Team
          </Link>
        </div>

        {/* AFFILIATIONS */}
        <div
          className="
            mt-[60px]
            flex flex-col items-center justify-center gap-6
            text-center
          "
        >
          <h3
            className="
              text-[1.5rem]
              font-bold
              tracking-[2px]
              uppercase
              text-[40px]
              bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent
            "
          >
            Affiliations
          </h3>

          <Image
            src="/images/Screenshot_2025-12-22_124826-removebg-preview.png"
            alt="Certifications and Accreditations"
            width={800}
            height={150}
            className="
              max-h-[200px]
              w-auto
              object-contain
              transition-opacity duration-300
              hover:opacity-90
            "
          />
        </div>
      </div>

      {/* Responsive spacing */}
      {/* <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-top: 60px;
            padding-bottom: 80px;
          }
        }
      `}</style> */}
    </section>
  );
}



export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: "Ramadan Festival 2026",
      date: "February 18, 2026",
      status: "Upcoming",
      image: "/images/1.webp",
    },
    {
      title: "Champions League Night",
      date: "May 12, 2025",
      status: "Happening Now",
      image: "/images/2.webp",
    },
    {
      title: "Future Stars Track Meet",
      date: "June 02, 2025",
      status: "Upcoming",
      image: "/images/3.webp",
    },
    {
      title: "Night Run Festival",
      date: "August 20, 2025",
      status: "Upcoming",
      image: "/images/4.webp",
    },
  ];

  const services = [
    {
      title: "Corporate MICE",
      description: "End-to-end MICE solutions from corporate events and conferences to incentive programs and exhibitions.",
      image: "/images/5.webp",
    },
    {
      title: "Travel & Tours",
      description: "Comprehensive travel management including flight bookings, itinerary planning, and package tours to destinations worldwide.",
      image: "/images/6.webp",
    },
    {
      title: "Conferences & Summits",
      description: "Large-scale conferences managed with precision, from venue selection to keynote speaker management.",
      image: "/images/7.webp",
    },
    {
      title: "Travel Services",
      description: "Flight bookings, travel insurance, VISAs, cruise lines, VIP airport lounge access, and fleet management.",
      image: "/images/8.webp",
    },
    {
      title: "Exhibitions & Trade Shows",
      description: "Stand out on the trade floor with innovative booth designs and interactive attendee engagement strategies.",
      image: "/images/9.webp",
    },
    {
      title: "Expeditions & Excursions",
      description: "Curated expeditions and excursions to exotic destinations, creating unforgettable travel experiences.",
      image: "/images/10.webp",
    },
  ];

  const valueProps = [
    { title: "End-to-End Delivery", description: "From event strategy to travel planning, we handle every detail with precision and care." },
    { title: "Global Travel Expertise", description: "11 years of experience managing travel, tours, and experiences to all parts of the world." },
    { title: "Comprehensive MICE Solutions", description: "Events, conferences, exhibitions, and travel services all under one roof." },
    { title: "Customer Delight", description: "A vast portfolio of satisfied clients across industries and geographies." },
  ];


  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.heroVideoContainer} ref={videoRef}>
          <iframe
            src="https://player.vimeo.com/video/654448243?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className={styles.heroVideo}
            title="Website Video"
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className="relative z-[2] w-full pb-10">
                <Link
                  href="/contact"
                  className="
            ml-6 inline-flex
            px-6 py-3 rounded-xl
            text-white font-semibold
            bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
            hover:text-white
            shadow-lg transition hover:-translate-y-0.5
          "
                >
                  Plan your experience →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection />

      <section
        id="events"
        className="
    relative
    w-screen
    py-[90px] pb-[60px]
    text-white
    bg-[linear-gradient(45deg,#454545_0%,#000000_40%,#000000_100%)]
    overflow-hidden
    left-1/2 right-1/2
    -ml-[50vw] -mr-[50vw]
  "
      >
        {/* top gradient fade */}
        <div
          className="
      pointer-events-none
      absolute top-0 left-0 right-0 h-[120px]
      bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.4)_70%,transparent_100%)]
      blur-[1px]
    "
        />

        {/* bottom gradient fade */}
        <div
          className="
      pointer-events-none
      absolute bottom-0 left-0 right-0 h-[120px]
      bg-[linear-gradient(180deg,transparent_0%,rgba(69,69,69,0.3)_30%,rgba(69,69,69,0.7)_60%,#454545_100%)]
      blur-[1px]
    "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="text-center mb-[60px]">
            <h2 className="text-[3rem] font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-white/90 text-[1.1rem]">
              Glimpse into our past events
            </p>
          </div>

          {/* Event grid */}
          <div className="grid gap-[18px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
            {events.map((event, index) => (
              <div
                key={event.title}
                className="
            flex flex-col
            rounded-[14px]
            bg-black
            border border-white/10
            overflow-hidden
            shadow-[0_12px_38px_rgba(0,0,0,0.35)]
            transition-all duration-300
            hover:-translate-y-2 hover:scale-[1.02]
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            hover:border-white/20
          "
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* image */}
                <div className="relative h-[160px] bg-[#454545] p-3 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.05]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300"
                  />
                </div>

                {/* body */}
                <div className="p-[14px]">
                  <p className="text-white/80 text-sm mb-1">
                    {event.date}
                  </p>
                  <h3 className="text-white font-semibold mb-1">
                    {event.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    Featured event
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <AnimateOnScroll animation="fadeInUp" delay={0.1}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={3000} />
                </div>
                <div className={styles.statLabel}>Domestic MICE</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.2}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={950} />
                </div>
                <div className={styles.statLabel}>International MICE</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.3}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={1000} />
                </div>
                <div className={styles.statLabel}>Events</div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={0.4}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>
                  <CountUpNumber target={550} />
                </div>
                <div className={styles.statLabel}>Conferences</div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introLayout}>
              <AnimateOnScroll animation="fadeInLeft" delay={0.1}>
                <div>
                  <p className={styles.kicker}><span className="text-gradient">Welcome</span></p>
                  <h2>Experiences that move people and brands forward.</h2>
                  <p className={styles.muted}>
                    We design and deliver comprehensive MICE solutions: from corporate events and conferences to incentive travel and global expeditions. Our teams blend strategy, creativity, and precise execution to make every moment memorable. Whether it&apos;s planning your next corporate gathering or orchestrating travel experiences across the world, we ensure customer delight at every step.
                  </p>
                  <div className={styles.inlineActions}>
                    <Link href="/contact" className={styles.planExperienceBox}>
                      Plan Your Experience
                    </Link>
                    <Link href="/about" className={styles.learnMoreBox}>
                      Learn about our approach
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInRight" delay={0.2}>
                <div className={styles.introImageBox}>
                  <div className={styles.introImage}>
                    <Image
                      src="/images/11.webp"
                      alt="MICE solutions and corporate events"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section> */}
      <IntroSection />

      <section className="relative py-[100px] bg-[#fafafa] text-black animate-fadeIn">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-[3rem] font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <p className="text-[1.1rem] text-black/70">
              Comprehensive MICE solutions tailored to your business goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fadeInUp"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

        </div>
      </section>



      <section
        className="
    relative
    py-[60px]
    overflow-hidden
    text-white
    bg-[linear-gradient(135deg,#000000_0%,#1a1a1a_30%,#2a2a2a_50%,#1a1a1a_70%,#000000_100%)]
  "
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Section Header */}
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className="text-center mb-10">
              <h2 className="text-[3rem] font-bold mb-4 text-white">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>

              <p className="text-white/80 text-[1.1rem] max-w-[700px] mx-auto">
                Discover what our satisfied clients have to say about their experiences with our services.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Carousel */}
          <TestimonialCarousel />

        </div>
      </section>


      <section className={styles.valueSection}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" delay={0.1}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}><span className="text-gradient">Why Choose Us</span></p>
            </div>
          </AnimateOnScroll>
          <div className={styles.valueGrid}>
            {valueProps.map((item, index) => (
              <AnimateOnScroll key={item.title} animation="fadeInUp" delay={0.1 + index * 0.1}>
                <div className={styles.valueCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
