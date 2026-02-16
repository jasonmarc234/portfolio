// ========================================
// Typing Animation Effect
// ========================================
const roles = [
    'Data Analyst',
    'IT Professional', 
    'Web Developer',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeRole() {
    const typingText = document.querySelector('.typing-text');
    
    if (!typingText) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        // Backspace
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Faster backspace
    } else {
        // Type forward
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150; // Normal typing speed
    }
    
    // When word is complete
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } 
    // When word is deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Move to next role
        typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation after a short delay
setTimeout(() => {
    typeRole();
}, 1000);

// ========================================
// Mobile Menu Toggle
// ========================================
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========================================
// Dark Mode Toggle
// ========================================
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ========================================
// Smooth Scroll for Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return; // Skip empty anchors
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links li a');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ========================================
// Download CV Functionality
// ========================================
const downloadCVButtons = document.querySelectorAll('.info-box .btn-group .btn:first-child');

downloadCVButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary message
        const originalText = this.textContent;
        this.textContent = 'CV Download Started...';
        this.style.pointerEvents = 'none';
        
        // Simulate download (replace with actual CV file path)
        setTimeout(() => {
            // Create a dummy download link (replace 'your-cv.pdf' with actual file)
            const link = document.createElement('a');
            link.href = 'img&cv/JasonMarc_CV.pdf'; // Update this path
            link.download = 'Jason_Marc_Justiza_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.textContent = originalText;
            this.style.pointerEvents = 'auto';
        }, 500);
    });
});

// ========================================
// Contact Button Functionality
// ========================================
const contactButtons = document.querySelectorAll('.btn-group .btn:last-child:not([href])');

contactButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        
        if (contactSection) {
            const headerOffset = 100;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Social Media Links
// ========================================
const githubIcons = document.querySelectorAll('.fa-github');
const linkedinIcons = document.querySelectorAll('.fa-linkedin');

githubIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', function() {
        window.open('https://github.com/jasonmarc234', '_blank'); // Update with your GitHub
    });
    
    // If it's in a parent link, update the href
    const parentLink = icon.closest('a');
    if (parentLink) {
        parentLink.href = 'https://github.com/jasonmarc234'; // Update with your GitHub
        parentLink.target = '_blank';
    }
});

linkedinIcons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', function() {
        window.open('https://linkedin.com/in/jason-marc-justiza-53094b334/', '_blank'); // Update with your LinkedIn
    });
    
    // If it's in a parent link, update the href
    const parentLink = icon.closest('a');
    if (parentLink) {
        parentLink.href = 'https://linkedin.com/in/jason-marc-justiza-53094b334/'; // Update with your LinkedIn
        parentLink.target = '_blank';
    }
});

// ========================================
// Visit Github Button
// ========================================
const visitGithubBtn = document.querySelector('.visit-btn');

if (visitGithubBtn) {
    visitGithubBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://github.com/jasonmarc234', '_blank'); // Update with your GitHub
    });
}

// ========================================
// Project Buttons Functionality
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    const githubBtn = card.querySelector('.btn-group .btn');
    
    if (githubBtn) {
        githubBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual GitHub repo URLs
            const repoUrls = [
                'https://github.com/jasonmarc234/excel-data-cleaner',
                'https://github.com/jasonmarc234/simple-crm',
                'https://github.com/jasonmarc234/flames'
            ];
            
            if (repoUrls[index]) {
                window.open(repoUrls[index], '_blank');
            } else {
                alert('Repository coming soon!');
            }
        });
    }
});

// ========================================
// Header Scroll Effect
// ========================================
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow on scroll
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '';
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// Scroll Animation for Elements
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.grid-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========================================
// Add Hover Effects to Cards
// ========================================
document.querySelectorAll('.grid-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02) translateY(0)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translate(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(-10px) scale(1)';
    });
});

// ========================================
// Footer Links
// ========================================
const footerLinks = document.querySelectorAll('footer ul li a');

footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Create floating code background
    createCodeBackground();
});

// ========================================
// Create Floating IT-Themed Background
// ========================================
function createCodeBackground() {
    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-bg';
    document.body.appendChild(codeContainer);
    
    // IT and coding symbols
    const symbols = [
        '{ }', '</>', '< />', '[ ]', '( )', 
        'SELECT *', 'SQL', 'Python', 'JavaScript',
        'def', 'function', 'const', 'let',
        '=> { }', 'import', 'export', 'class',
        'Power BI', 'Tableau', 'Excel', 'Data',
        'SQL', 'MySQL', 'MongoDB', 'API',
        '0101', '1010', '1100', '0011',
        '<query>', '<data>', '<code>', '<dev>',
        '&&', '||', '==', '!=', '+=', 
        '#include', 'pandas', 'numpy', 'df',
        'SELECT', 'FROM', 'WHERE', 'JOIN'
    ];
    
    const colors = ['#009dff', '#ff00ff', '#666666', '#999999'];
    const sizes = ['14px', '16px', '18px', '20px', '24px'];
    
    // Create 30 floating symbols
    for (let i = 0; i < 30; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'code-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Random positioning
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.top = Math.random() * 100 + '%';
        symbol.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
        symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
        symbol.style.animationDelay = Math.random() * 5 + 's';
        symbol.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        codeContainer.appendChild(symbol);
    }
}

// ========================================
// Add CSS for active link state
// ========================================
const style = document.createElement('style');
style.textContent = `
    .nav-links li a.active-link {
        color: white;
    }
    .nav-links li a.active-link::before {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========================================
// Console Easter Egg
// ========================================
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #009dff;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #666;');
console.log('%cLooking for a data analyst? Let\'s connect! 🚀', 'font-size: 14px; color: #ff00ff;');
// ========================================
// Contact Card Modal/Popup
// ========================================
const contactCards = document.querySelectorAll('.contact-card');
const contactModal = document.getElementById('contactModal');
const contactModalClose = contactModal?.querySelector('.modal-close');
const contactModalOverlay = contactModal?.querySelector('.modal-overlay');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const copyBtn = document.getElementById('copyBtn');

let currentContactValue = '';

// Open modal when clicking contact card
contactCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Prevent default link behavior for linkedin/github
        const link = e.target.closest('a');
        if (link) {
            e.preventDefault();
        }
        
        const contactType = this.getAttribute('data-contact-type');
        const contactValue = this.getAttribute('data-contact-value');
        const contactIcon = this.getAttribute('data-contact-icon');
        
        currentContactValue = contactValue;
        
        // Set modal content
        modalIcon.innerHTML = `<i class="${contactIcon}"></i>`;
        modalTitle.textContent = this.querySelector('h3').textContent;
        modalText.textContent = contactValue;
        
        // Show modal
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeContactModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (contactModalClose) contactModalClose.addEventListener('click', closeContactModal);
if (contactModalOverlay) contactModalOverlay.addEventListener('click', closeContactModal);

// Copy to clipboard
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(currentContactValue).then(() => {
            // Show success feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            this.style.background = 'linear-gradient(to right, rgb(0, 200, 0), rgb(0, 255, 0))';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('Failed to copy to clipboard');
        });
    });
}

// ========================================
// Experience Card Modal
// ========================================
const experienceCards = document.querySelectorAll('.grid-card[data-modal-type="experience"]');
const experienceModal = document.getElementById('experienceModal');

experienceCards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.getAttribute('data-modal-title');
        const duration = this.getAttribute('data-modal-duration');
        const description = this.getAttribute('data-modal-description');
        const icon = this.getAttribute('data-modal-icon');
        
        document.getElementById('expModalIcon').innerHTML = `<i class="${icon}"></i>`;
        document.getElementById('expModalTitle').textContent = title;
        document.getElementById('expModalDuration').textContent = duration;
        
        // Convert bullet text to HTML list
        const bullets = description.split('•').filter(item => item.trim());
        const listHTML = '<ul>' + bullets.map(bullet => `<li>${bullet.trim()}</li>`).join('') + '</ul>';
        document.getElementById('expModalDescription').innerHTML = listHTML;
        
        experienceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close experience modal
const expModalClose = experienceModal?.querySelector('.modal-close');
const expModalOverlay = experienceModal?.querySelector('.modal-overlay');

function closeExperienceModal() {
    experienceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (expModalClose) expModalClose.addEventListener('click', closeExperienceModal);
if (expModalOverlay) expModalOverlay.addEventListener('click', closeExperienceModal);

// ========================================
// Project Card Modal
// ========================================
const projectCardsModal = document.querySelectorAll('.project-card[data-modal-type="project"]');
const projectModal = document.getElementById('projectModal');

projectCardsModal.forEach(card => {
    card.addEventListener('click', function(e) {
        // Only open modal if not clicking the GitHub button
        if (e.target.closest('.btn')) {
            return;
        }
        
        const title = this.getAttribute('data-modal-title');
        const description = this.getAttribute('data-modal-description');
        const link = this.getAttribute('data-modal-link');
        const demo = this.getAttribute('data-modal-demo');
        const image = this.getAttribute('data-modal-image');
        
        const modalImage = document.getElementById('projModalImage');
        const modalTitle = document.getElementById('projModalTitle');
        const modalDescription = document.getElementById('projModalDescription');
        const modalLink = document.getElementById('projModalLink');
        const modalDemo = document.getElementById('projModalDemo');
        
        if (modalImage) modalImage.src = image;
        if (modalTitle) modalTitle.textContent = title;
        if (modalDescription) modalDescription.textContent = description;
        if (modalLink) {
            modalLink.href = link;
        }
        
        // Show/hide Live Demo button based on whether demo link exists
        if (modalDemo) {
            if (demo) {
                modalDemo.href = demo;
                modalDemo.style.display = 'inline-flex';
            } else {
                modalDemo.style.display = 'none';
            }
        }
        
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close project modal
const projModalClose = projectModal?.querySelector('.modal-close');
const projModalOverlay = projectModal?.querySelector('.modal-overlay');

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (projModalClose) projModalClose.addEventListener('click', closeProjectModal);
if (projModalOverlay) projModalOverlay.addEventListener('click', closeProjectModal);

// Close all modals on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (contactModal && contactModal.classList.contains('active')) {
            closeContactModal();
        }
        if (experienceModal && experienceModal.classList.contains('active')) {
            closeExperienceModal();
        }
        if (projectModal && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    }
});

