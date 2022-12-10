// Remember to import the data and Dog class!

import dogsData from "./data.js"
import Dog from "./Dog.js"
import {toggleBadge, swipeAnimation} from "./utils.js"

let dogsArray = dogsData.slice();
let isWaiting = false;



function getNewDog(){
    return dogsArray.length > 0 ?  new Dog(dogsArray.shift()) : 0
}

function swipeDog(id){
    if(!isWaiting){
        isWaiting= true
        dog.setMatchStatus(id)
        setTimeout(()=>toggleBadge(id), 700)
        setTimeout(()=>swipeAnimation(id), 800)
        dog = getNewDog()
        setTimeout(()=>{
            swipeAnimation(id)
            toggleBadge(id)
            render()
            isWaiting = false
        }, 2000)
    }
    
}

function render(){
    if(dog === 0){
        document.getElementById('user-data').innerHTML = `
            <div class="end-section">
                <h3>There are no more dogs in your area</h3>
                <div>
                    <a href="https://storyset.com/friends">Friends illustrations by Storyset</a>
                    <img src="/images/paw-bros.png">
                </div>
                <p>Click our logo to start again</p>    
            </div>
        `    
        isWaiting = true;
    }else{
        document.getElementById('user-data').innerHTML = dog.dogHtml
    }
}
function restartSearch(){
    isWaiting = false;
    dogsArray = dogsData.slice()
    dog = getNewDog()
    render()
}


let dog = getNewDog()

document.getElementById('reject').addEventListener('click', (e) => swipeDog(e.target.id))
document.getElementById('accept').addEventListener('click', (e) => swipeDog(e.target.id))
document.getElementById('logo').addEventListener('click', () => restartSearch())

render()
