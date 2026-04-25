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

const painPoints = [
  { icon: '⏱️', label: 'Drowning in repetitive tasks' },
  { icon: '📉', label: 'Losing leads from slow follow-up' },
  { icon: '🔄', label: 'Manual workflows that break' },
  { icon: '💸', label: 'Paying headcount you could replace' },
  { icon: '🔌', label: "Tools that don't talk to each other" },
];

const services = [
  {
    num: '01',
    title: 'n8n Workflow Automation',
    desc: 'n8n is a powerful open-source workflow automation platform — think Zapier but with no limits, no per-task pricing, and the ability to run on your own servers. We design, build, and deploy n8n workflows that connect your tools and automate your data flows.',
    items: [
      'Lead capture → CRM entry → follow-up email sequence',
      'Order notifications → fulfillment triggers → customer updates',
      'Invoice generation → payment follow-up → accounting sync',
      'Inventory alerts → reorder triggers → supplier communication',
    ],
    for: 'Any business with repetitive, multi-step processes.',
    color: 'cyan',
  },
  {
    num: '02',
    title: 'Autonomous AI Agents',
    desc: 'AI agents go further than simple automation. They make decisions, not just execute rules. We build custom AI agents powered by large language models (LLMs) that can research, classify, draft, respond, and take action.',
    items: [
      'AI lead qualification agents that scan social media',
      'AI comment and outreach agents that draft human-like responses',
      'AI customer support agents handling tier-1 tickets',
      'AI reporting agents generating executive summaries',
    ],
    for: 'Sellers, service businesses, SaaS companies, and agencies.',
    color: 'cyan',
  },
  {
    num: '03',
    title: 'Amazon & Walmart Seller AI Agents',
    desc: 'Marketplace sellers have a unique automation opportunity. We build AI agents specifically designed for Amazon and Walmart seller workflows: pricing automation, review monitoring, listing health alerts, and reimbursement claim generation.',
    items: [
      'Automated PPC bid adjustment triggers based on ACoS thresholds',
      'AI-generated responses to customer reviews and Q&A',
      'Competitor price change alerts with recommended actions',
      'FBA reimbursement discrepancy scanning and claim drafting',
    ],
    for: 'Amazon and Walmart sellers spending hours on account maintenance.',
    color: 'amber',
  },
  {
    num: '04',
    title: 'Legacy System Integration',
    desc: 'Your CRM doesn\'t talk to your fulfillment software. Your accounting tool doesn\'t sync with your marketplace data. We build integration layers — using APIs, webhooks, and custom middleware — that make your existing stack work together.',
    items: [
      'API and webhook integration between existing systems',
      'Custom middleware for data translation and routing',
      'Real-time sync between CRM, fulfillment, and accounting',
      'Zero data silos, zero manual reconciliation',
    ],
    for: 'Established businesses with existing software investments.',
    color: 'violet',
  },
  {
    num: '05',
    title: 'Business Process Automation Consulting',
    desc: 'Before we build anything, we map your current workflows, identify your highest-leverage automation opportunities, and prioritize by ROI. Some businesses need a complex AI agent. Others need a simple three-step workflow. We tell you the truth.',
    items: [
      'Process audit and automation opportunity map',
      'ROI-ranked automation priority list',
      'Technical specification for recommended builds',
      'Build, test, and deployment — fully managed',
    ],
    for: "Business owners who know they need automation but don't know where to start.",
    color: 'emerald',
  },
];

const useCases = [
  {
    title: 'E-Commerce Seller',
    situation: 'Amazon seller spending 3 hours/day on manual PPC management, inventory checks, and customer message responses.',
    built: 'n8n workflows for inventory alerts, AI agent for customer message drafts, automated PPC bid rules.',
    outcome: 'Seller reclaims 2.5 hours/day. Same revenue. Less stress. Faster response times. Better seller metrics.',
    color: 'amber',
  },
  {
    title: 'Service Business',
    situation: 'Marketing agency manually onboarding clients: collecting assets, setting up accounts, sending welcome emails, scheduling calls.',
    built: 'End-to-end client onboarding workflow triggered by contract signature — auto-collects assets, creates accounts, sends welcome sequence.',
    outcome: 'Client onboarding time cut from 4 hours to 20 minutes. Zero human intervention required.',
    color: 'cyan',
  },
  {
    title: 'Lead Generation',
    situation: 'B2B service company manually searching LinkedIn and Facebook groups for prospects, copying contact info into a spreadsheet.',
    built: 'AI agent that monitors target communities, classifies posts by lead quality, drafts outreach messages, routes hot leads for review.',
    outcome: 'Lead pipeline 3x larger. Sales rep spends time on conversations, not prospecting.',
    color: 'emerald',
  },
];

const glowColors = { cyan: 'cyan', amber: 'amber', violet: 'violet', emerald: 'emerald' };

export default function AIAutomations() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        title="AI Automations & n8n Workflows"
        description="Stop doing manually what a machine can do better. Nazam LLC builds n8n workflows, autonomous AI agents, and custom automation systems that cut operational overhead by 40% or more."
        path="/ai-automations"
      />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="orb orb-cyan absolute w-[600px] h-[600px] -top-20 -left-20 opacity-40" />
        <div className="orb orb-violet absolute w-[400px] h-[400px] top-1/2 right-0 opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel color="cyan">AI Automations & Intelligent Agents</SectionLabel>
          </motion.div>
          <motion.h1
            className="font-display font-bold text-white text-hero mt-6 mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            You're Running a Business.
            <br />
            <span className="gradient-text-cyan">Stop Running It Manually.</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl text-slate-400 text-lg font-sans leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Every hour your team spends copy-pasting data, sending routine emails, generating reports, or following up on leads is an hour they're not growing your business. We build AI automation systems that eliminate that waste — permanently.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {painPoints.map((p) => (
              <span
                key={p.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-sans"
              >
                {p.icon} {p.label}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="primary" size="lg">
              Book a Free Automation Audit →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display font-bold text-white text-section mb-6">
                Manual Operations Are Quietly<br />
                <span className="gradient-text-amber">Killing Your Margins</span>
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-4">
                Most businesses underestimate how much revenue they lose to operational friction. A lead that doesn't get followed up within the hour is 10x less likely to convert. An Amazon seller manually checking inventory every day will always react too late. A startup processing customer requests through a spreadsheet will never scale past a certain point.
              </p>
              <p className="text-slate-400 font-sans leading-relaxed">
                The cost isn't always visible on a P&L — but it's there. In burned-out employees. Missed opportunities. Processes that collapse the moment one person is sick. We fix this with intelligent automation: systems that work 24/7, don't make copy-paste errors, and get faster as your business grows.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              Automation Services That<br />Actually Ship
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.06}>
                <GlassCard glow={glowColors[s.color]} className="group">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <span className={`text-5xl font-display font-bold opacity-20 ${
                        s.color === 'cyan' ? 'text-cyan-400' :
                        s.color === 'amber' ? 'text-amber-400' :
                        s.color === 'violet' ? 'text-violet-400' : 'text-emerald-400'
                      }`}>{s.num}</span>
                      <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">{s.title}</h3>
                      <p className="text-slate-400 text-sm font-sans leading-relaxed">{s.desc}</p>
                      <p className="mt-4 text-xs font-sans text-slate-500">
                        <span className="text-slate-400 font-medium">Who it's for: </span>
                        {s.for}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm font-sans text-slate-300">
                            <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full border ${
                              s.color === 'cyan' ? 'border-cyan-400/40 text-cyan-400' :
                              s.color === 'amber' ? 'border-amber-400/40 text-amber-400' :
                              s.color === 'violet' ? 'border-violet-400/40 text-violet-400' : 'border-emerald-400/40 text-emerald-400'
                            } flex items-center justify-center text-xs`}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>Results</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5 mb-4">
              What This Looks Like in Practice
            </h2>
            <p className="text-slate-300 font-sans italic text-lg max-w-2xl mx-auto">
              "The right automation can reduce your operational overhead by 40% or more — while increasing output quality and consistency."
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.title} delay={i * 0.1}>
                <GlassCard glow={glowColors[uc.color]} className="h-full">
                  <div className={`text-xs font-semibold font-sans tracking-widest uppercase mb-4 ${
                    uc.color === 'amber' ? 'text-amber-400' :
                    uc.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  }`}>{uc.title}</div>
                  <div className="space-y-4 text-sm font-sans">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Situation</p>
                      <p className="text-slate-300 leading-relaxed">{uc.situation}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">What We Built</p>
                      <p className="text-slate-300 leading-relaxed">{uc.built}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Outcome</p>
                      <p className={`font-medium leading-relaxed ${
                        uc.color === 'amber' ? 'text-amber-300' :
                        uc.color === 'cyan' ? 'text-cyan-300' : 'text-emerald-300'
                      }`}>{uc.outcome}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-white text-section mb-5">
              Let's Find Your Biggest<br />
              <span className="gradient-text-cyan">Automation Win</span>
            </h2>
            <p className="text-slate-400 font-sans mb-10">
              In 30 minutes, we'll map your current operations and identify the single automation that would save you the most time and money. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="primary" size="lg">Book Your Free Automation Audit →</Button>
              <Button href="mailto:admin@nazamllc.com" variant="outline" size="lg">Email Us</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
