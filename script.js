/* ===== DATA ===== */
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "fab fa-react", level: 85 },
      { name: "HTML5", icon: "fab fa-html5", level: 95 },
      { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
      { name: "JavaScript", icon: "fab fa-js", level: 90 },
      { name: "Web Design", icon: "fas fa-palette", level: 85 },
      { name: "Responsive Design", icon: "fas fa-mobile-alt", level: 90 },
      { name: "Tailwind CSS", icon: "fas fa-wind", level: 85 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C", icon: "fas fa-code", level: 85 },
      { name: "Python", icon: "fab fa-python", level: 80 },
      { name: "JavaScript", icon: "fab fa-js", level: 90 },
      { name: "Data Structures", icon: "fas fa-cubes", level: 80 },
      { name: "Algorithms", icon: "fas fa-sitemap", level: 75 },
      { name: "Problem Solving", icon: "fas fa-lightbulb", level: 85 },
    ],
  },
  {
    title: "Cloud & AWS",
    skills: [
      { name: "AWS Services", icon: "fab fa-aws", level: 75 },
      { name: "Cloud Computing", icon: "fas fa-cloud", level: 80 },
      { name: "Cyber Security", icon: "fas fa-shield-alt", level: 70 },
      { name: "EC2", icon: "fas fa-server", level: 70 },
      { name: "S3 Storage", icon: "fas fa-database", level: 75 },
      { name: "Linux", icon: "fab fa-linux", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "fab fa-git-alt", level: 85 },
      { name: "VS Code", icon: "fas fa-code", level: 90 },
      { name: "GitHub", icon: "fab fa-github", level: 85 },
      { name: "npm/yarn", icon: "fab fa-npm", level: 80 },
      { name: "Chrome DevTools", icon: "fas fa-bug", level: 85 },
      { name: "Figma", icon: "fas fa-design", level: 75 },
    ],
  },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio showcasing frontend skills with interactive design. Features smooth animations, theme toggle, and contact form integration.",
    image: "images/3.1.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/chethangowda25832-ctrl",
    category: ["all", "github", "web"],
    status: "In Progress",
  },
  {
    title: "React E-Commerce App",
    description: "Full-featured e-commerce application built with React showcasing product listings, shopping cart, and checkout functionality with modern UI.",
    image: "images/3.1.jpg",
    tech: ["React", "JavaScript", "CSS", "State Management"],
    github: "https://github.com/chethangowda25832-ctrl",
    category: ["all", "github", "web"],
    status: "In Progress",
  },
  {
    title: "Weather Application",
    description: "Interactive weather app using REST APIs to fetch real-time weather data. Features location search, current weather display, and 5-day forecast.",
    image: "images/3.1.jpg",
    tech: ["React", "API Integration", "JavaScript", "CSS"],
    github: "https://github.com/chethangowda25832-ctrl",
    category: ["all", "github", "web"],
    status: "In Progress",
  },
  {
    title: "Todo Task Manager",
    description: "Responsive task management application with add, edit, delete, and mark complete functionality. Built with vanilla JavaScript and clean UI design.",
    image: "images/3.1.jpg",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/chethangowda25832-ctrl",
    category: ["all", "github", "web"],
    status: "In Progress",
  },
  {
    title: "AWS Cloud Infrastructure Setup",
    description: "Deployment and configuration of scalable cloud infrastructure on AWS including EC2 instances, S3 storage, and RDS database setup.",
    image: "images/3.1.jpg",
    tech: ["AWS", "EC2", "S3", "Cloud Architecture"],
    category: ["all", "aws"],
    status: "Learning Project",
  },
  {
    title: "Frontend Performance Optimization",
    description: "Web optimization project focusing on improving page load speed, implementing lazy loading, image optimization, and caching strategies.",
    image: "images/3.1.jpg",
    tech: ["Performance", "Web Optimization", "CSS", "JavaScript"],
    category: ["all", "web"],
    status: "In Progress",
  },
];

const experiences = [
  {
    title: "BCA Student - Cloud Computing & Cyber Security",
    badge: "Current",
    company: "Sapthagiri NPS University",
    period: "2025 - Present",
    description: "Pursuing Bachelor of Computer Applications with specialization in Cloud Computing and Cyber Security. Focusing on frontend development, cloud architecture, and web technologies.",
    tags: ["Cloud Computing", "Frontend Development", "Web Design", "Programming"],
    icon: "fas fa-graduation-cap",
  },
  {
    title: "Frontend Developer & Self-Learner",
    badge: "Active",
    company: "Independent Learner",
    period: "2025 - Present",
    description: "Building responsive web applications with React and modern JavaScript. Implementing best practices in frontend development, UI/UX design, and performance optimization.",
    tags: ["React", "Web Development", "JavaScript", "UI/UX Design"],
    icon: "fas fa-laptop-code",
  },
  {
    title: "Cloud Exploration & AWS Learning",
    badge: "In Progress",
    company: "AWS & Cloud Platforms",
    period: "2026",
    description: "Learning cloud computing fundamentals and AWS services including EC2, S3, and deploying web applications on cloud infrastructure.",
    tags: ["AWS", "Cloud Architecture", "Infrastructure", "DevOps Basics"],
    icon: "fab fa-aws",
  },
  {
    title: "24-Hour Hackathon Participant",
    badge: "Completed",
    company: "RNSIT University",
    period: "2026",
    description: "Participated in a 24-hour intensive hackathon focused on MCP-Based System-Engineering Intelligent Systems. Collaborated with team members to develop innovative solutions using advanced engineering principles.",
    tags: ["Hackathon", "System Engineering", "MCP", "Intelligent Systems", "Teamwork", "Problem Solving"],
    icon: "fas fa-rocket",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sapthagiri NPS University",
    specialization: "Cloud Computing & Cyber Security",
    period: "2023 - Present",
    description: "Comprehensive program covering cloud computing, cyber security, web development, and programming fundamentals with focus on modern technologies.",
    highlights: ["Cloud Computing", "Cyber Security", "Web Development", "Programming"],
    icon: "fas fa-graduation-cap",
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "East West Pre University",
    specialization: "Science - PCMB (Physics, Chemistry, Mathematics, Biology)",
    period: "2022 - 2024",
    description: "Strong foundation in science subjects with focus on Physics, Chemistry, Mathematics, and Biology. Developed analytical and problem-solving skills.",
    highlights: ["Physics", "Chemistry", "Mathematics", "Biology"],
    icon: "fas fa-book",
  },
  {
    degree: "Secondary School Certificate (10th Grade)",
    institution: "Schoenestatt St Mary's High School",
    specialization: "Science & Mathematics",
    period: "2021",
    description: "Comprehensive secondary education with strong foundation in core subjects including Science, Mathematics, English, and Social Studies.",
    highlights: ["Science", "Mathematics", "English", "Social Studies"],
    icon: "fas fa-school",
  },
];

const certifications = [
  {
    title: "AWS Cloud Services",
    issuer: "Amazon Web Services",
    date: "2026",
    description: "Comprehensive training on AWS services including EC2, S3, RDS, and cloud architecture fundamentals for deploying scalable web applications.",
    skills: ["AWS", "Cloud Computing", "Infrastructure", "Deployment"],
    icon: "fab fa-aws",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cybersecurity Institute",
    date: "2026",
    description: "Fundamental concepts of cybersecurity including threat analysis, security protocols, and best practices for protecting digital systems.",
    skills: ["Cybersecurity", "Network Security", "Data Protection", "Risk Management"],
    icon: "fas fa-shield-alt",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "Cloud Computing Academy",
    date: "2026",
    description: "In-depth understanding of cloud computing models, services, and deployment strategies for business applications.",
    skills: ["Cloud Computing", "Infrastructure", "Services", "Architecture"],
    icon: "fas fa-cloud",
  },
  {
    title: "SQL Database Management",
    issuer: "Database Institute",
    date: "2026",
    description: "Advanced SQL skills including database design, query optimization, and database administration for managing large-scale data.",
    skills: ["SQL", "Database", "Data Management", "Query Optimization"],
    icon: "fas fa-database",
  },
  {
    title: "Cyber Crime Investigation",
    issuer: "Cyber Crime Center",
    date: "2026",
    description: "Understanding cyber crime threats, investigation techniques, and legal frameworks for handling cyber crime cases.",
    skills: ["Cyber Crime", "Investigation", "Threat Analysis", "Legal Compliance"],
    icon: "fas fa-exclamation-triangle",
  },
  {
    title: "Intellectual Property Rights (IPR)",
    issuer: "IPR Academy",
    date: "2026",
    description: "Comprehensive knowledge of intellectual property laws, copyrights, patents, and trademarks for protecting digital innovations.",
    skills: ["IPR", "Copyright", "Patents", "Legal Knowledge"],
    icon: "fas fa-certificate",
  },
];

const achievements = [
  {
    title: "Web Development Project Showcase",
    date: "2024",
    description: "Completed multiple frontend development projects showcasing proficiency in React, JavaScript, and responsive web design with modern UI.",
    icon: "fas fa-code",
  },
  {
    title: "AWS Cloud Learning Milestone",
    date: "2024",
    description: "Successfully completed AWS fundamentals course and deployed first web application on cloud infrastructure.",
    icon: "fab fa-aws",
  },
  {
    title: "Portfolio Development",
    date: "2024",
    description: "Built professional portfolio website showcasing frontend development skills, projects, and technical expertise with modern design patterns.",
    icon: "fas fa-globe",
  },
  {
    title: "Continuous Learning Commitment",
    date: "Ongoing",
    description: "Actively pursuing knowledge in frontend technologies, cloud computing, and cyber security through self-learning and practical projects.",
    icon: "fas fa-graduation-cap",
  },
];

/* ===== THEME ===== */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  html.classList.toggle('light', !isDark);
  const btn = document.getElementById('theme-toggle');
  btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.className = saved;
  const btn = document.getElementById('theme-toggle');
  btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

/* ===== NAVBAR ===== */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navBtns = document.querySelectorAll('.nav-links button, .mobile-menu button');
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'contact'];

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 200) current = id;
    }
    navBtns.forEach(btn => {
      const sec = btn.getAttribute('data-section');
      btn.classList.toggle('active', sec === current);
    });
  });
}

/* ===== TYPING ANIMATION ===== */
function initTyping() {
  const sequences = [
    'Frontend Developer',
    'Web Designer',
    'Cloud Enthusiast',
    'Problem Solver',
  ];
  let si = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed-text');

  function tick() {
    const word = sequences[si];
    if (!deleting) {
      el.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        si = (si + 1) % sequences.length;
      }
    }
    setTimeout(tick, deleting ? 50 : 80);
  }
  tick();
}

/* ===== PARTICLES ===== */
function initParticles() {
  const container = document.getElementById('particles-container');
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const COUNT = 160; // more particles

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  // Particle types: 0=dot, 1=ring, 2=cross, 3=diamond
  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.type = Math.floor(Math.random() * 4);
      this.r = this.type === 0 ? 0.5 + Math.random() * 1.5
             : this.type === 1 ? 2 + Math.random() * 3
             : this.type === 2 ? 2 + Math.random() * 2
             : 1.5 + Math.random() * 2;
      this.speed = 0.2 + Math.random() * 0.6;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(this.speed);
      this.alpha = 0;
      this.maxAlpha = this.type === 0 ? 0.3 + Math.random() * 0.5
                    : this.type === 1 ? 0.15 + Math.random() * 0.25
                    : 0.2 + Math.random() * 0.35;
      this.life = 0;
      this.maxLife = 180 + Math.random() * 320;
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.life++;
      const fadeLen = 50;
      if (this.life < fadeLen) this.alpha = (this.life / fadeLen) * this.maxAlpha;
      else if (this.life > this.maxLife - fadeLen) this.alpha = ((this.maxLife - this.life) / fadeLen) * this.maxAlpha;
      else this.alpha = this.maxAlpha;

      // mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140 && dist > 0) {
        const force = (140 - dist) / 140 * 0.9;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.vx *= 0.97;
      this.vy = this.vy * 0.97 - this.speed * 0.03;
      this.rot += this.rotSpeed;
      this.x += this.vx;
      this.y += this.vy;

      if (this.life >= this.maxLife || this.y < -20) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);

      if (this.type === 0) {
        // dot
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
      } else if (this.type === 1) {
        // ring
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.6;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#ffffff';
        ctx.stroke();
      } else if (this.type === 2) {
        // cross / plus
        const s = this.r;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.8;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
        ctx.moveTo(0, -s); ctx.lineTo(0, s);
        ctx.stroke();
      } else {
        // diamond
        const s = this.r;
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s, 0);
        ctx.lineTo(0, s);
        ctx.lineTo(-s, 0);
        ctx.closePath();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.6;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#ffffff';
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  // connection lines between nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          const a = (1 - d / 90) * 0.07;
          ctx.save();
          ctx.globalAlpha = a;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // Mouse spotlight glow on canvas
  function drawSpotlight() {
    if (mouse.x < 0) return;
    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
    grad.addColorStop(0, 'rgba(255,255,255,0.04)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.save();
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawSpotlight();
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-level') + '%';
        });
      }
    });
  }, { threshold: 0.1, rootMargin: '-50px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===== SKILLS ===== */
let currentSkillTab = 0;

function renderSkills(tabIndex) {
  const grid = document.getElementById('skills-grid');
  const cat = skillCategories[tabIndex];
  grid.innerHTML = cat.skills.map((skill, i) => `
    <div class="skill-card" style="animation-delay:${i * 0.05}s">
      <div class="skill-icon-wrap"><i class="${skill.icon}"></i></div>
      <h3 class="skill-name">${skill.name}</h3>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${skill.level}" style="width:0"></div>
      </div>
      <span class="skill-pct">${skill.level}%</span>
    </div>
  `).join('');
}

function switchSkillTab(idx, btn) {
  currentSkillTab = idx;
  document.querySelectorAll('#skill-tabs .tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  renderSkills(idx);
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-level') + '%';
    });
  }, 50);
}

/* ===== PROJECTS ===== */
function getStatusClass(status) {
  const map = { 'Live': 'status-live', 'In Development': 'status-indev', 'Completed': 'status-completed', 'Learning Project': 'status-tool' };
  return map[status] || 'status-live';
}

function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  const filtered = projects.filter(p => p.category.includes(filter));
  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-card" style="animation-delay:${i * 0.08}s">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="project-thumb-overlay"></div>
        <span class="project-status-badge ${getStatusClass(p.status)}">${p.status}</span>
        <div class="project-hover-links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="proj-link proj-link-live"><i class="fas fa-external-link-alt"></i></a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-link proj-link-github"><i class="fab fa-github"></i></a>` : ''}
        </div>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function filterProjects(filter, btn) {
  document.querySelectorAll('#project-filter-btns .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(filter);
}

/* ===== EXPERIENCE ===== */
function renderExperienceTab(tab) {
  const container = document.getElementById('exp-content');

  if (tab === 'experience') {
    container.innerHTML = `
      <div class="timeline">
        ${experiences.map((exp, i) => `
          <div class="timeline-item" style="animation-delay:${i * 0.1}s">
            <div class="timeline-dot"></div>
            <div class="glass-card exp-card">
              <div class="exp-header">
                <div class="exp-title-group">
                  <div class="exp-icon"><i class="${exp.icon}"></i></div>
                  <div>
                    <h3 style="font-size:0.9375rem;font-weight:600">${exp.title}</h3>
                    <p style="font-size:0.8125rem;color:var(--text-muted)">${exp.company}</p>
                  </div>
                </div>
                <span class="exp-badge">${exp.badge}</span>
              </div>
              <p class="exp-period">${exp.period}</p>
              <p style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">${exp.description}</p>
              <div class="tags">
                ${exp.tags.map(t => `<span class="tag-sm">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'education') {
    container.innerHTML = `
      <div class="edu-grid">
        ${education.map((edu, i) => `
          <div class="glass-card edu-card" style="animation:fadeInUp 0.4s ease ${i * 0.1}s both">
            <div class="edu-icon"><i class="${edu.icon}"></i></div>
            <h3 style="font-weight:600;margin-bottom:0.25rem">${edu.degree}</h3>
            <p style="font-size:0.875rem;color:var(--cyber-blue);margin-bottom:0.25rem">${edu.institution}</p>
            <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.25rem">${edu.specialization}</p>
            <p style="font-size:0.75rem;color:var(--text-muted);font-family:'JetBrains Mono',monospace;margin-bottom:0.75rem">${edu.period}</p>
            <p style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">${edu.description}</p>
            <div class="tags">
              ${edu.highlights.map(h => `<span style="padding:3px 8px;border-radius:6px;font-size:0.7rem;background:var(--neon-green-dim);color:var(--neon-green)">${h}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'certifications') {
    container.innerHTML = `
      <div class="edu-grid">
        ${certifications.map((cert, i) => `
          <div class="glass-card edu-card" style="animation:fadeInUp 0.4s ease ${i * 0.1}s both">
            <div class="edu-icon cert-icon"><i class="${cert.icon}"></i></div>
            <h3 style="font-weight:600;margin-bottom:0.25rem">${cert.title}</h3>
            <p style="font-size:0.875rem;color:var(--cyber-blue);margin-bottom:0.25rem">${cert.issuer}</p>
            <p style="font-size:0.75rem;color:var(--text-muted);font-family:'JetBrains Mono',monospace;margin-bottom:0.75rem">${cert.date}</p>
            <p style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.6">${cert.description}</p>
            <div class="tags">
              ${cert.skills.map(s => `<span style="padding:3px 8px;border-radius:6px;font-size:0.7rem;background:var(--glass-bg);border:1px solid var(--glass-border);color:var(--cyber-blue)">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'achievements') {
    container.innerHTML = `
      <div class="ach-grid">
        ${achievements.map((ach, i) => `
          <div class="glass-card ach-card" style="animation:fadeInUp 0.4s ease ${i * 0.1}s both">
            <div class="ach-icon"><i class="${ach.icon}"></i></div>
            <div>
              <h3 style="font-weight:600;margin-bottom:0.25rem">${ach.title}</h3>
              <p style="font-size:0.75rem;color:var(--cyber-blue);font-family:'JetBrains Mono',monospace;margin-bottom:0.5rem">${ach.date}</p>
              <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.6">${ach.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function switchExpTab(tab, btn) {
  document.querySelectorAll('#exp-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderExperienceTab(tab);
}

/* ===== CONTACT FORM ===== */
function handleContactForm(e) {
  e.preventDefault();
  const btn = document.getElementById('send-btn');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  
  setTimeout(() => {
    window.open(`mailto:chethangowda2583@gmail.com?subject=${subject}&body=${body}`, '_blank');
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = '#4ade80';
    
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
      document.getElementById('contact-form').reset();
    }, 3000);
  }, 1000);
}

/* ===== CV DOWNLOAD ===== */
function downloadCV() {
  // Open CV page with auto-download
  window.open('cv.html?download=true', '_blank');
}

/* ===== YEAR ===== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initTyping();
  initParticles();
  renderSkills(0);
  renderProjects('all');
  renderExperienceTab('experience');
  
  setTimeout(initReveal, 100);
});
