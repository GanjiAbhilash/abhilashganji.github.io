/* ==========================================================================
   ABHILASH GANJI — PORTFOLIO SCRIPTS
   ========================================================================== */

(function () {
    'use strict';

    // ======================== PROJECT DATA ========================
    // Ordered by impact (highest first) for better visitor impression
    const PROJECTS = [
        {
            category: 'forecasting',
            image: 'assets/projects/forecasting-workforce.svg',
            alt: 'Prophet Workforce Forecasting Automation',
            tag: 'Forecasting / Automation',
            company: 'Amazon',
            title: 'Prophet Workforce Forecasting Automation',
            desc: 'Developed a <strong>Prophet time series forecasting</strong> model to predict weekly associate metrics with <strong>Bayesian Optimization</strong> hyperparameter tuning. Reduced manual workforce planning efforts by <strong>96%</strong>.',
            arch: ['Redshift Data', 'Prophet + BayesOpt', 'Lambda', 'QuickSight'],
            tech: ['Prophet', 'Bayesian Optimization', 'Python', 'Lambda', 'Redshift', 'QuickSight'],
            impact: '96% reduction in manual planning effort',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/genai-iam.svg',
            alt: 'GenAI Multi-Cloud IAM Policy Builder',
            tag: 'GenAI / RAG',
            company: 'EPAM',
            title: 'GenAI Multi-Cloud IAM Policy Builder',
            desc: 'Designed a multi-cloud IAM policy generator using <strong>GPT models + ChromaDB</strong> vector store with RAG architecture. Automates secure policy creation for <strong>AWS, GCP, and Azure</strong>, cutting policy creation time by <strong>80%</strong>.',
            arch: ['User Query', 'ChromaDB RAG', 'GPT Model', 'IAM Policy'],
            tech: ['GPT-4', 'ChromaDB', 'LangChain', 'RAG', 'Python', 'FastAPI'],
            impact: '80% reduction in policy creation time',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'cv',
            image: 'assets/projects/cv-damage.svg',
            alt: 'CNN Package Damage Detection System',
            tag: 'Computer Vision',
            company: 'Amazon',
            title: 'CNN Package Damage Detection System',
            desc: 'Devised a <strong>CNN deep learning model</strong> for automated package damage detection in Amazon fulfillment centers. Deployed on <strong>AWS SageMaker</strong> achieving 20% improvement in damage detection accuracy and <strong>$418K annual savings</strong>.',
            arch: ['Camera Feed', 'CNN Model', 'SageMaker', 'Alert System'],
            tech: ['CNN', 'TensorFlow', 'SageMaker', 'S3', 'Lambda', 'Python'],
            impact: '$418K annual savings · 20% accuracy improvement',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'anomaly',
            image: 'assets/projects/anomaly-detection.svg',
            alt: 'Real-Time Anomaly Detection System',
            tag: 'Anomaly Detection',
            company: 'Amazon',
            title: 'Real-Time Anomaly Detection System',
            desc: 'Implemented a multi-variate anomaly detection system using <strong>Isolation Forest and Autoencoders</strong> for real-time business metrics monitoring. Reduced false positives by <strong>20%</strong> and improved critical anomaly detection by <strong>30%</strong>.',
            arch: ['Kinesis Stream', 'Isolation Forest', 'Autoencoder', 'SNS Alerts'],
            tech: ['Isolation Forest', 'Autoencoders', 'PyTorch', 'Kinesis', 'Lambda', 'SNS'],
            impact: '20% fewer false positives · 30% better anomaly detection',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'bigdata',
            image: 'assets/projects/bigdata-pipeline.svg',
            alt: '10B+ Row Big Data Pipeline on AWS',
            tag: 'Big Data Engineering',
            company: 'Amazon',
            title: '10B+ Row Big Data Pipeline on AWS',
            desc: 'Built enterprise-scale data pipelines using <strong>PySpark & AWS Glue</strong> to onboard <strong>10 billion+ rows</strong> into Redshift data warehouse. Optimized query architecture improving efficiency by <strong>30%</strong> for downstream ML systems.',
            arch: ['Raw Data', 'AWS Glue ETL', 'PySpark', 'Redshift'],
            tech: ['PySpark', 'AWS Glue', 'Redshift', 'S3', 'SQL', 'Python'],
            impact: '10B+ rows processed · 30% query efficiency gain',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/nlp-sentiment.svg',
            alt: 'NLP Review Sentiment Analysis Engine',
            tag: 'NLP / Transformers',
            company: 'EPAM',
            title: 'NLP Review Sentiment Analysis Engine',
            desc: 'Deployed a <strong>Hugging Face transformer</strong> sentiment model for large-scale customer review analysis. Enhanced sentiment detection accuracy by <strong>25%</strong> with fine-tuned classification pipeline processing reviews in real-time.',
            arch: ['Review Stream', 'HF Transformer', 'Sentiment API', 'Analytics DB'],
            tech: ['Hugging Face', 'Transformers', 'Python', 'Docker', 'FastAPI', 'Snowflake'],
            impact: '25% improvement in sentiment detection',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'forecasting',
            image: 'assets/projects/forecasting-platform.svg',
            alt: 'Multi-Market AI Forecasting Platform',
            tag: 'Forecasting / Bayesian',
            company: 'EPAM',
            title: 'Multi-Market AI Forecasting Platform',
            desc: 'Built a <strong>Streamlit-based</strong> multi-market forecasting tool using <strong>Prophet & Bayesian Optimization</strong>. Serves predictions across 5+ markets and 10 limited-time offers (LTOs), improving forecast accuracy by <strong>23%</strong>.',
            arch: ['Snowflake', 'Prophet + BayesOpt', 'MLflow', 'Streamlit App'],
            tech: ['Prophet', 'Bayesian Optimization', 'Streamlit', 'Snowflake', 'MLflow', 'Python'],
            impact: '23% accuracy improvement across 5+ markets',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'cv',
            image: 'assets/projects/cv-resnet.svg',
            alt: 'ResNet Product Safety Compliance Automation',
            tag: 'Deep Learning / CV',
            company: 'Amazon',
            title: 'ResNet Product Safety Compliance Automation',
            desc: 'Designed a custom <strong>ResNet deep learning model</strong> for automating product safety compliance checks during truck loading operations. Reduced manual annotation by <strong>18%</strong> and improved compliance rates by <strong>10%</strong>.',
            arch: ['Image Capture', 'ResNet Model', 'SageMaker', 'Compliance API'],
            tech: ['ResNet', 'PyTorch', 'SageMaker', 'S3', 'Lambda', 'Python'],
            impact: '18% less manual annotation · 10% compliance improvement',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'recsys',
            image: 'assets/projects/recsys-offers.svg',
            alt: 'Personalized Offer Recommendation Engine',
            tag: 'Recommender System',
            company: 'EPAM',
            title: 'Personalized Offer Recommendation Engine',
            desc: 'Architected a <strong>LightFM matrix factorization</strong> pipeline for personalized offer recommendations for restaurant customers. Deployed at production scale with <strong>Snowflake integration</strong>, boosting customer engagement by <strong>12%</strong>.',
            arch: ['User Events', 'Snowflake', 'LightFM Model', 'Serving API'],
            tech: ['LightFM', 'Snowflake', 'Python', 'MLflow', 'Docker', 'FastAPI'],
            impact: '12% boost in customer engagement',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/genai-attrition.svg',
            alt: 'Employee Attrition Prediction via GenAI',
            tag: 'GenAI / NLP',
            company: 'Amazon',
            title: 'Employee Attrition Prediction via GenAI',
            desc: 'Fine-tuned transformer-based <strong>BERT LLM</strong> for sentiment analysis on employee feedback data. Built end-to-end pipeline from text ingestion to real-time inference, enabling proactive HR interventions that <strong>reduced churn by 12%</strong>.',
            arch: ['Employee Feedback', 'BERT Fine-tune', 'SageMaker', 'HR Dashboard'],
            tech: ['BERT', 'PyTorch', 'Hugging Face', 'SageMaker', 'Python', 'Transformers'],
            impact: '12% reduction in employee churn',
            github: 'https://github.com/GanjiAbhilash'
        }
    ];

    // ======================== BLOG DATA ========================
    // Links point to actual existing blog pages only
    const BLOG_POSTS = [
        {
            image: 'assets/projects/blog-llm.svg',
            alt: 'LLM Architecture Deep Dive',
            category: 'GenAI',
            date: 'Feb 2025',
            readTime: '18 min read',
            title: 'LLM Architecture Deep Dive: From Attention to Production',
            desc: 'A comprehensive walkthrough of large language model internals — attention mechanisms, tokenization, scaling laws, and how to take LLMs from research to production serving.',
            href: 'blog/llm-architecture.html',
            featured: true
        },
        {
            image: 'assets/projects/recsys-offers.svg',
            alt: 'Recommendation Systems in Production',
            category: 'RecSys',
            date: 'Jan 2025',
            readTime: '15 min read',
            title: 'Recommendation Systems: From Matrix Factorization to Deep Learning',
            desc: 'How modern recommender systems work — collaborative filtering, content-based approaches, hybrid architectures, and lessons from deploying at restaurant scale.',
            href: 'blog/recommendation-systems.html',
            featured: false
        },
        {
            image: 'assets/projects/forecasting-platform.svg',
            alt: 'Forecasting Models That Actually Work',
            category: 'Forecasting',
            date: 'Dec 2024',
            readTime: '14 min read',
            title: 'Forecasting Models That Actually Work in Production',
            desc: 'Prophet, ARIMA, and Bayesian methods compared — which forecasting approach wins in real-world scenarios and how to avoid common pitfalls.',
            href: 'blog/forecasting-models.html',
            featured: false
        },
        {
            image: 'assets/projects/genai-iam.svg',
            alt: 'ML System Design Principles',
            category: 'System Design',
            date: 'Nov 2024',
            readTime: '16 min read',
            title: 'ML System Design: Building AI That Survives Production',
            desc: 'End-to-end ML system design patterns — from data pipelines and feature stores to model serving, monitoring, and the operational realities of ML at scale.',
            href: 'blog/ml-system-design.html',
            featured: false
        }
    ];

    // ======================== RESEARCH DATA ========================
    // Topics here are distinct from the blog section — no overlap
    const RESEARCH = [
        {
            icon: 'fas fa-network-wired',
            type: 'Applied Research',
            title: 'Agentic AI: Multi-Agent Orchestration Patterns with LangGraph',
            desc: 'Designing autonomous agent workflows — tool-use routing, memory management, human-in-the-loop fallbacks, and production patterns for multi-agent orchestration at EPAM',
            year: '2025',
            tag: 'Agentic AI',
            href: 'research/agentic-ai-orchestration.html'
        },
        {
            icon: 'fas fa-flask',
            type: 'Experiment',
            title: 'Isolation Forest vs Autoencoders: A Comparative Study in Anomaly Detection',
            desc: 'Benchmarking traditional and deep learning anomaly detection approaches on production business metrics — when to use what and hybrid ensemble strategies',
            year: '2023',
            tag: 'Anomaly Detection',
            href: 'research/anomaly-detection-comparison.html'
        },
        {
            icon: 'fas fa-file-alt',
            type: 'Case Study',
            title: 'CNN vs ResNet for Industrial Visual Inspection at Amazon',
            desc: 'Comparative analysis of CNN architectures for package damage detection and safety compliance — accuracy, latency trade-offs, and $418K cost impact analysis',
            year: '2023',
            tag: 'Computer Vision',
            href: 'research/cnn-vs-resnet-inspection.html'
        },
        {
            icon: 'fas fa-flask',
            type: 'Experiment',
            title: 'LoRA vs Full Fine-Tuning: Parameter-Efficient LLM Adaptation',
            desc: 'Comparing LoRA, QLoRA, and full fine-tuning on domain-specific tasks — memory footprint, training speed, downstream accuracy, and when each approach wins',
            year: '2025',
            tag: 'LLM Fine-Tuning',
            href: 'research/lora-vs-full-finetuning.html'
        },
        {
            icon: 'fas fa-file-alt',
            type: 'Case Study',
            title: 'Processing 10B+ Rows: PySpark + AWS Glue Architecture Patterns',
            desc: 'Scalable big data engineering patterns for ML feature pipelines — partitioning strategies, Glue job optimization, and Redshift query performance tuning',
            year: '2022',
            tag: 'Big Data / AWS',
            href: 'research/pyspark-glue-architecture.html'
        },
        {
            icon: 'fas fa-flask',
            type: 'Experiment',
            title: 'RAG Chunking Strategies: Semantic vs Fixed-Size vs Recursive Splitting',
            desc: 'Evaluating chunk size, overlap, and splitting strategies on retrieval quality — embedding models, rerankers, and real-world accuracy on enterprise document search',
            year: '2025',
            tag: 'RAG / Retrieval',
            href: 'research/rag-chunking-strategies.html'
        }
    ];

    // ======================== RENDER HELPERS ========================
    function escapeAttr(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function renderProjectCard(p) {
        const archFlow = p.arch
            .map(s => '<span>' + escapeAttr(s) + '</span>')
            .join('<i class="fas fa-arrow-right"></i>');
        const techTags = p.tech.map(t => '<span>' + escapeAttr(t) + '</span>').join('');

        return '<article class="project-card reveal-up" data-category="' + escapeAttr(p.category) + '">'
            + '<div class="project-image">'
            + '<img src="' + escapeAttr(p.image) + '" alt="' + escapeAttr(p.alt) + '" loading="lazy">'
            + '<div class="project-overlay">'
            + '<a href="' + escapeAttr(p.github) + '" class="project-overlay-btn" target="_blank" rel="noopener">'
            + '<i class="fab fa-github"></i></a></div>'
            + '<span class="project-tag">' + escapeAttr(p.tag) + '</span>'
            + '<span class="project-company">' + escapeAttr(p.company) + '</span>'
            + '</div>'
            + '<div class="project-body">'
            + '<h3 class="project-title">' + escapeAttr(p.title) + '</h3>'
            + '<p class="project-desc">' + p.desc + '</p>'
            + '<div class="project-architecture">'
            + '<span class="arch-label"><i class="fas fa-project-diagram"></i> Architecture</span>'
            + '<div class="arch-flow">' + archFlow + '</div></div>'
            + '<div class="project-tech">' + techTags + '</div>'
            + '<div class="project-impact"><i class="fas fa-chart-line"></i> ' + escapeAttr(p.impact) + '</div>'
            + '<div class="project-links">'
            + '<a href="' + escapeAttr(p.github) + '" target="_blank" rel="noopener">'
            + '<i class="fab fa-github"></i> Source Code</a></div>'
            + '</div></article>';
    }

    function renderBlogCard(b) {
        return '<article class="blog-card' + (b.featured ? ' blog-featured' : '') + ' reveal-up">'
            + '<div class="blog-image">'
            + '<img src="' + escapeAttr(b.image) + '" alt="' + escapeAttr(b.alt) + '" loading="lazy">'
            + '<span class="blog-category">' + escapeAttr(b.category) + '</span></div>'
            + '<div class="blog-body">'
            + '<div class="blog-meta">'
            + '<span><i class="fas fa-calendar"></i> ' + escapeAttr(b.date) + '</span>'
            + '<span><i class="fas fa-clock"></i> ' + escapeAttr(b.readTime) + '</span></div>'
            + '<h3>' + escapeAttr(b.title) + '</h3>'
            + '<p>' + escapeAttr(b.desc) + '</p>'
            + '<a href="' + escapeAttr(b.href) + '" class="blog-read-more">'
            + 'Read Article <i class="fas fa-arrow-right"></i></a>'
            + '</div></article>';
    }

    function renderResearchCard(r) {
        return '<article class="research-card reveal-up">'
            + '<div class="research-type"><i class="' + escapeAttr(r.icon) + '"></i>'
            + '<span>' + escapeAttr(r.type) + '</span></div>'
            + '<h3>' + escapeAttr(r.title) + '</h3>'
            + '<p>' + escapeAttr(r.desc) + '</p>'
            + '<div class="research-meta">'
            + '<span><i class="fas fa-calendar"></i> ' + escapeAttr(r.year) + '</span>'
            + '<span><i class="fas fa-tag"></i> ' + escapeAttr(r.tag) + '</span></div>'
            + '<a href="' + escapeAttr(r.href) + '" class="research-link">Read More <i class="fas fa-arrow-right"></i></a>'
            + '</article>';
    }

    // ======================== RENDER SECTIONS ========================
    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (grid) grid.innerHTML = PROJECTS.map(renderProjectCard).join('');
    }

    function renderBlog() {
        const grid = document.getElementById('blogGrid');
        if (grid) grid.innerHTML = BLOG_POSTS.map(renderBlogCard).join('');
    }

    function renderResearch() {
        const grid = document.getElementById('researchGrid');
        if (grid) grid.innerHTML = RESEARCH.map(renderResearchCard).join('');
    }

    // ======================== LOADER ========================
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
            initCounters();
        }, 800);
    });
    document.body.style.overflow = 'hidden';

    // Render data-driven sections immediately
    renderProjects();
    renderBlog();
    renderResearch();

    // ======================== CURSOR GLOW ========================
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;
            cursorGlow.style.left = currentX + 'px';
            cursorGlow.style.top = currentY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
    }

    // ======================== NAVIGATION ========================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('[data-nav]');

    // Scroll: header background + active nav link
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        header.classList.toggle('scrolled', currentScroll > 50);

        const scrollY = currentScroll + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ======================== TYPING ANIMATION ========================
    const typingElement = document.getElementById('typingText');
    const roles = [
        'Data & Applied Scientist',
        'AI Engineer',
        'ML Systems Architect',
        'Agentic AI Builder',
        'Generative AI Engineer',
        'Ex-Amazon Engineer'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 300;
        }

        setTimeout(typeRole, typeSpeed);
    }
    setTimeout(typeRole, 1200);

    // ======================== COUNTER ANIMATION ========================
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            function updateCounter() {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.disconnect();
                }
            }, { threshold: 0.5 });
            observer.observe(counter);
        });
    }

    // ======================== SCROLL REVEAL ========================
    function initRevealObservers() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        revealElements.forEach(el => revealObserver.observe(el));
    }
    initRevealObservers();

    // ======================== SKILL BARS ANIMATION ========================
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ======================== PROJECT FILTERING ========================
    function initProjectFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
    initProjectFiltering();

    // ======================== CONTACT FORM ========================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            const mailtoLink = `mailto:mailabhilashganji@gmail.com?subject=${encodeURIComponent(
                subject + ' - from ' + name
            )}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            )}`;

            window.location.href = mailtoLink;

            const btn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> <span>Opening Email Client...</span>';
            btn.style.background = 'var(--success)';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // ======================== NEWSLETTER FORM ========================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = '✓ Subscribed!';
            btn.style.background = 'var(--success)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                newsletterForm.reset();
            }, 3000);
        });
    }

    // ======================== SMOOTH SCROLL ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================== HERO PARTICLES ========================
    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer && window.innerWidth > 768) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: rgba(124, 58, 237, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 6 + 4}s ease-in-out infinite alternate;
                animation-delay: ${Math.random() * 3}s;
            `;
            particlesContainer.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0); opacity: 0.3; }
                100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}30px, -40px); opacity: 0.8; }
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // ======================== CONSOLE EASTER EGG ========================
    console.log(
        '%c👋 Hey there! Looking at the code?',
        'color: #7c3aed; font-size: 16px; font-weight: bold;'
    );
    console.log(
        '%cI\'m Abhilash Ganji — let\'s build something amazing together.\n📧 mailabhilashganji@gmail.com',
        'color: #a78bfa; font-size: 12px;'
    );

})();