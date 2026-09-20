// ─── App Root ─────────────────────────────────────────────────────────────────
// Composes all page sections. Each section lives in its own file under
// src/components/ so concerns are cleanly separated.

import { useState } from "react";
import type { Page } from "@/types";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import StatsCards from "@/components/StatsCards";
import About from "@/components/About";
import SkillsTools from "@/components/SkillsTools";
import Quote from "@/components/Quote";
import Projects from "@/components/Projects";
import DublyCaseStudy from "@/components/DublyCaseStudy";
import Services from "@/components/Services";
import Interests from "@/components/Interests";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GraphicDesignPage from "@/components/GraphicDesignPage";
import DublyPage from "@/components/DublyPage";

// ─── Shared scroll helper ─────────────────────────────────────────────────────
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Responsive breakpoint styles (injected once at root) ─────────────────────
const RESPONSIVE_STYLES = `
  @media (max-width: 900px) {
    .hidden-mobile { display: none !important; }
    .show-mobile   { display: flex !important; }
    .hero-grid     { grid-template-columns: 1fr !important; gap: 40px !important; }
    .hero-grid > div:last-child { order: -1; }
    .about-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
    .services-grid { grid-template-columns: 1fr !important; }
    .interests-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .contact-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
    .stats-grid    { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (min-width: 901px) {
    .show-mobile { display: none !important; }
  }
`;

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "graphic-design") {
    return <GraphicDesignPage onBack={() => setPage("home")} />;
  }

  if (page === "dubly-case-study") {
    return <DublyPage onBack={() => setPage("home")} />;
  }

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100%" }}>
      {/* Inject responsive overrides once */}
      <style>{RESPONSIVE_STYLES}</style>

      <Nav onScrollTo={scrollTo} />

      <main>
        <Hero onScrollTo={scrollTo} />
        <SkillsTicker />
        <StatsCards />
        <About onScrollTo={scrollTo} />
        <SkillsTools />
        <Quote />
        <Projects onOpenGallery={() => setPage("graphic-design")} />
        <DublyCaseStudy onViewCaseStudy={() => setPage("dubly-case-study")} />
        <Services />
        <Interests />
        <Testimonials />
        <Contact />
      </main>

      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
