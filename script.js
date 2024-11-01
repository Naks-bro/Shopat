// Example code for handling click events on call-to-action buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Handle button click event
    event.preventDefault();
    // Add your logic here for the specific action you want to perform
  });
});

// Example code for a countdown timer for limited-time offers
const endTime = new Date('2023-12-31T23:59:59'); // Set the end time for the offer

function updateCountdown() {
  const now = new Date();
  const timeRemaining = endTime - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the remaining time on the page
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeRemaining <= 0) {
    // Handle the end of the offer if timeRemaining reaches zero
    clearInterval(countdown);
    // Add your logic here for the end of the offer
  }
}

// Start the countdown
const countdown = setInterval(updateCountdown, 1000);

let slideIndex = 0;
let timer;

// Function to change slides
function navigateSlides(n) {
  clearTimeout(timer); // Clear the timer when manually changing slides
  showSlides(slideIndex += n);
  startTimer(); // Restart the timer after manually changing slides
}

// Function to change to a specific slide
function currentSlide(n) {
  clearTimeout(timer); // Clear the timer when manually changing slides
  showSlides(slideIndex = n - 1);
  startTimer(); // Restart the timer after manually changing slides
}

// Function to start the timer
function startTimer() {
  clearTimeout(timer); // Clear any existing timer
  timer = setTimeout(function() {
    navigateSlides(1); // Automatically change to the next slide after a specified time (in milliseconds)
  }, 5000); // Change slide every 5 seconds (adjust as needed)
}

// Function to display the slides
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide"); // Remove the animation class from all slides
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("slide"); // Add the animation class to the current slide
  dots[slideIndex].className += " active";

  startTimer(); // Start the timer for automatic slide transition
}

// Add the following code for navigating slides using the arrows

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
  navigateSlides(-1);
});

nextButton.addEventListener("click", () => {
  navigateSlides(1);
});

// Start the slideshow
showSlides(slideIndex);


