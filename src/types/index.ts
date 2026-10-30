export type SubjectId = 'science' | 'math' | 'sst' | 'english' | 'hindi' | 'computer';

export type TabMode = 'notes' | 'mindmap' | 'diagrams' | 'quiz' | 'flashcards' | 'solutions';

export type AuthProvider = 'gmail' | 'discord' | 'github';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: AuthProvider;
  role: string;
  joinedAt: string;
}

export interface SubjectChapter {
  id: number;
  chapterNumber: string;
  title: string;
  status: 'available' | 'upcoming';
  unitsCount: number;
  tagline: string;
  subtopics: string[];
  samplePreview?: {
    overview: string;
    keyFormulasOrConcepts: string[];
    quickMindmapIdea: string;
  };
}

export interface SubjectConfig {
  id: SubjectId;
  name: string;
  fullName: string;
  textbook: string;
  icon: string;
  themeGradient: string;
  badgeColor: string;
  description: string;
  totalChapters: number;
  liveChaptersCount: number;
  chapters: SubjectChapter[];
}

export interface NoteSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  content: {
    paragraphs: string[];
    subsections?: {
      subtitle: string;
      text: string;
      bulletPoints?: string[];
      highlightBox?: {
        type: 'concept' | 'example' | 'curiosity' | 'warning';
        title: string;
        body: string;
      };
    }[];
    table?: {
      headers: string[];
      rows: string[][];
      caption?: string;
    };
    takeaway?: string;
  };
}

export interface MindmapNode {
  id: string;
  label: string;
  category: 'core' | 'inquiry' | 'method' | 'variables' | 'measurement' | 'attitude';
  x: number;
  y: number;
  parentId?: string;
  shortDesc: string;
  fullExplanation: string;
  class8Example: string;
  examTip: string;
  quickCheckQuestion: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  hint: string;
  example: string;
}

export interface QuestionBankItem {
  id: string;
  marks: 1 | 2 | 3 | 5;
  question: string;
  questionType: 'Very Short' | 'Short Answer' | 'Long Answer' | 'HOTS / Practical Based';
  answer: string;
  keyPoints: string[];
  commonMistake?: string;
}

export interface UserProgress {
  notesRead: string[];
  mindmapNodesViewed: string[];
  quizHighScore: number;
  quizCompleted: boolean;
  flashcardsMastered: string[];
}
