// Single source of truth for all site content.
// Edit text here; components only handle layout.
//
// Facts come from the three CVs, the Dicoding internship recap (wins on conflicts),
// and the READMEs of Angga's GitHub repos. Nothing beyond those sources.
//
// PLACEHOLDER convention:
//   - links set to PLACEHOLDER_LINK render normally but point to "#".
//   - image: undefined renders a graph-paper placeholder box.

import type { ImageMetadata } from 'astro';
import portrait from '../assets/profile.png';
import bootcamp15 from '../assets/teaching/bootcamp-15.jpg';
import bootcamp16 from '../assets/teaching/bootcamp-16.jpg';
import devcoach238 from '../assets/teaching/devcoach-238.jpg';
import devcoach244 from '../assets/teaching/devcoach-244.jpg';
import gccEkraf from '../assets/teaching/gcc-ekraf.jpg';
import geminiNotebook from '../assets/teaching/gemini-notebook.jpg';
import geminiSlides from '../assets/teaching/gemini-slides.jpg';
import floCctv from '../assets/projects/flo-v3.jpg';
import laborRag from '../assets/projects/labor-rag.jpg';
import chunkingCover from '../assets/writing/chunking-cover.jpg';
import certHackerrankSql from '../assets/certs/hackerrank-sql.jpg';
import sibi from '../assets/projects/sibi.jpg';
import pizzaSales from '../assets/projects/pizza-sales.jpg';
import creditScoring from '../assets/projects/credit-scoring.jpg';
import olist from '../assets/projects/olist.jpg';
import awardPkm from '../assets/awards/pkm-amli.jpg';
import awardUnity from '../assets/awards/unity.jpg';
import certDicodingGenaiLlm from '../assets/certs/dicoding-genai-llm.jpg';
import certDicodingGenaiFundamental from '../assets/certs/dicoding-genai-fundamental.jpg';
import certAsahMl from '../assets/certs/asah-ml.jpg';
import certDqlabDsFundamentals from '../assets/certs/dqlab-ds-fundamentals.jpg';
import certDqlabR from '../assets/certs/dqlab-r.jpg';
import certDqlabPython from '../assets/certs/dqlab-python.jpg';
import certDqlabSql from '../assets/certs/dqlab-sql.jpg';
import certRevouDataAnalytics from '../assets/certs/revou-data-analytics.jpg';
import certDicodingSql from '../assets/certs/dicoding-sql.jpg';
import certDicodingDataScience from '../assets/certs/dicoding-data-science.jpg';
import certMyskillSql from '../assets/certs/myskill-sql.jpg';
// Organization logos, original colors (official sites and Wikimedia Commons)
import logoDicoding from '../assets/logos/dicoding.png';
import logoAsah from '../assets/logos/asah.png';
import logoBps from '../assets/logos/bps.png';
import logoHomeCredit from '../assets/logos/home-credit.png';
import logoUnnes from '../assets/logos/unnes.png';

export const PLACEHOLDER_LINK = '#';

export type Link = { label: string; href: string; external?: boolean };

export const profile = {
  name: 'Angga Yulian Adi Pradana',
  wordmark: 'Angga Yulian Adi Pradana',
  role: 'Data analysis · Data science · AI engineering',
  portrait,
  email: 'anggayulianadipradana@gmail.com',
  github: 'https://github.com/anggapradanaa',
  linkedin: 'https://www.linkedin.com/in/anggayulianadipradana/',
};

// The three CVs, copied unchanged from the latest versions (public/).
export const cvs: Link[] = [
  { label: 'CV, Data Analyst', href: '/Angga-Yulian-Adi-Pradana-CV-Data-Analyst.pdf', external: true },
  { label: 'CV, Data Scientist', href: '/Angga-Yulian-Adi-Pradana-CV-Data-Scientist.pdf', external: true },
  { label: 'CV, AI Engineer', href: '/Angga-Yulian-Adi-Pradana-CV-AI-Engineer.pdf', external: true },
];

export const opening = {
  greeting: "Hi, I'm Angga.",
  bio: [
    "I'm a mathematics graduate from Universitas Negeri Semarang working across data analysis, data science, and AI engineering. I've analyzed and visualized official statistics at BPS, built credit scoring and lead scoring models, and shipped a RAG chatbot and a real-time sign language recognition app that run in the browser.",
    'Most recently I spent six months as a Curriculum Developer Intern at Dicoding, building AI and data curriculum and teaching it to bootcamp cohorts and live DevCoach audiences of up to 1.2k viewers.',
  ],
};

export const about = {
  heading: 'Mathematics first, then machine learning.',
  lead: 'Statistics, probability, data mining, and time series courses at Universitas Negeri Semarang are what pulled me toward working with data.',
  paragraphs: [
    "Since then I've applied that foundation in finance, government statistics, and education: predicting loan default risk for Home Credit, analyzing GRDP and port operations data at BPS Kota Tegal, scoring sales leads with CatBoost and SHAP in the ASAH program with Accenture, and building RAG and computer vision systems on my own.",
    'At Dicoding I moved to the other side of the table: turning these methods into training decks, labs, and live sessions, and keeping AI, machine learning, data science, and data analysis modules accurate for the people learning from them.',
  ],
};

// What I do, framed for the three roles I apply for. Tools listed come from the CVs and repos.
export const toolkit = [
  {
    role: 'Data analysis',
    body: 'Cleaning and exploring data, descriptive statistics, and dashboards or reports that turn findings into recommendations.',
    tools: ['SQL (PostgreSQL, SQL Server, BigQuery)', 'Excel', 'Tableau', 'Power BI', 'Looker Studio', 'Pandas'],
  },
  {
    role: 'Data science & ML',
    body: 'EDA, feature engineering, and predictive models for classification, regression, and clustering, evaluated properly and explained with tools like SHAP.',
    tools: ['Python', 'R', 'Scikit-learn', 'XGBoost', 'CatBoost', 'SHAP', 'Streamlit'],
  },
  {
    role: 'AI engineering',
    body: 'LLM and RAG applications, deep learning for computer vision and NLP, and taking a model from notebook to a working demo.',
    tools: ['LangChain', 'RAG', 'Hugging Face', 'TensorFlow', 'PyTorch', 'YOLOv8', 'Gemini', 'Git'],
  },
];

export type Experience = {
  period: string;
  role: string;
  org: string;
  logo: ImageMetadata;
  summary: string;
  points: string[];
  links?: Link[];
};

export const experience: Experience[] = [
  {
    period: 'May – Oct 2026',
    role: 'Curriculum Developer Intern',
    org: 'Dicoding Indonesia',
    logo: logoDicoding,
    summary: "Built and taught AI and data curriculum for Dicoding's bootcamps, live sessions, and self-paced classes.",
    points: [
      'Served as a technical instructor for Dicoding Bootcamp Batch 15 (Gen AI Engineer) and Batch 16 (Data Analyst), delivering 120-minute sessions to 40 and 25 participants respectively, with self-developed slides and hands-on labs covering regression, classification, unsupervised learning, and AI-assisted end-to-end data analysis, visualization, and career preparation; received ratings of 4.79/5 and 4.87/5.',
      'Delivered two 90-minute DevCoach sessions reaching 1.8k+ live viewers: “Mengenal RAG: Dari Konsep ke Implementasi Pertamamu” (4.64/5, 644 live viewers), including a Naive RAG chatbot demo built with LangChain using PP No. 51 Tahun 2023 as the knowledge base; and “Kenalan dengan Jev: Model AI yang Nggak Bisa Ngobrol” (4.66/5, 1.2k live viewers), introducing a System One model that returns structured decisions instead of text.',
      'Served as co-trainer for partner-program sessions, including a GCC × Ekraf AI Track offline workshop with 30 participants (hands-on UMKM ordering web application using Google AI Studio, Supabase, GitHub, and Netlify), a Gemini Notebook session on organizing sources and generating insights, and a Gemini in Slides session on developing presentation ideas.',
      'Developed 6 ILT technical training decks end-to-end with 8 hands-on activities, consisting of 2 new decks for Batch 16 (Data Analyst in the AI Era, Predictive Analytics) and 4 revamped decks for Batch 15 (ML Foundations, Unsupervised, Computer Vision & Time Series, NLP & GenAI), covering machine learning, deep learning, computer vision, time series, NLP, generative AI, data analytics, and data visualization.',
      'Developed 4 microlearning classes end-to-end across 2 series, Intro to AI (document translation with Gemini Chat, custom chatbot development with Gemini Gems) and Financial Literacy (investing fundamentals, personal budgeting), covering topic and learner-needs research, lesson writing, visual asset creation, and assessment development.',
      'Resolved 140 module issues and reports across AI, ML, Data Science, and Data Analyst classes, implementing fixes directly to the modules, from code that failed to run, to outdated library functions, to explanations that confused learners.',
      'Authored a technical article for the Dicoding blog, “Pentingnya Chunking Strategy dalam RAG,” explaining how documents are split before indexing, the common chunking strategies, and how to select one for a given use case.',
      'Developed an n8n automation workflow for rating appeal notifications, routing 41 appeals to the correct PIC and streamlining the team’s process for tracking and handling appeals.',
      'Analyzed pre- and post-test results for the “Bijak Cerdas” digital literacy program (DWP Mengajar, in partnership with DWP Kemenko PMK) covering ~40 junior high school students, developed the insight report, and submitted findings to Dicoding Governance, contributing to improvements in subsequent post-test design.',
    ],
  },
  {
    period: 'Aug – Dec 2025',
    role: 'Machine Learning Trainee',
    org: 'ASAH program, Dicoding × Accenture',
    logo: logoAsah,
    summary: '930+ hours of machine learning, deep learning, and programming training, with an average score above 90/100.',
    points: [
      'Capstone: a CatBoost lead scoring model covering preprocessing, feature engineering, and evaluation, with SHAP explanations so the business side can see what drives each score. Final evaluation score 94/100.',
      'Built machine learning pipelines, deep learning projects for image classification and object detection, and text processing projects (proficiency score 91/100).',
      'Scored 100/100 in programming logic and version control with Python, Git, and GitHub.',
    ],
  },
  {
    period: 'Apr – Jul 2025',
    role: 'Statistical Technical Team Intern',
    org: 'BPS Kota Tegal (Statistics Indonesia)',
    logo: logoBps,
    summary: 'Analysis, visualization, and data processing for official statistics at the Tegal City statistics office.',
    points: [
      "Designed visualizations and infographics of Tegal City's GRDP by expenditure (2020–2024) for official statistical publications.",
      'Ran descriptive statistical analysis and visualization on the SIMOPPEL port operations dataset (2021–2024).',
      'Built a K-Means model that clusters Tegal City sub-districts by family welfare indicators (2024 data).',
      'Built a web-based data processing tool for the Desa Cantik program in Kejambon Village and trained local administrators to use it and visualize their data.',
      'Processed and organized business data for the Statistical Business Register ahead of the 2026 Economic Census.',
    ],
    links: [{ label: 'Internship certificate', href: `https://drive.google.com/file/d/1qwVAteg18zS3hq9Ou_uJViRCcIsmFW2p/view`, external: true }],
  },
  {
    period: 'Jan – Feb 2025',
    role: 'Data Scientist Intern',
    org: 'Home Credit Indonesia · Rakamin project-based internship',
    logo: logoHomeCredit,
    summary: 'A credit scoring model that predicts loan default risk from historical customer data.',
    points: [
      'Ran exploratory data analysis, preprocessing, and feature engineering, then compared Logistic Regression and XGBoost.',
      'Handled class imbalance with SMOTEENN and evaluated the models with accuracy, precision, recall, and F1-score.',
      'Presented data-driven insights and recommendations to support lending strategy decisions.',
    ],
    links: [{ label: 'Internship certificate', href: `https://drive.google.com/file/d/1kPNgbEmroeQ-XGMTY1KTC5qj1HJ6x1wY/view`, external: true }],
  },
  {
    period: 'Jan – Mar 2025',
    role: 'Team Leader, Community Service Program (KKN)',
    org: 'Nyamat Village, Tengaran, Semarang Regency',
    logo: logoUnnes, // KKN is a Universitas Negeri Semarang program
    summary: 'Led a multidisciplinary team of 11 students through a 58-day program that finished with an evaluation score of 95.',
    points: [
      'Organized and supervised 18 community initiatives together with local authorities and residents.',
      'Created MathLadder, an educational game to improve arithmetic skills for 12 fourth graders at SD Negeri Nyamat.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Mathematics',
  school: 'Universitas Negeri Semarang',
  logo: logoUnnes,
  period: '2022 – 2026',
  note: 'GPA 3.85 / 4.00. Coursework in statistics, probability, data mining, time series analysis, database systems, programming algorithms, and discrete mathematics.',
};

export const awards = [
  {
    date: 'Nov 2025',
    title: '2nd place nationally, PKM Asosiasi MIPA LPTK Indonesia',
    note: 'FLO: traffic flow decomposition on Semarang roads using YOLOv8 and the A* algorithm. Ranked 2nd of 40 teams at Universitas Negeri Gorontalo.',
    image: awardPkm,
    caption: 'Team announcement from the UNNES mathematics department',
    href: `https://drive.google.com/file/d/1TrY5BdvhIlTCjPTVi7kggk_DkK4NRmjM/view`,
  },
  {
    date: 'Jun 2025',
    title: '3rd place nationally, UNITY ICT Scientific Writing Competition',
    note: 'FLO with YOLOv8 and the Dijkstra algorithm. Ranked 3rd of 25 teams at Universitas Negeri Yogyakarta.',
    image: awardUnity,
    caption: 'The FLO team receiving 3rd place at UNY',
    href: `https://drive.google.com/file/d/183Cnjm6IZ8ltwg7jW77Kc2vcMfI59X6j/view`,
  },
];

export type TeachingItem = {
  kicker: string;
  title: string;
  body: string;
  image: ImageMetadata;
  caption: string;
  links: Link[];
};

export type TeachingGroup = {
  heading: string;
  intro: string;
  columns: 2 | 3;
  items: TeachingItem[];
};

export const teaching: TeachingGroup[] = [
  {
    heading: 'Dicoding Bootcamp',
    intro: 'Technical instructor for two bootcamp tracks, with slides and hands-on activities I developed.',
    columns: 2,
    items: [
      {
        kicker: 'Batch 15 · Gen AI Engineer · 17 Sep 2026',
        title: 'Regression and classification',
        body: 'A 120-minute class for 40 participants. I revamped the slides and built hands-on regression and classification labs in Colab. Rated 4.79/5.',
        image: bootcamp15,
        caption: 'Hands-on regression lab in Colab',
        links: [],
      },
      {
        kicker: 'Batch 16 · Data Analyst · 21 Sep 2026',
        title: 'Data Analyst in the AI era',
        body: 'A 120-minute class for 25 participants on end-to-end AI-assisted data analysis, visualization, and career preparation, including prompting practice with the RACE framework. Rated 4.87/5, my highest.',
        image: bootcamp16,
        caption: 'Mini quiz on prompting with the RACE framework',
        links: [],
      },
    ],
  },
  {
    heading: 'DevCoach live sessions',
    intro: "Dicoding's public live sessions on YouTube. 1.8k+ live viewers across both.",
    columns: 2,
    items: [
      {
        kicker: 'DevCoach #238 · 90 minutes',
        title: 'Mengenal RAG: Dari Konsep ke Implementasi Pertamamu',
        body: 'RAG from concept to a first working system. I built the material and a Naive RAG chatbot with LangChain, using PP No. 51 Tahun 2023 as the knowledge base. 644 live viewers, rated 4.64/5.',
        image: devcoach238,
        caption: 'Session poster',
        links: [{ label: 'Watch recording', href: 'https://www.youtube.com/live/-1_IJOmJu1E', external: true }],
      },
      {
        kicker: 'DevCoach #244 · 90 minutes',
        title: 'Kenalan dengan Jev: Model AI yang Nggak Bisa Ngobrol',
        body: 'An introduction to Jev, a System One model that returns structured decisions (choices, scores, and probabilities) instead of text. 1.2k live viewers, rated 4.66/5.',
        image: devcoach244,
        caption: 'Session poster',
        links: [{ label: 'Watch recording', href: 'https://www.youtube.com/live/B9TFa-95Ato', external: true }],
      },
    ],
  },
  {
    heading: 'Co-training',
    intro: 'Supporting the lead trainer in partner programs.',
    columns: 3,
    items: [
      {
        kicker: 'GCC × Ekraf AI Track · 22 Sep 2026',
        title: 'Building a UMKM ordering app',
        body: 'A 90-minute offline workshop for 30 participants who built a small-business ordering web app with Google AI Studio, Supabase, GitHub, and Netlify.',
        image: gccEkraf,
        caption: 'Helping a participant during the offline workshop',
        links: [],
      },
      {
        kicker: 'Online · 28 Sep 2026',
        title: 'Gemini Notebook',
        body: 'Using Gemini Notebook to organize sources, summarize information, and generate insights.',
        image: geminiNotebook,
        caption: 'Co-training the Gemini Notebook session online',
        links: [],
      },
      {
        kicker: 'Online · 19 Oct 2026',
        title: 'Gemini in Slides',
        body: 'Using Gemini to develop ideas and build engaging presentations.',
        image: geminiSlides,
        caption: 'Co-training the Gemini in Slides session online',
        links: [],
      },
    ],
  },
];

export const writing = [
  {
    date: 'Jul 2026',
    publisher: 'Dicoding Blog',
    language: 'Bahasa Indonesia',
    title: 'Pentingnya Chunking Strategy dalam RAG',
    body: 'The quality of a RAG system depends heavily on how documents are split before indexing. The article explains chunking, compares the common strategies, and shows how to pick one for your use case.',
    href: 'https://www.dicoding.com/blog/pentingnya-chunking-strategy-dalam-rag/',
    cta: 'Read on Dicoding',
    image: chunkingCover as ImageMetadata | undefined,
    caption: 'Article cover, Dicoding Blog',
  },
];

export type Project = {
  kicker: string;
  title: string;
  body: string;
  stack: string[];
  image?: ImageMetadata;
  imageNote: string; // what the placeholder should eventually show
  links: Link[];
};

const GH = 'https://github.com/anggapradanaa';

// Six selected projects, two per role. Everything else lives on GitHub (profile.github).
export const projects: Project[] = [
  {
    kicker: 'AI engineering · LLM · RAG',
    title: 'Indonesian labor regulation assistant',
    body: 'A public chatbot that answers questions about PP 35/2021 in Indonesian and cites the article (Pasal) behind every answer. Regulations are chunked per article, retrieved with hybrid dense and sparse search, reranked with a cross-encoder, and answered by GPT-OSS 120B on Groq with an anti-hallucination prompt. If the answer is not in the regulation, it says so. Everything runs on free tiers.',
    stack: ['BGE-M3', 'BM25', 'Qdrant', 'GPT-OSS 120B', 'Groq', 'Next.js'],
    image: laborRag,
    imageNote: 'Home screen of the live demo',
    links: [
      { label: 'Live demo', href: 'https://frontend-iota-nine-14.vercel.app', external: true },
      { label: 'View code', href: `${GH}/indonesia-labor-rag`, external: true },
    ],
  },
  {
    kicker: 'AI engineering · Deep learning',
    title: 'SIBI sign language recognition',
    body: 'An end-to-end deep learning app that reads SIBI hand signs in real time from a webcam or an uploaded photo. I compared ResNet50, VGG16, and MobileNetV2 with transfer learning, picked ResNet50 at 99.33% test accuracy, and converted it to TensorFlow.js so it runs entirely in the browser.',
    stack: ['TensorFlow', 'ResNet50', 'TensorFlow.js', 'HandPose'],
    image: sibi,
    imageNote: 'Real-time prediction from the webcam',
    links: [
      { label: 'Live demo', href: 'https://sibi-sign-language-recognition.vercel.app', external: true },
      { label: 'View code', href: `${GH}/sibi-sign-language-recognition`, external: true },
    ],
  },
  {
    kicker: 'Data science · Computer vision',
    title: 'FLO: traffic flow decomposition',
    body: 'Team research on Semarang traffic that runs YOLOv8 vehicle detection on live CCTV feeds, classifies each junction as smooth, busy, or jammed, and recommends the fastest route with A* in one version and Dijkstra in the other. It placed 2nd of 40 teams at PKM MIPA LPTK and 3rd of 25 at UNITY.',
    stack: ['YOLOv8', 'Python', 'A*', 'Dijkstra', 'Folium'],
    image: floCctv,
    imageNote: 'YOLOv8 detections on live CCTV feeds in Semarang',
    links: [
      { label: 'A* code', href: `${GH}/flo_pkm_amli_2025`, external: true },
      { label: 'Dijkstra code', href: `${GH}/FLO-Project-Using-YOLOv8-with-Djikstra`, external: true },
    ],
  },
  {
    kicker: 'Data science · Credit risk',
    title: 'Credit default scoring',
    body: 'A credit scoring model on Home Credit customer data, built during my Rakamin internship. I cleaned and engineered features, handled class imbalance with SMOTEENN, and compared Logistic Regression with XGBoost, which reached an ROC-AUC of 0.70 against 0.67, then turned the results into lending recommendations.',
    stack: ['Python', 'XGBoost', 'Scikit-learn', 'SMOTEENN'],
    image: creditScoring,
    imageNote: 'Final presentation deck',
    links: [
      {
        label: 'View code',
        href: `${GH}/Data-Scientist-Intern-Home-Credit-Indonesia-Project-Based-Internship-via-Rakamin-Academy`,
        external: true,
      },
    ],
  },
  {
    kicker: 'Data analysis · SQL · Tableau',
    title: 'Pizza sales dashboard',
    body: 'SQL exploration and a two-page Tableau dashboard on a year of pizza orders: $817.86K in revenue from 21.35K orders. It shows when orders peak, at lunch and again from 4 to 7 PM, which weeks are busiest, and which pizzas sell best and worst by revenue, quantity, and orders.',
    stack: ['SQL', 'Tableau'],
    image: pizzaSales,
    imageNote: 'Home page of the dashboard',
    links: [
      {
        label: 'Open dashboard',
        href: 'https://public.tableau.com/app/profile/angga.yulian.adi.pradana/viz/PizzaSalesDashboard_17059985450830/Home',
        external: true,
      },
      { label: 'View code', href: `${GH}/Pizza-Sales-Dashboard-using-SQL-and-Tableau`, external: true },
    ],
  },
  {
    kicker: 'Data analysis · Power BI',
    title: 'Olist e-commerce dashboard',
    body: 'A Power BI dashboard and written insight report on 96,480 Olist orders, covering revenue trends, category growth, price ranges, and payment methods. Revenue grew more than 800% through 2017 and then levelled off in 2018, so the report focuses on which categories and price ranges now carry the business.',
    stack: ['Power BI'],
    image: olist,
    imageNote: 'Executive summary page',
    links: [
      { label: 'Read report', href: `${GH}/olist-ecommerce-analytics-powerbi`, external: true },
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  href?: string; // verification page or certificate file
  image?: ImageMetadata; // certificate image or first page of the PDF (16:9 slot)
};

// From Angga's LinkedIn "Licenses & certifications", newest first.
const DICODING_CERT = 'https://www.dicoding.com/certificates/';
export const certifications: Certification[] = [
  {
    name: 'Pengembangan Generative AI berbasis LLM',
    issuer: 'Dicoding Indonesia',
    issued: 'Jun 2026',
    expires: 'Jun 2029',
    credentialId: 'GRX5W8NW2Z0M',
    image: certDicodingGenaiLlm,
    href: `${DICODING_CERT}GRX5W8NW2Z0M`,
  },
  {
    name: 'Belajar Fundamental Generative AI',
    issuer: 'Dicoding Indonesia',
    issued: 'May 2026',
    expires: 'May 2029',
    credentialId: '6RPN700L9X2M',
    image: certDicodingGenaiFundamental,
    href: `${DICODING_CERT}6RPN700L9X2M`,
  },
  {
    name: 'Machine Learning, ASAH Program (Dicoding × Accenture)',
    issuer: 'Dicoding Indonesia',
    issued: 'Jan 2026',
    credentialId: 'ASAH/GRAD/XXVI-01/M283D5Y0232',
    image: certAsahMl,
    href: `https://drive.google.com/file/d/1mUPvmVfksL7XCMNLER6jNru9ktY44YhQ/view`,
  },
  {
    name: 'Data Science Fundamentals',
    issuer: 'DQLab',
    issued: 'Jan 2024',
    credentialId: 'DQLABFREECLASS01MRUVHB',
    image: certDqlabDsFundamentals,
    href: `https://drive.google.com/file/d/143ahPj8ux0VScn45HFmfgypwWtGcdCZM/view`,
  },
  {
    name: 'R Fundamental for Data Science',
    issuer: 'DQLab',
    issued: 'Jan 2024',
    credentialId: 'DQLABINTR1WTCIMW',
    image: certDqlabR,
    href: `https://drive.google.com/file/d/1g-kHn_egUR3_nwdKsM1wJ0nin9gpsreI/view`,
  },
  {
    name: 'Python Fundamental for Data Science',
    issuer: 'DQLab',
    issued: 'Jan 2024',
    credentialId: 'DQLABINTP1JMCFEF',
    image: certDqlabPython,
    href: `https://drive.google.com/file/d/18r2D-PIAUPkvMkbWD-XX7GAp4ZdbAM33/view`,
  },
  {
    name: 'Fundamental SQL Using SELECT Statement',
    issuer: 'DQLab',
    issued: 'Jan 2024',
    credentialId: 'DQLABSQLT1GKJTGS',
    image: certDqlabSql,
    href: `https://drive.google.com/file/d/1FtlO1XzH0jmLUjTTAG-zIqBGuzsh_-GO/view`,
  },
  {
    name: 'Intro to Data Analytics',
    issuer: 'RevoU',
    image: certRevouDataAnalytics,
    issued: 'Jan 2024',
    href: `https://drive.google.com/file/d/1YfBM3neUSaHOXdAkjlW1zxYqqjZNbVoY/view`,
  },
  {
    name: 'SQL (Basic) Certificate',
    issuer: 'HackerRank',
    issued: 'Jan 2024',
    credentialId: '6194CC089042',
    image: certHackerrankSql,
    href: 'https://www.hackerrank.com/certificates/6194cc089042',
  },
  {
    name: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    issued: 'Jan 2024',
    expires: 'Jan 2027',
    credentialId: 'NVP77QL6GPR0',
    image: certDicodingSql,
    href: `${DICODING_CERT}NVP77QL6GPR0`,
  },
  {
    name: 'Belajar Dasar Data Science',
    issuer: 'Dicoding Indonesia',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
    credentialId: 'N9ZOOOQ1DZG5',
    image: certDicodingDataScience,
    href: `${DICODING_CERT}N9ZOOOQ1DZG5`,
  },
  {
    name: 'SQL for Data Analysis',
    issuer: 'MySkill',
    image: certMyskillSql,
    issued: 'Sep 2023',
    href: `https://drive.google.com/file/d/1We-eD84dGu_YmJgp_dI4Cz4OGfyQqceD/view`,
  },
];

export const elsewhere: Link[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'GitHub', href: profile.github, external: true },
  ...cvs,
];

