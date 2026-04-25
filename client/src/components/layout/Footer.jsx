import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  { label: 'AI Automations', to: '/ai-automations' },
  { label: 'Amazon & Walmart Marketplace', to: '/marketplace' },
  { label: 'App & Web Development', to: '/app-development' },
  { label: 'Financial Intelligence', to: '/financial-intelligence' },
];

const company = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
];

const resources = [
  { label: 'Stock Market Timeline Guide', href: '#' },
  { label: 'Sector Rotation Cheat Sheet', href: '#' },
  { label: 'YouTube Channel (Soon)', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-0">
      <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <span className="font-display font-bold text-cyan-400 text-sm">N</span>
              </div>
              <span className="font-display font-bold text-white text-base">
                NAZAM<span className="text-cyan-400">.</span>LLC
              </span>
            </Link>
            <p className="text-slate-400 text-sm font-sans leading-relaxed max-w-xs mb-6">
              Technology. Strategy. Results.<br />
              AI automations, marketplace management, custom software, and financial intelligence — built by operators.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://linkedin.com/in/muhammad-nazam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-slate-400 hover:text-cyan-400 text-sm font-sans transition-colors duration-200 animated-underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="text-slate-400 hover:text-cyan-400 text-sm font-sans transition-colors duration-200 animated-underline"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 text-sm font-sans transition-colors duration-200 animated-underline"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>

          {/* Free Resources */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">Free Resources</h4>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    className="text-slate-400 hover:text-amber-400 text-sm font-sans transition-colors duration-200 animated-underline"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-display font-semibold text-white text-sm mb-3 tracking-wide">Contact</h4>
              <a
                href="mailto:admin@nazamllc.com"
                className="text-slate-400 hover:text-cyan-400 text-sm font-sans transition-colors duration-200 block"
              >
                admin@nazamllc.com
              </a>
              <p className="text-slate-500 text-sm font-sans mt-1">Wyoming, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© 2025 Nazam LLC. All Rights Reserved. Nazam LLC is a Wyoming Limited Liability Company.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Use</a>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-600 font-sans text-center">
          The content on this website is for informational and educational purposes only. Nothing on this site constitutes financial, legal, or investment advice.
        </p>
      </div>
    </footer>
  );
}
