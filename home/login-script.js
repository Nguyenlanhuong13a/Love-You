function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.toLowerCase().trim();
    const password = document.getElementById('password').value;
    
    // Danh sách tên hợp lệ
    const validNames = [
        'nguyễn đức thịnh',
        'nguyen duc thinh',
        'thinh',
        'duc thinh',
        'đức thịnh',
        'duc thinh',
        'thịnh'
    ];

    // Kiểm tra tên
    const isValidName = validNames.includes(username.toLowerCase());
    
    // Kiểm tra mật khẩu
    const correctPassword = "18102024";
    const isValidPassword = password === correctPassword;
    
    // Xử lý các trường hợp
    if (!isValidName && !isValidPassword) {
        // Sai cả tên và mật khẩu
        Swal.fire({
            title: 'Đừng có mà láo!',
            text: 'Nhập tên thằng khác thì có cái loz vào được web! Mật khẩu cũng sai luôn! 😤',
            icon: 'error',
            confirmButtonText: 'Thử lại',
            confirmButtonColor: '#ff4b6c',
            background: '#fff',
            customClass: {
                popup: 'error-popup',
                title: 'error-title',
                confirmButton: 'error-button'
            }
        });
    } else if (!isValidName && isValidPassword) {
        // Sai tên nhưng đúng mật khẩu
        Swal.fire({
            title: 'Đừng có mà láo!',
            text: 'Mật khẩu đúng rồi đấy nhưng tên thằng loz nào vậy! 😤',
            icon: 'error',
            confirmButtonText: 'Thử lại',
            confirmButtonColor: '#ff4b6c',
            background: '#fff',
            customClass: {
                popup: 'error-popup',
                title: 'error-title',
                confirmButton: 'error-button'
            }
        });
    } else if (isValidName && !isValidPassword) {
        // Đúng tên nhưng sai mật khẩu
        Swal.fire({
            title: 'Sai mật khẩu rồi!',
            text: 'Ngày đặc biệt của chúng mình đó! 💕',
            icon: 'error',
            confirmButtonText: 'Thử lại',
            confirmButtonColor: '#ff4b6c',
            background: '#fff',
            customClass: {
                popup: 'error-popup',
                title: 'error-title',
                confirmButton: 'error-button'
            }
        });
    } else {
        // Đúng cả tên và mật khẩu
        Swal.fire({
            title: 'Đăng nhập thành công!',
            text: 'Chào mừng em yêu đã quay trở lại 💕',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#fff',
            customClass: {
                popup: 'success-popup',
                title: 'success-title'
            }
        }).then(() => {
            window.location.href = 'main.html';
        });
        return false;
    }
    
    shakeLoginBox();
    return false;
}

function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    const progress = document.querySelector('.loading-progress');
    const countdownElement = document.getElementById('countdown');
    
    popup.style.display = 'flex';
    
    // Reset progress bar width
    progress.style.width = '0%';
    
    // Đợi một chút để animation hiển thị đẹp hơn
    setTimeout(() => {
        // Set width to 100% để kích hoạt transition
        progress.style.width = '100%';
    }, 100);
    
    let timeLeft = 5;
    countdownElement.textContent = timeLeft;
    
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'main.html';
        }
    }, 1000);
}

function shakeLoginBox() {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.animation = 'shake 0.5s';
    setTimeout(() => {
        loginBox.style.animation = '';
    }, 500);
}

// Thêm animation cho login box
document.addEventListener('DOMContentLoaded', function() {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.opacity = '0';
    loginBox.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        loginBox.style.transition = 'all 0.5s ease';
        loginBox.style.opacity = '1';
        loginBox.style.transform = 'translateY(0)';
    }, 100);
});

// Thêm hiệu ứng rung mạnh hơn khi nhập sai tên
function shakeLoginBox() {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.animation = 'shake 0.5s';
    setTimeout(() => {
        loginBox.style.animation = '';
    }, 500);
}

// Thêm hiệu ứng rung mạnh hơn khi nhập sai tên
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(styleSheet);
