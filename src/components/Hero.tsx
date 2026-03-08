"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85&auto=format&fit=crop"
          alt="Modern city architecture"
          fill
          priority
          className="object-cover"
        />
        {/* Navy overlay — uniform con vignette sutil */}
        <div className="absolute inset-0 bg-[#0f172a]/72" />

      </div>

      {/* Subtle diagonal line decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-full bg-white/10 translate-x-[-30vw] rotate-12 origin-top" />
        <div className="absolute top-0 right-0 w-px h-full bg-white/5 translate-x-[-50vw] rotate-12 origin-top" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[#92740a]" />
            <span className="text-[#92740a] text-xs font-semibold tracking-[0.2em] uppercase">
              Strategic Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-[family-name:var(--font-lora)] text-white text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-semibold mb-6"
          >
            Strategic clarity
            <br />
            for complex
            <br />
            <em className="not-italic text-[#c9a84c]">decisions.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            Meridian Advisory partners with boards, executive teams, and
            institutional investors to navigate uncertainty, unlock value, and
            build organizations that endure.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#92740a] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#7a6008] transition-colors duration-200"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide rounded-sm hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-slate-400 text-xs tracking-wide"
          >
            Trusted by Fortune 500 companies and leading private equity firms
          </motion.p>
        </div>
      </div>
    </section>
  );
}