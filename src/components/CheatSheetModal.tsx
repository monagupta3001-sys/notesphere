import React from 'react';
import { X, Printer, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapter1Data';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
        {/* Top Action Bar (hidden when printing) */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10 no-print">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-md uppercase">
              Class 8 Science
            </span>
            <span className="text-sm font-bold text-slate-800">1-Page Exam Revision Cheat Sheet</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Cheat Sheet Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-900">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black uppercase tracking-tight font-heading">
                NoteSphere — Quick Revision Cheat Sheet
              </h1>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-0.5">
                Class 8 Science • Chapter 1: Exploring the Investigative World of Science
              </p>
            </div>
            <div className="text-right text-xs">
              <span className="font-bold">CBSE / NCERT Curiosity</span>
              <div className="text-slate-500 text-[10px]">High-Yield 5-Minute Exam Summary</div>
            </div>
          </div>

          {/* Core Foundations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Box 1: Etymology & Nature of Science */}
            <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-2">
              <h3 className="font-extrabold uppercase text-slate-800 flex items-center gap-1.5">
                1. What is Science & Scientia?
              </h3>
              <p className="text-slate-700 leading-relaxed">
                • Derived from Latin <strong>scientia</strong> = <em>"Knowledge"</em>.<br />
                • Science is <strong>dynamic inquiry</strong> into natural phenomena, not blind memorization.<br />
                • Core scientific attitude: Always asking <strong>"How do we know this?"</strong> and demanding repeatable, verifiable evidence.
              </p>
            </div>

            {/* Box 2: 6-Step Scientific Method */}
            <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-2">
              <h3 className="font-extrabold uppercase text-slate-800 flex items-center gap-1.5">
                2. The 6-Step Scientific Method
              </h3>
              <div className="flex flex-wrap gap-1 text-[11px] font-bold text-blue-900">
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">1. Observation</span> →
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">2. Question</span> →
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">3. Hypothesis</span> →
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">4. Fair Experiment</span> →
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">5. Data Collection</span> →
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300">6. Conclusion</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-1">
                *Hypothesis must be <strong>testable</strong> and <strong>falsifiable</strong>.
              </p>
            </div>
          </div>

          {/* Variables in a Fair Test */}
          <div className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50/50 space-y-2 text-xs">
            <h3 className="font-extrabold uppercase text-indigo-950 flex items-center gap-1.5">
              3. The Golden Rules of Fair Testing & Variables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <strong className="text-indigo-700 block mb-1">Independent Variable</strong>
                The ONE condition deliberately manipulated or changed by the scientist (the cause).
              </div>
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <strong className="text-indigo-700 block mb-1">Dependent Variable</strong>
                The factor being measured or observed in response (the effect / outcome).
              </div>
              <div className="bg-white p-3 rounded-lg border border-indigo-200">
                <strong className="text-indigo-700 block mb-1">Controlled Variables</strong>
                All other conditions kept strictly identical to eliminate bias or confounding factors.
              </div>
            </div>
            <p className="text-[11px] font-bold text-rose-700">
              ⚠️ EXAM WARNING: If you change more than one variable at a time, it is NOT a fair test!
            </p>
          </div>

          {/* SI Units & Instruments Table */}
          <div className="space-y-2 text-xs">
            <h3 className="font-extrabold uppercase text-slate-900 flex items-center gap-1.5">
              4. Standard SI Units & Measuring Instruments
            </h3>
            <div className="border border-slate-300 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 font-bold uppercase text-[10px] border-b border-slate-300">
                  <tr>
                    <th className="p-2.5">Physical Quantity</th>
                    <th className="p-2.5">Standard SI Unit</th>
                    <th className="p-2.5">Symbol</th>
                    <th className="p-2.5">Common Instrument</th>
                    <th className="p-2.5">Exam Calculation Formula</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5 font-bold">Length</td>
                    <td className="p-2.5">Meter</td>
                    <td className="p-2.5 font-mono font-bold">m</td>
                    <td className="p-2.5">Scale, Measuring tape</td>
                    <td className="p-2.5 text-[11px]">1 m = 100 cm = 1,000 mm</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Mass</td>
                    <td className="p-2.5">Kilogram</td>
                    <td className="p-2.5 font-mono font-bold">kg</td>
                    <td className="p-2.5">Beam balance, Digital scale</td>
                    <td className="p-2.5 text-[11px]">1 kg = 1,000 g</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Time</td>
                    <td className="p-2.5">Second</td>
                    <td className="p-2.5 font-mono font-bold">s</td>
                    <td className="p-2.5">Stopwatch, Clock</td>
                    <td className="p-2.5 text-[11px]">1 min = 60 s, 1 h = 3600 s</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-indigo-700">Temperature</td>
                    <td className="p-2.5 font-bold text-indigo-700">Kelvin</td>
                    <td className="p-2.5 font-mono font-bold text-indigo-700">K</td>
                    <td className="p-2.5">Laboratory Thermometer</td>
                    <td className="p-2.5 font-mono font-bold text-indigo-800">K = °C + 273.15</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rusting of Iron Case Study */}
          <div className="p-4 rounded-xl border border-slate-300 bg-amber-50/60 space-y-2 text-xs">
            <h3 className="font-extrabold uppercase text-amber-950 flex items-center gap-1.5">
              5. Classic Case Study: The Rusting of Iron (Fe)
            </h3>
            <p className="text-slate-800 leading-relaxed">
              • Reaction: <strong>4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O</strong> (Hydrated Iron(III) Oxide).<br />
              • Tube A (Dry air + Calcium chloride) → <strong>No Rust</strong>.<br />
              • Tube B (Boiled water + Oil barrier) → <strong>No Rust</strong>.<br />
              • Tube C (Tap water + Air) → <strong>Rusts heavily!</strong> Proves BOTH oxygen and water are essential.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>NoteSphere • Class 8 Notes Simplified • Your Academic Companion</span>
            <span>Created for Class 8 Curiosity Curriculum</span>
          </div>
        </div>
      </div>
    </div>
  );
};
