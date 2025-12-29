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
            iCE Group India, a group that has stood for excellence, brilliance and distinction since its inception. Ever since, the company has grown leaps and bounds and today has a rich legacy of experience, expertise, skill, competence, and exposure garnered in the decade and plus one year of its operations.
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
                The organization was formed on 1st June 2010, under the guidance of Mr. Mohit Khanna, with a vision of becoming the market leader and providing customized services to the clients. Ms. Disha Shah joined the company in the year 2015 as the COO and director. In the span of 15 years, the company added two successful verticals: iCEtravels that focuses on MICE operations and iCEevents dealing in all kinds of corporate events and exhibitions.
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
                We are on a constant quest to deliver superlative impressions and experiences for you. Travel is in our DNA and there is perhaps no corner of the world where we haven&apos;t crafted memories for our patrons. For us it is always time for the next adventure.
              </p>
              <p>
                Travel and events go hand in hand, and it was only imperative for us that this was the next progression for us. iCE Events is now a name to reckon with in the events space and how. Large formats bespoke corporate events on all turfs of the globe and in the quest of exploring beyond.
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
              To truly understand our client goals and turn that understanding into flawlessly executed events and MICE programs. We don’t just aim to meet client expectations; we strive to create experiences that are precisely planned and impactful and completely exceed what they envisaged.
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
              We envision a future where we are the global standard-bearer for luxury event production and MICE. We will achieve this by passionately blending creative inspiration, the latest event technology, and operational excellence to craft sophisticated, immersive, and genuinely unforgettable experiences. Our commitment is to set the benchmark for world-class quality, ensuring every moment we create is a masterpiece of memory.
              </p>
            </div>
          </AnimateOnScroll>

        </div>

      </section>
    </div>
  );
}
