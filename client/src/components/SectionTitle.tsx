/**
 * The Tamarind House: editorial headings use generous ivory space, cropped display type, and a subtle tile-rule cue.
 */
import { useLanguage } from "@/contexts/LanguageContext";

export function SectionTitle({ eyebrowEn, eyebrowTa, titleEn, titleTa, bodyEn, bodyTa, dark = false }: { eyebrowEn: string; eyebrowTa: string; titleEn: string; titleTa: string; bodyEn?: string; bodyTa?: string; dark?: boolean }) {
  const { t } = useLanguage();
  return <div className={dark ? "text-[#f7f2e8]" : "text-[#321519]"}><p className={`eyebrow ${dark ? "text-[#d3a56d]" : "text-[#8f5738]"}`}>{t(eyebrowEn, eyebrowTa)}</p><h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.93] tracking-[-0.045em] sm:text-6xl">{t(titleEn, titleTa)}</h2>{bodyEn && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${dark ? "text-[#f1e7d8]/70" : "text-[#5f4545]"}`}>{t(bodyEn, bodyTa || bodyEn)}</p>}</div>;
}
