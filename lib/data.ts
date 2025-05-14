type GalleryItem = {
  title: string;
  image: string;
};

type Location = {
  latitude: number;
  longitude: number;
};

export type collegeType = {
  name: string;
  logo: string;
  description: string;
  location: Location;
  rating: number;
  address: string;
  state: string;
  supportedCourses: string[];
  comments: string[];
  gallery: GalleryItem[];
  region: string;
  campusSetting: string;
  financialAid: string;
  minorityServingInstitution: string;
  institutionType: string;
  totalEnrollmentSize: string;
  specializedMission: string;
  applicationFee: string;
  testOptional: string;
  offersOnlineDegrees: string;
  undergraduateMajors: string[];
};

export const colleges = [
  {
    name: 'Amity University',
    logo: '1.png',
    description: "A leading private university offering a wide range of courses across various disciplines.",
    location: { latitude: 28.5898, longitude: 77.3050 },
    rating: 4,
    address: "Sector 125, Noida, Uttar Pradesh, India",
    state: "Uttar Pradesh",
    supportedCourses: ["Engineering", "Law", "Management", "Humanities", "Science"],
    comments: ["Great campus", "Good industry connections", "A bit expensive"],
    gallery: [
      { title: 'Main Campus Building', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library & Study Area', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60' },
      { title: 'Engineering Block', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Private",
    totalEnrollmentSize: "10,000+",
    specializedMission: "STEM-focused",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Engineering", "Management"]
  },
  {
    name: 'Aligarh Muslim University (AMU)',
    logo: '2.png',
    description: "A prestigious public university in Aligarh, India, known for its research and educational excellence.",
    location: { latitude: 27.8971, longitude: 78.0898 },
    rating: 4.5,
    address: "Aligarh, Uttar Pradesh, India",
    state: "Uttar Pradesh",
    supportedCourses: ["Engineering", "Science", "Humanities", "Social Sciences"],
    comments: ["Excellent faculty", "Rich cultural heritage", "Limited campus facilities"],
    gallery: [
      { title: 'Main Campus Building', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library & Study Area', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60' },
      { title: 'Engineering Block', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "20,000+",
    specializedMission: "Research-focused",
    applicationFee: "$51 – $75",
    testOptional: "No",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Computer Science", "Physics", "Political Science"]
  },
  {
    name: 'University of Delhi',
    logo: '3.png',
    description: "One of the largest and most prestigious public universities in India, offering a wide range of undergraduate and postgraduate programs.",
    location: { latitude: 28.6139, longitude: 77.2090 },
    rating: 4.6,
    address: "New Delhi, India",
    state: "Delhi",
    supportedCourses: ["Arts", "Commerce", "Science", "Law", "Social Sciences"],
    comments: ["Prestigious institution", "Excellent faculty", "Strong academic reputation"],
    gallery: [
      { title: 'Main Building', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
      { title: 'Central Library', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "30,000+",
    specializedMission: "Humanities and Social Sciences",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["English", "Physics", "Political Science"]
  },
  {
    name: 'Indian Institute of Technology Bombay (IITB)',
    logo: '4.png',
    description: "A premier technology and engineering institution in India, offering cutting-edge research and innovation.",
    location: { latitude: 19.1147, longitude: 72.9180 },
    rating: 5,
    address: "Powai, Mumbai, Maharashtra, India",
    state: "Maharashtra",
    supportedCourses: ["Engineering", "Technology", "Design", "Mathematics"],
    comments: ["Top-ranked institution", "Cutting-edge research", "Highly competitive environment"],
    gallery: [
      { title: 'Campus Overview', image: 'https://images.unsplash.com/photo-1514890142092-f3772b410e5f?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "West",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "10,000+",
    specializedMission: "STEM-focused",
    applicationFee: "$26 – $50",
    testOptional: "No",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Computer Science", "Electrical Engineering"]
  },
  {
    name: 'Indian Institute of Management Ahmedabad (IIMA)',
    logo: '5.png',
    description: "A leading business school offering top-notch management education and research opportunities.",
    location: { latitude: 23.0225, longitude: 72.5714 },
    rating: 4.9,
    address: "Ahmedabad, Gujarat, India",
    state: "Gujarat",
    supportedCourses: ["Management", "Business", "Finance"],
    comments: ["World-class faculty", "Excellent networking opportunities", "Competitive admissions process"],
    gallery: [
      { title: 'Campus View', image: 'https://images.unsplash.com/photo-1575125036940-fffe9290f26e?auto=format&fit=crop&w=800&q=60' },
      { title: 'Lecture Hall', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "West",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "2,000+",
    specializedMission: "Management and Business",
    applicationFee: "$51 – $75",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["MBA", "Finance"]
  },
  {
    name: 'Jawaharlal Nehru University (JNU)',
    logo: '6.png',
    description: "A prestigious public university known for its research in social sciences, humanities, and interdisciplinary studies.",
    location: { latitude: 28.5551, longitude: 77.0983 },
    rating: 4.7,
    address: "New Delhi, India",
    state: "Delhi",
    supportedCourses: ["Social Sciences", "Humanities", "International Relations", "Political Science"],
    comments: ["Renowned faculty", "Strong academic community", "Political activism is prominent"],
    gallery: [
      { title: 'Main Campus', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60' },
      { title: 'Cultural Activities', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "10,000+",
    specializedMission: "Social Sciences and Humanities",
    applicationFee: "$26 – $50",
    testOptional: "No",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Political Science", "Sociology"]
  },
  {
    name: 'Banaras Hindu University (BHU)',
    logo: '7.png',
    description: "One of India's oldest and largest residential universities, offering education in a wide range of disciplines.",
    location: { latitude: 25.3176, longitude: 82.9739 },
    rating: 4.5,
    address: "Varanasi, Uttar Pradesh, India",
    state: "Uttar Pradesh",
    supportedCourses: ["Arts", "Science", "Engineering", "Social Sciences", "Law"],
    comments: ["Rich cultural heritage", "Diverse student body", "Excellent academic facilities"],
    gallery: [
      { title: 'Campus Entrance', image: 'https://images.unsplash.com/photo-1514890142092-f3772b410e5f?auto=format&fit=crop&w=800&q=60' },
      { title: 'Hostels', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "25,000+",
    specializedMission: "Comprehensive Education",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Physics", "History", "Management"]
  },
  {
    name: 'VIT University',
    logo: '8.png',
    description: "A leading private university in India known for its engineering programs and innovative research.",
    location: { latitude: 12.9789, longitude: 79.1486 },
    rating: 4.3,
    address: "VIT, Vellore, Tamil Nadu, India",
    state: "Tamil Nadu",
    supportedCourses: ["Engineering", "Technology", "Science", "Management"],
    comments: ["Excellent infrastructure", "Focus on innovation", "International exposure"],
    gallery: [
      { title: 'Main Campus', image: 'https://images.unsplash.com/photo-1575125036940-fffe9290f26e?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "South",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Private",
    totalEnrollmentSize: "15,000+",
    specializedMission: "Engineering and Technology",
    applicationFee: "$26 – $50",
    testOptional: "No",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Mechanical Engineering", "Computer Science"]
  },
  {
    name: 'Manipal University',
    logo: '9.png',
    description: "A leading private university known for its strong emphasis on education and research in engineering and medicine.",
    location: { latitude: 13.3406, longitude: 74.7921 },
    rating: 4.4,
    address: "Manipal, Karnataka, India",
    state: "Karnataka",
    supportedCourses: ["Engineering", "Medical", "Arts", "Management"],
    comments: ["Good infrastructure", "Great faculty", "Expensive fees"],
    gallery: [
      { title: 'Campus View', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "South",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Private",
    totalEnrollmentSize: "12,000+",
    specializedMission: "Medical and Engineering",
    applicationFee: "$26 – $50",
    testOptional: "No",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Medical Science", "Engineering"]
  },
  {
    name: 'National Institute of Technology Trichy (NIT Trichy)',
    logo: '10.png',
    description: "A leading public technical university in India known for its high-quality engineering education.",
    location: { latitude: 10.8293, longitude: 78.6926 },
    rating: 4.8,
    address: "Tiruchirappalli, Tamil Nadu, India",
    state: "Tamil Nadu",
    supportedCourses: ["Engineering", "Technology", "Management"],
    comments: ["Excellent faculty", "Highly competitive", "Focus on research"],
    gallery: [
      { title: 'Main Campus', image: 'https://images.unsplash.com/photo-1575125036940-fffe9290f26e?auto=format&fit=crop&w=800&q=60' },
      { title: 'Engineering Block', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "South",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "5,000+",
    specializedMission: "Engineering and Technology",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Computer Science", "Electrical Engineering"]
  },
  {
    name: 'Pune University',
    logo: '11.png',
    description: "A renowned public university known for its diverse academic programs and research initiatives.",
    location: { latitude: 18.5204, longitude: 73.8567 },
    rating: 4.2,
    address: "Pune, Maharashtra, India",
    state: "Maharashtra",
    supportedCourses: ["Arts", "Science", "Law", "Engineering"],
    comments: ["Diverse programs", "Rich academic history", "Expanding campus facilities"],
    gallery: [
      { title: 'Campus View', image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60' },
      { title: 'Library', image: 'https://images.unsplash.com/photo-1524597042053-fbcf6ea2c1fc?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "West",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "15,000+",
    specializedMission: "Comprehensive Education",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["History", "Political Science", "Engineering"]
  },
  {
    name: 'Jamia Millia Islamia University',
    logo: '12.png',
    description: "A prestigious university in Delhi offering a range of undergraduate and postgraduate programs.",
    location: { latitude: 28.5651, longitude: 77.2611 },
    rating: 4.4,
    address: "New Delhi, India",
    state: "Delhi",
    supportedCourses: ["Arts", "Science", "Engineering", "Social Sciences"],
    comments: ["Strong cultural ethos", "Great faculty", "Expanding infrastructure"],
    gallery: [
      { title: 'Campus Main Gate', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60' },
      { title: 'Classrooms', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=60' },
    ],
    region: "North",
    campusSetting: "Urban",
    financialAid: "Yes",
    minorityServingInstitution: "None",
    institutionType: "Public",
    totalEnrollmentSize: "20,000+",
    specializedMission: "Comprehensive Education",
    applicationFee: "$26 – $50",
    testOptional: "Yes",
    offersOnlineDegrees: "No",
    undergraduateMajors: ["Journalism", "Political Science", "Engineering"]
  }
];

export const filterData = [
  {
    title: 'State',
    type: 'textinput',
    placeholder: 'Enter location'
  },
  {
    title: 'Campus Setting',
    type: 'check',
    options: ['Urban', 'Suburban', 'Rural']
  },
  {
    title: 'Financial Aid Offered',
    type: 'check',
    options: ['Yes', 'No']
  },
  {
    title: 'Institution Type',
    type: 'check',
    options: ['Public', 'Private', 'For-Profit']
  },
  {
    title: 'Total Enrollment Size',
    type: 'submenu',
    submenuTitle: 'Select Size',
    submenuOptions: ['< 1,000', '1,000 – 5,000', '5,001 – 10,000', '10,001 – 20,000', '20,000+']
  },
  {
    title: 'Specialized Mission',
    type: 'check',
    options: ['Religious', 'Military', 'Art & Design', 'STEM-focused']
  },
  {
    title: 'Application Fee',
    type: 'check',
    options: ['No Fee', '$1 – $25', '$26 – $50', '$51 – $75', '$76+']
  },
  {
    title: 'Test Optional',
    type: 'check',
    options: ['Yes', 'No']
  },
  {
    title: 'Offers Online Degrees',
    type: 'check',
    options: ['Yes', 'No']
  },
  {
    title: 'Undergraduate Majors Offered',
    type: 'textinput',
    placeholder: 'Enter a major (e.g., Computer Science)'
  }
];


export const footerSections = [
  {
    title: 'About',
    links: [
      'Access and equity',
      'Guiding principles',
      'Impact',
      'Next Chapter',
      'Reports and insights',
    ],
  },
  {
    title: 'Organization',
    links: ['Join our board', 'Leadership', 'Partners', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Contact', 'News and updates', 'Become a member', 'Help', 'Events'],
  },
  {
    title: 'Connect',
    links: ['Connect with #commonapp'],
  },
];



export const NAV_ITEMS = [
  { label: 'Find Colleges' },
  { label: 'About' },
  {
    label: 'Plan for college',
    submenu: ['Timeline', 'High school courses', 'Explore interests'],
  },
  {
    label: 'Apply to college',
    submenu: ['Application guide', 'Writing essays', 'Recommendations'],
  },
  {
    label: 'Pay for college',
    submenu: ['Financial aid', 'Scholarships', 'Budgeting'],
  },
];
