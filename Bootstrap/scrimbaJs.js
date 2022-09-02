
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
    count += 1;
    countEl.textContent = count
}

function reset(){
    count = 0;
    document.getElementById("count-el").innerText = count;
}


function save(){
    saveEl.textContent += count + " - " 
}






