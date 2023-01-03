// Create the Dog class here

import dogs from './data.js'

class Profile {
    constructor(data){
        Object.assign(this,data)
    }
    dogHasBeenSwiped(swiped, liked, nope){
        this.hasBeenSwiped = swiped
        this.hasBeenLiked = liked
        this.hasBeenNoped = nope
        if(this.hasBeenLiked === true){
            document.getElementById('badge-like').style.display = 'inline'
        }
        if(this.hasBeenNoped === true){
            document.getElementById('badge-nope').style.display = 'inline'
        }
    }
    getDogProfileHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, hasBeenNoped} = this
        return `
                <img src="./${avatar}" class="profile-img">
                <span class="name">${name}, ${age}</span>
                <span class="bio">${bio}</span>
                 `
    }

}

export default Profile 