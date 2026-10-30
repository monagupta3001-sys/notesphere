import React, { useState } from 'react';
import { 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  ChevronRight,
  Info,
  Compass
} from 'lucide-react';
import { MINDMAP_NODES } from '../data/chapter1Data';
import { MindmapNode } from '../types';

interface MindmapViewProps {
  viewedNodes: string[];
  onMarkNodeViewed: (nodeId: string) => void;
  onOpenDiagrams: () => void;
  onOpenQuiz: () => void;
}

export const MindmapView: React.FC<MindmapViewProps> = ({
  viewedNodes,
  onMarkNodeViewed,
  onOpenDiagrams,
  onOpenQuiz
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('root');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [quizAnswerState, setQuizAnswerState] = useState<{ [nodeId: string]: { selected: number | null; isSubmitted: boolean } }>({});

  const selectedNode = MINDMAP_NODES.find(n => n.id === selectedNodeId) || MINDMAP_NODES[0];

  const handleSelectNode = (node: MindmapNode) => {
    setSelectedNodeId(node.id);
    onMarkNodeViewed(node.id);
  };

  const handleAnswerQuickCheck = (nodeId: string, optionIdx: number) => {
    setQuizAnswerState(prev => ({
      ...prev,
      [nodeId]: { selected: optionIdx, isSubmitted: true }
    }));
  };

  // Node category styling helper
  const getCategoryStyles = (category: MindmapNode['category'], isSelected: boolean) => {
    switch (category) {
      case 'core':
        return isSelected 
          ? 'bg-blue-600 text-white ring-4 ring-blue-300 shadow-xl' 
          : 'bg-blue-900 text-white hover:bg-blue-800 shadow-md';
      case 'inquiry':
        return isSelected 
          ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-300 shadow-xl' 
          : 'bg-amber-100 text-amber-950 border border-amber-300 hover:bg-amber-200';
      case 'method':
        return isSelected 
          ? 'bg-emerald-600 text-white ring-4 ring-emerald-300 shadow-xl' 
          : 'bg-emerald-50 text-emerald-950 border border-emerald-300 hover:bg-emerald-100';
      case 'variables':
        return isSelected 
          ? 'bg-purple-600 text-white ring-4 ring-purple-300 shadow-xl' 
          : 'bg-purple-50 text-purple-950 border border-purple-300 hover:bg-purple-100';
      case 'measurement':
        return isSelected 
          ? 'bg-sky-600 text-white ring-4 ring-sky-300 shadow-xl' 
          : 'bg-sky-50 text-sky-950 border border-sky-300 hover:bg-sky-100';
      case 'attitude':
        return isSelected 
          ? 'bg-rose-600 text-white ring-4 ring-rose-300 shadow-xl' 
          : 'bg-rose-50 text-rose-950 border border-rose-300 hover:bg-rose-100';
    }
  };

  const getCategoryBadge = (category: MindmapNode['category']) => {
    switch (category) {
      case 'core': return 'Chapter Core';
      case 'inquiry': return 'Introduction';
      case 'method': return 'Scientific Method';
      case 'variables': return 'Fair Testing';
      case 'measurement': return 'SI Units';
      case 'attitude': return 'Scientific Temper';
    }
  };

  // Filter nodes
  const displayNodes = selectedFilter === 'all' 
    ? MINDMAP_NODES 
    : MINDMAP_NODES.filter(n => n.id === 'root' || n.category === selectedFilter);

  // SVG dimensions
  const svgWidth = 960;
  const svgHeight = 560;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Mindmap header & instructions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">
              Visual Learning Mode
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Click any node to expand concepts and take quick checks
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Interactive Concept Mindmap
          </h2>
        </div>

        {/* Filters and zoom controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category filter */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs text-xs">
            {['all', 'method', 'variables', 'measurement', 'attitude'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-2.5 py-1 rounded-lg font-semibold capitalize transition ${
                  selectedFilter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Branches' : cat}
              </button>
            ))}
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.15))}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-700 px-1">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.15))}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mindmap Canvas + Detail Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual interactive Canvas */}
        <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-700 relative overflow-hidden min-h-[480px]">
          {/* Subtle grid pattern background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', 
              backgroundSize: '24px 24px' 
            }} 
          />

          <div className="relative z-10 w-full overflow-x-auto pb-4">
            <div 
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out'
              }}
              className="min-w-[800px] flex justify-center"
            >
              <svg width={svgWidth} height={svgHeight} className="overflow-visible select-none">
                {/* Connecting lines between nodes */}
                <g className="connecting-lines">
                  {displayNodes.map(node => {
                    if (!node.parentId) return null;
                    const parent = MINDMAP_NODES.find(n => n.id === node.parentId);
                    if (!parent) return null;

                    const isCurrentPath = selectedNode.id === node.id || selectedNode.parentId === node.id || selectedNode.id === parent.id;

                    // Draw smooth curve
                    const startX = parent.x;
                    const startY = parent.y;
                    const endX = node.x;
                    const endY = node.y;
                    const midX = (startX + endX) / 2;

                    return (
                      <g key={`link-${node.id}`}>
                        <path
                          d={`M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                          fill="none"
                          stroke={isCurrentPath ? '#38bdf8' : '#475569'}
                          strokeWidth={isCurrentPath ? 3 : 1.5}
                          strokeDasharray={isCurrentPath ? 'none' : '4,4'}
                          className="transition-all duration-300"
                        />
                        {isCurrentPath && (
                          <circle cx={endX} cy={endY} r="4" fill="#38bdf8" className="animate-ping" />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Nodes rendering */}
                {displayNodes.map(node => {
                  const isSelected = selectedNode.id === node.id;
                  const isViewed = viewedNodes.includes(node.id);
                  const isRoot = node.id === 'root';

                  return (
                    <g 
                      key={node.id} 
                      transform={`translate(${node.x}, ${node.y})`}
                      onClick={() => handleSelectNode(node)}
                      className="cursor-pointer group"
                    >
                      {/* Node halo when active */}
                      {isSelected && (
                        <rect
                          x={isRoot ? -120 : -95}
                          y={isRoot ? -42 : -32}
                          width={isRoot ? 240 : 190}
                          height={isRoot ? 84 : 64}
                          rx={isRoot ? 20 : 16}
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="3"
                          className="animate-pulse"
                        />
                      )}

                      {/* Main node bubble */}
                      <rect
                        x={isRoot ? -110 : -85}
                        y={isRoot ? -35 : -25}
                        width={isRoot ? 220 : 170}
                        height={isRoot ? 70 : 50}
                        rx={isRoot ? 16 : 12}
                        className={`transition-all duration-200 group-hover:scale-105 ${
                          isRoot 
                            ? 'fill-blue-600 stroke-blue-400 stroke-2 filter drop-shadow-lg' 
                            : isSelected
                            ? 'fill-sky-500 stroke-white stroke-2 filter drop-shadow-md'
                            : 'fill-slate-800 stroke-slate-600 hover:stroke-slate-400 stroke-1'
                        }`}
                      />

                      {/* Checkmark icon for completed learning */}
                      {isViewed && (
                        <circle
                          cx={isRoot ? 90 : 70}
                          cy={isRoot ? -25 : -18}
                          r="7"
                          fill="#10b981"
                        />
                      )}

                      {/* Text label */}
                      <text
                        textAnchor="middle"
                        dy={isRoot ? -5 : -2}
                        className={`text-xs font-extrabold select-none pointer-events-none fill-white`}
                        style={{ fontSize: isRoot ? '13px' : '11px', letterSpacing: '0.02em' }}
                      >
                        {node.label}
                      </text>

                      {/* Sub-label */}
                      <text
                        textAnchor="middle"
                        dy={isRoot ? 18 : 14}
                        className={`text-[9px] select-none pointer-events-none fill-slate-300 font-medium`}
                      >
                        {getCategoryBadge(node.category)}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-center gap-2">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Node Explorer • Click nodes to view middle school examples & quiz questions</span>
          </div>
        </div>

        {/* Selected Node Detailed Inspector */}
        <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
              {getCategoryBadge(selectedNode.category)}
            </span>
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              {viewedNodes.includes(selectedNode.id) ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Reviewed
                </span>
              ) : (
                <span className="text-slate-400 flex items-center gap-1">
                  <Circle className="w-3.5 h-3.5" /> Unreviewed
                </span>
              )}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              {selectedNode.label}
            </h3>
            <p className="text-xs font-semibold text-blue-700 mt-0.5">
              {selectedNode.shortDesc}
            </p>
          </div>

          {/* Full explanation */}
          <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" /> Core Concept
            </h4>
            <p>{selectedNode.fullExplanation}</p>
          </div>

          {/* Class 8 Everyday Example */}
          <div className="bg-amber-50/80 border border-amber-200 p-3.5 rounded-xl space-y-1">
            <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wide">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" /> Class 8 Everyday Example
            </h4>
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              {selectedNode.class8Example}
            </p>
          </div>

          {/* Exam Tip */}
          <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl flex items-start gap-2 text-xs text-indigo-950 font-medium">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-indigo-900">Exam Pro-Tip: </strong>
              {selectedNode.examTip}
            </div>
          </div>

          {/* Quick Check Question */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-600" /> Quick Knowledge Check
              </h4>
              <span className="text-[10px] text-slate-400 font-medium">Instant Test</span>
            </div>

            <p className="text-xs font-semibold text-slate-800">
              {selectedNode.quickCheckQuestion.question}
            </p>

            <div className="space-y-1.5">
              {selectedNode.quickCheckQuestion.options.map((opt, oIdx) => {
                const nodeQuiz = quizAnswerState[selectedNode.id];
                const isSelected = nodeQuiz?.selected === oIdx;
                const isCorrect = oIdx === selectedNode.quickCheckQuestion.correctIndex;
                const isSubmitted = nodeQuiz?.isSubmitted;

                let btnStyles = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';
                if (isSubmitted) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-100 border-rose-400 text-rose-950';
                  } else {
                    btnStyles = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswerQuickCheck(selectedNode.id, oIdx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-2 rounded-lg text-xs font-medium border transition flex items-center justify-between ${btnStyles}`}
                  >
                    <span>{opt}</span>
                    {isSubmitted && isCorrect && <span className="text-emerald-700 font-bold text-xs">✓ Correct</span>}
                    {isSubmitted && isSelected && !isCorrect && <span className="text-rose-700 font-bold text-xs">✗ Try Again</span>}
                  </button>
                );
              })}
            </div>

            {quizAnswerState[selectedNode.id]?.isSubmitted && (
              <p className="text-[11px] text-slate-600 bg-sky-50 p-2.5 rounded-lg border border-sky-200 leading-relaxed">
                💡 <span className="font-semibold text-sky-950">{selectedNode.quickCheckQuestion.explanation}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
