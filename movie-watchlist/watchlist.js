import { getMovies, addToWatchlist, clearFeed } from "./utils.js";


console.log(JSON.parse(localStorage.getItem('watchlist')))

async function renderWatchList(){
    const localWatchlist = JSON.parse(localStorage.getItem('watchlist'))

    if(localWatchlist.length > 0){
        getMovies(localWatchlist, "2")
    }

    if(localWatchlist.length >= 1){
        document.querySelector(".watermark").style.display = "none"
    }else{
        document.querySelector(".watermark").style.display = "block"
    }
}

document.addEventListener('click',(e)=>{
    if(e.target.id === "addToWatchlist"){
        addToWatchlist(e)
        clearFeed()
        renderWatchList()
    }
})

renderWatchList()