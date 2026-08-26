const DATA = {

  name: "Nael Baobayd",
  role: "Software enginering",

  specs: [
    { label: "Based in",  value: "Jeddah, Saudi Arabia" },
    { label: "Focus",     value: "Software Enginering" },
    { label: "Experience", value: "2+ years" },
  ],

  about: [
    "I'm a aplication developer who likes turning messy problems into clear.",
    "At Business Schema Trading Company, I built and maintained around 18 modules across a Hospital Information Management System used by 4 hospitals, and a Human Resource Management System used department-wide — working across C#, ASP.NET, JavaScript, and AngularJS, with SQL Server on the backend. I also resolved roughly 40 production issues, debugging and optimizing workflows to keep systems stable for the people relying on them daily.",
    "Outside of work, I build my own projects to keep learning — most recently a full-stack player-matching platform for gamers, built solo for an AI hackathon, where it earned a Gold AI Judge Rating.",
  ],

  skills: [
    "Python", "C#", "Javascript", "Front-end", "HTML/CSS",
    "Back-end", "SQL", "Node.js"
  ],

  experience: [
    {
      title: "GPLR: Generative Personalized Learning Recommendation Framework",
      year: "2025 – Present",
      description: "Master's thesis framework recommending personalized learning paths for learners' weak concepts, combining K-Means clustering, concept graphs, and topological path generation. Benchmarked Logistic Regression, Random Forest, Gradient Boosting, and a Concept-Attention Transformer, reaching ~96% accuracy / macro F1 across 5,492 training and 1,374 test learners.",
      tags: ["Python", "PyTorch", "scikit-learn"],
      link: ""
    },
    {
      role: "Application Program",
      company: "Business Schema Trading",
      period: "2023 — 2025",
      description: "Built and maintained core modules across a Hospital Information Management System and Human Resource Management System used in live enterprise environments.\n"+
        "Built and maintained ~18 modules across a Hospital Information Management System (HIMS) used by 4 hospitals, and a Human Resource Management System (HRMS) used department-wide.\n"+
        "Developed across both front-end and back-end using C#, ASP.NET, JavaScript, and AngularJS, with SQL Server on the backend.\n"+
        "Resolved ~40 production issues, debugging and optimizing integrated front-end/back-end workflows to improve system stability.\n"+
        "Collaborated with a cross-functional team of 8 to gather requirements and deliver scalable features across both systems.\n",
      tags: ["Debugging", "C#", "Javascript", "HTML/CSS", "SQL"]
    },
    {
      role: "Application Program Trainee (Tamheer Program)",
      company: "Business Schema Trading",
      period: "2022 — 2023",
      description: "Contributed to front-end and back-end development across 2 enterprise projects (HIMS, HRMS) using C#, JavaScript, and HTML.\n"+
      "Assisted in designing application UIs and connecting them to server-side logic under senior developer guidance.\n"+
      "Gained hands-on experience with team workflows, coding standards, and troubleshooting in a professional environment.",
      tags: ["C#", "Javascript", "HTML/CSS"]
    }
  ],

  projects: [
    {
      title: "Let's Play Now (LPN) – Player Matcher",
      year: "2026",
      description: "Solo-built a full-stack social platform for gamers to discover teammates by shared game interests for the KANZ AI Training Hackathon; received a Gold AI Judge Rating in the Kanz AI project review.",
      tags: ["Node.js", "OpenAPI"],
      link: "https://github.com/NaelSAB/Player-Matcher"
    },
    {
      title: "Internet Speed Twitter Bot",
      year: "2026",
      description: "A Python automation bot that checks your internet speed via Speedtest.net using Selenium, then logs into a mock social media platform (\"Y\" — a practice clone of X/Twitter) and posts the results automatically.",
      tags: ["Selenium", "Python"],
      link: "https://github.com/NaelSAB/speedtest-y-bot"
    },
    {
      title: "Password Manager",
      year: "2026",
      description: "This is a Python-based desktop Password Manager application built using the Tkinter library. It features a graphical user interface that allows users to generate secure random passwords, store website credentials locally in a JSON file, and search for previously saved accounts.",
      tags: ["Python", "Tkinter"],
      link: "https://github.com/NaelSAB/password-manager"
    },
    {
      title: "Arabic Language Flashcards",
      year: "2026",
      description: "This is a desktop flashcard application built with Python and Tkinter, designed to help users memorize Arabic vocabulary. It presents an Arabic word on a flashcard, automatically flips after 3 seconds to reveal the English translation, and tracks learning progress by saving unknown words to a separate CSV file.",
      tags: ["Python", "Tkinter"],
      link: "https://github.com/NaelSAB/flash-card-project"
    },
    {
      title: "Trivia Quiz Application",
      year: "2026",
      description: "This script serves as the main entry point for a modular, Object-Oriented Quiz Application. It iterates through a dataset of questions and answers to build a list of Question objects, and then initializes both the core quiz logic (QuizBrain) and the user interface (QuizInterface). Upon completion, it prints the user's final score out of the total number of questions to the console.",
      tags: ["Python", "Tkinter"],
      link: "https://github.com/NaelSAB/quizzler"
    },
    {
      title: "Movie Collection Tracker",
      year: "2026",
      description: "A Flask web app for cataloging your favorite films. Search and add movies via The Movie Database (TMDB) API, rate and review them, and automatically rank your collection by rating.",
      tags: ["Python", "Flask"],
      link: "https://github.com/NaelSAB/top-movies"
    },
    {
      title: "Cafe & Wifi Finder",
      year: "2026",
      description: "A Flask web app where users can browse and submit cafes with details on coffee quality, wifi strength, and power outlet availability, stored in a simple CSV file.",
      tags: ["Python", "Flask"],
      link: "https://github.com/NaelSAB/coffee-and-wifi"
    },
  ],

contactHeading: "Let's talk.",
  contactText: "Open to new projects, work, and interesting conversations.",
  email: "Naelbaobaid@gmail.com",
  socials: [
    { label: "Email",    url: "mailto:Naelbaobaid@gmail.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/naelbaobaid" },
    { label: "GitHub",   url: "https://github.com/NaelSAB" }
    ]
};

function el(tag, opts = {}, children = []) {
  const e = document.createElement(tag);
  if (opts.class) e.className = opts.class;
  if (opts.text) e.textContent = opts.text;
  if (opts.href) e.href = opts.href;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k,v]) => e.setAttribute(k,v));
  children.forEach(c => e.appendChild(c));
  return e;
}

document.getElementById('nav-name').textContent = DATA.name;
document.getElementById('hero-name').textContent = DATA.name;
document.getElementById('hero-role').textContent = DATA.role;
document.getElementById('foot-name').textContent = `© ${new Date().getFullYear()} ${DATA.name}`;

const specWrap = document.getElementById('specsheet');
DATA.specs.forEach(s => {
  specWrap.appendChild(el('div', {}, [
    el('div', { class:'k', text:s.label }),
    el('div', { class:'v', text:s.value })
  ]));
});

const aboutWrap = document.getElementById('about-text');
DATA.about.forEach((p,i) => aboutWrap.appendChild(el('p', { class: i===0 ? '' : 'fg-soft', text:p })));

const skillsWrap = document.getElementById('skills-list');
DATA.skills.forEach(s => skillsWrap.appendChild(el('span', { class:'chip', text:s })));

const expWrap = document.getElementById('experience-list');
DATA.experience.forEach(job => {
  const tags = el('div', { class:'ti-tags' });
  (job.tags || []).forEach(t => tags.appendChild(el('span', { class:'card', text:t })));

  expWrap.appendChild(el('div', { class:'timeline-item' }, [
    el('div', { class:'ti-top' }, [
      el('h3', { text: job.role }),
      el('span', { class:'period', text: job.period })
    ]),
    el('div', { class:'ti-company', text: job.company }),
    el('div', { class:'ti-desc fg-soft', text: job.description }),
    tags
  ]));
  expWrap.lastChild.querySelector('.timeline-item::before');
});
document.querySelectorAll('.timeline-item').forEach(item => item.classList.add('dot'));

const projWrap = document.getElementById('projects-grid');
DATA.projects.forEach(proj => {
  const tags = el('div', { class:'p-tags' });
  (proj.tags || []).forEach(t => tags.appendChild(el('span', { text:t })));

  const card = el('div', { class:'project-card card' }, [
    el('div', { class:'p-year', text: proj.year || '' }),
    el('h3', { text: proj.title }),
    el('p', { class:'fg-soft', text: proj.description }),
    tags
  ]);

  if (proj.link) {
    card.appendChild(el('a', {
      class:'p-link', href: proj.link, text:'View project ↗',
      attrs:{ target:'_blank', rel:'noopener noreferrer' }
    }));
  }
  projWrap.appendChild(card);
});

document.getElementById('contact-heading').textContent = DATA.contactHeading;
document.getElementById('contact-text').textContent = DATA.contactText;
document.getElementById('contact-cta').href = `mailto:${DATA.email}`;

const contactLinksWrap = document.getElementById('contact-links');
DATA.socials.forEach(s => {
  contactLinksWrap.appendChild(el('a', {
    href: s.url, text: s.label,
    attrs: s.url.startsWith('mailto:') ? {} : { target:'_blank', rel:'noopener noreferrer' }
  }));
});
