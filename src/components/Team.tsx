"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Jonathan Hale",
    role: "Managing Partner",
    focus: "Corporate Strategy & M&A",
    bio: "Former McKinsey Global Director with 20+ years advising Fortune 100 boards on strategic transformation.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85&auto=format&fit=crop&crop=face",
  },
  {
    name: "Christine Müller",
    role: "Partner, Financial Advisory",
    focus: "Capital Markets & Restructuring",
    bio: "Previously at Deutsche Bank's M&A division. Advised on over $12B in cross-border transactions across DACH and Benelux.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=85&auto=format&fit=crop&crop=face",
  },
  {
    name: "David Osei",
    role: "Partner, Operations",
    focus: "Operational Transformation",
    bio: "Built and led operational practices at BCG and Bain. Deep expertise in manufacturing, supply chain, and enterprise efficiency.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85&auto=format&fit=crop&crop=face",
  },
  {
    name: "Isabelle Fontaine",
    role: "Partner, Strategy",
    focus: "Healthcare & Life Sciences",
    bio: "Led over 40 strategy engagements for hospital groups, pharmaceutical firms, and health system investors across Europe.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85&auto=format&fit=crop&crop=face",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-white">
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
              Leadership
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-[#0f172a] leading-tight mb-4">
            Advisors who have done it themselves.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Our partners have held senior roles in the industries they advise.
            That experience is the foundation of everything we do.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-sm bg-slate-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* LinkedIn overlay */}
                <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/20 transition-all duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0f172a]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#0f172a] text-lg">
                  {member.name}
                </h3>
                <p className="text-[#92740a] text-xs font-semibold tracking-wide uppercase mt-0.5 mb-1">
                  {member.role}
                </p>
                <p className="text-slate-400 text-xs mb-3">{member.focus}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}