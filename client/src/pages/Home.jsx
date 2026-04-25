import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ui/ParticleCanvas';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import SectionLabel from '../components/ui/SectionLabel';
import Button from '../components/ui/Button';
import SEOMeta from '../components/ui/SEOMeta';

const PAGE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};

const pillars = [
  {
    glow: 'cyan',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-400/8 border-cyan-400/20',
    to: '/ai-automations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: 'AI Automations & Agents',
    desc: 'Stop doing manually what a machine can do better. We build n8n workflows, autonomous AI agents, and custom automation systems that cut your operational overhead — often by 40% or more.',
  },
  {
    glow: 'amber',
    accent: 'text-amber-400',
    bg: 'bg-amber-400/8 border-amber-400/20',
    to: '/marketplace',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: 'Amazon & Walmart Marketplace',
    desc: 'Suspended accounts. Dying PPC. Listings buried on page 12. We\'ve seen it all — and fixed it all. From full account management to multi-channel launch strategy.',
  },
  {
    glow: 'violet',
    accent: 'text-violet-400',
    bg: 'bg-violet-400/8 border-violet-400/20',
    to: '/app-development',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    label: 'App & Web Development',
    desc: 'You have an idea. We have the engineering. We build mobile apps, web platforms, and AI-powered applications from concept to launch — clean code, real UX, no hand-waving.',
  },
  {
    glow: 'emerald',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-400/8 border-emerald-400/20',
    to: '/financial-intelligence',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    label: 'Financial Intelligence',
    desc: 'Markets move on patterns, not guesswork. We break down technical analysis, sector rotation, and AI-driven trading tools into content anyone can act on. Free resources — no upsell.',
  },
];

const trustPoints = [
  {
    icon: '🔧',
    title: 'Operator Experience, Not Theory',
    desc: 'Muhammad Nazam built and ran an Amazon FBA business from the ground up — buying inventory, managing PPC, surviving algorithm changes. He also built a custom AI lead-generation application used in real sales workflows.',
  },
  {
    icon: '🤖',
    title: 'Technical Depth Most Agencies Lack',
    desc: 'We build production-grade software: FastAPI backends, React frontends, Playwright-based browser automation, n8n workflow systems, AI agents. We don\'t just "use AI tools" — we build them.',
  },
  {
    icon: '📊',
    title: 'Results-Oriented Engagements Only',
    desc: 'Every engagement is tied to a clear outcome — reduced overhead, recovered account, shipped product, or measurable sales growth. If we can\'t define success in week one, we won\'t take the project.',
  },
  {
    icon: '🌐',
    title: 'Multi-Channel, Multi-Industry Perspective',
    desc: 'We work across Amazon, Walmart, Shopify, app development, and financial media. That cross-industry view means we spot opportunities your single-vertical competitor will miss.',
  },
  {
    icon: '🛡️',
    title: 'Wyoming LLC — Legitimate & Accountable',
    desc: 'Nazam LLC is a legally registered Wyoming Limited Liability Company. We operate with full business accountability — contracts, deliverables, professional standards.',
  },
];

export default function Home() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        description="Nazam LLC — AI automations, Amazon & Walmart marketplace management, custom app & web development, and financial intelligence. Wyoming, USA."
        path="/"
      />
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <ParticleCanvas />

        {/* Gradient orbs */}
        <div className="orb orb-cyan absolute w-[700px] h-[700px] -top-32 -left-32 opacity-60" />
        <div className="orb orb-violet absolute w-[500px] h-[500px] top-1/2 -right-32 opacity-40" />
        <div className="orb orb-amber absolute w-[400px] h-[400px] bottom-0 left-1/3 opacity-30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/8 text-cyan-400 text-xs font-semibold tracking-[0.15em] uppercase font-sans mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Trusted by Amazon sellers, funded startups & entrepreneurs across the US
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-white text-hero mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Your Business Is
            <br />
            <span className="gradient-text-cyan">Bleeding Money.</span>
            <br />
            We Stop the Leak.
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-slate-400 text-lg font-sans leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI automations, marketplace domination, custom-built software, and financial intelligence — all under one roof. Built by operators who've been in the trenches, not consultants who've only read the playbook.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Button to="/ai-automations" variant="primary" size="lg">
              See What We Do →
            </Button>
            <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="outline" size="lg">
              Book a Free Strategy Call
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 rounded-full bg-cyan-400"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE PILLARS ── */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5 mb-4">
              Four Ways We Help You Win
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-sans">
              Whether you're selling on Amazon, building a product, automating your operations, or learning to invest — we've got the expertise and the battle scars to back it up.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.to} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <GlassCard glow={p.glow} className="h-full group">
                  <div className="flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl border ${p.bg} ${p.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {p.icon}
                    </div>
                    <h3 className={`font-display font-bold text-xl text-white mb-3`}>{p.label}</h3>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed flex-1">{p.desc}</p>
                    <Link
                      to={p.to}
                      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold font-sans ${p.accent} hover:gap-3 transition-all duration-200`}
                    >
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ── WHY NAZAM ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="orb orb-cyan absolute w-[400px] h-[400px] -right-20 top-1/4 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <SectionLabel>Why Work With Us</SectionLabel>
              <h2 className="font-display font-bold text-white text-section mt-5 mb-6">
                We Don't Guess.<br />
                <span className="gradient-text-cyan">We've Done It.</span>
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-8">
                Most consultants sell you a framework they read in a book. At Nazam LLC, everything we offer comes from real experience building, running, and scaling the kinds of businesses our clients operate. That's a different conversation.
              </p>
              <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="amber" size="md">
                Book a Strategy Call →
              </Button>
            </ScrollReveal>

            <div className="space-y-4">
              {trustPoints.map((tp, i) => (
                <ScrollReveal key={tp.title} delay={i * 0.08} direction="right">
                  <GlassCard glow="cyan" padding="p-5">
                    <div className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{tp.icon}</span>
                      <div>
                        <h4 className="font-display font-semibold text-white text-sm mb-1.5">{tp.title}</h4>
                        <p className="text-slate-400 text-xs font-sans leading-relaxed">{tp.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* ── FOUNDER BIO ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-400/10 border border-white/[0.08] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-400/10 border-2 border-cyan-400/30 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display font-bold text-3xl text-cyan-400">MN</span>
                    </div>
                    <p className="font-display font-bold text-white text-xl">Muhammad Nazam</p>
                    <p className="text-slate-400 text-sm font-sans mt-1">Founder & Principal</p>
                    <p className="text-slate-500 text-xs font-sans mt-0.5">Wyoming, USA</p>
                  </div>
                </div>
                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-white/10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-xs font-semibold text-cyan-400 font-sans">Software Developer</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-white/10"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <p className="text-xs font-semibold text-amber-400 font-sans">Scrum Master</p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="font-display font-bold text-white text-section mt-5 mb-6">
                Built By Someone Who's Been in the Trenches
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-4">
                Muhammad Nazam is a software developer, Scrum Master, former Amazon FBA seller, and founder of Nazam LLC — a technology consultancy based in Wyoming, USA.
              </p>
              <p className="text-slate-400 font-sans leading-relaxed mb-4">
                He didn't build this firm from an MBA program or a consulting background. He built it from real experience: writing production code, managing marketplace accounts, building AI-driven tools, and watching firsthand what separates businesses that scale from businesses that stall.
              </p>
              <p className="text-slate-300 font-sans font-medium leading-relaxed mb-8 italic">
                "Automate what slows you down, build what gives you leverage, and measure everything."
              </p>
              <Button href="https://linkedin.com/in/muhammad-nazam" variant="outline" size="md">
                Connect on LinkedIn →
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-400/5" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <SectionLabel>Ready to Start?</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5 mb-5">
              Ready to Stop Leaving<br />
              <span className="gradient-text-amber">Money on the Table?</span>
            </h2>
            <p className="text-slate-400 font-sans leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We'll diagnose your biggest bottleneck and tell you exactly what we'd do about it — whether you hire us or not.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="amber" size="lg">
                Book Your Free Strategy Call →
              </Button>
              <Button href="mailto:admin@nazamllc.com" variant="outline" size="lg">
                Email Us Directly
              </Button>
            </div>
            <p className="text-slate-500 text-sm font-sans italic">
              No pitch decks. No 47-slide presentations. Just a direct conversation about your business.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
