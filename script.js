// outcomes
var springScore = 0;
var summerScore = 0;
var fallScore = 0;
var winterScore = 0;

// number of questions answered
var numQuestions = 0;

//linking HTML and JS for result
var result = document.getElementById("result");

//linking HTML and JS for restart
var restart = document.getElementById("restart");

//linking HTML and JS for Q1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//linking HTML and JS for Q2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//linking HTML and JS for Q3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// event listeners
q1a1.addEventListener("click", fall);
q1a1.addEventListener("click", disableQ1);

q1a2.addEventListener("click", summer);
q1a2.addEventListener("click", disableQ1);

q1a3.addEventListener("click", winter);
q1a3.addEventListener("click", disableQ1);

q1a4.addEventListener("click", spring);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", winter);
q2a1.addEventListener("click", disableQ2);

q2a2.addEventListener("click", summer);
q2a2.addEventListener("click", disableQ2);

q2a3.addEventListener("click", fall);
q2a3.addEventListener("click", disableQ2);

q2a4.addEventListener("click", spring);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", spring);
q3a1.addEventListener("click", disableQ3);

q3a2.addEventListener("click", winter);
q3a2.addEventListener("click", disableQ3);

q3a3.addEventListener("click", fall);
q3a3.addEventListener("click", disableQ3);

q3a4.addEventListener("click", summer);
q3a4.addEventListener("click", disableQ3);

restart.addEventListener("click", restartQuiz);

// functions

// outcomes
function spring() {
  springScore += 1;
  numQuestions += 1;
  console.log("numQuestions = " + numQuestions + " springScore = " + springScore);
  if (numQuestions === 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function summer() {
  summerScore += 1;
  numQuestions += 1;
  console.log("numQuestions = " + numQuestions + " summerScore = " + summerScore);
  if (numQuestions === 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function fall() {
  fallScore += 1;
  numQuestions += 1;
  console.log("numQuestions = " + numQuestions + " fallScore = " + fallScore);
  if (numQuestions === 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function winter() {
  winterScore += 1;
  numQuestions += 1;
  console.log("numQuestions = " + numQuestions + " winterScore = " + winterScore);
  if (numQuestions === 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

//disable buttons
function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

// result
function updateResult() {
  if(springScore >= 2) {
    result.innerHTML = "You are spring!";
    console.log("You are spring!");
  } 
  else if (summerScore >= 2) {
    result.innerHTML = "You are summer!";
    console.log("You are summer!");
  }
  else if (fallScore >= 2) {
    result.innerHTML = "You are fall!";
    console.log("You are fall!");
  }
  else if (winterScore >= 2) {
    result.innerHTML = "You are winter!";
    console.log("You are winter!");
  }

  // if all three answers lead to a different outcome, the quiz will randomly pick a season
  else {
    var randomNum = Math.random() * 4;
    var finalNum = Math.floor(randomNum);
    if (finalNum === 0) {
      result.innerHTML = "You are spring!";
      console.log("You are spring!");
    }
    else if (finalNum === 1) {
      result.innerHTML = "You are summer!";
      console.log("You are summer!");
    }
    else if (finalNum === 2) {
      result.innerHTML = "You are fall!";
      console.log("You are fall!");
    }
    else if (finalNum === 3) {
      result.innerHTML = "You are winter!";
      console.log("You are winter!");
    }
  }
}

//restart function
function restartQuiz() {
  result.innerHTML = "Your result is...";
  springScore = 0;
  summerScore = 0;
  fallScore = 0;
  winterScore = 0;
  numQuestions = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}