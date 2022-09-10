
let mainInputEl = document.getElementById("main-input")
let convertBtnEl = document.getElementById("convert-btn")
let lengthResultEl = document.getElementById("length-result")
let volumeResultEl = document.getElementById("volume-result")
let massResultEl = document.getElementById("mass-result");
let themeEl = document.getElementById("theme-toggle");
let inputValue; 

themeEl.addEventListener("click", ()=>{
    let bodyList = document.getElementById("card-body").classList;
    let unitWrapperList = document.getElementsByClassName("unit-wrapper");
    let unitTitleList = document.getElementsByClassName("unit__title");
    let unitTextList = document.getElementsByClassName("unit__result");
    bodyList.toggle("dark")
    for(let i = 0; i < 3 ; i++){
        unitWrapperList[i].classList.toggle("dark");
        unitTitleList[i].classList.toggle("dark")
        unitTextList[i].classList.toggle("dark")
    }
})
convertBtnEl.addEventListener("click", ()=>{
    inputValue = mainInputEl.value;

    if(inputValue){
        let feet = (inputValue * 3.2808).toFixed(3);
    let meters = (inputValue * 0.3048).toFixed(3);
    let liters = (inputValue * 3.7854).toFixed(3);
    let gallons = (inputValue * 0.264172 ).toFixed(3);
    let kilos = (inputValue * 0.4535).toFixed(3);
    let pounds = (inputValue * 2.2046).toFixed(3);

    lengthResultEl.textContent = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;
    volumeResultEl.textContent = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
    massResultEl.textContent = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`;
    }
    mainInputEl.value = "";
})





