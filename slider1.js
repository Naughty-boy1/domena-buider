// slider
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  const slidesToShow =1;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * (400 / slidesToShow)}px)`;
}

function autoSlide() {
  moveSlide(1);
}
// function autoSlide() {
//   moveSlide(+1);
// }

setInterval(autoSlide, 5000); // Change slide every 5 seconds



var video = document.getElementById("myVideo");
        var button = document.getElementById("playPauseButton");

        video.addEventListener("click", function() {
            togglePlayPause();
        });

        function togglePlayPause() {
            if (video.paused) {
                video.play();
                button.style.display = "none";
            } else {
                video.pause();
                button.style.display = "block";
            }
        }


        // scrol back to the top
        // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}




// header js

let lastScrollTop = 0;
const header = document.getElementById('header');
let isScrolling;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    clearTimeout(isScrolling);

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-120px'; // Adjust this value based on your header height
    } else {
        // Scrolling up
        header.style.top = '0';
    }

    if (scrollTop > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;

    // Make header static if not scrolling
    isScrolling = setTimeout(() => {
        header.style.top = '0';
    }, 1000); // Delay in milliseconds (1000ms = 1s)
});


// mobile screen

const toggleBtn=document.querySelector(".sidebar-toggle");
const closeBtn=document.querySelector(".close-btn");
const sidebar=document.querySelector(".sidebar");
const body = document.body;
toggleBtn.addEventListener("click",function(){
  // sidebar.classList.contains("sidebar");
  // console.log(show)
  // method one
  // if (sidebar.classList.contains("show-sidebar")){
  //   sidebar.classList.remove("show-sidebar");
  // }else{
  //   sidebar.classList.add("show-sidebar");
  // }
  // method two
  sidebar.classList.toggle("show-sidebar")
  if (sidebar.classList.contains('show-sidebar')) {
    body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }
})

closeBtn.addEventListener("click",function(){
  sidebar.classList.toggle("show-sidebar")
  if (sidebar.classList.contains('close-btn')) {
    body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }
})