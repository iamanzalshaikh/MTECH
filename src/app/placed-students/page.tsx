'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import EnquiryTrigger from '@/components/EnquiryTrigger';
import {
  companyLogos,
  placedStudentsByYear,
  placementTestimonial,
  placementYears,
  type PlacementYear,
  type PlacedStudent,
} from '@/data/placedStudents';
import styles from './placed-students.module.css';

const INITIAL_VISIBLE = 27;

function avatarUrl(name: string) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#07294d"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="#f6b500" text-anchor="middle" dominant-baseline="central">${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function StudentCard({ student }: { student: PlacedStudent }) {
  const companyLogo = companyLogos.find(
    (c) => c.name.toLowerCase().includes(student.company.toLowerCase().split(' ')[0])
  );

  return (
    <article className={styles.studentCard}>
      <div className={styles.studentPhotoWrap}>
        <img
          src={student.photo || avatarUrl(student.name)}
          alt={`${student.name} - placed at ${student.company}`}
          className={styles.studentPhoto}
          loading="lazy"
        />
      </div>
      <h3 className={styles.studentName}>{student.name}</h3>
      <p className={styles.studentRole}>
        Placed as: <span>{student.role}</span>
      </p>
      {student.branch && <span className={styles.studentBranch}>{student.branch}</span>}
      <div className={styles.companyLogoWrap}>
        {companyLogo ? (
          <span className={styles.companyLogoText}>{companyLogo.abbr}</span>
        ) : (
          <span className={styles.companyLogoText}>{student.company.slice(0, 12)}</span>
        )}
      </div>
    </article>
  );
}

export default function PlacedStudentsPage() {
  const [activeYear, setActiveYear] = useState<PlacementYear>('2025-2026');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const students = placedStudentsByYear[activeYear];
  const visibleStudents = useMemo(
    () => students.slice(0, visibleCount),
    [students, visibleCount]
  );

  const handleYearChange = (year: PlacementYear) => {
    setActiveYear(year);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.college) {
      setFormError('Please fill in all required fields.');
      return;
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone.replace(/\D/g, '').slice(-10),
          location: form.college,
          category: 'CS/IT',
          course: `Placement Enquiry: ${form.message || 'General'}`,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      setFormSubmitted(true);
      setFormError('');
    } catch {
      setFormError('Could not submit. Please try again or call us directly.');
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero — Milestone-style split */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Placements</span>
              <h1>We Believe Everyone Deserves A Job They Love.</h1>
              <p>A career-upgradable platform to make you professional.</p>
              <EnquiryTrigger className={styles.heroCta}>Enroll Today</EnquiryTrigger>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="/images/caddeskindia_com_wp-content_uploads_2026_01_ANS07782-scaled.jpg"
                alt="M-Tech Computers students in training"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted companies */}
      <section className={styles.companiesSection}>
        <div className="container">
          <h2>
            Trusted by <span>100+ Companies</span> around the world
          </h2>
          <p>
            Our students are trusted by top companies for their skills, dedication, and practical
            training. M-Tech Computers prepares industry-ready professionals who deliver from day one.
          </p>
          <div className={styles.logoMarquee}>
            <div className={styles.logoTrack}>
              {[...companyLogos, ...companyLogos].map((logo, i) => (
                <div key={`${logo.name}-${i}`} className={styles.logoChip}>
                  <span>{logo.abbr}</span>
                  <small>{logo.name}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni grid */}
      <section className={styles.alumniSection}>
        <div className="container">
          <div className={styles.alumniHeader}>
            <div className={styles.sectionHead}>
              <h2>Meet Our Alumni</h2>
              <p>Meet our alumni placed at top companies.</p>
            </div>
            <div className={styles.yearTabs} role="tablist" aria-label="Placement batch year">
              {placementYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  role="tab"
                  aria-selected={activeYear === year}
                  className={`${styles.yearTab} ${activeYear === year ? styles.yearTabActive : ''}`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.studentGrid}>
            {visibleStudents.map((student) => (
              <StudentCard key={`${activeYear}-${student.name}`} student={student} />
            ))}
          </div>

          {visibleCount < students.length && (
            <div className={styles.showMoreWrap}>
              <button
                type="button"
                className={styles.showMoreBtn}
                onClick={() => setVisibleCount((c) => c + INITIAL_VISIBLE)}
              >
                Show More &gt;
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial — horizontal card */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>What Our Students Say</h2>
            <p>See what our students cherish about their learning experience.</p>
          </div>
          <div className={styles.testimonialSplit}>
            <div className={styles.testimonialVideo}>
              <div className={styles.videoThumb}>
                <span className={styles.playBtn} aria-hidden>▶</span>
              </div>
              <p className={styles.videoCaption}>
                Teaching Quality and Placement Support — Mechanical Student
              </p>
            </div>
            <blockquote className={styles.testimonialCard}>
              <p>&ldquo;{placementTestimonial.quote}&rdquo;</p>
              <footer>
                <strong>{placementTestimonial.name}</strong>
                <span>{placementTestimonial.course}</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Placement assistance */}
      <section className={styles.assistanceSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>Placement Assistance</h2>
            <p>Helping you secure your dream job with expert guidance and support.</p>
          </div>
          <div className={styles.assistanceSteps}>
            <div className={styles.assistanceStep}>
              <div className={styles.stepCircle}>1</div>
              <h3>Personalized Career Counseling</h3>
              <p>Get personalized career advice to build a perfect pathway for you.</p>
            </div>
            <div className={styles.assistanceStep}>
              <div className={styles.stepCircle}>2</div>
              <h3>A Perfect Resume Building Support</h3>
              <p>Build your resume with our professional support and expert tips.</p>
            </div>
            <div className={styles.assistanceStep}>
              <div className={styles.stepCircle}>3</div>
              <h3>Mock Interviews and Soft Skills Training</h3>
              <p>Prepare for interviews with expert guidance and realistic mock sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll form */}
      <section className={styles.enrollSection}>
        <div className="container">
          <div className={styles.enrollGrid}>
            <div className={styles.enrollFormWrap}>
              <h3>Enroll today</h3>
              <p>Get in touch with us for any questions, support, or feedback — we&apos;re here to help!</p>

              {formSubmitted ? (
                <div className={styles.formSuccess}>
                  <div className={styles.successIcon}>✓</div>
                  <h4>Thank you!</h4>
                  <p>Your details have been submitted. Our team will contact you shortly.</p>
                  <button type="button" className={styles.resetBtn} onClick={() => setFormSubmitted(false)}>
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form className={styles.enrollForm} onSubmit={handleEnrollSubmit}>
                  {formError && <p className={styles.formError}>{formError}</p>}
                  <div className={styles.formField}>
                    <label htmlFor="enroll-name">Name *</label>
                    <input
                      id="enroll-name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="enroll-email">Email *</label>
                    <input
                      id="enroll-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="enroll-phone">Phone *</label>
                    <input
                      id="enroll-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })
                      }
                      placeholder="10-digit mobile number"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="enroll-college">College / Company *</label>
                    <input
                      id="enroll-college"
                      value={form.college}
                      onChange={(e) => setForm({ ...form, college: e.target.value })}
                      placeholder="Your college or company"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="enroll-message">Message</label>
                    <textarea
                      id="enroll-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Submit details
                  </button>
                </form>
              )}
            </div>

            <div className={styles.placementPanel}>
              <div className={styles.placementPanelInner}>
                <img src="/placement-badge.png" alt="100% Placement Assistance" className={styles.placementBadge} />
                <p className={styles.guaranteeBig}>100%</p>
                <p className={styles.guaranteeLabel}>Placement Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.breadcrumbBar}>
        <div className="container">
          <Link href="/">Home</Link> &gt; Placed Students
        </div>
      </div>
    </div>
  );
}
