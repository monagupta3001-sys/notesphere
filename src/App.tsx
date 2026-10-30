/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SubjectBar } from './components/SubjectBar';
import { NotesView } from './components/NotesView';
import { MindmapView } from './components/MindmapView';
import { DiagramsView } from './components/DiagramsView';
import { QuizView } from './components/QuizView';
import { FlashcardsView } from './components/FlashcardsView';
import { QuestionBankView } from './components/QuestionBankView';
import { SubjectHubView } from './components/SubjectHubView';
import { CheatSheetModal } from './components/CheatSheetModal';
import { ChapterDirectoryModal } from './components/ChapterDirectoryModal';
import { PdfViewerModal } from './components/PdfViewerModal';
import { AuthModal } from './components/AuthModal';
import { TabMode, UserProgress, SubjectId, UserProfile } from './types';
import { CHAPTER_INFO, NOTE_SECTIONS } from './data/chapter1Data';
import { ALL_SUBJECTS } from './data/subjectsData';
import { 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  Brain, 
  FlaskConical, 
  Award, 
  Printer, 
  FileText, 
  Heart,
  ChevronRight,
  MessageCircleQuestion,
  X
} from 'lucide-react';

const PROGRESS_STORAGE_KEY = 'notesphere_class8_progress';
const LAST_SUBJECT_KEY = 'notesphere_selected_subject';
const USER_PROFILE_KEY = 'notesphere_user_profile';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<SubjectId>(() => {
    try {
      const saved = localStorage.getItem(LAST_SUBJECT_KEY);
      if (saved && ['science', 'math', 'sst', 'english', 'hindi', 'computer'].includes(saved)) {
        return saved as SubjectId;
      }
    } catch {}
    return 'science';
  });

  const [currentTab, setCurrentTab] = useState<TabMode>('notes');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isReadingAloud, setIsReadingAloud] = useState<boolean>(false);

  // User auth state (Sign in with Gmail, Discord, GitHub)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(USER_PROFILE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modals state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);
  const [isPdfOpen, setIsPdfOpen] = useState<boolean>(false);
  const [isDoubtSolverOpen, setIsDoubtSolverOpen] = useState<boolean>(false);

  // Student progress state
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      notesRead: ['sec-1'],
      mindmapNodesViewed: ['root'],
      quizHighScore: 0,
      quizCompleted: false,
      flashcardsMastered: []
    };
  });

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  // Save selected subject
  useEffect(() => {
    try {
      localStorage.setItem(LAST_SUBJECT_KEY, currentSubject);
    } catch {}
  }, [currentSubject]);

  // Save current user
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(USER_PROFILE_KEY);
      }
    } catch {}
  }, [currentUser]);

  // Audio Speech Reader across the full chapter
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this device/browser.');
      return;
    }

    if (isReadingAloud) {
      window.speechSynthesis.cancel();
      setIsReadingAloud(false);
      return;
    }

    window.speechSynthesis.cancel();
    setIsReadingAloud(true);

    const fullChapterText = `NoteSphere. Class 8 Science. Chapter 1: Exploring the Investigative World of Science. ${
      NOTE_SECTIONS.map(s => `${s.title}. ${s.subtitle}. ${s.content.paragraphs.join(' ')}. Key takeaway: ${s.content.takeaway || ''}`).join(' ')
    }`;

    const utterance = new SpeechSynthesisUtterance(fullChapterText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsReadingAloud(false);
    utterance.onerror = () => setIsReadingAloud(false);
    window.speechSynthesis.speak(utterance);
  };

  // Progress update handlers
  const handleToggleSectionCompleted = (sectionId: string) => {
    setProgress(prev => {
      const exists = prev.notesRead.includes(sectionId);
      const updated = exists 
        ? prev.notesRead.filter(id => id !== sectionId)
        : [...prev.notesRead, sectionId];
      return { ...prev, notesRead: updated };
    });
  };

  const handleMarkNodeViewed = (nodeId: string) => {
    setProgress(prev => {
      if (prev.mindmapNodesViewed.includes(nodeId)) return prev;
      return { ...prev, mindmapNodesViewed: [...prev.mindmapNodesViewed, nodeId] };
    });
  };

  const handleQuizCompleted = (score: number) => {
    setProgress(prev => ({
      ...prev,
      quizCompleted: true,
      quizHighScore: Math.max(prev.quizHighScore, score)
    }));
  };

  const handleToggleFlashcardMastered = (cardId: string) => {
    setProgress(prev => {
      const exists = prev.flashcardsMastered.includes(cardId);
      const updated = exists
        ? prev.flashcardsMastered.filter(id => id !== cardId)
        : [...prev.flashcardsMastered, cardId];
      return { ...prev, flashcardsMastered: updated };
    });
  };

  // Quick Doubt Solver items for middle schoolers
  const quickDoubts = [
    {
      q: 'How do I easily spot the Independent Variable in any exam question?',
      a: 'Ask yourself: "What did the student or scientist change on purpose?" That factor is ALWAYS the Independent Variable. What they measure at the end is the Dependent Variable.'
    },
    {
      q: 'What makes a number a "Rational Number" in Class 8 Math?',
      a: 'Any number that can be expressed as p/q, where p and q are integers and q ≠ 0. Integers, whole numbers, terminating decimals, and recurring decimals are all rational.'
    },
    {
      q: 'Why do scientists use Kelvin (K) instead of Celsius (°C)?',
      a: 'Celsius is relative (based on water freezing at 0°C). Kelvin starts at Absolute Zero (0 K = -273.15°C), where all atomic motion stops completely. This prevents negative temperature issues in physics formulas.'
    },
    {
      q: 'In the iron rusting experiment, why was oil poured on boiled water in Tube B?',
      a: 'Boiling water expels dissolved oxygen. Since oil is less dense than water and does not mix, it floats on top and creates an airtight seal that prevents atmospheric oxygen from dissolving back into the water.'
    },
    {
      q: 'What is the simple difference between Quantitative and Qualitative data?',
      a: 'Quantitative data uses numbers and units (e.g. 5.4 grams, 28 seconds, 10 cm). Qualitative data uses sensory words and descriptive qualities (e.g. reddish-brown color, bubbly fizz, metallic smell).'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <Header
        currentSubject={currentSubject}
        onSelectSubject={setCurrentSubject}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        progress={progress}
        onOpenSyllabus={() => setIsSyllabusOpen(true)}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenPdf={() => setIsPdfOpen(true)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        isReading={isReadingAloud}
        onToggleSpeech={handleToggleSpeech}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
      />

      {/* Multi-Subject Bar */}
      <SubjectBar
        currentSubject={currentSubject}
        onSelectSubject={(id) => {
          setCurrentSubject(id);
          if (id === 'science') {
            setCurrentTab('notes');
          }
        }}
      />

      {/* Main View Display */}
      <div className="flex-1">
        {currentSubject === 'science' ? (
          <>
            {currentTab === 'notes' && (
              <NotesView
                completedSections={progress.notesRead}
                onToggleSectionCompleted={handleToggleSectionCompleted}
                fontSize={fontSize}
                searchQuery={searchQuery}
                onOpenMindmap={() => setCurrentTab('mindmap')}
                onOpenDiagrams={() => setCurrentTab('diagrams')}
                onOpenQuiz={() => setCurrentTab('quiz')}
              />
            )}

            {currentTab === 'mindmap' && (
              <MindmapView
                viewedNodes={progress.mindmapNodesViewed}
                onMarkNodeViewed={handleMarkNodeViewed}
                onOpenDiagrams={() => setCurrentTab('diagrams')}
                onOpenQuiz={() => setCurrentTab('quiz')}
              />
            )}

            {currentTab === 'diagrams' && <DiagramsView />}

            {currentTab === 'quiz' && (
              <QuizView
                onQuizCompleted={handleQuizCompleted}
                onOpenNotes={() => setCurrentTab('notes')}
                onOpenFlashcards={() => setCurrentTab('flashcards')}
              />
            )}

            {currentTab === 'flashcards' && (
              <FlashcardsView
                masteredIds={progress.flashcardsMastered}
                onToggleMastered={handleToggleFlashcardMastered}
                onOpenQuiz={() => setCurrentTab('quiz')}
              />
            )}

            {currentTab === 'solutions' && <QuestionBankView />}
          </>
        ) : (
          <SubjectHubView
            subjectId={currentSubject}
            onSwitchToScience={() => {
              setCurrentSubject('science');
              setCurrentTab('notes');
            }}
          />
        )}
      </div>

      {/* Quick Doubt Solver Floating Pill Button */}
      <div className="fixed bottom-5 right-5 z-40 no-print">
        <button
          onClick={() => setIsDoubtSolverOpen(!isDoubtSolverOpen)}
          className="bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg border border-blue-400/40 flex items-center gap-2 hover:scale-105 transition-all"
        >
          <MessageCircleQuestion className="w-4 h-4 text-amber-300" />
          <span>Quick Concept Doubts</span>
        </button>
      </div>

      {/* Quick Doubt Solver Drawer / Modal */}
      {isDoubtSolverOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-end sm:justify-center p-3 sm:p-6 no-print">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-blue-50/70">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-blue-600 text-white rounded-xl">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-extrabold text-slate-900 font-heading text-sm sm:text-base">
                    Quick Concept Clarifier
                  </h4>
                  <p className="text-[11px] text-slate-500">Most frequent Class 8 exam questions answered simply</p>
                </div>
              </div>
              <button
                onClick={() => setIsDoubtSolverOpen(false)}
                className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-3 text-xs">
              {quickDoubts.map((d, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <h5 className="font-bold text-blue-950 flex items-start gap-1.5">
                    <span className="text-amber-500 font-extrabold">Q:</span>
                    <span>{d.q}</span>
                  </h5>
                  <p className="text-slate-700 leading-relaxed pl-4">
                    {d.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-slate-200 bg-slate-50 text-center">
              <button
                onClick={() => {
                  setIsDoubtSolverOpen(false);
                  setCurrentSubject('science');
                  setCurrentTab('solutions');
                }}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Open Full Science NCERT Question Bank & Model Answers →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal (Sign in with Gmail, Discord, GitHub) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(user) => setCurrentUser(user)}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Other Modals */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      <ChapterDirectoryModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        onSelectSubjectAndChapter={(subId, chId) => {
          setCurrentSubject(subId);
          if (subId === 'science') {
            setCurrentTab('notes');
          }
        }}
      />

      <PdfViewerModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-12 py-10 px-4 sm:px-6 no-print">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src={CHAPTER_INFO.logoPath} 
                alt="NoteSphere Logo" 
                className="w-10 h-10 object-contain rounded-xl bg-white p-1" 
              />
              <span className="text-xl font-extrabold text-white font-heading tracking-tight">
                NoteSphere
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Class 8 Notes Simplified. Your ultimate academic companion across Science, Mathematics, Social Science, English, Hindi, and Computer Science.
            </p>
            <div className="text-[11px] text-amber-400 font-bold">
              📚 Complete Class 8 Curriculum Hub
            </div>
          </div>

          {/* Subjects Directory */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">All Class 8 Subjects</h5>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {ALL_SUBJECTS.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setCurrentSubject(s.id);
                      if (s.id === 'science') setCurrentTab('notes');
                    }}
                    className={`hover:text-amber-300 transition flex items-center gap-1.5 ${currentSubject === s.id ? 'text-amber-400 font-bold' : ''}`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                    {s.liveChaptersCount > 0 && (
                      <span className="text-[9px] bg-blue-600 text-white px-1 py-0.2 rounded">Live</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Revision Tools */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Revision Tools</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setIsCheatSheetOpen(true)} className="hover:text-amber-300 transition flex items-center gap-1">
                  <Printer className="w-3.5 h-3.5 text-amber-400" /> 1-Page Printable Cheat Sheet
                </button>
              </li>
              <li>
                <button onClick={() => setIsPdfOpen(true)} className="hover:text-amber-300 transition flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-400" /> Science Chapter 1 PDF
                </button>
              </li>
              <li>
                <button onClick={() => setIsSyllabusOpen(true)} className="hover:text-amber-300 transition flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> All Subjects Curriculum Map
                </button>
              </li>
            </ul>
          </div>

          {/* Curriculum Disclaimer */}
          <div className="space-y-2 text-xs text-slate-400">
            <h5 className="font-bold text-white uppercase tracking-wider">Curriculum Standard</h5>
            <p className="leading-relaxed">
              Aligned with NCERT Class 8 textbooks (Curiosity, Mathematics, Our Pasts, Resources & Development, Honeydew, Vasant).
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              © {new Date().getFullYear()} NoteSphere • Class 8 Notes Simplified
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
