// Corrected logo imports with './' path
import cooperLogo from './assets/cooper.png';
import tcsLogo from './assets/tcs.png';
import cognizantLogo from './assets/cognizant.png';
import infosysLogo from './assets/infosys.jpg';
import utdLogo from './assets/utd-logo.png';
import wbutLogo from './assets/wbut-logo.png';
import lawrenceLogo from './assets/lawrence-logo.png';

export const skillsData = [
  {
    category: "AI & Machine Learning",
    subCategories: [
      {
        title: "Concepts & Models",
        skills: ["Machine Learning", "Deep Learning", "NLP (Natural Language Processing)", "Neural Networks", "Transformers", "Reinforcement Learning", "Predictive Modeling"],
      },
      {
        title: "Technologies & Frameworks",
        skills: ["Vertex AI", "OpenAI API", "KNIME", "Google Cloud Platform (GCP)"],
      },
      {
        title: "Workflows",
        skills: ["AI Agents & Agent Development", "Gen AI", "LLM Fine Tuning", "Prompt Engineering"],
      },
    ],
  },
  {
    category: "Data Engineering & BI",
    subCategories: [
      {
        title: "Languages",
        skills: ["Python", "R", "SQL", "NoSQL", "Google BigQuery", "Unix Shell Script", "PowerShell"],
      },
      {
        title: "Databases & Warehousing",
        skills: ["BigQuery", "Oracle", "SQL Server", "Teradata", "MySQL", "MongoDB", "Hadoop", "DB2", "Data Warehousing"],
      },
      {
        title: "ETL & Data Integration",
        skills: ["Informatica PowerCenter", "Ab Initio", "GCP Data Fusion", "Data Modeling", "Data Quality"],
      },
      {
        title: "BI & Visualization",
        skills: ["Power BI", "MicroStrategy", "Microsoft Excel", "SharePoint", "Qlik Sense", "Data Visualization"],
      },
    ],
  },
  {
    category: "Data Science & Analytics",
    subCategories: [
      {
        title: "Core Skills",
        skills: ["Data Analysis", "Time Series Forecasting", "Causal Inference", "Data Mining", "A/B Testing", "Hypothesis Testing"],
      },
      {
        title: "Statistical Methods",
        skills: ["Regression", "T-Test", "F-test", "Chi-Squared", "Model Evaluation", "Association Rules"],
      },
      {
        title: "Analytics Platforms",
        skills: ["Google Analytics", "Adobe Analytics", "Locker Studio"],
      },
    ],
  },
  {
    category: "Management & Professional",
    subCategories: [
      {
        title: "Methodologies",
        skills: ["Agile & Waterfall", "SDLC"],
      },
      {
        title: "Development & Ops Tools",
        skills: ["JIRA", "GitHub", "Azure DevOps", "HP ALM", "MS Office"],
      },
      {
        title: "Professional Skills",
        skills: ["Communication", "Project Management", "Problem-Solving"],
      },
    ],
  },
];
export const professionalExperience = [
  {
    company: "Mr. Cooper",
    role: "Machine Learning Engineer (Co-op)",
    location: "Dallas",
    dates: "Aug 2025 - Present",
    logo: cooperLogo,
    intro: "My role at Mr. Cooper has been to operate at the cutting edge of AI, specifically applying Large Language Models and Agentic AI to solve tangible business problems and enhance operational efficiency.",
    projects: [
      {
        title: "Project Showcase: The AI-Powered Product Data Agent",
        challenge: "Business and sales agents were losing significant time and creating inefficiencies by manually searching for crucial customer information across three separate applications.",
        solution: "Developed a data agent product using the Google ADK framework, powered by the Gemini 2.0 Flash model. This involved engineering a multi-agent system where a master agent intelligently routes user queries to sub-agents. These sub-agents then generate and execute the appropriate SQL queries against GCP BigQuery, delivering real-time results in a dynamic markdown table.",
        outcome: "This AI agent unified the data landscape for our teams, increasing their efficiency by 3x. The innovation is projected to save the company an estimated $1 million-plus annually in time and resources. I further optimized the system by performing load testing with the Locust framework, implementing asynchronous functions that reduced system latency by 5x.",
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Lead & Migration Lead",
    location: "London",
    dates: "Jan 2021 - Jul 2024",
    logo: tcsLogo,
    intro: "As a consultant with TCS, I led high-stakes data initiatives for two global industry leaders, focusing on modernization, automation, and leadership.",
    projects: [
      {
        title: "Engagement: Data Lead for Virgin Atlantic Airways",
        challenge: "I spearheaded a critical ETL migration project for the airline's People and Finance modules, managing the full lifecycle from architecture review and design to technical specifications for over 150 tables. A key part of my role was serving as the communication bridge between technical teams and 8 key business stakeholders.",
        solution: "My leadership in dissecting business needs and aligning technical solutions drove a 28.5% reduction in project delivery time. Furthermore, I implemented a suite of Power BI dashboards that enabled real-time business insights, cutting reporting time by 44.7% and saving the airline $37,190 annually.",
        outcome: null,
      },
      {
        title: "Engagement: Data Migration Lead for Vodafone",
        challenge: "My objective was to enhance data handling efficiency and product quality for the telecommunications giant. I architected a robust automation solution using BigQuery that transformed the QA testing process.",
        solution: "This solution reduced manual effort by 38.5%, directly boosting QA throughput and saving the company $32,173 annually. Beyond my technical contributions, I focused heavily on team development. I mentored a cross-functional team of 12, leading them to a 39.5% increase in delivery speed over six months through targeted workshops and feedback. I also refined the hiring process by conducting over 70 technical interviews, which decreased onboarding time for new hires by 19.8%.",
        outcome: null,
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Senior Business Intelligence Developer",
    location: "India",
    dates: "Dec 2016 - Jan 2021",
    logo: cognizantLogo,
    intro: "As a consultant for Royal and Sun Alliance (Canada), my role was to enhance the performance of their data platforms and deliver high-quality business intelligence reports to end-users, achieving a consistent CSAT score of 98.4%.",
    projects: [
      {
        title: null,
        challenge: "The existing ETL architecture was struggling to keep up with data growth, causing performance bottlenecks.",
        solution: "I conducted a thorough analysis of the architecture and implemented targeted improvements that unlocked new performance capabilities. This allowed for the seamless processing of over 2M+ records daily and increased throughput by 17.2%. I also designed and deployed automated reporting dashboards that streamlined data visualization for over 10 stakeholders.",
        outcome: "The architectural improvements ensured platform stability, while the automated dashboards saved 15 hours of manual work weekly, amounting to $41,000 in annual savings.",
      },
    ],
  },
  {
    company: "Infosys Technology Limited",
    role: "Data Analyst & System Engineer",
    location: "India",
    dates: "Jul 2014 - Dec 2016",
    logo: infosysLogo,
    intro: "My time at Infosys, consulting for Aetna Health Insurance, was a foundational period where I focused on ensuring software quality and driving efficiency through process optimization and early automation initiatives.",
    projects: [
      {
        title: null,
        challenge: "I was responsible for validating new software features to ensure they met stringent business requirements, smoothing the path for successful product launches.",
        solution: "By designing and executing highly detailed test scripts, I successfully validated over 30 software features, which enhanced product release timelines by 23.2%. In a key early automation project, I used Excel VB scripting to automate critical reporting tasks, saving 625 manual hours ($2,473) and empowering the team to focus on higher-value, decision-making activities.",
        outcome: null,
      },
    ],
  },
];

export const education = [
  {
    university: "The University of Texas at Dallas",
    degree: "Master of Science, Business Analytics and AI",
    dates: "Aug 2024 - May 2026",
    logo: utdLogo,
    gpa: "3.8",
    details: "Dean's Excellence Scholarship recipient.",
    courses: [
      "Advance Statistics for Data Science", "Applied Econometrics and Time Series Analysis", "Applied Machine Learning", "Business Analytics with R", "Causal Analytics and A/B testing", "Database for Business Analytics", "Foundation of Digital Product management", "Marketing Web analytics and Insights", "Predictive Analytics for Data science", "Prescriptive Analytics",
    ],
    activities: [
      {
        role: "Mentor Lead",
        organization: "Business Analytics Leadership Council",
        description: [
          "Spearheaded efforts to expand students' educational experience by organizing workshops and seminars on cutting-edge analytics techniques.",
          "Orchestrated successful boot camps and mentoring events, providing new students with valuable resources for a successful academic journey.",
        ],
      },
      {
        role: "Lead Technical Officer",
        organization: "Code .exe",
        description: [
          "Organized and led technical boot camps covering Python, SQL, and advanced statistics for members.",
          "Conducted resume review sessions and provided guidance on navigating application tracking systems (ATS).",
          "Mentored peers on solving algorithmic challenges on platforms like LeetCode to prepare for technical interviews.",
        ],
      },
    ],
    progress: {
      completed: 27,
      total: 36,
    },
  },
  {
    university: "West Bengal University of Technology",
    degree: "Bachelor of Technology, Electronics and Instrumentation Engineering",
    dates: "",
    logo: wbutLogo,
    gpa: null,
    details: null,
    courses: [],
    activities: [
      {
        role: "Cultural Secretary",
        organization: "University Student Union",
        description: [
          "Elected as Cultural Secretary, leading the planning and execution of large-scale university cultural festivals and music events.",
          "Managed logistics and promotion for university council elections to ensure a fair and transparent process.",
          "Developed and led a mentorship program for incoming students to facilitate their transition into university life.",
        ],
      },
    ],
    progress: {
      completed: 100,
      total: 100,
    },
  },
  {
    university: "St. Lawrence High School, Kolkata",
    degree: "High School Diploma",
    dates: "",
    logo: lawrenceLogo,
    gpa: null,
    details: "Consistently ranked among the top 10 students academically.",
    courses: [],
    activities: [
      {
        role: "Leadership & Athletics",
        organization: "Student Body & Sports",
        description: [
          "Appointed as School Prefect and House Captain, demonstrating leadership and responsibility.",
          "Active member of the school's basketball team.",
          "Competed as a middle-order batsman for the school's cricket team.",
        ],
      },
    ],
    progress: {
      completed: 100,
      total: 100,
    },
  },
];

export const projectsData = [
  {
    title: "Telecom Churn Prediction – AI-Driven Insights",
    description: "An AI-enabled workflow to predict customer churn using KNIME, combining feature generation with LLM prompting and predictive modeling with Random Forest to achieve 87% accuracy.",
    skills: ["KNIME", "Predictive Modeling", "Random Forest", "XGBoost", "LLM Prompting", "GenAI"],
    link: "/projects/Churn-Prediction.pdf",
  },
  {
    title: "Comet Movie Recommender – Hybrid AI System",
    description: "A hybrid recommendation system combining content-based (TF-IDF) and collaborative filtering (SVD) to deliver personalized movie suggestions via an interactive Streamlit web app.",
    skills: ["Python", "Streamlit", "Scikit-learn", "NLP", "TF-IDF", "SVD", "Sentiment Analysis"],
    link: "/projects/Movie-Recommender.pdf",
  },
  {
    title: "H1B Visa Program Analysis",
    description: "An in-depth statistical analysis of the H1-B visa program to identify trends, investigate biases, and enhance program efficiency using R, EDA, and predictive modeling.",
    skills: ["R", "Linear Regression", "Neural Networks", "PCA", "Exploratory Data Analysis"],
    link: "/projects/H1B-Visa-Analysis.pdf",
  },
  {
    title: "Revenue Analysis and Insights",
    description: "Conducted an analysis of e-commerce performance using Google Analytics data to identify KPIs, user trends, and revenue insights, delivering actionable recommendations.",
    skills: ["Google Analytics", "Adobe Analytics", "Microsoft Excel", "Google Data Studio"],
    link: "/projects/Revenue-Insights.pdf",
  },
];
export const testimonialsData = [
  {
    name: "Abhinay Purohit",
    title: "Delivery Lead, Mastek UK Ltd",
    relationship: "Abhinay managed Abin directly",
    text: "Abin has worked as a Test lead for Data migration work stream for one of the large transformation project. He has handed the entire work stream in a very planned and managed way. He has good knowledge about ETL, PLSQL and Testing concept. His conceptual knowledge and leadership skills are really impressive. He would be a Gem for any organisation wherever he joins.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Shivani Gupta",
    title: "Data Engineer, Boost Mobile", // UPDATED
    relationship: "Shivani reported directly to Abin",
    text: "I have had the chance to work under Abin's leadership for about an year. His expertise on GCP and ETL technologies could only inspire one to learn and grow. He is one of the best mentors and leaders I could ask for. I have learnt a lot from the way he can quickly adapt to different situations and excel in delivering tasks even under pressure.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Apurva Katyayani",
    title: "Senior Analyst, NatWest Group",
    relationship: "Apurva reported directly to Abin",
    text: "It was an immense pleasure to work under the guidance of Abin. He is a great mentor and has wonderful leadership skills. The project I worked on with him was my first project and he has helped me understand the concepts, workflow and had been a constant guide throughout the project. He has an extensive experience and knowledge in ETL and has helped me understand technical implementation of the same, and mentored to improvise the testing approaches.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Tirthankar Roychowdhury",
    title: "Consultant, Deloitte USI",
    relationship: "Tirthankar reported directly to Abin",
    text: "It was fantastic to work under Abin's guidance and leadership. Abin is a true professional. He possesses wonderful leadership skills and has an excellent ETL tech stack. He also has an innovative way of getting things done which directly improves the overall efficiency of a task. Abin is a great mentor, leader and a better friend.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Avik Sur",
    title: "Senior Analyst, EY", // UPDATED
    relationship: "Avik reported directly to Abin",
    text: "I have had the good fortune of working under Abin's leadership in a digital transformation project for one of Europe's telecom giants for about a year which was also my first project. During this time , I have received immense guidance and support ranging from understanding business logic to technical implementation.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Rakhi Roy",
    title: "Senior Manager, RBC (Royal Bank of Canada)", // UPDATED
    relationship: "Rakhi was Abin’s mentor",
    text: "He had shown a competency to understand the widely diverse business logic that helped us to elevate and improvise the QA process that are being followed. His incredible dedication and desire to learn lead to his ultimate role with the company as a QA Analyst. I would always be glad, to be able to work with Abin in any capacity because of his “all hands on deck” attitude.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
];