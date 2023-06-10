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

        homeTeamVS.textContent = homeTeamEntered
        awayTeamVS.textContent = awayTeamEntered
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

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

let currentIndex = 0
let startX = 0
let isDragging = false

// Function to show the current slide and update the active dot
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = 'none'
    })
  
    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove('active')
    })
  
    // Show the current slide and add active class to the corresponding dot
    slides[index].style.display = 'block'
    dots[index].classList.add('active')
  }
  
  // Function to handle slide navigation when a dot is clicked
  function handleDotClick(index) {
    showSlide(index)
    currentIndex = index
  }
  
  // Attach click event listeners to each dot
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      handleDotClick(index)
    })
  })
  
  // Show the initial slide
  showSlide(currentIndex)
  
  // Touch event handlers
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    isDragging = true
  })
  
  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return
  
    const currentX = e.touches[0].clientX
    const diffX = currentX - startX
  
    // Swipe left
    if (diffX < -50) {
      if (currentIndex < slides.length - 1) {
        currentIndex++
        showSlide(currentIndex)
      }
    }
  
    // Swipe right
    if (diffX > 50) {
      if (currentIndex > 0) {
        currentIndex--
        showSlide(currentIndex)
      }
    }
  
    // Prevent scrolling while dragging
    e.preventDefault()
  })
  
  slider.addEventListener('touchend', () => {
    isDragging = false
  })


const ballsEl = document.getElementById("balls-el")

ballsEl.addEventListener("click", function(e){
    e.target.classList.add('count-dot-active')
})
