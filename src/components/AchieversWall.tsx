import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, Star, Sparkles, TrendingUp } from "lucide-react";
import { RobustImage } from "./RobustImage";
import { getPlatformLanguage } from "../locales";

interface Achiever {
  id: string;
  name: string;
  result_line: string;
  photo_url?: string;
  display_order: number;
}

export const AchieversWall: React.FC = () => {
  const lang = getPlatformLanguage() as "en" | "ar";
  const isRtl = lang === "ar";
  const [achievers, setAchievers] = useState<Achiever[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAchievers();
  }, []);

  const fetchAchievers = async () => {
    try {
      const res = await fetch("/api/achievers/public");
      if (res.ok) {
        const data = await res.json();
        setAchievers(data);
      }
    } catch (err) {
      console.error("Failed to fetch achievers", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || achievers.length === 0) {
    return null; // Hide section if loading or no achievers
  }

  return (
    <section className={`py-16 bg-white ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={24} className="text-amber-500" />
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              {lang === "ar" ? "لوحة الأبطال" : "Honor Roll"}
            </h2>
            <Sparkles size={24} className="text-amber-500" />
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {lang === "ar"
              ? "طلابنا المتميزون الذين حققوا نتائج استثنائية"
              : "Our top-performing students who achieved exceptional results"}
          </p>
        </motion.div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((achiever, idx) => {
            const isFirstTier = idx === 0;
            const isSecondTier = idx === 1;

            return (
              <motion.div
                key={achiever.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.08, 0.4) }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative flex flex-col bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isFirstTier ? "border-amber-400 lg:scale-105" : "border-slate-100 hover:border-amber-300"
                }`}
              >
                {/* Golden Highlight Border */}
                {isFirstTier && (
                  <div className="absolute inset-0 border-2 border-amber-400/70 rounded-2xl pointer-events-none z-20 animate-pulse"></div>
                )}
                {!isFirstTier && isSecondTier && (
                  <div className="absolute inset-0 border border-slate-300/60 rounded-2xl pointer-events-none z-20"></div>
                )}

                {/* Badge */}
                <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} flex flex-col items-end gap-1.5 z-10`}>
                  <div
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full shadow-md text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${
                      isFirstTier
                        ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 border border-yellow-300"
                        : isSecondTier
                        ? "bg-slate-200 text-slate-800 border border-slate-300"
                        : "bg-indigo-600 text-white border border-indigo-500"
                    }`}
                  >
                    {isFirstTier ? (
                      <Sparkles size={11} className="animate-spin" />
                    ) : (
                      <Award size={11} />
                    )}
                    <span>{isFirstTier ? (isRtl ? "نخبة" : "TOP") : isRtl ? "بطل" : "HERO"}</span>
                  </div>
                </div>

                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-950 shrink-0">
                  <RobustImage
                    src={achiever.photo_url}
                    alt={achiever.name}
                    fallbackType="student"
                    aspectRatio="aspect-[3/4]"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between text-center bg-white space-y-2">
                  <div className="space-y-1">
                    <h4 className="font-display font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors text-sm sm:text-base leading-tight line-clamp-1">
                      {achiever.name}
                    </h4>
                    <p
                      className="text-[11px] leading-relaxed font-semibold text-slate-500 min-h-[32px] line-clamp-2"
                      dir={isRtl ? "rtl" : "ltr"}
                    >
                      {achiever.result_line}
                    </p>
                  </div>

                  <div className="w-8 h-0.5 bg-slate-100 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>

                  <div className="flex items-center justify-center gap-1 text-[9px] font-black uppercase tracking-wider text-indigo-500">
                    <TrendingUp size={10} />
                    <span>{isRtl ? "عضو لوحة الشرف" : "Honor Roll Member"}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
