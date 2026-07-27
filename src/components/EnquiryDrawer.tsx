'use client';

import React, { useState, useEffect } from 'react';

// Data maps for dynamic dropdowns
const categoryToCourses: Record<string, string[]> = {
  'Civil/Architecture': [
    'AutoCAD Civil/Arch.',
    'Revit Architecture',
    'STAAD.Pro',
    '3ds Max',
    'Primavera',
    'Navisworks',
    'ETABS',
    'Google SketchUp'
  ],
  'Electrical/Electronics': [
    'AutoCAD Electrical',
    'MATLAB',
    'ETAP',
    'PLC & SCADA',
    'Revit MEP'
  ],
  'Mechanical/Automobile': [
    'AutoCAD Mechanical',
    'SolidWorks',
    'CATIA',
    'Creo (Pro-E)',
    'ANSYS Workbench',
    'NX CAD / NX CAM',
    'CNC Programming'
  ],
  'Piping Course': [
    'AutoCAD 2D Piping Design',
    'SmartPlant 3D (SP3D)',
    'Everything 3D (E-3D)'
  ],
  'CS/IT': [
    'Core Python Programming',
    'Java Programming',
    'Web Development (HTML/CSS/JS/React)',
    'MERN Stack Web Development',
    'C / C++ Programming',
    'Data Science & ML',
    'Data Analytic Course'
  ],
  'Internship': [
    'Summer Internship Program',
    'Winter Internship Program',
    'Engineering Excellence Program (EEP)'
  ]
};

const locationOptions = [
  'Kalyan',
  'Dombivli',
  'Thane',
  'Other'
];

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryDrawer({ isOpen, onClose }: EnquiryDrawerProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [course, setCourse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCourse('');
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !location || !category || !course) {
      setError('Please fill in all fields.');
      return;
    }
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    const lead = {
      name,
      phone,
      location,
      category,
      course,
      date: new Date().toISOString()
    };

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setError('');
      } else {
        setError('Failed to submit enquiry. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setLocation('');
    setCategory('');
    setCourse('');
    setIsSubmitted(false);
    setError('');
  };

  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
        id="drawer-overlay"
      />
      <div className={`enquiry-drawer ${isOpen ? 'active' : ''}`} id="enquiry-drawer">
        <button className="drawer-close" onClick={onClose} id="drawer-close-btn">&times;</button>
        
        {!isSubmitted ? (
          <>
            <h3 className="drawer-title">Enquiry Now</h3>
            <p className="drawer-desc">
              Fill out the form below and our career advisor will get in touch with you shortly.
            </p>
            
            <form onSubmit={handleSubmit} className="drawer-form" id="enquiry-form">
              {error && <p style={{ color: 'red', fontSize: '13px', fontWeight: 600 }}>{error}</p>}
              
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input 
                    type="text" 
                    className="form-input" 
                    style={{ width: '65px', textAlign: 'center' }} 
                    value="+91" 
                    disabled 
                  />
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Location *</label>
                <select 
                  className="form-select" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                >
                  <option value="">Select Location</option>
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Course Category *</label>
                <select 
                  className="form-select" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  {Object.keys(categoryToCourses).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Course *</label>
                <select 
                  className="form-select" 
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={!category}
                  required
                >
                  <option value="">Select Course</option>
                  {category && categoryToCourses[category]?.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: '10px' }}
                id="enquiry-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </>
        ) : (
          <div className="drawer-success">
            <div className="drawer-success-icon">✓</div>
            <h3 className="drawer-title" style={{ color: 'var(--clr-success)' }}>Thank You!</h3>
            <p className="drawer-desc" style={{ textAlign: 'center' }}>
              Your enquiry has been successfully submitted. Our career counsellor will contact you shortly on <strong>+91 {phone}</strong>.
            </p>
            <button className="btn btn-dark" onClick={handleReset} style={{ width: 'auto' }}>
              Submit Another Enquiry
            </button>
          </div>
        )}
      </div>
    </>
  );
}
