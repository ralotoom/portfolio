
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

const translations = {
  en: {
    nav: ["About", "Skills", "Projects", "Soft Skills", "Contact"],
    eyebrow: [
      "INFORMATION & NETWORK SECURITY",
      "ABOUT ME",
      "SKILLS",
      "PROJECTS",
      "SOFT SKILLS",
      "CONTACT"
    ],
    heroTitle: 'Building a safer<br><span>digital world.</span>',
    heroIntro: "I'm Rashed — a security-focused learner exploring networks, systems, and practical ways to protect digital information.",
    explore: "Explore my work",
    connect: "Let's connect",
    aboutTitle: "About Me",
    aboutLead: "",
    aboutText1: "I'm Rashed, a learner in Information and Network Security. I'm building my foundation in networking, computer systems, and cybersecurity concepts through practice, research, and small projects.",
    aboutText2: "This portfolio is a record of my learning journey. The project cards below are practice concepts and can be replaced with completed coursework as my skills grow.",
    skillsTitle: "Skills",
    skillsDesc: "",
    projectsTitle: "",
    projectsDesc: "",
    hobbiesTitle: "Soft Skills",
    contactTitle: 'Find me <span>online.</span>',
    softSkills: [
      ["Teamwork", "Working cooperatively with others to achieve shared goals."],
      ["Problem Solving", "Analyzing challenges and finding practical solutions."],
      ["Effective Communication", "Sharing ideas clearly and listening to others."]
    ],
    contactIntro: "Choose a platform to connect with me.",
    top: "Back to top ↑"
  },

  ar: {
    nav: ["من أنا", "المهارات", "المشاريع", "المهارات الناعمة", "تواصل معي"],
    eyebrow: [
      "أمن المعلومات والشبكات",
      "من أنا",
      "المهارات",
      "المشاريع",
      "المهارات الناعمة",
      "التواصل"
    ],
    heroTitle: 'أبني عالماً <br><span>رقمياً أكثر أماناً.</span>',
    heroIntro: "أنا راشد، مهتم بأمن المعلومات والشبكات، وأتعلم كيف أحمي الأنظمة والمعلومات الرقمية بطرق عملية.",
    explore: "استكشف أعمالي",
    connect: "لنتواصل",
    aboutTitle: "من أنا",
    aboutLead: "",
    aboutText1: "أنا راشد، أتعلم تخصص أمن المعلومات والشبكات. أعمل على بناء أساس في الشبكات وأنظمة الحاسوب ومفاهيم الأمن السيبراني من خلال التدريب والبحث والمشاريع الصغيرة.",
    aboutText2: "هذا الموقع يوثق رحلة تعلمي. المشاريع المعروضة أفكار تدريبية قابلة للاستبدال بأعمالي الفعلية كلما تطورت مهاراتي.",
    skillsTitle: "المهارات",
    skillsDesc: "",
    projectsTitle: "",
    projectsDesc: "",
    hobbiesTitle: "مهارات ناعمة أتمتع بها",
    contactTitle: 'تجدني <span>على الإنترنت.</span>',
    softSkills: [
      ["العمل الجماعي", "التعاون مع الآخرين لتحقيق الأهداف المشتركة."],
      ["حل المشكلات", "تحليل التحديات والوصول إلى حلول عملية."],
      ["التواصل الفعال", "توصيل الأفكار بوضوح والاستماع للآخرين."]
    ],
    contactIntro: "اختر منصة للتواصل معي.",
    top: "العودة للأعلى ↑"
  }
};

let currentLanguage = "en";


const githubProjectLinks = {
  html: "https://github.com/ralotoom/discovery-web-piscine/tree/main/Project_01_HTML_Fundamentals",
  css: "https://github.com/ralotoom/discovery-web-piscine/tree/main/css",
  js: "https://github.com/ralotoom/java-script"
 
};

const githubProjectText = {
  en: {
    html: "A project focused on page structure and semantic HTML.",
    css: "A project focused on styling, layout, and responsive design.",
    js: "A project focused on interactions and dynamic page behavior.",
    view: "View on GitHub"
  },

  ar: {
    html: "مشروع يركز على بناء هيكل صفحات الويب باستخدام HTML.",
    css: "مشروع يركز على التنسيق والتخطيط والتصميم المتجاوب باستخدام CSS.",
    js: "مشروع يركز على التفاعلات وتغيير محتوى الصفحة باستخدام JavaScript.",
    view: "عرض على GitHub"
  }
};

function updateGithubProjectCards(language) {
  document.querySelectorAll(".github-project").forEach(card => {
    const key = card.dataset.githubProject;
    const url = (githubProjectLinks[key] || "").trim();

    card.href = url || "#projects";
    card.target = url ? "_blank" : "_self";
    card.rel = url ? "noopener noreferrer" : "";

    card.setAttribute(
      "aria-label",
      `${language === "ar" ? "فتح مشروع" : "Open project"} ${key.toUpperCase()} ${language === "ar" ? "على GitHub" : "on GitHub"}`
    );

    const description = card.querySelector("[data-project-description]");

    if (description) {
      description.textContent = githubProjectText[language][key];
    }

    const linkLabel = card.querySelector(".project-link-label");

    if (linkLabel) {
      linkLabel.innerHTML = `${githubProjectText[language].view} <span>↗</span>`;
    }
  });
}

document.querySelectorAll(".github-project").forEach(card => {
  card.addEventListener("click", event => {
    const key = card.dataset.githubProject;

    if (!(githubProjectLinks[key] || "").trim()) {
      event.preventDefault();

      alert(
        `Add the GitHub URL for the ${key.toUpperCase()} project in script.js first.`
      );
    }
  });
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  const light = body.classList.contains("light-theme");

  themeToggle.setAttribute("aria-pressed", String(light));
  themeToggle.textContent = light ? "☼" : "◐";
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.innerHTML = value;
  }
}

function setLanguage(language) {
  currentLanguage = language;

  const t = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  languageToggle.textContent = language === "en" ? "AR" : "EN";

  const navLinks = nav.querySelectorAll("a");

  t.nav.forEach((label, index) => {
    if (navLinks[index]) {
      navLinks[index].textContent = label;
    }
  });

  const eyebrowEls = document.querySelectorAll(".eyebrow");

  t.eyebrow.forEach((label, index) => {
    if (eyebrowEls[index]) {
      eyebrowEls[index].textContent = label;
    }
  });

  setText(".hero h1", t.heroTitle);
  setText(".hero-intro", t.heroIntro);

  document.querySelector(".hero-actions .button").innerHTML =
    `${t.explore} <span>↗</span>`;

  document.querySelector(".hero-actions .text-link").innerHTML =
    `${t.connect} <span>→</span>`;

  setText("#about h2", t.aboutTitle);

  const aboutLead = document.querySelector(".about-copy .lead");

  if (aboutLead) {
    aboutLead.textContent = t.aboutLead;
  }

  document.querySelectorAll(".about-copy p:not(.lead)").forEach((p, i) => {
    p.textContent = [t.aboutText1, t.aboutText2][i] || p.textContent;
  });

  setText("#skills h2", t.skillsTitle);

  const skillsDesc = document.querySelector("#skills .section-description");

  if (skillsDesc) {
    skillsDesc.remove();
  }

  setText("#projects h2", t.projectsTitle);

  const projectsDescription = document.querySelector("#projects .section-description");

  if (projectsDescription) {
    projectsDescription.textContent = t.projectsDesc;
  }

  setText("#hobbies h2", t.hobbiesTitle);

  document.querySelectorAll(".hobbies-grid article").forEach((card, i) => {
    if (t.softSkills[i]) {
      card.querySelector("h3").textContent = t.softSkills[i][0];
      card.querySelector("p").textContent = t.softSkills[i][1];
    }
  });

  setText("#contact h2", t.contactTitle);

  document.querySelector(".contact-copy>p:not(.eyebrow)").textContent =
    t.contactIntro;

  document.querySelector(".back-top").textContent = t.top;

  updateGithubProjectCards(language);
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

updateGithubProjectCards(currentLanguage);

const projectNotes = {
  "00": [
    "Personal Portfolio",
    "A responsive portfolio that demonstrates semantic HTML, custom CSS, a live theme switcher, and bilingual navigation."
  ],

  "01": [
    "Avatar Switcher",
    "A small DOM exercise: update an image's src and alt attributes on click, with a CSS transition and no page reload."
  ],

  "02": [
    "Two Languages, One Site",
    "A translation dictionary updates interface text and changes the document language and direction between English LTR and Arabic RTL."
  ],

  "03": [
    "Network Safety Map",
    "A conceptual diagram for learning about connected devices, network boundaries, and the importance of thinking about security from the start."
  ]
};

const dialog = document.getElementById("projectDialog");

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    const note = projectNotes[button.dataset.project];

    document.getElementById("dialogKicker").textContent =
      `PROJECT ${button.dataset.project}`;

    document.getElementById("dialogTitle").textContent = note[0];
    document.getElementById("dialogText").textContent = note[1];

    dialog.showModal();
  });
});

document.getElementById("dialogClose").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(
  ".section-heading, .about-grid, .skill-card, .project-card, .hobbies-grid article, .contact-form"
).forEach(el => {
  el.classList.add("reveal");

  if (revealObserver) {
    revealObserver.observe(el);
  } else {
    el.classList.add("visible");
  }
});
