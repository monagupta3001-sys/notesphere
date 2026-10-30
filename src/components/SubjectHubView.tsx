import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  Lock, 
  Search, 
  Calculator, 
  Layers, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { ALL_SUBJECTS } from '../data/subjectsData';
import { SubjectId, SubjectChapter } from '../types';

interface SubjectHubViewProps {
  subjectId: SubjectId;
  onSwitchToScience: () => void;
}

export const SubjectHubView: React.FC<SubjectHubViewProps> = ({
  subjectId,
  onSwitchToScience
}) => {
  const currentSubject = ALL_SUBJECTS.find(s => s.id === subjectId) || ALL_SUBJECTS[0];
  const [searchQuery, setSearchQuery] = useState('');

  // Math Interactive Demo State (for Mathematics subject)
  const [mathNumerator, setMathNumerator] = useState<number>(3);
  const [mathDenominator, setMathDenominator] = useState<number>(4);

  const filteredChapters = currentSubject.chapters.filter(ch => 
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.subtopics.some(st => st.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Subject Hero */}
      <div className={`bg-gradient-to-r ${currentSubject.themeGradient} text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 relative overflow-hidden`}>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                Class 8th Curriculum
              </span>
              <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md">
                {currentSubject.textbook}
              </span>
              <span className="bg-black/20 text-white/90 text-xs font-medium px-2.5 py-1 rounded-md">
                {currentSubject.totalChapters} Chapters Total
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-4xl">{currentSubject.icon}</span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
                {currentSubject.fullName}
              </h2>
            </div>

            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mt-2 max-w-2xl">
              {currentSubject.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <button
                onClick={onSwitchToScience}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
              >
                <span>🔬</span> Explore Live Science Chapter 1 Notes →
              </button>
            </div>
          </div>

          {/* Coming Soon Notice Card */}
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 w-full lg:w-80 shrink-0 text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Coming Soon</span>
            </div>
            <h4 className="font-bold text-white text-sm">
              Content Uploading Soon
            </h4>
            <p className="text-white/90 leading-relaxed text-[11px]">
              Notes, mindmaps, diagrams, and quizzes for {currentSubject.name} will be uploaded soon. Explore the syllabus topics below!
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Mathematics Mini-Workbench (if Math is selected) */}
      {subjectId === 'math' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-600" />
              <div>
                <h4 className="text-base font-extrabold text-slate-900 font-heading">
                  Interactive Concept Preview: Chapter 1 — Rational Numbers (p/q)
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  Test rational properties, additive inverse, and reciprocal live
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              NCERT Ch. 1 Math
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-xs">
            {/* Input card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <span className="font-bold text-slate-700 uppercase">Input Fraction (p / q)</span>
              <div className="flex items-center gap-2">
                <div className="w-20">
                  <label className="text-[10px] text-slate-500 font-bold">Numerator (p)</label>
                  <input
                    type="number"
                    value={mathNumerator}
                    onChange={(e) => setMathNumerator(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-center font-bold"
                  />
                </div>
                <span className="text-xl font-bold text-slate-400 mt-4">/</span>
                <div className="w-20">
                  <label className="text-[10px] text-slate-500 font-bold">Denominator (q ≠ 0)</label>
                  <input
                    type="number"
                    value={mathDenominator === 0 ? 1 : mathDenominator}
                    onChange={(e) => setMathDenominator(Number(e.target.value) || 1)}
                    className="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-center font-bold"
                  />
                </div>
              </div>
            </div>

            {/* Inverses card */}
            <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 space-y-2">
              <span className="font-bold text-amber-900 uppercase">Additive & Multiplicative Inverse</span>
              <div className="space-y-1 font-semibold text-slate-800">
                <div>• Additive Inverse: <strong className="text-amber-800">{-mathNumerator} / {mathDenominator}</strong> (Sum = 0)</div>
                <div>• Reciprocal: <strong className="text-amber-800">{mathDenominator} / {mathNumerator}</strong> (Product = 1)</div>
                <div>• Decimal Value: <strong className="text-amber-800 font-mono">{(mathNumerator / mathDenominator).toFixed(3)}</strong></div>
              </div>
            </div>

            {/* Quick Property reminder */}
            <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200 space-y-1 text-slate-800">
              <span className="font-bold text-indigo-950 uppercase">Key Property for Exams</span>
              <p className="text-[11px] leading-relaxed">
                Rational numbers are <strong>closed</strong> under Addition, Subtraction, and Multiplication. (Division is NOT closed because dividing by zero is undefined).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chapters Explorer & Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 font-heading">
            {currentSubject.name} Chapters Syllabus
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Browse all upcoming chapters for Class 8th {currentSubject.name}
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${currentSubject.name} chapters...`}
            className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 outline-hidden shadow-2xs"
          />
        </div>
      </div>

      {/* Chapter Cards Grid with "Coming Soon" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.map((chapter) => {
          return (
            <div
              key={chapter.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {chapter.chapterNumber}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3 text-amber-600" /> Coming Soon
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 font-heading leading-snug">
                  {chapter.title}
                </h4>

                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {chapter.tagline}
                </p>

                {/* Subtopics Pills */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {chapter.subtopics.slice(0, 3).map((st, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200"
                    >
                      {st}
                    </span>
                  ))}
                  {chapter.subtopics.length > 3 && (
                    <span className="text-[10px] text-slate-400 px-1 py-0.5">
                      +{chapter.subtopics.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Coming soon notice */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{chapter.unitsCount} Units Curriculum</span>
                <span className="text-amber-700 font-semibold flex items-center gap-1 text-[11px]">
                  Content uploading soon
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
