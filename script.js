// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu when a link is clicked
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    }
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', function() {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Burger Animation
            this.classList.toggle('toggle');
        });
    }
});

// Video placeholder click to simulate playing video
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('This would play your video in a real implementation!');
        });
    }
});

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Service card click to redirect to specific service pages
document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.btn-service, .btn-service-highlight, .btn-service-highlight-secondary');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            if (serviceCard && serviceCard.id) {
                // In a real implementation, this would navigate to the service page
                alert(`You would be redirected to the ${serviceCard.querySelector('h3').innerText} page`);
            }
        });
    });
});

// Sticky navigation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-nav');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const headerHeight = header.offsetHeight;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        if (scrollPosition > heroBottom - headerHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}); 