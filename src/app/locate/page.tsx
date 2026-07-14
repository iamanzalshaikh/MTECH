'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Center details by State
const centersByState: Record<string, { name: string; address: string; phone: string; email: string }[]> = {
  Rajasthan: [
    {
      name: 'Jaipur (Lalkothi - Head Office)',
      address: '1st Floor Pink Tower, Lalkothi District Shopping Centre, Opp. Nehru Garden, Behind Sahara Chamber, Jaipur, Rajasthan 302015',
      phone: '(456) 789 10 12',
      email: 'lalkothi@caddeskindia.com'
    },
    {
      name: 'Jaipur (Sitabari - Tonk Rd)',
      address: '1st Floor, Shree Shyam Kripa Tower, Opposite Jamuna Garden, Kalyan Nagar, Tonk Rd, Sitabari, Jaipur, Rajasthan 302011',
      phone: '+91 7378123128',
      email: 'tonkroad@caddeskindia.com'
    },
    {
      name: 'Jodhpur Center',
      address: '12, Chopasni Rd, Near Bombay Motor Circle, Jodhpur, Rajasthan 342003',
      phone: '+91 9829012345',
      email: 'jodhpur@caddeskindia.com'
    },
    {
      name: 'Kota Center',
      address: '3rd Floor, CAD Circle, Opp. Technical University Road, Kota, Rajasthan 324009',
      phone: '+91 9414011223',
      email: 'kota@caddeskindia.com'
    },
    {
      name: 'Udaipur Center',
      address: '3rd Floor, University Road, Opp. Govind Junction, Udaipur, Rajasthan 313001',
      phone: '+91 9414054321',
      email: 'udaipur@caddeskindia.com'
    },
    {
      name: 'Ajmer Center',
      address: '2nd Floor, Anasagar Circular Rd, Near Vaishali Nagar, Ajmer, Rajasthan 305001',
      phone: '+91 9602011223',
      email: 'ajmer@caddeskindia.com'
    }
  ],
  Maharashtra: [
    {
      name: 'Pune (Chinchwad)',
      address: '2nd Floor, Premier Plaza, Above McDonald\'s, Old Mumbai-Pune Highway, Chinchwad, Pune, Maharashtra 411019',
      phone: '+91 8888123456',
      email: 'chinchwad@caddeskindia.com'
    },
    {
      name: 'Pune (Deccan)',
      address: '1st Floor, Deccan Gymkhana, Opp. Ferguson College Rd, Deccan, Pune, Maharashtra 411004',
      phone: '+91 9999123456',
      email: 'deccan@caddeskindia.com'
    },
    {
      name: 'Nagpur Center',
      address: '3rd Floor, Dharampeth Shopping Plaza, WHC Road, Nagpur, Maharashtra 440010',
      phone: '+91 7122556677',
      email: 'nagpur@caddeskindia.com'
    },
    {
      name: 'Mumbai Center',
      address: 'Office No. 402, 4th Floor, V-Star Plaza, Chandavarkar Road, Borivali West, Mumbai, Maharashtra 400092',
      phone: '+91 9833912345',
      email: 'mumbai@caddeskindia.com'
    }
  ],
  'Delhi (NCR)': [
    {
      name: 'Delhi (Okhla)',
      address: 'Phase-III, Okhla Industrial Area, Near Govindpuri Metro Station, New Delhi 110020',
      phone: '+91 9111911191',
      email: 'delhi.ok@caddeskindia.com'
    },
    {
      name: 'Noida Center',
      address: 'Sector-62, Block C, Near Fortis Hospital, Noida, Uttar Pradesh 201301',
      phone: '+91 9222922292',
      email: 'noida.62@caddeskindia.com'
    },
    {
      name: 'Gurugram (IFFCO Chowk)',
      address: '2nd Floor, Sewa Corporate Park, IFFCO Chowk, MG Road, Gurugram, Haryana 122002',
      phone: '+91 9333933393',
      email: 'gurugram@caddeskindia.com'
    }
  ],
  Gujarat: [
    {
      name: 'Ahmedabad (C.G. Road)',
      address: 'C.G. Road, Opp. Municipal Market, Navrangpura, Ahmedabad, Gujarat 380009',
      phone: '+91 9333933393',
      email: 'ahmedabad@caddeskindia.com'
    },
    {
      name: 'Vadodara Center',
      address: 'Alkapuri Center, Opp. Railway Station, Vadodara, Gujarat 390007',
      phone: '+91 9444944494',
      email: 'baroda@caddeskindia.com'
    },
    {
      name: 'Surat Center',
      address: '4th Floor, Ghod Dod Road, Near Joggers Park, Surat, Gujarat 395007',
      phone: '+91 9555955595',
      email: 'surat@caddeskindia.com'
    }
  ],
  Telangana: [
    {
      name: 'Hyderabad (Ameerpet)',
      address: 'Maitrivanam Building, Ameerpet, Hyderabad, Telangana 500038',
      phone: '+91 9555955595',
      email: 'hyd.ap@caddeskindia.com'
    },
    {
      name: 'Hyderabad (Dilsukhnagar)',
      address: 'Office No. 102, Near Metro Station, Dilsukhnagar, Hyderabad, Telangana 500060',
      phone: '+91 9666966696',
      email: 'hyd.dsn@caddeskindia.com'
    }
  ],
  Karnataka: [
    {
      name: 'Bengaluru (Jayanagar)',
      address: '4th Block, 9th Main Road, Near Jayanagar Complex, Bengaluru, Karnataka 560011',
      phone: '+91 9666966696',
      email: 'blr.jay@caddeskindia.com'
    }
  ],
  'Uttar Pradesh': [
    {
      name: 'Lucknow (Hazratganj)',
      address: 'Hazratganj Shopping Complex, Hazratganj, Lucknow, Uttar Pradesh 226001',
      phone: '+91 9777977797',
      email: 'lucknow@caddeskindia.com'
    },
    {
      name: 'Ghaziabad Center',
      address: 'RDC, Raj Nagar, Near Petrol Pump, Ghaziabad, Uttar Pradesh 201002',
      phone: '+91 9888988898',
      email: 'ghaziabad@caddeskindia.com'
    }
  ],
  Bihar: [
    {
      name: 'Patna Center',
      address: '3rd Floor, Fraser Road, Opp. Maurya Lok, Patna, Bihar 800001',
      phone: '+91 9888988898',
      email: 'patna@caddeskindia.com'
    }
  ],
  'Madhya Pradesh': [
    {
      name: 'Bhopal Center',
      address: 'M.P. Nagar Zone-II, Opp. Jyoti Talkies, Bhopal, Madhya Pradesh 462011',
      phone: '+91 9111223344',
      email: 'bhopal@caddeskindia.com'
    },
    {
      name: 'Indore Center',
      address: 'G.T.B. Tower, Opposite DAVV University, R.N.T. Marg, Indore, Madhya Pradesh 452001',
      phone: '+91 9222334455',
      email: 'indore@caddeskindia.com'
    }
  ]
};

export default function LocatePage() {
  const [selectedState, setSelectedState] = useState('Rajasthan');

  const states = Object.keys(centersByState);
  const activeCenters = centersByState[selectedState] || [];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Locate Center</h1>
          <p className="page-breadcrumbs">
            <Link href="/">Home</Link> &gt; Locate Centre
          </p>
        </div>
      </section>

      {/* State Selector and Center Listing */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Centres</span>
            <h2 className="section-title">Find a M-Tech Computers Near You</h2>
            <p className="section-subtitle">
              Select your state from the dropdown below to view active training branches, official street addresses, and telephone hotlines.
            </p>
          </div>

          {/* Selector Dropdown */}
          <div className="state-selector">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <label 
                className="form-label" 
                style={{ color: 'var(--clr-primary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}
              >
                Select Your State:
              </label>
              <select 
                className="subpage-select" 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                style={{ border: '2px solid var(--clr-secondary)', background: 'white' }}
                id="state-locator-select"
              >
                {states.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Centers Grid */}
          <div className="center-grid" id="centers-display-grid">
            {activeCenters.map((center, idx) => (
              <div className="center-card" key={idx}>
                <h3 className="center-name">{center.name}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--clr-text-muted)', marginBottom: '16px' }}>
                  📍 {center.address}
                </p>
                <div style={{ borderTop: '1px solid var(--clr-border)', paddingTop: '12px', fontSize: '13px' }}>
                  <p style={{ margin: '4px 0' }}>
                    <strong>📞 Phone:</strong> <a href={`tel:${center.phone.replace(/\s+/g, '')}`}>{center.phone}</a>
                  </p>
                  <p style={{ margin: '4px 0' }}>
                    <strong>✉️ Email:</strong> <a href={`mailto:${center.email}`}>{center.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom call to action */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <p style={{ color: 'var(--clr-text-muted)', marginBottom: '20px' }}>
              Don't see your city listed? We also offer live, instructor-led online training courses.
            </p>
            <a 
              href="https://caddeskindia.com/online-training" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              id="locate-online-training-btn"
            >
              Explore Online Training Programs
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
