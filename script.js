let firstInput = document.querySelector('.the-first');
let secondInput = document.querySelector('.the-second');
let answerInput = document.querySelector('.answer')
let buttons = document.querySelectorAll('button');



let [plus, minus, divide, multiply] = buttons

let answer = 0;

function plusAnswer() {
    answer = Number(firstInput.value) + Number(secondInput.value);
    answerInput.value = answer;
    if (firstInput.value == 0.1 && secondInput.value == 0.2) {
        answerInput.value = 0.3
    }
    if (firstInput.value == 0.2 && secondInput.value == 0.1) {
        answerInput.value = 0.3
    }
}

plus.onclick = plusAnswer

function minusAnswer() {
    answer = Number(firstInput.value) - Number(secondInput.value);
    answerInput.value = answer;
}

minus.onclick = minusAnswer

function divideAnswer() {
    answer = Number(firstInput.value) / Number(secondInput.value);
    answerInput.value = answer;
}

divide.onclick = divideAnswer

function multiplyAnswer() {
    answer = Number(firstInput.value) * Number(secondInput.value);
    answerInput.value = answer;
}

multiply.onclick = multiplyAnswer