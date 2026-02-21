"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  FileSearch,
  Gavel,
  Globe2,
  Hammer,
  Landmark,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ScrollText,
  Shield,
  ShieldCheck,
  Ship,
  Sparkles,
  TrendingUp,
  Users2,
  Wallet,
  X,
  Zap,
} from "lucide-react";

/* ─── FADE-IN HOOK ─── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["About", "Services", "Why Us", "Process", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 md:h-22 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logotp.png"
            alt="MUGNI Consulting"
            width={220}
            height={66}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "")}`}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-slate-500 hover:text-teal-700"
                  : "text-slate-600 hover:text-teal-700"
              }`}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !px-5 !py-2.5">
            Get Started
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s/g, "")}`}
              className="block py-2 text-slate-600"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const fade = useFadeIn();
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-50/40 to-teal-50/30 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-40" />

      <div
        ref={fade.ref}
        className={`relative mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge-accent mb-6 mx-auto w-fit">
            <Sparkles size={20} />
            Mugni Consulting Tax &amp; Legal Services
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
            Empowering your
            <br />
            <span className="text-gradient">full potential</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
            Simple, effective, and actionable solutions. We enrich your business
            journey and emancipate you from challenges.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const fade = useFadeIn();
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="relative h-[420px] md:h-[520px]">
        <Image
          src="/background.jpeg"
          alt="MUGNI Consulting Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

        <div className="relative h-full flex items-center">
          <div
            ref={fade.ref}
            className={`mx-auto max-w-7xl px-6 w-full transition-all duration-1000 ${
              fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
              <a href="/" className="flex items-center gap-3">
              <Image
            src="/logo.png"
            alt="MUGNI Consulting"
            width={220}
            height={66}
            className="h-14 md:h-16 w-auto object-contain rounded-xl shadow-lg"
            priority
          />
        </a>
              </div>
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-snug">
                Mugni, which translates to{" "}
                <span className="text-amber-300">&ldquo;The Enricher&rdquo;</span> and{" "}
                <span className="text-purple-300">&ldquo;The Emancipator&rdquo;</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About content below */}
      <div className="bg-gradient-to-b from-slate-50 to-white section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-accent mb-4">
                <BookOpen size={12} />
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Dedicated to empowering
                <br />
                <span className="text-gradient">your business growth</span>
              </h2>
              <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                As your partner, we are dedicated to empowering our clients by
                unlocking their <strong className="text-slate-700">full potential</strong> and
                helping them seize <strong className="text-slate-700">maximum opportunities</strong>.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our mission is to enrich the business journeys of our clients by
                providing simple, effective, and actionable solutions. With a
                commitment to excellence and a passion for transformative results,
                we work tirelessly to emancipate our clients from challenges,
                enabling them to thrive in an ever-evolving business landscape.
              </p>
              <a href="#services" className="btn-primary mt-8">
                Our Services <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/background.jpeg"
                  alt="Modern business building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-amber-400 flex items-center justify-center">
                    <ShieldCheck size={22} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const taxServices = [
  {
    icon: FileCheck2,
    title: "Compliance",
    desc: "Monthly compliance, annual corporate income tax return, transfer pricing services, and tax advisory.",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: Gavel,
    title: "Audit & Dispute",
    desc: "Full representation in tax audits, objections, appeals, and judicial review for all tax types.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Wallet,
    title: "Tax Recovery",
    desc: "Income tax refund and VAT refund processing to recover your rightful tax overpayments.",
    color: "bg-amber-50 text-amber-600",
  },
];

const legalServices = [
  {
    icon: Scale,
    title: "Dispute Resolution & Litigation",
    desc: "Expert legal representation in commercial disputes and court proceedings.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Building2,
    title: "Mergers & Acquisitions",
    desc: "End-to-end M&A advisory including due diligence, structuring, and regulatory compliance.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ScrollText,
    title: "Intellectual Property",
    desc: "IP registration, protection, licensing, and enforcement across all asset classes.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Users2,
    title: "Labor & Employment",
    desc: "Employment contracts, workplace compliance, and labor dispute resolution.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Ship,
    title: "Maritime & Shipping",
    desc: "Shipping contracts, marine insurance, and port authority regulatory matters.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Shield,
    title: "Insurance",
    desc: "Insurance regulatory compliance, claims handling, and policy advisory.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Hammer,
    title: "Antitrust & Competition",
    desc: "Competition law compliance, merger notifications, and antitrust investigations.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Zap,
    title: "Energy & Natural Resources",
    desc: "Licensing, regulatory compliance, and project advisory for energy and mining sectors.",
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Financial regulatory compliance, lending agreements, and banking dispute resolution.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    desc: "Foreign and domestic investment structuring, licensing, and regulatory advisory.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: CircleDollarSign,
    title: "Debt Restructuring",
    desc: "Corporate debt restructuring, creditor negotiations, and insolvency advisory.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Globe2,
    title: "Tourism & FnB Industry",
    desc: "Industry-specific permits, regulatory compliance, and commercial agreements.",
    color: "bg-lime-50 text-lime-700",
  },
  {
    icon: Briefcase,
    title: "Corporate Commercial",
    desc: "Company establishment, corporate governance, and commercial contract advisory.",
    color: "bg-fuchsia-50 text-fuchsia-600",
  },
  {
    icon: FileSearch,
    title: "General Corporate Matters",
    desc: "Day-to-day legal support, compliance monitoring, and general corporate advisory.",
    color: "bg-slate-100 text-slate-600",
  },
];

function Services() {
  const [activeTab, setActiveTab] = useState<"tax" | "legal">("tax");
  const fade = useFadeIn();

  return (
    <section id="services" className="section-padding bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={fade.ref}
          className={`max-w-2xl transition-all duration-1000 ${
            fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="badge-accent mb-4">
            <LayoutGrid size={12} />
            Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Comprehensive solutions for your business
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Tax and legal services tailored to your industry, size, and unique challenges.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 w-fit shadow-sm">
          <button
            onClick={() => setActiveTab("tax")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "tax"
                ? "bg-teal-700 text-white shadow-lg shadow-teal-200"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            Tax Services
          </button>
          <button
            onClick={() => setActiveTab("legal")}
            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "legal"
                ? "bg-teal-700 text-white shadow-lg shadow-teal-200"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            Legal Services
          </button>
        </div>

        {/* Tax Services */}
        {activeTab === "tax" && (
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {taxServices.map((s, i) => (
              <div
                key={s.title}
                className="card-modern group cursor-pointer"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-5`}
                >
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact">Konsultasi <ArrowUpRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legal Services */}
        {activeTab === "legal" && (
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {legalServices.map((s, i) => (
              <div
                key={s.title}
                className="card-modern group cursor-pointer"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-5`}
                >
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact">Konsultasi <ArrowUpRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── WHY US ─── */
function WhyUs() {
  const fade = useFadeIn();
  const reasons = [
    {
      title: "The Enricher",
      desc: "We unlock your full potential and help you seize maximum opportunities for growth.",
    },
    {
      title: "The Emancipator",
      desc: "We emancipate you from challenges, enabling you to thrive in an ever-evolving landscape.",
    },
    {
      title: "End-to-End Support",
      desc: "From tax compliance to legal disputes — comprehensive coverage at every stage.",
    },
    {
      title: "Transformative Results",
      desc: "Simple, effective, and actionable solutions that deliver measurable outcomes.",
    },
  ];

  return (
    <section id="whyus" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={fade.ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="badge-accent mb-4">
              <Shield size={12} />
              Why MUGNI Consulting
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Built different.
              <br />
              <span className="text-gradient">Built for you.</span>
            </h2>
            <p className="mt-5 text-slate-500 text-lg leading-relaxed">
              We combine deep institutional knowledge with modern consulting
              practices to deliver outcomes that matter.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Work With Us <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-50 to-purple-50 flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-teal-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function Process() {
  const fade = useFadeIn();
  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We analyze your current tax and legal position, identify risks, and understand your business goals.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Our team designs a tailored approach that optimizes compliance and minimizes exposure.",
    },
    {
      step: "03",
      title: "Execution",
      desc: "We implement solutions with precision, handle filings, and manage all authority interactions.",
    },
    {
      step: "04",
      title: "Review",
      desc: "Ongoing monitoring and proactive updates ensure you stay ahead of regulatory changes.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={fade.ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-4">
            <Sparkles size={12} />
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Simple. Transparent. Effective.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 ${
                fade.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <span className="font-display text-4xl font-bold text-teal-500/30">
                {s.step}
              </span>
              <h3 className="font-display text-lg font-semibold mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-teal-500/40">
                  <ChevronDown size={20} className="rotate-[-90deg]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA + CONTACT ─── */
function Contact() {
  const fade = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request from ${form.name}${form.company ? ` - ${form.company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@mugniconsulting.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={fade.ref}
          className={`grid lg:grid-cols-5 gap-12 transition-all duration-1000 ${
            fade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-2">
            <span className="badge-accent mb-4">
              <Mail size={12} />
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Let&apos;s talk about your needs
            </h2>
            <p className="mt-4 text-slate-500">
              Schedule a free 30-minute consultation with one of our senior advisors.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, text: "+62 812 4692 7112", href: "tel:+6281246927112" },
                { icon: Mail, text: "contact@mugniconsulting.com", href: "mailto:contact@mugniconsulting.com" },
                {
                  icon: MapPin,
                  text: "92 Avenix E/19, Jl. Raya Serpong - Cisauk, BSD City, Cisauk, Tangerang, Banten, 15345",
                  href: undefined,
                },
              ].map((c) => (
                <div key={c.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-teal-700" />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-slate-600 text-sm mt-2 hover:text-teal-700 transition-colors">{c.text}</a>
                  ) : (
                    <span className="text-slate-600 text-sm mt-2">{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 card-modern !p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                  <input id="name" type="text" className="input-field" placeholder="Your full name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input id="email" type="email" className="input-field" placeholder="you@company.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                <input id="company" type="text" className="input-field" placeholder="Company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">How can we help?</label>
                <textarea id="message" rows={4} className="input-field resize-none" placeholder="Tell us about your tax or legal challenge..." required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logotp.png"
              alt="MUGNI Consulting"
              width={200}
              height={60}
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#services" className="hover:text-teal-700 transition-colors">Services</a>
            <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
            <a href="#contact" className="hover:text-teal-700 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} MUGNI Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
