import { getPlatformLanguage } from './locales';

// Dynamic helper to retrieve configurable settings with fallbacks
export const getPlatformSettings = () => {
  const storedNameEn = localStorage.getItem("platform_name_en") || "Academia Platform";
  const storedNameAr = localStorage.getItem("platform_name_ar") || "منصة أكاديميا التعليمية";
  const storedVodafone = localStorage.getItem("platform_vodafone") || "01012345678";
  const storedLogo = localStorage.getItem("platform_logo") || "🎓";

  return {
    brandName: {
      en: storedNameEn,
      ar: storedNameAr
    },
    vodafoneCashNumber: storedVodafone,
    logoSymbol: storedLogo
  };
};

export const THEME_CONFIG = {
  get logoSymbol() {
    return getPlatformSettings().logoSymbol;
  },
  colors: {
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryDark: '#3730a3',
    secondary: '#0ea5e9',
    accent: {
      emerald: '#10b981',
      purple: '#a855f7',
      pink: '#ec4899'
    }
  },
  classes: {
    primaryButton: "px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer",
    primaryButtonLarge: "px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer",
    secondaryButton: "px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-semibold rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer",
    card: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5",
    cardHover: "bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200",
    input: "w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",
    label: "block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5",
    badge: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-100 text-indigo-700",
    section: "py-12 md:py-20 lg:py-24",
    sectionAlt: "py-12 md:py-20 bg-slate-50/60 border-y border-slate-100"
  }
};

export function getBrandName(): string {
  const lang = getPlatformLanguage() as 'en' | 'ar';
  const settings = getPlatformSettings();
  return settings.brandName[lang] || settings.brandName.en;
}
