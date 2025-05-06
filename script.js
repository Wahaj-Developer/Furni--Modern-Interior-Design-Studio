
         //   Button for respnsiveness 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
   nav.classList.add('scrolled');
   } else {
        nav.classList.remove('scrolled');
    }
});

//            Slide for testimonial

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("dot");

         
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

         
  // Hide all slides

    for (let i = 0; i < slides.length; i++) {
             
    slides[i].classList.remove("active");
             
    }

    // Deactivate all dots
         
  for (let i = 0; i < dots.length; i++) {
           
        dots[i].classList.remove("active");
           
    }       


         
