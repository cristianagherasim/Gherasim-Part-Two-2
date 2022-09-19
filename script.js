let name = '';
let holes = 6;
let finalScore;
let scores = [];

name = prompt("Welcome to GC mini golf! What is your name?");
holes = prompt(`Hi, ${name}! Would you like to play 3 or 6 holes?`);
let hole1 = prompt('How many putts for hole 1? (par: 3)');
scores.push(Number(hole1));
let hole2 = prompt('How many putts for hole 2? (par: 3)');
scores.push(Number(hole2));
let hole3 = prompt('How many putts for hole 3? (par: 3)');
scores.push(Number(hole3));
if (Number(holes) === 3) {
   finalCalc();
} else {
   let hole4 = prompt('How many putts for hole 4? (par: 3)');
   scores.push(Number(hole4));
   let hole5 = prompt('How many putts for hole 5? (par: 3)');
   scores.push(Number(hole5));
   let hole6 = prompt('How many putts for hole 6? (par: 3)');
   scores.push(Number(hole6));
   finalCalc();
}

function finalCalc() {
   if (Number(holes) === 3) {
       const userScore = scores.reduce((a,b) => {
           return a + b
       }, 0);
       finalScore = (userScore - 9).toString();
       if (finalScore < 0) {
           console.log('Great job, '+ name+ '! Your total par was: '+ finalScore+'.');
       } else if (finalScore > 0) {
           console.log('Nice try, '+ name+ '! Your total par was: '+ finalScore+'.');
       } else {
           console.log('Good game, '+ name+ '! Your total par was: 0.');
       }
   } else {
       const userScore = scores.reduce((a,b) => {
           return a + b
       }, 0);
       finalScore = (userScore - 18).toString();
       if (finalScore < 0) {
           console.log('Great job, '+ name+ '! Your total par was: '+ finalScore+'.');
       } else if (finalScore > 0) {
           console.log('Nice try, '+ name+ '! Your total par was: '+ finalScore+'.');
       } else {
           console.log('Good game, '+ name+ '! Your total par was: 0.');
       }
   }
}


