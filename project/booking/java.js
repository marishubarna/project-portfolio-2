const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{

    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    
    hamburger.classList.toggle("toggle");
});

const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let counter = 0;

function slide() {
   
    images.forEach(img => {
        img.classList.remove('active');
    });

    
    counter++;
    if (counter === images.length) {
        counter = 0;
    }

    
    images[counter].classList.add('active');
}

setInterval(slide, 5000);
      
const hotelBtn = document.getElementById("hotel-btn");
const carBtn = document.getElementById("car-btn");
const flightBtn = document.getElementById("flight-btn");

const hotelSection = document.getElementById("hotel-section");
const carSection = document.getElementById("car-section");
const flightSection = document.getElementById("flight-section");


hotelBtn.addEventListener("click", () => {
  hotelSection.classList.add("active");
  carSection.classList.remove("active");
  flightSection.classList.remove("active");

  hotelBtn.classList.add("active");
  carBtn.classList.remove("active");
  flightBtn.classList.remove("active");
});

carBtn.addEventListener("click", () => {
  hotelSection.classList.remove("active");
  carSection.classList.add("active");
  flightSection.classList.remove("active");

  hotelBtn.classList.remove("active");
  carBtn.classList.add("active");
  flightBtn.classList.remove("active");
});

flightBtn.addEventListener("click", () => {
  hotelSection.classList.remove("active");
  carSection.classList.remove("active");
  flightSection.classList.add("active");

  hotelBtn.classList.remove("active");
  carBtn.classList.remove("active");
  flightBtn.classList.add("active");
});