import React from 'react';
import Link from 'next/link';
import EnquiryTrigger from '@/components/EnquiryTrigger';

export default function TrainingMethodologyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: 'url(https://caddeskindia.com/wp-content/uploads/2021/03/Civil.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="page-title">Our training methodology</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Our training methodology
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ lineHeight: '1.8', fontSize: '15px', color: '#374151' }}>
            <p style={{ marginBottom: '24px' }}>
              Welcome to M-Tech Computers, your premier source for CAD CAM software training! At M-Tech Computers, we take great pride in our innovative training methodology, which sets us apart as a prominent institute in the fields of Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM). Our commitment to excellence and dedication to equipping our students with cutting-edge skills has made us the institution of choice for aspiring engineers and designers all over the globe.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Hands-On Learning Experience</h3>
            <p style={{ marginBottom: '24px' }}>
              At M-Tech Computers, we believe strongly in the effectiveness of hands-on learning. Our training methodology focuses on providing students with practical, real-world initiatives that inspire and challenge them to excel. As soon as you enter our classrooms, you will be immersed in a dynamic learning environment where theory meets practice, allowing you to effectively implement your knowledge.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Expert Faculty</h3>
            <p style={{ marginBottom: '24px' }}>
              Our team of instructors is comprised of skilled and certified experts who bring a multitude of experience and knowledge to the table. They have an in-depth comprehension of the most recent developments and trends in CAD CAM software, ensuring that our students receive the most relevant and up-to-date knowledge. Our faculty is not only committed to teaching, but also to cultivating students' individual talents and guiding them to success.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Comprehensive Course Curriculum</h3>
            <p style={{ marginBottom: '24px' }}>
              At M-Tech Computers, we believe in comprehensive skill development, so our course curriculum is exhaustive. From fundamentals to advanced techniques, our curriculum encompasses a broad spectrum of topics. We offer specialized courses in a variety of CAD CAM software applications, designed to meet the requirements of students from diverse engineering disciplines and industries. We offer courses for mechanical engineers, architects, and industrial designers.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Training Personalised to the Learner</h3>
            <p style={{ marginBottom: '24px' }}>
              We recognize that every student is unique and that their educational needs may vary. Because of this, we offer customized training options that enable students to concentrate on specific aspects of CAD CAM software that correspond to their professional objectives. Whether you seek proficiency in a particular software or want to delve deeply into a specialized field, our adaptable training approach meets your requirements.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>State-of-the-Art Infrastructure</h3>
            <p style={{ marginBottom: '24px' }}>
              To provide the finest learning environment, we have invested in state-of-the-art infrastructure and technology. Our laboratories are outfitted with the most up-to-date software and hardware, creating an ideal learning environment for students to experiment and refine their skills. In addition, our online training programmes provide students with access to the same high-quality education from the convenience of their own residences, making education accessible to everyone.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Industry Collaborations</h3>
            <p style={{ marginBottom: '24px' }}>
              To bridge the divide between academia and industry, we collaborate with industry leaders in the CAD CAM field. These partnerships afford our students opportunities for internships, live initiatives, and exposure to real-world difficulties. Additionally, it ensures that our training remains pertinent and in step with the most recent developments by keeping us abreast of industry demands.
            </p>

            <h3 style={{ fontSize: '20px', color: '#07294d', fontWeight: 700, marginTop: '30px', marginBottom: '12px' }}>Job Placement Assistance</h3>
            <p style={{ marginBottom: '30px' }}>
              M-Tech Computers’s commitment to its students extends beyond training to include assistance with job placement. We take great pride in our comprehensive job placement assistance initiative, which enables students to obtain rewarding careers in their selected fields. Our placement cell works tirelessly to connect students with potential employers, conduct trial interviews, and provide valuable career guidance.
            </p>

            <div style={{ textAlign: 'center', marginTop: '40px', padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontWeight: 'bold', color: '#07294d', fontSize: '16px', marginBottom: '16px' }}>
                Join M-Tech Computers and realize your full potential as a CAD CAM expert.
              </p>
              <EnquiryTrigger className="btn btn-primary">
                Enquire Now
              </EnquiryTrigger>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
