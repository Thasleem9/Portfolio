const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');

menuIcon.addEventListener('click' , () =>
{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');  // Remove icon toggle
        navBar.classList.remove('active'); // Remove active class
    });
});





function f1(){
    var a=document.getElementById("t1")
    var b=document.getElementById("nt1")
    var c=document.getElementById("w1")

    a.style.display="flex";
    a.style.justifyContent="space-around";
    a.style.columnGap="100px";
    a.style.flexWrap="wrap";
    a.style.flexBasis="25%";
    b.style.display="none";
    c.style.display="none";
}


function f2(){
    var a=document.getElementById("t1")
    var b=document.getElementById("nt1")
    var c=document.getElementById("w1")

    a.style.display="none";
    b.style.display="flex";
    b.style.justifyContent="space-around";
    b.style.columnGap="100px";
    b.style.flexWrap="wrap";
    b.style.flexBasis="25%";
    c.style.display="none";
}

function f3(){
    var a=document.getElementById("t1")
    var b=document.getElementById("nt1")
    var c=document.getElementById("w1")

    a.style.display="none";
    b.style.display="none";
    c.style.display="flex";
    c.style.justifyContent="space-around";
    c.style.columnGap="100px";
    c.style.flexWrap="wrap";
    c.style.flexBasis="25%";
}


const rm=document.getElementById('readmore');
const sl=document.getElementById('showless');
const bd=document.getElementById('innercheck');

function hi(){
    console.log('hi');
    
}

document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.querySelector(".skillsmain");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal"); // Add class to start animation
            } else {
                entry.target.classList.remove("reveal"); // Remove class when leaving view
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});


document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.querySelector(".technicalsmain");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal"); // Add class to start animation
            } else {
                entry.target.classList.remove("reveal"); // Remove class when leaving view
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imageSlide = document.querySelector('.portfolio-carousel .img-slide');
const totalSlides = document.querySelectorAll('.portfolio-carousel .img-items').length;
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;

const activePortfolio = () => {
    imageSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Correctly enable/disable buttons
    arrowLeft.classList.toggle('disabled', index === 0);
    arrowRight.classList.toggle('disabled', index === totalSlides - 1);

    // Ensure portfolioDetails exists before modifying classes
    if (portfolioDetails.length > 0) {
        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        portfolioDetails[index].classList.add('active');
    }
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
    } else {
        index = 0; // Loop back to the first image
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - 1; // Loop back to the last image
    }
    activePortfolio();
});

// Initialize the correct state
activePortfolio();


document.getElementById("sendMessage").addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
});

