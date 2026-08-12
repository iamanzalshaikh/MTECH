'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coursesData } from '../page';
import Plant3DSyllabusGrid, { plant3dSyllabusSections } from '@/components/Plant3DSyllabusGrid';
import { courseDetails } from '@/data/courseDetails';
import { courseDetailsOriginal } from '@/data/courseDetailsOriginal';

// Detailed syllabus mapping for accordions
const detailedSyllabusMapping: Record<string, { title: string; points: string[] }[]> = {
  'autocad-civil-arch': [
    { title: 'Chapter 1: Introduction to CAD & Workspace Setup', points: ['Overview of AutoCAD GUI & Navigation', 'System requirements and configuration settings', 'Unit settings, Limits, and Drafting Settings', 'Template creation (.dwt) and managing file formats (.dwg, .dxf)'] },
    { title: 'Chapter 2: Coordinate Systems & Basic Draw Tools', points: ['Absolute, Relative, and Polar Coordinate systems', 'Drawing Lines, Polylines, Circles, Arcs, and Rectangles', 'Object Snapping (OSNAP) and Ortho configurations', 'Construction Lines and Ray tracing commands'] },
    { title: 'Chapter 3: Advanced Editing & Layer Management', points: ['Modify commands: Move, Copy, Rotate, Scale, Trim, Extend', 'Mirroring, Offset drafting, Fillets, and Chamfers', 'Creating and organizing Layers, Colors, and Line types', 'Layer state management and visibility controls'] },
    { title: 'Chapter 4: Dimensions, Annotations & Hatching', points: ['Creating and modifying Dimension Styles', 'Linear, Aligned, Angular, and Radial dimensions', 'Adding Multi-line Text and Single-line annotations', 'Hatch patterns, gradients, and boundary configurations'] },
    { title: 'Chapter 5: Blocks, Layouts, Plotting & Publishing', points: ['Creating and inserting Blocks (Static & Dynamic)', 'Attribute definitions and data extraction', 'Paper Space vs Model Space layouts', 'Plotting styles, scaling configurations, and PDF publishing'] }
  ],
  'solidworks': [
    { title: 'Chapter 1: Sketching Basics & Sketch Relations', points: ['SolidWorks GUI, Navigation, and templates', 'Creating 2D Sketches using line, arc, circle, rectangle', 'Applying Geometric Relations (Coincident, Tangent, Parallel)', 'Smart Dimensioning and fully defining sketches'] },
    { title: 'Chapter 2: Part Modeling & 3D Features', points: ['Extruded Boss/Base and Extruded Cut', 'Revolved Boss/Base and Revolved Cut', 'Sweep Boss/Base (Path & Guide curves)', 'Lofted Boss/Base and Lofted Cut'] },
    { title: 'Chapter 3: Editing Features & Detailing', points: ['Applying Fillets, Chamfers, and Shelling', 'Linear & Circular Patterns, Mirroring features', 'Adding Draft angles and Ribs', 'Creating Reference Planes, Axes, and Coordinate systems'] },
    { title: 'Chapter 4: Bottom-Up & Top-Down Assembly', points: ['Inserting parts into assembly templates', 'Standard Mates (Coincident, Parallel, Concentric)', 'Advanced & Mechanical Mates (Gear, Width, Slot, Screw)', 'Interference detection and Exploded views'] },
    { title: 'Chapter 5: Drafting, Drawings & FEA Basics', points: ['Generating Standard 3-Views, Model Views, Projected Views', 'Inserting Dimensions (Model Items) and Annotations', 'Bill of Materials (BOM) creation and ballooning', 'Finite Element Analysis (FEA) basics using SimulationXpress'] }
  ],
  'catia': [
    { title: 'Chapter 1: Sketcher Workbench', points: ['CATIA V5 user interface & navigation controls', 'Profile toolbar: Line, Circle, Spline, Axis', 'Constraint toolbar: Dimensional & Geometric constraints', 'Sketch analysis & diagnostics for fully constrained shapes'] },
    { title: 'Chapter 2: Part Design (Solid Modeling)', points: ['Sketch-Based Features: Pad, Pocket, Shaft, Groove', 'Hole wizard, Slot, Rib, and Multi-sections Solid', 'Dress-Up Features: Fillets, Chamfers, Drafts, Shell', 'Transformation Features: Translation, Rotation, Mirror, Patterns'] },
    { title: 'Chapter 3: Wireframe and Generative Shape Design', points: ['Creating Reference points, lines, and planes', 'Extrude, Revolve, and Sweep surface operations', 'Offset surfaces, Fill operations, and boundary extraction', 'Surface operations: Join, Split, Trim, and Fillet'] },
    { title: 'Chapter 4: Assembly Design Workbench', points: ['Product structure tree & inserting existing components', 'Applying constraints: Coincidence, Contact, Offset, Angle', 'Exploding assemblies and Clash analysis', 'Bill of Materials (BOM) generation'] },
    { title: 'Chapter 5: DMU Kinematics & Drafting', points: ['Creating Joints: Revolute, Prismatic, Cylindrical, Screw', 'Defining commands & simulating mechanism movement', 'Generating 2D drawings from 3D models', 'Adding projections, sectional views, and details dimensions'] }
  ],
  'autocad-mechanical': [
    { title: 'Chapter 1: Mechanical Drafting Standards', points: ['Setting up drawing sheets (A4, A3, A2 sizes)', 'Understanding First Angle vs Third Angle Projection', 'Geometrical tolerancing and surface finish symbols', 'Standard limits, fits, and tolerances tables'] },
    { title: 'Chapter 2: Draw & Modify Mechanical Profiles', points: ['Creating precise mechanical sketches', 'Filleting shafts, grooving, and keyway slots design', 'Creating helical springs and thread representations', 'Geometric Constraints configuration'] },
    { title: 'Chapter 3: Assembly Configurations & Views', points: ['Detailing assembly layouts of mechanical parts', 'Creating sectional views and offset sections', 'Isometric drawings and orthographic projections', 'Dimensioning shafts, gears, and structural joints'] },
    { title: 'Chapter 4: Bill of Materials & Balloons', points: ['Creating parts lists and Bill of Materials (BOM)', 'Adding automatic balloons to assemblies', 'Interfacing tables with databases', 'Exporting parts list to MS Excel'] },
    { title: 'Chapter 5: Industry Projects', points: ['Design of Flange Coupling assembly', 'Design of Spur Gear / Bevel Gear profiles', 'Creating detailed shop drawings for a Gearbox assembly'] }
  ],
  'autocad-electrical': [
    { title: 'Chapter 1: Electrical Schematic Templates', points: ['Electrical project structure creation', 'Configuring template sheets and description tables', 'IEC vs ANSI standards workspace configuration', 'Grid, Snap, and wire spacing configuration'] },
    { title: 'Chapter 2: Wire Schematics & Component Links', points: ['Drawing wires, multiple bus routing, and wire gaps', 'Automatic wire numbering and signal arrows setup', 'Inserting schematic components from icon menu', 'Parent-child component relationships and cross-referencing'] },
    { title: 'Chapter 3: Panel Layouts & Footprints', points: ['Generating smart panel layouts from schematics', 'Inserting cabinet footprints and DIN-rails', 'Configuring wire ducts and terminal blocks', 'Adding wire numbers and nameplates'] },
    { title: 'Chapter 4: PLC I/O Interfacing', points: ['Inserting PLC I/O modules (Parametric & Non-Parametric)', 'Addressing PLC modules and linking with schematics', 'Interfacing spreadsheets to import PLC wire addresses', 'Configuring PLC wire terminal tags'] },
    { title: 'Chapter 5: Automatic Reports Generation', points: ['Generating Bill of Materials (BOM) for panel parts', 'Creating Wire Connection lists and Cable schedules', 'Creating Terminal Plans and PLC reports', 'Exporting project report files to Excel/PDF formats'] }
  ],
  'nx-cad': [
    { title: 'Chapter 1: CNC Machine Coordinates & Setup', points: ['Introduction to CNC machining principles', 'Understanding G54-G59 coordinate systems', 'Absolute (G90) vs Incremental (G91) programming', 'M-codes for spindle, coolant, and gear ranges control'] },
    { title: 'Chapter 2: Manual G-Code & M-Code Programming', points: ['Linear Interpolation (G00, G01)', 'Circular Interpolation (G02, G03)', 'Canned cycles for Drilling (G81-G89)', 'Canned cycles for Threading and Pocketing'] },
    { title: 'Chapter 3: Toolpath Generation & Feeds', points: ['Configuring Spindle Speed (S) and Feed Rate (F)', 'Selecting appropriate cutting tools (End mill, Ball nose)', 'Machining allowances and cutting depth parameters', 'Roughing vs Finishing toolpaths'] },
    { title: 'Chapter 4: Lathe & Turning Configurations', points: ['G-codes for turning operations (G71, G72 cycles)', 'Threading cycles (G76) and grooving cycles', 'Setting up tools in turrets', 'Workpiece zero setting on lathes'] },
    { title: 'Chapter 5: NX CAM Verification & Simulation', points: ['Setting up MCS (Machine Coordinate System) in NX', 'Creating Operations: Floor/Wall milling, Cavity Milling', 'Simulating toolpaths and verifying material removal', 'Post-processing G-codes for Fanuc, Siemens, and Haas controllers'] }
  ],
  'plc-scada': [
    { title: 'Chapter 1: Programmable Logic Controllers (PLC) Architecture', points: ['Overview of PLC hardware, wiring, and power supply', 'Input/Output modules (digital, analog, RTD)', 'Processor/CPU scan cycle operation', 'Hardware troubleshooting and electrical diagram auditing'] },
    { title: 'Chapter 2: PLC Programming & Industrial Logic', points: ['Ladder Logic (LD) fundamentals and standard rules', 'Logic gate simulations (AND, OR, NOT, XOR)', 'Configuring memory registers and binary logic flags', 'Using Timer (TON, TOF) and Counter (CTU, CTD) parameters'] },
    { title: 'Chapter 3: Advanced PLC Operations', points: ['Math instructions, comparison, and data move operations', 'Analog scaling and signal conditioning (4-20mA, 0-10V)', 'PID loop tuning configurations for flow/temp systems', 'Simulation setups with Siemens TIA Portal or LogixPro'] },
    { title: 'Chapter 4: SCADA & HMI Dashboard Design', points: ['SCADA architecture and tag database creation', 'HMI screen layouts drafting and navigation menus', 'Creating visual animations (colors, sliders, fill levels)', 'Configuring alarm systems, logging levels, and safety messages'] },
    { title: 'Chapter 5: Industrial Communication & Data Logging', points: ['Modbus, Profibus, and Ethernet/IP configurations', 'Creating real-time and historical data trend graphs', 'Database linking, SQL parameters, and report generation', 'Final integration project: automated sorting conveyor system'] }
  ],
  'mern-stack-web-development': [
    { title: 'Chapter 1: MongoDB & Database Design', points: ['Document model, collections, and database connections', 'Schema design with Mongoose models', 'CRUD operations, validation, and advanced queries', 'Database indexing, aggregation framework, and Atlas deployment'] },
    { title: 'Chapter 2: Express.js REST APIs', points: ['Routing and HTTP request/response methods', 'Building RESTful web services and API endpoints', 'Creating custom middleware and request validation', 'Global error handling and backend security practices'] },
    { title: 'Chapter 3: React.js Frontend Development', points: ['Functional components, JSX structure, and styling', 'Component state management, props, and standard Hooks (useState, useEffect)', 'React Router for multi-page layouts and SPA routing', 'Global state management (Context API or Redux Toolkit)'] },
    { title: 'Chapter 4: Node.js Core Backend', points: ['Event Loop, asynchronous programming, and callbacks', 'File system operations and streams', 'Building web servers using core HTTP modules', 'Package management (NPM) and environmental variables config'] },
    { title: 'Chapter 5: Full Stack Integration & Deployment', points: ['Connecting React frontend with Express backend', 'JWT user authentication and route protection', 'Uploading files and managing assets on cloud storage', 'Deploying to cloud platforms (Vercel/Render) and Git workflows'] }
  ],
  'autocad-2d-piping-design': [
    { title: 'Chapter 1: Piping Design Theory & ASME B31.3 Standards', points: ['Introduction to industrial piping systems and Oil & Gas projects', 'ASME B31.3 process piping code regulations and safety calculations', 'Plot plan development, equipment layout principles, and line specifications', 'Material selection standards, pipe schedules, and component classifications'] },
    { title: 'Chapter 2: AutoCAD Interface & Workspace Setup', points: ['Familiarize with the AutoCAD workspace, tools, and coordinate systems', 'Setting units, drawing limits, and custom drafting templates', 'Line, polyline, circle, and basic geometric drawing tools', 'Layers management and color coding standards for piping'] },
    { title: 'Chapter 3: Piping Symbols & P&ID Schematics', points: ['Using industry-standard piping symbols (valves, fittings, instruments)', 'Drafting process and instrumentation diagrams (P&ID) from schematics', 'Creating reusable symbol blocks for standard components', 'Handling text annotations, leader lines, and drafting scales'] },
    { title: 'Chapter 4: Creating 2D Piping Layouts & Isometric Drawings', points: ['Drafting accurate 2D piping plans and elevations', 'Routing pipelines with correct fittings, inline valves, and supports', 'Setting up isometric grids and switching planes (Isoplanes)', 'Drafting 2D isometric piping drawings (spools and general layouts)'] },
    { title: 'Chapter 5: BOM Preparation & Plotting', points: ['Compiling a Bill of Materials (BOM) from piping drafts', 'Creating layout sheets, title blocks, and scaling views', 'Plotting, printing configurations, and exporting PDF project packages', 'Final project: complete shop piping isometric drawing and BOM'] }
  ],
  'smartplant-3d-sp3d': [
    { title: 'Chapter 1: Introduction to SP3D & Plant Modeling', points: ['Overview of SmartPlant 3D (SP3D) architecture and database systems', 'SP3D interface navigation, views, and workspace setup', 'Defining coordinate systems, grids, and reference planes', 'Multi-discipline project environment setup and privileges'] },
    { title: 'Chapter 2: 3D Equipment Modeling', points: ['Creating standard and custom equipment models (pumps, vessels, exchangers)', 'Placing and orienting equipment in coordinate space', 'Adding nozzles, configuring sizing, and setting coordinate positions', 'Modifying equipment primitives and parameter structures'] },
    { title: 'Chapter 3: 3D Piping Design & Routing', points: ['Routing pipelines in 3D using specification-driven catalogs', 'Placing inline components: valves, flanges, gaskets, instruments', 'Creating slope piping (gravity drain) and headers routing', 'Managing piping specs, branching rules, and insulation options'] },
    { title: 'Chapter 4: Clash Detection & Design Automation', points: ['Running real-time clash detection audits on the 3D model', 'Identifying and resolving soft and hard interferences', 'Automating repetitive design tasks via rule settings', 'Inspecting piping connectivity, data sanity, and integrity checks'] },
    { title: 'Chapter 5: Reports & Isometric Extraction', points: ['Setting up multi-discipline collaboration filters', 'Extracting piping isometric drawings using ISOGEN configurations', 'Generating bill of materials (BOM), line lists, and equipment lists', 'Exporting and publishing model files for review and construction'] }
  ],
  'everything-3d-e3d': [
    { title: 'Chapter 1: E3D Introduction & Project Setup', points: ['Everything 3D (E3D) system structure and project hierarchy', 'Creating sites, zones, and equipment folders', 'Navigating the 3D graphic view, Explorer, and property panels', 'Advanced copy, paste, delete, measurement, and rotation tools'] },
    { title: 'Chapter 2: Equipment Module Modeling', points: ['Starting equipment application and managing hierarchies', 'Creating equipment using primitives (cylinders, boxes, cones)', 'Positioning nozzles, selecting sizes, and setting alignments', 'Importing equipment shapes and modifying templates'] },
    { title: 'Chapter 3: Pipework Application & Routing', points: ['Creating piping specifications, heads, and tails in E3D', 'Routing pipelines manually and using auto-route tools', 'Placing valves, elbows, tees, and inline instruments', 'Running piping clash checks and extracting piping isometrics'] },
    { title: 'Chapter 4: Supports & Structures', points: ['Introduction to E3D structural steel module', 'Modeling columns, beams, framework, and plates grids', 'Creation of standard pipe supports, ancillary supports, and anchors', 'Modeling trunnions, shoes, and custom support configurations'] },
    { title: 'Chapter 5: Draw & Drafting Module', points: ['Introduction to E3D Draw module for drawing production', 'Creating department/registry structures and custom sheets', 'Creating view layouts, limits, and projection representations', 'Adding dimensions, labels, symbols, and exporting draft files to DXF'] }
  ],
  'autocad-plant-3d': plant3dSyllabusSections.map((section) => ({
    title: section.title,
    points: section.topics,
  })),
};

// Duplicate-topic courses (same underlying software, listed twice under
// different site categories) reuse the one hand-authored syllabus rather
// than maintaining two copies.
detailedSyllabusMapping['sp3d-piping'] = detailedSyllabusMapping['smartplant-3d-sp3d'];
detailedSyllabusMapping['e3d-plant'] = detailedSyllabusMapping['everything-3d-e3d'];

// Course FAQ list
const faqList = [
  { q: 'What is the duration of this training course?', a: 'CAD courses typically run for 2 months, single IT courses for 3 months, and Data Science / Web Development programs for 6 months, depending on batch schedules.' },
  { q: 'Is the certification internationally valid?', a: 'Yes, M-Tech Computers certifications are ISO 9001:2015 certified and recognized globally across major engineering and design companies.' },
  { q: 'Will I receive placement assistance after completing the course?', a: 'Yes, we provide 100% placement support, mock interviews, and share weekly job alerts through our dedicated portal, Career Desk.' },
  { q: 'Are study materials provided during training?', a: 'Yes, we provide free textbooks, workbooks, practice sheets, and lifetime access to our online digital student panel.' },
  { q: 'Do we get to work on live industrial projects?', a: 'Yes, the syllabus includes 2 to 3 live projects mirroring actual industrial design tasks to build your portfolio.' }
];

export default function CourseDetailPage({ params }: { params: React.Usable<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;
  const course = coursesData.find((c) => c.id === id);

  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [syllabusSubmitted, setSyllabusSubmitted] = useState(false);

  if (!course) {
    notFound();
  }

  const courseImg = course.image || '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg';

  // Priority: real caddeskindia.com scrape, then original hand-authored content
  // (for courses caddesk doesn't offer), then the legacy generic mapping/default.
  const realDetails = courseDetails[id] || courseDetailsOriginal[id];

  const syllabus = (realDetails && realDetails.syllabus.length > 0 ? realDetails.syllabus : null) || detailedSyllabusMapping[id] || [
    { title: 'Chapter 1: Introduction & Workspace Setup', points: ['User interface & navigation controls', 'System requirements and basic configurations', 'Unit settings and coordinate layouts'] },
    { title: 'Chapter 2: Core Drawing Commands', points: ['Creating basic geometry shape profiles', 'Precision tools, snapping parameters, grids', 'Constructive draw features'] },
    { title: 'Chapter 3: Editing and Modify Features', points: ['Modifying existing elements (move, copy, rotate, scale)', 'Layer controls, color layouts, and line formats', 'Dimensioning configurations'] },
    { title: 'Chapter 4: Intermediate Annotations & Blocks', points: ['Adding single-line and multi-line texts', 'Hatching patterns, scaling layouts', 'Block structures creation'] },
    { title: 'Chapter 5: Projects, Plotting & Final Review', points: ['Plotting drawings, printing set-ups, scale configuration', 'Completing 2D/3D case study design projects', 'Final evaluation and certification'] }
  ];

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleSyllabusDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setSyllabusSubmitted(true);
    setTimeout(() => setSyllabusSubmitted(false), 5000);
  };

  // Find related courses in same category
  const relatedCourses = coursesData
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 3);

  return (
    <div>
      {/* 1. Header with Course Info & Quick Inquiry Form */}
      <section className="course-detail-header">
        <div className="container header-grid-container">
          <div className="course-header-text">
            <span className="course-header-category">{course.category}</span>
            <h1 className="course-header-title">{course.title}</h1>
            <p className="course-header-subtitle">
              Learn professional software skills with M-Tech Computers. 100% Practical training, certified syllabus, and guaranteed placement assistance.
            </p>
            <div className="course-header-breadcrumbs">
              <Link href="/">Home</Link> / <Link href="/courses">Courses</Link> / <span>{course.title}</span>
            </div>
          </div>
          
          {/* Quick Inquiry Form */}
          <div className="header-inquiry-card">
            <h3>Get in touch with us</h3>
            {formSubmitted ? (
              <div className="success-toast">
                Thank you! Our career counselor will call you shortly.
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry}>
                <input type="text" placeholder="Your Name" required className="inquiry-input" />
                <input type="tel" placeholder="Mobile Number" required className="inquiry-input" />
                <input type="email" placeholder="Email Address" required className="inquiry-input" />
                <button type="submit" className="inquiry-submit-btn">Submit Now</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. Training Highlights Grid Bar */}
      <section className="highlights-bar-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-icon">📜</span>
              <div>
                <h4>Certificate</h4>
                <p>Of Completion</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💼</span>
              <div>
                <h4>Job Placement</h4>
                <p>Alerts & Interviews</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">👥</span>
              <div>
                <h4>Learning Support</h4>
                <p>Free Technical Help</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🏗</span>
              <div>
                <h4>Industry Projects</h4>
                <p>2+ Live Case Studies</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💻</span>
              <div>
                <h4>Lifetime Access</h4>
                <p>Digital Student Panel</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">📚</span>
              <div>
                <h4>Study Material</h4>
                <p>Free Books & Kits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Body: Overview, Syllabus & Right Sidebar */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container main-body-layout">
          
          {/* Left Column */}
          <div className="body-left-column">
            {/* Collage/Display Image */}
            <div className="course-display-img-wrap">
              <img 
                src={courseImg} 
                alt={`${course.title} Practical design layout`} 
                className="course-display-img"
              />
            </div>

            {/* Course Overview */}
            <div className="course-overview-block">
              <h2>Course Overview</h2>
              {realDetails?.overview ? (
                realDetails.overview.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              ) : (
                <>
                  <p>{course.description}</p>
                  <p>
                    Our structural and design training focuses strictly on hands-on practice. Students will configure industrial templates, learn shortcut commands, create precise blueprints, and design structural components from scratch. In addition, our classes include regular tests and project reviews to verify skill sets before certification.
                  </p>
                </>
              )}
            </div>

            {/* Course Contents */}
            <div className="course-contents-block">
              <h2>{id === 'autocad-plant-3d' ? 'AutoCAD Plant 3D Training Syllabus Details' : 'Course Contents'}</h2>
              {id === 'autocad-plant-3d' ? (
                <Plant3DSyllabusGrid />
              ) : (
                <div className="syllabus-accordion-container">
                  {syllabus.map((chapter, index) => (
                    <div key={index} className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}>
                      <button 
                        onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                        className="accordion-header-btn"
                      >
                        <span>{chapter.title}</span>
                        <span className="accordion-arrow">{activeAccordion === index ? '▲' : '▼'}</span>
                      </button>
                      
                      {activeAccordion === index && (
                        <div className="accordion-body-content">
                          <ul className="syllabus-bullet-list">
                            {chapter.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="body-right-column">
            {/* Course Highlights Card */}
            <div className="sidebar-highlights-card">
              <h3>Course Highlights</h3>
              <ul className="highlights-list">
                {realDetails?.highlights && realDetails.highlights.length > 0 ? (
                  realDetails.highlights.map((h, idx) => (
                    <li key={idx}><span>✓</span> {h}</li>
                  ))
                ) : (
                  <>
                    <li><span>✓</span> Learn from Certified Experts</li>
                    <li><span>✓</span> 100% Practical Laboratory classes</li>
                    <li><span>✓</span> Access to Dedicated Placement Portal</li>
                    <li><span>✓</span> Free Study Material & Textbooks</li>
                    <li><span>✓</span> Internationally recognized certificate</li>
                  </>
                )}
              </ul>
            </div>

            {/* Syllabus Request Form */}
            <div className="sidebar-form-card">
              <h3>Download Syllabus</h3>
              <p>Enter your details to receive the full syllabus PDF on WhatsApp/Email.</p>
              {syllabusSubmitted ? (
                <div className="success-toast">
                  Syllabus PDF path sent successfully!
                </div>
              ) : (
                <form onSubmit={handleSyllabusDownload}>
                  <input type="text" placeholder="Full Name" required className="inquiry-input" />
                  <input type="tel" placeholder="Mobile Number" required className="inquiry-input" />
                  <input type="email" placeholder="Email Address" required className="inquiry-input" />
                  <button type="submit" className="inquiry-submit-btn" style={{ backgroundColor: 'var(--clr-accent)' }}>
                    Download Syllabus PDF
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Certificate Section */}
      <section className="section-padding certificate-showcase-section">
        <div className="container">
          <div className="certificate-showcase-grid">
            <div className="certificate-text-box">
              <h2>How will you get your certificate?</h2>
              <p>
                Upon completing the required training hours, submitting design projects, and clearing the final evaluation, students receive an internationally valid ISO 9001:2015 certification.
              </p>
              <ul className="certificate-benefits-list">
                <li>⭐ Globally Recognized ISO Certification</li>
                <li>⭐ Dynamic QR-code for instant online credentials validation</li>
                <li>⭐ Fully accepted in corporate placements & MNC applications</li>
                <li>⭐ Prominent validation of design portfolio works</li>
              </ul>
            </div>
            
            <div className="certificate-img-box">
              <img 
                src="/Vinayak Khatke_page-0001.jpg.jpeg" 
                alt="M-Tech Computers Certification Sample Certificate" 
                className="certificate-image-preview"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Our Instructors are Certified */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="instructors-card-grid">
            <div className="instructors-text">
              <h2>How Our instructors are certified</h2>
              <p>
                All trainers at M-Tech Computers undergo strict evaluation and validation from software makers including Autodesk and Dassault Systemes. They possess 5+ years of core structural engineering background.
              </p>
              <button
                onClick={() => window.dispatchEvent(new Event('open-enquiry'))}
                className="btn btn-primary"
                id="instructor-enquire-btn"
              >
                Talk to an Instructor
              </button>
            </div>
            <div className="instructors-img-wrap">
              <img 
                src="/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_testi-img.png" 
                alt="M-Tech Computers Certified Instructors" 
                className="instructors-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Block */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions<span></span></h2>
          </div>
          
          <div className="faq-accordion-block" style={{ maxWidth: '800px', margin: '40px auto 0 auto' }}>
            {faqList.map((faq, index) => (
              <div key={index} className={`faq-accordion-item ${activeFaq === index ? 'active' : ''}`} style={{ marginBottom: '15px', border: '1px solid var(--clr-border)', borderRadius: '8px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="faq-accordion-header-btn"
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '18px 24px', backgroundColor: 'var(--clr-bg-alt)', border: 'none', textAlign: 'left', fontWeight: 'bold', fontSize: '15px', color: 'var(--clr-primary)', cursor: 'pointer' }}
                >
                  <span>{faq.q}</span>
                  <span>{activeFaq === index ? '▲' : '▼'}</span>
                </button>
                {activeFaq === index && (
                  <div className="faq-accordion-body" style={{ padding: '20px 24px', backgroundColor: '#ffffff', borderTop: '1px solid var(--clr-border)', fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Courses Grid */}
      {relatedCourses.length > 0 && (
        <section className="section-padding bg-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Related Courses<span></span></h2>
            </div>
            
            <div className="category-wrap-03" style={{ marginTop: '30px' }}>
              <div className="row">
                {relatedCourses.map((c) => (
                  <div key={c.id} className="single-course">
                    <div className="thum" style={{ height: '180px' }}>
                      <div className="image">
                        <Link href={`/courses/${c.id}`}>
                          <img 
                            src={c.image || '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg'} 
                            alt={c.title} 
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content" style={{ textAlign: 'left' }}>
                      <Link href={`/courses/${c.id}`}>
                        <h4 className="title" style={{ fontSize: '18px', marginBottom: '8px' }}>{c.title}</h4>
                      </Link>
                      <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666', marginBottom: '16px' }}>
                        {c.description.substring(0, 80)}...
                      </p>
                    </div>
                    <div className="course-teacher">
                      <span style={{ color: 'var(--clr-accent)', fontWeight: 600 }}>{c.category}</span>
                      <div className="view-details">
                        <Link href={`/courses/${c.id}`} id={`related-det-btn-${c.id}`}>View Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Styled JSX Styles */}
      <style jsx>{`
        /* Course Detail Header */
        .course-detail-header {
          background: linear-gradient(135deg, #07294d 0%, #030712 100%);
          color: white;
          padding: 80px 0;
          border-bottom: 4px solid var(--clr-accent);
        }

        .header-grid-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }

        .course-header-text {
          display: flex;
          flex-direction: column;
        }

        .course-header-category {
          color: var(--clr-accent);
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .course-header-title {
          font-size: 42px;
          color: white;
          margin-bottom: 16px;
          font-weight: 800;
        }

        .course-header-subtitle {
          font-size: 15px;
          line-height: 1.6;
          color: #d1d5db;
          margin-bottom: 24px;
          max-width: 600px;
        }

        .course-header-breadcrumbs {
          font-size: 13px;
          color: #9ca3af;
        }

        .course-header-breadcrumbs a {
          color: #fb923c;
        }

        .course-header-breadcrumbs span {
          color: white;
        }

        /* Header Inquiry Form Card */
        .header-inquiry-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .header-inquiry-card h3 {
          font-size: 20px;
          color: white;
          margin-bottom: 20px;
          font-weight: 700;
          text-align: center;
        }

        .inquiry-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.08);
          color: white;
          font-size: 14px;
          margin-bottom: 15px;
          transition: all 0.2s ease;
        }

        .inquiry-input::placeholder {
          color: #9ca3af;
        }

        .inquiry-input:focus {
          outline: none;
          border-color: var(--clr-accent);
          background-color: rgba(255, 255, 255, 0.12);
        }

        .inquiry-submit-btn {
          width: 100%;
          padding: 13px;
          border-radius: 6px;
          border: none;
          background-color: var(--clr-crimson);
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .inquiry-submit-btn:hover {
          filter: brightness(1.1);
        }

        .success-toast {
          background-color: rgba(25, 135, 84, 0.25);
          border: 1px solid #198754;
          color: #a3cfbb;
          padding: 14px;
          border-radius: 6px;
          text-align: center;
          font-size: 14px;
        }

        /* Highlights Bar Section */
        .highlights-bar-section {
          background-color: #f8fafc;
          padding: 30px 0;
          border-bottom: 1px solid #eeeeee;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .highlight-icon {
          font-size: 26px;
          background-color: rgba(7, 41, 77, 0.05);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .highlight-item h4 {
          font-size: 14px;
          color: #07294d;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .highlight-item p {
          font-size: 11px;
          color: #707070;
        }

        /* Main Body Layout */
        .main-body-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 50px;
        }

        .body-left-column {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .course-display-img-wrap {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #eeeeee;
          box-shadow: var(--shadow-sm);
        }

        .course-display-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .course-overview-block h2,
        .course-contents-block h2 {
          font-size: 24px;
          color: var(--clr-primary);
          margin-bottom: 20px;
          font-weight: 800;
          border-bottom: 2px solid #eeeeee;
          padding-bottom: 8px;
        }

        .course-overview-block p {
          font-size: 15px;
          line-height: 1.7;
          color: #505050;
          margin-bottom: 16px;
        }

        /* Syllabus Accordion */
        .syllabus-accordion-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .accordion-item {
          border: 1px solid #eeeeee;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff;
        }

        .accordion-item.active {
          border-color: var(--clr-accent);
          box-shadow: var(--shadow-sm);
        }

        .accordion-header-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background-color: #fafafa;
          border: none;
          text-align: left;
          font-weight: 700;
          font-size: 15px;
          color: var(--clr-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .accordion-item.active .accordion-header-btn {
          background-color: rgba(6, 182, 212, 0.05);
          color: var(--clr-accent);
        }

        .accordion-header-btn:hover {
          background-color: #f1f5f9;
        }

        .accordion-body-content {
          padding: 20px;
          border-top: 1px solid #eeeeee;
          background-color: #ffffff;
        }

        .syllabus-bullet-list {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .syllabus-bullet-list li {
          font-size: 14px;
          line-height: 1.5;
          color: #505050;
        }

        /* Right Column Sidebar */
        .body-right-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .sidebar-highlights-card {
          background-color: #f8fafc;
          border: 1px solid #eeeeee;
          border-radius: 12px;
          padding: 25px;
        }

        .sidebar-highlights-card h3 {
          font-size: 18px;
          color: var(--clr-primary);
          margin-bottom: 18px;
          font-weight: 700;
        }

        .highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .highlights-list li {
          font-size: 14px;
          color: #505050;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          line-height: 1.4;
        }

        .highlights-list li span {
          color: #198754;
          font-weight: bold;
        }

        .sidebar-form-card {
          background-color: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 12px;
          padding: 25px;
          box-shadow: var(--shadow-sm);
        }

        .sidebar-form-card h3 {
          font-size: 18px;
          color: var(--clr-primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .sidebar-form-card p {
          font-size: 12px;
          color: #707070;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .sidebar-form-card .inquiry-input {
          border: 1px solid #dddddd;
          background-color: #f8fafc;
          color: #333333;
        }

        .sidebar-form-card .inquiry-input:focus {
          border-color: var(--clr-accent);
          background-color: #ffffff;
        }

        /* Certificate showcase */
        .certificate-showcase-section {
          background-color: var(--clr-primary);
          color: white;
        }

        .certificate-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .certificate-text-box h2 {
          color: white;
          font-size: 28px;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .certificate-text-box p {
          font-size: 15px;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 24px;
        }

        .certificate-benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .certificate-benefits-list li {
          font-size: 14px;
          color: #f1f5f9;
        }

        .certificate-img-box {
          display: flex;
          justify-content: center;
        }

        .certificate-image-preview {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        /* Instructors certified section */
        .instructors-card-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }

        .instructors-text h2 {
          font-size: 28px;
          color: var(--clr-primary);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .instructors-text p {
          font-size: 15px;
          line-height: 1.7;
          color: #505050;
          margin-bottom: 24px;
        }

        .instructors-img-wrap {
          display: flex;
          justify-content: center;
        }

        .instructors-banner-img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        /* Responsive Media Queries */
        @media (max-width: 992px) {
          .header-grid-container,
          .main-body-layout,
          .certificate-showcase-grid,
          .instructors-card-grid {
            grid-template-columns: 1fr;
          }

          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .course-header-title {
            font-size: 32px;
          }

          .body-right-column {
            margin-top: 30px;
          }
        }

        @media (max-width: 576px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .course-header-title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}
