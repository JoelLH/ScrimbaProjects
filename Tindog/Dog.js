// Create the Dog class here


class Dog {
    constructor(data){
        Object.assign(this, data)
        this.dogHtml = this.getDogHtml();
    }

    setMatchStatus(id){
        this.hasBeenSwiped = true;
        this.hasBeenLiked = id === "accept" ? true : false;
    }

    getDogHtml(){
        const{name, avatar, age, bio} = this
        return `
                <img class="user-img" src="/${avatar}" alt="User" >
                <div class="user-description">
                    <h3 class="user-info">${name}, ${age}</h3>
                    <p class="user-bio">
                        ${bio}
                    </p>
                </div>
                `
    }
}

export default Dog