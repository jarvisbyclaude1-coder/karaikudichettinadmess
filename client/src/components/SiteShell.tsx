/**
 * The Tamarind House: the supplied circular spice logo is the primary brand anchor, paired with a restrained editorial wordmark.
 * Navigation is intentionally reduced to the live public sections: story, ordering, location, and reviews.
 */
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { href: "/", en: "Home", ta: "முகப்பு" },
  { href: "/story", en: "Our Story", ta: "எங்கள் கதை" },
  { href: "/location", en: "Location", ta: "இடம்" },
  { href: "/reviews", en: "Reviews", ta: "கருத்துகள்" },
];

const logoUrl = "/manus-storage/karaikudi-chettinad-mess-logo_94ae601a.jpeg";

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f2e8] text-[#321519]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || location !== "/" ? "border-b border-[#641b20]/10 bg-[#f7f2e8]/95 shadow-[0_6px_24px_rgba(50,21,25,0.06)] backdrop-blur-lg" : "bg-gradient-to-b from-[#180b0c]/70 to-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="Karaikudi Chettinad Mess home">
            <img src={logoUrl} alt="Karaikudi Chettinad Mess spice logo" className="h-11 w-11 rounded-full bg-[#fffaf2] object-cover shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className={`brand-lockup ${scrolled || location !== "/" ? "text-[#641b20]" : "text-[#fffaf2]"}`}>
              <span>Karaikudi</span><span>Chettinad Mess</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${location === item.href ? "nav-link-active" : ""} ${scrolled || location !== "/" ? "text-[#4a292b]" : "text-[#fffaf2]"}`}>
                {language === "en" ? item.en : item.ta}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={toggleLanguage} className={`language-switch ${scrolled || location !== "/" ? "border-[#641b20]/20 bg-white text-[#641b20]" : "border-white/25 bg-white/10 text-white"}`} aria-label="Switch site language">
              <span className={language === "en" ? "opacity-100" : "opacity-45"}>EN</span><span className="mx-1 opacity-40">/</span><span className={language === "ta" ? "opacity-100" : "opacity-45"}>தமிழ்</span>
            </button>
            <Link href="/order" className="button-primary text-xs"><span>{t("Order Online", "ஆன்லைனில் ஆர்டர்")}</span><ArrowUpRight size={15} /></Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleLanguage} className={`rounded-full border px-3 py-2 text-[10px] font-bold tracking-[0.14em] ${scrolled || location !== "/" ? "border-[#641b20]/20 bg-white text-[#641b20]" : "border-white/25 bg-white/10 text-white"}`}>{language === "en" ? "தமிழ்" : "EN"}</button>
            <button onClick={() => setIsOpen((open) => !open)} className={`grid h-10 w-10 place-items-center rounded-full border ${scrolled || location !== "/" ? "border-[#641b20]/20 bg-white text-[#641b20]" : "border-white/25 bg-white/10 text-white"}`} aria-expanded={isOpen} aria-label="Open navigation menu">{isOpen ? <X size={19} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </header>

      {isOpen && <div className="fixed inset-x-0 top-[76px] z-40 border-b border-[#641b20]/10 bg-[#f7f2e8] p-6 shadow-xl lg:hidden">
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={`border-b border-[#641b20]/10 py-4 font-display text-3xl ${location === item.href ? "text-[#641b20]" : "text-[#5c3b3c]"}`}>{language === "en" ? item.en : item.ta}</Link>)}
          <Link href="/order" className="button-primary mt-6 justify-center"><span>{t("Order Online", "ஆன்லைனில் ஆர்டர்")}</span><ArrowUpRight size={17} /></Link>
        </nav>
      </div>}

      <main>{children}</main>

      <footer className="relative overflow-hidden bg-[#321519] px-5 pb-8 pt-16 text-[#f7f2e8] sm:px-8 lg:px-12">
        <div className="absolute -right-16 -top-20 h-72 w-72 rotate-12 border border-[#bc8a51]/15" />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div><div className="flex items-center gap-3"><img src={logoUrl} alt="Karaikudi Chettinad Mess spice logo" className="h-12 w-12 rounded-full bg-[#fffaf2] object-cover" /><p className="font-display text-3xl leading-none">Karaikudi<br />Chettinad Mess</p></div><p className="mt-6 max-w-xs text-sm leading-7 text-[#f1e7d8]/70">{t("Authentic Chettinad flavour, now served in the heart of Abu Shagara.", "அபு ஷகராவின் இதயத்தில் உண்மையான செட்டிநாடு சுவை.")}</p></div>
          <div><p className="eyebrow text-[#bc8a51]">{t("Explore", "ஆராயுங்கள்")}</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#f1e7d8]/75">{navItems.slice(1).map((item) => <Link key={item.href} href={item.href} className="footer-link">{language === "en" ? item.en : item.ta}</Link>)}</div></div>
          <div><p className="eyebrow text-[#bc8a51]">{t("Service", "சேவை")}</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#f1e7d8]/75"><Link href="/order" className="footer-link">{t("Order online", "ஆன்லைனில் ஆர்டர்")}</Link><Link href="/location" className="footer-link">{t("Location & contact", "இடம் மற்றும் தொடர்பு")}</Link></div></div>
          <div><p className="eyebrow text-[#bc8a51]">{t("Visit", "வருகை")}</p><p className="mt-5 text-sm leading-7 text-[#f1e7d8]/75">{t("Abu Shagara, Sharjah, UAE", "அபு ஷகரா, ஷார்ஜா, UAE")}</p><div className="mt-5 flex flex-col gap-2 text-sm text-[#f7f2e8]"><a href="tel:+971508088154" className="inline-flex items-center gap-2 hover:text-[#d3a56d]"><Phone size={15} />+971 50 808 8154</a><a href="tel:+97165339330" className="hover:text-[#d3a56d]">06 533 9330</a><a href="tel:+97165261010" className="hover:text-[#d3a56d]">06 526 1010</a></div></div>
        </div>
        <div className="relative mx-auto mt-14 flex max-w-[1320px] flex-col gap-2 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.16em] text-[#f1e7d8]/45 sm:flex-row sm:justify-between"><p>© 2026 Karaikudi Chettinad Mess</p><p>{t("Abu Shagara, Sharjah · UAE", "அபு ஷகரா, ஷார்ஜா · UAE")}</p></div>
      </footer>
    </div>
  );
}
