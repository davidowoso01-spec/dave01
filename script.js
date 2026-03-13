// 1. Simple Typewriter Effect for the Hero Span
const typeWriter = () => {
    const textElement = document.querySelector('h1 span');
    const text = "Cyber Security Science";
    let index = 0;
    
    textElement.innerHTML = ""; // Clear existing text

    const type = () => {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    };
    type();
};

// 2. Navbar Color Change on Scroll
const handleNavbar = () => {
    const nav = document.querySelector('.navbar');
    window.scrollY > 50 ? 
        nav.style.background = "#050505" : 
        nav.style.background = "rgba(10, 11, 16, 0.95)";
};

// Initialize functions
window.addEventListener('scroll', handleNavbar);
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});
// Function to animate the stats numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-item h4');
    
    stats.forEach(stat => {
        const target = parseInt(stat.innerText.replace('+', ''));
        let count = 0;
        const speed = 2000 / target; // Adjust speed relative to the number

        const updateCount = () => {
            if (count < target) {
                count++;
                stat.innerText = count + (stat.innerText.includes('+') ? '+' : '');
                setTimeout(updateCount, speed);
            } else {
                stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
            }
        };
        updateCount();
    });
}

// Run stats animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // If we are on the faculty page, run the counter
    if(document.querySelector('.stats-container')) {
        animateStats();
    }
});
// Function to reveal cards on scroll
const revealCards = () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            // Add a slight delay for each card for a "staggered" look
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150); 
        }
    });
};

// Initial CSS for the cards to support the animation
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
});

// Listen for scroll events
window.addEventListener('scroll', revealCards);
// Run once on load in case user starts mid-page
document.addEventListener('DOMContentLoaded', revealCards);
const icons = document.querySelectorAll('.card-header i');
setInterval(() => {
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    randomIcon.style.textShadow = "0 0 10px #00d4ff";
    setTimeout(() => { randomIcon.style.textShadow = "none"; }, 500);
}, 3000);
// Search Functionality
const searchInput = document.getElementById('staffSearch');

if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        const tables = document.querySelectorAll('.styled-table');

        tables.forEach(table => {
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                // Show row if text matches, otherwise hide
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    });
}

// Visual feedback: Highlight rows on click
document.querySelectorAll('.styled-table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        row.style.borderLeft = "4px solid #00d4ff";
        setTimeout(() => row.style.borderLeft = "none", 2000);
    });
});
function checkOfficeStatus() {
    const hoursCard = document.querySelector('.info-card:last-child');
    if (!hoursCard) return;

    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday...
    const hour = now.getHours();
    
    const isWeekday = day >= 1 && day <= 5;
    const isWorkingHours = hour >= 8 && hour < 16;

    const statusBadge = document.createElement('div');
    statusBadge.className = 'status-badge';

    if (isWeekday && isWorkingHours) {
        statusBadge.innerHTML = '<i class="fas fa-circle"></i> SYSTEM ONLINE: OPEN';
        statusBadge.classList.add('status-open');
    } else {
        statusBadge.innerHTML = '<i class="fas fa-moon"></i> SYSTEM STANDBY: CLOSED';
        statusBadge.classList.add('status-closed');
    }

    hoursCard.appendChild(statusBadge);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkOfficeStatus();
});
const inquiryForm = document.getElementById('inquiry-form');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('.submit-btn');
        const originalText = btn.innerHTML;
        
        // Change button to "Processing" state
        btn.disabled = true;
        btn.innerHTML = 'ENCRYPTING & SENDING... <i class="fas fa-spinner fa-spin"></i>';
        btn.style.background = '#333';

        // Simulate a network delay
        setTimeout(() => {
            btn.innerHTML = 'MESSAGE SENT SECURELY <i class="fas fa-check"></i>';
            btn.style.background = '#2ea44f'; // Success Green
            
            // Reset form
            inquiryForm.reset();
            
            // Revert button after 3 seconds
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.background = 'var(--primary-color)';
            }, 3000);
        }, 2000);
    });
}
// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

// Target all elements with the 'animate' class
document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Optional: Typewriter effect for the About Hero subtext
const aboutSubtext = document.getElementById('typing-text');
if (aboutSubtext) {
    const text = aboutSubtext.innerText;
    aboutSubtext.innerText = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            aboutSubtext.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}
const menuBtn = document.getElementById('mobile-cta');
const navLinks = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
