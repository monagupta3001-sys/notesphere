import React, { useState } from 'react';
import { 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Check, 
  BookMarked, 
  Shuffle, 
  Lightbulb, 
  HelpCircle,
  Award
} from 'lucide-react';
import { FLASHCARDS } from '../data/chapter1Data';
import { Flashcard } from '../types';

interface FlashcardsViewProps {
  masteredIds: string[];
  onToggleMastered: (id: string) => void;
  onOpenQuiz: () => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  masteredIds,
  onToggleMastered,
  onOpenQuiz
}) => {
  const [cards, setCards] = useState<Flashcard[]>(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [filterMode, setFilterMode] = useState<'all' | 'unmastered' | 'mastered'>('all');
  const [showHint, setShowHint] = useState<boolean>(false);

  const filteredCards = cards.filter(card => {
    const isMastered = masteredIds.includes(card.id);
    if (filterMode === 'mastered') return isMastered;
    if (filterMode === 'unmastered') return !isMastered;
    return true;
  });

  const currentCard: Flashcard | undefined = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex(prev => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  };

  const isCurrentMastered = currentCard ? masteredIds.includes(currentCard.id) : false;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
            Active Recall Mode
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Chapter 1 Memory Flashcards
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Test yourself on definitions, scientific roots, variables, and SI units. Click card to flip!
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Filter */}
          <div className="bg-slate-100 p-1 rounded-xl text-xs border border-slate-200 flex gap-1">
            <button
              onClick={() => { setFilterMode('all'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${filterMode === 'all' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All ({cards.length})
            </button>
            <button
              onClick={() => { setFilterMode('unmastered'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${filterMode === 'unmastered' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Learning ({cards.length - masteredIds.length})
            </button>
            <button
              onClick={() => { setFilterMode('mastered'); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-2.5 py-1 rounded-lg font-bold transition ${filterMode === 'mastered' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Mastered ({masteredIds.length})
            </button>
          </div>

          <button
            onClick={handleShuffle}
            className="p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 transition"
            title="Shuffle deck"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {filteredCards.length === 0 ? (
        <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-4">
          <Award className="w-12 h-12 text-purple-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-800">All filtered cards completed!</h3>
          <p className="text-xs text-slate-500">You have marked all cards in this category as mastered.</p>
          <button
            onClick={() => setFilterMode('all')}
            className="bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
          >
            Show All Cards
          </button>
        </div>
      ) : (
        <>
          {/* Card counter */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Card {currentIndex + 1} of {filteredCards.length}</span>
            <span>Mastery: {masteredIds.length} / {cards.length} cards ({Math.round((masteredIds.length / cards.length) * 100)}%)</span>
          </div>

          {/* Flashcard Component */}
          {currentCard && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="cursor-pointer select-none min-h-[300px] sm:min-h-[340px] bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Category pill & flip hint */}
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 text-purple-800 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentCard.category}
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-purple-600 transition">
                  <RotateCw className="w-3.5 h-3.5" /> Click to flip
                </span>
              </div>

              {/* Card Center Content */}
              <div className="my-auto text-center py-6">
                {!isFlipped ? (
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question / Concept</span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
                      {currentCard.front}
                    </h3>
                    <p className="text-xs text-slate-400">Can you recall the definition, example, or significance?</p>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Scientific Answer</span>
                    <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-relaxed font-heading max-w-2xl mx-auto">
                      {currentCard.back}
                    </p>
                    <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl max-w-xl mx-auto text-xs text-amber-950 font-medium text-left">
                      💡 <strong>Class 8 Context:</strong> {currentCard.example}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer row inside card */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHint(!showHint);
                  }}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
                </button>

                {showHint && (
                  <span className="text-xs text-slate-600 italic">
                    Hint: {currentCard.hint}
                  </span>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleMastered(currentCard.id);
                  }}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                    isCurrentMastered
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isCurrentMastered ? 'Mastered ✓' : 'Mark as Mastered'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={filteredCards.length <= 1}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-xs flex items-center gap-1.5 transition disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Card
            </button>

            <button
              onClick={handleNext}
              disabled={filteredCards.length <= 1}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 transition disabled:opacity-40"
            >
              Next Card <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
