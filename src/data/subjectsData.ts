import { SubjectConfig, SubjectId } from '../types';

export const ALL_SUBJECTS: SubjectConfig[] = [
  {
    id: 'science',
    name: 'Science',
    fullName: 'Class 8 Science (Curiosity Textbook)',
    textbook: 'NCERT / CBSE Curiosity Textbook',
    icon: '🔬',
    themeGradient: 'from-blue-700 via-indigo-700 to-sky-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Explore the natural world through experiments, the scientific method, cell biology, forces, electricity, and the environment.',
    totalChapters: 12,
    liveChaptersCount: 1,
    chapters: [
      {
        id: 1,
        chapterNumber: 'Chapter 1',
        title: 'Exploring the Investigative World of Science',
        status: 'available',
        unitsCount: 4,
        tagline: 'Scientific inquiry, 6-step method, variables, and SI measurement units.',
        subtopics: ['Origin of Science (Scientia)', 'The 6-Step Scientific Method', 'Fair Testing & Variable Controls', 'SI Standard Units & Instruments', 'Iron Rusting Investigation']
      },
      {
        id: 2,
        chapterNumber: 'Chapter 2',
        title: 'Cell — Structure and Functions',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'The structural and functional unit of life: plant vs animal cells and organelles.',
        subtopics: ['Discovery of Cell (Robert Hooke)', 'Plant Cell vs Animal Cell', 'Nucleus, Cytoplasm & Cell Membrane', 'Plastids & Vacuoles']
      },
      {
        id: 3,
        chapterNumber: 'Chapter 3',
        title: 'Microorganisms: Friend and Foe',
        status: 'upcoming',
        unitsCount: 6,
        tagline: 'Bacteria, fungi, protozoa, viruses: beneficial uses, food preservation, and diseases.',
        subtopics: ['Major Microbe Groups', 'Fermentation & Antibiotics', 'Food Preservation Methods', 'Nitrogen Cycle & Nitrogen Fixation']
      },
      {
        id: 4,
        chapterNumber: 'Chapter 4',
        title: 'Combustion and Flame',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'What makes things burn, fuel efficiency, calorific value, and flame zones.',
        subtopics: ['Conditions for Combustion', 'Ignition Temperature & Fire Extinguishers', 'Zones of a Candle Flame', 'Calorific Values of Fuels']
      },
      {
        id: 5,
        chapterNumber: 'Chapter 5',
        title: 'Conservation of Plants and Animals',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Deforestation, biodiversity conservation, biosphere reserves, Red Data Book.',
        subtopics: ['Consequences of Deforestation', 'Sanctuaries, National Parks, Biosphere Reserves', 'Endangered & Endemic Species', 'Reforestation & Project Tiger']
      },
      {
        id: 6,
        chapterNumber: 'Chapter 6',
        title: 'Reproduction in Animals',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Modes of reproduction, asexual fission and budding, sexual fertilization.',
        subtopics: ['Sexual vs Asexual Reproduction', 'Male & Female Reproductive Organs', 'Fertilization (Internal vs External)', 'Metamorphosis in Frogs']
      },
      {
        id: 7,
        chapterNumber: 'Chapter 7',
        title: 'Reaching the Age of Adolescence',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Puberty changes, hormones, endocrine glands, and nutritional health.',
        subtopics: ['Changes at Puberty & Growth Spurt', 'Endocrine Glands & Hormones (Pituitary, Thyroid, Adrenal)', 'Sex Determination in Humans', 'Reproductive Health & Hygiene']
      },
      {
        id: 8,
        chapterNumber: 'Chapter 8',
        title: 'Force and Pressure',
        status: 'upcoming',
        unitsCount: 6,
        tagline: 'Contact & non-contact forces, atmospheric pressure, and pressure in liquids.',
        subtopics: ['Push, Pull, and State of Motion', 'Contact vs Non-Contact Forces', 'Pressure = Force / Area', 'Atmospheric & Liquid Pressure']
      },
      {
        id: 9,
        chapterNumber: 'Chapter 9',
        title: 'Friction',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Causes of friction, static vs sliding vs rolling friction, and fluid drag.',
        subtopics: ['Factors Affecting Friction', 'Friction: A Necessary Evil', 'Increasing & Reducing Friction (Lubricants)', 'Fluid Friction & Streamlined Shapes']
      },
      {
        id: 10,
        chapterNumber: 'Chapter 10',
        title: 'Sound',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Vibrations, human voice box (larynx), propagation medium, frequency, amplitude.',
        subtopics: ['Sound Produced by Vibrating Bodies', 'Human Ear Anatomy & Hearing Mechanism', 'Amplitude, Time Period & Pitch (Frequency)', 'Noise Pollution & Control']
      },
      {
        id: 11,
        chapterNumber: 'Chapter 11',
        title: 'Chemical Effects of Electric Current',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Conductors and insulators in liquids, electrolysis, and electroplating.',
        subtopics: ['Electrical Conductivity in Liquids', 'Chemical Effects & Gas Bubbles', 'Electroplating Applications', 'Circuit Testers with LED']
      },
      {
        id: 12,
        chapterNumber: 'Chapter 12',
        title: 'Some Natural Phenomena & Light',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Lightning, electroscopes, earthquakes, reflection laws, and human eye optics.',
        subtopics: ['Static Charges & Lightning Rods', 'Earthquake Richter Scale & Safety', 'Laws of Reflection & Regular/Diffused Reflection', 'Human Eye Structure & Vision Care']
      }
    ]
  },
  {
    id: 'math',
    name: 'Mathematics',
    fullName: 'Class 8 Mathematics (NCERT)',
    textbook: 'NCERT Class 8 Mathematics',
    icon: '📐',
    themeGradient: 'from-amber-600 via-orange-600 to-rose-600',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Master rational numbers, linear algebra, geometry, surface areas and volumes, and graph analysis with step-by-step methods.',
    totalChapters: 13,
    liveChaptersCount: 0,
    chapters: [
      {
        id: 1,
        chapterNumber: 'Chapter 1',
        title: 'Rational Numbers',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Properties of closure, commutativity, associativity, additive & multiplicative inverse.',
        subtopics: ['Closure, Commutative, Associative Properties', 'Role of Zero and One', 'Distributivity of Multiplication over Addition', 'Representation on Number Line'],
        samplePreview: {
          overview: 'Rational numbers are numbers that can be written in the form p/q where p and q are integers and q ≠ 0.',
          keyFormulasOrConcepts: [
            'Standard Form: p/q where HCF(p,q) = 1 and q > 0',
            'Additive Inverse of a/b is -a/b (Sum = 0)',
            'Multiplicative Inverse (Reciprocal) of a/b is b/a (Product = 1)',
            'Distributive Property: a × (b + c) = (a × b) + (a × c)'
          ],
          quickMindmapIdea: 'Properties of Rational Numbers → Closure → Commutative → Associative → Distributive'
        }
      },
      {
        id: 2,
        chapterNumber: 'Chapter 2',
        title: 'Linear Equations in One Variable',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Solving algebraic equations with variables on one and both sides, and real-world word problems.',
        subtopics: ['Solving Simple Linear Equations', 'Equations with Variables on Both Sides', 'Word Problems on Ages, Numbers & Perimeter', 'Reducing Equations to Simpler Form']
      },
      {
        id: 3,
        chapterNumber: 'Chapter 3',
        title: 'Understanding Quadrilaterals',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Convex vs concave polygons, angle sum property, parallelograms, rhombuses, rectangles.',
        subtopics: ['Polygon Classification', 'Angle Sum Property: (n - 2) × 180°', 'Sum of Exterior Angles = 360°', 'Special Parallelograms (Rhombus, Rectangle, Square, Kite)']
      },
      {
        id: 4,
        chapterNumber: 'Chapter 4',
        title: 'Data Handling',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Organizing data, frequency distribution tables, histograms, pie charts, probability.',
        subtopics: ['Frequency Distribution Tables', 'Constructing & Interpreting Histograms', 'Circle Graphs (Pie Charts)', 'Probability of Equally Likely Outcomes']
      },
      {
        id: 5,
        chapterNumber: 'Chapter 5',
        title: 'Squares and Square Roots',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Properties of perfect squares, prime factorisation, long division method for square roots.',
        subtopics: ['Properties of Square Numbers', 'Pythagorean Triplets', 'Square Root via Prime Factorisation', 'Long Division Method for Decimals & Integers']
      },
      {
        id: 6,
        chapterNumber: 'Chapter 6',
        title: 'Cubes and Cube Roots',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Cube numbers, prime factorisation method for cube roots, estimation techniques.',
        subtopics: ['Patterns in Cube Numbers', 'Finding Cube Root by Prime Factorisation', 'Cube Roots of Negative Integers']
      },
      {
        id: 7,
        chapterNumber: 'Chapter 7',
        title: 'Comparing Quantities',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Ratios, percentages, profit and loss, discount, sales tax, compound interest formula.',
        subtopics: ['Ratio and Percentage Conversion', 'Discount, Profit and Loss Percentage', 'Value Added Tax (VAT) & GST', 'Compound Interest Formula: A = P(1 + r/100)ⁿ']
      },
      {
        id: 8,
        chapterNumber: 'Chapter 8',
        title: 'Algebraic Expressions and Identities',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Monomials, binomials, polynomials, multiplication of expressions, 4 standard algebraic identities.',
        subtopics: ['Like and Unlike Terms', 'Multiplication of Polynomials', 'Identity I: (a + b)² = a² + 2ab + b²', 'Identity II: (a - b)² = a² - 2ab + b²', 'Identity III: (a + b)(a - b) = a² - b²']
      },
      {
        id: 9,
        chapterNumber: 'Chapter 9',
        title: 'Mensuration',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Perimeter and area of trapeziums, general quadrilaterals; surface area and volume of cuboids, cylinders.',
        subtopics: ['Area of Trapezium = ½(a + b)h', 'Area of Rhombus & General Polygon', 'Surface Area of Cube, Cuboid & Cylinder', 'Volume and Capacity of 3D Solids']
      },
      {
        id: 10,
        chapterNumber: 'Chapter 10',
        title: 'Exponents and Powers',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Powers with negative exponents, laws of exponents, scientific notation standard form.',
        subtopics: ['Laws of Exponents (aᵐ × aⁿ = aᵐ⁺ⁿ, etc.)', 'Negative Exponents: a⁻ᵐ = 1/aᵐ', 'Expressing Very Small Numbers in Standard Form', 'Comparing Large and Small Quantities']
      },
      {
        id: 11,
        chapterNumber: 'Chapter 11',
        title: 'Direct and Inverse Proportions',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Understanding x/y = k (direct variation) and x · y = k (inverse variation) with practical applications.',
        subtopics: ['Identifying Direct Proportion', 'Solving Unitary & Ratio Problems', 'Identifying Inverse Proportion (Speed & Time, Workers & Days)']
      },
      {
        id: 12,
        chapterNumber: 'Chapter 12',
        title: 'Factorisation',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Method of common factors, regrouping terms, factorisation using identities, dividing polynomials.',
        subtopics: ['Common Factor Method', 'Factorisation by Regrouping', 'Splitting Middle Term Method', 'Division of Monomials and Polynomials']
      },
      {
        id: 13,
        chapterNumber: 'Chapter 13',
        title: 'Introduction to Graphs',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Bar graphs, line graphs, Cartesian coordinates (x, y), linear graphs and dependent variables.',
        subtopics: ['Line Graphs & Continuous Change', 'Cartesian Coordinates (Abscissa & Ordinate)', 'Plotting Points on Graph Paper', 'Linear Graphs & Applications']
      }
    ]
  },
  {
    id: 'sst',
    name: 'Social Science',
    fullName: 'Class 8 Social Science (History, Geography, Civics)',
    textbook: 'NCERT (Our Pasts III, Resources & Development, Social & Political Life III)',
    icon: '🌍',
    themeGradient: 'from-emerald-700 via-teal-700 to-cyan-700',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Explore the 1857 Revolt, Indian National Movement, Earth resources, Indian Constitution, secularism, and parliament.',
    totalChapters: 15,
    liveChaptersCount: 0,
    chapters: [
      {
        id: 1,
        chapterNumber: 'History Ch. 1',
        title: 'How, When and Where & Trade to Territory',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Colonial records, Battle of Plassey (1757), Battle of Buxar, Doctrine of Lapse.',
        subtopics: ['Importance of Dates and Historical Records', 'East India Company Expansion in India', 'Battle of Plassey & Robert Clive', 'Subsidiary Alliance & Doctrine of Lapse']
      },
      {
        id: 2,
        chapterNumber: 'History Ch. 2',
        title: 'Ruling the Countryside & 1857 Revolt',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Permanent Settlement, Indigo Rebellion, Mangal Pandey, Revolt of 1857 centers.',
        subtopics: ['Revenue Systems: Permanent, Mahalwari, Ryotwari', 'The Blue Rebellion (Indigo Revolt)', 'Causes of 1857 Revolt (Greased Cartridges)', 'Bahadur Shah Zafar & Rani Lakshmibai']
      },
      {
        id: 3,
        chapterNumber: 'History Ch. 3',
        title: 'Women, Caste and Reform & National Movement',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Raja Ram Mohan Roy, Jyotirao Phule, B.R. Ambedkar, Mahatma Gandhi and Freedom.',
        subtopics: ['Abolition of Sati & Widow Remarriage', 'Caste Reforms (Satyashodhak Samaj)', 'Non-Cooperation & Civil Disobedience Movement', 'Quit India Movement (1942) & Independence']
      },
      {
        id: 4,
        chapterNumber: 'Geography Ch. 1',
        title: 'Resources: Types & Sustainable Development',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Natural, human-made, human resources; conservation and sustainable development.',
        subtopics: ['Natural vs Human-Made Resources', 'Renewable vs Non-Renewable Resources', 'Resource Conservation Principles', 'Sustainable Development Goals']
      },
      {
        id: 5,
        chapterNumber: 'Geography Ch. 2',
        title: 'Land, Soil, Water, Natural Vegetation & Wildlife',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Soil profile, weathering, soil conservation (mulching, terrace farming), rain harvesting.',
        subtopics: ['Land Use Patterns & Degradation', 'Soil Formation & Soil Erosion Prevention', 'Water Scarcity & Rainwater Harvesting', 'Biosphere & Wildlife Protection']
      },
      {
        id: 6,
        chapterNumber: 'Geography Ch. 3',
        title: 'Agriculture & Industries',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Subsistence vs commercial farming, major crops, iron and steel, IT industry hubs.',
        subtopics: ['Farming Systems (Inputs, Outputs, Processes)', 'Major Food & Fiber Crops (Rice, Wheat, Cotton, Jute)', 'Classification of Industries (Raw Material, Size, Ownership)', 'Industrial Hubs: Silicon Valley vs Bangalore']
      },
      {
        id: 7,
        chapterNumber: 'Civics Ch. 1',
        title: 'The Indian Constitution & Secularism',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Preamble, Fundamental Rights, Separation of Powers, Parliamentary Democracy.',
        subtopics: ['Why Does a Country Need a Constitution?', 'Key Features of Indian Constitution', '6 Fundamental Rights & Directive Principles', 'Understanding Secularism in India']
      },
      {
        id: 8,
        chapterNumber: 'Civics Ch. 2',
        title: 'Parliament and the Making of Laws',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Role of citizens, Lok Sabha, Rajya Sabha, President, how a bill becomes law.',
        subtopics: ['Why Should People Decide?', 'Composition of Lok Sabha and Rajya Sabha', 'How Do New Laws Come About? (Domestic Violence Act)', 'Unpopular and Controversial Laws']
      },
      {
        id: 9,
        chapterNumber: 'Civics Ch. 3',
        title: 'Judiciary & Understanding Marginalisation',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Supreme Court, High Courts, Rule of Law, Public Interest Litigation (PIL), Adivasis & Minorities.',
        subtopics: ['Independent Judiciary & Structure of Courts', 'Criminal vs Civil Law Systems', 'What is Public Interest Litigation (PIL)?', 'Marginalisation of Adivasis, Dalits, Minorities']
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    fullName: 'Class 8 English (Honeydew & It So Happened)',
    textbook: 'NCERT Honeydew & It So Happened',
    icon: '📚',
    themeGradient: 'from-violet-700 via-purple-700 to-indigo-700',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Literature summaries, poetic devices, character analysis, reading comprehension, grammar, and formal letter writing.',
    totalChapters: 14,
    liveChaptersCount: 0,
    chapters: [
      {
        id: 1,
        chapterNumber: 'Honeydew Ch. 1',
        title: 'The Best Christmas Present in the World',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Michael Morpurgo story: Christmas truce 1914 between British and German soldiers.',
        subtopics: ['Story Summary & Character Sketches', 'World War I Christmas Truce', 'Theme of Peace and Humanity', 'Reading Comprehension & Vocabulary']
      },
      {
        id: 2,
        chapterNumber: 'Poem 1',
        title: 'The Ant and the Cricket',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Aesop fable poem on hard work, foresight, and preparing for hardships.',
        subtopics: ['Poetic Devices (Rhyme Scheme, Personification)', 'Moral Analysis & Work Ethic', 'Stanza-by-Stanza Explanation']
      },
      {
        id: 3,
        chapterNumber: 'Honeydew Ch. 2',
        title: 'The Tsunami & Geography Lesson',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Real heroic survival accounts from the 2004 Indian Ocean Tsunami, Tilly Smith story.',
        subtopics: ['2004 Tsunami Survival Accounts', 'Animal Instincts & Early Warning Signs', 'Geography Lesson: Earth from Above Theme']
      },
      {
        id: 4,
        chapterNumber: 'Honeydew Ch. 3',
        title: 'Glimpses of the Past',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Comic strip history of India under British rule (1757 to 1857 Revolt).',
        subtopics: ['Social Evils of 18th Century', 'Raja Ram Mohan Roy Role', 'Oppression & Discontent', 'The 1857 Spark of Freedom']
      },
      {
        id: 5,
        chapterNumber: 'Grammar Unit 1',
        title: 'Class 8 Applied Grammar & Writing Skills',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'Active/Passive Voice, Direct/Indirect Speech, Modals, Formal Letters, Diary Entries.',
        subtopics: ['Active to Passive Voice Transformation Rules', 'Reported Speech (Tense & Pronoun Changes)', 'Formal Letter Format (To Editor, Principal)', 'Diary Entry & Notice Writing']
      }
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi',
    fullName: 'Class 8 हिंदी (वसंत भाग 3 एवं भारत की खोज)',
    textbook: 'NCERT वसंत भाग 3 / भारत की खोज',
    icon: '✍️',
    themeGradient: 'from-rose-600 via-red-600 to-amber-600',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    description: 'कविताओं का भावार्थ, गद्य पाठों का सारांश, चरित्र चित्रण, प्रश्नोत्तर एवं संपूर्ण हिंदी व्याकरण।',
    totalChapters: 12,
    liveChaptersCount: 0,
    chapters: [
      {
        id: 1,
        chapterNumber: 'पाठ 1',
        title: 'ध्वनि (सूर्यकांत त्रिपाठी "निराला")',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'युवा पीढ़ी में उत्साह और नवजीवन का संचार करने वाली प्रेरणादायक कविता।',
        subtopics: ['कविता का सरल भावार्थ', 'कवि परिचय एवं उद्देश्य', 'कठिन शब्दों के अर्थ एवं मुहावरे', 'महत्वपूर्ण प्रश्नोत्तर']
      },
      {
        id: 2,
        chapterNumber: 'पाठ 2',
        title: 'लाख की चूड़ियाँ (कामतानाथ)',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'मशीनी युग के कारण हाथ के कारीगरों (बदलू काका) की व्यथा का मार्मिक चित्रण।',
        subtopics: ['कहानी का सार', 'बदलू का चरित्र चित्रण', 'मशीनी युग और बेरोजगारी समस्या', 'पाठ्यपुस्तक के प्रश्न-उत्तर']
      },
      {
        id: 3,
        chapterNumber: 'पाठ 3',
        title: 'बस की यात्रा (हरिशंकर परसाई)',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'पुरानी और जर्जर बस की यात्रा पर लिखा गया हास्य-व्यंग्य निबंध।',
        subtopics: ['व्यंग्य की समझ एवं हास्य प्रसंग', 'परिवहन व्यवस्था पर कटाक्ष', 'व्याकरण एवं भाषा की बात']
      },
      {
        id: 4,
        chapterNumber: 'पाठ 4',
        title: 'दीवानों की हस्ती (भगवतीचरण वर्मा)',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'देश पर मर-मिटने वाले मतवाले वीरों का उल्लास और बलिदान।',
        subtopics: ['कविता का भावार्थ एवं रस', 'वीरों का जीवन दर्शन', 'परीक्षा उपयोगी प्रश्न']
      },
      {
        id: 5,
        chapterNumber: 'हिंदी व्याकरण',
        title: 'कक्षा 8 संपूर्ण हिंदी व्याकरण',
        status: 'upcoming',
        unitsCount: 5,
        tagline: 'संधि, समास, उपसर्ग-प्रत्यय, मुहावरे, पत्र-लेखन एवं अनुच्छेद लेखन।',
        subtopics: ['स्वर संधि एवं व्यंजन संधि के नियम', 'समास के छह भेद व उदाहरण', 'उपसर्ग एवं प्रत्यय पहचानना', 'मुहावरे एवं लोकोक्तियाँ']
      }
    ]
  },
  {
    id: 'computer',
    name: 'Computer & AI',
    fullName: 'Class 8 Computer Science & Artificial Intelligence',
    textbook: 'NCERT / CBSE Middle School Skill Curriculum',
    icon: '💻',
    themeGradient: 'from-cyan-700 via-blue-700 to-indigo-800',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    description: 'Introduction to Python coding, algorithms, flowcharts, cyber safety, web fundamentals (HTML/CSS), and AI basics.',
    totalChapters: 6,
    liveChaptersCount: 0,
    chapters: [
      {
        id: 1,
        chapterNumber: 'Unit 1',
        title: 'Introduction to Python Programming',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'Variables, data types (int, float, str), print(), input(), and conditional if-else statements.',
        subtopics: ['What is Python & IDLE Setup', 'Variables and Data Types', 'Taking Input & Type Casting', 'Conditional Logic (if, elif, else)']
      },
      {
        id: 2,
        chapterNumber: 'Unit 2',
        title: 'Algorithms & Flowcharts',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Problem-solving steps, standard flowchart symbols (terminals, input/output, decisions).',
        subtopics: ['Writing Step-by-Step Algorithms', 'Flowchart Symbols & Rules', 'Looping & Decision Flowcharts']
      },
      {
        id: 3,
        chapterNumber: 'Unit 3',
        title: 'Cyber Safety, Security & Digital Ethics',
        status: 'upcoming',
        unitsCount: 3,
        tagline: 'Safe online browsing, strong passwords, phishing prevention, digital footprints, cyberbullying.',
        subtopics: ['Protecting Personal Information Online', 'Recognizing Phishing & Scams', 'Digital Footprint & Netiquette', 'Cyber Laws & Reporting Helpline']
      },
      {
        id: 4,
        chapterNumber: 'Unit 4',
        title: 'Artificial Intelligence & Machine Learning Basics',
        status: 'upcoming',
        unitsCount: 4,
        tagline: 'What is AI, rule-based vs learning systems, computer vision, natural language processing, ethics of AI.',
        subtopics: ['Human Intelligence vs Artificial Intelligence', 'Three Domains of AI: Data, CV, NLP', 'Smart Homes & Voice Assistants', 'AI Ethics and Bias']
      }
    ]
  }
];
