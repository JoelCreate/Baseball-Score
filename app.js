screen.orientation.lock()

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}  

const modalWindow = document.getElementById('modal-window')
const modalHome = document.getElementById('modal-1')
const modalAway = document.getElementById('modal-2')
const submitBtnHome = document.getElementById('btn-el-home')
const submitBtnStart = document.getElementById('btn-el-start')
const homeTeamInput = document.getElementById('home-team-input')
const homeTeamName = document.getElementById('home-team-el')
const awayTeamInput = document.getElementById('away-team-input')
const awayTeamName = document.getElementById('away-team-el')
const homeTeamVS = document.getElementById('home-team-vs')
const awayTeamVS = document.getElementById('away-team-vs')



submitBtnHome.addEventListener("click", function(){      
  let homeTeamEntered = homeTeamInput.value  

  if (homeTeamInput.value === "") {
      alert('Enter a name for the home team')
  }
  else {
      homeTeamName.textContent = homeTeamEntered
      modalHome.style.display = 'none'
      modalAway.style.display = 'block'
  }
     
})

submitBtnStart.addEventListener("click", function(){    
  let awayTeamEntered = awayTeamInput.value

  if (awayTeamInput.value === "") {
        alert('Please enter a name for the away team')
    }
    else {
        awayTeamName.textContent = awayTeamEntered
        modalWindow.style.display = 'none'
    }

})



// Score For home and away teams
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



const countDots = document.querySelectorAll('.count-dots')

let countIndex = 0

function addClassToCurrentDiv() {
    
    for (let i = 0; i < countDots.length; i++){
        countDots[i].classList.add('count-dot-active')
    }
}

// function removeClassFromAllDivs() {
//     countDots.forEach((div) => {
//         div.classList.remove('count-dot-active')
//     })
// }

function handleClick() {
    
    addClassToCurrentDiv()
    
}

const ballsEl = document.getElementById("balls-el")
ballsEl.addEventListener("click", handleClick)


// Inning Increment and Decrement Below

const addInningBtn = document.getElementById("plus-inning-btn")
const minusInningBtn = document.getElementById("minus-inning-btn")
const topOfInningArrow = document.getElementById("top-inning-arrow")
const bottomOfInningArrow = document.getElementById("bottom-inning-arrow") 

let inningCount = document.getElementById("inning-count")
let plusMinusInning = 1
let inningClickCount = 0

function addInning(){
    if(bottomOfInningArrow.style.display === "none") {
       bottomOfInningArrow.style.display = "block"
       topOfInningArrow.style.display = "none"
    } else {
      topOfInningArrow.style.display = "block"
      bottomOfInningArrow.style.display = "none"      
    }
}

function minusInning(){
  if(bottomOfInningArrow.style.display === "none") {
     bottomOfInningArrow.style.display = "block"
     topOfInningArrow.style.display = "none"
  } else {
    topOfInningArrow.style.display = "block"
    bottomOfInningArrow.style.display = "none"      
  }
}

function handleInningClickCountPlus () {
  //  inningClickCount++

  //  if (inningClickCount === 1) {      
  //       topOfInningArrow.style.display = "none" 
  //       bottomOfInningArrow.style.display = "block"     
  //   }
  //   else if (inningClickCount === 2) {      
  //       plusMinusInning += 1
  //       inningCount.textContent = plusMinusInning      
  //   } else {
  //      plusMinusInning += 1
  //   }

    if(inningClickCount === 1) {

    }

}

addInningBtn.addEventListener("click", handleInningClickCountPlus)

function handleInningClickCountMinus () {
   inningClickCount--

   if (inningClickCount === 1) {      
        plusMinusInning -= 1
        inningCount.textContent = plusMinusInning 
        topOfInningArrow.style.display = "block"
        bottomOfInningArrow.style.display = "none"      
    } else if (inningClickCount === 2) {      
        plusMinusInning -= 1
        inningCount.textContent = plusMinusInning      
    }

}

minusInningBtn.addEventListener("click", handleInningClickCountMinus)

