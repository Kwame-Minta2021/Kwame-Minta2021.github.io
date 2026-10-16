// Single source of truth for personal details and list-style sections.
// Edit text here; layout lives in src/components.

export const site = {
  name: 'Frederick Kwame Minta',
  shortName: 'F. K. Minta',
  tagline: 'Building robots that know when not to trust their own senses.',
  identity:
    'Robotics researcher working on embedded autonomy, perception-aware planning and hardware-aware robot reliability. Research Assistant at Ashesi University, Ghana.',
  status: 'Applying to Ph.D. programs for Fall 2027.',
  description:
    'Frederick Kwame Minta is a robotics researcher working on embedded autonomy, perception-aware planning and hardware-aware robot reliability. Research Assistant at Ashesi University, Ghana.',
  affiliation: 'Ashesi University',
  jobTitle: 'Research Assistant',
  location: 'Accra, Ghana',
  email: 'frederickminta@gmail.com',
  cv: '/Frederick_Kwame_Minta_CV.pdf',
  github: 'https://github.com/Kwame-Minta2021',
  linkedin: 'https://www.linkedin.com/in/minta-frederick-kwame',
  // TODO: replace with your Scholar profile URL (scholar.google.com/citations?user=...) once you have one.
  scholar: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Frederick+Kwame+Minta&btnG=',
};

export const nav = [
  { href: '/#research', label: 'Research' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#publications', label: 'Publications' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#teaching', label: 'Teaching' },
  { href: '/#awards', label: 'Awards' },
  { href: '/#contact', label: 'Contact' },
];

export const interests = [
  'Embedded autonomy and real-time robot navigation within compute, power and thermal limits',
  'Perception-aware planning under hardware-induced sensing degradation',
  'Power-system and thermal monitoring as evidence for sensor reliability',
  'Multi-sensor fusion and state estimation robust to sensor dropout',
];

export const experience = [
  { role: 'Research Assistant', org: 'Robotics Research Platform, Ashesi University', period: 'Nov 2025 – present' },
  {
    role: 'Technology Trainer',
    org: 'DARE Project, Inclusive Tech Group with the Mastercard Foundation and UNESCO',
    period: 'Aug 2025 – Feb 2026',
  },
  { role: 'Research Assistant', org: 'Assistive Technology Lab, University of Ghana', period: 'Oct 2024 – Aug 2025' },
  { role: 'IoT and Machine Learning Researcher', org: 'Farmlynco', period: 'Sep 2024 – Aug 2025' },
  { role: 'Co-Founder and CTO', org: 'Coasted Code', period: 'Jan 2024 – present' },
  { role: 'Research Assistant', org: 'Agri-IoT Lab, UMaT', period: 'Nov 2023 – Jun 2024' },
  { role: 'Research Assistant', org: 'Hybrid Presplit Drilling and Blasting Project, UMaT', period: 'Aug 2023 – Jul 2024' },
  {
    role: 'Robotics Instructor and Club President',
    org: 'Aaenics Engineering / UMaT Aaenics Robotics Club',
    period: 'Jun 2023 – Sep 2024',
  },
];

export const education = {
  degree: 'B.Sc. Computer Science and Engineering',
  school: 'University of Mines and Technology, Tarkwa, Ghana',
  period: 'Jan 2020 – Nov 2024',
  coursework: [
    'Linear Algebra',
    'Signals and Systems',
    'Digital Signal and Image Processing',
    'Simulation and Modelling',
    'Embedded System Design',
    'Control Systems',
    'Robotics',
    'Artificial Intelligence',
    'Data Structures and Algorithms',
  ],
};

export const skills = [
  {
    group: 'Robotics',
    items: ['ROS 2', 'Gazebo', 'SLAM', 'Motion planning', 'Sensor fusion', 'State estimation', 'OpenCV', 'Deep RL', 'HRI'],
  },
  {
    group: 'Embedded & hardware',
    items: [
      'ATmega2560',
      'ESP32',
      'Raspberry Pi',
      'Jetson Orin NX',
      'KiCad PCB design',
      'C/C++ firmware',
      'MQTT',
      'Power-system design',
      'DC-DC converters',
      'Motor drivers',
      'CFD thermal analysis',
      'CAD',
    ],
  },
  { group: 'Programming', items: ['Python', 'C++', 'C', 'MATLAB', 'JavaScript', 'SQL'] },
  { group: 'Machine learning', items: ['PyTorch', 'TensorFlow / TF Lite', 'scikit-learn', 'Edge deployment'] },
];

export const teaching = [
  {
    title: 'Coasted Code',
    body: 'Co-founded an AI school for children, accredited by STEM.org. Project-based curriculum in embedded programming, sensor integration and control across urban and rural Ghana.',
  },
  {
    title: 'DARE Project',
    body: 'Trained 100 women with disabilities to use technology in their businesses.',
  },
  {
    title: 'Aaenics Robotics',
    body: 'Robotics curriculum (embedded programming, sensors, PID control) for 300+ students across five institutions, with outreach to 200+ school pupils.',
  },
];

export const awards = [
  { title: 'Best in STEM Distinction Honoree (Coasted Code)', org: 'STEM.org', date: 'Sep 2026' },
  { title: 'Winner, BeOrchid African Hackathon', org: '', date: 'Jul 2026' },
  { title: 'EPICS in IEEE Grant', org: 'IEEE Foundation', date: '2025' },
  { title: 'Best Robotics Student', org: 'UMaT Computer Science and Engineering Awards', date: 'Sep 2024' },
  { title: 'First Runner-Up, National Disability Inclusive Hackathon', org: '', date: 'Dec 2021' },
];

export const affiliations = ['Black in AI (ELAI Leadership Program)', 'Black in Robotics'];

export const service = [{ title: 'Reviewer', org: 'IndabaX Ghana', date: '2024' }];
