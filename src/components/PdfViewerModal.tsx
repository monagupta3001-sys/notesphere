import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { CHAPTER_INFO } from '../data/chapter1Data';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6">
      <div className="bg-white rounded-3xl max-w-5xl w-full h-[92vh] flex flex-col overflow-hidden border border-slate-300 shadow-2xl">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-100 text-rose-700 rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-heading">
                NoteSphere Official PDF Notes
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Class 8 Science — Chapter 1: Exploring the Investigative World of Science
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CHAPTER_INFO.pdfPath}
              download="Class_8_Science_Chapter_1_Notes_NoteSphere.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-xl text-slate-600 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF iframe / viewer embed */}
        <div className="flex-1 bg-slate-200 relative">
          <iframe
            src={CHAPTER_INFO.pdfPath}
            title="NoteSphere Class 8 Science Chapter 1 Notes"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
