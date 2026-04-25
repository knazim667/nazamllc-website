import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'AI Automations', to: '/ai-automations' },
  { label: 'Marketplace', to: '/marketplace' },
  { label: 'App Development', to: '/app-development' },
  { label: 'Financial Intelligence', to: '/financial-intelligence' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? 'bg-space-black/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
          }
        `}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
              <span className="font-display font-bold text-cyan-400 text-sm">N</span>
            </div>
            <span className="font-display font-bold text-white tracking-wide text-base">
              NAZAM<span className="text-cyan-400">.</span>LLC
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  relative px-4 py-2 text-sm font-medium font-sans rounded-lg
                  transition-all duration-200
                  animated-underline
                  ${isActive
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-100'
                  }
                `}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2.5 rounded-xl text-sm font-semibold font-sans
                bg-cyan-400 text-space-black
                hover:bg-cyan-300 hover:shadow-glow-cyan
                transition-all duration-300
              "
              whileTap={{ scale: 0.97 }}
            >
              Book a Free Call →
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-5 h-0.5 bg-slate-300 rounded"
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-slate-300 rounded"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-slate-300 rounded"
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-space-dark border-l border-white/[0.08] flex flex-col pt-20 pb-8 px-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <nav className="flex flex-col gap-1">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium font-sans transition-all ${isActive ? 'text-cyan-400 bg-cyan-400/8' : 'text-slate-300 hover:text-white hover:bg-white/5'}`
                  }
                >
                  Home
                </NavLink>
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium font-sans transition-all ${isActive ? 'text-cyan-400 bg-cyan-400/8' : 'text-slate-300 hover:text-white hover:bg-white/5'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-auto">
                <a
                  href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 rounded-xl bg-cyan-400 text-space-black font-semibold text-sm font-sans hover:bg-cyan-300 transition-colors"
                >
                  Book a Free Call →
                </a>
                <p className="mt-4 text-center text-xs text-slate-500 font-sans">admin@nazamllc.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
