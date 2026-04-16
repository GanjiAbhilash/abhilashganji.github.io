/* ==========================================================================
   ABHILASH GANJI — PORTFOLIO SCRIPTS
   ========================================================================== */

(function () {
    'use strict';

    // ======================== PROJECT DATA ========================
    // Restructured: Problem → Constraints → Architecture → Trade-offs → Impact
    const PROJECTS = [
        {
            category: 'genai',
            image: 'assets/projects/genai-iam.svg',
            alt: 'GenAI Multi-Cloud IAM Policy Builder',
            tag: 'GenAI / RAG',
            company: 'EPAM',
            title: 'GenAI Multi-Cloud IAM Policy Builder',
            problem: 'Security engineers manually authored IAM policies for AWS/GCP/Azure — error-prone, slow, and inconsistent across cloud providers.',
            constraints: 'Policies must be valid JSON with correct ARN formats. Zero tolerance for hallucinated permissions. Must support 3 cloud providers with <800ms latency.',
            arch: ['User Query', 'Hybrid Retrieval + Re-ranking', 'ChromaDB RAG', 'LLM Generation'],
            tradeoffs: 'RAG + GPT-3.5 over direct GPT-4: 10x cheaper, grounded in real policy templates, 70% fewer hallucinations. Hybrid retrieval + re-ranking achieves <800ms latency end-to-end.',
            tech: ['GPT-4', 'ChromaDB', 'LangChain', 'RAG', 'Python', 'FastAPI'],
            impact: '<800ms latency · 80% faster policy creation',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/genai-iam.svg',
            alt: 'Agentic Commerce System',
            tag: 'Agentic AI / LLM',
            company: 'EPAM',
            title: 'Agentic Commerce System',
            problem: 'Product discovery was limited to basic keyword search — users couldn\'t express complex purchase intent across 10K+ product lines, leading to poor conversion.',
            constraints: 'Must handle multi-turn conversations with context. 10K+ products across categories. Need sub-second latency for conversational UX. Must extract intent accurately from ambiguous queries.',
            arch: ['User Query', 'Intent Extraction', 'Embedding Retrieval', 'LLM Reasoning + Re-ranking'],
            tradeoffs: 'Multi-stage retrieval (embeddings → intent → LLM reasoning) over single-shot LLM: more pipeline complexity but dramatically better relevance. Re-ranking stage adds 200ms but lifts precision@5 by 35%.',
            tech: ['LLM', 'Embeddings', 'LangChain', 'FastAPI', 'Python', 'Redis'],
            impact: 'Adopted across 10K+ product lines',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/nlp-sentiment.svg',
            alt: 'LLM-Powered Reviews Intelligence Platform',
            tag: 'GenAI / NLP',
            company: 'EPAM',
            title: 'LLM-Powered Reviews Intelligence Platform',
            problem: 'Social review analysis across 25+ markets was manual and keyword-based — missed root causes, couldn\'t handle multilingual content, and provided no actionable insights to leadership.',
            constraints: 'Must handle multilingual reviews across 25+ markets. Real-time processing for immediate root-cause analysis. Must surface actionable insights, not just sentiment scores.',
            arch: ['Review Stream', 'LLM Analysis', 'FastAPI', 'Intelligence Dashboard'],
            tradeoffs: 'LLM-powered analysis over traditional NLP: higher cost per review but captures nuance, sarcasm, and root-cause patterns that keyword-based systems miss entirely. FastAPI for real-time serving.',
            tech: ['LLM', 'FastAPI', 'Python', 'Docker', 'Snowflake', 'Transformers'],
            impact: 'Real-time root-cause analysis · 25+ markets',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/genai-attrition.svg',
            alt: 'Fraud Detection System with LLM Explainability',
            tag: 'ML + GenAI',
            company: 'EPAM',
            title: 'Fraud Detection System with LLM Explainability',
            problem: 'Fraud rate at 8% with no explainability for flagged transactions — compliance team couldn\'t justify decisions, and manual review was bottlenecked.',
            constraints: 'Must explain every fraud flag in human-readable language. Real-time scoring with <500ms latency. Must reduce false positives to minimize customer friction.',
            arch: ['Transaction Data', 'Ensemble ML Pipeline', 'LLM Explainability', 'Streamlit Dashboard'],
            tradeoffs: 'Ensemble ML (XGBoost + rules) for detection + LLM for explanations — rather than end-to-end LLM. Detection needs deterministic speed; explanations can tolerate higher latency. Two-system approach is more complex but more reliable.',
            tech: ['XGBoost', 'LLM', 'Streamlit', 'Python', 'Docker', 'FastAPI'],
            impact: 'Fraud reduced from 8% → 1.2%',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'genai',
            image: 'assets/projects/genai-attrition.svg',
            alt: 'LLM-based Attrition Intelligence System',
            tag: 'GenAI / NLP',
            company: 'Amazon',
            title: 'LLM-based Attrition Intelligence System',
            problem: 'HR team had no early-warning system for employee attrition — learned about departures too late for intervention.',
            constraints: 'Sensitive PII data requiring strict access controls. Feedback text is informal and noisy. Model predictions must be explainable to HR managers.',
            arch: ['Employee Feedback', 'BERT Fine-tune', 'SageMaker', 'HR Dashboard'],
            tradeoffs: 'BERT fine-tuning over GPT: needed classification not generation. SHAP explanations over attention visualization: more trustworthy for non-technical HR stakeholders.',
            tech: ['BERT', 'PyTorch', 'Hugging Face', 'SageMaker', 'Python', 'Transformers'],
            impact: '12% reduction in employee churn',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'recsys',
            image: 'assets/projects/recsys-offers.svg',
            alt: 'Personalized Offer Recommendation Engine',
            tag: 'Recommender System',
            company: 'EPAM',
            title: 'Personalized Offer Recommendation Engine',
            problem: 'Restaurant loyalty program showed random offers to all users — low redemption rates, wasted marketing spend, poor user experience.',
            constraints: 'New offers every 1-2 weeks (constant cold-start). Multi-market with different catalogs. Must serve 110 QPS and A/B test every assignment cycle.',
            arch: ['User Events', 'Feature Store', 'LightFM + Re-ranking', 'Serving API'],
            tradeoffs: 'Hybrid LightFM over deep learning RecSys: feature-sum embeddings solve cold-start natively. Higher infra cost (feature store + per-market models + re-ranking) but +12% redemption lift justified it.',
            tech: ['LightFM', 'Snowflake', 'Python', 'MLflow', 'Docker', 'FastAPI'],
            impact: '12% increase in offer redemption · 110 QPS',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'forecasting',
            image: 'assets/projects/forecasting-platform.svg',
            alt: 'Bayesian Forecasting Platform',
            tag: 'Forecasting / Bayesian',
            company: 'EPAM',
            title: 'Bayesian Forecasting Platform',
            problem: 'Restaurant chain had no demand forecasting for limited-time offers (LTOs) — led to over-ordering, waste, and stockouts across 5+ countries. No way to model promotion effects or product cannibalization.',
            constraints: 'Each market has different seasonality, menu items, and consumer behavior. New LTOs have zero historical data. Must serve 25 QPS with uncertainty estimates.',
            arch: ['Snowflake', 'PyMC Bayesian', 'MLflow', 'Streamlit App'],
            tradeoffs: 'PyMC over Prophet: probabilistic modeling captures promotion & cannibalization effects that additive models miss. Per-market YAML configs over single global model — one-size-fits-all underperformed by 8%.',
            tech: ['PyMC', 'Bayesian Modeling', 'Streamlit', 'Snowflake', 'MLflow', 'Python'],
            impact: '23% accuracy improvement · 5+ countries · 25 QPS',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'bigdata',
            image: 'assets/projects/bigdata-pipeline.svg',
            alt: '10B+ Row Big Data Pipeline on AWS',
            tag: 'Big Data Engineering',
            company: 'Amazon',
            title: '10B+ Row Big Data Pipeline on AWS',
            problem: 'ML feature pipelines were bottlenecked by slow, unoptimized queries against raw data. Feature freshness lagged by 48+ hours.',
            constraints: '10B+ rows across multiple data sources. Must maintain sub-2-hour freshness for downstream ML models. Budget-constrained Glue job runtime.',
            arch: ['Raw Data', 'AWS Glue ETL', 'PySpark', 'Redshift'],
            tradeoffs: 'Chose PySpark + Glue over Airflow + EMR: managed infrastructure, lower ops burden. Traded some flexibility for 30% lower operational cost.',
            tech: ['PySpark', 'AWS Glue', 'Redshift', 'S3', 'SQL', 'Python'],
            impact: '10B+ rows processed · 30% query efficiency gain',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'forecasting',
            image: 'assets/projects/forecasting-workforce.svg',
            alt: 'Forecasting Automation System',
            tag: 'Forecasting / Automation',
            company: 'Amazon',
            title: 'Forecasting Automation System',
            problem: 'Operations managers spent 40+ hours/week manually planning associate headcount using spreadsheets. Forecasts were inconsistent across shifts and buildings.',
            constraints: 'Had to work with noisy Redshift data, support 15+ building codes, and deliver forecasts with <5% MAPE to earn trust from ops leads.',
            arch: ['Redshift Data', 'Prophet + BayesOpt', 'Lambda', 'QuickSight'],
            tradeoffs: 'Chose Prophet over LSTM for interpretability and additive seasonality decomposition that ops teams could actually understand and trust.',
            tech: ['Prophet', 'Bayesian Optimization', 'Python', 'Lambda', 'Redshift', 'QuickSight'],
            impact: '96% reduction in manual planning effort',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'cv',
            image: 'assets/projects/cv-damage.svg',
            alt: 'CNN Package Damage Detection System',
            tag: 'Computer Vision',
            company: 'Amazon',
            title: 'CNN Package Damage Detection System',
            problem: 'Manual visual inspection missed ~15% of damaged packages in fulfillment centers, leading to customer returns and brand damage.',
            constraints: 'Must run inference in <200ms per image on SageMaker endpoints. Training data was heavily imbalanced (95% undamaged). Camera angles varied across stations.',
            arch: ['Camera Feed', 'CNN Model', 'SageMaker', 'Alert System'],
            tradeoffs: 'Used CNN over YOLO: needed classification not detection. Augmentation + focal loss over SMOTE for class imbalance — preserved real distribution.',
            tech: ['CNN', 'TensorFlow', 'SageMaker', 'S3', 'Lambda', 'Python'],
            impact: '$418K annual savings · 20% accuracy improvement',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'anomaly',
            image: 'assets/projects/anomaly-detection.svg',
            alt: 'Real-Time Anomaly Detection Platform',
            tag: 'Anomaly Detection',
            company: 'Amazon',
            title: 'Real-Time Anomaly Detection Platform',
            problem: 'Business metrics monitoring generated 40+ false alerts/day. Real anomalies were buried in noise, causing alert fatigue.',
            constraints: 'Must process streaming data from Kinesis. Alert latency <5 seconds. Must handle seasonal patterns and business-hour drift.',
            arch: ['Kinesis Stream', 'Isolation Forest', 'Autoencoder', 'SNS Alerts'],
            tradeoffs: 'Hybrid ensemble: Isolation Forest pre-filters obvious outliers (fast), Autoencoder validates flagged points (accurate). Two models to maintain, but false positives dropped from 40+ to ~8/day.',
            tech: ['Isolation Forest', 'Autoencoders', 'PyTorch', 'Kinesis', 'Lambda', 'SNS'],
            impact: '30% better anomaly detection',
            github: 'https://github.com/GanjiAbhilash'
        },
        {
            category: 'cv',
            image: 'assets/projects/cv-resnet.svg',
            alt: 'ResNet Product Safety Compliance Automation',
            tag: 'Deep Learning / CV',
            company: 'Amazon',
            title: 'ResNet Product Safety Compliance Automation',
            problem: 'Manual safety compliance checks during truck loading were inconsistent — relied on visual inspection by associates working 10-hour shifts.',
            constraints: 'Variable lighting conditions across docks. Must integrate with existing camera infrastructure. Need >90% precision to avoid disrupting operations.',
            arch: ['Image Capture', 'ResNet Model', 'SageMaker', 'Compliance API'],
            tradeoffs: 'ResNet-50 over ResNet-152: 2x faster inference with only 1.5% accuracy drop. Pre-trained ImageNet weights + fine-tuning over training from scratch saved 3 weeks.',
            tech: ['ResNet', 'PyTorch', 'SageMaker', 'S3', 'Lambda', 'Python'],
            impact: '20% accuracy improvement',
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
            image: 'assets/projects/genai-iam.svg',
            alt: 'Agentic Commerce System',
            category: 'Agentic AI',
            date: 'Dec 2025',
            readTime: '18 min read',
            title: 'Agentic Commerce: Multi-Stage Retrieval for Conversational Product Discovery',
            desc: 'Designing multi-stage retrieval + ranking pipelines — embeddings, intent extraction, LLM reasoning, and re-ranking across 10K+ product lines.',
            href: 'research/agentic-commerce-system.html',
            featured: false
        },
        {
            image: 'assets/projects/genai-attrition.svg',
            alt: 'Fraud Detection with LLM Explainability',
            category: 'ML + GenAI',
            date: 'Nov 2025',
            readTime: '16 min read',
            title: 'Fraud Detection with LLM Explainability: From 8% to 1.2%',
            desc: 'Building an ensemble ML pipeline with LLM-powered explainability — reducing fraud from 8% to 1.2% with human-readable explanations in a Streamlit dashboard.',
            href: 'research/fraud-detection-llm-explainability.html',
            featured: false
        },
        {
            image: 'assets/projects/recsys-offers.svg',
            alt: 'Why My First Recommender System Failed in Production',
            category: 'Failure Story',
            date: 'Jan 2025',
            readTime: '15 min read',
            title: 'Why My First Recommender System Failed in Production',
            desc: 'What I assumed, what broke, and what I changed — real production scars from building a recommender system that looked great in notebooks but died on launch day.',
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
        },
        {
            image: 'assets/projects/genai-iam.svg',
            alt: 'Agentic AI Orchestration',
            category: 'Agentic AI',
            date: 'Mar 2025',
            readTime: '20 min read',
            title: 'Agentic AI: Multi-Agent Orchestration Patterns with LangGraph',
            desc: 'Designing autonomous agent workflows — tool-use routing, memory management, human-in-the-loop fallbacks, and production patterns for multi-agent orchestration.',
            href: 'research/agentic-ai-orchestration.html',
            featured: false
        },
        {
            image: 'assets/projects/blog-llm.svg',
            alt: 'LoRA vs Full Fine-Tuning',
            category: 'LLM Research',
            date: 'Feb 2025',
            readTime: '16 min read',
            title: 'LoRA vs Full Fine-Tuning: Parameter-Efficient LLM Adaptation',
            desc: 'Comparing LoRA, QLoRA, and full fine-tuning on domain-specific tasks — memory footprint, training speed, and when each approach wins.',
            href: 'research/lora-vs-full-finetuning.html',
            featured: false
        },
        {
            image: 'assets/projects/genai-iam.svg',
            alt: 'RAG Chunking Strategies',
            category: 'RAG / Retrieval',
            date: 'Jan 2025',
            readTime: '14 min read',
            title: 'RAG Chunking Strategies: Semantic vs Fixed-Size vs Recursive',
            desc: 'Evaluating chunk size, overlap, and splitting strategies on retrieval quality — embedding models, rerankers, and real-world accuracy on enterprise document search.',
            href: 'research/rag-chunking-strategies.html',
            featured: false
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
            + '<div class="project-section">'
            + '<span class="project-section-label"><i class="fas fa-exclamation-circle"></i> Problem</span>'
            + '<p class="project-desc">' + escapeAttr(p.problem) + '</p></div>'
            + '<div class="project-section">'
            + '<span class="project-section-label"><i class="fas fa-lock"></i> Constraints</span>'
            + '<p class="project-desc">' + escapeAttr(p.constraints) + '</p></div>'
            + '<div class="project-architecture">'
            + '<span class="arch-label"><i class="fas fa-project-diagram"></i> Architecture</span>'
            + '<div class="arch-flow">' + archFlow + '</div></div>'
            + '<div class="project-section">'
            + '<span class="project-section-label"><i class="fas fa-balance-scale"></i> Trade-offs</span>'
            + '<p class="project-desc">' + escapeAttr(p.tradeoffs) + '</p></div>'
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

    // ======================== RENDER SECTIONS ========================
    function renderProjects() {
        const grid = document.getElementById('projectsGrid');
        if (grid) grid.innerHTML = PROJECTS.map(renderProjectCard).join('');
    }

    function renderBlog() {
        const grid = document.getElementById('blogGrid');
        if (grid) grid.innerHTML = BLOG_POSTS.map(renderBlogCard).join('');
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
        'Applied & GenAI Engineer',
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

    // ======================== INTERACTIVE ML VISUALIZER ========================
    const PIPELINES = {
        recsys: {
            title: 'Recommender System Pipeline',
            nodes: [
                { id: 'data', label: 'User Events\n& Interactions', icon: 'fas fa-users', x: 5, y: 50,
                  title: 'User Interaction Data',
                  desc: 'Collects implicit feedback signals — offer redemptions, clicks, page views, and session data. Streamed from loyalty app into Snowflake. Key challenge: distinguishing "not interested" from "never saw it" — all missing interactions are ambiguous.',
                  tags: ['Snowflake', 'Event Streaming', 'Implicit Feedback'] },
                { id: 'features', label: 'Feature\nEngineering', icon: 'fas fa-cogs', x: 25, y: 50,
                  title: 'Feature Store & Engineering',
                  desc: 'User features: visit frequency, avg spend, preferred daypart, cuisine preferences. Item features: protein type, discount tier, menu category. Versioned per-market in Snowflake Feature Store. Incremental refresh to keep features fresh.',
                  tags: ['Feature Store', 'One-Hot Encoding', 'Per-Market'] },
                { id: 'model', label: 'LightFM\nHybrid Model', icon: 'fas fa-brain', x: 50, y: 30,
                  title: 'Hybrid LightFM Model',
                  desc: 'Score = sigmoid(q_u · p_i + b_u + b_i) where embeddings are the SUM of feature embeddings — not single ID vectors. This is the key insight: new items with features [BURGER, DISCOUNT_30] immediately get meaningful embeddings. Trained with WARP loss for top-K ranking.',
                  tags: ['WARP Loss', '128-dim', 'Cold-Start Aware'] },
                { id: 'coldstart', label: 'Cold-Start\nHandler', icon: 'fas fa-snowflake', x: 50, y: 70,
                  title: 'Cold-Start Strategy',
                  desc: 'New offers (zero interactions) get identity features set to the AVERAGE of interacted items\' features — prevents degenerate zero-vector representations. New users get baseline from behavioral features (visit patterns, spend). New markets start with popularity fallback.',
                  tags: ['Feature Averaging', 'Popularity Fallback'] },
                { id: 'predict', label: 'Top-K\nPrediction', icon: 'fas fa-sort-amount-down', x: 75, y: 50,
                  title: 'Prediction & Assignment',
                  desc: 'Scores all active offers per user, outputs Top-3 personalized recommendations. Users split into TEST (personalized) and CONTROL (random/popularity) groups for causal measurement. Written to assignment table in Snowflake. System serves 110 QPS with A/B framework.',
                  tags: ['Top-3 Ranking', 'A/B Split', '110 QPS'] },
                { id: 'serve', label: 'Streamlit\nDashboard', icon: 'fas fa-chart-bar', x: 95, y: 50,
                  title: 'Ops Dashboard & Serving',
                  desc: 'Streamlit app on Snowflake: upload offers, toggle flags, view redemption rates and test-vs-control performance. Non-technical ops team can manage the entire offer catalog without touching code. Result: +12% offer redemption lift over control group.',
                  tags: ['Streamlit', 'Altair Charts', 'Self-Serve'] }
            ],
            edges: [['data','features'],['features','model'],['features','coldstart'],['coldstart','model'],['model','predict'],['predict','serve']]
        },
        forecasting: {
            title: 'Bayesian Forecasting Pipeline',
            nodes: [
                { id: 'source', label: 'Historical\nData', icon: 'fas fa-database', x: 5, y: 50,
                  title: 'Historical Time Series Data',
                  desc: 'Weekly demand metrics, transaction volumes, and promotion signals from Snowflake. Data quality is critical — missing weeks, holiday effects, and market-specific patterns must all be handled before modeling. Includes promotion and cannibalization data.',
                  tags: ['Snowflake', 'Weekly Granularity', 'Multi-Market'] },
                { id: 'prep', label: 'Data Prep\n& Cleaning', icon: 'fas fa-broom', x: 25, y: 50,
                  title: 'Data Preparation',
                  desc: 'Handle missing values, detect and adjust for holidays/events, decompose seasonality. Per-market normalization since each country has fundamentally different demand patterns. Model promotion effects and product cannibalization as explicit features. Configurable training windows (6-12 months).',
                  tags: ['Holiday Detection', 'Promotions', 'Per-Market'] },
                { id: 'prophet', label: 'PyMC\nBayesian', icon: 'fas fa-chart-line', x: 50, y: 30,
                  title: 'PyMC Probabilistic Forecasting',
                  desc: 'PyMC for probabilistic Bayesian forecasting — models trend, seasonality, promotions, and cannibalization effects with uncertainty quantification. Posterior distributions give confidence intervals that business teams can act on. Per-market YAML configs for different features and priors.',
                  tags: ['PyMC', 'Bayesian', 'Uncertainty Quantification'] },
                { id: 'eval', label: 'Cross-Val\nEvaluation', icon: 'fas fa-check-double', x: 50, y: 70,
                  title: 'Time Series Cross-Validation',
                  desc: 'Walk-forward validation with expanding window — never leaking future data. Primary metric: MAPE < 5% threshold to earn ops trust. Per-country evaluation across 5+ markets. Models that fail validation get flagged automatically.',
                  tags: ['Walk-Forward CV', 'MAPE < 5%', '5+ Countries'] },
                { id: 'mlflow', label: 'MLflow\nTracking', icon: 'fas fa-flask', x: 75, y: 50,
                  title: 'Experiment Tracking & Registry',
                  desc: 'Every training run logged in MLflow: hyperparameters, metrics, artifacts. Model registry with staging/production stages. Auto-promote if validation passes, otherwise alert. System serves 25 QPS with full reproducibility.',
                  tags: ['MLflow', 'Model Registry', '25 QPS'] },
                { id: 'streamlit', label: 'Streamlit\nDashboard', icon: 'fas fa-tv', x: 95, y: 50,
                  title: 'Interactive Forecasting Dashboard',
                  desc: 'Ops team selects country, market, and date range → sees forecast with confidence intervals from Bayesian posteriors. Can overlay actual vs predicted and promotion impact. Self-serve without any data science involvement. Result: 23% accuracy improvement across 5+ countries.',
                  tags: ['Streamlit', 'Confidence Intervals', 'Self-Serve'] }
            ],
            edges: [['source','prep'],['prep','prophet'],['prep','eval'],['prophet','eval'],['prophet','mlflow'],['mlflow','streamlit']]
        },
        llm: {
            title: 'LLM / RAG Pipeline',
            nodes: [
                { id: 'query', label: 'User\nQuery', icon: 'fas fa-keyboard', x: 5, y: 50,
                  title: 'User Input Query',
                  desc: 'Security engineer describes the IAM policy they need in natural language: "Create an S3 read-only policy for the analytics team with IP restriction." The system must parse intent, identify cloud provider, and extract permission scope.',
                  tags: ['Natural Language', 'Intent Parsing', 'Multi-Cloud'] },
                { id: 'embed', label: 'Embedding\nModel', icon: 'fas fa-vector-square', x: 25, y: 30,
                  title: 'Query Embedding',
                  desc: 'Query is embedded using the same model used during indexing (sentence-transformers/all-MiniLM-L6-v2). Embedding consistency is critical — mismatched models destroy retrieval quality. ~384 dimensions, fast inference.',
                  tags: ['MiniLM', '384-dim', 'Bi-Encoder'] },
                { id: 'chromadb', label: 'ChromaDB\nHybrid Retrieval', icon: 'fas fa-search', x: 25, y: 70,
                  title: 'Hybrid Retrieval + Re-ranking',
                  desc: 'ChromaDB indexes 500+ real IAM policy templates across AWS, GCP, and Azure. Hybrid retrieval combines dense embeddings + keyword matching, then re-ranking refines relevance. Grounding in real templates reduces hallucinated permissions by ~70% compared to direct generation. Balanced for <800ms end-to-end latency.',
                  tags: ['ChromaDB', 'Hybrid Retrieval', 'Re-ranking'] },
                { id: 'prompt', label: 'Prompt\nAssembly', icon: 'fas fa-puzzle-piece', x: 50, y: 50,
                  title: 'RAG Prompt Construction',
                  desc: 'Retrieved templates + user query assembled into structured prompt. System prompt enforces JSON schema, valid ARN formats, and least-privilege principles. Few-shot examples from the retrieval set guide the output format.',
                  tags: ['Few-Shot', 'Schema Enforcement', 'Least Privilege'] },
                { id: 'llm', label: 'GPT-3.5\nGeneration', icon: 'fas fa-robot', x: 75, y: 50,
                  title: 'LLM Policy Generation',
                  desc: 'GPT-3.5-turbo (not GPT-4) with RAG context generates the IAM policy. 10x cheaper than GPT-4 and with good retrieval context, achieves comparable quality for structured JSON output. Temperature=0 for deterministic policy generation.',
                  tags: ['GPT-3.5', 'Temperature=0', 'Cost-Optimized'] },
                { id: 'validate', label: 'Policy\nValidation', icon: 'fas fa-shield-alt', x: 95, y: 50,
                  title: 'Output Validation & Guardrails',
                  desc: 'Generated policy is validated against JSON schema, checked for overly permissive wildcards (*), and verified that ARN formats match the target cloud provider. Failed validation triggers re-generation with error context. Result: <800ms end-to-end latency with 80% faster policy creation.',
                  tags: ['JSON Schema', '<800ms Latency', 'ARN Validation'] }
            ],
            edges: [['query','embed'],['embed','chromadb'],['query','chromadb'],['chromadb','prompt'],['prompt','llm'],['llm','validate']]
        },
        agenticCommerce: {
            title: 'Agentic Commerce Pipeline',
            nodes: [
                { id: 'query', label: 'User\nQuery', icon: 'fas fa-comment-dots', x: 5, y: 50,
                  title: 'Conversational User Query',
                  desc: 'Users describe complex purchase intent in natural language — "I need a waterproof jacket under $100 for hiking in cold weather." The system must handle multi-turn conversations, maintain context across turns, and disambiguate vague queries across 10K+ products.',
                  tags: ['Multi-Turn', 'Natural Language', '10K+ Products'] },
                { id: 'intent', label: 'Intent\nExtraction', icon: 'fas fa-crosshairs', x: 25, y: 30,
                  title: 'Intent & Entity Extraction',
                  desc: 'LLM extracts structured intent: category (outerwear), attributes (waterproof, cold-weather), constraints (price < $100, activity: hiking). Handles ambiguity — "something warm" maps to insulation features. Maintains conversation context for follow-up refinements.',
                  tags: ['LLM Extraction', 'Entity Resolution', 'Context Tracking'] },
                { id: 'embed', label: 'Embedding\nRetrieval', icon: 'fas fa-search', x: 25, y: 70,
                  title: 'Embedding-Based Product Retrieval',
                  desc: 'Product catalog embedded into vector space. Dense retrieval finds semantically similar products — "waterproof jacket" matches "rain shell" even without keyword overlap. Pre-filtered by extracted constraints (price, category) to reduce search space before embedding similarity.',
                  tags: ['Dense Retrieval', 'Pre-Filtering', 'Semantic Search'] },
                { id: 'reasoning', label: 'LLM\nReasoning', icon: 'fas fa-brain', x: 50, y: 50,
                  title: 'LLM Reasoning & Re-ranking',
                  desc: 'Retrieved candidates are re-ranked by LLM reasoning — evaluates fit against the full user intent, not just keyword/embedding similarity. Re-ranking adds ~200ms but lifts precision@5 by 35%. LLM generates explanations for why each product matches the intent.',
                  tags: ['Re-ranking', '+35% Precision@5', 'Explainable'] },
                { id: 'response', label: 'Response\nGeneration', icon: 'fas fa-reply', x: 75, y: 50,
                  title: 'Conversational Response',
                  desc: 'LLM generates a natural language response with top product recommendations, explanations, and follow-up questions. Maintains conversation state in Redis for multi-turn interactions. Sub-second end-to-end latency for conversational UX.',
                  tags: ['Redis State', 'Sub-Second Latency', 'Follow-Up'] },
                { id: 'serve', label: 'FastAPI\nServing', icon: 'fas fa-server', x: 95, y: 50,
                  title: 'API Serving Layer',
                  desc: 'FastAPI serves the agentic commerce system with async endpoints. Adopted across 10K+ product lines. Conversation history and user preferences cached in Redis for session continuity.',
                  tags: ['FastAPI', 'Async', '10K+ Products'] }
            ],
            edges: [['query','intent'],['query','embed'],['intent','reasoning'],['embed','reasoning'],['reasoning','response'],['response','serve']]
        },
        fraudDetection: {
            title: 'Fraud Detection + LLM Explainability Pipeline',
            nodes: [
                { id: 'data', label: 'Transaction\nData', icon: 'fas fa-credit-card', x: 5, y: 50,
                  title: 'Transaction Stream',
                  desc: 'Real-time transaction data including amount, merchant, location, device, time, and historical user patterns. Must process each transaction within <500ms for real-time blocking. Highly imbalanced — legitimate transactions vastly outnumber fraud.',
                  tags: ['Real-Time', '<500ms SLA', 'Imbalanced Data'] },
                { id: 'features', label: 'Feature\nEngineering', icon: 'fas fa-cogs', x: 25, y: 50,
                  title: 'Fraud Feature Engineering',
                  desc: 'Engineered features: velocity (transactions per hour), geolocation anomaly score, device fingerprint mismatch, amount deviation from user baseline, merchant risk score. Rolling window aggregations for behavioral drift detection.',
                  tags: ['Velocity Features', 'Geo-Anomaly', 'Rolling Windows'] },
                { id: 'ensemble', label: 'XGBoost\nEnsemble', icon: 'fas fa-project-diagram', x: 50, y: 30,
                  title: 'Ensemble ML Detection',
                  desc: 'XGBoost gradient boosting + rule-based filters for fraud scoring. Ensemble approach: XGBoost catches complex patterns, rules catch known fraud typologies. Threshold tuned for high recall (catch fraud) while keeping false positive rate manageable. Deterministic and fast — core detection in <100ms.',
                  tags: ['XGBoost', 'Rule Engine', '<100ms Scoring'] },
                { id: 'explain', label: 'LLM\nExplainability', icon: 'fas fa-comment-medical', x: 50, y: 70,
                  title: 'LLM-Powered Explanations',
                  desc: 'For flagged transactions, LLM generates human-readable explanations: "Flagged because: unusual $2,400 purchase at 3AM from a new device in a different country than last 50 transactions." Compliance team can justify every decision. Runs async — explanations can tolerate higher latency than detection.',
                  tags: ['Human-Readable', 'Compliance Ready', 'Async'] },
                { id: 'decision', label: 'Decision\nEngine', icon: 'fas fa-gavel', x: 75, y: 50,
                  title: 'Fraud Decision & Action',
                  desc: 'Combines ML score + rules to make block/allow/review decisions. High-confidence fraud is auto-blocked. Borderline cases routed to manual review queue with LLM explanation attached. Decision audit trail maintained for regulatory compliance.',
                  tags: ['Auto-Block', 'Review Queue', 'Audit Trail'] },
                { id: 'dashboard', label: 'Streamlit\nDashboard', icon: 'fas fa-chart-pie', x: 95, y: 50,
                  title: 'Fraud Analytics Dashboard',
                  desc: 'Streamlit dashboard for fraud ops: real-time fraud rate monitoring, explanation drill-down, false positive analysis, and model performance tracking. Result: fraud rate reduced from 8% to 1.2%. Manual review volume cut by 60%.',
                  tags: ['Streamlit', '8% → 1.2% Fraud', 'Real-Time'] }
            ],
            edges: [['data','features'],['features','ensemble'],['features','explain'],['ensemble','decision'],['explain','decision'],['decision','dashboard']]
        }
    };

    function renderVisualizerPipeline(pipelineKey) {
        const pipeline = PIPELINES[pipelineKey];
        const container = document.getElementById('vizPipeline');
        if (!container) return;

        // Build SVG for edges and node boxes
        let html = '<svg class="viz-edges" viewBox="0 0 100 100" preserveAspectRatio="none">';
        pipeline.edges.forEach(([from, to]) => {
            const fromNode = pipeline.nodes.find(n => n.id === from);
            const toNode = pipeline.nodes.find(n => n.id === to);
            if (fromNode && toNode) {
                html += '<line x1="' + (fromNode.x + 3) + '" y1="' + fromNode.y
                    + '" x2="' + (toNode.x - 3) + '" y2="' + toNode.y
                    + '" stroke="rgba(124,58,237,0.3)" stroke-width="0.3" />';
            }
        });
        html += '</svg>';

        pipeline.nodes.forEach(n => {
            html += '<button class="viz-node" data-id="' + n.id + '" style="left:' + n.x + '%;top:' + n.y + '%"'
                + ' data-title="' + escapeAttr(n.title) + '"'
                + ' data-desc="' + escapeAttr(n.desc) + '"'
                + ' data-tags="' + escapeAttr(n.tags.join(',')) + '">'
                + '<i class="' + n.icon + '"></i>'
                + '<span>' + escapeAttr(n.label) + '</span>'
                + '</button>';
        });

        container.innerHTML = html;

        // Attach click handlers
        container.querySelectorAll('.viz-node').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.viz-node').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('vizTooltipTitle').textContent = btn.dataset.title;
                document.getElementById('vizTooltipDesc').textContent = btn.dataset.desc;
                const tagsEl = document.getElementById('vizTooltipTags');
                tagsEl.innerHTML = btn.dataset.tags.split(',').map(t => '<span>' + escapeAttr(t) + '</span>').join('');
            });
        });
    }

    // Initialize visualizer
    renderVisualizerPipeline('recsys');

    // Tab switching
    document.querySelectorAll('.viz-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.viz-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderVisualizerPipeline(tab.dataset.pipeline);
            // Reset tooltip
            document.getElementById('vizTooltipTitle').textContent = 'Click a component';
            document.getElementById('vizTooltipDesc').textContent = 'Select any node in the pipeline above to see a detailed explanation of that component, its role, and key engineering decisions.';
            document.getElementById('vizTooltipTags').innerHTML = '';
        });
    });

    // ======================== IMPACT DASHBOARD COUNTERS ========================
    function initImpactCounters() {
        const impactCards = document.querySelectorAll('.impact-value[data-count]');
        impactCards.forEach(counter => {
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
    initImpactCounters();

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