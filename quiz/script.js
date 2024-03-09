const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById('questionBox');
let allInput = document.querySelectorAll('input');

const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    allReset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInput[0].nextElementSibling.innerHTML = data.a
    allInput[1].nextElementSibling.innerHTML = data.b
    allInput[2].nextElementSibling.innerHTML = data.c
    allInput[3].nextElementSibling.innerHTML = data.d
}


document.querySelector('#submit').addEventListener('click',
function(){
    const data = quizData[index]
    const ans = getAnswer()
    if(ans == data.correct){
        correct++
    }else{
        incorrect++
    }
    index++
    loadQuestion()
});

const getAnswer = () => {
    let ans;
    allInput.forEach(
        (inputE1) => {
            if (inputE1.checked) {
                ans = inputE1.value;
            }
        }
    )
    return ans;
}

const allReset = () =>{
    allInput.forEach(
        (inputE1) => {
            inputE1.checked = false;
        }
    )
}

const quizEnd = () =>{
    document.querySelector('.box').innerHTML =
    `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion();