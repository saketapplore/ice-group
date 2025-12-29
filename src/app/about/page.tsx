"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="pt-[130px] pb-[60px]">

        {/* Header */}
        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-6">
            About ICE
          </h1>
          <p className="max-w-3xl text-lg text-[#ccc] leading-relaxed">
            iCE Group India has stood for excellence, brilliance, and distinction
            since its inception, building a legacy across travel and corporate
            events worldwide.
          </p>
        </AnimateOnScroll>

        {/* Story Section */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center
          bg-[linear-gradient(135deg,rgba(69,69,69,0.3)_0%,rgba(0,0,0,0.5)_50%,rgba(69,69,69,0.3)_100%)]
          border border-white/5 rounded-2xl p-10">

          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div>
              <h2 className="text-gradient text-2xl font-semibold mb-5">
                The Story Behind the Brand
              </h2>
              <p className="text-white leading-relaxed">
                Founded in 2010 under the leadership of Mr. Mohit Khanna, ICE was
                built with a vision to deliver customized, world-class travel
                and event experiences. In 2015, Ms. Disha Shah joined as COO,
                further strengthening operations and growth.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div className="relative h-[260px] rounded-2xl overflow-hidden border border-[#222]">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="ICE team"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Team Section */}
        <div className="mt-14
          bg-[linear-gradient(135deg,rgba(69,69,69,0.3)_0%,rgba(0,0,0,0.5)_50%,rgba(69,69,69,0.3)_100%)]
          border border-white/5 rounded-2xl p-10">

          <AnimateOnScroll animation="fadeInUp" delay={0.4}>
            <h2 className="text-3xl font-semibold mb-6">
              <span className="text-gradient">
                We Are Ingenious. We Are Team ICE.
              </span>
            </h2>

            <div className="space-y-4 text-[#ccc] leading-relaxed">
              <p>
                Travel is in our DNA. We are driven by the pursuit of crafting
                meaningful experiences that leave lasting impressions.
              </p>
              <p>
                With iCE Events, we execute large-format bespoke corporate events
                across the globe, redefining excellence in event execution.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Mission & Vision Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <AnimateOnScroll animation="fadeInUp" delay={0.2}>
            <div className="
              h-full
              bg-[linear-gradient(135deg,rgba(69,69,69,0.25),rgba(0,0,0,0.55))]
              border border-white/10
              rounded-2xl
              p-8
              hover:border-white/20
              transition
            ">
              <h3 className="text-gradient text-2xl font-bold mb-4">
                Mission
              </h3>
              <p className="text-white leading-relaxed">
                Our mission is to deeply understand our client goals and
                transform them into flawlessly executed events and MICE
                programs that exceed expectations and deliver measurable
                impact.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Vision */}
          <AnimateOnScroll animation="fadeInUp" delay={0.3}>
            <div className="
              h-full
              bg-[linear-gradient(135deg,rgba(69,69,69,0.25),rgba(0,0,0,0.55))]
              border border-white/10
              rounded-2xl
              p-8
              hover:border-white/20
              transition
            ">
              <h3 className="text-gradient text-2xl font-bold mb-4">
                Vision
              </h3>
              <p className="text-white leading-relaxed">
                To be the global benchmark for luxury events and MICE by blending
                creativity, technology, and operational excellence into
                immersive, unforgettable experiences.
              </p>
            </div>
          </AnimateOnScroll>

        </div>

      </section>
    </div>
  );
}
