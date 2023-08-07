const quizData = [
    {
      question: "Who is the father of biology?",
      a: "Charles Babbage",
      b: "Aristotle",
      c: "Albert Enstein",
      d: "Charles Coulomb",
      correct: "b",
    },
    {
      question: "What is the basic unit of life?",
      a: "Atom",
      b: "Cell",
      c: "Molecule",
      d: "Organ",
      correct: "b",
    },
    {
      question: "Which organelle is responsible for producing energy in a cell?",
      a: "Nucleus",
      b: "Mitochondria",
      c: "Ribosome",
      d: "Golgi apparatus",
      correct: "b",
    },
    {
      question: "What is the process by which green plants convert light energy into chemical energy?",
      a: "Photosynthesis",
      b: "Respiration",
      c: "Fermentation",
      d: "Transpiration",
      correct: "a",
    },
    {
      question: "Which type of blood vessel carries blood away from the heart?",
      a: "Artery",
      b: "Vein",
      c: "Capillary",
      d:  "Aorta",
      correct: "a",
    },
    {
      question: "What is the process by which cells divide and produce two identical daughter cells?",
      a: "Mitosis",
      b: "Meiosis",
      c: "Cytokinesis",
      d:  "Interphase",
      correct: "a",
    },
    {
      question: "Which system is responsible for protecting the body from pathogens and foreign invaders?",
      a: "Digestive System",
      b: "Respiratory System",
      c: "Nervous System",
      d:  "Immune System",
      correct: "d",
    },
    {
      question: "What is the chemical substance that carries genetic information in living organisms?",
      a: "RNA",
      b: "DNA",
      c: "Protein",
      d:  "Lipid",
      correct: "b",
    },
    {
      question: "Which gas is essential for respiration and is exchanged in the lungs during breathing?",
      a: "Oxygen",
      b: "Nitrogen",
      c: "Carbon dioxide",
      d:  "Hydrogen",
      correct: "a",
    },
    {
      question: "What is the largest organ in the human body?",
      a: "Heart",
      b: "Liver",
      c: "Brain",
      d:  "Lungs",
      correct: "b",
    },
    {
      question: "Which scientist is credited with discovering the principles of natural selection and evolution?",
      a: "Charles Darwin",
      b: "Isaac Newton",
      c: "Albert Einstein",
      d:  "Galileo Galilei",
      correct: "a",
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
      }
    }
  });