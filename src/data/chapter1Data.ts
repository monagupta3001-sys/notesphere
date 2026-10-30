import { NoteSection, MindmapNode, QuizQuestion, Flashcard, QuestionBankItem } from '../types';

export const CHAPTER_INFO = {
  class: 'Class 8',
  subject: 'Science',
  textbook: 'Curiosity Textbook (NCERT / CBSE Curriculum)',
  chapterNumber: 1,
  title: 'Exploring the Investigative World of Science',
  tagline: 'Comprehensive Detailed Study Notes, Mindmaps, Virtual Labs & Quizzes',
  readingTime: '15 min read',
  pdfPath: '/assets/aistudio/Class_8_Science_Chapter_1_Notes_-_NoteSphere_cff40ef8.pdf',
  logoPath: '/assets/aistudio/Gemini_Generated_Image_pe79i2pe79i2pe79_6cf9577a.png',
};

export const SYLLABUS_CHAPTERS = [
  { id: 1, title: 'Exploring the Investigative World of Science', status: 'available', subject: 'Science', units: 4 },
  { id: 2, title: 'Cell — Structure and Functions', status: 'coming_soon', subject: 'Science', units: 5 },
  { id: 3, title: 'Microorganisms: Friend and Foe', status: 'coming_soon', subject: 'Science', units: 6 },
  { id: 4, title: 'Combustion and Flame', status: 'coming_soon', subject: 'Science', units: 4 },
  { id: 5, title: 'Conservation of Plants and Animals', status: 'coming_soon', subject: 'Science', units: 4 },
  { id: 6, title: 'Reproduction in Animals', status: 'coming_soon', subject: 'Science', units: 5 },
  { id: 7, title: 'Reaching the Age of Adolescence', status: 'coming_soon', subject: 'Science', units: 4 },
  { id: 8, title: 'Force and Pressure', status: 'coming_soon', subject: 'Science', units: 6 },
  { id: 9, title: 'Friction', status: 'coming_soon', subject: 'Science', units: 4 },
  { id: 10, title: 'Sound', status: 'coming_soon', subject: 'Science', units: 5 },
  { id: 11, title: 'Chemical Effects of Electric Current', status: 'coming_soon', subject: 'Science', units: 4 },
  { id: 12, title: 'Some Natural Phenomena & Light', status: 'coming_soon', subject: 'Science', units: 5 },
];

export const NOTE_SECTIONS: NoteSection[] = [
  {
    id: 'sec-1',
    number: '1',
    title: 'Introduction to Scientific Inquiry',
    subtitle: 'From Latin "Scientia" to the Living Engine of Human Curiosity',
    readTime: '3 min',
    summary: 'Science is a dynamic way of thinking, questioning, and exploring nature rather than just memorizing formulas.',
    content: {
      paragraphs: [
        'Science is far more than just a collection of established facts, memorized formulas, or heavy textbooks; it is fundamentally a dynamic way of thinking, questioning, and exploring the universe. Human curiosity drives us to look at natural phenomena—such as why leaves fall, how rain forms, or why objects drop to the ground—and seek logical, evidence-backed answers.',
        'The word science originates from the Latin word "scientia", meaning "knowledge". Historically, ancient civilizations observed astronomical movements, seasonal patterns, and medicinal plants long before formal modern laboratories existed, proving that scientific inquiry is deeply rooted in everyday life.'
      ],
      subsections: [
        {
          subtitle: 'What Makes a Person Think Scientifically?',
          text: 'Thinking like a scientist does not require high-tech machinery; it starts with an active and curious mindset.',
          bulletPoints: [
            'Curiosity: Asking "Why?", "How?", and "What happens if...?" about everyday events.',
            'Skepticism: Not accepting statements blindly without proof or evidence.',
            'Open-mindedness: Willingness to change one’s opinion when new, verified evidence emerges.',
            'Honesty: Reporting actual observations accurately, even if they contradict expectations.'
          ],
          highlightBox: {
            type: 'curiosity',
            title: 'Did You Know? The Meaning of Scientia',
            body: 'Ancient scholars did not separate science from philosophy or nature. Scientia meant systematic, structured knowledge gained through rigorous observation of stars, crops, water cycles, and health.'
          }
        }
      ],
      takeaway: 'Scientific inquiry begins with curiosity and is sustained through evidence, not blind belief.'
    }
  },
  {
    id: 'sec-2',
    number: '2',
    title: 'The Scientific Method: Step-by-Step Investigation',
    subtitle: 'The 6-Step Systematic Framework Scientists Use Worldwide',
    readTime: '5 min',
    summary: 'A structured roadmap ensuring objectivity, reproducibility, and accuracy from observation to conclusion.',
    content: {
      paragraphs: [
        'When scientists investigate a problem or test an idea, they follow a systematic framework known as the Scientific Method. This structured roadmap ensures objectivity, reproducibility, and accuracy across experiments performed anywhere in the world.'
      ],
      subsections: [
        {
          subtitle: 'Step 1: Observation',
          text: 'Noticing details in the environment using senses or instruments.',
          bulletPoints: [
            'Example: Noticing that shiny iron objects left outdoors in the rainy season develop a flaky reddish-brown coating over time.',
            'Instruments like magnifying lenses, rulers, or thermometers help make observations more accurate.'
          ]
        },
        {
          subtitle: 'Step 2: Asking a Question',
          text: 'Formulating a specific, clear query based on the observation.',
          bulletPoints: [
            'A good scientific question is focused and testable.',
            'Example: "Why does iron rust, and what factors accelerate or prevent it?"'
          ]
        },
        {
          subtitle: 'Step 3: Formulating a Hypothesis',
          text: 'Proposing a tentative, educated explanation or prediction that can be experimentally tested.',
          bulletPoints: [
            'A hypothesis is never a random guess—it is based on initial observations and background knowledge.',
            'Example: "Iron rusts when it comes into contact with both oxygen and moisture simultaneously."'
          ],
          highlightBox: {
            type: 'concept',
            title: 'Exam Note: What Makes a Hypothesis Valid?',
            body: 'A hypothesis must be TESTABLE and FALSIFIABLE. That means you must be able to design a realistic experiment that could prove it wrong or right.'
          }
        }
      ],
      takeaway: 'Observation sparks questions; questions lead to testable hypotheses.'
    }
  },
  {
    id: 'sec-3',
    number: '3',
    title: 'Experimentation, Data Collection, and Analysis',
    subtitle: 'Designing Fair Tests & Understanding Independent, Dependent, and Controlled Variables',
    readTime: '4 min',
    summary: 'A fair experiment isolates one factor at a time so you know exactly what caused the result.',
    content: {
      paragraphs: [
        'Once a hypothesis is framed, controlled experiments are designed to test it. A fair experiment changes only one variable (the independent variable) while keeping all other conditions constant (controlled variables) to observe the resulting effect (dependent variable).'
      ],
      subsections: [
        {
          subtitle: 'The Three Types of Variables in a Fair Test',
          text: 'Understanding variables is the most critical concept in middle school science experiments:',
          bulletPoints: [
            'Independent Variable: The factor you deliberately alter (e.g., exposing iron to dry air vs. water without air vs. water with air).',
            'Dependent Variable: The factor you measure or observe as a result (e.g., whether rust forms and how thick the rust layer is).',
            'Controlled Variables: All factors kept strictly identical across every test tube (e.g., type of nail, temperature, size of tube, duration).'
          ],
          highlightBox: {
            type: 'warning',
            title: 'Golden Rule of Fair Testing',
            body: 'If you change more than one variable at the same time, you CANNOT determine which variable caused the observed change!'
          }
        },
        {
          subtitle: 'Data Collection: Quantitative vs. Qualitative',
          text: 'Scientists record observations using two distinct types of data:',
          bulletPoints: [
            'Quantitative Data: Involves exact numbers, mass (grams), temperature (°C), volume (mL), or time (hours/days).',
            'Qualitative Data: Descriptive notes about sensory qualities such as color shifts, odor, bubbles, or physical texture changes.'
          ]
        },
        {
          subtitle: 'Analysis and Conclusion',
          text: 'Examining data tables and graphs for trends. If the experimental results support the hypothesis, it becomes part of scientific understanding. If not, the hypothesis is modified and re-tested.'
        }
      ],
      takeaway: 'Fair tests require changing only one independent variable while keeping all controlled variables constant.'
    }
  },
  {
    id: 'sec-4',
    number: '4',
    title: 'Importance of Standard Units and Measurement',
    subtitle: 'Why the Global SI System is the Bedrock of Modern Science',
    readTime: '3 min',
    summary: 'Standardized units allow scientists across the globe to communicate findings without confusion.',
    content: {
      paragraphs: [
        'Accurate measurements are the bedrock of scientific discovery. Without standardized units, communicating experimental findings across the world would be impossible. In ancient times, people measured lengths using cubits (elbow to fingertip) or footsteps, but these differed from person to person!',
        'To eliminate ambiguity, the International System of Units (SI Units) was adopted globally as the common language of measurement.'
      ],
      table: {
        caption: 'Fundamental Physical Quantities, Standard SI Units, and Common Instruments',
        headers: ['Physical Quantity', 'Standard SI Unit (Symbol)', 'Common Laboratory Instrument', 'Everyday Class 8 Example'],
        rows: [
          ['Length', 'Meter (m)', 'Scale, Measuring Tape, Vernier Caliper', 'Measuring the height of a plant seedling daily'],
          ['Mass', 'Kilogram (kg)', 'Beam Balance, Digital Precision Scale', 'Weighing iron nails before and after rusting'],
          ['Time', 'Second (s)', 'Stopwatch, Digital Timer, Clock', 'Timing the duration of a chemical reaction or pendulum swing'],
          ['Temperature', 'Kelvin (K) / Celsius (°C)', 'Laboratory Thermometer, Digital Probe', 'Monitoring temperature changes in an exothermic reaction']
        ]
      },
      subsections: [
        {
          subtitle: 'Key Temperature Conversion for Class 8',
          text: 'While Celsius (°C) is commonly used in everyday school labs, Kelvin (K) is the official SI unit used in scientific thermodynamics. The formula to convert is: K = °C + 273.15.',
          highlightBox: {
            type: 'example',
            title: 'Sample Exam Problem',
            body: 'Convert room temperature (25°C) to Kelvin.\nCalculation: 25 + 273.15 = 298.15 K.'
          }
        }
      ],
      takeaway: 'Standard units (SI) provide universal reproducibility and accuracy across all scientific research.'
    }
  }
];

export const MINDMAP_NODES: MindmapNode[] = [
  {
    id: 'root',
    label: 'World of Science (Ch. 1)',
    category: 'core',
    x: 450,
    y: 260,
    shortDesc: 'Class 8 Science: Exploring the Investigative World of Science.',
    fullExplanation: 'The introductory chapter establishes how science works: through curiosity, logical reasoning, systematic experiments, and universal standards.',
    class8Example: 'Investigating why bread grows mold or why iron rusts during rainy seasons.',
    examTip: 'Remember the core definition: Science is inquiry based on verifiable evidence, not opinions.',
    quickCheckQuestion: {
      question: 'What is the fundamental driving force behind scientific inquiry?',
      options: ['Memorizing textbooks', 'Human curiosity & questioning', 'Following superstitions', 'Expensive machinery'],
      correctIndex: 1,
      explanation: 'Curiosity to understand natural phenomena drives the scientific endeavor.'
    }
  },
  {
    id: 'node-inquiry',
    label: '1. Scientific Inquiry',
    category: 'inquiry',
    parentId: 'root',
    x: 180,
    y: 110,
    shortDesc: 'The spirit of questioning natural phenomena.',
    fullExplanation: 'Comes from the Latin "scientia" (meaning knowledge). Rooted in observing nature long before modern labs existed.',
    class8Example: 'Ancient astronomers tracking planetary orbits to predict agricultural seasons.',
    examTip: 'State Latin root "scientia" for a guaranteed 1-mark recall in tests.',
    quickCheckQuestion: {
      question: 'The word "science" is derived from the Latin "scientia", which means:',
      options: ['Experiment', 'Knowledge', 'Laboratory', 'Invention'],
      correctIndex: 1,
      explanation: '"Scientia" translates directly to "knowledge".'
    }
  },
  {
    id: 'node-method',
    label: '2. Scientific Method',
    category: 'method',
    parentId: 'root',
    x: 720,
    y: 110,
    shortDesc: 'Systematic 6-step roadmap for investigating questions.',
    fullExplanation: 'Observation -> Question -> Hypothesis -> Experiment -> Data Collection -> Analysis & Conclusion.',
    class8Example: 'Noticing rust, asking why it forms, hypothesizing moisture+air, testing nails in tubes.',
    examTip: 'Memorize the correct sequence: Observation ALWAYS precedes Hypothesis!',
    quickCheckQuestion: {
      question: 'What is the correct sequence of the first three steps in the scientific method?',
      options: [
        'Hypothesis -> Observation -> Question',
        'Observation -> Question -> Hypothesis',
        'Experiment -> Conclusion -> Hypothesis',
        'Question -> Experiment -> Observation'
      ],
      correctIndex: 1,
      explanation: 'Observation leads to asking a question, which leads to framing a testable hypothesis.'
    }
  },
  {
    id: 'node-hypothesis',
    label: 'Hypothesis Framing',
    category: 'method',
    parentId: 'node-method',
    x: 880,
    y: 40,
    shortDesc: 'A testable, educated tentative explanation.',
    fullExplanation: 'A hypothesis is an educated prediction formulated before experimenting. It must be testable through empirical observation.',
    class8Example: '"Iron rusts faster when exposed to salt water than tap water."',
    examTip: 'A good hypothesis can be tested and proven false (falsifiability).',
    quickCheckQuestion: {
      question: 'A hypothesis must be:',
      options: ['Accepted without proof', 'Testable through experiment', 'Always 100% correct', 'Kept a secret'],
      correctIndex: 1,
      explanation: 'A scientific hypothesis must be testable through observation or experiment.'
    }
  },
  {
    id: 'node-variables',
    label: '3. Variables & Fair Test',
    category: 'variables',
    parentId: 'root',
    x: 750,
    y: 420,
    shortDesc: 'Controlling factors to isolate cause and effect.',
    fullExplanation: 'Independent Variable (manipulated), Dependent Variable (measured), Controlled Variables (kept constant).',
    class8Example: 'Testing fertilizer on plant height: fertilizer is independent, plant height is dependent, sunlight/water are controlled.',
    examTip: 'In a fair test, you must change ONLY ONE independent variable at a time.',
    quickCheckQuestion: {
      question: 'In an experiment, the factor that a scientist deliberately changes is the:',
      options: ['Controlled variable', 'Independent variable', 'Dependent variable', 'Uncertain variable'],
      correctIndex: 1,
      explanation: 'The independent variable is the single factor intentionally changed to observe its effect.'
    }
  },
  {
    id: 'node-data',
    label: '4. Data & Analysis',
    category: 'variables',
    parentId: 'node-variables',
    x: 890,
    y: 500,
    shortDesc: 'Quantitative (numerical) & Qualitative (descriptive).',
    fullExplanation: 'Quantitative uses numbers and units (e.g. 5.2 grams, 30 seconds). Qualitative describes sensations (e.g. reddish flakes, effervescence).',
    class8Example: 'Recording temperature rises with a thermometer vs observing color turns from blue to green.',
    examTip: 'Quantitative data is objective and minimizes personal human bias.',
    quickCheckQuestion: {
      question: 'Which of the following represents quantitative data?',
      options: ['The liquid turned cloudy', 'The temperature increased by 14.5 °C', 'The nail smelled rusty', 'The gas felt warm'],
      correctIndex: 1,
      explanation: 'Quantitative data involves numerical measurements with standard units.'
    }
  },
  {
    id: 'node-units',
    label: '5. Standard SI Units',
    category: 'measurement',
    parentId: 'root',
    x: 170,
    y: 410,
    shortDesc: 'Universal International System (SI) for length, mass, time, temperature.',
    fullExplanation: 'Length (meter), Mass (kilogram), Time (second), Temperature (Kelvin / Celsius). Enables scientists worldwide to communicate.',
    class8Example: 'Using a digital balance to weigh chemicals precisely instead of guessing with spoonfuls.',
    examTip: 'Remember the SI unit of temperature is Kelvin (K), not degree Celsius!',
    quickCheckQuestion: {
      question: 'What is the official SI base unit of temperature?',
      options: ['Degree Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'Calorie'],
      correctIndex: 2,
      explanation: 'Kelvin (K) is the official SI base unit for thermodynamic temperature.'
    }
  },
  {
    id: 'node-attitude',
    label: '6. Scientific Attitude',
    category: 'attitude',
    parentId: 'root',
    x: 450,
    y: 470,
    shortDesc: 'Evidence-based thinking: "How do we know this?"',
    fullExplanation: 'Developing a scientific mindset means rejecting superstition, requiring proof, respecting ethical inquiry, and welcoming peer review.',
    class8Example: 'Not believing viral health claims online without checking verified medical research.',
    examTip: 'Key takeaway from Curiosity Textbook: Always ask "How do we know this?"',
    quickCheckQuestion: {
      question: 'Which behavior best demonstrates a scientific attitude?',
      options: [
        'Believing rumors without questioning',
        'Asking "How do we know this?" and demanding evidence',
        'Ignoring data that disagrees with your theory',
        'Refusing to repeat failed trials'
      ],
      correctIndex: 1,
      explanation: 'A scientific attitude demands verifiable evidence and rational inquiry.'
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'The word "science" is derived from which Latin word, and what does it mean?',
    options: [
      'Scientia, meaning "Knowledge"',
      'Societas, meaning "Society"',
      'Scire, meaning "To invent"',
      'Sensus, meaning "Sense"'
    ],
    correctAnswer: 0,
    explanation: 'Science originates from the Latin word "scientia", which means "knowledge" acquired through observation and study.',
    difficulty: 'easy',
    topic: 'Introduction to Science'
  },
  {
    id: 'q2',
    question: 'In a fair scientific experiment, why must only ONE independent variable be changed at a time?',
    options: [
      'To save time and lab materials',
      'To ensure we can isolate exactly which variable caused the observed effect',
      'Because instruments can only measure one thing',
      'To make the experiment harder to repeat'
    ],
    correctAnswer: 1,
    explanation: 'If you change two or more variables simultaneously, you cannot know which variable was responsible for the changes in your dependent variable.',
    difficulty: 'medium',
    topic: 'Fair Testing & Variables'
  },
  {
    id: 'q3',
    question: 'A student sets up an experiment to see if sunlight affects seedling growth. In this investigation, the height of the seedlings is the:',
    options: [
      'Independent variable',
      'Dependent variable',
      'Controlled variable',
      'Extraneous variable'
    ],
    correctAnswer: 1,
    explanation: 'Seedling height is the factor being measured as an outcome; therefore, it is the dependent variable.',
    difficulty: 'medium',
    topic: 'Variables'
  },
  {
    id: 'q4',
    question: 'Which of the following is the standard SI base unit of temperature?',
    options: [
      'Degree Celsius (°C)',
      'Degree Fahrenheit (°F)',
      'Kelvin (K)',
      'Joule (J)'
    ],
    correctAnswer: 2,
    explanation: 'In the International System of Units (SI), Kelvin (K) is the base unit of thermodynamic temperature, though Celsius is often used in daily lab practice.',
    difficulty: 'easy',
    topic: 'SI Units'
  },
  {
    id: 'q5',
    question: 'What is the correct SI unit and standard measuring instrument pair for Mass?',
    options: [
      'Meter (m) — Measuring tape',
      'Kilogram (kg) — Beam balance or digital scale',
      'Gram (g) — Spring balance',
      'Newton (N) — Stopwatch'
    ],
    correctAnswer: 1,
    explanation: 'The SI base unit of mass is Kilogram (kg), typically measured using a beam balance or precision digital scale.',
    difficulty: 'easy',
    topic: 'SI Units'
  },
  {
    id: 'q6',
    question: 'Which of the following observations qualifies as "Quantitative Data"?',
    options: [
      'The iron nail developed reddish-brown flakes',
      'The water turned muddy brown after 3 hours',
      'The mass of the nail increased from 10.20 g to 10.45 g',
      'The test tube smelled slightly metallic'
    ],
    correctAnswer: 2,
    explanation: 'Quantitative data deals with measurable numerical quantities (10.20 g to 10.45 g) rather than sensory descriptions.',
    difficulty: 'medium',
    topic: 'Data Collection'
  },
  {
    id: 'q7',
    question: 'A scientist proposes: "Iron nails rust only when both oxygen and moisture are present." This statement is an example of a:',
    options: [
      'Scientific conclusion proven forever',
      'Tentative, testable hypothesis',
      'Unverifiable superstition',
      'Controlled variable'
    ],
    correctAnswer: 1,
    explanation: 'An educated, testable proposal put forward before or during investigation to explain an observation is called a hypothesis.',
    difficulty: 'easy',
    topic: 'Scientific Method'
  },
  {
    id: 'q8',
    question: 'If room temperature in your school science lab is 27 °C, what is this temperature in Kelvin?',
    options: [
      '246 K',
      '300.15 K',
      '273 K',
      '327.15 K'
    ],
    correctAnswer: 1,
    explanation: 'Kelvin = °C + 273.15. Therefore: 27 + 273.15 = 300.15 K (often rounded to 300 K in Class 8).',
    difficulty: 'hard',
    topic: 'SI Units Calculation'
  },
  {
    id: 'q9',
    question: 'In an experiment investigating rust on iron nails, one test tube contains boiled water covered with a layer of oil. What is the purpose of the oil layer?',
    options: [
      'To provide nutrients to the nail',
      'To prevent atmospheric oxygen from dissolving into the boiled water',
      'To speed up the rusting process',
      'To change the temperature of the water'
    ],
    correctAnswer: 1,
    explanation: 'Boiling water removes dissolved oxygen, and the oil layer acts as an impermeable barrier keeping atmospheric oxygen out, isolating the variable of water without oxygen!',
    difficulty: 'hard',
    topic: 'Experimental Setup'
  },
  {
    id: 'q10',
    question: 'What is the most crucial attitude a Class 8 student should develop according to the chapter?',
    options: [
      'Memorizing every formula without questioning',
      'Never accepting claims without asking "How do we know this?" and checking evidence',
      'Trusting anything written online',
      'Performing experiments without safety measures'
    ],
    correctAnswer: 1,
    explanation: 'Developing a scientific temper means questioning assertions, testing them ethically, and demanding verifiable evidence.',
    difficulty: 'easy',
    topic: 'Scientific Attitude'
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    front: 'Scientia',
    back: 'The Latin root word from which "Science" is derived. It translates directly to "Knowledge".',
    category: 'Etymology',
    hint: 'Think of knowledge in ancient Rome',
    example: 'Ancient scholars sought systematic scientia of crop cycles and celestial stars.'
  },
  {
    id: 'fc-2',
    front: 'Scientific Method',
    back: 'A systematic 6-step roadmap (Observation -> Question -> Hypothesis -> Experiment -> Data -> Conclusion) ensuring objectivity and reproducibility.',
    category: 'Process',
    hint: 'How scientists investigate things reliably',
    example: 'Used across modern medicine, astronomy, and biology.'
  },
  {
    id: 'fc-3',
    front: 'Hypothesis',
    back: 'A tentative, educated explanation or prediction that can be experimentally tested and potentially falsified.',
    category: 'Definitions',
    hint: 'An educated guess that can be tested',
    example: '"Plant leaves produce starch only when exposed to sunlight."'
  },
  {
    id: 'fc-4',
    front: 'Independent Variable',
    back: 'The ONE single condition or factor that the researcher intentionally changes to observe its effect.',
    category: 'Fair Testing',
    hint: 'The cause you choose to manipulate',
    example: 'The presence of moisture in a rusting experiment.'
  },
  {
    id: 'fc-5',
    front: 'Dependent Variable',
    back: 'The variable being measured or observed in response to changes in the independent variable.',
    category: 'Fair Testing',
    hint: 'The outcome/result you measure',
    example: 'The mass of rust formed on an iron nail after 7 days.'
  },
  {
    id: 'fc-6',
    front: 'Controlled Variables',
    back: 'All conditions kept strictly constant and unchanged throughout all trials to avoid influencing the outcome.',
    category: 'Fair Testing',
    hint: 'Everything that must stay the same',
    example: 'Keeping the same temperature, nail brand, and container size.'
  },
  {
    id: 'fc-7',
    front: 'Quantitative Data',
    back: 'Data expressed in exact numerical values and measurable units (e.g., 45.2 g, 100 °C, 12 seconds).',
    category: 'Data Analysis',
    hint: 'Quantity = numbers and measurements',
    example: 'The water temperature dropped by 8 °C in 5 minutes.'
  },
  {
    id: 'fc-8',
    front: 'Qualitative Data',
    back: 'Descriptive, non-numerical observations concerning physical traits (e.g., color changes, odor, texture, bubbling).',
    category: 'Data Analysis',
    hint: 'Quality = sensory characteristics',
    example: 'The solution formed a blue gelatinous precipitate.'
  },
  {
    id: 'fc-9',
    front: 'SI Unit: Length',
    back: 'The Meter (m). Common laboratory instruments include the meter ruler and measuring tape.',
    category: 'SI Units',
    hint: 'Base unit for distance',
    example: 'Distance travelled by light in vacuum during a specific fraction of a second.'
  },
  {
    id: 'fc-10',
    front: 'SI Unit: Mass',
    back: 'The Kilogram (kg). Common laboratory instruments include the beam balance and precision digital scale.',
    category: 'SI Units',
    hint: 'Base unit for quantity of matter',
    example: '1 kg is defined using the Planck constant in modern metrology.'
  },
  {
    id: 'fc-11',
    front: 'SI Unit: Temperature',
    back: 'Kelvin (K). Converted using K = °C + 273.15. Zero Kelvin (0 K) is absolute zero.',
    category: 'SI Units',
    hint: 'Thermodynamic unit, not degrees Celsius',
    example: 'Water freezes at 273.15 K (0 °C) and boils at 373.15 K (100 °C).'
  },
  {
    id: 'fc-12',
    front: 'Scientific Attitude',
    back: 'A mindset of continuous questioning ("How do we know this?"), relying on verifiable evidence, honesty in data, and open-mindedness.',
    category: 'Philosophy',
    hint: 'The core takeaway of Chapter 1',
    example: 'Rejecting false claims online until supported by peer-reviewed evidence.'
  }
];

export const QUESTION_BANK: QuestionBankItem[] = [
  {
    id: 'qb-1',
    marks: 1,
    questionType: 'Very Short',
    question: 'From which Latin word is "Science" derived, and what does it mean?',
    answer: 'The word science originates from the Latin word "scientia", which means "knowledge".',
    keyPoints: ['Latin word: scientia', 'Meaning: knowledge']
  },
  {
    id: 'qb-2',
    marks: 2,
    questionType: 'Short Answer',
    question: 'Why was the International System of Units (SI) introduced globally?',
    answer: 'Before standardized units, people used non-uniform body measurements like cubits, spans, or footsteps, which differed from person to person. The SI system was adopted globally to provide uniform, reproducible, and universal units of measurement so scientists worldwide can communicate findings without ambiguity.',
    keyPoints: [
      'Eliminated discrepancies of non-standard body units (cubit, footstep)',
      'Ensures global uniformity and accuracy in scientific communication',
      'Allows experiments to be reproduced anywhere in the world'
    ],
    commonMistake: 'Students often forget to mention that arbitrary ancient units varied between individuals.'
  },
  {
    id: 'qb-3',
    marks: 2,
    questionType: 'Short Answer',
    question: 'Differentiate between Independent Variable and Dependent Variable with an example.',
    answer: 'The independent variable is the single factor intentionally altered or tested by the experimenter (the cause). The dependent variable is the factor being measured or observed that changes in response to the independent variable (the effect).\nExample: When studying plant growth under different amounts of light, the amount of light exposure is the independent variable, and the height of the plant is the dependent variable.',
    keyPoints: [
      'Independent variable = deliberately manipulated factor (cause)',
      'Dependent variable = measured response or outcome (effect)',
      'Includes clear Class 8 experimental example'
    ]
  },
  {
    id: 'qb-4',
    marks: 3,
    questionType: 'Short Answer',
    question: 'List the four fundamental physical quantities highlighted in Chapter 1 with their SI units and common measuring instruments.',
    answer: 'The four fundamental quantities are:\n1. Length — Standard SI Unit: Meter (m) — Instrument: Scale / Measuring Tape\n2. Mass — Standard SI Unit: Kilogram (kg) — Instrument: Beam Balance / Digital Scale\n3. Time — Standard SI Unit: Second (s) — Instrument: Clock / Stopwatch\n4. Temperature — Standard SI Unit: Kelvin (K) — Instrument: Laboratory Thermometer',
    keyPoints: [
      'Length (Meter, m)',
      'Mass (Kilogram, kg)',
      'Time (Second, s)',
      'Temperature (Kelvin, K) with correct instruments'
    ],
    commonMistake: 'Writing Celsius (°C) as the SI unit of temperature instead of Kelvin (K).'
  },
  {
    id: 'qb-5',
    marks: 5,
    questionType: 'Long Answer',
    question: 'Describe the complete step-by-step Scientific Method using the rusting of an iron nail as a case study.',
    answer: 'The investigation of rusting follows the 6-step scientific framework:\n\n1. Observation: Iron objects left outside in damp rainy weather develop a reddish-brown crust over time.\n2. Asking a Question: "What conditions cause iron to rust, and is both air and water required?"\n3. Formulating a Hypothesis: "Iron rusts only when both oxygen and liquid water (moisture) are simultaneously present."\n4. Experimentation (Fair Test): Set up three test tubes:\n   - Tube A (Dry air): Iron nail with anhydrous calcium chloride to absorb moisture.\n   - Tube B (Water without air): Iron nail in boiled distilled water sealed with an oil layer on top.\n   - Tube C (Air + Water): Iron nail in tap water open to the air.\n   All nails, temperatures, and durations are controlled variables.\n5. Data Collection: After 7 days, inspect each nail (qualitative) and record mass increase due to rust (quantitative). Rust appears only in Tube C.\n6. Analysis & Conclusion: Because rust formed only when both oxygen and water were present, the hypothesis is supported and confirmed.',
    keyPoints: [
      'Detailed all 6 steps: Observation, Question, Hypothesis, Experiment, Data, Conclusion',
      'Identified controlled test tubes (Dry air, Boiled water + oil, Tap water + air)',
      'Distinguished qualitative and quantitative data collection'
    ]
  },
  {
    id: 'qb-6',
    marks: 3,
    questionType: 'HOTS / Practical Based',
    question: 'Riya measured her classroom temperature as 30 °C. Convert this value into Kelvin. Also explain why Kelvin cannot have negative values in standard physics.',
    answer: 'Formula: Temperature in Kelvin (K) = Temperature in Celsius (°C) + 273.15\nCalculation: 30 + 273.15 = 303.15 K.\nKelvin starts at 0 K, known as "Absolute Zero", which is the theoretical point where all molecular kinetic motion ceases completely. Because molecular energy cannot drop below zero motion, the Kelvin scale has no negative values.',
    keyPoints: [
      'Correct conversion: 303.15 K',
      'Defines 0 K as Absolute Zero where molecular motion stops',
      'Explains absence of negative temperatures on Kelvin scale'
    ]
  }
];
