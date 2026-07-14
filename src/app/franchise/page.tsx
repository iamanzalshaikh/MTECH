'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaCog, FaChartLine, FaTrophy, FaChevronRight, FaTimes, FaCheckCircle } from 'react-icons/fa';

const STATE_CITY_MAP: Record<string, string[]> = {
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Rajahmundry", "Kadapa"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon", "Tinsukia"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Ara", "Bihar Sharif"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Rajnandgaon", "Jagdalpur"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Anand", "Bharuch"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Nahan", "Kangra"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi-Dharwad", "Mangaluru", "Belagavi", "Davangere", "Ballari", "Tumakuru"],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad", "Thodupuzha"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Ratlam", "Satna"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Yavatmal"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Dimapur", "Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Puri", "Balasore"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar", "Sri Ganganagar", "Bhilwara"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Erode"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Kharagpur", "Bardhaman"]
};

const TESTIMONIALS = [
  {
    name: "Mr. Jagadesh Reddy",
    location: "M-Tech Computers - Hyderabad Ameerpet",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/01/Jagdeesh.jpg",
    quote: "I am from Hyderabad which is one of the most competitive cities in terms of Education institutes. The kind of uniqueness we have found in M-Tech Computers is their honesty and the services which they are providing in terms of panel, student panel & certificates etc. The support team is very prompt and are always ready to give responses on time. I highly recommend M-Tech Computers to the people around me and many of them are already associated with M-Tech Computers."
  },
  {
    name: "Mr. Razeem Mohammad",
    location: "M-Tech Computers - Trivandrum",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/RAzeem-e1614943579979.jpg",
    quote: "I have started M-Tech Computers 3 years ago with 1 center initially and later one more in another location in Trivandrum. The vision is to provide a better training to the students which will help them in developing their skills and their career. The technical and support team from M-Tech Computers Head office are extremely responsive and through their support, I have been able to deliver multiple trainings to the students. Additionally, our business in Trivandrum city has seen huge growth opportunity."
  },
  {
    name: "Mr. Shirish Deshpande",
    location: "M-Tech Computers – Pune Kothrud",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/shirish.jpg",
    quote: "I am running the M-Tech Computers franchise in the Pune Kothrud location from the last two years. The support from the team and structure are very good. The team always encourage to take extra efforts and even help us in getting good business. We will be hoping to grow more in the upcoming years."
  },
  {
    name: "Mr. Nitin Wankar",
    location: "M-Tech Computers - Yavatmal",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/NW-e1614943626514.jpg",
    quote: "Yavatmal is a very small city in the state of Maharashtra. There are only few technical or engineering colleges available in Yavatmal. But after being associated with M-Tech Computers, we have started delivering multiple CAD trainings in the city. The kind of support, we have received from the Head Office team cannot be defined in words. It is been an amazing journey and I’m looking forward to start more advance software trainings very soon."
  },
  {
    name: "Mr. Arvind Thakur",
    location: "M-Tech Computers – Kangra",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/arvind.jpg",
    quote: "I have been running the M-Tech Computers franchise in Kangra from the past 7 years. M-Tech Computers training has been designed in such a way that the students get the best quality training and all type of support and facilities. Be it student panel, certificates, day-wise schedules, etc., students get all the things available on their panel. And whenever there is any new technology comes in the market, Head office always provide the trainings to its franchise partners which helps us to enhance our skills and later to deliver the same to the students."
  },
  {
    name: "Mr. Vivek Agarwal",
    location: "M-Tech Computers – Lucknow",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/01/mr-Vivek-e1614943688220.jpg",
    quote: "I am from Lucknow and have been associated with M-Tech Computers from past 8 years. We have received a complete concept of CAD/CAM after being associated with M-Tech Computers. We have seen a tremendous growth in our business and through the amazing support from M-Tech Computers team, we are going to incorporate more advances courses and technologies in the upcoming years. As businessman, we always focus on the business growth and with the help of M-Tech Computers, we have come a long way; it was a beautiful journey together."
  },
  {
    name: "Mr. Sai Kishore",
    location: "M-Tech Computers – Hyderabad Kukatpally",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/Sai-Kiran.png",
    quote: "I am from Hyderabad and runs a franchise in the Kukatpally location there. I am very happy to be part of the M-Tech Computers family. It is a great association with them. All the things are going smoothly. The support from M-Tech Computers Head office is also very nice and we hope to achieve great things together with M-Tech Computers in the coming time."
  },
  {
    name: "Mr. Vinay Rastogi",
    location: "M-Tech Computers – Varanasi",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/vinay.jpg",
    quote: "I have taken the M-Tech Computers franchise 6 years back and I am very happy with the support system of the management. It is very good to see that we can reach the company and the team at any point of time whenever we encounter any problem or any query. So, with the help of that, we are growing and we will keep on growing always."
  },
  {
    name: "Mr. Moonib Saiyed",
    location: "M-Tech Computers – Bharuch",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/Moonib.png",
    quote: "I own a franchise center in Bharuch, Gujarat, and have been associated with M-Tech Computers from the last 4 years. We provide all types of CAD/CAM/CAE training in Bharuch city. The kind of support and training methodology M-Tech Computers follows has helped me to grow my business. M-Tech Computers also provides regular trainings to its franchise partners which helps us to enhance our skills time to time. And they also keep on updating the curriculum on a regular basis which helps us to grab the various business opportunities."
  },
  {
    name: "Mr. Mahesh Ostwal",
    location: "M-Tech Computers – Aurangabad",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/mahesh.jpg",
    quote: "M-Tech Computers is one of the leading and most trusted brands in CAD/CAM/CAE training. I have taken M-Tech Computers franchise 3 years back and till date I had a great experience working with them. The support team from M-Tech Computers Head Office is very good and always ready to resolve our query. I have thoroughly enjoying my journey with M-Tech Computers and hoping to achieve great things together in the future."
  },
  {
    name: "Mr. Gaurav Gupta",
    location: "M-Tech Computers – Jalandhar",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/gaurav.jpg",
    quote: "I have been associated with M-Tech Computers from the past few years and owns a franchise center in Jalandhar. M-Tech Computers has incorporated a well-designed system which helps us to maintain the registration of students, their books, workbooks/exercise books, and certificates very easily. The most genuine thing about the system is the certificate verification. The certificates have proper QR code scanning and are valid everywhere. I have a great experience with M-Tech Computers and I hope it will continue to be the same in the coming years."
  },
  {
    name: "Mr. Kartik B. Reddy",
    location: "M-Tech Computers – Hyderabad Dilsukhnagar",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/Kartik.jpg",
    quote: "M-Tech Computers has network all over India which makes it the finest and trusted CAD/CAM brand in India. Whenever we have any query, the M-Tech Computers Management and Support team resolves our query in few hours only. This kind of promptness helps us to build a stronger bond and also helps us in the business growth. The support team from Head office is working and supporting beyond our expectations and I am very happy to be a part of M-Tech Computers family."
  },
  {
    name: "Mr. Sathish",
    location: "M-Tech Computers – Coimbatore",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/Satish.png",
    quote: "I have joined the M-Tech Computers family in 2018 and initially, I used to hesitate and get nervous how I will able to grow the business opportunities in Coimbatore. But after getting such amazing support and encouragement from the M-Tech Computers team, I started getting a good business and have conducted various trainings for professionals and many college students as well. And in the coming years, I am hoping to take more franchises with M-Tech Computers."
  },
  {
    name: "Mr. Akhil Radhakrishnan",
    location: "M-Tech Computers – Thodupuzha",
    avatar: "https://caddeskindia.com/wp-content/uploads/2021/03/Akhil-Radhakrishna.png",
    quote: "I own a M-Tech Computers franchise in Thodupuzha, Kerala. M-Tech Computers is the most trusted brand in the fields of the CAD/CAM/CAE industry. The support system is very good including the study materials which M-Tech Computers offers to its students. The team is always ready to provide assistance to its franchise partners which helps us to develop multiple business opportunities."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div style={{ borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          outline: 'none',
          padding: 0,
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: '700', color: '#07294d' }}>{question}</span>
        <span style={{ fontSize: '18px', color: '#07294d', fontWeight: 'bold', marginLeft: '10px' }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '12px', fontSize: '14.5px', color: '#475569', lineHeight: '1.6' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FranchisePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [message, setMessage] = useState('');

  const [activeTab, setActiveTab] = useState('scope');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const statesList = Object.keys(STATE_CITY_MAP).sort();
  const citiesList = selectedState ? STATE_CITY_MAP[selectedState].sort() : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !selectedState || !selectedCity || !preferredLocation) {
      setError('Please fill in all required fields marked with *');
      return;
    }
    if (phone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setIsSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSelectedState('');
    setSelectedCity('');
    setPreferredLocation('');
    setMessage('');
    setIsSubmitted(false);
  };

  const faqs = [
    {
      q: "What is the procedure to take the franchise?",
      a: "You can apply through the web at https://caddeskindia.com/franchise/ or call at +91707355921. Our executive shall contact to answer your queries. On confirmation, our executives shall visit the location and an agreement is signed up on satisfactory completion of norms."
    },
    {
      q: "How much investment is required to open the M-Tech Computers centre?",
      a: "The investment range varies from 5 lacs to 10Lacs depending upon the city and infrastructure. Please refer the ROI page for a fair idea of investment."
    },
    {
      q: "I am not from a technical background. Can I open the M-Tech Computers?",
      a: "Off course, any person with a general managerial skills and zeal to run a business can open the M-Tech Computers."
    },
    {
      q: "If I book a location now but can it be opened after a few months?",
      a: "2 months are given to make centre operational from the date of booking. For delayed case, it needs to be decided initially."
    },
    {
      q: "How much profit, I can expect from M-Tech Computers?",
      a: "The profit and ROI depend on the city, Business volume & working attitude, however, a return of 30-50% can be expected in the first year and 50-70% in subsequent years. We have many examples of centre making profits of 10-30 Lacs profits every year. Kindly refer ROI section for details."
    },
    {
      q: "What is the pricing of books?",
      a: "Books are given on very nominal cost varying from Rs. 150/- to 550/- for generalized courses."
    },
    {
      q: "Do I need to pay a franchise fee every year?",
      a: "No, the franchise fee is payable once, however, a very nominal amount needs to be paid every year as renewal fees. (Kindly refer Finance section)"
    },
    {
      q: "Is Royalty paid on the listing fee or actual fee?",
      a: "On actually collected fee."
    },
    {
      q: "When royalty is to be paid?",
      a: "By 20th of every month."
    },
    {
      q: "Does M-Tech Computers provide support in Seminars and presentation?",
      a: "Yes, this is an important facility by M-Tech Computers. We arrange technical/ Commercial presenter for seminars and presentations in colleges. *"
    },
    {
      q: "What are the criteria to open multiple centres in a city?",
      a: "We have set the criteria of one franchise up to 10 Lac population and more for every additional 5 Lacs population? Two franchise should have a minimum of 4 Km distance by road."
    },
    {
      q: "How do M-Tech Computers support in local marketing?",
      a: "Promotional material is provided periodically to promote M-Tech Computers. Other activities can be shared on case to case basis."
    },
    {
      q: "How do M-Tech Computers support in staff training?",
      a: "M-Tech Computers provide excellent support through monthly scheduled online training for staff members. For other trainings, we have on-demand training facility apart from cyclic offline trainings at different provinces of India."
    }
  ];

  const tabContents: Record<string, React.ReactNode> = {
    scope: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          In the ever-evolving landscape of technology, the scope of CAD training has witnessed an exponential growth in recent years. With Civil, Architecture, and Mechanical industries embracing CAD technologies on a large scale, the knowledge of CAD has transformed into an essential skill required for various job roles. As the number of engineering and diploma graduates surges, creating a massive pool of technocrats, there is an increasing demand for skill-based education to align with industrial requirements.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          Every year, more than 15 lakh engineers graduate from over 10,000 engineering colleges, while an additional 5 lakh diploma engineers join the workforce. This influx of talent calls for standardized training to equip these aspiring professionals with the skills necessary to meet industry demands. CAD training has become an integral part of the academic curriculum, with major technical universities incorporating it into their syllabus, further emphasizing its importance in shaping future professionals.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          The current scenario indicates a paradigm shift in the scope of CAD, transitioning from a nascent stage to a mature phase. This transformation is a testament to the growing significance of CAD technologies and the training required to harness their potential. As industries increasingly rely on computer-aided design, the demand for CAD experts is set to surge in the future.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          In this context, investing in CAD technologies and training represents a lucrative opportunity for entrepreneurs and investors alike. The emerging field of CAD in India promises ample scopes for profitability, stability, and a reputation built on providing essential skills to the next generation of technocrats.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          As businesses continue to explore ways to optimize processes and enhance efficiency, the demand for CAD-savvy professionals will only rise. From architectural blueprints to mechanical designs and civil engineering projects, CAD’s applications span across various industries, making it a versatile and indispensable tool.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          Moreover, the shift towards digitization and Industry 4.0 has further bolstered the significance of CAD in the manufacturing and engineering sectors. As automation and smart technologies reshape industries, CAD expertise becomes increasingly valuable for effective product development and innovation.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          By becoming a part of the CAD training domain, one can tap into this growing market and play a pivotal role in shaping the future of India’s workforce. As a CAD training franchise, you have the opportunity to make a profound impact on countless lives, empowering individuals with skills that will open doors to numerous career opportunities.
        </p>
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155' }}>
          The scope of CAD training has amplified massively in recent years, with a growing adoption of CAD technologies in various industries. The demand for CAD expertise is set to rise as India’s workforce seeks skill-based education to meet industry requirements. As the scope of CAD transitions from infancy to maturity, the field offers ample opportunities for profitability, stability, and a reputation built on shaping future technocrats. Embrace the emerging field of CAD technologies and training, and embark on a journey of success, impact, and growth.
        </p>
      </motion.div>
    ),
    why: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '16px' }}>
          Investing in a M-Tech Computers franchise is a strategic step towards gaining independence and profitability. As a franchisee, you become the torchbearer of CAD training excellence, empowered by a well-established brand and comprehensive support system.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '14.5px', color: '#334155' }}>
          <div>
            <strong style={{ color: '#07294d' }}>Independence through Brand Recognition:</strong>
            <p style={{ margin: '4px 0 0 0' }}>Joining the M-Tech Computers franchise family means you don’t have to start from scratch. You leverage the recognition and trust that the M-Tech Computers brand has already earned in the market. As an independent business owner, you can build upon this solid foundation and establish your presence confidently.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Proven Business Model:</strong>
            <p style={{ margin: '4px 0 0 0' }}>M-Tech Computers offers a tried-and-tested business model that has delivered success to numerous franchisees. With our expert guidance, you can avoid the pitfalls of starting a business from scratch and hit the ground running. The established operational and marketing strategies help you streamline your operations for optimal profitability.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Training and Support:</strong>
            <p style={{ margin: '4px 0 0 0' }}>As a franchisee, you are not alone in your journey. M-Tech Computers provides extensive training programs not only for your students but also for you and your instructors. This training ensures that you deliver high-quality education consistently, setting you apart from competitors and attracting more students to your centre.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Continuous Guidance:</strong>
            <p style={{ margin: '4px 0 0 0' }}>Our dedicated team of experts offers continuous guidance and support, helping you navigate challenges and seize opportunities in the market. We stay abreast of industry trends and technological advancements, providing you with the latest resources to keep your franchise at the forefront of CAD education.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Marketing Assistance:</strong>
            <p style={{ margin: '4px 0 0 0' }}>Marketing plays a crucial role in attracting students and businesses to your franchise. M-Tech Computers provides extensive marketing assistance, including marketing collateral and strategies to promote your centre locally. Our strong online presence and brand reputation give you an edge in the competitive market.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Diverse Revenue Streams:</strong>
            <p style={{ margin: '4px 0 0 0' }}>M-Tech Computers's comprehensive training programs cater to multiple industries. By offering a diverse range of courses, you open various revenue streams, attracting a broad customer base and increasing profitability.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Well recognised brand value:</strong>
            <p style={{ margin: '4px 0 0 0' }}>Investing in a M-Tech Computers franchise opens doors to a world of opportunities, backed by a well-recognized brand with a proven track record of delivering quality education and high returns on investment. Our certifications are highly esteemed in major industries across India, earning M-Tech Computers an excellent reputation among employers and professionals alike.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>Flexible franchise module:</strong>
            <p style={{ margin: '4px 0 0 0' }}>As a franchise partner, you benefit from our flexible franchise module designed to suit your support and financial requirements. We understand that each entrepreneur has unique needs, and our modular approach ensures that you can tailor your franchise to align with your vision and goals.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>24x7 support system:</strong>
            <p style={{ margin: '4px 0 0 0' }}>The heart of our franchise system lies in fostering a partnership-oriented approach. We value our franchise partners and recognize that their success is our success. With our 24x7 support system, you can rest assured that we are always there to address any concerns, provide guidance, and ensure smooth operations.</p>
          </div>
          <div>
            <strong style={{ color: '#07294d' }}>High retention rate:</strong>
            <p style={{ margin: '4px 0 0 0' }}>The high retention rate of our franchise partners stands as a testament to the trust and faith they place in M-Tech Computers. This loyalty and long-term commitment showcase the strength of our franchise model and the support we provide to nurture sustainable and thriving businesses.</p>
          </div>
        </div>
      </motion.div>
    ),
    support: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}
      >
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#16a34a', borderBottom: '2px solid #16a34a', paddingBottom: '6px', marginBottom: '12px' }}>
            Start-up Support
          </h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <li>✓ Welcome kit</li>
            <li>✓ Promotional material & stationery</li>
            <li>✓ Office setup design layout</li>
            <li>✓ Recruitment assistance</li>
            <li>✓ Inauguration support</li>
            <li>✓ Counselling training</li>
            <li>✓ Marketing trainings</li>
            <li>✓ Panel Trainings</li>
            <li>✓ SEO & local web listing</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#16a34a', borderBottom: '2px solid #16a34a', paddingBottom: '6px', marginBottom: '12px' }}>
            Training
          </h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <li>✓ Monthly online Technical trainings</li>
            <li>✓ On Demand technical trainings</li>
            <li>✓ Offline training (various regions)</li>
            <li>✓ Sharing-based training facilities</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#16a34a', borderBottom: '2px solid #16a34a', paddingBottom: '6px', marginBottom: '12px' }}>
            Books & Certificates
          </h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <li>✓ Comprehensive course material</li>
            <li>✓ Paper & digital book options</li>
            <li>✓ Paper & digital exercise books</li>
            <li>✓ Online solutions for exercises</li>
            <li>✓ Physical & Digital certificates</li>
            <li>✓ Free Workshop certificates</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#16a34a', borderBottom: '2px solid #16a34a', paddingBottom: '6px', marginBottom: '12px' }}>
            Marketing Support
          </h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <li>✓ Dedicated Support staff</li>
            <li>✓ Common digital marketing</li>
            <li>✓ Promotional & Gift Items</li>
            <li>✓ Seminar & Presentation facilities</li>
            <li>✓ Yearly centralised events</li>
            <li>✓ Centralised lead Generation</li>
            <li>✓ National level Competitions</li>
            <li>✓ Inquiry follow ups & toll-free</li>
            <li>✓ Graphics design facility</li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#16a34a', borderBottom: '2px solid #16a34a', paddingBottom: '6px', marginBottom: '12px' }}>
            Student Support
          </h4>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#334155' }}>
            <li>✓ Online panel</li>
            <li>✓ Online tutorial</li>
            <li>✓ Free student kit</li>
            <li>✓ Placement alerts</li>
            <li>✓ Design uploads</li>
            <li>✓ Online certifications</li>
          </ul>
        </div>
      </motion.div>
    ),
    faq: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.q}
            answer={faq.a}
            isOpen={openFaqIndex === i}
            onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
          />
        ))}
      </motion.div>
    )
  };

  const getTestimonialsForDot = (dotIndex: number) => {
    const firstIdx = dotIndex % TESTIMONIALS.length;
    const secondIdx = (dotIndex + 1) % TESTIMONIALS.length;
    return [TESTIMONIALS[firstIdx], TESTIMONIALS[secondIdx]];
  };

  const currentPair = getTestimonialsForDot(activeTestimonialIndex);

  return (
    <div>
      {/* Hero with Apply Form */}
      <section className="franchise-hero-wrap">
        <div className="container">
          <div className="franchise-hero-grid">
            {/* Left Col */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1.15, marginBottom: '12px', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Start Your Own CAD Franchise Business
              </h1>
              <p style={{ fontSize: '17px', fontWeight: 500, color: '#f1f5f9', marginBottom: '28px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                India’s Leading CAD Training Brand – Low Investment, High Returns
              </p>

              {/* 2x2 Inner cards */}
              <div className="franchise-inner-grid">
                <motion.div 
                  className="franchise-inner-card bg-ctg-1"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="franchise-card-overlay"></div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 5 }}>
                    <FaBuilding style={{ fontSize: '24px', color: '#ffffff' }} />
                    <h4 className="franchise-card-title">3+ Centers</h4>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="franchise-inner-card bg-ctg-2"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="franchise-card-overlay"></div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 5 }}>
                    <FaCog style={{ fontSize: '24px', color: '#ffffff' }} />
                    <h4 className="franchise-card-title">CAD/CAM/CAE</h4>
                  </div>
                </motion.div>

                <motion.div 
                  className="franchise-inner-card bg-ctg-3"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="franchise-card-overlay"></div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 5 }}>
                    <FaChartLine style={{ fontSize: '24px', color: '#ffffff' }} />
                    <h4 className="franchise-card-title">95% Success Rate</h4>
                  </div>
                </motion.div>

                <motion.div 
                  className="franchise-inner-card bg-ctg-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="franchise-card-overlay"></div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 5 }}>
                    <FaTrophy style={{ fontSize: '24px', color: '#ffffff' }} />
                    <h4 className="franchise-card-title">Royalty Free Business</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Col: Form */}
            <motion.div 
              className="franchise-form-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="franchise-form-header">
                <h3>Apply Now</h3>
              </div>
              <div className="franchise-form-body">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {error && <p style={{ color: 'red', fontSize: '12.5px', fontWeight: 'bold', margin: '0' }}>{error}</p>}
                    
                    <input 
                      type="text" 
                      placeholder="Name *" 
                      className="franchise-form-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email *" 
                      className="franchise-form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input 
                      type="tel" 
                      placeholder="Contact Number *" 
                      className="franchise-form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      required
                    />
                    
                    <select
                      className="franchise-form-input"
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedCity('');
                      }}
                      required
                    >
                      <option value="">State *</option>
                      {statesList.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>

                    <select
                      className="franchise-form-input"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      required
                      disabled={!selectedState}
                    >
                      <option value="">Select City *</option>
                      {citiesList.map((ct) => (
                        <option key={ct} value={ct}>{ct}</option>
                      ))}
                    </select>

                    <input 
                      type="text" 
                      placeholder="Preferred Location *" 
                      className="franchise-form-input"
                      value={preferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      required
                    />
                    
                    <textarea 
                      placeholder="Message" 
                      className="franchise-form-input"
                      style={{ minHeight: '60px', resize: 'vertical' }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    
                    <button 
                      type="submit" 
                      className="btn" 
                      style={{ width: '100%', marginTop: '6px', padding: '12px', background: '#07294d', color: '#ffffff', fontWeight: 'bold' }}
                    >
                      Apply For Franchise
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    style={{ textAlign: 'center', padding: '20px 0' }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <FaCheckCircle style={{ fontSize: '42px', color: '#16a34a', marginBottom: '12px' }} />
                    <h4 style={{ color: '#07294d', fontWeight: 'bold', marginBottom: '8px' }}>Application Submitted!</h4>
                    <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: '1.5', marginBottom: '20px' }}>
                      Our expansion team will get in touch with you at <strong>{phone}</strong> to share center feasibility and royalty details.
                    </p>
                    <button className="btn btn-dark" onClick={handleReset} style={{ padding: '8px 16px', fontSize: '13px' }}>
                      Submit Another
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#eff1f6', paddingTop: '50px', paddingBottom: '50px' }}>
        <div className="container">
          
          <div className="franchise-tabs-header">
            <button 
              className={`franchise-tab-btn ${activeTab === 'scope' ? 'active' : ''}`}
              onClick={() => setActiveTab('scope')}
            >
              Franchise Scope
            </button>
            <button 
              className={`franchise-tab-btn ${activeTab === 'why' ? 'active' : ''}`}
              onClick={() => setActiveTab('why')}
            >
              Why M-Tech Computers ?
            </button>
            <button 
              className={`franchise-tab-btn ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => setActiveTab('support')}
            >
              Franchise Support
            </button>
            <button 
              className={`franchise-tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>

          <div style={{ background: '#ffffff', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', maxWidth: '960px', margin: '0 auto' }}>
            {tabContents[activeTab]}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="franchise-partner-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <span style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#f97316' }}>
              Our franchise partner speaks
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#ffffff', marginTop: '6px' }}>
              What our franchise partner speaks ?
            </h2>
          </div>

          <div className="franchise-testimonials-grid">
            <AnimatePresence mode="wait">
              {currentPair.map((test, index) => (
                <motion.div 
                  key={`${test.name}-${activeTestimonialIndex}-${index}`}
                  className="franchise-testimonial-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="franchise-testimonial-quote">
                    "{test.quote}"
                  </p>
                  <div className="franchise-testimonial-author">
                    <div className="franchise-testimonial-avatar-wrapper">
                      <div className="franchise-testimonial-avatar">
                        <img 
                          src={test.avatar} 
                          alt={test.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="franchise-testimonial-quote-badge">“</div>
                    </div>
                    <div className="franchise-testimonial-info">
                      <h4>{test.name}</h4>
                      <p>{test.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '35px' }}>
            {Array.from({ length: 12 }).map((_, idx) => (
              <span 
                key={idx} 
                onClick={() => setActiveTestimonialIndex(idx)}
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  background: idx === activeTestimonialIndex ? '#f97316' : 'rgba(255, 255, 255, 0.3)',
                  display: 'inline-block',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#07294d', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Our Franchisee Events
              <span style={{ width: '50px', height: '3px', background: '#f97316', display: 'inline-block' }}></span>
            </h2>
          </div>

          <div className="franchise-events-grid">
            <motion.div 
              className="franchise-event-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="franchise-event-img-wrap" style={{ overflow: 'hidden' }}>
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2022/12/TLY00166-min-scaled.jpg" 
                  alt="Annual Business Meet 2022" 
                  className="franchise-event-img"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h4 className="franchise-event-title">Annual Business Meet 2022</h4>
            </motion.div>

            <motion.div 
              className="franchise-event-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="franchise-event-img-wrap" style={{ overflow: 'hidden' }}>
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2021/03/IMG_3294-scaled.jpg" 
                  alt="Annual Franchise Meet 2019" 
                  className="franchise-event-img"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h4 className="franchise-event-title">Annual Franchise Meet 2019</h4>
            </motion.div>

            <motion.div 
              className="franchise-event-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="franchise-event-img-wrap" style={{ overflow: 'hidden' }}>
                <img 
                  src="https://caddeskindia.com/wp-content/uploads/2021/03/aa.jpg" 
                  alt="Annual Franchise Meet 2018" 
                  className="franchise-event-img"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <h4 className="franchise-event-title">Annual Franchise Meet 2018</h4>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Books library background CTA strip */}
      <section className="franchise-cta-strip">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', marginBottom: '30px', lineHeight: '1.3' }}>
            Obtaining further information by make a contact with our Experts.
          </h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:+917073555921" 
              className="btn" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#dc3545', color: '#ffffff', border: 'none', padding: '14px 32px', fontSize: '15.5px', fontWeight: 'bold', borderRadius: '4px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
            >
              <FaPhoneAlt size={14} /> Call | +91-7073555921
            </a>
            <Link 
              href="/contact" 
              className="btn btn-white" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#ffffff', border: '2px solid #ffffff', padding: '12px 32px', fontSize: '15.5px', fontWeight: 'bold', borderRadius: '4px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#dc3545';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <FaEnvelope size={14} /> Write to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
