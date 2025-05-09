
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

   // Show current slide and activate dot
         
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Initialize event listeners

document.addEventListener('DOMContentLoaded', function() {

    // Button controls
         
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));                       

document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    
    // Dot controls
         
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
dot.addEventListener('click', () => currentSlide(index + 1));
    });
});

             //            Alert interactivity for whole page


// Main alert controller function

function setupAllAlerts() {
         
  // Alert for icons (user and cart)

  const alertIcons = document.querySelectorAll('.alert');
  alertIcons.forEach(icon => {
   icon.addEventListener('click', (e) => {
      e.preventDefault();
              if (icon.classList.contains('fa-user')) {
        showCustomAlert('Server is down😴');
      } else if (icon.classList.contains('fa-shopping-cart')) {

                              showCustomAlert('This feature is currently under maintenance. Please check back later!😥');
      }
    });
  });
         

  // Alert for shop button
  document.querySelector('.shop.btn-primary')?.addEventListener('click', (e) => {
    e.preventDefault();
    showCustomAlert('Our shop is getting a quick makeover! 🛠️ Please check back soon.');
  });

  
  // Alert for explore button
  document.querySelector('.explore.btn-secondary')?.addEventListener('click', (e) => {
   e.preventDefault();
    showCustomAlert('Our exploration features are coming soon! Stay tuned for exciting updates.');
  });


  // Alert for learn button
  document.querySelector('.Learn')?.addEventListener('click', (e) => {
    e.preventDefault();


  // Alert for learn button
  document.querySelector('.Learn')?.addEventListener('click', (e) => {
    showCustomAlert('Our learning resources are coming soon! Stay tuned for educational content.');
  });

 
  
  // Alert for feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      showCustomAlert("❌ Unavailable\nThis service is not available today.🙁");
    });
  });
          

  // Alert for add-to-cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      showCustomAlert("❌ Unavailable\n This is out of stoke.😥");
    });
  });


  // Alert for service boxes
  document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('click', () => {
      showCustomAlert("No");
    });
  });
  

  // New alert for room-box
  document.querySelectorAll('.room-box').forEach(box => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      showCustomAlert("This room set is currently unavailable for purchase. Please check back later!");
    });
  });
}


// Universal alert function with event listener cleanup
function showCustomAlert(message) {
  const alertBox = document.getElementById('customAlert');
  const alertMessage = document.getElementById('alertMessage');
  const okBtn = document.getElementById('alertOkBtn');
                                                       
   // Clone button to prevent duplicate event listeners
  const newOkBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOkBtn, okBtn);

 
  alertMessage.textContent = message;
  alertBox.style.display = 'flex';
  

  newOkBtn.addEventListener('click', () => {
    alertBox.style.display = 'none';
  });
}


// Initialize all alerts when DOM is loaded
document.addEventListener('DOMContentLoaded', setupAllAlerts);

         
         
