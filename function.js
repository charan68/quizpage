let quizdata = [
    {
        question: 'Which Framework is related to JAVASCRIPT ?',
        a:'.net',
        b:'flask',
        c:'React',
        d:'django',
        correct:'c'

    },
    {
        question: 'Which is not a programming language ?',
        a:'HTML',
        b:'Python',
        c:'Java',
        d:'Javascript',
        correct:'a'

    },
    {
        question: 'Which is not a Framework ?',
        a:'React',
        b:'JavaScript',
        c:'Django',
        d:'Angular',
        correct:'b'

    },
    {
        question: 'CSS stands for ?',
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none of the above',
        correct:'b'

    }
]

let quiz = document.getElementById('quizdiv');
let answer = document.querySelectorAll('.answer');
let question = document.getElementById('question');

let option_a = document.getElementById('a_value');
let option_b = document.getElementById('b_value');
let option_c = document.getElementById('c_value');
let option_d = document.getElementById('d_value');

let submitbtn = document.getElementById('submit');
let currentQuestion =0;
let quizScore =0;

loadQuiz();

function loadQuiz(){
    deselect();
    question.innerHTML = quizdata[currentQuestion].question;
    option_a.innerText= quizdata[currentQuestion].a;
    option_b.innerText= quizdata[currentQuestion].b;
    option_c.innerText= quizdata[currentQuestion].c;
    option_d.innerText= quizdata[currentQuestion].d;


}

function deselect(){
    answer.forEach(answer => answer.checked=false);
}

submitbtn.addEventListener('click', ()=>{
    let selectedoption;
    answer.forEach(answer => {
        if(answer.checked){
            selectedoption=answer.id;
        }
    })

    if(selectedoption===quizdata[currentQuestion].correct){
        quizScore++;
    }
    currentQuestion++;

    if(currentQuestion===quizdata.length){
       document.getElementById('quizdiv').innerHTML = `<h2>You have answered ${quizScore} correctly out of ${quizdata.length} </h2>`;
    }
    else loadQuiz();
})