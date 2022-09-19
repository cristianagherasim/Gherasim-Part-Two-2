let name = '';
let step = 0;
let holes = 6;
let finalScore;
let scores = [];

// Get references to elements
var promptsRef = document.getElementById('prompts');
var userInputRef = document.getElementById('user-input');
document.getElementById('user-input').addEventListener("keypress", function handleClick(event) {
   if (event.key === "Enter") {
       event.preventDefault();
    onSubmitUserInput
   ();
   }
})
document.getElementById('submit-btn').addEventListener("click", onSubmitUserInput);


function onSubmitUserInput() {
   if (step === 0) {
       name = userInputRef.value;
   }

   if (step === 1) {
       holes = Number(userInputRef.value);
   }

   if (step !== 0 && step !== 1) {
       scores.push(Number(userInputRef.value));
   }

   if (step === 4) {
       if (holes === 3) {
           step = 7;
       }
   }

   if (step === 7) {
      return finalCalc();
   }

   const prompts = [
       `Hi, ${name}! Would you like to play 3 or 6 holes?`,
       'How many putts for hole 1? (par: 3)',
       'How many putts for hole 2? (par: 3)',
       'How many putts for hole 3? (par: 3)',
       'How many putts for hole 4? (par: 3)',
       'How many putts for hole 5? (par: 3)',
       'How many putts for hole 6? (par: 3)',
   ];

   promptsRef.innerText = prompts[step];
   step += 1;
   userInputRef.value = '';
}

function finalCalc() {
   userInputRef.value = '';
   if (holes === 3) {
       const userScore = scores.reduce((a,b) => {
           return a + b
       }, 0);
       finalScore = (userScore - 9).toString();
       if (finalScore < 0) {
           console.log('Great job, '+ name+ '! Your total par was: '+ finalScore+'.');
           promptsRef.innerText = 'Great job, '+ name+ '! Your total par was: '+ finalScore+'.';
       } else if (finalScore > 0) {
           console.log('Nice try, '+ name+ '! Your total par was: '+ finalScore+'.');
           promptsRef.innerText = 'Nice try, '+ name+ '! Your total par was: '+ finalScore+'.';
       } else {
           console.log('Good game, '+ name+ '! Your total par was: 0.');
           promptsRef.innerText = 'Good game, '+ name+ '! Your total par was: 0.';
       }
   } else {
       const userScore = scores.reduce((a,b) => {
           return a + b
       }, 0);
       finalScore = (userScore - 18).toString();
       if (finalScore < 0) {
           console.log('Great job, '+ name+ '! Your total par was: '+ finalScore+'.');
           promptsRef.innerText =  'Great job, '+ name+ '! Your total par was: '+ finalScore+'.';
       } else if (finalScore > 0) {
           console.log('Nice try, '+ name+ '! Your total par was: '+ finalScore+'.');
           promptsRef.innerText = 'Nice try, '+ name+ '! Your total par was: '+ finalScore+'.';
       } else {
           console.log('Good game, '+ name+ '! Your total par was: 0.');
           promptsRef.innerText = 'Good game, '+ name+ '! Your total par was: 0.';
       }
   }
}

