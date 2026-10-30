import React, { useState } from 'react';
import { 
  CheckCircle, 
  Circle, 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  Bookmark, 
  AlertTriangle, 
  Lightbulb, 
  ArrowRight, 
  Calculator, 
  Check, 
  BookOpen, 
  Share2
} from 'lucide-react';
import { NOTE_SECTIONS, CHAPTER_INFO } from '../data/chapter1Data';
import { NoteSection } from '../types';

interface NotesViewProps {
  completedSections: string[];
  onToggleSectionCompleted: (sectionId: string) => void;
  fontSize: 'normal' | 'large' | 'xl';
  searchQuery: string;
  onOpenMindmap: () => void;
  onOpenDiagrams: () => void;
  onOpenQuiz: () => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  completedSections,
  onToggleSectionCompleted,
  fontSize,
  searchQuery,
  onOpenMindmap,
  onOpenDiagrams,
  onOpenQuiz
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-1');
  const [celsiusInput, setCelsiusInput] = useState<number | string>(25);
  const [highlightKeyTerms, setHighlightKeyTerms] = useState(true);
  const [readingSectionId, setReadingSectionId] = useState<string | null>(null);

  // Font sizing helper classes
  const fontClasses = {
    normal: {
      body: 'text-sm sm:text-base leading-relaxed',
      heading: 'text-xl sm:text-2xl',
      subheading: 'text-base sm:text-lg',
    },
    large: {
      body: 'text-base sm:text-lg leading-relaxed',
      heading: 'text-2xl sm:text-3xl',
      subheading: 'text-lg sm:text-xl',
    },
    xl: {
      body: 'text-lg sm:text-xl leading-relaxed',
      heading: 'text-3xl sm:text-4xl',
      subheading: 'text-xl sm:text-2xl',
    }
  }[fontSize];

  // Speech reader for a single section
  const handleReadSection = (section: NoteSection) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (readingSectionId === section.id) {
      window.speechSynthesis.cancel();
      setReadingSectionId(null);
      return;
    }

    window.speechSynthesis.cancel();
    setReadingSectionId(section.id);

    const fullText = `${section.title}. ${section.subtitle}. ${section.content.paragraphs.join(' ')} ${
      section.content.subsections ? section.content.subsections.map(s => `${s.subtitle}. ${s.text} ${s.bulletPoints ? s.bulletPoints.join('. ') : ''}`).join(' ') : ''
    } Takeaway: ${section.content.takeaway || ''}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setReadingSectionId(null);
    utterance.onerror = () => setReadingSectionId(null);
    window.speechSynthesis.speak(utterance);
  };



  // Temperature converter helper
  const kelvinValue = typeof celsiusInput === 'number' || !isNaN(Number(celsiusInput))
    ? (Number(celsiusInput) + 273.15).toFixed(2)
    : '--';

  const keyGlossary: { [key: string]: string } = {
    scientia: 'Latin word meaning "Knowledge" - the origin of the word Science.',
    hypothesis: 'A tentative, educated explanation or prediction that can be experimentally tested.',
    'independent variable': 'The ONE factor intentionally altered or tested by the experimenter.',
    'dependent variable': 'The factor measured or observed as a result of the independent variable.',
    'controlled variables': 'Conditions kept strictly constant across all trials for a fair test.',
    'quantitative': 'Numerical data with measurements and units (e.g., 5 grams, 24 °C).',
    'qualitative': 'Descriptive observations using senses (e.g., color change, gas bubbles).',
    kelvin: 'The SI base unit of thermodynamic temperature (K = °C + 273.15).'
  };

  // Helper to render text with glossary highlights
  const renderFormattedText = (text: string) => {
    if (!highlightKeyTerms) return text;

    const regex = new RegExp(`\\b(${Object.keys(keyGlossary).join('|')})\\b`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const lower = part.toLowerCase();
      if (keyGlossary[lower]) {
        return (
          <span 
            key={i} 
            className="group relative inline-block cursor-help bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-semibold border-b-2 border-amber-400"
          >
            {part}
            <span className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-slate-900 text-white text-xs font-normal rounded-lg shadow-xl z-50 pointer-events-none transition-all">
              <strong className="block text-amber-300 font-bold mb-1 capitalize">{part}</strong>
              {keyGlossary[lower]}
            </span>
          </span>
        );
      }
      return part;
    });
  };

  // Filter sections if searching
  const filteredSections = searchQuery.trim()
    ? NOTE_SECTIONS.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.content.paragraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : NOTE_SECTIONS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Chapter Hero banner */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8 border border-blue-800">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none bg-radial from-amber-400 to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                Class 8 Science • NCERT Curiosity
              </span>
              <span className="bg-blue-800/80 text-blue-200 text-xs font-medium px-2.5 py-1 rounded-md">
                Chapter 1
              </span>
              <span className="bg-sky-500/20 text-sky-200 text-xs font-medium px-2.5 py-1 rounded-md">
                ⏱ {CHAPTER_INFO.readingTime}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 font-heading leading-tight">
              Exploring the Investigative World of Science
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Step into the mindset of a scientist: master the 6-step Scientific Method, learn how to design fair controlled experiments, understand independent and dependent variables, and explore global SI standard units.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <button
                onClick={onOpenMindmap}
                className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition"
              >
                <span>🧠</span> View Chapter Mindmap
              </button>
              <button
                onClick={onOpenDiagrams}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 border border-indigo-400/40 transition"
              >
                <span>🔬</span> Open Rusting Virtual Lab
              </button>
              <button
                onClick={onOpenQuiz}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition"
              >
                <span>🎯</span> Take Chapter Quiz
              </button>
            </div>
          </div>

          {/* Quick study tools panel */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-full lg:w-72 shrink-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Study Assistant Tools
            </h4>
            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between cursor-pointer py-1 border-b border-white/10">
                <span className="text-blue-100">Highlight Key Terms</span>
                <input
                  type="checkbox"
                  checked={highlightKeyTerms}
                  onChange={(e) => setHighlightKeyTerms(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
              </label>
              <div className="flex items-center justify-between py-1 border-b border-white/10">
                <span className="text-blue-100">Sections Mastered</span>
                <span className="font-bold text-amber-300">{completedSections.length} / {NOTE_SECTIONS.length}</span>
              </div>
              <div className="text-[11px] text-blue-200 pt-1">
                Hover over highlighted terms like <span className="text-amber-300 font-semibold underline">scientia</span> or <span className="text-amber-300 font-semibold underline">hypothesis</span> for instant definitions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table of contents sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" /> Chapter Outline
            </h3>
            <nav className="space-y-1">
              {NOTE_SECTIONS.map((sec) => {
                const isCompleted = completedSections.includes(sec.id);
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setActiveSectionId(sec.id);
                      const el = document.getElementById(sec.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-medium transition flex items-start gap-2.5 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span 
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSectionCompleted(sec.id);
                      }}
                      className="mt-0.5 shrink-0 hover:scale-110 transition"
                      title={isCompleted ? 'Mark as unread' : 'Mark as mastered'}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300" />
                      )}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-semibold">{sec.number}. {sec.title}</div>
                      <div className="text-[10px] text-slate-400">{sec.readTime} read</div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Interactive Mini-Tool: Kelvin to Celsius Quick Calculator */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100 shadow-xs">
            <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-indigo-600" /> SI Temperature Converter
            </h4>
            <p className="text-[11px] text-indigo-800 mb-3">
              Formula: <span className="font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-indigo-200">K = °C + 273.15</span>
            </p>
            <div className="space-y-2">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase">Celsius (°C)</label>
                <input
                  type="number"
                  value={celsiusInput}
                  onChange={(e) => setCelsiusInput(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-white border border-indigo-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-indigo-200 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">In Kelvin (SI Unit):</span>
                <span className="text-sm font-extrabold text-indigo-700 font-mono">{kelvinValue} K</span>
              </div>
              <div className="flex gap-1">
                {[0, 25, 37, 100].map(temp => (
                  <button
                    key={temp}
                    onClick={() => setCelsiusInput(temp)}
                    className="flex-1 bg-white hover:bg-indigo-100 text-[10px] font-bold text-indigo-700 py-1 rounded border border-indigo-200 transition"
                  >
                    {temp}°C
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Note Content Area */}
        <main className="lg:col-span-9 space-y-8">
          {filteredSections.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-slate-600 text-sm">No notes match "{searchQuery}".</p>
              <button 
                onClick={() => {}} 
                className="mt-3 text-xs text-blue-600 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {filteredSections.map((section) => {
            const isCompleted = completedSections.includes(section.id);
            const isReading = readingSectionId === section.id;

            return (
              <article
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Section Header */}
                <div className="bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 px-6 py-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-blue-600 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full">
                        Section {section.number}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">⏱ {section.readTime}</span>
                    </div>
                    <h2 className={`font-extrabold text-slate-900 tracking-tight font-heading ${fontClasses.heading}`}>
                      {section.title}
                    </h2>
                    <p className={`text-slate-500 font-medium mt-0.5 ${fontClasses.subheading}`}>
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Actions for this section */}
                  <div className="flex items-center gap-2">
                    {/* Read Aloud button */}
                    <button
                      onClick={() => handleReadSection(section)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        isReading 
                          ? 'bg-amber-400 text-slate-950 font-bold' 
                          : 'bg-white hover:bg-blue-50 text-slate-700 border border-slate-200'
                      }`}
                      title="Listen to this section"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isReading ? 'Pause Audio' : 'Listen'}</span>
                    </button>

                    {/* Mark as read */}
                    <button
                      onClick={() => onToggleSectionCompleted(section.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        isCompleted
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Circle className="w-3.5 h-3.5 text-slate-400" />}
                      <span>{isCompleted ? 'Mastered' : 'Mark Read'}</span>
                    </button>
                  </div>
                </div>

                {/* Section Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Summary Callout Banner */}
                  <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-xl">
                    <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Key Concept Overview
                    </p>
                    <p className="text-slate-800 text-sm font-medium">
                      {section.summary}
                    </p>
                  </div>

                  {/* Paragraphs */}
                  <div className={`space-y-4 text-slate-800 ${fontClasses.body}`}>
                    {section.content.paragraphs.map((para, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {renderFormattedText(para)}
                      </p>
                    ))}
                  </div>

                  {/* Subsections if any */}
                  {section.content.subsections && (
                    <div className="space-y-6 pt-2">
                      {section.content.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="bg-slate-50/60 rounded-xl p-5 border border-slate-200/80 space-y-3">
                          <h3 className={`font-bold text-slate-900 flex items-center gap-2 ${fontClasses.subheading}`}>
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            {sub.subtitle}
                          </h3>
                          <p className={`text-slate-700 ${fontClasses.body}`}>
                            {renderFormattedText(sub.text)}
                          </p>

                          {/* Bullet points */}
                          {sub.bulletPoints && (
                            <ul className="space-y-2.5 pt-1 pl-2">
                              {sub.bulletPoints.map((bp, bIdx) => {
                                const [term, ...rest] = bp.split(':');
                                return (
                                  <li key={bIdx} className="flex items-start gap-2.5 text-slate-800 text-xs sm:text-sm">
                                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                                    <span>
                                      {rest.length > 0 ? (
                                        <>
                                          <strong className="text-blue-950 font-bold">{term}:</strong>
                                          <span>{renderFormattedText(rest.join(':'))}</span>
                                        </>
                                      ) : (
                                        <span>{renderFormattedText(bp)}</span>
                                      )}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          )}

                          {/* Highlight box */}
                          {sub.highlightBox && (
                            <div className={`mt-4 p-4 rounded-xl border text-xs sm:text-sm ${
                              sub.highlightBox.type === 'concept'
                                ? 'bg-indigo-50 border-indigo-200 text-indigo-950'
                                : sub.highlightBox.type === 'curiosity'
                                ? 'bg-amber-50 border-amber-200 text-amber-950'
                                : sub.highlightBox.type === 'warning'
                                ? 'bg-rose-50 border-rose-200 text-rose-950'
                                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            }`}>
                              <div className="font-bold mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                                {sub.highlightBox.type === 'warning' ? (
                                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                                ) : sub.highlightBox.type === 'curiosity' ? (
                                  <Lightbulb className="w-4 h-4 text-amber-600" />
                                ) : (
                                  <Sparkles className="w-4 h-4 text-indigo-600" />
                                )}
                                <span>{sub.highlightBox.title}</span>
                              </div>
                              <p className="whitespace-pre-line leading-relaxed font-medium">
                                {sub.highlightBox.body}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Standard Units Table (Section 4) */}
                  {section.content.table && (
                    <div className="pt-2">
                      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                        <table className="w-full text-left text-xs sm:text-sm">
                          {section.content.table.caption && (
                            <caption className="p-3 text-xs font-bold text-slate-700 bg-slate-100/80 border-b border-slate-200 text-left">
                              📊 {section.content.table.caption}
                            </caption>
                          )}
                          <thead className="bg-slate-100 text-slate-800 font-bold uppercase text-[11px] tracking-wider">
                            <tr>
                              {section.content.table.headers.map((h, i) => (
                                <th key={i} className="px-4 py-3 border-b border-slate-200">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {section.content.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-blue-50/50 transition">
                                <td className="px-4 py-3 font-bold text-blue-950">{row[0]}</td>
                                <td className="px-4 py-3 font-semibold text-indigo-700">
                                  <span className="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                                    {row[1]}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-slate-700 font-medium">{row[2]}</td>
                                <td className="px-4 py-3 text-slate-600 text-xs">{row[3]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Key Takeaway Banner */}
                  {section.content.takeaway && (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-xl p-4 flex items-start gap-3">
                      <div className="p-1.5 bg-amber-200 rounded-lg text-amber-800 shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                          Key Takeaway for Class 8 Exams
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-amber-950 mt-0.5">
                          "{section.content.takeaway}"
                        </p>
                      </div>
                    </div>
                  )}


                </div>
              </article>
            );
          })}
        </main>
      </div>
    </div>
  );
};
