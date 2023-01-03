// Remember to import the data and Dog class!
// Remember to import the data and Dog class!
import dogsData from './data.js'
import Profile from './Dog.js'

let currentDogIndex = 0
let currentDog = new Profile(dogsData[currentDogIndex])

let nopeBtn = document.getElementById('nope-btn').addEventListener('click', no)
let likeBtn = document.getElementById('like-btn').addEventListener('click', yes)

function enableBtns(){
document.getElementById('like-btn').disabled = false
document.getElementById('nope-btn').disabled = false
}
function disableBtns(){
document.getElementById('like-btn').disabled = true
document.getElementById('nope-btn').disabled = true
}

function getNextDog(){
    currentDogIndex+=1
    currentDog = new Profile(dogsData[currentDogIndex])
    render()
    if(currentDogIndex >= dogsData.length){
        noMoreDogs()
        console.log("no more dogs available")
    }
}

function yes(){
    currentDog.dogHasBeenSwiped(true, true, false)
    disableBtns()
   setTimeout(function(){getNextDog(), 
    document.getElementById('badge-like').style.display = 'none'
    enableBtns()} , 2000) 

}
function no(){
    currentDog.dogHasBeenSwiped(true, false, true)
    disableBtns()
   setTimeout(function(){getNextDog(), 
    document.getElementById('badge-nope').style.display = 'none'
    enableBtns()} , 2000) 
}

function noMoreDogs(){
    document.getElementById('main').innerHTML = `<div class="noMore"><h3>There are no more Dogs in your area. Check back in later!</h3></div>` 
    
}
function render(){
    document.getElementById('profile-card').innerHTML = currentDog.getDogProfileHtml()
}


render()