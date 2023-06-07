function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

const slider = document.querySelector('.slider')
const sliderWrapper = document.querySelector('.slider-wrapper')
const pagination = document.querySelectorAll('.pagination span')
let slideId = 1

function slide(id){
   sliderWrapper.getElementsByClassName.left = -100 * id + "%" 

    pagination.foeEach(page => {
        page.classList.remove('active')
    })

    pagination[id].classList.add('active')

}