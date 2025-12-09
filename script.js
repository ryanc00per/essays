// Configuration - Update these with your information
const config = {
    username: 'ryanc00per',
    host: 'github',
    title: 'Essays by Ryan Cooper',
    subtitle: 'Notes and observations along the way',
    readme: [
        'The craft of building. Where science meets art to form fun.'
    ],
    links: {
        github: 'https://github.com/ryanc00per',
        linkedin: 'https://www.linkedin.com/in/ryanbcooper',
        x: 'https://x.com/RyanCooper',
        email: 'mailto:ryanc@microsoft.com'
    },
    essays: [
        // Add your essays here in the format:
        // { title: 'Essay Title', slug: 'essay-slug', date: '2025-01' }
        // Example:
        // { title: 'My First Essay', slug: 'first-essay', date: '2025-01' }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Update username and host throughout
    updateTextContent('.username', config.username);
    updateTextContent('.host', config.host);
    
    // Update title and subtitle
    const titleElement = document.querySelector('.title');
    const subtitleElement = document.querySelector('.subtitle');
    if (titleElement) titleElement.textContent = config.title;
    if (subtitleElement) subtitleElement.textContent = config.subtitle;
    
    // Load essays
    loadEssays();
    
    // Load README
    loadReadme();
    
    // Update links
    updateLinks();
});

function updateTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.textContent = text;
    });
}

function loadEssays() {
    const essayList = document.getElementById('essay-list');
    if (!essayList) return;
    
    if (config.essays.length === 0) {
        essayList.innerHTML = '<li style="color: #999; font-style: italic;">No essays yet. Add them in script.js</li>';
        return;
    }
    
    essayList.innerHTML = config.essays.map((essay, index) => {
        const number = String(index + 1).padStart(2, '0');
        return `<li>${number}. <a href="/essays/${essay.slug}">${essay.title}</a></li>`;
    }).join('');
}

function loadReadme() {
    const readmeContent = document.getElementById('readme-content');
    if (!readmeContent) return;
    
    readmeContent.innerHTML = config.readme.map(line => {
        // Convert URLs to clickable links
        const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s]*)/g;
        const linkedLine = line.replace(urlRegex, (url) => {
            let href = url;
            if (!url.startsWith('http')) {
                href = 'https://' + url;
            }
            return `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color: #00d4ff; text-decoration: underline;">${url}</a>`;
        });
        return `<div>${linkedLine}</div>`;
    }).join('');
}

function updateLinks() {
    // Update GitHub link
    const githubLink = document.querySelector('.links .link-item:nth-child(1) a');
    if (githubLink) githubLink.href = config.links.github;
    
    // Update LinkedIn link
    const linkedinLink = document.querySelector('.links .link-item:nth-child(2) a');
    if (linkedinLink) linkedinLink.href = config.links.linkedin;
    
    // Update X/Twitter link
    const xLink = document.querySelector('.links .link-item:nth-child(3) a');
    if (xLink) xLink.href = config.links.x;
    
    // Update email link
    const emailLink = document.querySelector('.links .link-item:nth-child(4) a');
    if (emailLink) emailLink.href = config.links.email;
}

