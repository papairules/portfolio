// Corrected logo imports with './' path
import cooperLogo from './assets/cooper.png'; // Used for Rocket
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
        skills: ["Machine Learning", "Deep Learning", "NLP (Natural Language Processing)", "Neural Networks", "Transformers", "Reinforcement Learning", "Predictive Modeling", "Classification & Regression"],
      },
      {
        title: "Technologies & Frameworks",
        skills: ["Vertex AI", "OpenAI API", "Dialogflow CX", "Google Cloud Platform (GCP)", "Scikit-learn", "Pandas", "NumPy"],
      },
      {
        title: "Workflows",
        skills: ["AI Agents", "LangGraph", "RAG", "LLM Fine Tuning", "NL-to-SQL", "MLOps", "Model Inference Pipelines"],
      },
    ],
  },
  {
    category: "Data Engineering & BI",
    subCategories: [
      {
        title: "Languages",
        skills: ["Python", "R", "SQL", "NoSQL", "Google BigQuery", "TypeScript"],
      },
      {
        title: "Databases & Warehousing",
        skills: ["BigQuery", "Snowflake", "Oracle", "MySQL", "MongoDB", "Data Warehousing"],
      },
      {
        title: "ETL & Data Integration",
        skills: ["Apache Airflow", "Spark", "Databricks", "Data Modeling", "Feature Engineering"],
      },
      {
        title: "BI & Visualization",
        skills: ["Power BI", "MicroStrategy", "Data Visualization"],
      },
    ],
  },
  {
    category: "Data Science & Analytics",
    subCategories: [
      {
        title: "Core Skills",
        skills: ["Data Analysis", "Time Series Forecasting", "Causal Inference", "Text Processing", "Imbalanced Data Handling", "Model Evaluation (Precision/Recall/F1)"],
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
        skills: ["Agile", "SDLC", "CI/CD"],
      },
      {
        title: "Development & Ops Tools",
        skills: ["JIRA", "Git", "GitHub", "Azure DevOps", "Locust (Load Testing)"],
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
    company: "Rocket",
    role: "AI/ML Engineer",
    location: "Dallas",
    dates: "May 2025 - Present",
    logo: cooperLogo, 
    intro: "My focus is on designing end-to-end ML pipelines, building NLP systems, and deploying generative AI solutions to drive significant business value and optimize operations.",
    projects: [
      {
        title: "Project Showcase: Generative AI & NL-to-SQL Pipelines",
        challenge: "Business users required a seamless, intuitive method to query complex, structured datasets without needing deep technical expertise.",
        solution: "Engineered robust NL-to-SQL pipelines utilizing Gemini 2.0 and RAG-based retrieval frameworks. I designed end-to-end ML pipelines from data ingestion to model inference, deeply integrating BigQuery, Vertex AI, and custom Python services. To ensure high performance, I executed asynchronous Python and Locust-based load testing, which successfully reduced API latency by 5x.",
        outcome: "This AI-driven architecture enabled natural language querying over vast structured datasets, projecting over $1M+ in annual savings through massive efficiency gains.",
      },
      {
        title: "Project Showcase: NLP Sentiment Modeling & Voice Agents",
        challenge: "The organization needed to automate authentication workflows and systematically extract actionable insights from high volumes of customer interactions.",
        solution: "Developed and deployed advanced Dialogflow CX voice agents to handle complex authentication workflows. Simultaneously, I built NLP-based sentiment models processing over 50,000 monthly call transcripts using Vertex AI and BigQuery. I also trained and tuned various classification models (logistic regression, decision trees, ensemble methods) to predict customer churn and refinance likelihood, focusing on precision, recall, and F1-scores for imbalanced datasets.",
        outcome: "The voice agents reduced average handle time by 40% and improved accuracy to 98.5%. The sentiment analysis and predictive models directly contributed to a 12% improvement in overall CSAT.",
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Lead",
    location: "London",
    dates: "Jan 2021 - Jul 2024",
    logo: tcsLogo,
    intro: "Consulting for Virgin Atlantic Airways and Vodafone UK, I focused on architecting distributed, GCP-native data platforms and feature engineering to support downstream machine learning and analytics at scale.",
    projects: [
      {
        title: "Engagement: ML Data Pipelines & Feature Engineering",
        challenge: "Downstream analytics and machine learning models required robust, highly available, and large-scale structured datasets.",
        solution: "Prepared large-scale structured datasets and feature sets to fuel ML workflows. I orchestrated complex data pipelines processing 2M+ records daily utilizing BigQuery, Spark, and Apache Airflow on GCP. I also led the development of distributed data platforms encompassing over 150 tables.",
        outcome: "Achieved a 97.8% CSAT for large-scale customer dataset management and improved overall platform delivery time by 28.5%.",
      },
      {
        title: "Engagement: Workflow Automation & Team Leadership",
        challenge: "Manual data workflows were creating bottlenecks, resulting in inefficiencies and elevated operational costs for the client.",
        solution: "Architected automated data workflows for Vodafone entirely within BigQuery. Alongside technical execution, I mentored and upskilled a cross-functional engineering team of 12 members.",
        outcome: "The automation reduced manual effort by 38.5%, saving $32K annually, while team mentorship initiatives improved delivery speed by 39.5%.",
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Senior Business Intelligence Developer",
    location: "India",
    dates: "Dec 2016 - Jan 2021",
    logo: cognizantLogo,
    intro: "As a consultant for Royal and Sun Alliance (Canada), I developed fault-tolerant data migration frameworks and optimized large-scale ETL architectures.",
    projects: [
      {
        title: "Engagement: Data Platform Optimization",
        challenge: "The existing data architecture was struggling to keep pace with data growth, causing performance bottlenecks for downstream analytics.",
        solution: "Implemented targeted optimizations to the large-scale ETL architecture to increase throughput by 17.2%. I also designed and deployed automated reporting dashboards that streamlined data visualization for key stakeholders.",
        outcome: "The enhancements enabled the seamless daily processing of 2M+ records without performance degradation. The automated dashboards saved 15 hours of manual work weekly, equating to $41,000 in annual savings, while maintaining a 98.4% CSAT score.",
      },
    ],
  },
  {
    company: "Infosys Technology Limited",
    role: "Senior Data Analyst & System Engineer",
    location: "India",
    dates: "Jul 2014 - Dec 2016",
    logo: infosysLogo,
    intro: "Consulting for Aetna Health Insurance, I managed complex testing processes, formulated data scenarios, and drove early automation initiatives.",
    projects: [
      {
        title: "Engagement: Process Optimization & Automation",
        challenge: "Testing processes and reporting required significant manual intervention, risking delays in product delivery.",
        solution: "Managed end-to-end testing processes by comprehending business requirements and devising diverse data scenarios. I subsequently automated critical reporting workflows utilizing SQL and scripting.",
        outcome: "The automation initiatives successfully saved $30K annually and ensured high data integrity across testing environments.",
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
    gpa: "3.7",
    details: "Dean's Excellence Scholarship recipient and Nash Leader",
    courses: [
      "Advance Statistics for Data Science", 
      "Applied Econometrics and Time Series Analysis", 
      "Applied Machine Learning", 
      "Applied Natural Language Processing",
      "Business Analytics with R", 
      "Causal Analytics and A/B testing", 
      "Database for Business Analytics", 
      "Foundation of Digital Product management", 
      "Marketing Web analytics and Insights", 
      "Predictive Analytics for Data science", 
      "Prescriptive Analytics",
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
      completed: 36,
      total: 36,
    },
  },
  {
    university: "West Bengal University of Technology",
    degree: "Bachelor of Technology, Electronics and Instrumentation Engineering",
    dates: "Graduated 2014",
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
    title: "Medical Agentic Framework – AI Concierge",
    description: "Developed a cloud-native Agentic RAG chatbot deployed on Cloud Run using Dialogflow CX, Vertex AI, and Gemini 2.5 Flash. The system acts as a medical concierge featuring symptom severity triage, distress detection, medication interaction checking, and nationwide hospital lookup.",
    skills: ["Python", "Vertex AI", "Dialogflow CX", "Gemini LLM", "RAG", "Streamlit", "Cloud Run", "Docker", "GCP"],
    link: "/projects/Medical-Agentic-Framework.pdf",
  },
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
    title: "Data Engineer, Boost Mobile",
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
    title: "Senior Analyst, EY", 
    relationship: "Avik reported directly to Abin",
    text: "I have had the good fortune of working under Abin's leadership in a digital transformation project for one of Europe's telecom giants for about a year which was also my first project. During this time , I have received immense guidance and support ranging from understanding business logic to technical implementation.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
  {
    name: "Rakhi Roy",
    title: "Senior Manager, RBC (Royal Bank of Canada)",
    relationship: "Rakhi was Abin’s mentor",
    text: "He had shown a competency to understand the widely diverse business logic that helped us to elevate and improvise the QA process that are being followed. His incredible dedication and desire to learn lead to his ultimate role with the company as a QA Analyst. I would always be glad, to be able to work with Abin in any capacity because of his “all hands on deck” attitude.",
    linkedIn: "https://www.linkedin.com/in/abinroy/details/recommendations/",
  },
];