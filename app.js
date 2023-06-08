function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

const modalWindow = document.getElementById('modal-window')
const modalHome = document.getElementById('modal-1')
const modalAway = document.getElementById('modal-2')
const submitBtnHome = document.getElementById('btn-el')
const submitBtnStart = document.getElementById('btn-el-start')
const homeTeamInput = document.getElementById('home-team-input')
const homeTeamName = document.getElementById('home-team-el')
const awayTeamInput = document.getElementById('away-team-input')
const awayTeamName = document.getElementById('away-team-el')



submitBtnHome.addEventListener("click", function(){
    let homeTeamEntered = homeTeamInput.value    

    if (homeTeamInput.value === "") {
        alert('Enter a name for the home team')
    }
    else{
        homeTeamName.textContent = homeTeamEntered
        modalHome.style.display = 'none'
        modalAway.style.display = 'block'
    }
    
})

submitBtnStart.addEventListener("click", function() {
    let awayTeamEntered = awayTeamInput.value

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