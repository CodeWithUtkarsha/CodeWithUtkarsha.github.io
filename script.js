// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4N6GVVDH22');

// Event tracking
document.getElementById('resume-download').addEventListener('click', function() {
    gtag('event', 'download', {
        'event_category': 'resume',
        'event_label': 'PDF_Download'
    });
});

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'view_project', {
            'event_category': 'engagement',
            'event_label': this.getAttribute('data-project-name')
        });
    });
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
