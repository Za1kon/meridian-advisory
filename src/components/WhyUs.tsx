"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const advantages = [
  {
    title: "Independence you can rely on",
    desc: "We have no investment banking affiliate. Our advice is untainted by transaction fees or underwriting relationships.",
  },
  {
    title: "Senior-led engagements",
    desc: "Every engagement is led and staffed by senior advisors — not delegated to analysts two months into their careers.",
  },
  {
    title: "Sector depth, not generalism",
    desc: "We go deep in financial services, industrials, healthcare, and technology. Breadth without depth is just conversation.",
  },
  {
    title: "Integrated across disciplines",
    desc: "Strategy, finance, and operations teams work together — not in silos. Complex problems require integrated answers.",
  },
  {
    title: "A global network, a local presence",
    desc: "30 country offices. Local regulatory knowledge. Executive relationships built over decades, not acquired.",
  },
  {
    title: "Measured by outcomes",
    desc: "We track and share the results of our work. Our track record is not a claim — it is a documented history.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#92740a]" />
                <span className="text-[#92740a] text-xs font-semibold tracking-[0.2em] uppercase">
                  Why Meridian
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-[#0f172a] leading-tight mb-4">
                The standard for independent advisory.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-10">
                For fifteen years, Meridian has operated by a single principle:
                the best advice is the advice you can act on. Clear, grounded,
                and free from conflict.
              </p>
            </motion.div>

            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#92740a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a] mb-0.5">{adv.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: image composition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[520px]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=85&auto=format&fit=crop"
                  alt="Advisory meeting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -left-8 bg-white border border-slate-200 p-6 shadow-lg rounded-sm w-52">
                <div className="font-[family-name:var(--font-lora)] text-3xl font-semibold text-[#0f172a] mb-1">
                  98<span className="text-[#92740a]">%</span>
                </div>
                <div className="text-xs text-slate-500 leading-snug">
                  Client retention rate over five years
                </div>
              </div>

              {/* Accent block */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0f172a] rounded-sm" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#92740a] rounded-sm translate-x-2 translate-y-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
