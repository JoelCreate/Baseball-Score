function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

const modalHome = document.getElementById('modal-1')
const modalAway = document.getElementById('modal-2')
const homeTeam = document.getElementById('home-team-el')
const submitBtnHome = document.getElementById('btn-el')
const homeTeamInput = document.getElementById('home-team-input')
const homeTeamName = document.getElementById('home-team-el')


submitBtnHome.addEventListener("click", function(){
    let homeTeamEntered = homeTeamInput.value

    modalHome.style.display = 'none'
    modalAway.style.display = 'block'
    homeTeamName.textContent = homeTeamEntered
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