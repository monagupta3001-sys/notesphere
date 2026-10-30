import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  FileText, 
  Printer, 
  Menu, 
  CheckCircle2, 
  Layers, 
  Search,
  ZoomIn,
  GraduationCap,
  User,
  LogIn
} from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapter1Data';
import { ALL_SUBJECTS } from '../data/subjectsData';
import { TabMode, UserProgress, SubjectId, UserProfile } from '../types';

interface HeaderProps {
  currentSubject: SubjectId;
  onSelectSubject: (id: SubjectId) => void;
  currentTab: TabMode;
  onTabChange: (tab: TabMode) => void;
  progress: UserProgress;
  onOpenSyllabus: () => void;
  onOpenCheatSheet: () => void;
  onOpenPdf: () => void;
  fontSize: 'normal' | 'large' | 'xl';
  setFontSize: (size: 'normal' | 'large' | 'xl') => void;
  isReading: boolean;
  onToggleSpeech: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  currentUser: UserProfile | null;
  onOpenAuthModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSubject,
  onSelectSubject,
  currentTab,
  onTabChange,
  progress,
  onOpenSyllabus,
  onOpenCheatSheet,
  onOpenPdf,
  fontSize,
  setFontSize,
  isReading,
  onToggleSpeech,
  searchQuery,
  setSearchQuery,
  currentUser,
  onOpenAuthModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSubjectData = ALL_SUBJECTS.find(s => s.id === currentSubject) || ALL_SUBJECTS[0];

  // Calculate completion percentage: 4 notes sections + 7 mindmap nodes + quiz done + flashcards mastered
  const totalNotesCount = 4;
  const totalMindmapNodes = 7;
  const notesWeight = (progress.notesRead.length / totalNotesCount) * 35;
  const mindmapWeight = (progress.mindmapNodesViewed.length / totalMindmapNodes) * 25;
  const quizWeight = progress.quizCompleted ? 25 : (progress.quizHighScore > 0 ? 15 : 0);
  const flashcardWeight = Math.min(15, (progress.flashcardsMastered.length / 12) * 15);
  const completionPct = Math.min(100, Math.round(notesWeight + mindmapWeight + quizWeight + flashcardWeight));

  const scienceTabs: { id: TabMode; label: string; icon: string; badge?: string }[] = [
    { id: 'notes', label: 'Detailed Notes', icon: '📖' },
    { id: 'mindmap', label: 'Mindmap', icon: '🧠', badge: 'Interactive' },
    { id: 'diagrams', label: 'Labs & Diagrams', icon: '🔬', badge: 'Virtual Lab' },
    { id: 'quiz', label: 'Quiz Arena', icon: '🎯', badge: '10 MCQs' },
    { id: 'flashcards', label: 'Flashcards', icon: '⚡', badge: '12 Cards' },
    { id: 'solutions', label: 'NCERT Q&A', icon: '📝' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top micro announcement bar */}
      <div className={`bg-gradient-to-r ${activeSubjectData.themeGradient} text-white text-xs py-1.5 px-4 font-medium flex items-center justify-between`}>
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Class 8th {activeSubjectData.name}
            </span>
            <span className="hidden sm:inline text-white/90">
              {currentSubject === 'science' 
                ? 'Curiosity Textbook • Chapter 1: Exploring the Investigative World of Science' 
                : `${activeSubjectData.fullName} • ${activeSubjectData.totalChapters} Chapters`}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* Quick font toggle */}
            <div className="flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded">
              <span className="text-[11px] text-white/90 mr-1 hidden md:inline">Text Size:</span>
              <button 
                onClick={() => setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xl' : 'normal')}
                className="hover:text-amber-300 font-bold transition flex items-center gap-1 text-[11px]"
                title="Change font size for easier reading"
              >
                <ZoomIn className="w-3 h-3" />
                <span className="uppercase">{fontSize}</span>
              </button>
            </div>

            {/* Read aloud toggle (for Science) */}
            {currentSubject === 'science' && (
              <button
                onClick={onToggleSpeech}
                className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded transition font-medium text-[11px] ${
                  isReading 
                    ? 'bg-amber-400 text-slate-950 font-bold animate-pulse' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                title="Listen to notes read aloud"
              >
                {isReading ? <VolumeX className="w-3.5 h-3.5 text-slate-900" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isReading ? 'Stop Audio' : 'Listen Aloud'}</span>
              </button>
            )}

            {/* Quick syllabus modal dropdown */}
            <button 
              onClick={onOpenSyllabus}
              className="hover:underline flex items-center gap-1 text-white/90 hover:text-white"
            >
              <Layers className="w-3 h-3" />
              <span className="hidden sm:inline">All Subjects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div 
            className="relative group cursor-pointer" 
            onClick={() => {
              onSelectSubject('science');
              onTabChange('notes');
            }}
          >
            <img 
              src={CHAPTER_INFO.logoPath} 
              alt="NoteSphere Logo" 
              className="w-11 h-11 object-contain rounded-xl shadow-xs border border-blue-100 bg-white group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 
                onClick={() => {
                  onSelectSubject('science');
                  onTabChange('notes');
                }}
                className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-900 via-indigo-800 to-sky-700 bg-clip-text text-transparent cursor-pointer font-heading"
              >
                NoteSphere
              </h1>
              <span className="bg-sky-100 text-sky-800 font-bold text-[10px] px-2 py-0.5 rounded-full border border-sky-200">
                Class 8
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              All Subjects Simplified • Science • Math • SST • English • Hindi • CS
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex items-center relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeSubjectData.name} topics...`}
            className="w-full text-xs bg-slate-100 hover:bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 outline-hidden transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Action utility buttons & User Profile */}
        <div className="flex items-center gap-2">
          {/* Progress Tracker Pill */}
          {currentSubject === 'science' && (
            <div 
              className="hidden xl:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg"
              title={`${completionPct}% of Chapter 1 completed`}
            >
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-slate-400">Mastery</div>
                <div className="text-xs font-extrabold text-blue-700">{completionPct}%</div>
              </div>
              <div className="w-14 bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-sky-500 to-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${completionPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Quick PDF Viewer button */}
          <button
            onClick={onOpenPdf}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-lg border border-slate-200 transition"
            title="View original uploaded NoteSphere PDF"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Science PDF</span>
          </button>

          {/* 1-Page Cheat Sheet */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg border border-amber-200 transition"
            title="Open printable 1-page quick revision sheet"
          >
            <Printer className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">Cheat Sheet</span>
          </button>

          {/* Sign In / User Profile Button */}
          {currentUser ? (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2.5 py-1.5 rounded-xl transition"
              title="View Student Profile"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-6 h-6 rounded-lg object-cover border border-slate-300"
              />
              <div className="text-left hidden sm:block">
                <div className="text-[11px] font-bold text-slate-900 truncate max-w-[90px]">
                  {currentUser.name}
                </div>
                <div className="text-[9px] font-semibold text-blue-600 uppercase">
                  {currentUser.provider}
                </div>
              </div>
            </button>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-xl shadow-xs transition"
              title="Sign in with Gmail, Discord, or GitHub"
            >
              <LogIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600"
            aria-label="Toggle navigation tabs"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Primary Study Navigation Tabs (if on Science) */}
      {currentSubject === 'science' ? (
        <div className={`border-t border-slate-100 px-4 sm:px-6 py-1 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-1 sm:gap-2">
            {scienceTabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/70'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="border-t border-slate-100 px-4 sm:px-6 py-1.5 bg-slate-50/60">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">{activeSubjectData.name} Portal</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500 font-medium">{activeSubjectData.totalChapters} Chapters (Coming Soon)</span>
            </div>
            <button
              onClick={() => {
                onSelectSubject('science');
                onTabChange('notes');
              }}
              className="text-blue-600 font-bold hover:underline flex items-center gap-1"
            >
              <span>🔬 Go to Science Chapter 1 Notes →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
