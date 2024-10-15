// Conteúdo para Inglês e Português
const translations = {
    en: {
        headerSubtitle: "Full-Stack Developer & DevOps | Rust | Python | Cloud Solutions",
        aboutTitle: "About Me",
        aboutText: "I am a full-stack developer with over 5 years of experience, specializing in Rust, Python, and cloud-based solutions. Passionate about solving complex problems, developing scalable systems, and ensuring quality.",
        skillsTitle: "Skills",
        frontendSkill1: "JavaScript & TypeScript",
        frontendSkill2: "React & React Native",
        frontendSkill3: "Phaser & PixiJS",
        backendSkill1: "Python (Django, Flask)",
        backendSkill2: "Rust (Tauri, Juniper)",
        backendSkill3: "C/C++ (QT, GTKMM)",
        devopsSkill1: "AWS Cloud",
        devopsSkill2: "Docker & Kubernetes",
        devopsSkill3: "Jenkins, Terraform",
        devopsSkill4: "Linux (Debian, Ubuntu)",
        projectsTitle: "Projects",
        project1Title: "Task Scheduler Optimizer (Rust)",
        project1Description: "A backend system built with Rust to optimize task scheduling efficiently for distributed systems.",
        project2Title: "Data Analytics Microservice (Python)",
        project2Description: "A Python-based microservice architecture for high-performance data analytics and visualizations.",
        experienceTitle: "Professional Experience",
        experienceIGSTitle: "Full Stack Developer - IGS",
        experienceIGSPeriod: "Period:",
        experienceIGSLocation: "Location:",
        experienceIGSDescription: "Development, documentation, and maintenance of an operations control platform, an online server for casino games, and video-bingo using Godot, with backend in Python and Django. Responsible for creating, optimizing, reviewing code, troubleshooting, and documenting.",
        experienceFiverrTitle: "Freelancer Programmer - Fiverr",
        experienceFiverrPeriod: "Period:",
        experienceFiverrLocation: "Location:",
        experienceFiverrDescription: "Developed complete games, level design, and multiplayer functionality (both local and online) for clients.",
        experienceResultTitle: "Junior Game Developer - Result Soluções",
        experienceResultPeriod: "Period:",
        experienceResultLocation: "Location:",
        experienceResultDescription: "Developed remote games with a focus on interactive and educational game development.",
        footerContact: "Contact: aureliodosol@gmail.com | Phone: +55 18 99789-6156"
    },
    pt: {
        headerSubtitle: "Desenvolvedor Full-Stack & DevOps | Rust | Python | Soluções em Nuvem",
        aboutTitle: "Sobre Mim",
        aboutText: "Sou desenvolvedor full-stack com mais de 5 anos de experiência, especializado em Rust, Python e soluções baseadas em nuvem. Apaixonado por resolver problemas complexos, desenvolver sistemas escaláveis e garantir a qualidade.",
        skillsTitle: "Habilidades",
        frontendSkill1: "JavaScript & TypeScript",
        frontendSkill2: "React & React Native",
        frontendSkill3: "Phaser & PixiJS",
        backendSkill1: "Python (Django, Flask)",
        backendSkill2: "Rust (Tauri, Juniper)",
        backendSkill3: "C/C++ (QT, GTKMM)",
        devopsSkill1: "Nuvem AWS",
        devopsSkill2: "Docker & Kubernetes",
        devopsSkill3: "Jenkins, Terraform",
        devopsSkill4: "Linux (Debian, Ubuntu)",
        projectsTitle: "Projetos",
        project1Title: "Otimizador de Agendamento de Tarefas (Rust)",
        project1Description: "Um sistema backend construído com Rust para otimizar o agendamento de tarefas de maneira eficiente em sistemas distribuídos.",
        project2Title: "Microsserviço de Análise de Dados (Python)",
        project2Description: "Uma arquitetura de microsserviços baseada em Python para análises de dados de alto desempenho e visualizações.",
        experienceTitle: "Experiência Profissional",
        experienceIGSTitle: "Desenvolvedor Full Stack - IGS",
        experienceIGSPeriod: "Período:",
        experienceIGSLocation: "Local:",
        experienceIGSDescription: "Desenvolvimento, documentação e manutenção para plataforma de controle de operações e servidores online para jogos de cassino e vídeo-bingo em Godot, com backend em Python e Django. Responsável pela criação, otimização, revisão de código, resolução de bugs e documentação.",
        experienceFiverrTitle: "Programador Freelancer - Fiverr",
        experienceFiverrPeriod: "Período:",
        experienceFiverrLocation: "Local:",
        experienceFiverrDescription: "Desenvolvimento de jogos completos, detalhamento de level design e criação de funcionalidades multiplayer, tanto local quanto online, para terceiros.",
        experienceResultTitle: "Desenvolvedor de Jogos Junior - Result Soluções",
        experienceResultPeriod: "Período:",
        experienceResultLocation: "Local:",
        experienceResultDescription: "Desenvolvimento de jogos em ambiente remoto, com foco em soluções interativas e desenvolvimento de jogos educacionais e corporativos.",
        footerContact: "Contato: aureliodosol@gmail.com | Telefone: +55 18 99789-6156"
    }
};

// Alternância entre português e inglês
let currentLanguage = 'en'; // Define o idioma padrão como inglês

const elementsToTranslate = {
    headerSubtitle: document.getElementById('header-subtitle'),
    aboutTitle: document.getElementById('about-title'),
    aboutText: document.getElementById('about-text'),
    skillsTitle: document.getElementById('skills-title'),
    frontendSkill1: document.getElementById('frontend-skill-1'),
    frontendSkill2: document.getElementById('frontend-skill-2'),
    frontendSkill3: document.getElementById('frontend-skill-3'),
    backendSkill1: document.getElementById('backend-skill-1'),
    backendSkill2: document.getElementById('backend-skill-2'),
    backendSkill3: document.getElementById('backend-skill-3'),
    devopsSkill1: document.getElementById('devops-skill-1'),
    devopsSkill2: document.getElementById('devops-skill-2'),
    devopsSkill3: document.getElementById('devops-skill-3'),
    devopsSkill4: document.getElementById('devops-skill-4'),
    projectsTitle: document.getElementById('projects-title'),
    project1Title: document.getElementById('project-1-title'),
    project1Description: document.getElementById('project-1-description'),
    project2Title: document.getElementById('project-2-title'),
    project2Description: document.getElementById('project-2-description'),
    experienceTitle: document.getElementById('experience-title'),
    experienceIGSTitle: document.getElementById('experience-igs-title'),
    experienceIGSPeriod: document.getElementById('experience-igs-period'),
    experienceIGSLocation: document.getElementById('experience-igs-location'),
    experienceIGSDescription: document.getElementById('experience-igs-description'),
    experienceFiverrTitle: document.getElementById('experience-fiverr-title'),
    experienceFiverrPeriod: document.getElementById('experience-fiverr-period'),
    experienceFiverrLocation: document.getElementById('experience-fiverr-location'),
    experienceFiverrDescription: document.getElementById('experience-fiverr-description'),
    experienceResultTitle: document.getElementById('experience-result-title'),
    experienceResultPeriod: document.getElementById('experience-result-period'),
    experienceResultLocation: document.getElementById('experience-result-location'),
    experienceResultDescription: document.getElementById('experience-result-description'),
    footerContact: document.getElementById('footer-contact')
};


function switchLanguage() {
    // Alterna o idioma
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    const translation = translations[currentLanguage];

    // Atualiza os textos da página
    Object.keys(elementsToTranslate).forEach(key => {
        const element = elementsToTranslate[key];
        if (element) {
            element.textContent = translation[key];
        }
    });

    // Alternar a bandeira para o idioma de destino (inverso)
    const flagIcon = document.getElementById('flag-icon');
    if (currentLanguage === 'pt') {
        flagIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg'; // Exibir bandeira do Brasil
        flagIcon.alt = 'Português';
    } else {
        flagIcon.src = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'; // Exibir bandeira dos EUA
        flagIcon.alt = 'English';
    }
}

// Adicionar evento ao botão de alternância de idioma
document.getElementById('language-btn').addEventListener('click', switchLanguage);

// Inicializar ScrollReveal
ScrollReveal().reveal('#about, #skills, #projects, #experience', { delay: 200, distance: '50px', origin: 'bottom' });
