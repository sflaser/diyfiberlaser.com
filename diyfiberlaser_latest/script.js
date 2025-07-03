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

// 防止PDF文件列表干扰testimonial部分
document.addEventListener('DOMContentLoaded', function() {
    // 清理函数，移除可能的PDF列表元素
    function cleanUpTestimonialSection() {
        // 获取testimonial部分
        const testimonialSection = document.querySelector('.testimonials');
        if (!testimonialSection) return;
        
        // 确保testimonial部分有足够高的z-index
        testimonialSection.style.zIndex = '999';
        testimonialSection.style.position = 'relative';
        testimonialSection.style.backgroundColor = '#fff';
        
        // 获取testimonial卡片容器
        const testimonialWrapper = document.querySelector('.testimonial-wrapper');
        if (testimonialWrapper) {
            testimonialWrapper.style.zIndex = '1000';
        }
        
        // 移除不应该出现在testimonial部分的元素
        const unwantedElements = testimonialSection.querySelectorAll('a[href*=".pdf"], a:not([class]), ul:not([class]), ol:not([class]), table:not([class])');
        unwantedElements.forEach(el => {
            el.remove();
        });
    }
    
    // 页面加载时执行清理
    cleanUpTestimonialSection();
    
    // 每秒执行一次清理，持续5秒，确保页面完全加载后也能清理
    for (let i = 1; i <= 5; i++) {
        setTimeout(cleanUpTestimonialSection, i * 1000);
    }
    
    // MutationObserver监控DOM变化，自动清理
    const observer = new MutationObserver(function(mutations) {
        cleanUpTestimonialSection();
    });
    
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        observer.observe(testimonialSection, { 
            childList: true, 
            subtree: true 
        });
    }
}); 