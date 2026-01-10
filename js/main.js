// Email copy to clipboard functionality
function copyEmail() {
    const email = 'yp2693@nyu.edu';

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            showCopyFeedback();
        }).catch(() => {
            fallbackCopyEmail(email);
        });
    } else {
        fallbackCopyEmail(email);
    }
}

function fallbackCopyEmail(email) {
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Failed to copy email:', err);
    }

    document.body.removeChild(textArea);
}

function showCopyFeedback() {
    const btn = document.querySelector('.copy-btn');
    const originalTitle = btn.getAttribute('title');

    btn.setAttribute('title', 'Copied!');
    btn.style.color = '#4caf50';

    setTimeout(() => {
        btn.setAttribute('title', originalTitle);
        btn.style.color = '';
    }, 2000);
}

// Add target="_blank" and rel="noopener" to external links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="http"]');

    links.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
