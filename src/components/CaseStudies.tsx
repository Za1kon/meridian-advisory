"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const caseStudies = [
  {
    industry: "Financial Services",
    company: "A leading European asset manager",
    challenge: "Facing fee compression and digital disruption, the client needed to restructure its product suite and identify adjacent growth markets.",
    result: "$1.2B",
    resultLabel: "in new AUM captured within 18 months",
    tags: ["Strategy", "M&A"],
  },
  {
    industry: "Industrial Manufacturing",
    company: "A mid-cap industrial conglomerate",
    challenge: "Post-acquisition integration had stalled, generating operational friction across 14 plants and eroding projected synergies.",
    result: "€340M",
    resultLabel: "in synergies realized ahead of schedule",
    tags: ["Operations", "Post-merger Integration"],
  },
  {
    industry: "Healthcare",
    company: "A private equity-backed hospital group",
    challenge: "The client required a pre-exit value creation program to optimize margins and position the business for a premium sale process.",
    result: "3.2×",
    resultLabel: "MOIC achieved at exit",
    tags: ["Financial Advisory", "Operations"],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < caseStudies.length - 1) setCurrent(current + 1);
      if (diff < 0 && current > 0) setCurrent(current - 1);
    }
    touchStartX.current = null;
  };

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#92740a]" />
              <span className="text-[#92740a] text-xs font-semibold tracking-[0.2em] uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-white leading-tight">
              Results that speak for themselves.
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            A selection of engagements from the past five years, with client
            permission.
          </p>
        </motion.div>

        {/* Mobile slider */}
        <div className="md:hidden overflow-x-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {caseStudies.map((cs) => (
              <div key={cs.industry} className="min-w-full px-1">
                <CaseCard cs={cs} inView={inView} index={0} />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#92740a]" : "w-1.5 bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.industry}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <CaseCard cs={cs} inView={inView} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  cs,
  inView,
  index,
}: {
  cs: (typeof caseStudies)[0];
  inView: boolean;
  index: number;
}) {
  return (
    <div className="border border-slate-700 hover:border-slate-500 transition-colors duration-300 p-8 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs font-semibold text-[#92740a] tracking-widest uppercase">
          {cs.industry}
        </span>
      </div>

      <p className="text-slate-400 text-xs italic mb-4">{cs.company}</p>

      <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1">
        {cs.challenge}
      </p>

      <div className="border-t border-slate-700 pt-6">
        <div className="font-[family-name:var(--font-lora)] text-4xl font-semibold text-white mb-1">
          {cs.result}
        </div>
        <div className="text-slate-400 text-xs leading-snug mb-5">
          {cs.resultLabel}
        </div>
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-500 border border-slate-700 px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
