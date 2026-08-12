import React from 'react';

export const plant3dSyllabusSections = [
  {
    title: 'Introduction',
    color: '#2563eb',
    bg: '#eff6ff',
    topics: ['About AutoCAD Plant 3D', 'About Resources'],
  },
  {
    title: 'User Interface',
    color: '#16a34a',
    bg: '#f0fdf4',
    topics: [
      'User Interface Intro',
      'Launching AutoCAD Plant 3D',
      'Workspaces',
      'Application Menu',
      'Ribbon',
      'The Properties Palette',
      'Data Manager',
      'Spec Viewer',
    ],
  },
  {
    title: 'Projects',
    color: '#ca8a04',
    bg: '#fefce8',
    topics: ['Project Intro', 'Project Environment', 'Project Details', 'File Name Format'],
  },
  {
    title: 'Process & Instrumentation Diagrams (P&ID)',
    color: '#9333ea',
    bg: '#faf5ff',
    topics: [
      '(P&ID) Introduction',
      '(P&ID) Symbology',
      'Add Equipment',
      'Schematic Lines',
      'Schematic Line Edit',
      'Adding Valves',
    ],
  },
  {
    title: 'Spec Editor',
    color: '#16a34a',
    bg: '#f0fdf4',
    topics: [
      'Introduction',
      'Launching Spec Editor',
      'Open Spec',
      'Add Part to Spec',
      'Edit Parts',
      'Part Use Priority',
      'Edit Valve Operators',
      'Create Spec',
    ],
  },
  {
    title: 'Publishing and Printing',
    color: '#9333ea',
    bg: '#faf5ff',
    topics: ['Publishing and Printing Introduction', 'Publishing', 'Printing'],
  },
  {
    title: 'Report Creator',
    color: '#16a34a',
    bg: '#f0fdf4',
    topics: [
      'Report Creator Introduction',
      'Starting Report Creator',
      'New Report',
      'Report Designer',
      'Fixed Pipe Length',
      'Using Spec Viewer in a Project',
      'Catalog Editor',
    ],
  },
  {
    title: '3D Model',
    color: '#2563eb',
    bg: '#eff6ff',
    topics: [
      'P&ID Object Mapping',
      'The Visual Style Manager',
      'Structural Model Introduction',
      'About Structure',
      'Structural Grids',
      'Footing',
      'Members',
      'Platforms',
      'Stair and Railing',
      'Ladder',
      'Mechanical Model Introduction',
      'Create Centrifugal Pump',
      'New Vertical Tank',
      'Save Template',
      'Modify Equipment',
      'Add and Edit Nozzle',
    ],
  },
  {
    title: 'Isometric Views',
    color: '#e11d48',
    bg: '#fff1f2',
    topics: [
      'Introduction',
      'Iso Styles Setup',
      'Themes',
      'Annotation Setup',
      'Dimension Setup',
      'Sloped and Offset Piping Setup',
      'Title Block and Display',
      'Quick Iso',
      'Production Iso',
    ],
  },
  {
    title: 'Orthographic Views',
    color: '#ca8a04',
    bg: '#fefce8',
    topics: [
      'Introduction',
      'Ortho Settings',
      'Bill of Materials',
      'Orthographic Plan',
      'Adjacent View',
      'Annotations and Dimensions',
      'Plant Object Tools',
    ],
  },
];

export default function Plant3DSyllabusGrid() {
  return (
    <div className="plant3d-syllabus-grid">
      {plant3dSyllabusSections.map((section) => (
        <article
          key={section.title}
          className="plant3d-syllabus-card"
          style={{ backgroundColor: section.bg, borderColor: `${section.color}33` }}
        >
          <h3 style={{ color: section.color }}>{section.title}</h3>
          <ul>
            {section.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
