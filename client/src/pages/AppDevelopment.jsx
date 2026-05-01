import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import SectionLabel from '../components/ui/SectionLabel';
import Button from '../components/ui/Button';
import SEOMeta from '../components/ui/SEOMeta';

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

const stack = [
  { label: 'Backend', items: ['Python / FastAPI', 'Node.js', 'PostgreSQL', 'SQLite'], color: 'cyan' },
  { label: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'TypeScript'], color: 'violet' },
  { label: 'Mobile', items: ['React Native', 'Progressive Web Apps', 'Cross-platform'], color: 'amber' },
  { label: 'AI Layer', items: ['OpenAI', 'Anthropic Claude', 'Ollama (local)', 'Playwright'], color: 'emerald' },
  { label: 'Deployment', items: ['AWS', 'DigitalOcean', 'Vercel', 'Self-hosted'], color: 'cyan' },
];

const portfolio = [
  {
    type: 'Desktop AI Agent Application',
    title: 'Facebook AI Lead Generation Agent',
    status: 'In Production',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    problem: 'B2B service companies waste enormous time manually searching social media for potential clients. They scroll, copy-paste, and manually draft outreach — for hours every day.',
    built: 'A desktop application that autonomously monitors public Facebook groups, identifies posts where users express pain points, classifies each post using LLM classification, generates personalized reply drafts for operator review, and posts approved replies through a real Chrome browser session.',
    stack: 'FastAPI, React 18, Vite, Tailwind CSS, Zustand, Framer Motion, Playwright, Python, Anthropic Claude / OpenAI / Ollama (switchable)',
    color: 'cyan',
  },
  {
    type: 'Web Application / AI Data Tool',
    title: 'AI Financial Analysis Platform',
    status: 'In Development',
    statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    problem: 'Retail investors need access to the same level of market intelligence that institutional traders have — but current tools are either too complex, too expensive, or too generic.',
    built: 'A web platform that ingests market data, applies sector rotation models, generates AI-assisted technical analysis commentary, and presents actionable insights in plain language. Designed for educated retail investors who want depth without a Bloomberg Terminal subscription.',
    stack: 'FastAPI, React, PostgreSQL, LLM integration, financial data API connectors',
    color: 'emerald',
  },
];

const process = [
  { step: '01', title: 'Discovery Call', timeline: 'Week 0', desc: 'We understand your idea, your target user, your must-have features, and your timeline. We ask hard questions — "what problem does this solve, and for whom?" — because the answers shape everything. This call is free.' },
  { step: '02', title: 'Scoping & Proposal', timeline: 'Week 1', desc: 'We deliver a written project scope: features, technical approach, timeline, and fixed price. No "it depends" pricing. You know exactly what you\'re getting before you commit.' },
  { step: '03', title: 'Design & Architecture', timeline: 'Weeks 1-2', desc: 'We wireframe the user flows, design the UI, and architect the backend before a single line of production code is written. This prevents the expensive mistakes.' },
  { step: '04', title: 'Build', timeline: 'Varies by Scope', desc: 'We build in two-week sprint cycles. You see progress every two weeks — not a 3-month blackout followed by a big reveal. Weekly status updates. Constant communication.' },
  { step: '05', title: 'Test & QA', timeline: 'Ongoing', desc: 'Every deliverable goes through QA before you see it. Automated tests for backend logic. Manual testing for user flows. We find the bugs before your users do.' },
  { step: '06', title: 'Launch & Handover', timeline: 'Final Phase', desc: 'We deploy your product, document the codebase, and train you on how to manage it. You own everything — code, infrastructure, credentials. No lock-in.' },
  { step: '07', title: 'Post-Launch Support', timeline: 'Optional', desc: 'We offer ongoing maintenance, feature development, and technical support retainers for clients who want a long-term technical partner.' },
];

const colorText = { cyan: 'text-cyan-400', violet: 'text-violet-400', amber: 'text-amber-400', emerald: 'text-emerald-400' };
const colorBg = { cyan: 'bg-cyan-400/8 border-cyan-400/20', violet: 'bg-violet-400/8 border-violet-400/20', amber: 'bg-amber-400/8 border-amber-400/20', emerald: 'bg-emerald-400/8 border-emerald-400/20' };

export default function AppDevelopment() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        title="App & Web Development"
        description="Mobile apps, web platforms, and AI-powered applications built by Nazam LLC — from concept to launch. Clean code, real UX, no hand-waving."
        path="/app-development"
        serviceName="App & Web Development"
        serviceDescription="Nazam LLC builds mobile apps, web platforms, AI-powered applications, APIs, dashboards, and product experiences from concept through launch."
      />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="orb orb-violet absolute w-[600px] h-[600px] -top-20 -right-20 opacity-30" />
        <div className="orb orb-cyan absolute w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <SectionLabel color="violet">App & Web Development</SectionLabel>
          </motion.div>
          <motion.h1
            className="font-display font-bold text-white text-hero mt-6 mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Got an Idea?<br />
            <span className="gradient-text-violet">We Build It.</span><br />
            Fast, Clean, Ready to Ship.
          </motion.h1>
          <motion.p
            className="max-w-2xl text-slate-400 text-lg font-sans leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From mobile apps to AI-powered web platforms, we take your concept from whiteboard to working product. Real engineering. Real design. No vaporware.
          </motion.p>
          <motion.p
            className="text-slate-500 text-sm font-sans italic mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We've built AI agents, automation platforms, financial tools, and marketplace integrations. If it runs on code, we can build it.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="primary" size="lg">Tell Us Your Idea →</Button>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display font-bold text-white text-section mb-6">
                Most App Ideas Die Because<br />
                <span className="gradient-text-violet">the Wrong People Built Them</span>
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-4">
                You had a vision. Maybe you hired a cheap offshore shop and got a product that crashes on demo day. Maybe you got a quote from an agency that costs as much as a Series A. Maybe you tried to build it yourself and got stuck on architecture three months in.
              </p>
              <p className="text-slate-400 font-sans leading-relaxed">
                Bad development is expensive. Not just in dollars — in time, momentum, and market opportunity. Every month your product doesn't exist is a month your competitor can take the space. We build differently: clean architecture, honest timelines, and a founder-to-founder communication style.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionLabel color="violet">Our Stack</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">Production-Grade from Day One</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stack.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.07}>
                <GlassCard glow={s.color} padding="p-4" className="h-full">
                  <p className={`text-xs font-semibold font-sans tracking-widest uppercase mb-3 ${colorText[s.color]}`}>{s.label}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-slate-300 font-sans">{item}</li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionLabel color="violet">What We've Built</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              Real Products. Real Engineering.<br />Real Results.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <GlassCard glow={p.color} className="h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-sans text-slate-500 uppercase tracking-widest">{p.type}</span>
                    <span className={`flex-shrink-0 px-2.5 py-1 rounded-full border text-xs font-semibold font-sans ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className={`font-display font-bold text-white text-xl mb-4 ${colorText[p.color]}`}>{p.title}</h3>
                  <div className="space-y-4 text-sm font-sans">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">The Problem</p>
                      <p className="text-slate-300 leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">What We Built</p>
                      <p className="text-slate-300 leading-relaxed">{p.built}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Stack</p>
                      <p className={`font-medium leading-relaxed ${colorText[p.color]}`}>{p.stack}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel color="violet">How We Work</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              From Idea to Launch —<br />Here's Exactly What Happens
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-400/40 via-cyan-400/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {process.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 0.07}>
                  <div className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className={i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}>
                      <div className="inline-flex items-center gap-3 mb-2">
                        <span className="text-xs font-sans text-slate-500 uppercase tracking-widest">{p.timeline}</span>
                      </div>
                      <h3 className="font-display font-bold text-white text-xl mb-2">{p.title}</h3>
                      <p className="text-slate-400 text-sm font-sans leading-relaxed">{p.desc}</p>
                    </div>
                    <div className={`flex ${i % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12 md:col-start-1 md:row-start-1'}`}>
                      <div className="w-16 h-16 rounded-2xl bg-violet-400/8 border border-violet-400/20 flex items-center justify-center">
                        <span className="font-display font-bold text-violet-400 text-xl">{p.step}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-white text-section mb-5">
              Your Idea Deserves a Builder<br />
              <span className="gradient-text-violet">Who Cares if It Ships</span>
            </h2>
            <p className="text-slate-400 font-sans mb-10">
              Tell us what you're building. We'll tell you what it'll take — honestly, and without fluff.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="primary" size="lg">Book a Free Discovery Call →</Button>
              <Button href="mailto:admin@nazamllc.com" variant="outline" size="lg">Email Us Your Idea</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
