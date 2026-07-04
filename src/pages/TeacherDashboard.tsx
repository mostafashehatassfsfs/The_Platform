import React, { useState } from "react";
import { motion } from "motion/react";
import { Settings, Users, Award } from "lucide-react";
import { t, getPlatformLanguage } from "../locales";
import { AchieversManager } from "../components/AchieversManager";

export const TeacherDashboard: React.FC = () => {
  const lang = getPlatformLanguage() as "en" | "ar";
  const isRtl = lang === "ar";
  const [activeTab, setActiveTab] = useState("overview");
  const [showAchieversManager, setShowAchieversManager] = useState(false);

  return (
    <div className={`min-h-screen bg-slate-50 ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "overview"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              📊 {lang === "ar" ? "نظرة عامة" : "Overview"}
            </button>
            <button
              onClick={() => setActiveTab("achievers")}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "achievers"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              🏆 {lang === "ar" ? "الأبطال" : "Achievers"}
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "content"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              📝 {lang === "ar" ? "المحتوى" : "Content"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h1 className="text-4xl font-black text-slate-900">
              {lang === "ar" ? "لوحة التحكم" : "Dashboard"}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quick Links */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">
                      {lang === "ar" ? "الطلاب" : "Students"}
                    </p>
                    <p className="text-3xl font-black text-slate-900 mt-1">0</p>
                  </div>
                  <Users size={32} className="text-blue-500" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">
                      {lang === "ar" ? "الأبطال" : "Achievers"}
                    </p>
                    <p className="text-3xl font-black text-slate-900 mt-1">0</p>
                  </div>
                  <Award size={32} className="text-amber-500" />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase">
                      {lang === "ar" ? "الدورات" : "Courses"}
                    </p>
                    <p className="text-3xl font-black text-slate-900 mt-1">0</p>
                  </div>
                  <Settings size={32} className="text-purple-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Achievers Management Tab */}
        {activeTab === "achievers" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-slate-900">
                {lang === "ar" ? "إدارة الأبطال" : "Manage Achievers"}
              </h2>
              <button
                onClick={() => setShowAchieversManager(true)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <Award size={18} />
                {lang === "ar" ? "فتح المدير" : "Open Manager"}
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
              <Trophy size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-600">
                {lang === "ar"
                  ? "انقر على الزر أعلاه لإدارة الأبطال ولوحة الشرف الخاصة بك"
                  : "Click the button above to manage your achievers and honor roll"}
              </p>
            </div>
          </motion.div>
        )}

        {/* Content Management Tab */}
        {activeTab === "content" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">
              {lang === "ar" ? "إدارة المحتوى" : "Manage Content"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: lang === "ar" ? "الدورات" : "Courses",
                  desc: lang === "ar" ? "إدارة الدورات والدروس" : "Manage courses and lessons",
                  icon: "📚"
                },
                {
                  title: lang === "ar" ? "الاختبارات" : "Quizzes",
                  desc: lang === "ar" ? "إنشاء واختبارات" : "Create and manage quizzes",
                  icon: "❓"
                },
                {
                  title: lang === "ar" ? "المحفظة" : "Wallet",
                  desc: lang === "ar" ? "إدارة طلبات الشحن" : "Manage top-up requests",
                  icon: "💰"
                },
                {
                  title: lang === "ar" ? "الطلاب" : "Students",
                  desc: lang === "ar" ? "عرض بيانات الطلاب" : "View student data",
                  icon: "👥"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Achievers Manager Modal */}
      {showAchieversManager && (
        <AchieversManager onClose={() => setShowAchieversManager(false)} />
      )}
    </div>
  );
};

const Trophy = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M6 9c0-1 1-2 2-2h8c1 0 2 1 2 2v8c0 1-1 2-2 2H8c-1 0-2-1-2-2V9z" />
    <path d="M9 5v4m6-4v4M6 17h12" />
  </svg>
);
