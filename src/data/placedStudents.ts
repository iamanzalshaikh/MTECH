export type PlacedStudent = {
  name: string;
  role: string;
  company: string;
  branch?: string;
  photo?: string;
};

export const placementYears = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
] as const;

export type PlacementYear = (typeof placementYears)[number];

export const placedStudentsByYear: Record<PlacementYear, PlacedStudent[]> = {
  "2025-2026": [
    {
        "name": "Ajiyank Dhavle",
        "role": "Interior Designer",
        "company": "Godrej Interior",
        "branch": "Interior",
        "photo": "/placed-students/ajiyank-dhavle.jpeg"
    },
    {
        "name": "Ketan Shinde",
        "role": "Design Engg",
        "company": "Crystal Automation",
        "branch": "Mechanical",
        "photo": "/placed-students/ketan-shinde.jpeg"
    },
    {
        "name": "Rajesh Bhoir",
        "role": "Site Engg",
        "company": "Cosmos consulting engineers",
        "branch": "Civil",
        "photo": "/placed-students/rajesh-bhoir.jpeg"
    },
    {
        "name": "Mihir Patel",
        "role": "Structural Engg",
        "company": "Nayan Dholakia Chartered Eng.",
        "branch": "Civil",
        "photo": "/placed-students/mihir-patel.jpeg"
    },
    {
        "name": "Asif Alam",
        "role": "AutoCAD Engg",
        "company": "Trinity infra roofing",
        "branch": "Interior",
        "photo": "/placed-students/asif-alam.jpeg"
    },
    {
        "name": "Patal Pawar",
        "role": "Design Engg",
        "company": "Oriental containers LTD.",
        "branch": "Mechanical",
        "photo": "/placed-students/patal-pawar.jpeg"
    },
    {
        "name": "Sayali Pardhi",
        "role": "CAD Engg",
        "company": "Geoinfo Mapping Solution",
        "branch": "Civil",
        "photo": "/placed-students/sayali-pardhi.jpeg"
    },
    {
        "name": "Payal Hanuvt",
        "role": "Design Engg",
        "company": "Priya Enterprises",
        "branch": "Civil",
        "photo": "/placed-students/payal-hanuvt.jpeg"
    },
    {
        "name": "Kirti Bhalerao",
        "role": "Design Engg",
        "company": "Precon Global",
        "branch": "Civil",
        "photo": "/placed-students/kirti-bhalerao.jpeg"
    },
    {
        "name": "Mahesh Pawar",
        "role": "AutoCAD Engg",
        "company": "Trinity infra roofing",
        "branch": "Interior",
        "photo": "/placed-students/mahesh-pawar.jpeg"
    },
    {
        "name": "Sagar Pawar",
        "role": "Marketing Executive",
        "company": "CADD Centre",
        "branch": "Mechanical",
        "photo": "/placed-students/sagar-pawar.jpeg"
    },
    {
        "name": "Vishal Badgujar",
        "role": "CAD Engg",
        "company": "Technotorc pvt. ltd",
        "branch": "Mechanical",
        "photo": "/placed-students/vishal-badgujar.jpeg"
    },
    {
        "name": "Jay Katke",
        "role": "CAD Engg",
        "company": "Technotorc pvt. ltd",
        "branch": "Mechanical",
        "photo": "/placed-students/jay-katke.jpeg"
    },
    {
        "name": "Mayuresh Lahane",
        "role": "CAD Designer",
        "company": "Manoj Engineering",
        "branch": "Mechanical",
        "photo": "/placed-students/mayuresh-lahane.jpeg"
    },
    {
        "name": "Vinita Zanke",
        "role": "Electrical Engg",
        "company": "Samsung C&T",
        "branch": "Electrical",
        "photo": "/placed-students/vinita-zanke.jpeg"
    },
    {
        "name": "Mayur Boste",
        "role": "Junior Engg",
        "company": "Vishal Enterprises",
        "branch": "Civil",
        "photo": "/placed-students/mayur-boste.jpeg"
    },
    {
        "name": "Laxman Desai",
        "role": "Design Engg",
        "company": "Liquee Seals Pvt.ltd",
        "branch": "Mechanical",
        "photo": "/placed-students/laxman-desai.jpeg"
    },
    {
        "name": "Suyesh Bagde",
        "role": "Junior Engg",
        "company": "HM Associate",
        "branch": "Civil",
        "photo": "/placed-students/suyesh-bagde.jpeg"
    },
    {
        "name": "Vaibhav Vishe",
        "role": "Junior Engg",
        "company": "Nilam Arch.",
        "branch": "Civil",
        "photo": "/placed-students/vaibhav-vishe.jpeg"
    },
    {
        "name": "Jaydeep Shirose",
        "role": "Design Engg",
        "company": "Hightech Pvt. Ltd",
        "branch": "Mechanical",
        "photo": "/placed-students/jaydeep-shirose.jpeg"
    },
    {
        "name": "Monali Gore",
        "role": "Junior Engg",
        "company": "Jijau Construction",
        "branch": "Civil",
        "photo": "/placed-students/monali-gore.jpeg"
    },
    {
        "name": "Abhijeet Kamble",
        "role": "Senior Engg",
        "company": "Nirman Engg. Construction Company",
        "branch": "Civil",
        "photo": "/placed-students/abhijeet-kamble.jpeg"
    },
    {
        "name": "Sunil Chavhan",
        "role": "Site Engg",
        "company": "Home Developers",
        "branch": "Civil",
        "photo": "/placed-students/sunil-chavhan.jpeg"
    },
    {
        "name": "D Balaji",
        "role": "Cad Engg",
        "company": "Tosoh India Pvt Ltd",
        "branch": "Mech",
        "photo": "/placed-students/d-balaji.jpeg"
    },
    {
        "name": "Lajri Badhe",
        "role": "Design Engg",
        "company": "Alstom Company",
        "branch": "Electrical",
        "photo": "/placed-students/lajri-badhe.jpeg"
    },
    {
        "name": "Ashish Jogi",
        "role": "Mechanical Engg",
        "company": "Symetrix Elevators pvt. Ltd",
        "branch": "Mechanical",
        "photo": "/placed-students/ashish-jogi.jpeg"
    },
    {
        "name": "Poooja Bagul",
        "role": "AutoCAD operator",
        "company": "S.K.N Enterprises",
        "branch": "Interior",
        "photo": "/placed-students/poooja-bagul.jpeg"
    },
    {
        "name": "Sagar Patil",
        "role": "AutoCAD Engg",
        "company": "Sam Tec. Engineering Pvt. Ltd.",
        "branch": "Electrical",
        "photo": "/placed-students/sagar-patil.jpeg"
    },
    {
        "name": "Shubhangi Chahnde",
        "role": "Interior Designer",
        "company": "Om Enterprises",
        "branch": "Interior",
        "photo": "/placed-students/shubhangi-chahnde.jpeg"
    },
    {
        "name": "Jay Kokate",
        "role": "Site Engineer",
        "company": "Kohinoor Construction",
        "branch": "Civil",
        "photo": "/placed-students/jay-kokate.jpeg"
    },
    {
        "name": "Nishant Barve",
        "role": "Site Engineer",
        "company": "Kohinoor Construction",
        "branch": "Civil",
        "photo": "/placed-students/nishant-barve.jpeg"
    },
    {
        "name": "Sneha Sonawane",
        "role": "Design Engg",
        "company": "Precon Global",
        "branch": "Civil",
        "photo": "/placed-students/sneha-sonawane.jpeg"
    },
    {
        "name": "Sunita Ahire",
        "role": "Autocad Designer",
        "company": "Worley",
        "branch": "B.com",
        "photo": "/placed-students/sunita-ahire.jpeg"
    },
    {
        "name": "Nishant Pawar",
        "role": "Civil Draughman",
        "company": "Aerotide Infra.eng.Pvt ltd.",
        "branch": "Civil",
        "photo": "/placed-students/nishant-pawar.jpeg"
    },
    {
        "name": "Kunal Joshi",
        "role": "Design Engg",
        "company": "Aerotide Infra.eng.Pvt ltd.",
        "branch": "Civil"
    },
    {
        "name": "Swamidarshan",
        "role": "Civil Draughman",
        "company": "Aerotide Infra.eng.Pvt ltd.",
        "branch": "Civil",
        "photo": "/placed-students/swamidarshan.jpeg"
    },
    {
        "name": "Ashlesha Dongre",
        "role": "Placed Candidate",
        "company": "Royal Mech Engineering",
        "branch": "Mechanical",
        "photo": "/placed-students/ashlesha-dongre.jpg"
    },
    {
        "name": "Pallavi Lokhande",
        "role": "Design Eng",
        "company": "Royal Mech Engineering",
        "branch": "Mechanical"
    }
  ],
  "2024-2025": [
    {
      "name": "Karan Fodse",
      "role": "Design Engineer",
      "company": "Ecostruct Engineering Pvt. Ltd"
    },
    {
      "name": "Janmesh Bhoir",
      "role": "Junior Designer",
      "company": "Facade Design Factory"
    },
    {
      "name": "Siddhi Paste",
      "role": "Draftsman",
      "company": "Magcons Consulting Engineers Pvt. Ltd"
    },
    {
      "name": "Suraj Phanse",
      "role": "Draftsman",
      "company": "Magcons Consulting Engineers Pvt. Ltd"
    },
    {
      "name": "Shreenath Badade",
      "role": "Design Engineer",
      "company": "Imperial Pharmachines Pvt. Ltd"
    },
    {
      "name": "Vivek Jagtap",
      "role": "Design Engineer",
      "company": "Jyoti Switch Gear Pvt Ltd"
    },
    {
      "name": "Gurunath Rasal",
      "role": "Draughtsman",
      "company": "Epsilon Design Consultancy Pvt. Ltd"
    },
    {
      "name": "Rahul Jawale",
      "role": "Electrical Designer",
      "company": "Symatic Engineering Pvt Ltd"
    },
    {
      "name": "Shivam Pandey",
      "role": "Draftsman",
      "company": "Magcons Consulting Engineers Pvt. Ltd"
    },
    {
      "name": "Hemant Zope",
      "role": "Cad Engineer Intern",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Vedashree Modak",
      "role": "Draftsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Shubham Gaud",
      "role": "Draftsman",
      "company": "Technovision Engineers Pvt Ltd"
    },
    {
      "name": "Aryan Prajapati",
      "role": "Draftsman",
      "company": "Parkway"
    },
    {
      "name": "Vaibhav Athawale",
      "role": "Graphic Design Intern",
      "company": "Creative Juice"
    },
    {
      "name": "Nishad Pawar",
      "role": "Mechanical Design Engineer",
      "company": "Pragati Machinery and Engineering Pvt. Ltd."
    },
    {
      "name": "Sameer Kenjale",
      "role": "Design Engineer",
      "company": "Douse Fire Systems Pvt. Ltd"
    },
    {
      "name": "Mahi Joshi",
      "role": "Trainee Designer",
      "company": "5 M Projects & Solutions Pvt. Ltd."
    },
    {
      "name": "Renuka Koshti",
      "role": "CAD Draftsman",
      "company": "Shoresafe Maritime Consultant Pvt. Ltd."
    },
    {
      "name": "Mayuri Utekar",
      "role": "CAD Draftsman",
      "company": "Shoresafe Maritime Consultant Pvt. Ltd."
    },
    {
      "name": "Anushka Shinde",
      "role": "Trainee",
      "company": "Fourtune4 technologies"
    },
    {
      "name": "Prasad Sangale",
      "role": "Design Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Prathamesh Chavhan",
      "role": "Trainee",
      "company": "Fourtune4 technologies"
    },
    {
      "name": "Mayur Tandel",
      "role": "Autocad Designer",
      "company": "Magnova Engineers"
    },
    {
      "name": "Vikrant Khaire",
      "role": "Full Stack Developer",
      "company": "KodeKrunch"
    },
    {
      "name": "Rushikesh Dhawde",
      "role": "Mech Draftsman",
      "company": "K2 Drafters"
    },
    {
      "name": "Rohit Govalkar",
      "role": "Prepress Artist",
      "company": "Janus International Pvt. Ltd."
    },
    {
      "name": "Hardika Gandhi",
      "role": "Autocad Engineer",
      "company": "Expert Control & Infotech"
    },
    {
      "name": "Sunil Kumar",
      "role": "Design Engineer",
      "company": "Pragati Machinery and Engineering Pvt. Ltd."
    },
    {
      "name": "Tanvi Khade",
      "role": "Estimation Engineer",
      "company": "Douse Fire Systems Pvt. Ltd"
    },
    {
      "name": "Omkar Misal",
      "role": "Design Engineer",
      "company": "Winntus Group"
    },
    {
      "name": "Shubham Badgujar",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Nivedita Shinde",
      "role": "Design Engineer",
      "company": "Ecube Integrated Solutions Pvt Ltd"
    },
    {
      "name": "Nikita Chaudhary",
      "role": "Estimation Engineer",
      "company": "Douse Fire Systems Pvt. Ltd"
    },
    {
      "name": "Raj Deshmukh",
      "role": "Estimation Engineer",
      "company": "Douse Fire Systems Pvt. Ltd"
    },
    {
      "name": "Akshay Dhebe",
      "role": "Design Engineer",
      "company": "Pragati Machinery and Engineering Pvt. Ltd."
    },
    {
      "name": "Manthan Gaikar",
      "role": "Draftsman",
      "company": "SuperMech Cranes & Components"
    },
    {
      "name": "Sujeet Govind Kundkar",
      "role": "Design Engineer",
      "company": "Jyoti Switch Gear Pvt Ltd"
    },
    {
      "name": "Suraj Vilas Shinde",
      "role": "Designer",
      "company": "Arihant Parking System"
    },
    {
      "name": "Rohit Bhausaheb Pawade",
      "role": "Civil Draughtsman",
      "company": "Magcons Consulting Engineers Pvt. Ltd"
    },
    {
      "name": "Rohit Panchal",
      "role": "Design Executive",
      "company": "ParkHoch Technologies LLP"
    },
    {
      "name": "Akhilesh Kumar Yadav",
      "role": "Design Executive",
      "company": "ParkHoch Technologies LLP"
    },
    {
      "name": "Pramod Dhebe",
      "role": "R & D Engineer",
      "company": "Coulomb Litech Pvt. Ltd"
    },
    {
      "name": "Atul Dalvi",
      "role": "Project Engineer",
      "company": "Nikhil Comforts"
    },
    {
      "name": "Mahesh Chauhan",
      "role": "Design Engineer",
      "company": "Avismatic Solutions Pvt. Ltd"
    },
    {
      "name": "Abhishek Ananda Dhanawade",
      "role": "Design Cum Purchase",
      "company": "Unicorn Controls Pvt Ltd"
    },
    {
      "name": "Pratik Shankar Nikam",
      "role": "Designer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Vaishnavi Shriram Singergavakar",
      "role": "CAD Engineer",
      "company": "Ecube Integrated Solutions Pvt Ltd"
    },
    {
      "name": "Atharva Rajendra Khot",
      "role": "Junior Designer",
      "company": "Lotus Technicals Private Limited"
    },
    {
      "name": "Dipti Pravin Pawar",
      "role": "Designer Electrical",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "MD Anwar",
      "role": "Mechanical Draftsman",
      "company": "RAYS Consultants"
    },
    {
      "name": "Manali Prashant Bhoir",
      "role": "Interior Designer",
      "company": "Kalpniketan Architecture Studio"
    },
    {
      "name": "Anuj Narendra Mandlik",
      "role": "Proposal Engineer",
      "company": "Payper Bagging India Pvt Ltd"
    },
    {
      "name": "Vikas Yadav",
      "role": "Designer",
      "company": "Synergy Facade Consultancy"
    },
    {
      "name": "Naresh Pawar",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Suchit Thakare",
      "role": "Jr. BIM Architect",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    }
  ],
  "2023-2024": [
    {
      "name": "Abhijit Gotad",
      "role": "Mechanical Draughtsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Mohit Nuruddin Sagwekar",
      "role": "Mechanical Draughtsman",
      "company": "Madhavi Wood Components Pvt Ltd"
    },
    {
      "name": "Vedant Aherkar",
      "role": "Civil Draughtsman",
      "company": "O Archilos"
    },
    {
      "name": "Prathamesh Utekar",
      "role": "Civil Draughtsman",
      "company": "Magcons Consulting Engineers Pvt. Ltd"
    },
    {
      "name": "Ismail Dabir",
      "role": "Civil Draughtsman",
      "company": "Winayak Industries"
    },
    {
      "name": "Jatin Balodi",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Jeeshan Lambade",
      "role": "Electrical Draughtsman",
      "company": "Rulka Electricals Ltd."
    },
    {
      "name": "Ishan Pawaskar",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Kundan Patil",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Omkar Nimbalkar",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Pankaj Salunkhe",
      "role": "Jr. Electrical Design Engineer",
      "company": "T-Design Engineers"
    },
    {
      "name": "Pritam Pardeshi",
      "role": "Jr. Electrical Design Engineer",
      "company": "T-Design Engineers"
    },
    {
      "name": "Sameer Gazali",
      "role": "Trainee Engineer - Design",
      "company": "RA Engineering"
    },
    {
      "name": "Saurabh Desai",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Siddharth Doke",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Shweta Dhage",
      "role": "Interior Designer",
      "company": "Sleek by Asian Paints"
    },
    {
      "name": "Vikrant Manoj Ripote",
      "role": "Design Engineer",
      "company": "Core De Technical Solutions"
    },
    {
      "name": "Abhay Tripathi",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Abhijit Thombre",
      "role": "Mechanical Draughtsman",
      "company": "Super FLP Engineers Private Limited"
    },
    {
      "name": "Achal Bagmare",
      "role": "Trainee Executive Engineer",
      "company": "Sikraft"
    },
    {
      "name": "Akshay Gawade",
      "role": "Assistant Design",
      "company": "avenue"
    },
    {
      "name": "Akshay Vaykar",
      "role": "Mechanical Draughtsman",
      "company": "Zen Engineers"
    },
    {
      "name": "Amogh Chidre",
      "role": "Trainee",
      "company": "Swani Spice"
    },
    {
      "name": "Chetan Jadhav",
      "role": "D’man (Mec.)",
      "company": "Fitech System Pvt. Ltd."
    },
    {
      "name": "Anchal Arjun Sharma",
      "role": "Jr. Civil Draughtsman",
      "company": "Structnik Consulting engineers"
    },
    {
      "name": "Durga Patwa",
      "role": "Jr. Engineer Automation",
      "company": "FAC"
    },
    {
      "name": "Deepak Mahesh Zepale",
      "role": "Electrical Engineer",
      "company": "Orbital"
    },
    {
      "name": "Farhan Khan",
      "role": "D’man (Civil)",
      "company": "Sleek by Asian Paints"
    },
    {
      "name": "Hemant Sawant",
      "role": "Electrical Trainee",
      "company": "Orbital"
    },
    {
      "name": "Saurabh Tiwari",
      "role": "Automation Engineer",
      "company": "FAC"
    },
    {
      "name": "Poonam Mhatre",
      "role": "Interior Designer",
      "company": "Fine Lines interior designer"
    },
    {
      "name": "Aishwarya Teli",
      "role": "Designer - Technical Support",
      "company": "supernormal"
    },
    {
      "name": "Ashwin Sunil",
      "role": "Designer",
      "company": "Parkway"
    },
    {
      "name": "Dipen Shrivastava",
      "role": "Design Engineer",
      "company": "KRISTEEL"
    },
    {
      "name": "Kirti Lone",
      "role": "Structural Design Engineer",
      "company": "Technovision Engineers Pvt Ltd"
    },
    {
      "name": "Swapnil Kadam",
      "role": "Jr. Design Engineer (MEP)",
      "company": "T-Design Engineers"
    },
    {
      "name": "Vijaya Lavate",
      "role": "CAD Engineer Intern",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Tejas Thorat",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Vikas Vandre",
      "role": "CAD Engineer Intern",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Narendra Singh",
      "role": "Interior Designer",
      "company": "Dny Hospitality"
    },
    {
      "name": "Abdullah Qazi",
      "role": "Jr. BIM Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Rocky Koli",
      "role": "Design Engineer",
      "company": "IPH"
    },
    {
      "name": "Aditya Ghadge",
      "role": "Civil Draughtsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Omkar Wadkar",
      "role": "Civil Draughtsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Mayur Batwalkar",
      "role": "Designer",
      "company": "URJA Techniques (India) Pvt. Ltd."
    },
    {
      "name": "Md Amirullah Ansari",
      "role": "PLC Programmer",
      "company": "B-Tex Textile Machinery"
    },
    {
      "name": "Gaurav Zanzane",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Jay Amte",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Ruturaj Bhoir",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Nikhil Kumar",
      "role": "CAD Engineer",
      "company": "Devta Electricals"
    },
    {
      "name": "Firoj Mulani",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Shubham Mhatre",
      "role": "Product Engineer Trainee",
      "company": "Press Fit Pipe and Profile"
    },
    {
      "name": "Siddhesh Patil",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Karan Shelar",
      "role": "Jr. BIM Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Akash Rikame",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    }
  ],
  "2022-2023": [
    {
      "name": "Faiz Pathan",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Abhijeet Hujare",
      "role": "Design Engineer",
      "company": "VYSUS CONSULTING INDIA PVT."
    },
    {
      "name": "Dipak Panchal",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Ameya Rasam",
      "role": "Trainee Engineer",
      "company": "GTS Controls And Energy"
    },
    {
      "name": "Janvi Agarwal",
      "role": "Junior Designer",
      "company": "Mangesh Interiors"
    },
    {
      "name": "Shubham Suhas",
      "role": "Design Engineer",
      "company": "KRISTEEL"
    },
    {
      "name": "Suyog Agree",
      "role": "PLC Programmer",
      "company": "Techno Clean India Pvt. Ltd."
    },
    {
      "name": "Yashasvi Pujari",
      "role": "Junior Designer",
      "company": "Mangesh Interiors"
    },
    {
      "name": "Akshada Koli",
      "role": "Designer",
      "company": "Saicon System"
    },
    {
      "name": "Harshal Shinge",
      "role": "Trainee Engineer",
      "company": "Freture Techno"
    },
    {
      "name": "Prathamesh Gaonkar",
      "role": "Designer",
      "company": "Redplus Partition"
    },
    {
      "name": "Sanket Tawade",
      "role": "Design Engineer",
      "company": "Stakall"
    },
    {
      "name": "Shailesh Lanjekar",
      "role": "Designer",
      "company": "Aveo Hardware Pvt. Ltd."
    },
    {
      "name": "Shubham Mitra",
      "role": "Project Engineer",
      "company": "Sharp Line Automation Pvt. Ltd."
    },
    {
      "name": "Snehit Budhavale",
      "role": "Design Engineer",
      "company": "KRISTEEL"
    },
    {
      "name": "Mangesh More",
      "role": "Jr. MEP Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Saurabh Yadav",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Sandesh Chavan",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Pratik Khopade",
      "role": "Design Engineer",
      "company": "KRISTEEL"
    },
    {
      "name": "Virendra Patil",
      "role": "Design Engineer",
      "company": "Karyasiddhi Environmental Engineering Co Pvt. Ltd."
    },
    {
      "name": "Vishv Ahire",
      "role": "Civil Draughtsman",
      "company": "Parkway"
    },
    {
      "name": "Nikita Shelar",
      "role": "MEP Draughtsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Atharv Kadam",
      "role": "Trainee Engineer",
      "company": "Winntus Group"
    },
    {
      "name": "Pratham Pawar",
      "role": "Design Operator",
      "company": "Anfarnd Infotech Pvt. Ltd."
    },
    {
      "name": "Turab Mhaskar",
      "role": "Civil Draughtsman",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Tejal Bandekar",
      "role": "Jr. BIM Architect",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Rahul Chauhan",
      "role": "BIM Modeller",
      "company": "Global Drafting Studio"
    },
    {
      "name": "Swapnil Gaikwad",
      "role": "BIM Modeller",
      "company": "Global Drafting Studio"
    },
    {
      "name": "Vishal Kerkar",
      "role": "BIM Modeller",
      "company": "Global Drafting Studio"
    },
    {
      "name": "Janhavie V Naggpure",
      "role": "Interior Designer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Akshata Jarag",
      "role": "Design Engineer",
      "company": "AC Electromech Engineers"
    },
    {
      "name": "Amol Palwar",
      "role": "Electrical Draughtsman",
      "company": "Rulka Electricals Ltd."
    },
    {
      "name": "Mayuresh Pandhare",
      "role": "Electrical Draughtsman",
      "company": "Rulka Electricals Ltd."
    },
    {
      "name": "Yadnesh Bagade",
      "role": "Electrical Engineer",
      "company": "AC Electromech Engineers"
    },
    {
      "name": "Akshata Tondvalkar",
      "role": "Internship",
      "company": "Chemionix"
    },
    {
      "name": "Kalpesh Bhopi",
      "role": "Jr. BIM Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Mohit Talar",
      "role": "Design Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Rahul Hagawane",
      "role": "CAD Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Rohan Chavan",
      "role": "Graphic Designer (Trainee)",
      "company": "Gobind Udyog Bhavan Industrial Estate"
    },
    {
      "name": "Saurabh Pawar",
      "role": "Junior Engineer",
      "company": "Kwik Flex Industries"
    },
    {
      "name": "Akash Panchal",
      "role": "Design Engineer",
      "company": "Fablab Engineer India Pvt. Ltd."
    },
    {
      "name": "Sneha Yewale",
      "role": "Electrical Design Engineer",
      "company": "Milestone PLM Solutions Pvt. Ltd."
    },
    {
      "name": "Vikas Vishwakarma",
      "role": "Mechanical Draughtsman (Trainee)",
      "company": "Apurv Pvt. Ltd. Co."
    },
    {
      "name": "Akshay Todkar",
      "role": "CAD Engineer",
      "company": "Sameer"
    },
    {
      "name": "Vyanktesh Gaikwad",
      "role": "CAD Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Avinash Guttedar",
      "role": "CAD Engineer",
      "company": "Fitech System Pvt. Ltd."
    },
    {
      "name": "Anagha Dhuri",
      "role": "Mechanical Draughtsman",
      "company": "Fablab Engineer India Pvt. Ltd."
    },
    {
      "name": "Amit Chavan",
      "role": "Automation Inspection Engineer",
      "company": "Goemeneasz Conformity Assessment Service Pvt. Ltd."
    },
    {
      "name": "Ankit Gholap",
      "role": "Design Engineer",
      "company": "Soham Engineering Services"
    },
    {
      "name": "Ankush Pednekar",
      "role": "Design Engineer",
      "company": "Larsen & Toubro"
    },
    {
      "name": "Ashraf Hashmi",
      "role": "Project Engineer",
      "company": "Kaizen Automation"
    },
    {
      "name": "Bazil Shaikh",
      "role": "Planning and Design Engineer",
      "company": "Fablab Engineer India Pvt. Ltd."
    },
    {
      "name": "Nagawendra Kumar Singh",
      "role": "Design Engineer",
      "company": "Fablab Engineer India Pvt. Ltd."
    },
    {
      "name": "Nikhil Thakur",
      "role": "Trainee (Electrical Engineer)",
      "company": "Goemeneasz Conformity Assessment Service Pvt. Ltd."
    },
    {
      "name": "Omkar Haravade",
      "role": "Trainee (Electrical Engineer)",
      "company": "Goemeneasz Conformity Assessment Service Pvt. Ltd."
    }
  ],
  "2021-2022": [
    {
      "name": "Ajiyank Dhavle",
      "role": "Interior Designer",
      "company": "Godrej Interior",
      "branch": "Interior",
      "photo": "/images/placed-students/student-01.jpg"
    },
    {
      "name": "Ketan Shinde",
      "role": "Design Engineer",
      "company": "Crystal Automation",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-02.jpg"
    },
    {
      "name": "Rajesh Bhoir",
      "role": "Site Engineer",
      "company": "Cosmos Consulting Engineers",
      "branch": "Civil",
      "photo": "/images/placed-students/student-03.jpg"
    },
    {
      "name": "Mihir Patel",
      "role": "Structural Engineer",
      "company": "Nayan Dholakia Chartered Engineers",
      "branch": "Civil",
      "photo": "/images/placed-students/student-04.jpg"
    },
    {
      "name": "Asif Alam",
      "role": "AutoCAD Engineer",
      "company": "Trinity Infra Roofing",
      "branch": "Interior",
      "photo": "/images/placed-students/student-05.jpg"
    },
    {
      "name": "Patal Pawar",
      "role": "Design Engineer",
      "company": "Oriental Containers Ltd.",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-06.jpg"
    },
    {
      "name": "Sayali Pardhi",
      "role": "CAD Engineer",
      "company": "Geoinfo Mapping Solution",
      "branch": "Civil",
      "photo": "/images/placed-students/student-07.jpg"
    },
    {
      "name": "Payal Hanuvt",
      "role": "Design Engineer",
      "company": "Priya Enterprises",
      "branch": "Civil",
      "photo": "/images/placed-students/student-08.jpg"
    },
    {
      "name": "Kirti Bhalerao",
      "role": "Design Engineer",
      "company": "Precon Global",
      "branch": "Civil",
      "photo": "/images/placed-students/student-09.jpg"
    },
    {
      "name": "Mahesh Pawar",
      "role": "AutoCAD Engineer",
      "company": "Trinity Infra Roofing",
      "branch": "Interior",
      "photo": "/images/placed-students/student-10.jpg"
    },
    {
      "name": "Sagar Pawar",
      "role": "Marketing Executive",
      "company": "CADD Centre",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-11.jpg"
    },
    {
      "name": "Vishal Badgujar",
      "role": "CAD Engineer",
      "company": "Technotorc Pvt. Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-12.jpg"
    },
    {
      "name": "Jay Katke",
      "role": "CAD Engineer",
      "company": "Technotorc Pvt. Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-13.jpg"
    },
    {
      "name": "Mayuresh Lahane",
      "role": "CAD Designer",
      "company": "Manoj Engineering",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-14.jpg"
    },
    {
      "name": "Vinita Zanke",
      "role": "Electrical Engineer",
      "company": "Samsung C&T",
      "branch": "Electrical",
      "photo": "/images/placed-students/student-15.jpg"
    },
    {
      "name": "Mayur Boste",
      "role": "Junior Engineer",
      "company": "Vishal Enterprises",
      "branch": "Civil",
      "photo": "/images/placed-students/student-16.jpg"
    },
    {
      "name": "Laxman Desai",
      "role": "Design Engineer",
      "company": "Liquee Seals Pvt. Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-17.jpg"
    },
    {
      "name": "Suyesh Bagde",
      "role": "Junior Engineer",
      "company": "HM Associate",
      "branch": "Civil",
      "photo": "/images/placed-students/student-18.jpg"
    },
    {
      "name": "Vaibhav Vishe",
      "role": "Junior Engineer",
      "company": "Nilam Architects",
      "branch": "Civil",
      "photo": "/images/placed-students/student-19.jpg"
    },
    {
      "name": "Jaydeep Shirose",
      "role": "Design Engineer",
      "company": "Hightech Pvt. Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-20.jpg"
    },
    {
      "name": "Monali Gore",
      "role": "Junior Engineer",
      "company": "Jijau Construction",
      "branch": "Civil",
      "photo": "/images/placed-students/student-21.jpg"
    },
    {
      "name": "Abhijeet Kamble",
      "role": "Senior Engineer",
      "company": "Nirman Engg. Construction Company",
      "branch": "Civil",
      "photo": "/images/placed-students/student-22.jpg"
    },
    {
      "name": "Sunil Chavhan",
      "role": "Site Engineer",
      "company": "Home Developers",
      "branch": "Civil",
      "photo": "/images/placed-students/student-23.jpg"
    },
    {
      "name": "D Balaji",
      "role": "CAD Engineer",
      "company": "Tosoh India Pvt Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-24.jpg"
    },
    {
      "name": "Lajri Badhe",
      "role": "Design Engineer",
      "company": "Alstom Company",
      "branch": "Electrical",
      "photo": "/images/placed-students/student-25.jpg"
    },
    {
      "name": "Ashish Jogi",
      "role": "Mechanical Engineer",
      "company": "Symetrix Elevators Pvt. Ltd",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-26.jpg"
    },
    {
      "name": "Pooja Bagul",
      "role": "AutoCAD Operator",
      "company": "S.K.N Enterprises",
      "branch": "Interior",
      "photo": "/images/placed-students/student-27.jpg"
    },
    {
      "name": "Sagar Patil",
      "role": "AutoCAD Engineer",
      "company": "Sam Tec. Engineering Pvt. Ltd.",
      "branch": "Electrical",
      "photo": "/images/placed-students/student-28.jpg"
    },
    {
      "name": "Shubhangi Chahnde",
      "role": "Interior Designer",
      "company": "Om Enterprises",
      "branch": "Interior",
      "photo": "/images/placed-students/student-29.jpg"
    },
    {
      "name": "Jay Kokate",
      "role": "Site Engineer",
      "company": "Kohinoor Construction",
      "branch": "Civil",
      "photo": "/images/placed-students/student-30.jpg"
    },
    {
      "name": "Nishant Barve",
      "role": "Site Engineer",
      "company": "Kohinoor Construction",
      "branch": "Civil",
      "photo": "/images/placed-students/student-31.jpg"
    },
    {
      "name": "Sneha Sonawane",
      "role": "Design Engineer",
      "company": "Precon Global",
      "branch": "Civil",
      "photo": "/images/placed-students/student-32.jpg"
    },
    {
      "name": "Sunita Ahire",
      "role": "AutoCAD Designer",
      "company": "Worley",
      "branch": "B.Com",
      "photo": "/images/placed-students/student-33.jpg"
    },
    {
      "name": "Nishant Pawar",
      "role": "Civil Draughtsman",
      "company": "Aerotide Infra. Eng. Pvt. Ltd.",
      "branch": "Civil",
      "photo": "/images/placed-students/student-34.jpg"
    },
    {
      "name": "Kunal Joshi",
      "role": "Design Engineer",
      "company": "Aerotide Infra. Eng. Pvt. Ltd.",
      "branch": "Civil",
      "photo": "/images/placed-students/student-35.jpg"
    },
    {
      "name": "Swamidarshan",
      "role": "Civil Draughtsman",
      "company": "Aerotide Infra. Eng. Pvt. Ltd.",
      "branch": "Civil"
    },
    {
      "name": "Ashlesha Dongre",
      "role": "Design Engineer",
      "company": "Royal Mech Engineering",
      "branch": "Mechanical",
      "photo": "/images/placed-students/student-36.jpg"
    },
    {
      "name": "Pallavi Lokhande",
      "role": "Design Engineer",
      "company": "Royal Mech Engineering",
      "branch": "Mechanical"
    }
  ]
} as Record<PlacementYear, PlacedStudent[]>;

export const companyLogos = [
  { name: 'Larsen & Toubro', abbr: 'L&T' },
  { name: 'Reliance', abbr: 'RIL' },
  { name: 'Mahindra', abbr: 'M&M' },
  { name: 'Siemens', abbr: 'SIEMENS' },
  { name: 'Unilever', abbr: 'HUL' },
  { name: 'Emerson', abbr: 'EMERSON' },
  { name: 'Axis Bank', abbr: 'AXIS' },
  { name: 'Zencommerce', abbr: 'ZEN' },
];

export const placementTestimonial = {
  quote:
    "I completed my engineering degree and joined M-Tech Computers for CAD/CAM and IT training. The practical labs, project work, and placement support helped me land a role in a reputed company. I strongly recommend M-Tech Computers to anyone serious about building industry-ready skills.",
  name: 'Pratik Dubal',
  course: 'Master Diploma Course',
};
