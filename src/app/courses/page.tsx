'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import EnquiryTrigger from '@/components/EnquiryTrigger';

interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  duration: string;
  url: string;
}

/** CAD = 2 months, single IT = 3 months, Data Science / Web / AI = 6 months */
export function getCourseDuration(course: Pick<Course, 'title' | 'category' | 'duration'>): string {
  const title = course.title.toLowerCase();
  if (/data science|data analytic|web development|full stack|artificial intelligence|\bai\b|machine learning/.test(title)) {
    return '6 Months';
  }
  if (course.category === 'IT Course') {
    return '3 Months';
  }
  if (['Civil & Arch', 'Mechanical', 'Electrical', 'Jewellery Design'].includes(course.category)) {
    return '2 Months';
  }
  const weeksMatch = course.duration.match(/(\d+)\s*Weeks?/i);
  if (weeksMatch) {
    const weeks = Number(weeksMatch[1]);
    if (weeks <= 4) return '1 Month';
    if (weeks <= 8) return '2 Months';
    if (weeks <= 12) return '3 Months';
    return '6 Months';
  }
  return course.duration;
}

export const coursesData: Course[] = [
  // ==================== CIVIL & ARCH (14 Courses) ====================
  {
    id: 'autocad-civil-designer',
    title: 'AutoCAD Civil & Arch Course - Drafting & Design',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg',
    description: 'Learn detailed structural civil floor blueprints, wall elevation drawings, and section layout drafting configurations.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/autocad-civil/'
  },
  {
    id: 'staad-pro',
    title: 'STAAD-Pro Professional Course - Structural Analysis & Design',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_STAAD-Pro.jpg',
    description: 'Master STAAD.Pro to model, analyze, and design steel structures, concrete frames, foundations, and high-rise buildings.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/staad-pro/'
  },
  {
    id: 'etabs-structural',
    title: 'ETABS Structural Analysis & Design Course',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ETAB-1.jpg',
    description: 'Learn building analysis and structural design using ETABS, specializing in multistory framing and concrete/steel buildings.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/etabs-mastery-structural-analysis-design-course/'
  },
  {
    id: 'revit-structure',
    title: 'Revit Structure Training Course - BIM for Structural Engineering',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_REVIT-ST-1.jpg',
    description: 'Learn Building Information Modeling (BIM) for structural design, drawing production, reinforcement detailing, and collaboration.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/revit-structure/'
  },
  {
    id: 'safe-safety',
    title: 'SAFE: Workplace & Industrial Safety Certification Course',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg',
    description: 'Comprehensive occupational safety training covering industrial regulations, safety standards, and workplace risk management.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/new-course-3/'
  },
  {
    id: 'rcdc-detailing',
    title: 'Professional RCDC Course - Concrete Design & Detailing',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_STAAD-Pro.jpg',
    description: 'Learn RCDC to generate detailed structural drawings, reinforcement layouts, and bills of materials for concrete structures.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/professional-rcdc/'
  },
  {
    id: 'tekla-structures',
    title: 'Tekla Structures Training - Steel & Concrete Detailing',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_REVIT-ST-1.jpg',
    description: 'Master Tekla Structures for detailed modeling of steel structures, precast concrete modeling, detailing, and shop drawings.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/tekla-structures/'
  },
  {
    id: '3dsmax-animation',
    title: '3D Modeling & Animation with 3ds Max',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_3ds-max-int.jpg',
    description: 'Master Autodesk 3ds Max software to create architectural structures walkthroughs, complex shapes, and render frames.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/master-3d-modeling-animation-with-3ds-max/'
  },
  {
    id: 'sketchup-modeling',
    title: 'SketchUp Pro Training - 3D Modeling & Design',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Sketch-up.jpg',
    description: 'Master Google SketchUp Pro to model custom interior designs, kitchen furniture, and build fast 3D blueprints.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/sketchup-pro-training-master-3d-modeling-design/'
  },
  {
    id: 'vray-rendering',
    title: 'V-Ray for Photorealistic Rendering',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_V-ray.jpg',
    description: 'Learn detailed textures mapping, global illumination settings, and light source parameters setup in V-Ray.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/master-v-ray-for-photorealistic-rendering/'
  },
  {
    id: 'revit-architecture',
    title: 'Revit Architecture Course - BIM for Modern Design',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-ar-in.jpg',
    description: 'Learn Autodesk Revit Architecture from scratch to model photorealistic buildings, draft layouts, and generate BIM plans.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/revit-architecture/'
  },
  {
    id: 'photoshop-graphics',
    title: 'Professional Photoshop Course — Design Like a Pro',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2023_09_1.png',
    description: 'Learn photo-editing, architectural post-processing layouts, vector drawing overlays, and digital poster designs.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/professional-photoshop-mastery-course-design-like-a-pro/'
  },
  {
    id: 'billing-bec',
    title: 'Billing BE&C Training - Billing Systems & Compliance',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_QTO.jpg',
    description: 'Learn estimation, quantity surveying, contract billing, client billing, and compliance systems for civil engineering projects.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/billing-bec/'
  },
  {
    id: 'lumion-visualization',
    title: 'Lumion 10 — Create Stunning 3D Visualizations',
    category: 'Civil & Arch',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Lumion-3d.jpg',
    description: 'Learn Lumion 10 to turn 3D house structures into photorealistic animations, landscaping environments, and visual graphics.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/lumion-10-masterclass-create-stunning-3d-visualizations-fast/'
  },

  // ==================== MECHANICAL (14 Courses) ====================
  {
    id: 'autocad-mechanical',
    title: 'AutoCAD Mechanical Course - 2D & 3D Drafting',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
    description: 'Learn mechanical engineering drafting, engineering tolerances, layout creation, and standard assemblies drawing.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/autocad-course-in-india-learn-2d-3d-design-at-mtech-computers/'
  },
  {
    id: 'solidworks-mechanical',
    title: 'Professional SolidWorks Training - Learn Product Design',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Solidworks.jpg',
    description: 'Master SolidWorks 3D CAD modeling, mechanical mate assemblies, sheet metal design, and drawings documentation.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/solidworks/'
  },
  {
    id: 'catia',
    title: 'CATIA Course for Engineers & Designers - Build Real-World 3D Projects',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_catia-in.jpg',
    description: 'Learn high-end surface modeling, assembly design, part design, and sheet metal workflows using CATIA V5/V6.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/catia/'
  },
  {
    id: 'nx-cad-expert',
    title: 'Become a Certified NX-CAD Expert - Product Design',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Fusion-360.jpg',
    description: 'Master NX-CAD modeling, assembly, drafting, synchronous technology, and advanced sheet metal design.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/become-a-certified-nx-cad-expert-product-design-at-mtech-computers/'
  },
  {
    id: 'creo-parametric',
    title: 'Creo Parametric 3D CAD - Certification Course',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Creo.jpg',
    description: 'Learn Creo Parametric to create parametric 3D models, complex parts assemblies, and engineering detailed drawings.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/creo-parametric-3d-cad-certification-course/'
  },
  {
    id: 'gdt-course',
    title: 'G D & T Course for Mechanical Design & Engineering',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
    description: 'Learn Geometric Dimensioning and Tolerancing (GD&T) principles as per ASME Y14.5 standards for product design drawings.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/g-d-t-course-for-mechanical-design-engineering/'
  },
  {
    id: 'nx-cam',
    title: 'NX-CAM Training Course in India - CNC Programming for Real-World Manufacturing',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_CNC.jpg',
    description: 'Learn NX CAM for generating toolpaths, operations verification, post-processing, and multi-axis CNC milling setups.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/nx-cam-training-course-in-india-cnc-programming-for-real-world-manufacturing/'
  },
  {
    id: 'ansys-workbench',
    title: 'Ansys Workbench Training - Simulate Like a Pro',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ANSYS-WB.jpg',
    description: 'Master Finite Element Analysis (FEA) including structural, thermal, modal, and stress analyses in Ansys Workbench.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/ansys-workbench-training/'
  },
  {
    id: 'ansys-fluent',
    title: 'ANSYS Fluent for CFD Simulations',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ANSYS-CFD.jpg',
    description: 'Get job-ready by learning fluid dynamics modeling, mesh generation, heat transfer, and turbulence simulation using ANSYS Fluent.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/ansys-fluent-for-cfd-simulations/'
  },
  {
    id: 'piping-design',
    title: 'Piping Design Training - Advance Your Career',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
    description: 'Learn industrial pipe modeling routing rules, valves, flanges, P&ID schematics, and stress analysis workflows.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/piping-design-training/'
  },
  {
    id: 'sp3d-piping',
    title: 'SP3D Course for Piping & Plant Design - MTech Computers India',
    category: 'Mechanical',
    image: '/sp3d.png',
    description: 'Master SmartPlant 3D (SP3D) modeling rules for heavy plant layout design, piping systems, and isometric drawings.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/sp3d-course-for-piping-plant-design/'
  },
  {
    id: 'e3d-plant',
    title: 'Become an E3D Plant Design Pro - Expert Training at MTech Computers',
    category: 'Mechanical',
    image: '/e3d.png',
    description: 'Master AVEVA Everything 3D (E3D) software for full industrial plant layouts modeling, beams, and piping loops.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/become-an-e3d-plant-design-pro/'
  },
  {
    id: 'revit-mep-design',
    title: 'Revit MEP Design | HVAC, Electrical & Plumbing Training',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-MEP.jpg',
    description: 'Master Revit MEP to model HVAC duct systems, mechanical pipes, electrical circuits, and plumbing networks within BIM.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/revit-mep-design-hvac-electrical-plumbing-training/'
  },
  {
    id: 'master-cam',
    title: 'CAM Programming for CNC Jobs',
    category: 'Mechanical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_CNC-3.jpg',
    description: 'Learn manual G-code/M-code programming and toolpath generation for CNC turning and milling operations.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/cam-programming-course/'
  },

  // ==================== IT COURSE (12 Courses) ====================
  {
    id: 'cpp-programming',
    title: 'C++ Programming Course (Beginner to Advanced)',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_01_c-1.jpg',
    description: 'Master systems programming using C++, focusing on memory management, object-oriented design, and algorithms.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/how-to-market-yourself-as-a-coach-or-consultant/'
  },
  {
    id: 'java-programming',
    title: 'Java Programming from Scratch',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_JAVA.jpg',
    description: 'Learn object-oriented programming principles in Java, including data structures, multithreading, and GUI creation.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/java-programming/'
  },
  {
    id: 'javascript',
    title: 'JavaScript from Basics to Advanced',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
    description: 'Go from beginner to advanced JavaScript developer by learning DOM manipulation, asynchronous programming, and modern JS syntax.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/javascript/'
  },
  {
    id: 'full-stack-web',
    title: 'Full Stack Web Development',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_web-design-Int.jpg',
    description: 'Comprehensive training in modern full stack development covering frontend, backend, database architecture, and deployment.',
    duration: '16 Weeks',
    url: 'https://mtechcomputers.in/courses/master-full-stack-web-development/'
  },
  {
    id: 'mastering-artificial-intelligence',
    title: 'Artificial Intelligence — From Basics to Real-World Applications',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
    description: 'Learn the principles, tools, and real-world applications of Artificial Intelligence from machine learning to neural networks.',
    duration: '12 Weeks',
    url: 'https://mtechcomputers.in/courses/mastering-artificial-intelligence-from-basics-to-real-world-applications/'
  },
  {
    id: 'data-science',
    title: 'Data Science Course - Learn with MTech Computers',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
    description: 'Step into data science with Python programming, data analytics, visualization, Pandas, NumPy, and statistical analysis.',
    duration: '12 Weeks',
    url: 'https://mtechcomputers.in/courses/data-science-course-learn-with-mtech-computers/'
  },
  {
    id: 'data-analytic',
    title: 'Data Analytic Course - Learn with MTech Computers',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
    description: 'Learn data analytics from scratch — Excel, SQL, Power BI, Python basics, dashboards, and business insight reporting for job-ready roles.',
    duration: '12 Weeks',
    url: 'https://mtechcomputers.in/courses/data-science-course-learn-with-mtech-computers/'
  },
  {
    id: 'react-dev-scratch',
    title: 'React Development from Scratch',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
    description: 'Build your career in frontend development by mastering React hooks, routing, state management, and API integrations.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/master-react-development-from-scratch/'
  },
  {
    id: 'html-css-sass',
    title: 'HTML, CSS & SASS - Web Design Course',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
    description: 'Learn the core building blocks of web design. Craft gorgeous responsive user interfaces using HTML5, CSS3, Flexbox, and SASS.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/new-course-2/'
  },
  {
    id: 'golang-programming',
    title: 'Golang Programming - Learn Go Language',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_01_Python.jpg',
    description: 'Master Go programming language (Golang) designed by Google, focusing on concurrency, speed, and backend system development.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/golang-programming/'
  },
  {
    id: 'master-node-js',
    title: 'Node.js Development Course',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_PHP.jpg',
    description: 'Learn server-side development using Node.js, Express.js, and databases like MongoDB/SQL to build scalable backend systems.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/master-node-js-development-course-in-india/'
  },
  {
    id: 'master-angular',
    title: 'Learn Angular from Basics to Deployment',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_01_ASP.net_.jpg',
    description: 'A comprehensive guide to learning the Angular framework, components, routing, services, and deploying production-ready apps.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/master-angular-from-basics-to-deployment/'
  },
  {
    id: 'master-react-js',
    title: 'React JS: Build Modern Web Apps',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
    description: 'Master React JS to build fast, responsive, and dynamic user interfaces for modern single-page web applications.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/master-react-js/'
  },

  // ==================== ELECTRICAL (6 Courses) ====================
  {
    id: 'autocad-electrical',
    title: 'Professional AutoCAD Electrical Course - Control Systems & Schematics',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_acad-EE-In.jpg',
    description: 'Learn schematic layouts creation, PLC I/O wire diagrams, panel layouts design, and smart bill of materials generation.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/professional-autocad-electrical/'
  },
  {
    id: 'revit-mep-electrical',
    title: 'Revit MEP Design Course — Design Smarter, Build Faster',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-MEP.jpg',
    description: 'Learn Revit MEP modeling for electrical conduits, cable trays, lighting plans, and electrical system coordination.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/revit-mep/'
  },
  {
    id: 'pcb-design',
    title: 'Advanced PCB Design & Manufacturing Course',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Eplan.jpg',
    description: 'Learn circuit schematic capture, PCB layout routing, component footprints creation, and manufacturing Gerber file generation.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/advanced-pcb-design-manufacturing/'
  },
  {
    id: 'etap-electrical',
    title: 'ETAP Electrical Engineering Course - Power System Design & Analysis',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_MATLAB-1.jpg',
    description: 'Master ETAP for power system single-line diagrams, load flow studies, short circuit analysis, and protective relay settings.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/etap-electrical-engineering/'
  },
  {
    id: 'matlab',
    title: 'MATLAB Programming Course - Data Analysis & Algorithm Development',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_MATLAB-1.jpg',
    description: 'Learn MATLAB programming syntax, matrix operations, system simulation, and signal analysis algorithm design.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/matlab-programming/'
  },
  {
    id: 'plc-scada',
    title: 'PLC SCADA Automation Training - Industrial Control Systems',
    category: 'Electrical',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_PLC-1.jpg',
    description: 'Learn industrial automation programming including PLC ladder logic, SCADA interface development, and HMI control.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/plc-scada-automation-training/'
  },

  // ==================== PROJECT PLANNING & MANAGEMENT (5 Courses) ====================
  {
    id: 'primavera-p6',
    title: 'Primavera P6 Training - Project Scheduling & Planning',
    category: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
    description: 'Learn Oracle Primavera P6 to build project schedules, track progress, manage Gantt charts, and analyze critical path activities.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/primavera-p6/'
  },
  {
    id: 'msp-training',
    title: 'MSP Training for Cloud & IT Pros',
    category: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_MSP.jpg',
    description: 'Learn Managed Service Provider (MSP) systems and operations management for cloud infrastructure and IT support.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/msp-training-for-cloud-it-pros/'
  },
  {
    id: 'strategic-ppm',
    title: 'Strategic PPM Training - Project Portfolio Management',
    category: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
    description: 'Learn to manage multiple projects simultaneously, align portfolios with business strategies, and optimize resource allocation.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/strategic-ppm-training-master-project-portfolio-management/'
  },
  {
    id: 'pmp-certification',
    title: 'PMP Certification Training - Project Management Like a Pro',
    category: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
    description: 'Prepare for the PMP exam. Master project life cycles, risk management, scheduling, budget control, and agile workflows.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/pmp-certification-training/'
  },
  {
    id: 'six-sigma',
    title: 'Six Sigma Certification Course - DMAIC & Process Excellence',
    category: 'Project Planning & Management',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
    description: 'Learn process improvement methodologies, statistical tools, lean principles, and DMAIC project cycles management.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/six-sigma-certification/'
  },

  // ==================== ACCOUNTING & COMPUTER (6 Courses) ====================
  {
    id: 'ms-office',
    title: 'MS Office - Boost Productivity with Expert Training',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Excel.jpg',
    description: 'Gain full productivity mastery in MS Word, PowerPoint presentations, Excel worksheets, and Outlook email clients.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/ms-office/'
  },
  {
    id: 'tally-prime',
    title: 'Expert Tally Prime Course - Accounting, GST & Business Finance',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
    description: 'Master Tally Prime software for ledger bookkeeping, voucher entry, inventory tracking, GST billing, and payroll auditing.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/expert-tally-prime/'
  },
  {
    id: 'gst-certification',
    title: 'GST Certification Course - Tax Compliance & Filing',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
    description: 'Understand Good and Services Tax (GST) laws, tax rate structures, ledger compliance, and returns filing operations.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/gst-certification/'
  },
  {
    id: 'advanced-excel',
    title: 'Advanced Excel — Data, Automation & Analysis',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Excel.jpg',
    description: 'Learn VLOOKUP, pivot tables, complex data formulas, financial functions, and macro automation in Microsoft Excel.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/advanced-excel/'
  },
  {
    id: 'basic-computer',
    title: 'Basic Computer Course for Beginners - Build Essential Digital Skills',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_01_C.jpg',
    description: 'Start from absolute scratch. Learn basic OS navigation, typing skills, browsing safeties, and digital tool configurations.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/basic-computer/'
  },
  {
    id: 'sap-certification',
    title: 'SAP Certification Course - ERP Solutions for Business Success',
    category: 'Accounting & Computer',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
    description: 'Learn SAP ERP modules including Financial Accounting (FI), controlling (CO), and business materials management processes.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/sap-certification-course-erp-solutions-for-business-success/'
  },

  // ==================== JEWELLERY DESIGN (1 Course) ====================
  {
    id: 'rhino-matrix',
    title: 'Rhino Matrix 3D: Advanced Modeling & Rendering Course',
    category: 'Jewellery Design',
    image: '/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-3.jpg',
    description: 'Learn Rhino 3D & Matrix software to draft detailed gold/diamond ornaments, rings, and generate 3D rendering designs.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/rhino-matrix-3d/'
  },

  // ==================== DIGITAL MARKETING (6 Courses) ====================
  {
    id: 'google-ads',
    title: 'Google Ads & PPC Certification Training',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Master Google Search ads, display campaigns, bidding structures, conversion auditing, and pay-per-click optimizations.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/google-ads-ppc-training/'
  },
  {
    id: 'fb-insta-ads',
    title: 'Facebook & Instagram Advertising Course',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Master Meta Ads Manager, pixel retargeting setup, custom audiencing, lookalikes, and social graphic funneling systems.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/facebook-instagram-ads/'
  },
  {
    id: 'seo-sem',
    title: 'SEO & Search Engine Marketing (SEM) Course',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Master search engine rankings, keyword indexing, crawl optimizations, backlinks, search console audits, and SEM campaigns.',
    duration: '6 Weeks',
    url: 'https://mtechcomputers.in/courses/seo-search-engine-marketing/'
  },
  {
    id: 'canva-graphics',
    title: 'Canva Graphic Design for Beginners & Marketers',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Learn layout templates setups, vectors masking, branding kits, animation overlays, and professional digital posters drafting.',
    duration: '2 Weeks',
    url: 'https://mtechcomputers.in/courses/canva-graphic-design/'
  },
  {
    id: 'keyword-research',
    title: 'Advanced Keyword Research & Strategy',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Learn search volume audits, competitor difficulty analysis, intent tracking, long-tail indexing, and content structure mapping.',
    duration: '2 Weeks',
    url: 'https://mtechcomputers.in/courses/keyword-research-strategy/'
  },
  {
    id: 'lead-generation',
    title: 'B2B & B2C Lead Generation Course',
    category: 'Digital Marketing',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
    description: 'Learn email outreach scripts, cold funnels setups, LinkedIn scraping, lead magnet creation, and landing pages setups.',
    duration: '4 Weeks',
    url: 'https://mtechcomputers.in/courses/lead-generation-masterclass/'
  },
  {
    id: 'mern-stack-web-development',
    title: 'MERN Stack Web Development Course - MongoDB, Express, React & Node',
    category: 'IT Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_web-design-Int.jpg',
    description: 'Learn full-stack web development using MongoDB, Express.js, React, and Node.js. Build responsive databases, API gateways, and interactive web interfaces.',
    duration: '6 Months',
    url: 'https://mtechcomputers.in/courses/mern-stack-web-development/'
  },
  {
    id: 'autocad-2d-piping-design',
    title: 'AutoCAD 2D Piping Design Course',
    category: 'Piping Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
    description: 'Learn AutoCAD 2D drafting, piping symbols, isometric drawings, layer management, and Bill of Materials (BOM) preparation.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/autocad-2d-piping-design/'
  },
  {
    id: 'smartplant-3d-sp3d',
    title: 'SmartPlant 3D (SP3D) Plant Modeling Course',
    category: 'Piping Course',
    image: '/sp3d.png',
    description: 'Master 3D plant design modeling, clash detection, design automation, and multi-discipline collaboration workflows using SP3D.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/smartplant-3d-sp3d/'
  },
  {
    id: 'everything-3d-e3d',
    title: 'Everything 3D (E-3D) Aveva Plant Design Course',
    category: 'Piping Course',
    image: '/e3d.png',
    description: 'Learn E3D modeling, equipment creation, pipework sequences, isometric extraction, structure modeling, and support configurations.',
    duration: '8 Weeks',
    url: 'https://mtechcomputers.in/courses/everything-3d-e3d/'
  },
  {
    id: 'autocad-plant-3d',
    title: 'AutoCAD Plant 3D Training',
    category: 'Piping Course',
    image: '/images/caddeskindia_com_wp-content_uploads_2021_03_civil-3d.jpg',
    description: 'Learn AutoCAD Plant 3D for P&ID schematics, 3D piping models, spec editor, isometric and orthographic views, report creator, and plant project workflows.',
    duration: '2 Months',
    url: 'https://mtechcomputers.in/courses/autocad-plant-3d/'
  }
];

const categoryParamMap: Record<string, string> = {
  'all': 'All',
  'information technology': 'IT Course',
  'it course': 'IT Course',
  'cs/it': 'IT Course',
  'civil & architecture': 'Civil & Arch',
  'civil & arch': 'Civil & Arch',
  'civil/architecture': 'Civil & Arch',
  'mechanical': 'Mechanical',
  'mechanical/automobile': 'Mechanical',
  'piping': 'Piping Course',
  'piping course': 'Piping Course',
  'electrical': 'Electrical',
  'electrical/electronics': 'Electrical',
  'project planning': 'Project Planning & Management',
  'project planning & management': 'Project Planning & Management',
  'jewellery design': 'Jewellery Design',
  'jewellery design courses': 'Jewellery Design',
  'accounting': 'Accounting & Computer',
  'accounting & computer': 'Accounting & Computer',
  'accounting & computer courses': 'Accounting & Computer',
  'digital marketing': 'Digital Marketing',
  'digital marketing courses': 'Digital Marketing'
};

const categories = [
  'All',
  'Civil & Arch',
  'Mechanical',
  'Piping Course',
  'IT Course',
  'Electrical',
  'Project Planning & Management',
  'Accounting & Computer',
  'Jewellery Design',
  'Digital Marketing'
];

function CoursesListContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const mapped = categoryParamMap[categoryParam.toLowerCase()];
      if (mapped) {
        setActiveFilter(mapped);
      }
    }
  }, [searchParams]);

  const filteredCourses = coursesData.filter(course => {
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">M-Tech Computers Courses</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Courses
          </p>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Controls Bar: Categories & Search */}
          <div className="courses-controls-bar">
            {/* Categories filter */}
            <div className="courses-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`btn ${activeFilter === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '8px 20px', fontSize: '14px' }}
                  id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {cat === 'All' ? 'All Domains' : cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="courses-search-wrap">
              <input
                type="text"
                className="subpage-input"
                placeholder="Search software (e.g. AutoCAD, SolidWorks, Java)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="course-search-input"
              />
            </div>
          </div>

          {/* Results Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid" id="courses-catalog-grid">
              {filteredCourses.map((course) => (
                <div className="course-card" key={course.id}>
                  {/* Category Image Header */}
                  <div className="course-img-wrap-catalog" style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={imgErrors[course.id] ? '/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-1.jpg' : course.image} 
                      alt={course.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                      id={`course-thumbnail-${course.id}`}
                      onError={() => setImgErrors(prev => ({ ...prev, [course.id]: true }))}
                    />
                  </div>
                  
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-desc">{course.description}</p>
                    <div style={{ marginBottom: '16px', fontSize: '13px' }}>
                      <p style={{ margin: '4px 0' }}><strong>⏱ Duration:</strong> {getCourseDuration(course)}</p>
                    </div>
                    <div className="course-footer">
                      <span className="course-tag">{course.category}</span>
                      <Link 
                        href={`/courses/${course.id}`} 
                        className="course-details-link" 
                        id={`view-course-${course.id}`}
                      >
                        View Details & Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '60px 0', color: 'var(--clr-text-muted)', textAlign: 'center' }}>
              <h3>No courses found matching your criteria.</h3>
              <p style={{ marginTop: '10px' }}>Try searching another term or resetting filters.</p>
              <button 
                className="btn btn-primary" 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                style={{ marginTop: '20px' }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Banner */}
          <div style={{ marginTop: '80px', padding: '40px', background: 'var(--clr-bg-alt)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid var(--clr-border)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Need Custom Training?</h3>
            <p style={{ color: 'var(--clr-text-muted)', maxWidth: '600px', marginBottom: '24px', lineHeight: '1.6' }}>
              We conduct customized training sessions for engineering colleges, polytechnics, and corporate firms.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <EnquiryTrigger className="btn btn-primary" id="custom-training-enquiry-btn">
                Enquire for Batch
              </EnquiryTrigger>
              <Link href="/our-training-methodology" className="btn btn-dark">
                Our Methodology
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <h3>Loading Courses...</h3>
      </div>
    }>
      <CoursesListContent />
    </Suspense>
  );
}




