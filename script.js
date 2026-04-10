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

/* ===== BACKGROUND AURORA ===== */
function initBackground() {
  const grid = document.querySelector('.cyber-grid');
  if (grid) grid.style.display = 'none';

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  document.body.insertBefore(canvas, document.body.firstChild);
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); initNodes(); });

  const CONNECT_DIST = 150;
  const SPEED        = 0.45;
  let nodes = [];

  function initNodes() {
    nodes = [];
    const count = Math.floor((W * H) / 8500);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r:  1.2 + Math.random() * 1.8,
      });
    }
  }
  initNodes();

  function loop() {
    ctx.clearRect(0, 0, W, H);

    // Move nodes
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0)  { n.x = 0;  n.vx *= -1; }
      if (n.x > W)  { n.x = W;  n.vx *= -1; }
      if (n.y < 0)  { n.y = 0;  n.vy *= -1; }
      if (n.y > H)  { n.y = H;  n.vy *= -1; }
    });

    // Draw lines between close nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT_DIST) {
          ctx.save();
          ctx.globalAlpha = (1 - d / CONNECT_DIST) * 0.4;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth   = 0.7;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Draw nodes
    nodes.forEach(n => {
      ctx.save();
      ctx.globalAlpha = 0.75;
      ctx.fillStyle   = '#ffffff';
      ctx.shadowBlur  = 8;
      ctx.shadowColor = '#ffffff';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(loop);
  }
  loop();
}

/* ===== PARTICLES ===== */
function initParticles() {
  // Particle dots handled by initBackground node network
}

/* ===== 3D RUBIK'S CUBE ===== */
function initCube() {
  const canvas = document.getElementById('cube-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const S = 200;
  canvas.width = S; canvas.height = S;

  // ── Matrix helpers ──────────────────────────────────────────
  function mat4() { return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]; }
  function mulM(a, b) {
    const r = new Array(16).fill(0);
    for (let i=0;i<4;i++) for (let j=0;j<4;j++)
      for (let k=0;k<4;k++) r[i*4+j] += a[i*4+k]*b[k*4+j];
    return r;
  }
  function rotX(a) { const c=Math.cos(a),s=Math.sin(a); return [1,0,0,0, 0,c,-s,0, 0,s,c,0, 0,0,0,1]; }
  function rotY(a) { const c=Math.cos(a),s=Math.sin(a); return [c,0,s,0, 0,1,0,0, -s,0,c,0, 0,0,0,1]; }
  function rotZ(a) { const c=Math.cos(a),s=Math.sin(a); return [c,-s,0,0, s,c,0,0, 0,0,1,0, 0,0,0,1]; }
  function applyM(m, v) {
    return [
      m[0]*v[0]+m[1]*v[1]+m[2]*v[2]+m[3],
      m[4]*v[0]+m[5]*v[1]+m[6]*v[2]+m[7],
      m[8]*v[0]+m[9]*v[1]+m[10]*v[2]+m[11],
    ];
  }
  function project(v) {
    const fov = 5.5, z = v[2] + fov;
    return [v[0]/z * S*0.9 + S/2, v[1]/z * S*0.9 + S/2];
  }

  // ── Build 27 mini-cubes ──────────────────────────────────────
  const N = 3, HALF = 1.05;
  const spacing = HALF;
  const cubelets = [];
  for (let x=-1;x<=1;x++) for (let y=-1;y<=1;y++) for (let z=-1;z<=1;z++) {
    cubelets.push({
      // base position (grid index)
      gx: x, gy: y, gz: z,
      // current world matrix (starts as identity)
      mat: mat4(),
      // origin offset
      ox: x*spacing, oy: y*spacing, oz: z*spacing,
    });
  }

  // ── Face definitions per cubelet (6 faces, each 4 corners) ──
  const H = 0.48; // half-size of each mini-cube face
  const FACES_DEF = [
    { corners: [[-H,-H, H],[ H,-H, H],[ H, H, H],[-H, H, H]], nx:0,ny:0,nz:1  }, // front
    { corners: [[ H,-H,-H],[-H,-H,-H],[-H, H,-H],[ H, H,-H]], nx:0,ny:0,nz:-1 }, // back
    { corners: [[-H,-H,-H],[-H,-H, H],[-H, H, H],[-H, H,-H]], nx:-1,ny:0,nz:0 }, // left
    { corners: [[ H,-H, H],[ H,-H,-H],[ H, H,-H],[ H, H, H]], nx:1,ny:0,nz:0  }, // right
    { corners: [[-H,-H,-H],[ H,-H,-H],[ H,-H, H],[-H,-H, H]], nx:0,ny:-1,nz:0 }, // top
    { corners: [[-H, H, H],[ H, H, H],[ H, H,-H],[-H, H,-H]], nx:0,ny:1,nz:0  }, // bottom
  ];

  // ── Global rotation ──────────────────────────────────────────
  let globalRX = 0.5, globalRY = 0.8;

  // ── Layer twist system ───────────────────────────────────────
  // axis: 'x'|'y'|'z', layer: -1|0|1, angle, speed, done
  let twists = [];
  let twistTimer = 0;

  function scheduleTwist() {
    const axes = ['x','y','z'];
    const axis  = axes[Math.floor(Math.random()*3)];
    const layer = [-1,0,1][Math.floor(Math.random()*3)];
    const dir   = Math.random() > 0.5 ? 1 : -1;
    twists.push({ axis, layer, progress: 0, total: Math.PI/2, dir, speed: 0.04 });
  }

  function getTwistMatrix(axis, angle) {
    if (axis==='x') return rotX(angle);
    if (axis==='y') return rotY(angle);
    return rotZ(angle);
  }

  function cubeletInLayer(c, axis, layer) {
    const eps = 0.6;
    if (axis==='x') return Math.abs(c.ox - layer*spacing) < eps;
    if (axis==='y') return Math.abs(c.oy - layer*spacing) < eps;
    return Math.abs(c.oz - layer*spacing) < eps;
  }

  // ── Render ───────────────────────────────────────────────────
  function render() {
    ctx.clearRect(0, 0, S, S);

    const gMat = mulM(rotX(globalRX), rotY(globalRY));

    // Collect all visible faces with their avg Z for depth sort
    const allFaces = [];

    cubelets.forEach(c => {
      // combine cubelet local mat + global rotation
      const m = mulM(gMat, c.mat);

      FACES_DEF.forEach(fd => {
        // transform normal to check visibility
        const n = applyM(m, [fd.nx, fd.ny, fd.nz]);
        // simple back-face cull: if normal Z > 0 it faces camera
        if (n[2] < 0.05) return;

        const pts2d = fd.corners.map(corner => {
          const local = [corner[0]+c.ox, corner[1]+c.oy, corner[2]+c.oz];
          const world = applyM(m, local);
          return project(world);
        });

        // avg depth
        const avgZ = fd.corners.reduce((s, corner) => {
          const local = [corner[0]+c.ox, corner[1]+c.oy, corner[2]+c.oz];
          return s + applyM(m, local)[2];
        }, 0) / 4;

        // shading based on normal direction
        const shade = Math.max(0.15, n[2] * 0.7 + Math.abs(n[0]) * 0.2 + Math.abs(n[1]) * 0.15);

        allFaces.push({ pts2d, avgZ, shade });
      });
    });

    // depth sort
    allFaces.sort((a,b) => a.avgZ - b.avgZ);

    allFaces.forEach(f => {
      const v = Math.round(f.shade * 55);
      const sv = Math.round(f.shade * 130 + 30);
      ctx.beginPath();
      ctx.moveTo(f.pts2d[0][0], f.pts2d[0][1]);
      for (let i=1;i<f.pts2d.length;i++) ctx.lineTo(f.pts2d[i][0], f.pts2d[i][1]);
      ctx.closePath();
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${sv},${sv},${sv},0.85)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }

  // ── Main loop ────────────────────────────────────────────────
  function loop() {
    // global slow rotation
    globalRY += 0.012;
    globalRX += 0.004;

    // twist timer
    twistTimer++;
    if (twistTimer > 80 && twists.length < 2) {
      scheduleTwist();
      twistTimer = 0;
    }

    // process active twists
    twists = twists.filter(t => {
      const step = Math.min(t.speed, t.total - t.progress);
      const angle = step * t.dir;
      const tm = getTwistMatrix(t.axis, angle);

      cubelets.forEach(c => {
        if (!cubeletInLayer(c, t.axis, t.layer)) return;
        // rotate the cubelet's matrix
        c.mat = mulM(tm, c.mat);
        // also rotate its origin so it moves with the layer
        const newO = applyM(tm, [c.ox, c.oy, c.oz]);
        c.ox = newO[0]; c.oy = newO[1]; c.oz = newO[2];
      });

      t.progress += step;
      return t.progress < t.total - 0.001;
    });

    render();
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
  initBackground();
  initParticles();
  initCube();
  renderSkills(0);
  renderProjects('all');
  renderExperienceTab('experience');
  setTimeout(initReveal, 100);
});
