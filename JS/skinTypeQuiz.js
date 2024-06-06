const quizData = [
    {
      question: " What does your skin typically look like at the end of the day?",
      options: ["slick and shiny", "tight or splotchy", "shimmery t zone but matte cheeks", "none of the above"],
      answerOily: "slick and shiny",
      answerMixed: "shimmery t zone but matte cheeks",
      answerDry: "tight or splotchy",
      answerNormal: "none of the above"
    },
    {
      question: "If you wash your face and don’t apply any products, how does your skin behave 30 minutes later?",
      options: ["it wants moisturizer asap", "its calm, smooth and soft", "oily, dry and generally uneven", "its already shiny"],
      answerOily: "its already shiny",
      answerMixed: "oily, dry and generally uneven",
      answerDry: "it wants moisturizer asap",
      answerNormal: "its calm, smooth and soft"
    },
    {
        question: "Dab a blotting paper or tissue on each part of  your face, then hold it to the light. What do you see?",
        options: ["oily spots", "minor oil slick from my forehead and nose", "none of the above", "nothing, but its irritated from blotting"],
        answerOily: "oily spots",
        answerMixed: "minor oil slick from my forehead and nose",
        answerDry: "nothing, but its irritated from blotting",
        answerNormal: "none of the above"
      }
    // Add more questions here...
  ];
  let final="";
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  let score="";
  let currentQuestion = 0;
  let scoreOily = 0;
  let scoreNormal= 0;
  let scoreDry= 0;
  let scoreMixed = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answerOily = quizData[currentQuestion].answerOily;
    const answerMixed = quizData[currentQuestion].answerMixed;
    const answerDry = quizData[currentQuestion].answerDry;
    const answerNormal = quizData[currentQuestion].answerNormal ;
  
    if (selectedButton.innerText === answerOily) {
      scoreOily++;
    }
    else if(selectedButton.innerText === answerMixed) {
        scoreMixed++;
      }
    else if(selectedButton.innerText === answerDry) {
        scoreDry++;
      }
    else{
    scoreNormal++}
    if(scoreDry>scoreMixed&&scoreDry>scoreNormal&&scoreDry>scoreOily)
         final="dry skin";
    else if(scoreOily>scoreMixed&&scoreOily>scoreNormal&&scoreOily>scoreDry)
        final="oily skin";
    else if(scoreMixed>scoreDry&&scoreMixed>scoreNormal&&scoreMixed>scoreDry)
        final="Mixed skin";
    else
    final="Normal skin";


    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  






  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your skin type: ${final}</p>
    `;
  }
  
  showQuestion();