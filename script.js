'use strict'

const feedback = {
    poor_performance: "Keep practicing you'll improve with time!",
    average: "Not bad, but there's room for improvement.",
    moderate_performance: "You're getting better stay consistent!",
    best: "Great job! You're typing like a pro!",
    excellent: "Excellent work fast and accurate typing!",
    super_excellent: "Outstanding! You're a typing master!"
};


const fifteenSecondQuotes = [
  "The quick brown fox jumps over the lazy dog near the riverbank at dusk.",
  "Typing fast takes practice, patience, and daily effort to truly master the right flow.",
  "A smart developer keeps learning, building projects, and improving skills every single day.",
  "Code is like poetry clean, simple, and written with purpose and clarity in mind.",
  "The best way to grow is to challenge yourself with projects slightly above your level.",
  "Dont focus on speed at first — focus on accuracy and rhythm to build consistency.",
  "Every expert was once a beginner who kept typing, failing, and trying again each day.",
  "Writing clean code is more important than writing clever code that no one understands.",
  "Motivation will fade, but discipline and habits are what truly bring lasting progress.",
  "Your journey as a developer begins with the courage to write your first messy line."
];

const thirtySecondQuotes = [
  "Typing tests are a great way to improve your accuracy, build muscle memory, and become faster. The key is not speed alone, but how consistently you can maintain correct keystrokes while thinking ahead of your fingers.",
  
  "Every programmer knows that debugging is like being a detective in a crime movie where you're also the murderer. You must stay calm, trace every line, and hope you find the missing semicolon before you lose your mind.",
  
  "Learning to code is not just about memorizing syntax; it's about solving problems creatively. With consistent effort, you'll start seeing patterns, writing cleaner logic, and developing the confidence to tackle complex projects with ease.",
  
  "A good developer understands that building projects is the fastest way to grow. Tutorials help you understand the basics, but real growth comes from making mistakes, solving bugs, and building things from scratch with your own ideas.",
  
  "Discipline beats motivation every single time. On the days when you dont feel like coding, showing up and writing even a few lines will set you apart from ninety percent of people who give up too soon.",
  
  "Frontend development is not only about HTML and CSS its about creating seamless experiences that feel natural to users. Every element, every transition, every detail counts when it comes to building professional and clean interfaces.",
  
  "The difference between a junior and a senior developer often lies in decision-making, not just technical skill. Seniors know when to write less code, when to use a library, and how to prioritize readable code over clever hacks.",
  
  "Typing fast is a superpower when coding. Being able to convert your thoughts into code fluently saves time and keeps your momentum going. But make sure you are typing the right thing, not just typing fast for the sake of it.",
  
  "The journey to becoming a developer is filled with bugs, broken builds, and late-night struggles. But every bug you solve adds experience, every feature you build adds confidence, and every step forward brings you closer to mastery.",
  
  "If you are serious about learning, make consistency your best friend. Even thirty minutes a day of focused practice is far better than random hours of distracted coding. Small, daily wins add up to massive progress over time."
];

const sixtySecondQuotes = [
  "Typing is a skill that improves slowly over time and the only way to get better is to keep practicing every single day without expecting fast results You will make mistakes and feel stuck but those moments are where you grow the most and gain confidence in your ability to keep moving forward even when it feels hard or frustrating",

  "Every expert you see in programming or web development started out knowing nothing at all They struggled with simple errors spent hours debugging small issues and felt overwhelmed by things you are also going through right now The difference is they did not stop They kept showing up and typing until things made sense and the same will happen to you",

  "Becoming a better developer is not about being the smartest person in the room but about being the most consistent one The person who keeps building keeps writing code keeps fixing bugs and keeps learning from failure will always outperform someone with talent but no discipline or patience to see things through to the end",

  "A strong developer does not memorize everything but knows where to find the right answers and how to think logically through problems They stay calm under pressure break down big tasks into smaller ones and solve one thing at a time until the full picture comes together just like building a puzzle with patience and focus",

  "Most people quit learning to code not because it is too hard but because they expect instant results and get discouraged when progress feels slow But learning anything new takes time and the ones who succeed are those who understand that small progress every day adds up to something powerful in the long run",

  "When you type without stopping for sixty seconds you enter a flow state where your brain focuses and your fingers just move That kind of practice builds muscle memory and helps you type without thinking too hard about each letter which over time boosts both speed and confidence in your typing and coding abilities",

  "Learning to code is like learning a new language At first everything feels confusing and slow but with practice your brain starts to recognize patterns and the logic behind how things work Suddenly things click and you start solving problems faster without even realizing how much progress you have made over the weeks and months",

  "The key to becoming fast at typing is not to rush but to type mindfully at first Focus on accuracy and rhythm rather than raw speed and once you build the habit of hitting the right keys every time speed will naturally increase and you will notice how smooth and effortless typing becomes",

  "Building good typing habits early will help you throughout your journey as a developer From writing clean code to writing documentation and emails being able to type quickly and accurately will save you time reduce frustration and give you an edge in everything you do related to technology and programming",

  "You might not feel like you are making progress but every word you type adds to your experience and every minute you spend trying makes you better You just need to keep going no matter how small the improvement is because that consistency is what will carry you to your goals"
];


const start = document.querySelector('.start');
const pause = document.querySelector('.pause')
const resume = document.querySelector('.resume');
const reset = document.querySelector('.reset')
const replay = document.querySelector('.replay');
const selectedTime = document.querySelector('#timer')
const LettersWritten = document.querySelector('.type-box')
const displayTime = document.querySelector(".display-time");
const wpm = document.getElementById('wpm')
const accuracy = document.getElementById('accuracy');
const feedback_message = document.getElementById('message');
const displayedContent = document.getElementById('text-to-type')


const GetAccuracy = function(){
   const string = LettersWritten.value;
   const correctlyTyped = CorrectlyTypedLetters(string);
   const totalLetterTyped = document.querySelector('.type-box').value;
   // probelm is in correctly types stuff 
   if (totalLetterTyped.length == 0 ) return `${0}%`;

   return `${Math.floor(correctlyTyped / totalLetterTyped.length * 100)}%`
}

const CorrectlyTypedLetters = function(letterstyped){
    const string = document.querySelector('#text-to-type').textContent.trim().toLowerCase();
    const letterstypedToLower = letterstyped.toLowerCase();
    let length = Math.min(string.length , letterstypedToLower.length)
    let correctlyTyped = 0 ;
    for (let index = 0; index < length; index++) {
        if (string[index] === letterstypedToLower[index]) {
            correctlyTyped++;
        }   
    }
    return correctlyTyped;
}

const wordsPerMinute = function() {
    const totalLetterTyped = LettersWritten.value;
    const wpmm = totalLetterTyped.length  / ( timeInminutes(selectedTime.value) * 5 );
    return Math.floor(wpmm);
}

const timeInminutes = function(timeInseconds){
   const seconds = Number(timeInseconds);
   const timeInminutes = seconds / 60;
   return timeInminutes;
}

const getFeedBack = function(wpm ){
   if (wpm > 100) 
     return feedback.super_excellent;
    else if ( wpm >= 80 && wpm <= 100)
     return feedback.excellent;
    else if (wpm >= 60 && wpm < 80)
     return feedback.best;
    else if ( wpm >= 50 && wpm < 60)
     return feedback.moderate_performance;
    else if ( wpm >= 30 && wpm < 50)
     return feedback.average;
    else if ( wpm >= 20 && wpm < 30)
     return feedback.poor_performance;
    else if (wpm < 20 && wpm >= 0)
    return `you are noob ! keep up the Hard work`

}

const generateRandomNumber = function(){
   return Math.floor(Math.random() * 10) ;
}
const updateQuote = function(time){

    if(time === 15)
        return fifteenSecondQuotes[generateRandomNumber()];
    else if(time === 30)
        return thirtySecondQuotes[generateRandomNumber()];
    else if(time === 60)
        return sixtySecondQuotes[generateRandomNumber()];

}

const updateTheQuoteandReset = function(pickedTime){
    displayTime.textContent = `00:${pickedTime}`
    displayedContent.textContent = updateQuote(pickedTime);
    wpm.textContent = '--'
    accuracy.textContent = '--%'
    feedback_message.textContent = 'Start typing to see feedback'
    LettersWritten.disabled = false;
    LettersWritten.value = "";
}

selectedTime.addEventListener("change" , function(){
    const pickedTime = Number(selectedTime.value);

    if(pickedTime === 15)
        updateTheQuoteandReset(pickedTime); 
    else if( pickedTime === 30)
       updateTheQuoteandReset(pickedTime);
    else if(pickedTime === 60)
       updateTheQuoteandReset(pickedTime);
    
})
// start Action 

const updateUI = function(){
    displayTime.textContent = `Time's up !`
    const getWPM = wordsPerMinute();
    wpm.textContent = getWPM;
    const getAccur = GetAccuracy();
    accuracy.textContent = getAccur;
    feedback_message.textContent = getFeedBack(getWPM);
}

let isIntervalRunning = true ;
let startInterval ;
let booltimeCheck = false ;
let time; 
const startAction = function(){
    if (isIntervalRunning === true) {
        isIntervalRunning = false ;
        time = booltimeCheck ? remainingTime : Number(document.getElementById('timer').value);

        displayTime.textContent = `00:${time}`.padStart(2 , 0)

         startInterval = setInterval(()=>{
          if (time <= 0) {
            clearInterval(startInterval)
            isIntervalRunning = true;
            LettersWritten.disabled = true;
            updateUI();

          }else{
            time--;
            displayTime.textContent = `00:${String(time).padStart(2 , 0)}`;
          }
        } , 1000)
    }

}
const replayFunction = function(){
    let repeatString = displayedContent.textContent;
    displayTime.textContent = `00:00`
    clearInterval(startInterval)
    isIntervalRunning = true;
    displayedContent.textContent =  repeatString;
    wpm.textContent = '--'
    accuracy.textContent = '--%'
    feedback_message.textContent = 'Start typing to see feedback'
    LettersWritten.disabled = false;
    LettersWritten.value = "";   
    startAction();
}

const resetButton = function(){
    displayTime.textContent = `00:00`
    clearInterval(startInterval)
    isIntervalRunning = true;
    displayedContent.textContent = "A smart developer keeps learning, building projects, and improving skills every single day"
    wpm.textContent = '--'
    accuracy.textContent = '--%'
    feedback_message.textContent = 'Start typing to see feedback'
    LettersWritten.disabled = false;
    LettersWritten.value = "";
}
// start on click event 
start.addEventListener('click' , startAction);

// reset eventlisters
reset.addEventListener('click' , resetButton);

// replay eventlisters
replay.addEventListener('click' , replayFunction)

// start on keypress event 
document.addEventListener('keydown' , function(event){
   if (event.key === 'Enter') { 
    resetButton();
     if (isIntervalRunning === true) { 
        startAction();
     }
   }
})

// pause eventListener

let remainingTime;
pause.addEventListener('click' , function(){
   
   remainingTime = time ;
   clearInterval(startInterval)
   isIntervalRunning = true ;
   LettersWritten.disabled = true;

})
resume.addEventListener('click' , function(){
   booltimeCheck = true;
   LettersWritten.disabled = false;
   startAction();
   booltimeCheck = false;
   remainingTime = 0;

})




