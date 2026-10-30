import React, { useState } from 'react';
import { 
  FlaskConical, 
  RotateCw, 
  Eye, 
  Layers, 
  Sparkles, 
  Play, 
  Pause, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Flame, 
  Droplets, 
  Wind, 
  Clock, 
  Scale, 
  Thermometer, 
  Ruler
} from 'lucide-react';

export const DiagramsView: React.FC = () => {
  const [activeDiagram, setActiveDiagram] = useState<'rusting' | 'methodCycle' | 'instruments'>('rusting');

  // Rusting Lab State
  const [rustDay, setRustDay] = useState<number>(5);
  const [selectedTube, setSelectedTube] = useState<number>(3);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Method Cycle State
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  // Instruments State
  const [activeInstrument, setActiveInstrument] = useState<'balance' | 'thermometer' | 'stopwatch' | 'scale'>('balance');
  const [balanceWeight, setBalanceWeight] = useState<number>(150); // grams
  const [currentTempC, setCurrentTempC] = useState<number>(30); // Celsius
  const [stopwatchRunning, setStopwatchRunning] = useState<boolean>(false);
  const [stopwatchTime, setStopwatchTime] = useState<number>(0);

  // Auto simulate rusting
  const handleAutoRunRust = () => {
    setIsSimulating(true);
    setRustDay(1);
    let day = 1;
    const interval = setInterval(() => {
      day += 1;
      if (day > 7) {
        clearInterval(interval);
        setIsSimulating(false);
      } else {
        setRustDay(day);
      }
    }, 700);
  };

  // Scientific Method Steps
  const methodSteps = [
    {
      step: 1,
      title: 'Observation',
      icon: '👀',
      question: 'What do you notice in your surroundings?',
      example: 'Shiny iron fence in your school garden turns reddish-brown and rough during the monsoon season.',
      keyRequirement: 'Use all senses and precision instruments; eliminate personal biases.'
    },
    {
      step: 2,
      title: 'Asking a Question',
      icon: '❓',
      question: 'What specific puzzle are you trying to solve?',
      example: '"Why does iron rust outdoors, and is water alone enough or is air also required?"',
      keyRequirement: 'Must be clearly focused, specific, and experimentally testable.'
    },
    {
      step: 3,
      title: 'Formulating a Hypothesis',
      icon: '💡',
      question: 'What is your tentative, educated explanation?',
      example: '"Iron rusts only when both oxygen (air) and liquid water (moisture) are present simultaneously."',
      keyRequirement: 'Must be testable and capable of being proven wrong (falsifiable).'
    },
    {
      step: 4,
      title: 'Controlled Experiment (Fair Test)',
      icon: '🧪',
      question: 'How will you test your hypothesis fairly?',
      example: 'Set up 4 test tubes: Dry Air alone, Water without air, Water with air, Salt water with air.',
      keyRequirement: 'Change ONLY ONE independent variable; hold all other variables constant!'
    },
    {
      step: 5,
      title: 'Data Collection & Measurement',
      icon: '📊',
      question: 'How do you record facts without bias?',
      example: 'Measure mass increase of rust in grams (Quantitative) and describe rust color/texture (Qualitative).',
      keyRequirement: 'Use standardized SI units (kg, g, m, s) and systematic recording tables.'
    },
    {
      step: 6,
      title: 'Analysis & Conclusion',
      icon: '🎯',
      question: 'Does the experimental evidence support your hypothesis?',
      example: 'Nails only rusted when exposed to BOTH oxygen and water. The hypothesis is supported and confirmed!',
      keyRequirement: 'If data contradicts hypothesis, modify hypothesis and repeat experiment.'
    }
  ];

  // Test tube descriptions for Rusting Virtual Lab
  const tubesData = [
    {
      id: 1,
      label: 'Tube A: Dry Air',
      contents: 'Nail + Anhydrous Calcium Chloride (Drying Agent) + Rubber Stopper',
      hasOxygen: true,
      hasMoisture: false,
      hasSalt: false,
      color: 'bg-amber-50',
      rustLevel: 0,
      description: 'The calcium chloride crystals absorb all moisture from the air inside the tube. Even though oxygen is present, no water exists.',
      result: 'No Rusting! The nail remains shiny and metallic even after 7 days.',
      variableNote: 'Tests oxygen WITHOUT moisture.'
    },
    {
      id: 2,
      label: 'Tube B: Water Without Air',
      contents: 'Nail + Boiled Distilled Water + Floating Oil Seal',
      hasOxygen: false,
      hasMoisture: true,
      hasSalt: false,
      color: 'bg-sky-50',
      rustLevel: 0,
      description: 'Boiling the water expels all dissolved oxygen gas. A thin layer of cooking oil poured on top prevents atmospheric air from dissolving back in.',
      result: 'No Rusting! Even though water is present, lack of dissolved oxygen prevents corrosion.',
      variableNote: 'Tests moisture WITHOUT oxygen.'
    },
    {
      id: 3,
      label: 'Tube C: Air + Water (Fair Test Control)',
      contents: 'Nail + Ordinary Tap Water + Open to Air',
      hasOxygen: true,
      hasMoisture: true,
      hasSalt: false,
      color: 'bg-orange-50',
      rustLevel: (rustDay / 7) * 0.75,
      description: 'Both atmospheric oxygen and liquid water are readily available in contact with the iron surface.',
      result: 'Heavy Rusting! Reddish-brown hydrated iron(III) oxide (Fe₂O₃·xH₂O) accumulates.',
      variableNote: 'Both conditions met: Rust forms progressively over days 1 to 7.'
    },
    {
      id: 4,
      label: 'Tube D: Salt Water + Air',
      contents: 'Nail + 5% Saline (Salt) Water + Open to Air',
      hasOxygen: true,
      hasMoisture: true,
      hasSalt: true,
      color: 'bg-rose-50',
      rustLevel: Math.min(1, (rustDay / 7) * 1.1),
      description: 'Dissolved sodium chloride (salt) increases electrical conductivity of the solution, dramatically accelerating the electrochemical oxidation of iron.',
      result: 'Extreme Corrosion! Flaky deep red-brown rust crust forms by Day 2–3.',
      variableNote: 'Demonstrates accelerated rusting in coastal environments.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Top Diagram Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
            Interactive Visual Diagrams
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Virtual Labs & Scientific Models
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveDiagram('rusting')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeDiagram === 'rusting'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FlaskConical className="w-4 h-4" /> Rusting Virtual Lab
          </button>
          <button
            onClick={() => setActiveDiagram('methodCycle')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeDiagram === 'methodCycle'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <RotateCw className="w-4 h-4" /> Scientific Method Cycle
          </button>
          <button
            onClick={() => setActiveDiagram('instruments')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeDiagram === 'instruments'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Scale className="w-4 h-4" /> SI Instruments Bench
          </button>
        </div>
      </div>

      {/* DIAGRAM 1: RUSTING VIRTUAL LAB */}
      {activeDiagram === 'rusting' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Class 8 Case Study Experiment
                </span>
                <h3 className="text-2xl font-black font-heading mt-1">
                  Controlled Rusting Experiment: What Really Causes Iron to Rust?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  In this classic fair test investigation, scientists isolate variables to prove whether oxygen alone, water alone, or both are required for rusting. Drag the timeline to see changes over 7 days!
                </p>
              </div>

              {/* Day Slider & Run Button */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 min-w-[280px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-300">Observation Day: {rustDay} of 7</span>
                  <button
                    onClick={handleAutoRunRust}
                    disabled={isSimulating}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 transition"
                  >
                    <Play className="w-3 h-3 fill-slate-950" />
                    <span>{isSimulating ? 'Simulating...' : 'Simulate 7 Days'}</span>
                  </button>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={rustDay}
                  onChange={(e) => setRustDay(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Day 1 (Setup)</span>
                  <span>Day 4 (Midpoint)</span>
                  <span>Day 7 (Conclusion)</span>
                </div>
              </div>
            </div>

            {/* Test Tubes Virtual Lab Bench */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {tubesData.map((tube) => {
                const isSelected = selectedTube === tube.id;
                const rustOpacity = tube.rustLevel;

                return (
                  <div
                    key={tube.id}
                    onClick={() => setSelectedTube(tube.id)}
                    className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-slate-800/90 border-amber-400 ring-2 ring-amber-400/50 shadow-xl scale-102' 
                        : 'bg-slate-900/60 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-amber-300">{tube.label.split(':')[0]}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/10 text-white">
                        {tube.rustLevel > 0 ? `${Math.round(tube.rustLevel * 100)}% Rusted` : 'No Rust'}
                      </span>
                    </div>

                    {/* Test Tube SVG Illustration */}
                    <div className="h-56 flex items-center justify-center relative my-2">
                      <svg width="90" height="200" viewBox="0 0 90 200" className="overflow-visible">
                        {/* Tube glass outline */}
                        <path
                          d="M 20 10 L 20 170 C 20 190, 70 190, 70 170 L 70 10 Z"
                          fill="none"
                          stroke="#94a3b8"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Lip */}
                        <ellipse cx="45" cy="10" rx="28" ry="6" fill="#334155" stroke="#cbd5e1" strokeWidth="2" />

                        {/* Stopper for Tube 1 */}
                        {tube.id === 1 && (
                          <rect x="23" y="10" width="44" height="15" rx="3" fill="#78350f" />
                        )}

                        {/* Liquid levels */}
                        {tube.id === 2 && (
                          <>
                            {/* Boiled water */}
                            <path
                              d="M 22 70 L 22 170 C 22 188, 68 188, 68 170 L 68 70 Z"
                              fill="#38bdf8"
                              opacity="0.3"
                            />
                            {/* Floating oil layer */}
                            <rect x="22" y="55" width="46" height="15" fill="#facc15" opacity="0.75" />
                          </>
                        )}

                        {tube.id === 3 && (
                          <path
                            d="M 22 90 L 22 170 C 22 188, 68 188, 68 170 L 68 90 Z"
                            fill="#38bdf8"
                            opacity="0.35"
                          />
                        )}

                        {tube.id === 4 && (
                          <path
                            d="M 22 90 L 22 170 C 22 188, 68 188, 68 170 L 68 90 Z"
                            fill="#0284c7"
                            opacity="0.45"
                          />
                        )}

                        {/* Calcium chloride pellets in Tube 1 */}
                        {tube.id === 1 && (
                          <g fill="#f8fafc" opacity="0.8">
                            <circle cx="35" cy="172" r="5" />
                            <circle cx="48" cy="170" r="6" />
                            <circle cx="58" cy="173" r="5" />
                            <circle cx="42" cy="162" r="4" />
                          </g>
                        )}

                        {/* Iron Nail */}
                        <g transform="translate(45, 120)">
                          {/* Nail head */}
                          <line x1="-12" y1="-45" x2="12" y2="-45" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
                          {/* Nail body (clean metallic) */}
                          <line x1="0" y1="-45" x2="0" y2="45" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
                          {/* Nail tip */}
                          <polygon points="-3,45 3,45 0,55" fill="#cbd5e1" />

                          {/* Rust crust layer (reddish brown) */}
                          {rustOpacity > 0 && (
                            <g opacity={rustOpacity} className="transition-opacity duration-500">
                              <line x1="0" y1="-45" x2="0" y2="45" stroke="#b45309" strokeWidth="8" strokeDasharray="3,2" />
                              <circle cx="-2" cy="10" r="4" fill="#92400e" />
                              <circle cx="3" cy="-15" r="5" fill="#78350f" />
                              <circle cx="1" cy="30" r="4" fill="#b45309" />
                            </g>
                          )}
                        </g>

                        {/* Reflection highlights */}
                        <path d="M 24 30 L 24 160" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
                      </svg>
                    </div>

                    {/* Tube status badges */}
                    <div className="space-y-1.5 pt-2 text-[11px]">
                      <div className="font-bold text-white truncate">{tube.label.split(':')[1]}</div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className={`w-2 h-2 rounded-full ${tube.hasOxygen ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                        <span>Oxygen: {tube.hasOxygen ? 'Present' : 'Absent'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className={`w-2 h-2 rounded-full ${tube.hasMoisture ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                        <span>Moisture: {tube.hasMoisture ? 'Present' : 'Absent'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Variable Breakdown of the Selected Test Tube */}
          {(() => {
            const current = tubesData.find(t => t.id === selectedTube)!;
            return (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Investigation Breakdown
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 font-heading mt-1">
                      {current.label}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-400">Chemical Reaction</span>
                    <div className="text-xs font-mono font-bold text-indigo-700">
                      4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-blue-500" /> Experimental Setup
                    </h5>
                    <p className="text-slate-600 text-xs leading-relaxed">{current.contents}</p>
                    <p className="text-slate-700 text-xs mt-2 font-medium">{current.description}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <h5 className="font-bold text-blue-950 mb-1 flex items-center gap-1.5">
                      <Sliders className="w-4 h-4 text-blue-600" /> Variables in this Tube
                    </h5>
                    <ul className="space-y-1 text-xs text-blue-900 font-medium">
                      <li>• <strong>Independent:</strong> {current.variableNote}</li>
                      <li>• <strong>Dependent:</strong> Amount of rust formed on Day {rustDay}.</li>
                      <li>• <strong>Controlled:</strong> Same iron nail alloy, room temp (25°C), duration (7 days).</li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <h5 className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Observed Result
                    </h5>
                    <p className="text-emerald-900 text-xs font-semibold leading-relaxed">{current.result}</p>
                    <p className="text-xs text-slate-600 mt-2">
                      {current.rustLevel > 0 
                        ? 'Confirms that rusting requires both oxygen and water.' 
                        : 'Proves that eliminating either oxygen or moisture halts the rusting reaction completely.'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* DIAGRAM 2: THE SCIENTIFIC METHOD CYCLE */}
      {activeDiagram === 'methodCycle' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Step-By-Step Scientific Framework
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                The 6-Phase Scientific Method Cycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Science is not a straight line—it is a self-correcting cycle. Click through the phases to explore how discoveries happen.
              </p>
            </div>

            {/* Stepper Timeline Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
              {methodSteps.map((step, idx) => {
                const isActive = activeMethodStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveMethodStep(idx)}
                    className={`p-3 rounded-xl border text-left transition ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-102 font-bold'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-xl mb-1">{step.icon}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-80">Step {step.step}</div>
                    <div className="text-xs font-bold truncate">{step.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Current Active Step Interactive Card */}
            {(() => {
              const current = methodSteps[activeMethodStep];
              return (
                <div className="bg-gradient-to-br from-indigo-50/70 via-blue-50/50 to-slate-50 rounded-2xl p-6 border border-indigo-200 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-100">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-3 bg-white rounded-2xl shadow-xs border border-indigo-100">
                        {current.icon}
                      </span>
                      <div>
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Phase {current.step}</span>
                        <h4 className="text-2xl font-black text-slate-900 font-heading">{current.title}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveMethodStep(prev => Math.max(0, prev - 1))}
                        disabled={activeMethodStep === 0}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 bg-white disabled:opacity-40 hover:bg-slate-50"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setActiveMethodStep(prev => Math.min(methodSteps.length - 1, prev + 1))}
                        disabled={activeMethodStep === methodSteps.length - 1}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700 shadow-xs"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h5 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider text-slate-500">
                        Scientist's Guiding Question
                      </h5>
                      <p className="text-base font-extrabold text-indigo-950 font-heading">
                        "{current.question}"
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <h5 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider text-slate-500">
                        Class 8 Everyday Example
                      </h5>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {current.example}
                      </p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                      <h5 className="font-bold text-amber-900 mb-1 text-xs uppercase tracking-wider">
                        Critical Rule for Middle Schoolers
                      </h5>
                      <p className="text-amber-950 font-semibold leading-relaxed">
                        {current.keyRequirement}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* DIAGRAM 3: SI UNITS & INSTRUMENT BENCH */}
      {activeDiagram === 'instruments' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider">
                SI Units & Measurements
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Laboratory Instruments Workbench
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore the four primary instruments covered in Chapter 1. Test adjustments and see standard SI conversions live!
              </p>
            </div>

            {/* Instrument Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'balance', label: 'Beam / Digital Scale (Mass)', icon: Scale },
                { id: 'thermometer', label: 'Lab Thermometer (Temp)', icon: Thermometer },
                { id: 'stopwatch', label: 'Digital Stopwatch (Time)', icon: Clock },
                { id: 'scale', label: 'Meter Scale (Length)', icon: Ruler },
              ].map((inst) => {
                const Icon = inst.icon;
                const isActive = activeInstrument === inst.id;
                return (
                  <button
                    key={inst.id}
                    onClick={() => setActiveInstrument(inst.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{inst.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Instrument Interactive Display */}
            {activeInstrument === 'balance' && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded">
                    Physical Quantity: Mass
                  </div>
                  <h4 className="text-xl font-black text-slate-900 font-heading">Digital Precision Scale</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mass measures the quantity of matter in an object. While school labs frequently measure in grams (g) for chemical reagents, the official SI base unit is the <strong>Kilogram (kg)</strong>.
                  </p>
                  <div>
                    <label className="text-xs font-bold text-slate-700">Adjust Object Mass (Grams): {balanceWeight} g</label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={balanceWeight}
                      onChange={(e) => setBalanceWeight(Number(e.target.value))}
                      className="w-full accent-blue-600 mt-1 cursor-pointer"
                    />
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-blue-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600">Standard SI Equivalent:</span>
                    <span className="text-base font-extrabold text-blue-700 font-mono">
                      {(balanceWeight / 1000).toFixed(3)} kg
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-48 h-28 bg-slate-900 text-emerald-400 font-mono text-3xl font-extrabold rounded-xl flex flex-col items-center justify-center border-4 border-slate-700 shadow-inner">
                    <span>{balanceWeight.toFixed(1)} g</span>
                    <span className="text-xs text-slate-400 font-sans tracking-normal">STABLE • SI: {(balanceWeight / 1000).toFixed(3)} kg</span>
                  </div>
                  <div className="w-40 h-4 bg-slate-400 rounded-t-lg mt-2"></div>
                  <div className="w-56 h-8 bg-slate-300 rounded-b-xl border-t border-slate-400"></div>
                </div>
              </div>
            )}

            {activeInstrument === 'thermometer' && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded">
                    Physical Quantity: Temperature
                  </div>
                  <h4 className="text-xl font-black text-slate-900 font-heading">Laboratory Thermometer</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Laboratory thermometers typically have a range of -10°C to 110°C. Remember: while school activities read Celsius (°C), the fundamental SI unit required for global physics is <strong>Kelvin (K)</strong>.
                  </p>
                  <div>
                    <label className="text-xs font-bold text-slate-700">Adjust Temperature: {currentTempC} °C</label>
                    <input
                      type="range"
                      min="-10"
                      max="110"
                      value={currentTempC}
                      onChange={(e) => setCurrentTempC(Number(e.target.value))}
                      className="w-full accent-indigo-600 mt-1 cursor-pointer"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-white rounded-xl border border-indigo-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Celsius (°C)</span>
                      <div className="text-lg font-bold text-slate-800 font-mono">{currentTempC}°C</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-indigo-200">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase">SI Unit: Kelvin (K)</span>
                      <div className="text-lg font-extrabold text-indigo-700 font-mono">{(currentTempC + 273.15).toFixed(2)} K</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center p-4">
                  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                    {/* Thermometer SVG */}
                    <div className="relative w-8 h-64 bg-slate-200 rounded-full border-2 border-slate-400 flex flex-col justify-end p-1">
                      <div 
                        className="w-full bg-rose-500 rounded-b-full transition-all duration-300"
                        style={{ height: `${Math.max(8, ((currentTempC + 10) / 120) * 100)}%` }}
                      />
                    </div>
                    <div className="space-y-6 text-xs text-slate-600 font-medium">
                      <div>100°C / 373.15 K — Boiling Point of Water</div>
                      <div>37°C / 310.15 K — Normal Human Body Temp</div>
                      <div>0°C / 273.15 K — Freezing Point of Water</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeInstrument === 'stopwatch' && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded">
                    Physical Quantity: Time
                  </div>
                  <h4 className="text-xl font-black text-slate-900 font-heading">Laboratory Digital Stopwatch</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Time is essential in science experiments to measure rates of reaction, pendulum time periods, or oscillations. The official SI base unit of time is the <strong>Second (s)</strong>.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setStopwatchRunning(!stopwatchRunning)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition flex items-center gap-1.5 ${
                        stopwatchRunning ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                    >
                      {stopwatchRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{stopwatchRunning ? 'Stop Timer' : 'Start Timer'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setStopwatchRunning(false);
                        setStopwatchTime(0);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition"
                    >
                      Reset (0.00s)
                    </button>
                  </div>
                </div>

                <div className="flex justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-48 h-48 rounded-full border-8 border-slate-800 bg-slate-900 flex flex-col items-center justify-center text-white shadow-xl">
                    <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest">STOPWATCH</span>
                    <span className="text-3xl font-mono font-extrabold text-white mt-1">
                      {stopwatchTime.toFixed(2)} <span className="text-lg text-slate-400">s</span>
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">SI Unit: Second (s)</span>
                  </div>
                </div>
              </div>
            )}

            {activeInstrument === 'scale' && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded">
                    Physical Quantity: Length
                  </div>
                  <h4 className="text-xl font-black text-slate-900 font-heading">Standard Meter Scale</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Standard meter scales provide mm and cm graduations. The official SI base unit of length is the <strong>Meter (m)</strong>.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-emerald-200 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">1 Meter (m):</span>
                      <span className="font-mono font-bold text-emerald-700">100 cm = 1,000 mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-600">1 Kilometer (km):</span>
                      <span className="font-mono font-bold text-emerald-700">1,000 meters</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  {/* Ruler Graphic */}
                  <div className="w-full max-w-sm h-16 bg-amber-100 border-2 border-amber-300 rounded-lg flex items-end justify-between px-2 pb-1 shadow-inner select-none">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-[9px] font-bold text-amber-900">{i * 10}</span>
                        <div className="w-0.5 h-6 bg-amber-900 mt-0.5"></div>
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 mt-2">Centimeter Graduated Scale (SI Base: Meter)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
