function Question(question, answers, correctAnswer) {
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer
    runGame = function(){
        console.log(questionArray[questionIndex]);
    }
}

var first = new Question('Is bitcoin the future?',['yes','no'],1);
var second = new Question('Where would you rank Lebron?',['top 3','top 5','top 10','top 20'],1);
var third = new Question('What is the best day at the gym?',['chest day','back day','leg day'],3);
var fourth = new Question('What has been the best trip I have taken?',['Spain','Argentina','Japan','Italy'],3);

var questionArray = [first,second,third,fourth];

var questionIndex = Math.floor(Math.random()*4);

Question.runGame();