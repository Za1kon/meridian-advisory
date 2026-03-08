"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Corporate Strategy",
    description:
      "Market entry, competitive positioning, and long-term growth frameworks for boards and C-suites navigating transformation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ["Growth Strategy", "Market Entry", "Portfolio Review"],
  },
  {
    number: "02",
    title: "Mergers & Acquisitions",
    description:
      "End-to-end M&A advisory — from target identification and due diligence to deal structuring and post-merger integration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    tags: ["Buy-side", "Sell-side", "Post-merger Integration"],
  },
  {
    number: "03",
    title: "Financial Advisory",
    description:
      "Capital structure optimization, valuation, restructuring support, and investor relations for complex financial situations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ["Valuation", "Restructuring", "Capital Markets"],
  },
  {
    number: "04",
    title: "Operations Excellence",
    description:
      "Identifying operational inefficiencies, redesigning processes, and building the internal capabilities that sustain competitive advantage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tags: ["Process Redesign", "Cost Reduction", "Org Design"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#92740a]" />
            <span className="text-[#92740a] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-[#0f172a] leading-tight mb-4">
            Four practices. One unified approach.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Our advisory work is organized around the decisions that matter most
            — strategic, transactional, financial, and operational.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-white p-8 lg:p-10 group hover:bg-slate-50 transition-colors duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-11 h-11 border border-slate-200 rounded-sm flex items-center justify-center text-[#92740a] group-hover:border-[#92740a] group-hover:bg-amber-50 transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium tracking-widest">
                    {service.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-lora)] text-xl font-semibold text-[#0f172a] mt-0.5">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-500 border border-slate-200 px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
