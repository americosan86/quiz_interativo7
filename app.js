const form = document.querySelector('.quiz-form');
const correctAnswers = ['A' , 'B' , 'A' , 'A'];

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;

    const part = 100 / correctAnswers.length;

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ];
    userAnswers.forEach((userAnswer,index) => {
        if(userAnswer == correctAnswers[index]){
            score += part;
        }
    })
    
    console.log(score);
});