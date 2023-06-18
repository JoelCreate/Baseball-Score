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

function minusOneHome() {
  homeScore -= 1
  homeTeamPoints.textContent = homeScore
}

function minusOneAway() {
  awayScore -= 1
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




// Inning Increment and Decrement Below

const addInningBtn = document.getElementById("plus-inning-btn")
const minusInningBtn = document.getElementById("minus-inning-btn")
const topOfInningArrow = document.getElementById("top-inning-arrow")
const bottomOfInningArrow = document.getElementById("bottom-inning-arrow") 

bottomOfInningArrow.style.display = "none"

let inningCount = document.getElementById("inning-count")
let inningStart = 1
let inningButtonClickCount = 0

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
  if(bottomOfInningArrow.style.display === "block") {
     bottomOfInningArrow.style.display = "none"
     topOfInningArrow.style.display = "block"
  } else {
    topOfInningArrow.style.display = "none"
    bottomOfInningArrow.style.display = "block"      
  }
}

function incrementInningEveryTwoClicks() {
    inningStart +=1
    inningCount.textContent = inningStart
}

function decrementInningEveryTwoClicks() {
  inningStart -=1
  inningCount.textContent = inningStart
}

addInningBtn.addEventListener("click", function(){
  inningButtonClickCount++

  if(inningButtonClickCount === 2) {
    incrementInningEveryTwoClicks()
    inningButtonClickCount = 0
  }
    
})

minusInningBtn.addEventListener("click", function(){
  inningButtonClickCount++

  if(inningButtonClickCount === 1) {
    decrementInningEveryTwoClicks()    
  } else if (inningButtonClickCount === 2) {
    inningButtonClickCount = 0  
  }

  // if (inningCount.textContent <= 1) {
  //     inningStart = 1
  //     inningButtonClickCount = 0
  // }

})


// Displaying Count of Balls, Strikes and Outs 

//Balls Count
const ballsEl = document.getElementById("balls-el")
const ballOne = document.getElementById("ball1")
const ballTwo = document.getElementById("ball2")
const ballThree = document.getElementById("ball3")
const ballFour = document.getElementById("ball4")

let ballClickCount = 0

function handleCountClickBalls(){
  ballClickCount++    

    if(ballClickCount === 1) {
      ballOne.classList.add("count-dots-active")
    } else if (ballClickCount === 2) {
      ballTwo.classList.add("count-dots-active")
    } else if (ballClickCount === 3) {
      ballThree.classList.add("count-dots-active")
    } else if (ballClickCount === 4) {
      ballFour.classList.add("count-dots-active")
    } else if (ballClickCount === 5) {
      ballOne.classList.remove("count-dots-active")
      ballTwo.classList.remove("count-dots-active")
      ballThree.classList.remove("count-dots-active")
      ballFour.classList.remove("count-dots-active")
      ballClickCount = 0
    } 
}

ballsEl.addEventListener("click", handleCountClickBalls)

//Strikes Count
const strikesEl = document.getElementById("strikes-el")
const strikeOne = document.getElementById("strike1")
const strikeTwo = document.getElementById("strike2")
const strikeThree = document.getElementById("strike3")

let strikeClickCount = 0

function handleCountClickStrikes(){
  strikeClickCount++    

    if(strikeClickCount === 1) {
      strikeOne.classList.add("count-dots-active")
    } else if (strikeClickCount === 2) {
      strikeTwo.classList.add("count-dots-active")
    } else if (strikeClickCount === 3) {
      strikeThree.classList.add("count-dots-active")
    } else if (strikeClickCount === 4) {
      strikeOne.classList.remove("count-dots-active")
      strikeTwo.classList.remove("count-dots-active")
      strikeThree.classList.remove("count-dots-active")
      strikeClickCount = 0
    } 
}

strikesEl.addEventListener("click", handleCountClickStrikes)

//Outs Count
const outsEl = document.getElementById("outs-el")
const outOne = document.getElementById("out1")
const outTwo = document.getElementById("out2")
const outThree = document.getElementById("out3")

let outClickCount = 0

function handleCountClickOuts(){
  outClickCount++    

    if(outClickCount === 1) {
      outOne.classList.add("count-dots-active")
    } else if (outClickCount === 2) {
      outTwo.classList.add("count-dots-active")
    } else if (outClickCount === 3) {
      outThree.classList.add("count-dots-active")
    } else if (outClickCount === 4) {
      outOne.classList.remove("count-dots-active")
      outTwo.classList.remove("count-dots-active")
      outThree.classList.remove("count-dots-active")
      outClickCount = 0
    } 
}

outsEl.addEventListener("click", handleCountClickOuts)


//Reload page of entire app

function startOver() {
  location.reload(true)
}