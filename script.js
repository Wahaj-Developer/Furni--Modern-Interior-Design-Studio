
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
