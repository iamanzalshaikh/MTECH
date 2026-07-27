'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Detailed course recommendation data matching caddeskindia.com
const courseRecommendations: Record<string, Record<string, string[]>> = {
  Civil: {
    Internship: ['AutoCAD Civil', 'Revit Architecture'],
    'First job': ['AutoCAD Civil', 'Revit Architecture', 'STAAD.Pro'],
    Portfolio: ['AutoCAD Civil', 'Revit Architecture', '3ds Max'],
    Upskilling: ['STAAD.Pro', 'Primavera', 'Revit Architecture'],
    'Government/contract drafting': ['AutoCAD Civil'],
    BIM: ['Revit Architecture', 'AutoCAD Civil', 'Navisworks'],
    'Product design': ['AutoCAD Civil', 'SolidWorks'],
    Simulation: ['STAAD.Pro', 'ANSYS']
  },
  Mechanical: {
    Internship: ['AutoCAD Mechanical', 'SolidWorks'],
    'First job': ['AutoCAD Mechanical', 'SolidWorks', 'CATIA'],
    Portfolio: ['SolidWorks', 'CATIA', 'ANSYS'],
    Upskilling: ['CATIA', 'ANSYS', 'NX CAD'],
    'Government/contract drafting': ['AutoCAD Mechanical'],
    BIM: ['Revit Architecture', 'AutoCAD Mechanical'],
    'Product design': ['SolidWorks', 'CATIA', 'Creo'],
    Simulation: ['ANSYS', 'SolidWorks Simulation']
  },
  Electrical: {
    Internship: ['AutoCAD Electrical'],
    'First job': ['AutoCAD Electrical', 'MATLAB'],
    Portfolio: ['AutoCAD Electrical', 'ETAP'],
    Upskilling: ['ETAP', 'PLC/SCADA', 'MATLAB'],
    'Government/contract drafting': ['AutoCAD Electrical'],
    BIM: ['Revit MEP', 'AutoCAD Electrical'],
    'Product design': ['AutoCAD Electrical'],
    Simulation: ['MATLAB', 'ETAP']
  },
  Architecture: {
    Internship: ['AutoCAD', 'Revit Architecture'],
    'First job': ['AutoCAD', 'Revit Architecture', '3ds Max'],
    Portfolio: ['AutoCAD', 'Revit Architecture', '3ds Max', 'Lumion'],
    Upskilling: ['Revit Architecture', '3ds Max', 'V-Ray', 'Lumion'],
    'Government/contract drafting': ['AutoCAD'],
    BIM: ['Revit Architecture', 'AutoCAD', 'Navisworks'],
    'Product design': ['SolidWorks', 'Rhino'],
    Simulation: ['ANSYS', 'STAAD.Pro']
  },
  'Interior Design': {
    Internship: ['AutoCAD', '3ds Max'],
    'First job': ['AutoCAD', '3ds Max', 'Lumion'],
    Portfolio: ['AutoCAD', '3ds Max', 'V-Ray', 'Lumion'],
    Upskilling: ['Revit Architecture', '3ds Max', 'V-Ray'],
    'Government/contract drafting': ['AutoCAD'],
    BIM: ['Revit Architecture', 'AutoCAD'],
    'Product design': ['SolidWorks', '3ds Max'],
    Simulation: ['Lumion', 'Enscape']
  },
  Automobile: {
    Internship: ['AutoCAD', 'SolidWorks'],
    'First job': ['SolidWorks', 'CATIA'],
    Portfolio: ['CATIA', 'SolidWorks', 'ANSYS'],
    Upskilling: ['CATIA', 'ANSYS', 'NX CAD'],
    'Government/contract drafting': ['AutoCAD'],
    BIM: ['AutoCAD'],
    'Product design': ['CATIA', 'SolidWorks', 'Creo'],
    Simulation: ['ANSYS', 'CATIA Analysis']
  },
  Other: {
    Internship: ['AutoCAD', 'Python'],
    'First job': ['AutoCAD', 'SolidWorks'],
    Portfolio: ['AutoCAD', '3ds Max'],
    Upskilling: ['AutoCAD', 'SolidWorks', 'Revit'],
    'Government/contract drafting': ['AutoCAD'],
    BIM: ['Revit Architecture'],
    'Product design': ['SolidWorks'],
    Simulation: ['ANSYS']
  }
};

const courseUrlMap: Record<string, string> = {
  'AutoCAD': '/courses?course=autocad',
  'AutoCAD Civil': '/courses?course=autocad-civil',
  'AutoCAD Mechanical': '/courses?course=autocad-mechanical',
  'Revit Architecture': '/courses?course=revit-architecture',
  'STAAD.Pro': '/courses?course=staad-pro',
  '3ds Max': '/courses?course=3ds-max',
  'Primavera': '/courses?course=primavera',
  'Navisworks': '/courses?course=navisworks',
  'SolidWorks': '/courses?course=solidworks',
  'CATIA': '/courses?course=catia',
  'Creo': '/courses?course=creo',
  'NX CAD': '/courses?course=nx-cad',
  'ANSYS': '/courses?course=ansys',
  'AutoCAD Electrical': '/courses?course=autocad-electrical',
  'MATLAB': '/courses?course=matlab',
  'ETAP': '/courses?course=etap',
  'PLC/SCADA': '/courses?course=plc-scada',
  'Revit MEP': '/courses?course=revit-mep',
  'Lumion': '/courses?course=lumion',
  'V-Ray': '/courses?course=v-ray',
  'Python': '/courses?course=python'
};

interface CourseRecommenderProps {
  onOpenEnquiry: () => void;
}

export default function CourseRecommender({ onOpenEnquiry }: CourseRecommenderProps) {
  const [branch, setBranch] = useState('');
  const [goal, setGoal] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!branch || !goal) return;

    const recs = courseRecommendations[branch]?.[goal] || ['AutoCAD'];
    setRecommendations(recs);
    setHasSearched(true);
  };

  return (
    <section className="section-padding recommender-section" id="recommender">
      <div className="container recommender-grid">
        <div className="fade-in-up">
          <span className="section-eyebrow">Advisor</span>
          <h3 className="section-title text-orange" style={{ color: '#fff', fontSize: '38px', marginBottom: '20px' }}>
            Not sure which CAD, CAM, IT software to learn?
          </h3>
          <p className="section-subtitle" style={{ color: '#cbd5e1', marginBottom: '30px', fontSize: '16px', lineHeight: '1.7' }}>
            Select your engineering branch and immediate career goal. Our interactive recommender system will suggest the most beneficial design software for your profile.
          </p>

          <div id="recommender-result">
            {hasSearched ? (
              <div className="recommender-result fade-in-up">
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Recommended courses for you:</h4>
                <div className="recommender-tags">
                  {recommendations.map((course) => (
                    <Link 
                      key={course} 
                      href={courseUrlMap[course] || '/courses'} 
                      className="recommender-tag"
                      id={`rec-tag-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {course}
                    </Link>
                  ))}
                </div>
                <p style={{ marginTop: '20px', fontSize: '14px', color: '#94a3b8' }}>
                  These recommendations are based on current industrial and recruitment standards.
                </p>
                <button 
                  onClick={onOpenEnquiry} 
                  className="btn btn-primary" 
                  style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
                  id="recommender-cta-btn"
                >
                  Get Free Course Guidance
                </button>
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                Select your branch and goal on the form to view personalized software recommendations instantly.
              </p>
            )}
          </div>
        </div>

        <div className="recommender-form-card fade-in-up">
          <form onSubmit={handleSubmit} id="recommender-form">
            <div className="form-group">
              <label className="form-label" htmlFor="rec-branch">Your Branch / Major</label>
              <select 
                className="form-select" 
                id="rec-branch" 
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              >
                <option value="">Choose Branch</option>
                <option value="Civil">Civil Engineering / Architecture</option>
                <option value="Mechanical">Mechanical / Automobile</option>
                <option value="Electrical">Electrical / Electronics</option>
                <option value="Architecture">Architecture</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Automobile">Automobile Engineering</option>
                <option value="Other">Other Branch / Diploma</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="rec-goal">Your Immediate Career Goal</label>
              <select 
                className="form-select" 
                id="rec-goal" 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              >
                <option value="">Choose Goal</option>
                <option value="Internship">Secure College Internship</option>
                <option value="First job">Get My First Core Job</option>
                <option value="Portfolio">Build a Design Portfolio</option>
                <option value="Upskilling">Upskill / Improve Salary</option>
                <option value="Government/contract drafting">Govt Drafting / Contracting</option>
                <option value="BIM">Switch to BIM Workflows</option>
                <option value="Product design">Product Design Engineer</option>
                <option value="Simulation">Simulation & FEA Engineer</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }} id="recommender-submit-btn">
              Get Recommendations
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
