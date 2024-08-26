const questions = [
        {
            question: "What is the highest-grossing Bollywood film of all time?",
            answers: [
                { text: "Dangal", correct: true },
                { text: "Bajrangi Bhaijaan", correct: false },
                { text: "Baahubali 2", correct: false },
                { text: "PK", correct: false }
            ]
        },
        {
            question: "Which Bollywood actor is known as the 'King of Bollywood'?",
            answers: [
                { text: "Aamir Khan", correct: false },
                { text: "Salman Khan", correct: false },
                { text: "Shah Rukh Khan", correct: true },
                { text: "Hrithik Roshan", correct: false }
            ]
        },
        {
            question: "Which film marked the debut of Deepika Padukone in Bollywood?",
            answers: [
                { text: "Om Shanti Om", correct: true },
                { text: "Chennai Express", correct: false },
                { text: "Cocktail", correct: false },
                { text: "Love Aaj Kal", correct: false }
            ]
        },
        {
            question: "Who is the director of the movie 'Lagaan'?",
            answers: [
                { text: "Rajkumar Hirani", correct: false },
                { text: "Ashutosh Gowariker", correct: true },
                { text: "Karan Johar", correct: false },
                { text: "Sanjay Leela Bhansali", correct: false }
            ]
        },
        {
            question: "Which actress is known for her role in the movie 'Queen'?",
            answers: [
                { text: "Priyanka Chopra", correct: false },
                { text: "Kangana Ranaut", correct: true },
                { text: "Alia Bhatt", correct: false },
                { text: "Kareena Kapoor", correct: false }
            ]
        },
        {
            question: "Which Bollywood movie features the famous song 'Chaiyya Chaiyya'?",
            answers: [
                { text: "Dil Se", correct: true },
                { text: "Kabhi Khushi Kabhie Gham", correct: false },
                { text: "Kal Ho Naa Ho", correct: false },
                { text: "Dilwale Dulhania Le Jayenge", correct: false }
            ]
        },
        {
            question: "In which year was the movie 'Sholay' released?",
            answers: [
                { text: "1973", correct: false },
                { text: "1975", correct: true },
                { text: "1977", correct: false },
                { text: "1980", correct: false }
            ]
        },
        {
            question: "Which actor played the character of Munna Bhai in 'Munna Bhai M.B.B.S.'?",
            answers: [
                { text: "Salman Khan", correct: false },
                { text: "Sanjay Dutt", correct: true },
                { text: "Aamir Khan", correct: false },
                { text: "Ajay Devgn", correct: false }
            ]
        },
        {
            question: "Which Bollywood movie is based on the life of Indian athlete Milkha Singh?",
            answers: [
                { text: "Paan Singh Tomar", correct: false },
                { text: "Mary Kom", correct: false },
                { text: "Bhaag Milkha Bhaag", correct: true },
                { text: "Dangal", correct: false }
            ]
        },
        {
            question: "Who directed the movie 'Gully Boy'?",
            answers: [
                { text: "Zoya Akhtar", correct: true },
                { text: "Anurag Kashyap", correct: false },
                { text: "Karan Johar", correct: false },
                { text: "Farhan Akhtar", correct: false }
            ]
        },
        {
            question: "Which Bollywood actor is known as 'Mr. Perfectionist'?",
            answers: [
                { text: "Salman Khan", correct: false },
                { text: "Aamir Khan", correct: true },
                { text: "Shah Rukh Khan", correct: false },
                { text: "Akshay Kumar", correct: false }
            ]
        },
        {
            question: "Which Bollywood film was the first to win a Filmfare Award for Best Film?",
            answers: [
                { text: "Mughal-e-Azam", correct: false },
                { text: "Mother India", correct: false },
                { text: "Do Bigha Zamin", correct: true },
                { text: "Awaara", correct: false }
            ]
        },
        {
            question: "Which Bollywood movie features the famous dialogue 'Mogambo Khush Hua'?",
            answers: [
                { text: "Sholay", correct: false },
                { text: "Mr. India", correct: true },
                { text: "Deewar", correct: false },
                { text: "Don", correct: false }
            ]
        },
        {
            question: "Which actress is known for the role of 'Nisha' in the movie 'Hum Aapke Hain Koun'?",
            answers: [
                { text: "Madhuri Dixit", correct: true },
                { text: "Juhi Chawla", correct: false },
                { text: "Kajol", correct: false },
                { text: "Raveena Tandon", correct: false }
            ]
        },
        {
            question: "Which movie won the first National Film Award for Best Feature Film?",
            answers: [
                { text: "Pather Panchali", correct: true },
                { text: "Mother India", correct: false },
                { text: "Do Bigha Zamin", correct: false },
                { text: "Mughal-e-Azam", correct: false }
            ]
        },
        {
            question: "Which Bollywood actor starred in the movie '3 Idiots'?",
            answers: [
                { text: "Ranbir Kapoor", correct: false },
                { text: "Aamir Khan", correct: true },
                { text: "Shah Rukh Khan", correct: false },
                { text: "Saif Ali Khan", correct: false }
            ]
        },
        {
            question: "Which director is known for the movie 'Kabhi Khushi Kabhie Gham'?",
            answers: [
                { text: "Karan Johar", correct: true },
                { text: "Yash Chopra", correct: false },
                { text: "Rajkumar Hirani", correct: false },
                { text: "Rohit Shetty", correct: false }
            ]
        },
        {
            question: "Which Bollywood movie is known for the song 'Bole Chudiyan'?",
            answers: [
                { text: "Dilwale Dulhania Le Jayenge", correct: false },
                { text: "Kabhi Khushi Kabhie Gham", correct: true },
                { text: "Kal Ho Naa Ho", correct: false },
                { text: "Mohabbatein", correct: false }
            ]
        },
        {
            question: "Which actor played the role of a wrestler in the movie 'Sultan'?",
            answers: [
                { text: "Shah Rukh Khan", correct: false },
                { text: "Salman Khan", correct: true },
                { text: "Aamir Khan", correct: false },
                { text: "Akshay Kumar", correct: false }
            ]
        },
        {
            question: "Which Bollywood movie is based on the life of a mathematics genius Anand Kumar?",
            answers: [
                { text: "Super 30", correct: true },
                { text: "Pad Man", correct: false },
                { text: "Mission Mangal", correct: false },
                { text: "Article 15", correct: false }
            ]
        }
    ];    
    // Add more questions as needed
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    scoreElement.innerText = `Score: ${score}`;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        nextButton.innerHTML = 'Restart';
        nextButton.classList.add('restart');
    }
}

nextButton.addEventListener('click', () => {
    if (nextButton.classList.contains('restart')) {
        startGame();
    } else {
        showQuestion();
    }
});

startGame();
