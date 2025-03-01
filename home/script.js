// Thêm hàm tính thời gian yêu nhau
function calculateTimeDifference(startDate) {
    const now = new Date();
    const diff = now - startDate;

    // Tính toán năm
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    // Tính toán tháng
    let months = (now.getMonth() + 12 * now.getFullYear()) - (startDate.getMonth() + 12 * startDate.getFullYear());
    months = months % 12;

    // Tính toán ngày
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30.436875);
    
    // Tính toán giờ, phút, giây
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
}

function updateCounters() {
    // Bộ đếm thứ nhất - 18/10/2024
    const firstDate = new Date('2024-10-18T00:00:00');
    const firstCounter = calculateTimeDifference(firstDate);
    
    document.getElementById('years').textContent = firstCounter.years;
    document.getElementById('months').textContent = firstCounter.months;
    document.getElementById('days').textContent = firstCounter.days;
    document.getElementById('hours').textContent = firstCounter.hours;
    document.getElementById('minutes').textContent = firstCounter.minutes;
    document.getElementById('seconds').textContent = firstCounter.seconds;

    // Bộ đếm thứ hai - 5/10/2024
    const secondDate = new Date('2024-10-05T00:00:00');
    const secondCounter = calculateTimeDifference(secondDate);
    
    document.getElementById('years2').textContent = secondCounter.years;
    document.getElementById('months2').textContent = secondCounter.months;
    document.getElementById('days2').textContent = secondCounter.days;
    document.getElementById('hours2').textContent = secondCounter.hours;
    document.getElementById('minutes2').textContent = secondCounter.minutes;
    document.getElementById('seconds2').textContent = secondCounter.seconds;
}

// Thêm vào phần khởi tạo
document.addEventListener('DOMContentLoaded', function() {
    // Format ngày tháng
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    // Hiển thị theo định dạng DD.MM.YYYY
    document.getElementById('currentDate').textContent = `${day}.${month}.${year}`;

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Cập nhật ban đầu
    updateCounters();
    
    // Cập nhật mỗi giây
    setInterval(updateCounters, 1000);
});

// Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar active state
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Show love message
function showLoveMessage() {
    const messages = [
        'Anh yêu em nhiều lắm! ❤️',
        'Em là điều tuyệt vời nhất của anh ✨',
        'Cảm ơn em đã đến bên anh 🌹',
        'Mãi mãi bên em 💑',
        'Em là cả thế giới của anh 🌎'
    ];
    
    Swal.fire({
        title: 'Gửi em yêu!',
        text: messages[Math.floor(Math.random() * messages.length)],
        icon: 'success',
        confirmButtonText: 'Ghé thăm Facebook của anh ❤️',
        background: '#fff',
        confirmButtonColor: '#ff4b6c',
        showConfetti: true,
        customClass: {
            popup: 'love-popup',
            title: 'love-title',
            confirmButton: 'love-button'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://www.facebook.com/Bauuu1537', '_blank');
        }
    });
}

// Thêm vào đầu file
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js Config
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
});

// Typing effect configuration
const typingSpeed = 100;
const messages = [
    "Anh nhớ em nhiều lắm...",
    "Mỗi ngày không có em bên cạnh là một ngày buồn...",
    "Anh hứa sẽ thay đổi vì em..."
];

// Background colors for different moods
const backgroundColors = [
    'linear-gradient(45deg, #ff9a9e, #fad0c4)',
    'linear-gradient(45deg, #a8edea, #fed6e3)',
    'linear-gradient(45deg, #d299c2, #fef9d7)'
];

let currentMessageIndex = 0;
let currentCharIndex = 0;
let typingInterval;

// Show love message with animation
function showLove() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.classList.remove('hidden');
    loveMessage.classList.add('visible');
    
    // Change background color
    document.body.style.background = backgroundColors[1];
    
    // Add floating hearts
    createFloatingHearts();
}

// Forgiveness function with special effects
function forgive() {
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.classList.remove('hidden');
    finalMessage.classList.add('visible');
    
    // Change background color
    document.body.style.background = backgroundColors[2];
    
    // Start typing effect
    startTypingEffect();
}

// Create floating hearts animation
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.querySelector('.hero-section').appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}

// Typing effect implementation
function startTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    
    function type() {
        if (currentCharIndex < messages[currentMessageIndex].length) {
            typingText.textContent += messages[currentMessageIndex].charAt(currentCharIndex);
            currentCharIndex++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                currentCharIndex = 0;
                typingText.textContent = '';
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                typingInterval = setInterval(type, typingSpeed);
            }, 2000);
        }
    }
    
    typingInterval = setInterval(type, typingSpeed);
}

// Special message with confetti effect
function showSpecialMessage() {
    // Create confetti effect
    createConfetti();
    
    // Show sweet alert or custom modal
    alert('Em là tất cả những gì anh cần! Anh yêu em! ❤️');
}

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add some random movement to the heart
document.querySelector('.heart').addEventListener('mouseover', function() {
    this.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
});

// Initialize any necessary elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
});

// Thêm hiệu ứng cho tim
document.addEventListener('DOMContentLoaded', function() {
    const stamp = document.querySelector('.stamp');
    stamp.addEventListener('click', function() {
        this.style.transform = 'scale(1.5)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Thêm vào script.js
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý navbar khi cuộn
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Xử lý active state cho navbar links
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Xóa tất cả code liên quan đến music player
// Giữ lại các chức năng khác
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Các hàm khác vẫn giữ nguyên
function showLoveMessage() {
    const messages = [
        'Anh yêu em nhiều lắm! ❤️',
        'Em là điều tuyệt vời nhất của anh ✨',
        'Cảm ơn em đã đến bên anh 🌹',
        'Mãi mãi bên em 💑',
        'Em là cả thế giới của anh 🌎'
    ];
    
    Swal.fire({
        title: 'Gửi em yêu!',
        text: messages[Math.floor(Math.random() * messages.length)],
        icon: 'success',
        confirmButtonText: 'Ghé thăm Facebook của anh ❤️',
        background: '#fff',
        confirmButtonColor: '#ff4b6c',
        showConfetti: true,
        customClass: {
            popup: 'love-popup',
            title: 'love-title',
            confirmButton: 'love-button'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://www.facebook.com/Bauuu1537', '_blank');
        }
    });
}

// Giữ lại các chức năng cần thiết khác

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Start floating hearts
    createFloatingHearts();

    // Add parallax effect to hero section
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.querySelector('.hero-content').style.transform = 
            `translate(${moveX}px, ${moveY}px)`;
    });
});

// Thêm vào cuối file
document.addEventListener('DOMContentLoaded', function() {
    // Cấu hình Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': 'Ảnh %1 / %2',
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'positionFromTop': 50,
        'maxWidth': 1200,
        'maxHeight': 800,
        'disableScrolling': true,
        'showImageNumberLabel': true,
        'alwaysShowNavOnTouchDevices': true
    });

    // Thêm class cho overlay để styling
    lightbox.option({
        'overlayClass': 'lb-overlay'
    });
});
