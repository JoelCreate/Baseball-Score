function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

const modalWindow = document.getElementById('modal-window')
const modalHome = document.getElementById('modal-1')
const modalAway = document.getElementById('modal-2')
const modalVS = document.getElementById('modal-3')
const submitBtnHome = document.getElementById('btn-el-home')
const submitBtnAway = document.getElementById('btn-el-away')
const submitBtnStart = document.getElementById('btn-el-start')
const homeTeamInput = document.getElementById('home-team-input')
const homeTeamName = document.getElementById('home-team-el')
const awayTeamInput = document.getElementById('away-team-input')
const awayTeamName = document.getElementById('away-team-el')
const homeTeamVS = document.getElementById('home-team-vs')
const awayTeamVS = document.getElementById('away-team-vs')

let homeTeamEntered = homeTeamInput.value
let awayTeamEntered = awayTeamInput.value

let homeTeamPoints = document.getElementById('home-team-points')
let awayTeamPoints = document.getElementById('away-team-points')

let homeScore = 0
let awayScore = 0

function plusOneHome() {
    homeScore += 1
    homeTeamPoints.textContent = homeScore
}

function plusOneAway() {
    awayScore += 1
    awayTeamPoints.textContent = awayScore
}

submitBtnHome.addEventListener("click", function(){        

    if (homeTeamInput.value === "") {
        alert('Enter a name for the home team')
    }
    else{
        homeTeamName.textContent = homeTeamEntered
        modalHome.style.display = 'none'
        modalAway.style.display = 'block'
    }
    
})

submitBtnAway.addEventListener("click", function(){    

    if (awayTeamInput.value === "") {
        alert('Please enter a name for the away team')
    }
    else {
        awayTeamName.textContent = awayTeamEntered
        
        modalAway.style.display = 'none'
        modalVS.style.display = 'block'

        homeTeamVS.textContent += homeTeamEntered
        awayTeamVS.textContent += awayTeamEntered
    }
    
})

submitBtnStart.addEventListener("click", function() {

    if (awayTeamInput.value === "") {
        alert('Please enter a name for the away team')
    }
    else {
        awayTeamName.textContent = awayTeamEntered
        modalWindow.style.display = 'none'
    }
    
})




// const slider = document.querySelector('.slider')
// const sliderWrapper = document.querySelector('.slider-wrapper')
// const pagination = document.querySelectorAll('.pagination span')
// let slideId = 1

// function slide(id){
//    sliderWrapper.getElementsByClassName.left = -100 * id + "%" 

//     pagination.foeEach(page => {
//         page.classList.remove('active')
//     })

//     pagination[id].classList.add('active')

// }