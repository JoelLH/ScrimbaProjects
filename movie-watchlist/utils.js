const feed = document.getElementById('films');

function clearFeed(){
    if(document.querySelector("article.movie-card")){
        const children = document.querySelectorAll('article.movie-card');
        children.forEach(child=> child.parentNode.removeChild(child))
        document.querySelector(".watermark").style.display = "block"
    }
}


function getMovies(movieArr, htmlId){
        const addedClass = ["watchlist-btn", "added"]
        movieArr.map(id =>{
        fetch(`https://www.omdbapi.com/?apikey=987dfd51&i=${id}&plot=short&`)
            .then(res => res.json())
            .then(data =>{
                
                const {Poster, Title, Genre, Plot, Runtime} = data
                const Rating = data.Ratings[0].Value.slice(0,3)

                const movieArticle = document.createElement("article")
                movieArticle.classList.add('movie-card')
                movieArticle.setAttribute('id', `${id}`)

                movieArticle.innerHTML = `
                    <img src=${Poster} alt="" class="movie-img">
                    <div class="movie-info-outer">
                        <div class="movie-header">
                            <h3 class="movie-title">${Title}</h3>
                            <div class="rating-box">
                                <img src="/images/star.png" alt="">
                                <span class="rating">${Rating}</span>
                            </div>
                        </div>
                        <div class="movie-info">
                            <span class="duration">${Runtime}</span>
                            <span class="genre">${Genre}</span>
                            <button 
                            class='${addedClass[0]} ${htmlId ? addedClass[1]: ""}'
                            id="addToWatchlist"
                            data-id=${id}
                            >
                                <img src="/images/removeico.png" alt="" class="remove-class">
                                <img src="/images/cross-btn.png" alt="" class="add-class">
                                <i class="fa-solid fa-minus"></i>
                                <span class="add-class">Watchlist</span>
                                <span class="remove-class">Remove</span>
                            </button>
                        </div>
                        <p class="movie-body">
                            ${Plot}
                        </p>
                    </div>
                `
                feed.append(movieArticle)
            })
    })
}

function addToWatchlist(e){
    let movieId = e.target.dataset.id
    let localWatchlist = JSON.parse(localStorage.getItem('watchlist'))
    if(localWatchlist === null){
        localWatchlist = [movieId]
    }else{
        let movieIx = localWatchlist.indexOf(movieId);
        if(movieIx >= 0){
            localWatchlist.splice(movieIx, 1)
        }else{
            localWatchlist.push(movieId);
        }
    }
        localStorage.setItem('watchlist', JSON.stringify(localWatchlist));
}

export {getMovies, addToWatchlist, clearFeed}