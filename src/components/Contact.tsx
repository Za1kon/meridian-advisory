"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#92740a]" />
              <span className="text-[#92740a] text-xs font-semibold tracking-[0.2em] uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-semibold text-[#0f172a] leading-tight mb-6">
              Ready to move forward?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-md">
              Most engagements begin with a brief, confidential conversation. Tell
              us what you are facing and we will tell you whether we can help.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  value: "inquiries@meridianadvisory.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "London",
                  value: "+44 20 7946 0321",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Offices",
                  value: "London · New York · Frankfurt · Singapore",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-slate-200 rounded-sm flex items-center justify-center text-[#92740a] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#0f172a] font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-white border border-slate-200 rounded-sm p-12 text-center">
                <div>
                  <div className="w-12 h-12 bg-[#0f172a] rounded-sm flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-lora)] text-xl font-semibold text-[#0f172a] mb-2">
                    Message received.
                  </h3>
                  <p className="text-slate-500 text-sm">
                    A senior advisor will be in touch within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 p-8 rounded-sm">
                <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#0f172a] mb-6">
                  Start a conversation
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {["First name", "Last name"].map((label) => (
                      <div key={label}>
                        <label className="block text-xs font-medium text-slate-500 mb-1.5 tracking-wide">
                          {label.toUpperCase()}
                        </label>
                        <input
                          type="text"
                          className="w-full border border-slate-200 px-3 py-2.5 text-sm text-[#0f172a] focus:outline-none focus:border-[#92740a] transition-colors duration-200 rounded-sm"
                          placeholder={label}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { label: "EMAIL ADDRESS", type: "email", placeholder: "you@company.com" },
                    { label: "COMPANY", type: "text", placeholder: "Your organization" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs font-medium text-slate-500 mb-1.5 tracking-wide">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="w-full border border-slate-200 px-3 py-2.5 text-sm text-[#0f172a] focus:outline-none focus:border-[#92740a] transition-colors duration-200 rounded-sm"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5 tracking-wide">
                      HOW CAN WE HELP?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-slate-200 px-3 py-2.5 text-sm text-[#0f172a] focus:outline-none focus:border-[#92740a] transition-colors duration-200 rounded-sm resize-none"
                      placeholder="Brief description of your situation and what you are looking for..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3.5 bg-[#0f172a] text-white text-sm font-semibold tracking-wide rounded-sm hover:bg-[#1e293b] transition-colors duration-200"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    All inquiries are treated with strict confidentiality.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
