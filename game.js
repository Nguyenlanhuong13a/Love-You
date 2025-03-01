const questions = [
    {
        question: "「愛してる」はどういう意味ですか？",
        options: ["Anh yêu em", "Tạm biệt", "Chào buổi sáng", "Cảm ơn"],
        correctAnswer: "Anh yêu em",
        japaneseAnswer: "あいしてる"
    },
    {
        question: "「おはよう」はどういう意味ですか？",
        options: ["Chào buổi tối", "Chào buổi sáng", "Tạm biệt", "Xin chào"],
        correctAnswer: "Chào buổi sáng",
        japaneseAnswer: "おはよう"
    },
    {
        question: "「大好き」はどういう意味ですか？",
        options: ["Rất thích", "Tạm biệt", "Xin lỗi", "Cảm ơn"],
        correctAnswer: "Rất thích",
        japaneseAnswer: "だいすき"
    },
    {
        question: "「ごめんなさい」はどういう意味ですか？",
        options: ["Cảm ơn", "Tạm biệt", "Xin lỗi", "Chào buổi sáng"],
        correctAnswer: "Xin lỗi",
        japaneseAnswer: "ごめんなさい"
    },
    {
        question: "「さようなら」はどういう意味ですか？",
        options: ["Chào buổi sáng", "Tạm biệt", "Xin chào", "Cảm ơn"],
        correctAnswer: "Tạm biệt",
        japaneseAnswer: "さようなら"
    },
    {
        question: "「こんばんは」はどういう意味ですか？",
        options: ["Chào buổi sáng", "Chào buổi chiều", "Chào buổi tối", "Tạm biệt"],
        correctAnswer: "Chào buổi tối",
        japaneseAnswer: "こんばんは"
    },
    {
        question: "「ありがとう」はどういう意味ですか？",
        options: ["Xin lỗi", "Tạm biệt", "Xin chào", "Cảm ơn"],
        correctAnswer: "Cảm ơn",
        japaneseAnswer: "ありがとう"
    },
    {
        question: "「お元気ですか」はどういう意味ですか？",
        options: ["Bạn khỏe không?", "Tạm biệt", "Chúc ngủ ngon", "Hẹn gặp lại"],
        correctAnswer: "Bạn khỏe không?",
        japaneseAnswer: "おげんきですか"
    },
    {
        question: "「おやすみなさい」はどういう意味ですか？",
        options: ["Chào buổi sáng", "Chúc ngủ ngon", "Tạm biệt", "Hẹn gặp lại"],
        correctAnswer: "Chúc ngủ ngon",
        japaneseAnswer: "おやすみなさい"
    },
    {
        question: "「また会いましょう」はどういう意味ですか？",
        options: ["Tạm biệt", "Xin chào", "Hẹn gặp lại", "Chúc ngủ ngon"],
        correctAnswer: "Hẹn gặp lại",
        japaneseAnswer: "またあいましょう"
    },
    {
        question: "「お誕生日おめでとう」はどういう意味ですか？",
        options: ["Chúc mừng năm mới", "Chúc mừng sinh nhật", "Chúc mừng", "Tạm biệt"],
        correctAnswer: "Chúc mừng sinh nhật",
        japaneseAnswer: "おたんじょうびおめでとう"
    },
    {
        question: "「頑張って」はどういう意味ですか？",
        options: ["Tạm biệt", "Cố lên", "Xin lỗi", "Cảm ơn"],
        correctAnswer: "Cố lên",
        japaneseAnswer: "がんばって"
    }
];

class JapaneseQuizGame {
    constructor() {
        this.score = 0;
        this.currentQuestion = 0;
        this.questionText = document.querySelector('.question-text');
        this.optionsContainer = document.querySelector('.options-container');
        this.scoreDisplay = document.querySelector('.score');
        this.startButton = document.querySelector('.start-game');
        
        this.startButton.addEventListener('click', () => this.startGame());
    }

    startGame() {
        this.score = 0;
        this.currentQuestion = 0;
        this.scoreDisplay.textContent = this.score;
        this.showQuestion();
        this.startButton.textContent = 'つぎの質問 (Câu hỏi tiếp)';
    }

    showQuestion() {
        if (this.currentQuestion >= questions.length) {
            this.endGame();
            return;
        }

        const question = questions[this.currentQuestion];
        this.questionText.textContent = question.question;
        this.optionsContainer.innerHTML = '';

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.checkAnswer(option, button));
            this.optionsContainer.appendChild(button);
        });
    }

    checkAnswer(selectedAnswer, button) {
        const question = questions[this.currentQuestion];
        const isCorrect = selectedAnswer === question.correctAnswer;

        if (isCorrect) {
            this.score += 10;
            this.scoreDisplay.textContent = this.score;
            button.classList.add('correct');
            
            // Hiển thị thông báo với câu trả lời tiếng Nhật
            Swal.fire({
                title: '正解！(Đúng rồi!)',
                text: `Tiếng Nhật: ${question.japaneseAnswer}`,
                icon: 'success',
                confirmButtonText: 'つぎへ (Tiếp tục)',
                confirmButtonColor: '#ff4b6c'
            }).then(() => {
                this.currentQuestion++;
                this.showQuestion();
            });
        } else {
            button.classList.add('wrong');
            Swal.fire({
                title: '間違いました！(Sai rồi!)',
                text: `Đáp án đúng: ${question.correctAnswer}\nTiếng Nhật: ${question.japaneseAnswer}`,
                icon: 'error',
                confirmButtonText: 'もう一度 (Thử lại)',
                confirmButtonColor: '#ff4b6c'
            });
        }
    }

    endGame() {
        Swal.fire({
            title: 'おめでとう！(Chúc mừng!)',
            text: `Điểm của bạn: ${this.score}/${questions.length * 10}`,
            icon: 'success',
            confirmButtonText: 'もう一度プレイ (Chơi lại)',
            confirmButtonColor: '#ff4b6c'
        }).then(() => {
            this.startButton.textContent = 'はじめましょう！(Bắt đầu!)';
            this.questionText.textContent = '';
            this.optionsContainer.innerHTML = '';
        });
    }
}

// Khởi tạo game khi trang đã load
document.addEventListener('DOMContentLoaded', () => {
    new JapaneseQuizGame();
});
