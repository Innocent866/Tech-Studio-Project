'use strict'

let para2 = document.querySelector('.para2')
let userIn = document.querySelector('.user-input') 
let buttonOne = document.querySelector('.button1')
let buttonTwo = document.querySelector('.button2')
let result = document.querySelector('.hTwo1')
let body = document.querySelector('body')
let trials = document.querySelector('.trials')


let randomNumber1 = Math.ceil(Math.random()*6)
console.log(randomNumber1);



buttonOne.addEventListener('click',()=>{
    window.location.reload()
})

let reload = (trials)=>{
    if (trials.textContent>1) {
       trials.textContent--
    }else if (trials.textContent==1){
        window.location.reload()
    }}


function loadClick() {
    if (Number(userIn.value) === randomNumber1) {
        para2.textContent = randomNumber1
       trials.textContent++
        result.textContent='Correct'
    }
    else if(Number(userIn.value) > randomNumber1){
        result.textContent = 'User value too high'
        reload(trials)
    }
    else if (Number(userIn.value) < randomNumber1){
        result.textContent = 'Computer value too high'
        reload(trials)
    }
   
   
}

buttonTwo.addEventListener('click',loadClick)