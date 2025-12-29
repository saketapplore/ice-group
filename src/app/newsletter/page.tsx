"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="pt-[140px] pb-[100px] flex items-center justify-center min-h-[70vh]">

        <AnimateOnScroll animation="fadeInUp" delay={0.1}>
          <div
            className="
              max-w-2xl w-full text-center
              bg-[linear-gradient(135deg,rgba(69,69,69,0.3)_0%,rgba(0,0,0,0.55)_50%,rgba(69,69,69,0.3)_100%)]
              border border-white/10
              rounded-2xl
              p-10
            "
          >
            {/* Badge */}
            <span className="inline-block mb-6 px-4 py-1 text-sm tracking-wide rounded-full
              bg-white/5 text-white/80 border border-white/10">
              ICE INSIGHTS
            </span>

            {/* Heading */}
            <h1 className="text-gradient text-3xl md:text-4xl font-bold mb-4">
              Newsletters Coming Soon
            </h1>

            {/* Description */}
            <p className="text-[#ccc] text-lg leading-relaxed max-w-xl mx-auto">
              We&apos;re curating thoughtful insights on MICE, corporate travel,
              experience design, and on-ground excellence.  
              Stay tuned for stories, strategies, and inspiration—straight from
              the ICE team.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-white/10" />

            {/* Subtext */}
            <p className="text-sm text-white/60 tracking-wide">
              Launching shortly · 2026
            </p>
          </div>
        </AnimateOnScroll>

      </section>
    </div>
  );
}
