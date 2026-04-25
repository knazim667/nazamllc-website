import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
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

const resources = [
  {
    title: 'The Stock Market Timeline Guide',
    desc: 'A visual, chronological guide to how stock market cycles unfold — from early recovery through late-cycle contraction and bear market phases. Includes historical data from 1950 to present, Fed policy breakdown, and portfolio allocation frameworks.',
    tags: ['6 Chapters', 'Historical Data 1950–Present', 'Portfolio Allocation Guide'],
    link: '/downloads/stock-market-timeline-guide.html',
  },
  {
    title: 'The Sector Rotation Cheat Sheet',
    desc: 'How institutional money moves between all 11 GICS sectors across the economic cycle. Includes ETF relative strength signals, AI/quant methods, free screening tools, and historical examples from 2000, 2008, 2020, and 2022.',
    tags: ['All 11 GICS Sectors', 'Free Screening Tools', 'Historical Case Studies'],
    link: '/downloads/sector-rotation-cheat-sheet.html',
  },
];

const curriculum = [
  {
    title: 'Technical Analysis',
    color: 'emerald',
    items: [
      'Candlestick patterns and what they actually predict',
      'Volume confirmation and divergence',
      'Moving averages (SMA, EMA) as dynamic support/resistance',
      'RSI, MACD, Bollinger Bands — without overloading your charts',
      'Chart patterns: flags, wedges, head & shoulders, cup & handle',
    ],
  },
  {
    title: 'Sector Analysis',
    color: 'cyan',
    items: [
      'Reading sector ETF relative strength charts',
      'How economic data (CPI, PMI, jobs reports) moves sectors',
      'Defensive vs. cyclical rotation playbook',
      'Energy, tech, healthcare, and financial sector deep dives',
    ],
  },
  {
    title: 'AI Tools for Trading & Research',
    color: 'violet',
    items: [
      'AI chatbots for earnings call transcript analysis',
      'AI-powered stock screeners: what they do and don\'t do',
      'Using AI to summarize SEC filings and find red flags',
      'Quantitative approaches for retail investors',
    ],
  },
  {
    title: 'Market Structure & Macro',
    color: 'amber',
    items: [
      'The Federal Reserve and interest rate policy, simply explained',
      'Yield curve dynamics and what inversions historically signal',
      'How institutional positioning (COT reports, dark pool data) provides context',
      'Macro regime identification: inflation, deflation, stagflation',
    ],
  },
];

const ytFeatures = [
  { icon: '📺', label: 'Technical Analysis Walkthroughs', desc: 'Chart patterns, volume analysis, support/resistance, moving averages' },
  { icon: '🏭', label: 'Sector Deep Dives', desc: 'Which sectors are healthy, which are breaking down, and why' },
  { icon: '🤖', label: 'AI Tools for Investors', desc: 'How to use AI for stock screening, research, and trade planning' },
  { icon: '📰', label: 'Market Structure Education', desc: 'How options flow, dark pool data, and institutional behavior affect prices' },
  { icon: '📅', label: 'Earnings Season Strategy', desc: 'How to trade around earnings without gambling' },
];

const colorText = { emerald: 'text-emerald-400', cyan: 'text-cyan-400', violet: 'text-violet-400', amber: 'text-amber-400' };

export default function FinancialIntelligence() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        title="Financial Intelligence & Stock Market Education"
        description="Free stock market education from Nazam LLC — technical analysis, sector rotation, and AI-driven trading tools explained clearly. No upsell, just signal."
        path="/financial-intelligence"
      />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="orb orb-cyan absolute w-[500px] h-[500px] -top-20 right-0 opacity-30" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />
        <div className="orb orb-violet absolute w-[400px] h-[400px] bottom-0 -left-20 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <SectionLabel color="emerald">Financial Intelligence</SectionLabel>
          </motion.div>
          <motion.h1
            className="font-display font-bold text-white text-hero mt-6 mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Market Doesn't Have<br />to Feel Like a Casino.
            <br />
            <span className="gradient-text-emerald">Learn to Read the Room.</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl text-slate-400 text-lg font-sans leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Stock market education built for serious learners — not hype traders, not passive index fund preachers. If you want to understand how markets actually move, what sectors rotate when, and how to use AI tools to sharpen your edge.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button to="#resources" variant="primary" size="lg">Download Free Resources ↓</Button>
            <Button href="https://youtube.com" variant="outline" size="lg">Subscribe to the Channel →</Button>
          </motion.div>
          <motion.p
            className="mt-4 text-slate-600 text-xs font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Educational content only. Not financial advice. Past performance does not guarantee future results.
          </motion.p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display font-bold text-white text-section mb-6">
                Most Financial Content Is Designed<br />
                <span className="gradient-text-emerald">to Keep You Confused</span>
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-4">
                Financial media profits from your anxiety. CNBC needs you to tune in every day. Reddit memes pump stocks into oblivion. YouTube gurus sell courses about strategies they don't actually trade. The result? Retail investors who make decisions based on emotion, noise, and FOMO.
              </p>
              <p className="text-slate-400 font-sans leading-relaxed">
                The investors who consistently win aren't smarter. They're more disciplined. They understand market structure. They read charts as maps, not magic. They know when money flows between sectors and why. And increasingly, they're using AI tools to process more data faster than any human analyst can. That's what we teach here — and we don't charge you for the fundamentals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="py-24 lg:py-32" id="resources">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionLabel color="emerald">Free Resources</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              Start With These. On Us.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <motion.div
                  className="relative glass rounded-2xl p-6 shadow-card transition-all duration-500 hover:border-emerald-400/25 hover:shadow-[0_0_40px_rgba(16,185,129,0.12),0_8px_32px_rgba(0,0,0,0.5)] h-full flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* FREE badge */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold font-sans tracking-wide">
                    FREE
                  </span>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-5">
                    <FileText className="w-5 h-5 text-emerald-400" />
                  </div>

                  <h3 className="font-display font-bold text-white text-xl mb-3 pr-16">{r.title}</h3>
                  <p className="text-slate-400 text-sm font-sans leading-relaxed mb-5 flex-1">{r.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-sans">
                        <span className="text-emerald-400 font-bold">✓</span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button href={r.link} variant="primary" size="sm">
                    Download Free Guide →
                  </Button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Disclaimer */}
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xs text-slate-600 font-sans leading-relaxed text-center max-w-2xl mx-auto">
              These resources are for educational purposes only and do not constitute financial advice. All investing involves risk. Past performance does not guarantee future results. Nazam LLC is not a registered financial advisor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-24 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionLabel color="emerald">YouTube Channel</SectionLabel>
              <h2 className="font-display font-bold text-white text-section mt-5 mb-5">
                Go Deeper on YouTube
              </h2>
              <p className="text-slate-400 font-sans leading-relaxed mb-6">
                The free PDFs give you the framework. The YouTube channel is where we apply it to real markets, in real time. New videos cover technical analysis setups, sector analysis breakdowns, AI tools for market research, and stock market education for serious retail investors.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/8 border border-emerald-400/20 text-emerald-400 text-sm font-sans font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Channel Coming Soon — Subscribe to Be Notified
              </div>
              <div>
                <Button href="https://youtube.com" variant="primary" size="md">Subscribe to the Channel →</Button>
              </div>
            </ScrollReveal>
            <div className="space-y-3">
              {ytFeatures.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 0.07} direction="right">
                  <GlassCard glow="emerald" padding="p-4">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{f.icon}</span>
                      <div>
                        <p className="font-semibold font-sans text-white text-sm">{f.label}</p>
                        <p className="text-slate-400 text-xs font-sans mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel color="emerald">What You'll Learn</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              The Curriculum<br />
              <span className="text-slate-400 font-medium">(Free and Always Will Be)</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {curriculum.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <GlassCard glow={c.color} className="h-full">
                  <h3 className={`font-display font-semibold text-sm mb-4 ${colorText[c.color]}`}>{c.title}</h3>
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-sans text-slate-300 leading-relaxed">
                        <span className="mt-1 flex-shrink-0 text-slate-600">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="glass rounded-2xl p-6 border border-amber-400/20">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 text-xl flex-shrink-0">⚠️</span>
                <div>
                  <p className="font-semibold font-sans text-amber-400 text-sm mb-2">Educational Purposes Only</p>
                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    All content published by Nazam LLC on this website, YouTube, social media, or in downloadable resources is intended for educational purposes only. Nothing here constitutes financial advice, investment advice, trading advice, or any other form of personalized financial guidance. The stock market involves substantial risk of loss. Past performance of any strategy, sector, or security does not guarantee future results. Always conduct your own research and consult with a qualified, licensed financial advisor before making any investment decisions. Nazam LLC and Muhammad Nazam are not registered investment advisors.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-white text-section mb-5">
              Download the Free Guides.<br />
              <span className="gradient-text-emerald">Start Learning Today.</span>
            </h2>
            <p className="text-slate-400 font-sans mb-10">No email required for the PDFs. No course pitch at the end. Just the content.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/downloads/stock-market-timeline-guide.html" variant="primary" size="lg">Download the Timeline Guide →</Button>
              <Button href="/downloads/sector-rotation-cheat-sheet.html" variant="outline" size="lg">Download Sector Rotation Sheet</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
