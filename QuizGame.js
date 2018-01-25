function Question(question, answers, correctAnswer) {
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
    runGame = function(){
        return questionArray[questionIndex];
    }
}

var first = new Question('Is bitcoin the future?',['yes','no'],1);
var second = new Question('Where would you rank Lebron?',['top 3','top 5','top 10','top 20'],1);
var third = new Question('What is the best day at the gym?',['chest day','back day','leg day'],3);
var fourth = new Question('What has been the best trip I have taken?',['Spain','Argentina','Japan','Italy'],3);

var questionArray = [first,second,third,fourth];

var score = 0;
var response;

while(response!=='exit') {
    var questionIndex = Math.floor(Math.random()*4);
    askQuestion();
    checkAnswer();
}

function askQuestion () {
    
    console.log(questionArray[questionIndex].question);
    
    for(i=0;i<questionArray[questionIndex].answers.length;i++) {
        console.log((i+1) + ' ' + questionArray[questionIndex].answers[i]);
    }
}

function checkAnswer () {
    response = prompt('What\'s the answer?');
    if(response === 'exit') {
        response = 'exit';
    } else if(Number(response) === questionArray[questionIndex].correctAnswer) {
        console.log('That is correct!')
        score++;
        console.log(`Your current score is ${score}`);
    } else {
        console.log('Sorry wrong answer');
        console.log(`Your current score is ${score}`);
    }
}