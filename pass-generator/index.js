const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let resultOneEl= document.getElementById("btn-resultOne");
let resultTwoEl= document.getElementById("btn-resultTwo");
let cardEl= document.getElementById("card");
let titleEl= document.getElementById("title");
let subTitleEl= document.getElementById("subtitle");


function genPassword(){
    let passOne= ""
    let passTwo= ""
    for(let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        passOne += characters[randomIndex];
    }
    for(let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        passTwo += characters[randomIndex];
    }
    resultOneEl.value= passOne;
    resultTwoEl.value= passTwo;
}
function toggleTheme(){
    cardEl.classList.toggle("light");
    titleEl.classList.toggle("light");
    subTitleEl.classList.toggle("light");
}







