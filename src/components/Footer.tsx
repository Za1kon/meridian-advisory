import Link from "next/link";

const footerLinks = {
  Services: ["Corporate Strategy", "Mergers & Acquisitions", "Financial Advisory", "Operations Excellence"],
  Company: ["About Meridian", "Our Team", "Case Studies", "Careers"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Regulatory Disclosures"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M16 2L30 28H2L16 2Z" fill="white" />
                  <path d="M16 10L24 28H8L16 10Z" fill="#92740a" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-lora)] font-semibold text-white text-lg tracking-tight">
                Meridian Advisory
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Strategic clarity for complex decisions. Independent advisory
              services for boards, executives, and institutional investors.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-slate-700 rounded-sm flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors duration-200 text-xs font-medium"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Meridian Advisory Group Ltd. All rights reserved. Registered in England and Wales No. 08431922.
          </p>
          <p className="text-slate-600 text-xs max-w-sm text-left md:text-right">
            Meridian Advisory does not provide legal, tax, or regulatory advice. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
