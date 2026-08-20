// Original, hand-authored content for M-Tech Computers courses that have
// NO corresponding page on caddeskindia.com (verified against their complete
// course sitemap — see scratch/gen_course_details.js for the scraped set).
// Not copied from any source; written to match the same depth as the
// caddesk-sourced entries in courseDetails.ts. A null/omitted syllabus means
// the course already has a good hand-authored syllabus elsewhere (in
// detailedSyllabusMapping inside src/app/courses/[id]/page.tsx) and only the
// overview/highlights needed filling in.
// Regenerate via scratch/gen_course_details_original.js.

import type { CourseDetailEntry } from './courseDetails';

export const courseDetailsOriginal: Record<string, Omit<CourseDetailEntry, 'syllabus'> & { syllabus: CourseDetailEntry['syllabus'] }> = {
  "safe-safety": {
    "overview": "Workplace and industrial safety training prepares professionals to identify, assess, and control hazards on construction sites, factories, and process plants. The course covers occupational health and safety regulations, personal protective equipment (PPE) selection, permit-to-work systems, and incident investigation techniques used across manufacturing and infrastructure industries.\n\nStudents learn to apply safety management frameworks such as HIRA (Hazard Identification and Risk Assessment), JSA (Job Safety Analysis), and emergency response planning, along with the documentation and audit practices that regulatory bodies expect from certified safety officers. M-Tech Computers' classroom training combines these concepts with real site case studies so learners are ready for safety officer and EHS (Environment, Health & Safety) roles from day one.",
    "highlights": [
      "Hazard Identification & Risk Assessment (HIRA)",
      "PPE Selection & Permit-to-Work Systems",
      "Incident Investigation & Root Cause Analysis",
      "Emergency Response Planning",
      "EHS Compliance & Audit Documentation"
    ],
    "syllabus": [
      {
        "title": "Introduction to Occupational Safety",
        "points": [
          "Overview of workplace safety principles",
          "Indian and international safety regulations (OSHA, Factories Act)",
          "Roles and responsibilities of a safety officer",
          "Safety culture and behavior-based safety"
        ]
      },
      {
        "title": "Hazard Identification & Risk Assessment",
        "points": [
          "HIRA methodology and risk matrices",
          "Job Safety Analysis (JSA)",
          "Hazard control hierarchy",
          "Fire, electrical, and chemical hazard assessment"
        ]
      },
      {
        "title": "PPE & Site Safety Systems",
        "points": [
          "Selection and use of personal protective equipment",
          "Permit-to-work systems (hot work, confined space, working at height)",
          "Scaffolding and lifting safety",
          "Machine guarding and lockout-tagout (LOTO)"
        ]
      },
      {
        "title": "Incident Management",
        "points": [
          "Accident reporting and investigation techniques",
          "Root cause analysis methods",
          "Near-miss reporting systems",
          "Corrective and preventive action (CAPA) planning"
        ]
      },
      {
        "title": "Emergency Preparedness & Compliance",
        "points": [
          "Emergency response and evacuation planning",
          "Fire safety and firefighting equipment",
          "Safety audits and compliance documentation",
          "ISO 45001 occupational health & safety basics"
        ]
      }
    ]
  },
  "rcdc-detailing": {
    "overview": "RCDC (Reinforced Concrete Design & Detailing) is an advanced structural engineering software developed by CSI (Computers & Structures India) for the design, analysis, and detailing of reinforced concrete structures. It automates the process of creating structural drawings, design calculations, and 3D reinforcement models in compliance with international codes and standards.\n\nRCDC is widely used in civil and structural engineering industries for residential, commercial, and industrial building projects, enabling engineers to accelerate the design process, reduce errors, and produce construction-ready drawings. It integrates with BIM workflows and other design software, ensuring coordination between structural models, architectural plans, and MEP systems.\n\nWhy learn RCDC? It speeds up structural design and detailing workflows, ensures accuracy and compliance with design codes, reduces manual errors in reinforcement detailing, and prepares learners for careers in structural engineering, consultancy, and construction documentation. M-Tech Computers classroom training uses real RCC projects so students can produce shop drawings, bar bending schedules, and 3D reinforcement models ready for construction.",
    "highlights": [
      "Automated RCC Design for Beams, Columns, Slabs & Foundations",
      "3D Reinforcement Modeling & Rebar Layouts",
      "IS, ACI & Eurocode Compliant Design",
      "Shop Drawings & Bar Bending Schedule (BBS)",
      "BIM & CAD Integration (Revit, AutoCAD)"
    ],
    "syllabus": [
      {
        "title": "Introduction to RCDC",
        "points": [
          "RCDC interface and workflow for RCC design and detailing",
          "Project setup, grids, and design parameters",
          "Why RCDC is used in civil and structural engineering",
          "Overview of automated design vs manual detailing"
        ]
      },
      {
        "title": "Design & Innovation Features",
        "points": [
          "Automated reinforced concrete design for beams, columns, slabs, and foundations",
          "3D reinforcement modeling and accurate rebar layouts",
          "Code compliance with IS, ACI, Eurocode, and other international standards",
          "Automatic shop drawings, bar bending schedules, and fabrication details"
        ]
      },
      {
        "title": "Structural Design & Analysis",
        "points": [
          "Design beams, columns, slabs, foundations, and shear walls",
          "Structural analysis and load calculations",
          "Reviewing and editing auto-generated RCC designs",
          "Optimizing reinforcement layouts and material usage"
        ]
      },
      {
        "title": "Reinforcement Detailing",
        "points": [
          "Generate 3D reinforcement models for visualization and fabrication",
          "Beam detailing and column reinforcement",
          "Slab and footing detailing",
          "Create shop drawings, bar bending schedules, and construction-ready details"
        ]
      },
      {
        "title": "BIM, CAD Integration & Industry Applications",
        "points": [
          "Integrate RCDC with Revit, AutoCAD, and other BIM tools",
          "Coordinated structural modeling with architectural and MEP drawings",
          "Residential, commercial, and industrial building applications",
          "Construction documentation for structural consultancy and civil engineering firms"
        ]
      },
      {
        "title": "Learning Outcomes",
        "points": [
          "Perform automated design of beams, columns, slabs, and foundations as per relevant codes",
          "Produce detailed shop drawings and bar bending schedules automatically",
          "Ensure code compliance with IS, ACI, Eurocode, and other international standards",
          "Prepare construction-ready documentation with professional skills for structural engineering careers"
        ]
      }
    ]
  },
  "tekla-structures": {
    "overview": "Tekla Structures is a leading BIM software used for detailed 3D modeling of steel and precast concrete structures. Structural engineers, detailers, and fabricators use it to create accurate, information-rich models that carry through from design and detailing to fabrication and erection, minimizing clashes and rework on site.\n\nThe course covers steel connection modeling, precast concrete detailing, rebar detailing, and the generation of fabrication-ready shop drawings, GA drawings, and material lists. M-Tech Computers' classroom training emphasizes real project workflows including multi-discipline model collaboration and clash detection, preparing students for detailing and BIM coordinator roles in structural steel and precast industries.",
    "highlights": [
      "Steel Connection Modeling & Detailing",
      "Precast Concrete Detailing",
      "Automated Shop & GA Drawing Generation",
      "Clash Detection & Multi-Discipline Collaboration",
      "Bill of Materials & Fabrication Reports"
    ],
    "syllabus": [
      {
        "title": "Introduction to Tekla Structures",
        "points": [
          "Interface overview and model navigation",
          "Setting up a new project and grids",
          "Understanding the Tekla database and object properties",
          "Working with reference models (IFC, DWG)"
        ]
      },
      {
        "title": "Steel Structure Modeling",
        "points": [
          "Modeling beams, columns, and steel members",
          "Standard and custom connection design",
          "Bolted and welded connection detailing",
          "Applying steel grades and profiles"
        ]
      },
      {
        "title": "Precast Concrete Detailing",
        "points": [
          "Precast panel and beam modeling",
          "Rebar and mesh detailing in precast elements",
          "Embeds, lifting anchors, and connections",
          "Precast casting and assembly drawings"
        ]
      },
      {
        "title": "Drawing & Documentation",
        "points": [
          "Creating GA and single-part shop drawings",
          "Assembly and cast unit drawings",
          "Bill of materials and numbering",
          "Drawing templates and customization"
        ]
      },
      {
        "title": "Model Collaboration",
        "points": [
          "Clash detection and model checking",
          "Multi-user model sharing",
          "Exporting to IFC and other formats",
          "Project workflow from detailing to fabrication"
        ]
      }
    ]
  },
  "photoshop-graphics": {
    "overview": "Adobe Photoshop is the industry-standard raster image editing software used by architects, interior designers, and visualizers to enhance renders, create presentation boards, and produce marketing graphics. Its layer-based editing, masking, and compositing tools make it essential for post-processing 3D renders from software like V-Ray, Lumion, and 3ds Max.\n\nThe course covers photo editing fundamentals, layer and mask-based compositing, color correction, and architectural render post-processing techniques such as adding entourage, skies, reflections, and lighting effects. M-Tech Computers' classroom training also covers digital poster and presentation sheet design so students can produce polished, client-ready visual output for design portfolios.",
    "highlights": [
      "Layer-Based Editing & Masking",
      "Architectural Render Post-Processing",
      "Color Correction & Photo Retouching",
      "Entourage, Sky & Reflection Compositing",
      "Presentation Sheet & Poster Design"
    ],
    "syllabus": [
      {
        "title": "Photoshop Fundamentals",
        "points": [
          "Interface, workspace, and tool overview",
          "Layers, layer styles, and blending modes",
          "Selection tools and masking techniques",
          "Working with the healing and clone tools"
        ]
      },
      {
        "title": "Color & Tonal Adjustments",
        "points": [
          "Levels, curves, and color balance",
          "Hue/saturation and selective color",
          "Photo retouching and restoration",
          "Camera raw filter basics"
        ]
      },
      {
        "title": "Render Post-Processing",
        "points": [
          "Enhancing 3D render output (V-Ray/Lumion)",
          "Adding skies, reflections, and lighting effects",
          "Compositing entourage — people, trees, cars",
          "Depth of field and atmospheric effects"
        ]
      },
      {
        "title": "Compositing & Effects",
        "points": [
          "Creating photomontages and collages",
          "Working with smart objects and filters",
          "Text and typography for presentations",
          "Exporting for print and digital use"
        ]
      },
      {
        "title": "Presentation & Portfolio Design",
        "points": [
          "Designing architectural presentation sheets",
          "Creating digital posters and mood boards",
          "Building a design portfolio layout",
          "Batch processing and automation basics"
        ]
      }
    ]
  },
  "billing-bec": {
    "overview": "Billing and Estimation for civil engineering and construction (BE&C) covers the processes contractors and consultants use to measure quantities, prepare cost estimates, and raise running account (RA) bills for construction projects. Accurate billing is critical to project cash flow and contractual compliance in the construction industry.\n\nThe course covers quantity surveying from drawings, rate analysis, preparation of Bill of Quantities (BOQ), running bills, and final bill certification, along with contract billing terms, retention, and variation/change order management. M-Tech Computers' training uses real project drawings and BOQ formats so students can independently prepare and verify construction bills used by contractors, PMC firms, and consultants.",
    "highlights": [
      "Quantity Surveying from Drawings",
      "Bill of Quantities (BOQ) Preparation",
      "Running Account (RA) Bill Processing",
      "Rate Analysis & Cost Estimation",
      "Contract Billing & Variation Management"
    ],
    "syllabus": [
      {
        "title": "Introduction to Construction Billing",
        "points": [
          "Overview of the billing and estimation process",
          "Types of contracts (item rate, lump sum, EPC)",
          "Understanding drawings, specifications, and BOQ",
          "Units of measurement (IS 1200 standards)"
        ]
      },
      {
        "title": "Quantity Surveying",
        "points": [
          "Measuring quantities from civil drawings",
          "Earthwork, concrete, and masonry quantity take-off",
          "Reinforcement and formwork quantity calculation",
          "Finishing works measurement"
        ]
      },
      {
        "title": "Rate Analysis & Estimation",
        "points": [
          "Preparing rate analysis for civil items",
          "Material, labor, and equipment cost estimation",
          "Preparing detailed cost estimates",
          "Comparative statements and tender evaluation"
        ]
      },
      {
        "title": "Bill Preparation",
        "points": [
          "Preparing Bill of Quantities (BOQ)",
          "Running Account (RA) bill preparation",
          "Final bill and completion certificate",
          "Deductions, retention, and taxes in billing"
        ]
      },
      {
        "title": "Contract Management",
        "points": [
          "Contract billing terms and conditions",
          "Variation and change order billing",
          "Dispute resolution and claims",
          "Excel-based billing templates and tools"
        ]
      }
    ]
  },
  "nx-cad-expert": {
    "overview": "Siemens NX is a high-end CAD/CAM/CAE software used by automotive, aerospace, and industrial product design companies for advanced part modeling, assembly design, and drafting. Its synchronous technology allows engineers to edit imported geometry without needing the original feature history, making it powerful for design changes and reverse engineering.\n\nThe course covers sketching, solid and surface modeling, assembly design with top-down and bottom-up methods, sheet metal design, and detailed drafting. M-Tech Computers' classroom training also introduces NX's synchronous modeling tools and basic simulation workflows, preparing students for product design roles in automotive and industrial manufacturing companies that use NX as their primary CAD platform.",
    "highlights": [
      "Advanced Part & Assembly Modeling",
      "Synchronous Technology for Direct Editing",
      "Sheet Metal & Surface Design",
      "Top-Down & Bottom-Up Assembly Workflows",
      "Professional Drafting & Documentation"
    ],
    "syllabus": [
      {
        "title": "Introduction to NX",
        "points": [
          "NX interface, navigation, and modeling philosophy",
          "Sketching tools and constraints",
          "Datum planes, axes, and coordinate systems",
          "File management and templates"
        ]
      },
      {
        "title": "Part Modeling",
        "points": [
          "Extrude, revolve, sweep, and loft features",
          "Hole, fillet, chamfer, and shell features",
          "Pattern and mirror features",
          "Synchronous modeling and direct editing tools"
        ]
      },
      {
        "title": "Assembly Design",
        "points": [
          "Bottom-up and top-down assembly modeling",
          "Assembly constraints and mating conditions",
          "Exploded views and interference checking",
          "Assembly sequence and BOM management"
        ]
      },
      {
        "title": "Sheet Metal & Surfacing",
        "points": [
          "Sheet metal flange, bend, and cutout features",
          "Flat pattern generation",
          "Free-form surface modeling",
          "Surface analysis and continuity checks"
        ]
      },
      {
        "title": "Drafting & Documentation",
        "points": [
          "Creating standard drawing views",
          "Dimensioning and GD&T annotation",
          "Bill of materials and parts lists",
          "Drawing templates and plotting"
        ]
      }
    ]
  },
  "gdt-course": {
    "overview": "Geometric Dimensioning and Tolerancing (GD&T) is a standardized symbolic language used on engineering drawings to precisely define the allowable variation in the form, orientation, location, and size of part features, based on the ASME Y14.5 standard. It ensures parts fit and function correctly regardless of manufacturing variation, and is essential for design, quality, and manufacturing engineers.\n\nThe course covers datum reference frames, form and orientation tolerances, position tolerancing, and the practical application of GD&T on real mechanical drawings, along with tolerance stack-up analysis. M-Tech Computers' classroom training uses hands-on drawing exercises so students can confidently read, apply, and interpret GD&T callouts used across automotive, aerospace, and general manufacturing industries.",
    "highlights": [
      "ASME Y14.5 Standard Symbols & Rules",
      "Datum Reference Frame Concepts",
      "Form, Orientation & Position Tolerancing",
      "Tolerance Stack-Up Analysis",
      "Reading & Applying GD&T on Real Drawings"
    ],
    "syllabus": [
      {
        "title": "Introduction to GD&T",
        "points": [
          "Need for GD&T over conventional tolerancing",
          "ASME Y14.5 standard overview",
          "Feature control frame components",
          "Rule #1 and material condition modifiers (MMC, LMC)"
        ]
      },
      {
        "title": "Datums & Reference Frames",
        "points": [
          "Datum features and datum reference frames",
          "Primary, secondary, and tertiary datums",
          "Datum targets and datum precedence",
          "Practical datum selection examples"
        ]
      },
      {
        "title": "Form & Orientation Tolerances",
        "points": [
          "Flatness, straightness, circularity, cylindricity",
          "Perpendicularity, angularity, and parallelism",
          "Profile of a line and profile of a surface",
          "Runout and total runout"
        ]
      },
      {
        "title": "Location Tolerances",
        "points": [
          "Position tolerancing fundamentals",
          "Concentricity and symmetry",
          "Bonus tolerance calculations",
          "Composite and multiple position tolerancing"
        ]
      },
      {
        "title": "Application & Analysis",
        "points": [
          "Tolerance stack-up analysis methods",
          "Applying GD&T on real part drawings",
          "Inspection and measurement considerations",
          "GD&T in CAD software (drawing annotation)"
        ]
      }
    ]
  },
  "piping-design": {
    "overview": "Piping design training covers the end-to-end process of designing industrial piping systems for oil & gas, chemical, and power plant projects — from process and instrumentation diagrams (P&ID) to 3D routing, stress analysis, and isometric drawing preparation. It's a foundational skill for engineers working in EPC (Engineering, Procurement, Construction) companies.\n\nThe course covers piping codes and standards (ASME B31.3), P&ID interpretation, pipe routing and support design, valve and fitting selection, and an introduction to piping stress analysis. M-Tech Computers' classroom training combines these fundamentals with practical drafting exercises, preparing students for piping design and drafting roles in process plant and infrastructure projects.",
    "highlights": [
      "ASME B31.3 Piping Design Codes",
      "P&ID Reading & Interpretation",
      "Pipe Routing, Supports & Valve Selection",
      "Isometric Drawing Preparation",
      "Introduction to Piping Stress Analysis"
    ],
    "syllabus": [
      {
        "title": "Introduction to Piping Engineering",
        "points": [
          "Overview of process plant piping systems",
          "Piping codes and standards (ASME B31.3)",
          "Types of piping materials and pipe schedules",
          "Plot plan and equipment layout basics"
        ]
      },
      {
        "title": "P&ID & Line Design",
        "points": [
          "Reading and interpreting P&IDs",
          "Line numbering and line list preparation",
          "Valve types and selection criteria",
          "Instrumentation symbols on P&IDs"
        ]
      },
      {
        "title": "Piping Layout & Routing",
        "points": [
          "3D piping layout principles",
          "Pipe routing best practices and clearances",
          "Pipe supports and hangers",
          "Equipment nozzle orientation and tie-ins"
        ]
      },
      {
        "title": "Isometric Drawings",
        "points": [
          "Isometric drawing conventions",
          "Preparing piping isometric drawings",
          "Bill of Materials (BOM) from isometrics",
          "Weld and fabrication details"
        ]
      },
      {
        "title": "Stress Analysis Basics",
        "points": [
          "Introduction to piping stress analysis",
          "Thermal expansion and flexibility",
          "Support types for stress control",
          "Overview of stress analysis software (Caesar II)"
        ]
      }
    ]
  },
  "sp3d-piping": {
    "overview": "SmartPlant 3D (SP3D) is Intergraph/Hexagon's rule-driven 3D plant design software used to model piping, equipment, structures, and instrumentation in oil & gas, petrochemical, and power plant projects. As a multi-discipline platform, it allows piping, structural, and equipment teams to work on a shared intelligent model with automatic clash detection.\n\nThis course focuses on plant design workflows — equipment placement, piping specification-driven routing, structural steel modeling, and isometric extraction for construction. M-Tech Computers' classroom training prepares students for 3D plant modeler and piping designer roles in EPC companies handling refinery, chemical, and power plant projects.",
    "highlights": [
      "Rule-Driven 3D Plant Modeling",
      "Multi-Discipline Model Collaboration",
      "Specification-Driven Piping Routing",
      "Automatic Clash Detection",
      "Isometric & BOM Extraction for Construction"
    ],
    "syllabus": []
  },
  "e3d-plant": {
    "overview": "AVEVA Everything3D (E3D) is a next-generation 3D plant design software used for modeling equipment, piping, structures, and cabling in large-scale industrial and offshore projects. Its high-performance graphics engine and rule-based design tools make it one of the fastest plant design platforms used by major EPC contractors worldwide.\n\nThis course covers plant project setup, equipment and piping modeling, structural steel design, and drawing production within E3D, along with clash management across disciplines. M-Tech Computers' classroom training prepares students for 3D plant design roles in oil & gas, marine, and power industries where AVEVA E3D is the standard design platform.",
    "highlights": [
      "High-Performance 3D Plant Modeling",
      "Equipment, Piping & Structural Design",
      "Rule-Based Design Automation",
      "Multi-Discipline Clash Management",
      "Drawing Production for Construction"
    ],
    "syllabus": []
  },
  "javascript": {
    "overview": "JavaScript is the core programming language of the web, powering interactivity on virtually every modern website and enabling both front-end (browser) and back-end (Node.js) development. It's an essential skill for anyone pursuing a career in web or full-stack development.\n\nThe course takes students from JavaScript fundamentals — variables, functions, and control flow — through DOM manipulation, event handling, and asynchronous programming with promises and async/await, up to modern ES6+ syntax and API integration. M-Tech Computers' classroom training uses hands-on coding projects so students build real, interactive web applications while learning the language, preparing them for front-end and full-stack developer roles.",
    "highlights": [
      "Core JavaScript Fundamentals & ES6+ Syntax",
      "DOM Manipulation & Event Handling",
      "Asynchronous Programming (Promises, async/await)",
      "Working with APIs & JSON",
      "Real Project-Based Learning"
    ],
    "syllabus": [
      {
        "title": "JavaScript Fundamentals",
        "points": [
          "Variables, data types, and operators",
          "Functions, scope, and closures",
          "Control flow: conditionals and loops",
          "Arrays and objects"
        ]
      },
      {
        "title": "DOM & Events",
        "points": [
          "DOM selection and manipulation",
          "Event listeners and event delegation",
          "Form handling and validation",
          "Building interactive UI components"
        ]
      },
      {
        "title": "ES6+ & Modern JavaScript",
        "points": [
          "Arrow functions, destructuring, spread/rest",
          "Template literals and modules",
          "Classes and object-oriented JavaScript",
          "Array methods (map, filter, reduce)"
        ]
      },
      {
        "title": "Asynchronous JavaScript",
        "points": [
          "Callbacks and the event loop",
          "Promises and promise chaining",
          "Async/await syntax",
          "Fetch API and working with JSON"
        ]
      },
      {
        "title": "Project Development",
        "points": [
          "Building a to-do list / interactive app",
          "Consuming public APIs in a project",
          "Debugging with browser dev tools",
          "Code organization and best practices"
        ]
      }
    ]
  },
  "full-stack-web": {
    "overview": "Full stack web development covers everything needed to build a complete web application — from the front-end user interface to the back-end server, database, and deployment. Full stack developers are in high demand because they can independently build and ship end-to-end products.\n\nThe course covers HTML, CSS, and JavaScript for the front-end, a modern framework such as React for building UIs, Node.js and Express for backend APIs, and database integration with MongoDB/SQL, along with authentication and deployment basics. M-Tech Computers' classroom training is built around real project development, so students graduate having built and deployed complete web applications from scratch.",
    "highlights": [
      "Front-End: HTML, CSS, JavaScript & React",
      "Back-End: Node.js & Express REST APIs",
      "Database Integration (MongoDB / SQL)",
      "Authentication & Authorization",
      "End-to-End Project Deployment"
    ],
    "syllabus": [
      {
        "title": "Front-End Foundations",
        "points": [
          "HTML5 and CSS3 layout techniques",
          "Responsive design with Flexbox/Grid",
          "JavaScript fundamentals for the web",
          "Introduction to React components"
        ]
      },
      {
        "title": "Front-End Development with React",
        "points": [
          "Components, props, and state",
          "Hooks (useState, useEffect)",
          "React Router for multi-page apps",
          "Consuming APIs from the front-end"
        ]
      },
      {
        "title": "Back-End Development",
        "points": [
          "Node.js fundamentals",
          "Building REST APIs with Express",
          "Middleware and request handling",
          "Error handling and validation"
        ]
      },
      {
        "title": "Database & Authentication",
        "points": [
          "Database design (MongoDB/SQL)",
          "CRUD operations from the backend",
          "User authentication with JWT",
          "Authorization and protected routes"
        ]
      },
      {
        "title": "Deployment & Project Work",
        "points": [
          "Connecting front-end and back-end",
          "Environment variables and configuration",
          "Deploying to cloud platforms (Vercel/Render)",
          "Building and deploying a full stack capstone project"
        ]
      }
    ]
  },
  "mastering-artificial-intelligence": {
    "overview": "Artificial Intelligence (AI) covers the principles and tools used to build systems that can learn from data and make intelligent decisions — from machine learning algorithms to deep learning and neural networks. It's one of the fastest-growing fields in technology, with applications across every industry.\n\nThe course starts with AI and machine learning fundamentals, covers supervised and unsupervised learning algorithms using Python, and introduces neural networks and deep learning concepts along with real-world applications like computer vision and natural language processing. M-Tech Computers' classroom training combines theory with hands-on Python projects so students build practical AI/ML skills relevant to data science and AI engineering roles.",
    "highlights": [
      "Machine Learning Fundamentals in Python",
      "Supervised & Unsupervised Learning Algorithms",
      "Neural Networks & Deep Learning Basics",
      "Computer Vision & NLP Applications",
      "Real-World AI Project Development"
    ],
    "syllabus": [
      {
        "title": "Introduction to AI & Machine Learning",
        "points": [
          "What is AI, ML, and Deep Learning",
          "Python libraries for AI (NumPy, Pandas, Scikit-learn)",
          "Data preprocessing and feature engineering",
          "Types of machine learning"
        ]
      },
      {
        "title": "Supervised Learning",
        "points": [
          "Regression algorithms (Linear, Logistic)",
          "Classification algorithms (Decision Trees, SVM, KNN)",
          "Model evaluation metrics",
          "Overfitting and regularization"
        ]
      },
      {
        "title": "Unsupervised Learning",
        "points": [
          "Clustering algorithms (K-Means, Hierarchical)",
          "Dimensionality reduction (PCA)",
          "Association rule learning",
          "Anomaly detection basics"
        ]
      },
      {
        "title": "Neural Networks & Deep Learning",
        "points": [
          "Perceptrons and neural network architecture",
          "Introduction to TensorFlow/Keras",
          "Convolutional Neural Networks (CNN) basics",
          "Recurrent Neural Networks (RNN) basics"
        ]
      },
      {
        "title": "Applications & Projects",
        "points": [
          "Introduction to computer vision",
          "Introduction to natural language processing (NLP)",
          "Building and training an ML model project",
          "Model deployment basics"
        ]
      }
    ]
  },
  "react-dev-scratch": {
    "overview": "React is the most widely used JavaScript library for building fast, component-based user interfaces, developed and maintained by Meta. It powers the front-end of many of the world's leading web applications and is a core skill for modern front-end developers.\n\nThe course starts from JavaScript ES6 essentials and builds up to React components, hooks, state management, and routing, along with API integration and performance optimization techniques. M-Tech Computers' classroom training focuses on building multiple real projects — from simple UI components to a complete single-page application — so students are job-ready for front-end developer roles.",
    "highlights": [
      "Component-Based UI Development",
      "React Hooks (useState, useEffect, useContext)",
      "Client-Side Routing with React Router",
      "State Management & API Integration",
      "Multiple Real-World React Projects"
    ],
    "syllabus": [
      {
        "title": "React Fundamentals",
        "points": [
          "JSX syntax and rendering",
          "Functional components and props",
          "Component composition and reusability",
          "Handling events in React"
        ]
      },
      {
        "title": "State & Hooks",
        "points": [
          "useState and component state",
          "useEffect and side effects",
          "useContext for global state",
          "Custom hooks basics"
        ]
      },
      {
        "title": "Routing & Navigation",
        "points": [
          "React Router setup and routes",
          "Nested routes and route parameters",
          "Programmatic navigation",
          "Protected routes basics"
        ]
      },
      {
        "title": "State Management & APIs",
        "points": [
          "Lifting state up and prop drilling",
          "Fetching data from REST APIs",
          "Loading and error state handling",
          "Introduction to Context API / Redux"
        ]
      },
      {
        "title": "Project Development",
        "points": [
          "Building a multi-page React application",
          "Form handling and validation in React",
          "Performance optimization (memoization)",
          "Deploying a React application"
        ]
      }
    ]
  },
  "master-react-js": {
    "overview": "React JS lets developers build fast, modern, and reusable user interfaces for web applications using a component-based architecture. As the most in-demand front-end library today, React skills open doors to front-end and full stack developer roles across startups and enterprises alike.\n\nThis course focuses on building real, modern web applications with React — from component design and state management to routing and API-driven interfaces — with an emphasis on current React patterns like hooks and functional components. M-Tech Computers' classroom training is entirely project-driven, so students leave with deployable React applications in their portfolio.",
    "highlights": [
      "Modern Functional Components & Hooks",
      "Reusable Component Design Patterns",
      "Client-Side Routing & Navigation",
      "API-Driven Dynamic Interfaces",
      "Portfolio-Ready React Applications"
    ],
    "syllabus": [
      {
        "title": "React Fundamentals",
        "points": [
          "JSX syntax and rendering",
          "Functional components and props",
          "Component composition and reusability",
          "Handling events in React"
        ]
      },
      {
        "title": "State & Hooks",
        "points": [
          "useState and component state",
          "useEffect and side effects",
          "useContext for global state",
          "Custom hooks basics"
        ]
      },
      {
        "title": "Routing & Navigation",
        "points": [
          "React Router setup and routes",
          "Nested routes and route parameters",
          "Programmatic navigation",
          "Protected routes basics"
        ]
      },
      {
        "title": "State Management & APIs",
        "points": [
          "Lifting state up and prop drilling",
          "Fetching data from REST APIs",
          "Loading and error state handling",
          "Introduction to Context API / Redux"
        ]
      },
      {
        "title": "Project Development",
        "points": [
          "Building a multi-page React application",
          "Form handling and validation in React",
          "Performance optimization (memoization)",
          "Deploying a React application"
        ]
      }
    ]
  },
  "golang-programming": {
    "overview": "Go (Golang) is a statically typed, compiled programming language designed by Google for building fast, reliable, and concurrent software systems. Its simplicity and built-in concurrency support make it a popular choice for backend services, cloud infrastructure, and microservices.\n\nThe course covers Go syntax and fundamentals, goroutines and channels for concurrent programming, working with Go modules and packages, and building web services and REST APIs with Go. M-Tech Computers' classroom training uses practical coding exercises so students understand not just the syntax but how to build production-style backend systems in Go.",
    "highlights": [
      "Go Language Fundamentals & Syntax",
      "Goroutines & Channels for Concurrency",
      "Package Management with Go Modules",
      "Building REST APIs in Go",
      "Error Handling & Testing in Go"
    ],
    "syllabus": [
      {
        "title": "Go Fundamentals",
        "points": [
          "Variables, data types, and operators",
          "Control structures and functions",
          "Arrays, slices, and maps",
          "Structs and methods"
        ]
      },
      {
        "title": "Concurrency in Go",
        "points": [
          "Goroutines basics",
          "Channels and synchronization",
          "Select statements",
          "Common concurrency patterns"
        ]
      },
      {
        "title": "Packages & Modules",
        "points": [
          "Go modules and dependency management",
          "Organizing code into packages",
          "Working with the standard library",
          "Error handling conventions"
        ]
      },
      {
        "title": "Web Development with Go",
        "points": [
          "Building HTTP servers",
          "Routing and middleware",
          "Building REST APIs",
          "Working with JSON"
        ]
      },
      {
        "title": "Testing & Deployment",
        "points": [
          "Writing unit tests in Go",
          "Debugging Go applications",
          "Building and deploying Go binaries",
          "Introduction to Go in microservices"
        ]
      }
    ]
  },
  "master-node-js": {
    "overview": "Node.js is a JavaScript runtime that lets developers build fast, scalable backend servers and APIs using the same language used on the front-end. It's the backbone of countless modern web applications and a core skill for full stack and backend developers.\n\nThe course covers Node.js fundamentals, building REST APIs with Express.js, working with databases like MongoDB and SQL, and implementing authentication and middleware. M-Tech Computers' classroom training focuses on building real backend projects — from simple APIs to a complete server-side application — preparing students for backend and full stack developer roles.",
    "highlights": [
      "Node.js Runtime & Event Loop",
      "REST API Development with Express.js",
      "Database Integration (MongoDB/SQL)",
      "Authentication with JWT",
      "Real Backend Project Development"
    ],
    "syllabus": [
      {
        "title": "Node.js Fundamentals",
        "points": [
          "Node.js architecture and event loop",
          "Modules and the require system",
          "File system and core modules",
          "NPM and package management"
        ]
      },
      {
        "title": "Building APIs with Express",
        "points": [
          "Express.js setup and routing",
          "Middleware and request handling",
          "Building RESTful endpoints",
          "Error handling in Express"
        ]
      },
      {
        "title": "Database Integration",
        "points": [
          "Connecting Node.js to MongoDB (Mongoose)",
          "CRUD operations with MongoDB",
          "SQL database integration basics",
          "Data validation and schemas"
        ]
      },
      {
        "title": "Authentication & Security",
        "points": [
          "User authentication with JWT",
          "Password hashing (bcrypt)",
          "Session management basics",
          "API security best practices"
        ]
      },
      {
        "title": "Project Development",
        "points": [
          "Building a complete backend API project",
          "Environment configuration",
          "Testing APIs with Postman",
          "Deploying a Node.js application"
        ]
      }
    ]
  },
  "master-angular": {
    "overview": "Angular is a comprehensive, TypeScript-based front-end framework maintained by Google, used for building large-scale, enterprise-grade single-page applications. Its structured architecture and built-in tooling make it a popular choice for enterprise web development teams.\n\nThe course covers Angular components, modules, and services, along with data binding, routing, and forms, and dependency injection and HTTP client integration for connecting to backend APIs. M-Tech Computers' classroom training builds toward a complete Angular application, giving students the structured framework knowledge needed for enterprise front-end developer roles.",
    "highlights": [
      "Component-Based Architecture with TypeScript",
      "Two-Way Data Binding & Directives",
      "Angular Routing & Forms",
      "Dependency Injection & Services",
      "HTTP Client & API Integration"
    ],
    "syllabus": [
      {
        "title": "Angular Fundamentals",
        "points": [
          "TypeScript basics for Angular",
          "Angular CLI and project structure",
          "Components and templates",
          "Data binding (interpolation, property, event)"
        ]
      },
      {
        "title": "Directives & Pipes",
        "points": [
          "Structural directives (*ngIf, *ngFor)",
          "Attribute directives",
          "Built-in and custom pipes",
          "Custom directive creation"
        ]
      },
      {
        "title": "Services & Dependency Injection",
        "points": [
          "Creating and injecting services",
          "Dependency injection concepts",
          "Sharing data between components",
          "State management basics"
        ]
      },
      {
        "title": "Routing & Forms",
        "points": [
          "Angular Router setup and navigation",
          "Route guards and lazy loading",
          "Template-driven forms",
          "Reactive forms and validation"
        ]
      },
      {
        "title": "HTTP & Project Development",
        "points": [
          "HttpClient module and API calls",
          "Observables and RxJS basics",
          "Error handling in HTTP requests",
          "Building and deploying an Angular application"
        ]
      }
    ]
  },
  "mern-stack-web-development": {
    "overview": "The MERN stack — MongoDB, Express.js, React, and Node.js — is one of the most popular full-stack JavaScript technology combinations, letting developers build complete web applications using a single language (JavaScript) across the front-end, back-end, and database layers.\n\nThis course covers building a NoSQL database with MongoDB, RESTful APIs with Express and Node.js, and dynamic user interfaces with React, before integrating all four into a complete full-stack application with authentication and cloud deployment. M-Tech Computers' classroom training is centered on real project builds so students graduate with deployable MERN applications for their portfolio.",
    "highlights": [
      "Full JavaScript Stack — MongoDB, Express, React, Node",
      "RESTful API Development",
      "Dynamic React Front-Ends",
      "JWT Authentication & Route Protection",
      "Cloud Deployment of Full-Stack Apps"
    ],
    "syllabus": []
  },
  "pcb-design": {
    "overview": "PCB (Printed Circuit Board) design covers the process of turning an electronic circuit schematic into a manufacturable board — placing components, routing copper traces, and generating the fabrication files needed by a PCB manufacturer. It's a core skill for electronics and embedded systems engineers.\n\nThe course covers schematic capture, component footprint creation, PCB layout and routing rules, multi-layer board design, and generating Gerber files and bills of materials for manufacturing, along with design-for-manufacturing (DFM) best practices. M-Tech Computers' classroom training uses industry-standard PCB design tools and real circuit projects so students can design boards ready for fabrication and assembly.",
    "highlights": [
      "Schematic Capture & Circuit Design",
      "Component Footprint Creation",
      "PCB Layout & Multi-Layer Routing",
      "Gerber File Generation for Manufacturing",
      "Design-for-Manufacturing (DFM) Best Practices"
    ],
    "syllabus": [
      {
        "title": "Introduction to PCB Design",
        "points": [
          "Overview of PCB design workflow",
          "Types of PCBs (single, double, multi-layer)",
          "Electronic components and symbols",
          "PCB design software overview"
        ]
      },
      {
        "title": "Schematic Capture",
        "points": [
          "Creating circuit schematics",
          "Component libraries and symbols",
          "Net lists and electrical rule checks (ERC)",
          "Schematic organization for complex circuits"
        ]
      },
      {
        "title": "Component Footprints",
        "points": [
          "Creating and editing footprints",
          "Footprint libraries and standards (IPC)",
          "SMD vs through-hole footprints",
          "3D footprint verification"
        ]
      },
      {
        "title": "PCB Layout & Routing",
        "points": [
          "Board outline and layer stack-up setup",
          "Component placement strategies",
          "Manual and auto-routing techniques",
          "Design rule checks (DRC)"
        ]
      },
      {
        "title": "Manufacturing Output",
        "points": [
          "Generating Gerber and drill files",
          "Bill of Materials (BOM) preparation",
          "Design-for-Manufacturing (DFM) checks",
          "Preparing files for PCB fabrication and assembly"
        ]
      }
    ]
  },
  "etap-electrical": {
    "overview": "ETAP is the industry-leading software for electrical power system design, analysis, and simulation — used by utilities, industrial plants, and consulting firms to design and validate electrical distribution networks. It covers everything from single-line diagram creation to protection coordination.\n\nThe course covers single-line diagram (SLD) creation, load flow analysis, short circuit analysis, and protective device coordination studies, along with an introduction to arc flash analysis. M-Tech Computers' classroom training uses realistic electrical network models so students gain the practical analysis skills needed for electrical design engineer roles in power and industrial sectors.",
    "highlights": [
      "Single-Line Diagram (SLD) Creation",
      "Load Flow & Short Circuit Analysis",
      "Protective Device Coordination Studies",
      "Arc Flash Analysis Basics",
      "Industrial & Utility Power System Design"
    ],
    "syllabus": [
      {
        "title": "Introduction to ETAP",
        "points": [
          "ETAP interface and project setup",
          "Building single-line diagrams (SLD)",
          "Electrical equipment library and data entry",
          "Understanding power system components"
        ]
      },
      {
        "title": "Load Flow Analysis",
        "points": [
          "Load flow study fundamentals",
          "Running and interpreting load flow results",
          "Voltage drop and power factor analysis",
          "Optimizing network configuration"
        ]
      },
      {
        "title": "Short Circuit Analysis",
        "points": [
          "Short circuit study fundamentals (IEC/ANSI)",
          "Fault current calculations",
          "Equipment rating verification",
          "Short circuit report interpretation"
        ]
      },
      {
        "title": "Protection Coordination",
        "points": [
          "Protective device types and settings",
          "Time-current curve (TCC) coordination",
          "Relay and breaker coordination studies",
          "Selectivity analysis"
        ]
      },
      {
        "title": "Advanced Studies",
        "points": [
          "Introduction to arc flash analysis",
          "Motor starting studies basics",
          "Cable sizing and derating",
          "Report generation and documentation"
        ]
      }
    ]
  },
  "msp-training": {
    "overview": "MSP (Managed Service Provider) training prepares IT professionals to deliver and manage outsourced IT services for client businesses — covering cloud infrastructure management, remote monitoring, help desk operations, and IT service delivery models. It's aimed at those pursuing careers in IT support, cloud operations, or managed services businesses.\n\nThe course covers cloud platform fundamentals (AWS/Azure basics), remote monitoring and management (RMM) tools, IT service management (ITSM) frameworks like ITIL, and client service delivery processes such as SLAs and ticketing systems. M-Tech Computers' classroom training combines these concepts with practical tool walkthroughs so students understand how modern MSPs operate and support client IT environments.",
    "highlights": [
      "Cloud Infrastructure Fundamentals (AWS/Azure)",
      "Remote Monitoring & Management (RMM) Tools",
      "IT Service Management (ITIL) Basics",
      "Help Desk & Ticketing Systems",
      "SLA & Client Service Delivery Processes"
    ],
    "syllabus": [
      {
        "title": "Introduction to Managed Services",
        "points": [
          "What is an MSP and service delivery models",
          "MSP business and pricing models",
          "Overview of the MSP technology stack",
          "Client onboarding processes"
        ]
      },
      {
        "title": "Cloud Infrastructure Basics",
        "points": [
          "Introduction to AWS/Azure cloud services",
          "Cloud infrastructure monitoring",
          "Backup and disaster recovery basics",
          "Cloud security fundamentals"
        ]
      },
      {
        "title": "Remote Monitoring & Management",
        "points": [
          "RMM tools overview",
          "Patch management and automation",
          "Endpoint monitoring and alerting",
          "Remote support and troubleshooting"
        ]
      },
      {
        "title": "IT Service Management",
        "points": [
          "ITIL framework fundamentals",
          "Incident, problem, and change management",
          "Ticketing systems and workflows",
          "Service Level Agreements (SLAs)"
        ]
      },
      {
        "title": "Client Operations",
        "points": [
          "Help desk operations and best practices",
          "Client reporting and communication",
          "Security and compliance basics for MSPs",
          "Career paths in managed IT services"
        ]
      }
    ]
  },
  "strategic-ppm": {
    "overview": "Project Portfolio Management (PPM) is the practice of managing multiple projects and programs as a coordinated portfolio, aligning them with an organization's strategic goals and optimizing resource allocation across competing priorities. It's a critical skill for PMOs (Project Management Offices) and senior project professionals.\n\nThe course covers portfolio governance, project prioritization and selection techniques, resource capacity planning across projects, and portfolio performance tracking using KPIs and dashboards. M-Tech Computers' classroom training uses real portfolio scenarios so students learn to balance strategic alignment, risk, and resource constraints across multiple simultaneous projects.",
    "highlights": [
      "Portfolio Governance & Strategic Alignment",
      "Project Prioritization & Selection Techniques",
      "Cross-Project Resource Capacity Planning",
      "Portfolio Risk Management",
      "KPI Dashboards & Performance Tracking"
    ],
    "syllabus": [
      {
        "title": "Introduction to PPM",
        "points": [
          "What is Project Portfolio Management",
          "Portfolio vs program vs project management",
          "PPM frameworks and best practices",
          "Role of the PMO in portfolio management"
        ]
      },
      {
        "title": "Portfolio Governance",
        "points": [
          "Portfolio governance structures",
          "Strategic alignment of projects",
          "Stakeholder management in portfolios",
          "Portfolio charter and roadmap"
        ]
      },
      {
        "title": "Project Selection & Prioritization",
        "points": [
          "Business case development",
          "Prioritization models and scoring",
          "Cost-benefit and ROI analysis",
          "Balancing risk and value in portfolio selection"
        ]
      },
      {
        "title": "Resource & Capacity Planning",
        "points": [
          "Cross-project resource allocation",
          "Capacity planning techniques",
          "Resource conflict resolution",
          "Portfolio scheduling basics"
        ]
      },
      {
        "title": "Portfolio Monitoring",
        "points": [
          "Portfolio performance KPIs",
          "Dashboard and reporting tools",
          "Portfolio risk monitoring",
          "Continuous portfolio review and rebalancing"
        ]
      }
    ]
  },
  "pmp-certification": {
    "overview": "The Project Management Professional (PMP)® certification, offered by the Project Management Institute (PMI), is the world's most recognized project management credential. It validates a professional's ability to lead and direct projects across any industry using globally accepted best practices.\n\nThe course covers the PMBOK Guide's process groups and knowledge areas — initiating, planning, executing, monitoring & controlling, and closing — along with agile and hybrid project approaches now included in the current PMP exam. M-Tech Computers' classroom training combines concept coverage with exam-pattern practice questions to help students prepare thoroughly for the PMP certification exam.",
    "highlights": [
      "PMBOK Guide Process Groups & Knowledge Areas",
      "Predictive, Agile & Hybrid Project Approaches",
      "Scope, Schedule, Cost & Risk Management",
      "Stakeholder & Communication Management",
      "PMP Exam-Pattern Practice & Preparation"
    ],
    "syllabus": [
      {
        "title": "Project Management Fundamentals",
        "points": [
          "Project management framework and terminology",
          "Project life cycle and organizational structures",
          "Role of the project manager",
          "PMI Talent Triangle overview"
        ]
      },
      {
        "title": "Initiating & Planning",
        "points": [
          "Project charter and stakeholder identification",
          "Scope management and WBS creation",
          "Schedule development and network diagrams",
          "Cost estimating and budgeting"
        ]
      },
      {
        "title": "Executing & Quality",
        "points": [
          "Resource management and team development",
          "Quality management planning",
          "Communications management",
          "Procurement management basics"
        ]
      },
      {
        "title": "Monitoring, Control & Risk",
        "points": [
          "Risk identification and response planning",
          "Earned value management (EVM)",
          "Change control processes",
          "Project monitoring and controlling techniques"
        ]
      },
      {
        "title": "Agile & Exam Preparation",
        "points": [
          "Agile and hybrid project management approaches",
          "Scrum roles and ceremonies overview",
          "PMP exam structure and question patterns",
          "Mock tests and exam strategy"
        ]
      }
    ]
  },
  "six-sigma": {
    "overview": "Six Sigma is a data-driven methodology for eliminating defects and improving process quality, widely used across manufacturing, healthcare, and service industries. It uses statistical tools within the DMAIC (Define, Measure, Analyze, Improve, Control) framework to systematically reduce variation and improve efficiency.\n\nThe course covers Six Sigma principles, the DMAIC methodology, statistical process control tools, and root cause analysis techniques such as Fishbone diagrams and FMEA, along with lean principles for waste reduction. M-Tech Computers' classroom training uses real process improvement case studies so students can apply Six Sigma tools to solve quality and efficiency problems in their own organizations.",
    "highlights": [
      "DMAIC Methodology (Define-Measure-Analyze-Improve-Control)",
      "Statistical Process Control Tools",
      "Root Cause Analysis (Fishbone, FMEA)",
      "Lean Principles for Waste Reduction",
      "Real Process Improvement Case Studies"
    ],
    "syllabus": [
      {
        "title": "Introduction to Six Sigma",
        "points": [
          "Six Sigma history and philosophy",
          "Sigma levels and defect rates",
          "Six Sigma roles (Champion, Black Belt, Green Belt)",
          "Overview of the DMAIC framework"
        ]
      },
      {
        "title": "Define & Measure",
        "points": [
          "Project charter and problem statement",
          "Voice of the Customer (VOC)",
          "Process mapping (SIPOC)",
          "Data collection and measurement systems"
        ]
      },
      {
        "title": "Analyze",
        "points": [
          "Root cause analysis techniques",
          "Fishbone (Ishikawa) diagrams",
          "Failure Mode and Effects Analysis (FMEA)",
          "Basic statistical analysis tools"
        ]
      },
      {
        "title": "Improve & Control",
        "points": [
          "Generating and evaluating solutions",
          "Statistical process control (SPC) charts",
          "Control plans and standardization",
          "Sustaining process improvements"
        ]
      },
      {
        "title": "Lean & Application",
        "points": [
          "Introduction to Lean principles",
          "Waste identification (the 8 wastes)",
          "Six Sigma project case studies",
          "Certification exam overview"
        ]
      }
    ]
  },
  "ms-office": {
    "overview": "Microsoft Office is the world's most widely used productivity suite, forming the backbone of everyday business work — from writing documents and creating presentations to building spreadsheets and managing email. Proficiency in MS Office is one of the most universally valued skills across every industry and job role.\n\nThe course covers Microsoft Word for professional document creation, PowerPoint for effective presentations, Excel for spreadsheets, formulas, and basic data analysis, and Outlook for email and calendar management. M-Tech Computers' classroom training focuses on practical, workplace-ready skills so students can confidently handle everyday office documentation and communication tasks.",
    "highlights": [
      "Professional Document Creation in Word",
      "Effective Presentations with PowerPoint",
      "Spreadsheets, Formulas & Charts in Excel",
      "Email & Calendar Management in Outlook",
      "Practical, Workplace-Ready Office Skills"
    ],
    "syllabus": [
      {
        "title": "MS Word",
        "points": [
          "Document formatting and styles",
          "Tables, headers, and footers",
          "Mail merge basics",
          "Templates and document review tools"
        ]
      },
      {
        "title": "MS Excel",
        "points": [
          "Worksheet basics and formatting",
          "Formulas and functions (SUM, IF, VLOOKUP)",
          "Charts and data visualization",
          "Sorting, filtering, and basic pivot tables"
        ]
      },
      {
        "title": "MS PowerPoint",
        "points": [
          "Slide design and layouts",
          "Animations and transitions",
          "Working with images, charts, and SmartArt",
          "Presenting and slideshow settings"
        ]
      },
      {
        "title": "MS Outlook",
        "points": [
          "Email management and organization",
          "Calendar and meeting scheduling",
          "Contacts and task management",
          "Rules and folder organization"
        ]
      },
      {
        "title": "Integration & Practice",
        "points": [
          "Sharing data between Word, Excel, and PowerPoint",
          "Preparing workplace reports and presentations",
          "File management and cloud saving (OneDrive)",
          "Practical exercises and assessments"
        ]
      }
    ]
  },
  "gst-certification": {
    "overview": "Goods and Services Tax (GST) is India's unified indirect tax system covering the supply of goods and services, and understanding it is essential for accountants, business owners, and finance professionals. GST compliance covers registration, invoicing, return filing, and input tax credit management.\n\nThe course covers GST fundamentals and tax slabs, GST registration procedures, invoicing and e-way bill requirements, and filing GST returns (GSTR-1, GSTR-3B) along with input tax credit (ITC) reconciliation. M-Tech Computers' classroom training uses practical filing exercises on the GST portal so students can confidently handle GST compliance for businesses of any size.",
    "highlights": [
      "GST Structure, Slabs & Registration",
      "GST Invoicing & E-Way Bill Compliance",
      "GSTR-1 & GSTR-3B Return Filing",
      "Input Tax Credit (ITC) Reconciliation",
      "Practical GST Portal Filing Exercises"
    ],
    "syllabus": [
      {
        "title": "Introduction to GST",
        "points": [
          "GST structure — CGST, SGST, IGST",
          "GST tax slabs and classification",
          "GST registration process and eligibility",
          "GST Identification Number (GSTIN)"
        ]
      },
      {
        "title": "Invoicing & Documentation",
        "points": [
          "GST-compliant invoice formats",
          "Debit and credit notes",
          "E-way bill generation and rules",
          "HSN/SAC codes"
        ]
      },
      {
        "title": "Input Tax Credit",
        "points": [
          "Input Tax Credit (ITC) concepts",
          "ITC eligibility and reversal rules",
          "ITC reconciliation (GSTR-2A/2B matching)",
          "Blocked credits under GST"
        ]
      },
      {
        "title": "GST Return Filing",
        "points": [
          "GSTR-1 (outward supplies) filing",
          "GSTR-3B (summary return) filing",
          "Annual return (GSTR-9) overview",
          "Late fees, interest, and penalties"
        ]
      },
      {
        "title": "Practical GST Compliance",
        "points": [
          "GST portal navigation and filing",
          "GST in Tally/accounting software",
          "Composition scheme basics",
          "Common GST compliance issues and solutions"
        ]
      }
    ]
  },
  "basic-computer": {
    "overview": "Basic computer literacy is the foundation for participating in today's digital workplace — covering operating system navigation, file management, internet browsing, and everyday office software use. This course is designed for absolute beginners who want to build confidence with computers from the ground up.\n\nThe course covers Windows OS navigation, file and folder management, safe internet browsing and email basics, and an introduction to MS Office applications (Word, Excel, PowerPoint). M-Tech Computers' classroom training uses simple, hands-on practice sessions so students of any background can build practical, everyday computer skills for personal and professional use.",
    "highlights": [
      "Windows OS Navigation & File Management",
      "Safe Internet Browsing & Email Basics",
      "Introduction to MS Word, Excel & PowerPoint",
      "Typing & Keyboard Familiarization",
      "Beginner-Friendly, Hands-On Practice"
    ],
    "syllabus": [
      {
        "title": "Computer Basics",
        "points": [
          "Understanding computer hardware and software",
          "Operating system (Windows) navigation",
          "Desktop, icons, and taskbar basics",
          "Keyboard and mouse familiarization"
        ]
      },
      {
        "title": "File Management",
        "points": [
          "Creating and organizing files and folders",
          "Copy, move, rename, and delete operations",
          "Using external storage (USB/cloud)",
          "Basic troubleshooting tips"
        ]
      },
      {
        "title": "Internet & Email",
        "points": [
          "Safe internet browsing basics",
          "Search engines and online safety",
          "Creating and using email accounts",
          "Sending attachments and managing inbox"
        ]
      },
      {
        "title": "Introduction to MS Office",
        "points": [
          "Basic document creation in Word",
          "Basic spreadsheet use in Excel",
          "Basic presentation creation in PowerPoint",
          "Printing and saving documents"
        ]
      },
      {
        "title": "Digital Skills Practice",
        "points": [
          "Typing practice and speed building",
          "Using common apps and utilities",
          "Basic digital security awareness",
          "Practical exercises and assessment"
        ]
      }
    ]
  },
  "sap-certification": {
    "overview": "SAP is the world's leading Enterprise Resource Planning (ERP) software, used by large and mid-sized organizations to integrate and manage core business processes — finance, materials management, sales, and production — on a single unified platform. SAP skills are highly valued across finance, supply chain, and IT roles.\n\nThe course covers SAP navigation and system fundamentals, Financial Accounting (FI) processes such as general ledger and accounts payable/receivable, Controlling (CO) for cost management, and Materials Management (MM) for procurement and inventory. M-Tech Computers' classroom training uses hands-on SAP system practice so students understand real business process workflows within an ERP environment.",
    "highlights": [
      "SAP System Navigation & Fundamentals",
      "Financial Accounting (FI) Module",
      "Controlling (CO) & Cost Management",
      "Materials Management (MM) — Procurement & Inventory",
      "Real Business Process Workflows in SAP"
    ],
    "syllabus": [
      {
        "title": "Introduction to SAP & ERP",
        "points": [
          "What is ERP and SAP's role in business",
          "SAP system landscape and navigation",
          "Organizational structure in SAP",
          "Master data concepts"
        ]
      },
      {
        "title": "Financial Accounting (FI)",
        "points": [
          "General ledger accounting",
          "Accounts payable and receivable",
          "Bank accounting basics",
          "Financial reporting in SAP"
        ]
      },
      {
        "title": "Controlling (CO)",
        "points": [
          "Cost center accounting",
          "Internal orders and cost tracking",
          "Profit center accounting basics",
          "Cost-based reporting"
        ]
      },
      {
        "title": "Materials Management (MM)",
        "points": [
          "Procurement process (purchase requisition to order)",
          "Inventory management basics",
          "Vendor management",
          "Goods receipt and invoice verification"
        ]
      },
      {
        "title": "Integration & Practice",
        "points": [
          "Integration between FI, CO, and MM",
          "SAP transaction codes (T-codes) practice",
          "Real business scenario exercises",
          "Overview of SAP career paths"
        ]
      }
    ]
  },
  "rhino": {
    "overview": "Rhinoceros (Rhino CAD) is a powerful 3D computer-aided design (CAD) software used for modeling, designing, and prototyping in industries such as architecture, industrial design, jewelry design, automotive, marine, and product design. Rhino is renowned for its precision, flexibility, and ability to handle complex and freeform surfaces.\n\nUnlike traditional CAD software, Rhino specializes in NURBS-based modeling, which allows designers to create smooth, mathematically precise curves and surfaces. This makes it ideal for designing organic shapes, complex geometries, and detailed prototypes that are difficult to achieve with standard parametric CAD tools.\n\nRhino also supports extensive plug-ins and interoperability, enabling integration with software like AutoCAD, Revit, 3ds Max, Grasshopper, and various rendering tools. M-Tech Computers classroom training covers conceptual design, visualization, and fabrication workflows so students can build professional 3D models for jewelry, architecture, and product design.",
    "highlights": [
      "NURBS 3D Modeling for Jewelry, Architecture & Product Design",
      "Freeform Curves, Surfaces, Solids & Meshes",
      "Import/Export with AutoCAD, Revit, SketchUp & SolidWorks",
      "Grasshopper Plug-ins for Parametric Design",
      "Fabrication-Ready Models for CNC & 3D Printing"
    ],
    "syllabus": [
      {
        "title": "Introduction to Rhino",
        "points": [
          "Rhino CAD interface and modeling tools for 2D drafting and 3D modeling",
          "Units, workspace, snaps, and precision tools",
          "Why Rhino is used in jewelry, architecture, industrial and product design",
          "NURBS concepts vs traditional parametric CAD"
        ]
      },
      {
        "title": "Design & Innovation Features",
        "points": [
          "Create precise curves, surfaces, solids, and meshes",
          "Freeform design for complex shapes and organic geometries",
          "Analysis, measurement, and construction-ready drawings",
          "Plug-ins for parametric design, rendering, and fabrication"
        ]
      },
      {
        "title": "Applications — Architecture, Product & Jewelry",
        "points": [
          "Conceptual 3D models of buildings, interiors, and furniture",
          "Model consumer products, automotive parts, jewelry, and machinery",
          "Prepare prototypes and fabrication-ready models for manufacturing",
          "3D assets for visualization, games, VR, and AR"
        ]
      },
      {
        "title": "Engineering, Fabrication & Interoperability",
        "points": [
          "Generate CAD drawings and 3D models for CNC machining and 3D printing",
          "Import/export to AutoCAD, Revit, SolidWorks, SketchUp, and 3ds Max",
          "Grasshopper for parametric and algorithmic design",
          "Design optimization, measurement, and documentation"
        ]
      },
      {
        "title": "Learning Outcomes",
        "points": [
          "Create complex 3D models using NURBS curves and surfaces",
          "Develop freeform and organic shapes for architecture, product, and jewelry design",
          "Apply visualization techniques for rendering and client presentations",
          "Produce construction drawings and professional skills for design studios and product development"
        ]
      }
    ]
  },
  "rhino-3d-training-chennai": {
    "overview": "Rhinoceros (Rhino CAD) is a powerful 3D computer-aided design (CAD) software used for modeling, designing, and prototyping in industries such as architecture, industrial design, jewelry design, automotive, marine, and product design. Rhino is renowned for its precision, flexibility, and ability to handle complex and freeform surfaces.\n\nUnlike traditional CAD software, Rhino specializes in NURBS-based modeling, which allows designers to create smooth, mathematically precise curves and surfaces. This makes it ideal for designing organic shapes, complex geometries, and detailed prototypes that are difficult to achieve with standard parametric CAD tools.",
    "highlights": [
      "NURBS 3D Modeling for Jewelry, Architecture & Product Design",
      "Freeform Curves, Surfaces, Solids & Meshes",
      "Import/Export with AutoCAD, Revit, SketchUp & SolidWorks",
      "Grasshopper Plug-ins for Parametric Design",
      "Fabrication-Ready Models for CNC & 3D Printing"
    ],
    "syllabus": []
  },
  "matrixgold": {
    "overview": "Turn your creative jewelry ideas into precise, production-ready 3D designs with MatrixGold. MatrixGold is a professional 3D CAD software specifically developed for jewelry design, combining powerful modeling tools, parametric workflows, gemstone setting, rendering, and manufacturing preparation in one environment.\n\nYou can design engagement and wedding rings, diamond and gemstone jewelry, pendants and necklaces, earrings, bracelets and bangles, custom luxury jewelry, signet and designer rings, and artistic organic jewelry designs.\n\nThe complete jewelry workflow is: Creative Design → 3D CAD → Gem Setting → Realistic Rendering → Manufacturing. M-Tech Computers classroom training focuses on industry jewelry CAD tools so students can create custom jewelry and prepare models for 3D printing, casting, and production.",
    "highlights": [
      "Industry-Focused Jewelry CAD Tools",
      "Precise 3D Jewelry Modeling & Ring Design",
      "Gemstone Setting — Prong, Pavé & Channel",
      "Parametric History for Fast Design Changes",
      "Photorealistic Rendering & Production-Ready Output"
    ],
    "syllabus": [
      {
        "title": "Jewelry 3D Modeling",
        "points": [
          "Create accurate 3D jewelry models from basic concepts to complex professional designs",
          "MatrixGold interface, jewelry templates, and modeling tools",
          "Working with metals, gems, and jewelry-specific CAD workflows"
        ]
      },
      {
        "title": "Ring Design",
        "points": [
          "Engagement rings, wedding bands, and signet rings",
          "Customized ring designs with accurate dimensions",
          "Shank, gallery, and halo-style ring construction"
        ]
      },
      {
        "title": "Gemstone Setting",
        "points": [
          "Diamond and gemstone placement",
          "Prong settings, pavé, and channel settings",
          "Carat weight, metal weight, and jewelry-setting workflows"
        ]
      },
      {
        "title": "Parametric Design & Rendering",
        "points": [
          "Parametric history so design changes can be made without rebuilding the full model",
          "Realistic presentations of gold, silver, platinum, and gemstone designs",
          "Client approval and marketing-ready jewelry renders"
        ]
      },
      {
        "title": "Production-Ready Design",
        "points": [
          "Prepare jewelry models for 3D printing, casting, and manufacturing",
          "Technical requirements such as dimensions and thickness",
          "Production-oriented workflow for jewelry CAD careers"
        ]
      }
    ]
  },
  "rhino-matrix": {
    "overview": "Turn your creative jewelry ideas into precise, production-ready 3D designs with MatrixGold. MatrixGold is a professional 3D CAD software specifically developed for jewelry design, combining powerful modeling tools, parametric workflows, gemstone setting, rendering, and manufacturing preparation in one environment.",
    "highlights": [
      "Industry-Focused Jewelry CAD Tools",
      "Precise 3D Jewelry Modeling & Ring Design",
      "Gemstone Setting — Prong, Pavé & Channel",
      "Parametric History for Fast Design Changes",
      "Photorealistic Rendering & Production-Ready Output"
    ],
    "syllabus": []
  },
  "zbrush": {
    "overview": "Transform your creative jewelry concepts into highly detailed 3D designs with ZBrush. ZBrush is a professional digital sculpting and 3D modeling software widely used for creating complex, artistic, and highly detailed 3D forms. For jewelry design, it can be used to create intricate patterns, ornamental details, custom rings, pendants, and other unique designs.\n\nWhat you can design: designer and custom rings, detailed gemstone jewelry, pendants and necklaces, earrings, bracelets and bangles, royal and ornamental jewelry, artistic and character jewelry, and intricate surface designs. M-Tech Computers classroom training focuses on jewelry sculpting so you can move from creative concept to production-ready models.",
    "highlights": [
      "Digital Jewelry Sculpting with Precise Shape Control",
      "Organic Jewelry Design Difficult in Traditional CAD",
      "High-Detail Patterns, Textures & Engravings",
      "Custom Ring & Pendant Design",
      "Production Prep for CAD/CAM, 3D Printing & Manufacturing"
    ],
    "syllabus": [
      {
        "title": "Digital Jewelry Sculpting",
        "points": [
          "Digitally sculpt unique jewelry forms with precise control over shape, surface, and detailing",
          "ZBrush interface, brushes, and jewelry sculpting workflow",
          "Blocking out rings, pendants, and ornamental forms"
        ]
      },
      {
        "title": "Organic Jewelry Design",
        "points": [
          "Create flowing, artistic, and organic designs that are difficult to achieve with traditional CAD modeling",
          "Artistic and character jewelry forms",
          "Royal and ornamental jewelry concepts"
        ]
      },
      {
        "title": "High-Detail Modeling",
        "points": [
          "Develop intricate patterns, textures, engravings, and ornamental details",
          "Detailed gemstone jewelry and surface richness",
          "Intricate surface designs for unique pieces"
        ]
      },
      {
        "title": "Custom Ring & Pendant Design",
        "points": [
          "Create customized rings, pendants, and other designer jewelry from creative concepts",
          "Earrings, bracelets, and bangles",
          "Designer and custom ring workflows"
        ]
      },
      {
        "title": "Surface Detailing",
        "points": [
          "Advanced detailing techniques for realistic and visually rich jewelry surfaces",
          "High-frequency details and decorative elements",
          "Surface finish for presentation and manufacturing"
        ]
      },
      {
        "title": "Production Preparation",
        "points": [
          "Prepare and optimize sculpted jewelry models for downstream CAD/CAM",
          "3D printing and jewelry manufacturing workflows",
          "Exporting models for casting and production"
        ]
      }
    ]
  },
  "csi-safe-essential-training": {
    "overview": "CSI SAFE has emerged as the best tool for designing concrete slabs and foundations. CSI SAFE (Slab Analysis by the Finite Element Method) enables structural engineers to draw, analyze, design, and detail slabs and foundations in one environment.\n\nThis course is designed for Civil Engineers, Structural Engineers, and Geo-Tech Engineers. It covers CSI SAFE foundation design, isolated footing, combined footing in detail, design and detailing with or without drop panels, pile cap design with pile spring constant calculations, raft/MAT foundation, slab deflection, and full building slab analysis. M-Tech Computers classroom training uses practical models so you can produce design-ready slab and foundation documentation.\n\nPrerequisites: no prior work experience is required. Basic computer knowledge, engineering fundamentals, and CSI SAFE installed on your system are recommended. After training you receive digital learning material, a course completion certificate, and placement assistance support.",
    "highlights": [
      "Isolated & Combined Footing Design in Detail",
      "Raft / MAT Foundation Design",
      "Pile Cap Design with Pile Spring Constants",
      "Concrete Slab Short-Term & Long-Term Deflection",
      "Full Building Slab Analysis & Detailing"
    ],
    "syllabus": [
      {
        "title": "Introduction to CSI SAFE",
        "points": [
          "SAFE interface, model explorer, and project setup",
          "How to design foundations in CSI SAFE",
          "Draw, analyze, design, and detailing workflow",
          "Target audience: civil, structural, and geo-tech engineers"
        ]
      },
      {
        "title": "Footing Design",
        "points": [
          "Isolated footing design in detail",
          "Combined footing design in detail",
          "Design and detailing with or without drop panels",
          "Foundation modeling, materials, and soil subgrade"
        ]
      },
      {
        "title": "Raft, Base Plate & Beams",
        "points": [
          "Raft / MAT foundation design",
          "Base plate design (axial + bi-axial) with RAM Connection",
          "Beam design and how to do it effectively",
          "Load patterns, load cases, and load combinations"
        ]
      },
      {
        "title": "Slabs, Deflection & Pile Caps",
        "points": [
          "Concrete slab short-term and long-term deflection",
          "Pile cap design in detail with pile spring constant calculations",
          "Slab analysis, meshing, and result interpretation",
          "Displacement contours and deformed shape review"
        ]
      },
      {
        "title": "Full Building Design & Outcomes",
        "points": [
          "Full building design with slab analysis and detailing",
          "Detailing output and construction-ready reports",
          "Course completion certificate from M-Tech Computers",
          "Digital learning material and post-training support"
        ]
      }
    ]
  },
  "google-ads": {
    "overview": "Google Ads is the platform businesses use to run paid search, display, and video advertising campaigns across Google Search, YouTube, and the Google Display Network. Mastering it is essential for anyone pursuing a career in performance marketing or PPC (pay-per-click) advertising.\n\nThe course covers campaign structure and keyword strategy, search and display ad creation, bidding strategies and budget management, and conversion tracking and campaign optimization using Google Ads and Analytics data. M-Tech Computers' classroom training uses live campaign exercises so students learn to plan, launch, and optimize real Google Ads campaigns.",
    "highlights": [
      "Search, Display & YouTube Campaign Setup",
      "Keyword Research & Bidding Strategies",
      "Conversion Tracking & Analytics Integration",
      "Budget Management & Campaign Optimization",
      "Live Campaign Planning Exercises"
    ],
    "syllabus": [
      {
        "title": "Introduction to Google Ads",
        "points": [
          "Google Ads account structure",
          "Campaign types overview (Search, Display, Video)",
          "Keyword research fundamentals",
          "Ad auction and Quality Score"
        ]
      },
      {
        "title": "Search Campaigns",
        "points": [
          "Creating search campaigns and ad groups",
          "Writing effective search ads",
          "Keyword match types",
          "Negative keywords and search terms"
        ]
      },
      {
        "title": "Display & Video Campaigns",
        "points": [
          "Display campaign targeting options",
          "Creating display and responsive ads",
          "YouTube/video campaign basics",
          "Remarketing campaign setup"
        ]
      },
      {
        "title": "Bidding & Budgeting",
        "points": [
          "Bidding strategies (manual, automated)",
          "Budget allocation and pacing",
          "Bid adjustments (device, location, time)",
          "Campaign cost management"
        ]
      },
      {
        "title": "Tracking & Optimization",
        "points": [
          "Conversion tracking setup",
          "Google Analytics integration",
          "Campaign performance analysis",
          "A/B testing and optimization techniques"
        ]
      }
    ]
  },
  "fb-insta-ads": {
    "overview": "Facebook and Instagram Advertising, run through Meta Ads Manager, lets businesses reach highly targeted audiences across the world's largest social media platforms using precise demographic, interest, and behavioral targeting. It's a core skill for social media marketers and digital advertisers.\n\nThe course covers Meta Ads Manager campaign structure, audience targeting including custom and lookalike audiences, ad creative and format selection, and the Meta Pixel for tracking and retargeting website visitors. M-Tech Computers' classroom training uses hands-on campaign creation so students learn to plan and run effective paid social campaigns for real businesses.",
    "highlights": [
      "Meta Ads Manager Campaign Structure",
      "Custom & Lookalike Audience Targeting",
      "Ad Creative & Format Strategy",
      "Meta Pixel Setup & Retargeting",
      "Hands-On Paid Social Campaign Creation"
    ],
    "syllabus": [
      {
        "title": "Introduction to Meta Ads",
        "points": [
          "Meta Ads Manager overview",
          "Facebook and Instagram ad ecosystem",
          "Campaign, ad set, and ad structure",
          "Setting campaign objectives"
        ]
      },
      {
        "title": "Audience Targeting",
        "points": [
          "Demographic and interest targeting",
          "Custom audiences (website, list-based)",
          "Lookalike audience creation",
          "Audience overlap and testing"
        ]
      },
      {
        "title": "Ad Creative & Formats",
        "points": [
          "Image, video, and carousel ads",
          "Instagram Stories and Reels ads",
          "Ad copywriting best practices",
          "Creative testing strategies"
        ]
      },
      {
        "title": "Meta Pixel & Tracking",
        "points": [
          "Installing and configuring Meta Pixel",
          "Event tracking and conversions",
          "Retargeting campaign setup",
          "Attribution and reporting basics"
        ]
      },
      {
        "title": "Budgeting & Optimization",
        "points": [
          "Budget and bid strategy options",
          "Campaign Budget Optimization (CBO)",
          "Performance analysis and reporting",
          "Scaling successful campaigns"
        ]
      }
    ]
  },
  "seo-sem": {
    "overview": "SEO (Search Engine Optimization) and SEM (Search Engine Marketing) together cover the organic and paid strategies used to improve a website's visibility on search engines like Google. SEO focuses on ranking content organically, while SEM covers paid search strategy, making this a comprehensive search marketing skill set.\n\nThe course covers on-page and off-page SEO techniques, keyword research and content optimization, technical SEO fundamentals, and an introduction to search engine marketing and Google Search Console/Analytics for measuring performance. M-Tech Computers' classroom training uses real website audits and optimization exercises so students can apply SEO/SEM strategies to actual websites.",
    "highlights": [
      "On-Page & Off-Page SEO Techniques",
      "Keyword Research & Content Optimization",
      "Technical SEO Fundamentals",
      "Google Search Console & Analytics",
      "Real Website Audit & Optimization Exercises"
    ],
    "syllabus": [
      {
        "title": "Introduction to SEO/SEM",
        "points": [
          "How search engines work",
          "SEO vs SEM — organic vs paid search",
          "Search ranking factors overview",
          "Setting up Google Search Console"
        ]
      },
      {
        "title": "Keyword Research",
        "points": [
          "Keyword research tools and techniques",
          "Search intent and keyword mapping",
          "Competitor keyword analysis",
          "Long-tail keyword strategy"
        ]
      },
      {
        "title": "On-Page SEO",
        "points": [
          "Title tags, meta descriptions, and headers",
          "Content optimization for SEO",
          "Internal linking strategy",
          "Image and URL optimization"
        ]
      },
      {
        "title": "Off-Page & Technical SEO",
        "points": [
          "Backlink building strategies",
          "Domain authority and link quality",
          "Technical SEO basics (site speed, mobile, sitemap)",
          "Local SEO and Google Business Profile"
        ]
      },
      {
        "title": "Analytics & SEM Basics",
        "points": [
          "Google Analytics fundamentals",
          "Tracking organic performance",
          "Introduction to SEM and paid search",
          "SEO reporting and audits"
        ]
      }
    ]
  },
  "canva-graphics": {
    "overview": "Canva is a beginner-friendly, browser-based graphic design tool that has become the go-to platform for marketers, small businesses, and content creators to design social media posts, presentations, and marketing materials without needing advanced design software skills.\n\nThe course covers Canva's design fundamentals — templates, layouts, and brand kits — along with creating social media graphics, presentations, and marketing collateral, plus basic animation and video editing features within Canva. M-Tech Computers' classroom training focuses on practical design projects so students can quickly produce professional-looking graphics for personal branding or business marketing.",
    "highlights": [
      "Canva Templates, Layouts & Brand Kits",
      "Social Media Graphic Design",
      "Marketing Collateral & Presentation Design",
      "Basic Animation & Video Editing",
      "Practical, Project-Based Design Skills"
    ],
    "syllabus": [
      {
        "title": "Introduction to Canva",
        "points": [
          "Canva interface and workspace overview",
          "Templates and design types",
          "Uploading and using custom assets",
          "Canva Pro features overview"
        ]
      },
      {
        "title": "Design Fundamentals",
        "points": [
          "Layout, alignment, and grids",
          "Typography and color theory basics",
          "Working with photos and graphics",
          "Creating and using brand kits"
        ]
      },
      {
        "title": "Social Media Design",
        "points": [
          "Instagram post and story design",
          "Facebook and LinkedIn graphics",
          "Content calendar planning basics",
          "Resizing designs across platforms"
        ]
      },
      {
        "title": "Marketing Materials",
        "points": [
          "Flyers, posters, and brochures",
          "Presentation and pitch deck design",
          "Logo and branding basics",
          "Print-ready design settings"
        ]
      },
      {
        "title": "Animation & Video",
        "points": [
          "Adding animations to designs",
          "Basic video editing in Canva",
          "Creating short marketing videos",
          "Exporting and sharing designs"
        ]
      }
    ]
  },
  "keyword-research": {
    "overview": "Keyword research is the foundation of every successful search and content marketing strategy — identifying the exact terms and phrases a target audience searches for, and understanding the intent, competition, and opportunity behind them. It's a specialized skill within SEO and content marketing.\n\nThe course covers keyword research tools and methodologies, search volume and difficulty analysis, competitor keyword gap analysis, and mapping keywords to content and long-tail search strategies. M-Tech Computers' classroom training uses real keyword research projects so students learn to build data-driven keyword strategies for websites and content campaigns.",
    "highlights": [
      "Keyword Research Tools & Methodology",
      "Search Volume & Difficulty Analysis",
      "Competitor Keyword Gap Analysis",
      "Search Intent Classification",
      "Long-Tail Keyword & Content Mapping"
    ],
    "syllabus": [
      {
        "title": "Introduction to Keyword Research",
        "points": [
          "Why keyword research matters",
          "Types of keywords (head, body, long-tail)",
          "Search intent categories",
          "Overview of keyword research tools"
        ]
      },
      {
        "title": "Keyword Discovery",
        "points": [
          "Seed keyword generation",
          "Using keyword research tools effectively",
          "Search volume and trend analysis",
          "Related and question-based keywords"
        ]
      },
      {
        "title": "Competitive Analysis",
        "points": [
          "Competitor keyword analysis",
          "Keyword gap identification",
          "Analyzing SERP competition",
          "Difficulty and opportunity scoring"
        ]
      },
      {
        "title": "Keyword Strategy",
        "points": [
          "Mapping keywords to content/pages",
          "Long-tail keyword strategy",
          "Local and niche keyword research",
          "Seasonal and trending keyword analysis"
        ]
      },
      {
        "title": "Application & Reporting",
        "points": [
          "Building a keyword strategy document",
          "Prioritizing keywords for content",
          "Tracking keyword rankings",
          "Keyword research reporting"
        ]
      }
    ]
  },
  "lead-generation": {
    "overview": "Lead generation is the process of attracting and converting prospects into potential customers for a business, using a mix of digital channels, content, and outreach strategies. It's a core skill for growth marketers and sales development professionals in both B2B and B2C businesses.\n\nThe course covers lead generation funnel strategy, landing page and lead magnet creation, email outreach and cold funnel setup, and lead qualification and nurturing techniques including basic LinkedIn and CRM workflows. M-Tech Computers' classroom training uses real campaign exercises so students can build and run practical lead generation systems for businesses.",
    "highlights": [
      "Lead Generation Funnel Strategy",
      "Landing Page & Lead Magnet Creation",
      "Email Outreach & Cold Funnel Setup",
      "LinkedIn Prospecting Basics",
      "Lead Qualification & Nurturing (CRM Basics)"
    ],
    "syllabus": [
      {
        "title": "Introduction to Lead Generation",
        "points": [
          "B2B vs B2C lead generation",
          "The lead generation funnel",
          "Inbound vs outbound lead generation",
          "Defining ideal customer profiles"
        ]
      },
      {
        "title": "Lead Magnets & Landing Pages",
        "points": [
          "Creating effective lead magnets",
          "Landing page design principles",
          "Forms and conversion optimization",
          "A/B testing landing pages"
        ]
      },
      {
        "title": "Outreach Strategies",
        "points": [
          "Cold email outreach fundamentals",
          "Email sequence and funnel setup",
          "LinkedIn prospecting basics",
          "Outreach personalization techniques"
        ]
      },
      {
        "title": "Lead Qualification",
        "points": [
          "Lead scoring and qualification criteria",
          "Introduction to CRM tools",
          "Lead nurturing workflows",
          "Sales and marketing alignment basics"
        ]
      },
      {
        "title": "Campaign Management",
        "points": [
          "Running a lead generation campaign",
          "Tracking and measuring lead quality",
          "Cost per lead and ROI analysis",
          "Optimizing lead generation campaigns"
        ]
      }
    ]
  },
  "autocad-2d-piping-design": {
    "overview": "AutoCAD 2D Piping Design applies AutoCAD's precision 2D drafting tools specifically to industrial piping projects — creating process and instrumentation diagrams (P&ID), piping layout drawings, and isometric drawings used in oil & gas and process plant engineering.\n\nThe course covers piping symbols and P&ID drafting standards, 2D piping layout and routing conventions, isometric drawing techniques, and Bill of Materials (BOM) preparation for piping projects. M-Tech Computers' classroom training uses real plant piping drawings so students can produce industry-standard 2D piping documentation for EPC and engineering consulting firms.",
    "highlights": [
      "ASME B31.3 Piping Drafting Standards",
      "P&ID Symbol Library & Schematics",
      "2D Isometric Piping Drawings",
      "Bill of Materials (BOM) Preparation",
      "Industry-Standard Plotting & Documentation"
    ],
    "syllabus": []
  },
  "smartplant-3d-sp3d": {
    "overview": "SmartPlant 3D (SP3D) is Intergraph/Hexagon's intelligent, rule-driven 3D plant design software used to model piping, equipment, and structures for oil & gas, chemical, and power plant projects on a shared multi-discipline database.\n\nThis course focuses on SP3D's core plant modeling workflow — equipment placement, piping specification-driven routing, and structural integration — along with automated clash detection and isometric extraction for construction documentation. M-Tech Computers' classroom training prepares students for 3D plant modeler and piping designer roles in EPC companies.",
    "highlights": [
      "Rule-Driven 3D Plant Modeling",
      "Specification-Driven Piping Routing",
      "Multi-Discipline Database Collaboration",
      "Automatic Clash Detection",
      "Isometric & Documentation Extraction"
    ],
    "syllabus": []
  },
  "everything-3d-e3d": {
    "overview": "AVEVA Everything3D (E3D) is a high-performance 3D plant design platform used by major EPC contractors to model equipment, piping, structures, and cabling for large industrial and offshore projects, known for its speed and rule-based design automation.\n\nThis course covers E3D's plant modeling workflow across equipment, piping, and structural steel design, along with drawing production and multi-discipline clash management. M-Tech Computers' classroom training uses realistic plant modeling exercises to prepare students for 3D plant design roles in oil & gas, marine, and power industries.",
    "highlights": [
      "High-Performance 3D Plant Modeling",
      "Equipment, Piping & Structural Integration",
      "Rule-Based Design Automation",
      "Multi-Discipline Clash Management",
      "Construction-Ready Drawing Production"
    ],
    "syllabus": []
  },
  "autocad-plant-3d": {
    "overview": "AutoCAD Plant 3D is Autodesk's specialized 3D plant design software built on AutoCAD, used for creating P&ID schematics, 3D piping models, and isometric drawings for process plant projects. It bridges familiar AutoCAD workflows with dedicated plant design tools, making it a popular entry point into plant design for AutoCAD users.\n\nThe course covers P&ID creation, spec-driven 3D piping modeling, structural and equipment placement, and generating isometric and orthographic drawings with automated reports. M-Tech Computers' classroom training uses complete plant project workflows so students can confidently design and document process piping systems using AutoCAD Plant 3D.",
    "highlights": [
      "P&ID Schematic Creation",
      "Spec-Driven 3D Piping Modeling",
      "Isometric & Orthographic Drawing Generation",
      "Automated Report & BOM Creation",
      "Complete Plant Project Workflows"
    ],
    "syllabus": []
  },
  "cyber-security": {
    "overview": "Cyber Security is the practice of protecting computers, networks, applications, devices and data from unauthorized access, attacks and security threats.\n\nOur Cyber Security training focuses on practical concepts of network security, ethical hacking, vulnerability assessment, penetration testing, threat detection and incident response, helping students build job-oriented cybersecurity skills.\n\nThe learning journey covers: Networking → Linux → Security Fundamentals → Ethical Hacking → Vulnerability Assessment → Web Security → SIEM/SOC → Incident Response. M-Tech Computers classroom training includes lab-based exercises in controlled, authorized environments so students understand how attacks occur and how security teams detect and respond to them.\n\nSecure the Digital World. Build Your Cyber Security Career with practical, job-oriented training at M-Tech Computers.",
    "highlights": [
      "Network Security & Ethical Hacking Fundamentals",
      "Vulnerability Assessment & Penetration Testing",
      "Web Application Security & OWASP Concepts",
      "SOC, SIEM & Security Monitoring",
      "Hands-on Lab Practice with Industry Tools",
      "Incident Response & Threat Detection",
      "Career Paths: SOC Analyst, Pen Tester & Security Analyst"
    ],
    "syllabus": [
      {
        "title": "Cyber Security Fundamentals",
        "points": [
          "Information security fundamentals and common cyber threats",
          "Attack methods, attack surfaces and security best practices",
          "Security policies, risk concepts and defense-in-depth",
          "Introduction to authorized security testing environments"
        ]
      },
      {
        "title": "Networking & Network Security",
        "points": [
          "TCP/IP, DNS, HTTP/HTTPS and network architecture",
          "Firewalls, VPN and network monitoring concepts",
          "Protecting networks against unauthorized access and attacks",
          "Network traffic analysis and security controls"
        ]
      },
      {
        "title": "Ethical Hacking",
        "points": [
          "How ethical hackers identify security weaknesses in authorized environments",
          "Reconnaissance and information gathering",
          "Vulnerability identification and security testing",
          "Security assessment methodology and reporting"
        ]
      },
      {
        "title": "Vulnerability Assessment & Penetration Testing",
        "points": [
          "Vulnerability Assessment → Analysis → Testing → Validation → Reporting",
          "Identifying and validating vulnerabilities through controlled security testing",
          "Security testing scope, rules of engagement and documentation",
          "Reporting findings for remediation and risk management"
        ]
      },
      {
        "title": "Web Application Security",
        "points": [
          "Web security fundamentals, authentication and authorization",
          "Session security and input validation",
          "OWASP security concepts and common web application risks",
          "Security testing in authorized test environments"
        ]
      },
      {
        "title": "SOC & Security Monitoring",
        "points": [
          "How Security Operations Center teams monitor systems and analyze alerts",
          "Security alerts, log analysis and SIEM fundamentals",
          "Threat detection, incident investigation and incident response",
          "SOC dashboards combining authentication, endpoint, network and threat data"
        ]
      },
      {
        "title": "Practical Cyber Security Training",
        "points": [
          "Network Security Labs and vulnerability assessment exercises",
          "Ethical hacking concepts and web security testing",
          "Security monitoring, log analysis and SIEM fundamentals",
          "Incident response, threat detection and security reporting"
        ]
      },
      {
        "title": "Cyber Security Tools & Technologies",
        "points": [
          "Exposure to Kali Linux, Wireshark, Burp Suite, Metasploit and Nmap",
          "SIEM platforms and vulnerability scanners",
          "Understanding tools and security methodology — not just commands",
          "Building problem-solving skills and a cybersecurity portfolio"
        ]
      }
    ]
  },
  "cloud-computing": {
    "overview": "Cloud Computing is the delivery of computing resources such as servers, storage, databases, networking and applications over the internet.\n\nOur Cloud Computing training helps students understand modern cloud infrastructure and develop practical skills required to deploy, manage, secure and scale applications and IT resources in the cloud.\n\nThe learning journey covers: Networking → Linux → Cloud Fundamentals → AWS/Azure/GCP → Cloud Infrastructure → Security → Deployment. Learn the Cloud. Build the Future with M-Tech Computers.\n\nDevelop practical Cloud Computing skills and prepare for modern IT infrastructure and cloud-based careers.",
    "highlights": [
      "Cloud Fundamentals — IaaS, PaaS, SaaS & Deployment Models",
      "AWS, Microsoft Azure & Google Cloud Introduction",
      "Cloud Infrastructure, Storage & Virtual Machines",
      "Linux & Cloud Server Management",
      "Cloud Networking & Security Fundamentals",
      "Hands-on Cloud Lab Exercises",
      "Career Paths: Cloud Engineer, Cloud Admin & Cloud Operations"
    ],
    "syllabus": [
      {
        "title": "Cloud Computing Fundamentals",
        "points": [
          "Cloud concepts, architecture and service models (IaaS, PaaS, SaaS)",
          "Deployment models: public, private and hybrid cloud",
          "Virtualization, cloud storage and cloud networking basics",
          "How organizations use cloud infrastructure in real-world IT"
        ]
      },
      {
        "title": "AWS / Microsoft Azure / Google Cloud",
        "points": [
          "Introduction to leading cloud platforms and their core services",
          "AWS | Microsoft Azure | Google Cloud overview",
          "Understanding how cloud services are used in real-world environments",
          "Platform selection and multi-cloud concepts"
        ]
      },
      {
        "title": "Cloud Infrastructure",
        "points": [
          "Virtual machines, compute services and cloud storage",
          "Cloud databases, networking and load balancing",
          "Auto scaling and resource management",
          "Designing and managing cloud infrastructure"
        ]
      },
      {
        "title": "Linux & Cloud Servers",
        "points": [
          "Linux fundamentals and server management for cloud environments",
          "Users, permissions, file systems and networking",
          "Remote server access and basic server security",
          "Managing Linux cloud servers in practice"
        ]
      },
      {
        "title": "Cloud Networking",
        "points": [
          "Virtual networks, IP addressing and subnets",
          "Routing, DNS, firewalls and security groups",
          "Load balancers and cloud resource communication",
          "Secure network design in cloud environments"
        ]
      },
      {
        "title": "Cloud Security",
        "points": [
          "Identity & Access Management → Authentication → Permissions",
          "Network security and data protection in the cloud",
          "Security best practices for cloud infrastructure and applications",
          "Shared responsibility model and compliance basics"
        ]
      },
      {
        "title": "Practical Cloud Computing Training",
        "points": [
          "Create cloud virtual machines and configure cloud storage",
          "Deploy applications and configure cloud networking",
          "Manage Linux cloud servers and user permissions",
          "Configure cloud security and monitor cloud resources"
        ]
      },
      {
        "title": "Cloud Technologies & Career Opportunities",
        "points": [
          "AWS, Azure, Google Cloud, Linux, Docker, Kubernetes, Git and CI/CD concepts",
          "Cloud databases and cloud networking tools",
          "Roles: Cloud Engineer, Cloud Support Engineer, Cloud Administrator",
          "Cloud Infrastructure Engineer, Cloud Operations Engineer and System Administrator"
        ]
      }
    ]
  },
  "aws-cloud-computing": {
    "overview": "Amazon Web Services (AWS) is a leading cloud platform that provides on-demand computing, storage, databases, networking, security and many other cloud services.\n\nOur AWS training focuses on practical cloud infrastructure, application deployment, security, networking and AWS administration, helping students develop skills for modern cloud-based IT environments.\n\nThe learning journey: Cloud Fundamentals → AWS Core Services → EC2 → S3 → VPC → IAM → RDS → Deployment → Security → DevOps.\n\nLearn AWS. Build on the Cloud. Grow Your IT Career with hands-on training and real-world projects at M-Tech Computers.",
    "highlights": [
      "AWS Cloud Fundamentals & Global Infrastructure",
      "Amazon EC2, S3, VPC & IAM Hands-on Practice",
      "AWS Databases — RDS & DynamoDB Introduction",
      "Cloud Networking, Security & Deployment",
      "Practical AWS Projects — Website, 3-Tier App & CI/CD",
      "Industry-Relevant Cloud Skills for IT Careers",
      "Career Paths: AWS Cloud Engineer, Admin & Solutions Architect Pathway"
    ],
    "syllabus": [
      {
        "title": "AWS Cloud Fundamentals",
        "points": [
          "Cloud computing concepts and AWS global infrastructure",
          "Regions, Availability Zones and AWS Management Console",
          "AWS Shared Responsibility Model and cloud service models",
          "Core AWS services overview and account setup"
        ]
      },
      {
        "title": "Amazon EC2 — Cloud Servers",
        "points": [
          "Launching EC2 instances, instance types and AMIs",
          "Key pairs, security groups and Elastic IP",
          "Storage configuration and basic server management",
          "Scaling and managing compute resources on AWS"
        ]
      },
      {
        "title": "Amazon S3 — Cloud Storage",
        "points": [
          "Buckets, objects and storage classes",
          "Bucket policies, access permissions and versioning",
          "Lifecycle management and data organization",
          "Secure file and data storage on AWS"
        ]
      },
      {
        "title": "AWS VPC & Networking",
        "points": [
          "VPC, subnets, route tables and internet gateway",
          "NAT gateway, security groups and network ACLs",
          "Load balancers and basic DNS concepts (Route 53 introduction)",
          "Designing secure networks inside AWS"
        ]
      },
      {
        "title": "AWS IAM & Cloud Security",
        "points": [
          "IAM users, groups, roles and policies",
          "Authentication, access control and permissions",
          "Users → Groups → Roles → Policies → Permissions workflow",
          "Security best practices for AWS resources"
        ]
      },
      {
        "title": "AWS Databases",
        "points": [
          "Amazon RDS — database deployment and management",
          "Database security, backups and high availability",
          "Introduction to DynamoDB for NoSQL workloads",
          "Connecting applications to AWS-managed databases"
        ]
      },
      {
        "title": "AWS Application Deployment",
        "points": [
          "Deployment workflow: Application → Server → Database → Networking → Security",
          "Deploying web applications on AWS cloud infrastructure",
          "Configuring required AWS resources for production-style setups",
          "Monitoring and maintaining deployed applications"
        ]
      },
      {
        "title": "Practical AWS Projects",
        "points": [
          "Project 1 — Host a Website on AWS cloud infrastructure",
          "Project 2 — AWS 3-Tier Application (Web → Application → Database layers)",
          "Project 3 — Secure Cloud Infrastructure with networking, IAM and security controls",
          "Project 4 — Cloud Deployment with CI/CD workflow concepts"
        ]
      }
    ]
  },
  "generative-ai-agentic-ai": {
    "overview": "Generative AI enables computers to create new content such as text, images, code and other digital outputs, while Agentic AI focuses on AI systems that can plan, reason, use tools and execute multi-step tasks toward a defined goal.\n\nOur training introduces students to the technologies behind modern AI applications, including LLMs, Prompt Engineering, RAG, AI APIs, AI Agents, automation and AI-powered applications.\n\nThe learning journey: Python → AI Fundamentals → Prompt Engineering → LLMs → APIs → RAG → AI Agents → Tool Calling → Automation → AI Applications → Projects.\n\nLearn AI. Build Intelligent Applications. Create AI Agents with practical Generative AI & Agentic AI training at M-Tech Computers.",
    "highlights": [
      "Generative AI & Large Language Model Fundamentals",
      "Prompt Engineering & Structured AI Workflows",
      "RAG — Retrieval Augmented Generation Applications",
      "Agentic AI — Tool Calling, Planning & Multi-Step Tasks",
      "Build AI-Powered Applications with Python & APIs",
      "Practical AI Projects — Chatbots, RAG Assistants & Automation Agents",
      "Career Paths: AI Application Developer, LLM Developer & AI Engineer"
    ],
    "syllabus": [
      {
        "title": "Generative AI Fundamentals",
        "points": [
          "How modern Generative AI systems work and real-world applications",
          "Large Language Models, AI model concepts, tokens and context",
          "AI APIs and AI application architecture",
          "Responsible AI concepts and ethical considerations"
        ]
      },
      {
        "title": "Prompt Engineering",
        "points": [
          "Prompt structure, role and context design",
          "Few-shot prompting and structured outputs",
          "Prompt optimization and reasoning-oriented workflows",
          "AI task design for accurate and useful model responses"
        ]
      },
      {
        "title": "Large Language Models (LLMs)",
        "points": [
          "LLMs → APIs → Application → User → AI Response workflow",
          "Integrating AI models into websites, applications and business workflows",
          "Understanding model capabilities, limitations and context windows",
          "Designing LLM-powered application features"
        ]
      },
      {
        "title": "RAG — Retrieval Augmented Generation",
        "points": [
          "Documents → Embeddings → Vector Database → Retrieval → LLM → Response",
          "Connecting AI models with external knowledge sources",
          "Use cases: AI knowledge assistants, document Q&A and support bots",
          "Building RAG applications that work with your own data"
        ]
      },
      {
        "title": "Agentic AI",
        "points": [
          "AI agents that reason, plan and use tools for multi-step tasks",
          "Tool calling, function calling and agent workflows",
          "Memory, planning and multi-agent systems",
          "User Request → AI Agent → Select Tool → Execute → Analyze → Respond"
        ]
      },
      {
        "title": "AI Agents & Automation",
        "points": [
          "Customer support automation and research assistants",
          "Document processing and data analysis assistants",
          "Email and workflow automation with AI agents",
          "Coding assistants and knowledge management applications"
        ]
      },
      {
        "title": "Build AI-Powered Applications",
        "points": [
          "Python for AI applications and AI API integration",
          "REST APIs, structured data and database integration",
          "Authentication, application deployment and AI workflow integration",
          "LangChain, LangGraph and modern AI development frameworks"
        ]
      },
      {
        "title": "Practical AI Projects",
        "points": [
          "Project 1 — AI Chatbot using an LLM API",
          "Project 2 — Document AI Assistant with RAG",
          "Project 3 — AI Research Assistant workflow",
          "Project 4 — AI Customer Support Agent with predefined tools",
          "Project 5 — AI Automation Agent with multi-step connected tasks"
        ]
      }
    ]
  }
};
