import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Zap, 
  BookOpen, 
  Award,
  Filter
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/chapter1Data';
import { QuizQuestion } from '../types';

interface QuizViewProps {
  onQuizCompleted: (score: number) => void;
  onOpenNotes: () => void;
  onOpenFlashcards: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  onQuizCompleted,
  onOpenNotes,
  onOpenFlashcards
}) => {
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);

  const activeQuestions = filterDifficulty === 'all'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.difficulty === filterDifficulty);

  const currentQ: QuizQuestion | undefined = activeQuestions[currentIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerSubmitted || !currentQ) return;

    setUserAnswers(prev => ({ ...prev, [currentQ.id]: optionIndex }));
    setIsAnswerSubmitted(true);

    const isCorrect = optionIndex === currentQ.correctAnswer;
    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > highestStreak) setHighestStreak(nextStreak);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswerSubmitted(false);
    } else {
      // Finished!
      setQuizFinished(true);
      const score = calculateScore();
      onQuizCompleted(score);

      if (score >= Math.ceil(activeQuestions.length * 0.75)) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsAnswerSubmitted(false);
    setQuizFinished(false);
    setStreak(0);
  };

  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / activeQuestions.length) * 100);

  // If Quiz Finished View
  if (quizFinished) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-lg">
            <Trophy className="w-10 h-10 text-amber-900" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Quiz Completed!
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading mt-2">
              {percentage >= 80 ? 'Outstanding Master Scientist! 🌟' : percentage >= 50 ? 'Great Effort, Explorer! 👍' : 'Keep Practicing, Explorer! 📚'}
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-md mx-auto">
              You scored <span className="font-extrabold text-blue-600">{score} out of {activeQuestions.length}</span> ({percentage}%) on Chapter 1.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto py-2">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400">Score</span>
              <div className="text-xl font-extrabold text-blue-600">{score}/{activeQuestions.length}</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400">Accuracy</span>
              <div className="text-xl font-extrabold text-emerald-600">{percentage}%</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400">Max Streak</span>
              <div className="text-xl font-extrabold text-amber-500">🔥 {highestStreak}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <button
              onClick={onOpenNotes}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-5 py-2.5 rounded-xl border border-slate-200 transition flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Review Notes
            </button>
            <button
              onClick={onOpenFlashcards}
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-sm px-5 py-2.5 rounded-xl border border-amber-200 transition flex items-center gap-2"
            >
              <Zap className="w-4 h-4" /> Practice Flashcards
            </button>
          </div>

          {/* Detailed Question Review List */}
          <div className="text-left pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Detailed Question Review & Explanations
            </h3>
            <div className="space-y-4">
              {activeQuestions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                return (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs sm:text-sm ${
                      isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="font-bold text-slate-900">
                        Q{idx + 1}. {q.question}
                      </span>
                      {isCorrect ? (
                        <span className="text-emerald-700 font-bold flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold flex items-center gap-1 shrink-0">
                          <XCircle className="w-4 h-4" /> Incorrect
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="text-slate-700">
                        Your Answer: <strong className={isCorrect ? 'text-emerald-800' : 'text-rose-800'}>{q.options[userChoice] || 'Skipped'}</strong>
                      </div>
                      {!isCorrect && (
                        <div className="text-emerald-800 font-semibold">
                          Correct Answer: {q.options[q.correctAnswer]}
                        </div>
                      )}
                      <p className="text-slate-600 bg-white/80 p-2.5 rounded-lg border border-slate-200 mt-2 leading-relaxed">
                        💡 <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Question In-Progress View
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Quiz Top bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
            Knowledge Check Arena
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading mt-1">
            Chapter 1 Practice Quiz
          </h2>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs border border-slate-200">
          <Filter className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
          {(['all', 'easy', 'medium', 'hard'] as const).map(diff => (
            <button
              key={diff}
              onClick={() => {
                setFilterDifficulty(diff);
                setCurrentIndex(0);
                setIsAnswerSubmitted(false);
              }}
              className={`px-2.5 py-1 rounded-lg font-bold capitalize transition ${
                filterDifficulty === diff
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Progress & Streak Header */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-600 px-1">
        <span>Question {currentIndex + 1} of {activeQuestions.length}</span>
        {streak > 1 && (
          <span className="text-amber-600 flex items-center gap-1 animate-bounce">
            🔥 {streak} Streak! Keep it up!
          </span>
        )}
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Main Question Card */}
      {currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Topic: {currentQ.topic}
            </span>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
              currentQ.difficulty === 'easy' 
                ? 'bg-emerald-100 text-emerald-800' 
                : currentQ.difficulty === 'medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800'
            }`}>
              {currentQ.difficulty} Level
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-heading leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => {
              const isSelected = userAnswers[currentQ.id] === oIdx;
              const isCorrect = oIdx === currentQ.correctAnswer;

              let btnStyle = 'bg-slate-50 border-slate-200 hover:bg-blue-50/70 hover:border-blue-300 text-slate-800';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-100 border-rose-500 text-rose-950';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-bold shrink-0 text-slate-600">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-1.5 transition-all animate-fadeIn ${
              userAnswers[currentQ.id] === currentQ.correctAnswer
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <div className="font-bold flex items-center gap-1.5 uppercase text-xs tracking-wider">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Concept Explanation</span>
              </div>
              <p className="leading-relaxed font-medium">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400 font-medium">
              Select an option to verify your answer
            </span>
            {isAnswerSubmitted && (
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-1.5"
              >
                <span>{currentIndex === activeQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
