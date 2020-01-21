const startButton = document.getElementById('startButton');
const changeLettersButton = document.getElementById('changeLetters');
const fruitDisplay = document.getElementById('fruitDisplay');
const letterDisplay = document.getElementById('letterSwapDisplay');
let fruitArray = [];


const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}

startButton.onclick = function () {

    for (let i = 0; i < 3; i++) {
        fruitArray[i] = prompt('Enter a word:', "");
    
    }
    fruitArray.forEach(fruit => elfCode.appendToList(fruitDisplay, fruit))
    startButton.style.display = 'none';
    changeLetters.style.display = 'block';

}
    changeLettersButton.onclick = function () {
        const otherArray = fruitArray.map(thing => doSomething(thing));
        sectionOne.style.display = 'none';
        sectionTwo.style.display = 'block';
        otherArray.forEach(other => elfCode.appendToList(letterDisplay, other));
    }  


function doSomething(input) {
    let a = input.slice(0, 1);
    let b = input.slice(-1);
    let c = input.slice(1, -1);
    console.log(b + c + a);
    return b+c+a;

}




