"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15", suffix: " years", label: "of Advisory Excellence" },
  { value: "$4B+", suffix: "", label: "in Capital Advised" },
  { value: "300+", suffix: "", label: "Clients Served" },
  { value: "30", suffix: " countries", label: "Global Reach" },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-6 py-10 border-b md:border-b-0 md:border-r border-slate-200 odd:border-r md:last:border-r-0"
    >
      <div className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-[#0f172a] leading-none mb-2">
        {stat.value}
        <span className="text-[#92740a]">{stat.suffix}</span>
      </div>
      <div className="text-xs text-slate-500 tracking-widest uppercase font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 md:py-0">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}