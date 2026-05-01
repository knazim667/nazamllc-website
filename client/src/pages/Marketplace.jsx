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
  { icon: '🚨', label: 'Account suspended?' },
  { icon: '📉', label: 'Sales in freefall?' },
  { icon: '💰', label: 'PPC spend out of control?' },
  { icon: '🏋️', label: 'Carrying too much inventory?' },
  { icon: '😰', label: 'Scared to scale?' },
];

const services = [
  {
    num: '01', title: 'Full Account Management', color: 'amber',
    desc: 'We take over the day-to-day management of your Amazon or Walmart Seller account so you can focus on your business, not your backend.',
    items: [
      'Listing creation, optimization, and maintenance (A+ content)',
      'PPC: Sponsored Products, Brands, Display',
      'Inventory planning and reorder recommendations',
      'Customer message management and review response',
      'Performance health monitoring and issue escalation',
      'Weekly reporting with plain-English commentary',
    ],
    result: 'You stop firefighting and start building.',
  },
  {
    num: '02', title: 'Suspended Account Recovery', color: 'amber',
    desc: "Amazon and Walmart account suspensions are business emergencies. Every day your account is down costs you real revenue. We've navigated the appeals process — we know what Amazon actually wants to see.",
    items: [
      'Root cause analysis of the suspension reason',
      'Evidence gathering and documentation',
      'Professional Plan of Action (POA) writing',
      'Appeal submission and follow-up management',
      'Post-reinstatement monitoring',
      'Proactive health scoring to prevent re-suspension',
    ],
    result: "This is a specialty. Don't trust it to someone learning on your dime.",
    specialty: true,
  },
  {
    num: '03', title: 'Data-Driven Product Hunting', color: 'cyan',
    desc: "Most sellers pick products based on a hunch. We use structured data analysis to identify products with sustainable demand, defensible margins, and realistic competition levels.",
    items: [
      'Keyword demand analysis using Helium 10 & Jungle Scout',
      'Competitive landscape mapping (who\'s winning and why)',
      'Margin modeling (real numbers, not best-case scenarios)',
      'Launch viability scoring',
    ],
    result: 'Stop guessing. Start knowing.',
  },
  {
    num: '04', title: 'WFS (Walmart Fulfillment Services) Optimization', color: 'cyan',
    desc: "Walmart's fulfillment network is growing rapidly — and sellers who set it up correctly get a significant ranking advantage. WFS done wrong means lost shipments and suppressed listings.",
    items: [
      'WFS enrollment and initial configuration',
      'Shipping plan creation and carrier coordination',
      'Inventory placement optimization',
      'WFS vs. seller-fulfilled hybrid strategy',
      'WFS performance monitoring and issue resolution',
    ],
    result: 'Maximum delivery coverage. Maximum ranking advantage.',
  },
  {
    num: '05', title: 'Amazon Marketing Cloud (AMC) Integration', color: 'violet',
    desc: "AMC is Amazon's clean-room data analytics platform — and most sellers don't have the technical capability to use it. AMC lets you see your full marketing funnel and where budget is being wasted.",
    items: [
      'AMC account setup and data pipeline configuration',
      'Custom audience segment creation',
      'Attribution analysis: which campaigns actually drive purchases',
      'Budget reallocation recommendations from real data',
      'Reporting dashboards for ongoing optimization',
    ],
    result: 'For sellers spending $5,000+/month on Amazon ads who want to know if it\'s working.',
  },
  {
    num: '06', title: 'Multi-Channel Diversification', color: 'emerald',
    desc: "If 100% of your revenue runs through one platform, you don't have a business — you have a dependency. We build multi-channel strategies that spread risk and multiply revenue.",
    items: [
      'Amazon (primary or secondary)',
      'Walmart Marketplace',
      'TikTok Shop (fastest-growing US e-commerce channel)',
      'Shopify DTC (brand equity and margin protection)',
      'Cross-channel advertising coordination',
    ],
    result: "Spread risk. Multiply revenue. Own your brand.",
  },
  {
    num: '07', title: 'End-to-End Product Launch Strategy', color: 'amber',
    desc: 'A new product launch is not just about going live. It\'s about generating velocity, building reviews, acquiring early ranking, and surviving the first 90 days without burning your launch budget.',
    items: [
      'Pre-launch: Listing optimized, PPC structure built',
      'Week 1-2: Launch PPC with aggressive exact-match discovery',
      'Week 2-4: Compliant review acquisition strategy',
      'Month 2: Keyword rank tracking and bid optimization',
      'Month 3: Profitability analysis and scaling decisions',
    ],
    result: 'From $1,000/month to $10,000/month in 90–120 days — for products with validated demand.',
  },
];

const colorMap = {
  amber: 'amber', cyan: 'cyan', violet: 'violet', emerald: 'emerald',
};
const textColorMap = {
  amber: 'text-amber-400', cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
};
const borderColorMap = {
  amber: 'border-amber-400/40 text-amber-400', cyan: 'border-cyan-400/40 text-cyan-400',
  violet: 'border-violet-400/40 text-violet-400', emerald: 'border-emerald-400/40 text-emerald-400',
};

export default function Marketplace() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        title="Amazon & Walmart Marketplace Management"
        description="Suspended accounts, dying PPC, buried listings — Nazam LLC fixes it all. Full Amazon and Walmart account management, suspended account recovery, and multi-channel launch strategy."
        path="/marketplace"
        serviceName="Amazon & Walmart Marketplace Management"
        serviceDescription="Nazam LLC helps Amazon and Walmart sellers with account management, suspended account recovery, listing optimization, PPC support, reporting dashboards, and multi-channel marketplace strategy."
      />
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="orb orb-amber absolute w-[600px] h-[600px] -top-20 right-0 opacity-30" />
        <div className="orb orb-cyan absolute w-[400px] h-[400px] bottom-0 -left-20 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <SectionLabel color="amber">Amazon & Walmart Marketplace Management</SectionLabel>
          </motion.div>
          <motion.h1
            className="font-display font-bold text-white text-hero mt-6 mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your Marketplace Account Is Either<br />
            <span className="gradient-text-amber">Making You Money or Eating It.</span>
          </motion.h1>
          <motion.p
            className="max-w-2xl text-slate-400 text-lg font-sans leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Suspended accounts. PPC burning cash with no return. Listings no one sees. Margins shrinking every quarter. You started selling to build freedom — not to be buried in dashboards.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          >
            {painPoints.map((p) => (
              <span key={p.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm font-sans">
                {p.icon} {p.label}
              </span>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="amber" size="lg">Get a Free Account Audit →</Button>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-space-dark/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display font-bold text-white text-section mb-6">
              Selling on Amazon or Walmart<br />
              <span className="gradient-text-amber">Was Supposed to Be Simpler Than This</span>
            </h2>
            <p className="text-slate-400 font-sans leading-relaxed mb-4">
              The rules change constantly. Amazon suspends accounts for reasons that feel arbitrary. Walmart is growing fast but the platform is a maze. PPC that worked three months ago is hemorrhaging money today.
            </p>
            <p className="text-slate-400 font-sans leading-relaxed">
              Most sellers hit a ceiling not because their product is bad — but because they're playing defense instead of offense. They're reacting to problems instead of building systems that prevent them. That's where we come in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionLabel color="amber">What We Offer</SectionLabel>
            <h2 className="font-display font-bold text-white text-section mt-5">
              End-to-End Marketplace Management<br />— Everything, Done.
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.05}>
                <GlassCard glow={colorMap[s.color]} className="group">
                  {s.specialty && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold font-sans mb-4">
                      ⚡ Specialty Service
                    </div>
                  )}
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <span className={`text-5xl font-display font-bold opacity-20 ${textColorMap[s.color]}`}>{s.num}</span>
                      <h3 className="font-display font-bold text-white text-xl mt-2 mb-3">{s.title}</h3>
                      <p className="text-slate-400 text-sm font-sans leading-relaxed">{s.desc}</p>
                      <p className={`mt-4 text-sm font-sans font-medium italic ${textColorMap[s.color]}`}>{s.result}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm font-sans text-slate-300">
                            <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full border ${borderColorMap[s.color]} flex items-center justify-center text-xs`}>✓</span>
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

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-white text-section mb-5">
              Your Account Deserves More Than<br />
              <span className="gradient-text-amber">You Can Give It Alone</span>
            </h2>
            <p className="text-slate-400 font-sans mb-10">
              Let us audit your account — free, no commitment. In 48 hours we'll tell you exactly what's costing you money and what you should do about it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="amber" size="lg">Request a Free Account Audit →</Button>
              <Button href="mailto:admin@nazamllc.com" variant="outline" size="lg">Email Us</Button>
            </div>
            <p className="text-slate-500 text-sm font-sans italic">
              We only take on marketplace clients where we believe we can meaningfully move the needle. If we can't help you, we'll tell you that too.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
