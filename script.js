const questions = [
    {
      "question": "Which CSS property is used to change the text color?",
      "options": ["font-color", "text-color", "color", "background-color"],
      "answer": 2
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "C++", "JavaScript", "Ruby"],
      answer: 2
    },
    {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"],
        "answer": 2
      },
      {
        "question": "Which HTML tag is used to define a hyperlink?",
        "options": ["<a>", "<link>", "<href>", "<hyperlink>"],
        "answer": 0
      },
      {
        "question": "Which JavaScript method is used to add an element to the end of an array?",
        "options": [".push()", ".pop()", ".shift()", ".unshift()"],
        "answer": 0
      },
      {
        "question": "Who is the current Prime Minister of India?",
        "options": ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"],
        "answer": 0
      },
      {
        "question": "Which is the national flower of India?",
        "options": ["Lotus", "Rose", "Marigold", "Sunflower"],
        "answer": 0
      },
      {
        "question": "Which is the longest river in India?",
        "options": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "answer": 0
      },
      {
        "question": "Which festival is known as the 'Festival of Lights'?",
        "options": ["Holi", "Diwali", "Eid", "Pongal"],
        "answer": 1
      },
      {
        "question": "Which programming language is commonly used for developing Android apps?",
        "options": ["Python", "Java", "Swift", "C#"],
        "answer": 1
      }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const feedbackElement = document.getElementById('feedback');
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionsElement.innerHTML = '';
    current.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => handleAnswer(index);
      optionsElement.appendChild(button);
    });
  }
  
  function handleAnswer(selected) {
    const current = questions[currentQuestion];
    if (selected === current.answer) {
      score++;
      feedbackElement.textContent = 'Correct!';
    } else {
      feedbackElement.textContent = `Wrong! The correct answer was ${current.options[current.answer]}`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(() => {
        feedbackElement.textContent = '';
        loadQuestion();
      }, 1000);
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    questionElement.textContent = `Quiz Complete! Your score is ${score}/${questions.length}`;
    optionsElement.innerHTML = '<button onclick="restartQuiz()">Restart</button>';
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  }
  
  loadQuestion();
  