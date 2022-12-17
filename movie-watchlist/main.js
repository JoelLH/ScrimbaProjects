import { getMovies, addToWatchlist, clearFeed } from "./utils.js";

const searchForm = document.getElementById('search-form');
const searchBtn = document.getElementById('search-btn')
const feed = document.getElementById('films')

searchBtn.addEventListener('click', (e)=>{handleSubmit(e)})

function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(searchForm)
    const movieTitle = form.get('movie-name')
    clearFeed()
    renderMovies(movieTitle)

    document.querySelector(".watermark").style.display = "none"
        
}

async function renderMovies(title){
    const response = await fetch(`https://www.omdbapi.com/?apikey=987dfd51&s=${title}&page=1&`)
    const data = await response.json()
        const movieArr = data.Search.map(movie =>{
            return movie.imdbID
        })
        getMovies(movieArr)
}

// ADD TO WATCHLIST

document.addEventListener('click',(e)=>{
    if(e.target.id === "addToWatchlist"){
        addToWatchlist(e)
        e.target.classList.toggle('added')
    }
})



