'use strict';

const countEL = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0;
let countStr = ' ';

const increment = function(){
    count++;
    console.log(`Count is: ${count}!`);
    countEL.textContent = count;
}

const decrement = function(){
    count--;
    countEL.textContent = count;
    console.log(`Count is: ${count}!`);

}

const reset = function(){
    count = 0;
    countStr = ' ';
    countEL.textContent = count;
    saveEl.textContent = countStr;
    console.log(`Count has been reset: ${count}!`);
}

const save = function(){
    if(countStr === ' '){
        countStr += count;
    }else{
        countStr += " - " + count;
    }
    console.log(`Count has been saved: ${countStr}!`);
    saveEl.textContent = countStr;
    count = 0;
    countEL.textContent = count;
}


