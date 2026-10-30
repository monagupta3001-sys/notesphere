import React, { useState } from 'react';
import { 
  FileCheck, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Bookmark
} from 'lucide-react';
import { QUESTION_BANK } from '../data/chapter1Data';
import { QuestionBankItem } from '../types';

export const QuestionBankView: React.FC = () => {
  const [filterMarks, setFilterMarks] = useState<string>('all');
  const [revealedIds, setRevealedIds] = useState<{ [id: string]: boolean }>({
    'qb-1': true,
    'qb-2': true
  });
  const [hideAllMode, setHideAllMode] = useState<boolean>(false);

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = QUESTION_BANK.filter(q => {
    if (filterMarks === '1') return q.marks === 1;
    if (filterMarks === '2-3') return q.marks === 2 || q.marks === 3;
    if (filterMarks === '5') return q.marks === 5;
    if (filterMarks === 'hots') return q.questionType.includes('HOTS');
    return true;
  });

  const handleToggleHideAll = () => {
    if (hideAllMode) {
      // Reveal all
      const all: { [id: string]: boolean } = {};
      QUESTION_BANK.forEach(q => { all[q.id] = true; });
      setRevealedIds(all);
      setHideAllMode(false);
    } else {
      // Hide all
      setRevealedIds({});
      setHideAllMode(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
            NCERT & CBSE Exam Question Bank
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Model Answers & Mark Schemes
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Crafted for Class 8 exams with key marking points, high-frequency test questions, and examiner warnings.
          </p>
        </div>

        {/* Self-Test Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleHideAll}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
          >
            {hideAllMode ? <Eye className="w-3.5 h-3.5 text-blue-600" /> : <EyeOff className="w-3.5 h-3.5 text-slate-600" />}
            <span>{hideAllMode ? 'Reveal All Answers' : 'Self-Test Mode (Hide Answers)'}</span>
          </button>
        </div>
      </div>

      {/* Filter by Marks */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-500 uppercase mr-1">Filter By:</span>
        {[
          { id: 'all', label: 'All Questions' },
          { id: '1', label: '1 Mark (VSA)' },
          { id: '2-3', label: '2 & 3 Marks (Short)' },
          { id: '5', label: '5 Marks (Long Case Study)' },
          { id: 'hots', label: 'HOTS / Practical' },
        ].map(filter => (
          <button
            key={filter.id}
            onClick={() => setFilterMarks(filter.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              filterMarks === filter.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        {filteredQuestions.map((item, idx) => {
          const isRevealed = revealedIds[item.id];

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:shadow-md"
            >
              {/* Question Header */}
              <div 
                onClick={() => toggleReveal(item.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-4 bg-slate-50/70 hover:bg-slate-50 transition border-b border-slate-100"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {item.marks} {item.marks === 1 ? 'Mark' : 'Marks'}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {item.questionType}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-snug">
                    {item.question}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-blue-600 hidden sm:inline">
                    {isRevealed ? 'Hide Answer' : 'Show Answer'}
                  </span>
                  <div className="p-1 rounded-lg bg-white border border-slate-200 text-slate-600">
                    {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Answer Body */}
              {isRevealed && (
                <div className="p-5 sm:p-6 space-y-4 bg-white animate-fadeIn">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-emerald-600" /> Model Answer
                    </h4>
                    <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      {item.answer}
                    </p>
                  </div>

                  {/* Marking Scheme Key Points */}
                  {item.keyPoints && item.keyPoints.length > 0 && (
                    <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5 space-y-1.5">
                      <h5 className="text-xs font-bold text-emerald-950 uppercase tracking-wide flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Must-Include Keywords for Full Marks:
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-emerald-900 font-medium pl-2">
                        {item.keyPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Common Pitfall / Examiner Note */}
                  {item.commonMistake && (
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-rose-950">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-rose-900">Examiner's Warning: </strong>
                        <span>{item.commonMistake}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
