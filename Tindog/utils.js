

function toggleBadge(id){
    let badge = id === "accept" ? "badge-like" : "badge-nope";
    let badgeEl = document.getElementById(badge);
    badgeEl.classList.toggle("show-badge")
}

function swipeAnimation(id){
    if(id === "accept"){
        document.getElementById("user-info-section").classList.toggle('swipeRight')
    }else{
        document.getElementById("user-info-section").classList.toggle('swipeLeft')
    }
    
}

export {toggleBadge, swipeAnimation}