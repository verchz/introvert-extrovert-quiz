// QUESTIONS

const questions = [
    {
      "question": "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      "answer1": "<b>A.</b> Don’t dare to interrupt them",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Think it’s more important to give them some of your time; work can wait",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Listen, but with only with half an ear",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Interrupt and explain that you are really busy at the moment",
      "answer4Total": "4",
    },
    {
      "question": "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      "answer1": "<b>A.</b> Look at your watch every two minutes",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Bubble with inner anger, but keep quiet",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Explain to other equally impatient people in the room that the doctor is always running late",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Complain in a loud voice, while tapping your foot impatiently",
      "answer4Total": "4",
    },
    {
      "question":
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      "answer1": "<b>A.</b> Don’t dare contradict them",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Think that they are obviously right",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Defend your own point of view, tooth and nail",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Continuously interrupt your colleague",
      "answer4Total": "4",
    },
    {
      "question": "You are taking part in a guided tour of a museum. You:",
      "answer1": "<b>A.</b> Are a bit too far towards the back so don’t really hear what the guide is saying",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Follow the group without question",
      "answer2Total": "2",
      "answer3":
        "<b>C.</b> Make sure that everyone is able to hear properly",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Are right up the front, adding your own comments in a loud voice",
      "answer4Total": "4",
    },
    {
      "question": "During dinner parties at your home, you have a hard time with people who:",
      "answer1": "<b>A.</b> Ask you to tell a story in front of everyone else",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Talk privately between themselves",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Hang around you all evening",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Always drag the conversation back to themselves",
      "answer4Total": "4",
    },
    {
      "question":
        "You crack a joke at work, but nobody seems to have noticed. You:",
      "answer1":
        "<b>A.</b> Think it’s for the best — it was a lame joke anyway.",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Wait to share it with your friends after work",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Try again a bit later with one of your colleagues",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Keep telling it until they pay attention",
      "answer4Total": "4",
    },
    {
      "question": "This morning, your agenda seems to be free. You:",
      "answer1": "<b>A.</b> Know that somebody will find a reason to come and bother you",
      "answer1Total": "1",
      "answer2": "<b>B.</b> Heave a sigh of relief and look forward to a day without stress",
      "answer2Total": "2",
      "answer3": "<b>C.</b> Question your colleagues about a project that’s been worrying you",
      "answer3Total": "3",
      "answer4": "<b>D.</b> Pick up the phone and start filling up your agenda with meetings",
      "answer4Total": "4",
    }
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;

  // Selectors
  
  const container = document.querySelector('.box');
  const questionEl = document.querySelector('.questionBox');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      const option4Total = questions[index].answer4Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option4.setAttribute('data-total', `${option4Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
      option4.innerHTML = `${question.answer4}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      //Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Increment the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<div class="box" id="result">
           <div class="title">
               Are you an introvert or an extrovert?
           </div>
           <div class="resultBox">
               <label class="final-score">Your score: ${totalScore}</label>
               <br>
               <p>Possible - Personality Traits, see below for a summary based on your results: <p>
                   <br>
               <span>
                   <br>
                 <p><b>22 or more - You are more of a public extrovert and private introvert.</b>In public and at work you are a ball of energy perpetually on the move. You take the initiative, encourage others, hate waiting and are endlessly anticipating what’s going on around you. </p>
                 <br>
                 <p><b>16 - 21 - You are more of a public introvert and private extrovert. </b> Within your circle of family and friends, you are completely at ease and it’s often you who takes the lead to organise outings, dinners, vacations, etc.
                   However, as soon as you are in a public or professional setting you become rather inhibited.</p>
                   <br>
                 <p><b>11 - 15 - Ambivert </b> Your results indicate that you are somewhere in the middle of the extrovert/introvert continuum, you tend to have qualities that fit into both ends of the spectrum. You like spending time with others, but you also enjoy having time to yourself. You might not mind being the center of attention once in a while, but you probably prefer to stay out of the spotlight on a day-to-day basis.</p>
                 <br>
                 <p><b>0 - 10 You are more of an introvert.</b> You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing out in one.</p>
               </span>
           </div>
   
           <div class="buttonBox">
               <a href="index.html">Start Again</a>
           </div>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement questions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
    
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  