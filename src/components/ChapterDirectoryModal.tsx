import React, { useState } from 'react';
import { X, BookOpen, Layers, Lock, Sparkles, CheckCircle2, PlusCircle } from 'lucide-react';
import { ALL_SUBJECTS } from '../data/subjectsData';
import { SubjectId } from '../types';

interface ChapterDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubjectAndChapter: (subjectId: SubjectId, chapterId: number) => void;
}

export const ChapterDirectoryModal: React.FC<ChapterDirectoryModalProps> = ({
  isOpen,
  onClose,
  onSelectSubjectAndChapter
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('science');

  if (!isOpen) return null;

  const activeSubject = ALL_SUBJECTS.find(s => s.id === selectedSubjectId) || ALL_SUBJECTS[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                Class 8th All Subjects & Chapter Library
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Choose any subject or chapter to view curriculum or study notes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200/60 rounded-xl text-slate-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subject Filter Pills */}
        <div className="px-6 py-3 border-b border-slate-200 bg-white flex gap-2 overflow-x-auto no-scrollbar">
          {ALL_SUBJECTS.map((sub) => {
            const isSelected = selectedSubjectId === sub.id;

            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{sub.icon}</span>
                <span>{sub.name}</span>
                {sub.liveChaptersCount > 0 ? (
                  <span className="bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase">
                    Live
                  </span>
                ) : (
                  <span className="bg-slate-200 text-slate-600 px-1.5 py-0.2 rounded-full text-[9px]">
                    {sub.totalChapters} Ch
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Subject Context Header */}
        <div className="px-6 py-2.5 bg-blue-50/60 border-b border-blue-100 flex items-center justify-between text-xs">
          <div className="text-blue-900 font-bold flex items-center gap-2">
            <span>{activeSubject.icon}</span>
            <span>{activeSubject.fullName}</span>
            <span className="text-blue-500">•</span>
            <span className="text-slate-600 font-normal">{activeSubject.textbook}</span>
          </div>
          <span className="text-[11px] text-blue-700 font-bold bg-white px-2 py-0.5 rounded border border-blue-200">
            {activeSubject.chapters.length} Chapters
          </span>
        </div>

        {/* Chapters Grid */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeSubject.chapters.map((ch) => {
              const isLive = ch.status === 'available';

              return (
                <div
                  key={ch.id}
                  onClick={() => {
                    onSelectSubjectAndChapter(activeSubject.id, ch.id);
                    onClose();
                  }}
                  className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer hover:shadow-md ${
                    isLive
                      ? 'bg-blue-50/80 border-blue-300 hover:border-blue-500 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {ch.chapterNumber}
                      </span>
                      {isLive ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Live Detailed Notes
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3 text-amber-600" /> Syllabus Ready
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug">
                      {ch.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {ch.tagline}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{ch.unitsCount} Units</span>
                    <span className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                      {isLive ? 'Open Notes & Quizzes →' : 'View / Drop Notes →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
