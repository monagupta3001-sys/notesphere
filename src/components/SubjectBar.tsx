import React from 'react';
import { ALL_SUBJECTS } from '../data/subjectsData';
import { SubjectId } from '../types';

interface SubjectBarProps {
  currentSubject: SubjectId;
  onSelectSubject: (id: SubjectId) => void;
}

export const SubjectBar: React.FC<SubjectBarProps> = ({
  currentSubject,
  onSelectSubject
}) => {
  return (
    <div className="bg-white border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 shrink-0 text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:flex">
            <span>Subjects:</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {ALL_SUBJECTS.map((sub) => {
              const isSelected = currentSubject === sub.id;

              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectSubject(sub.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative shrink-0 ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md scale-102 ring-2 ring-blue-500/40'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  <span className="text-base sm:text-lg">{sub.icon}</span>
                  <span>{sub.name}</span>

                  {sub.liveChaptersCount > 0 ? (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold uppercase ${
                      isSelected ? 'bg-amber-400 text-slate-950' : 'bg-blue-100 text-blue-800'
                    }`}>
                      Live
                    </span>
                  ) : (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {sub.totalChapters} Ch
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
