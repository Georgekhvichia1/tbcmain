const conditions = document.querySelector('#conditions');
const BtnX = document.getElementById("BtnX");
const closeBtn = document.querySelector('#close-Btn');
const sideText = document.querySelector('#side-text');




// Vertical Scroll
// Toggle the 'active' class on 'sideText' and 'conditions' elements when 'conditions' is clicked,
// remove the 'active' class from 'sideText' when 'closeBtn' or 'crossButton' is clicked.

// გადართეთ 'აქტიური' კლასი ელემენტებზე 'sideText' და 'conditions' როდესაც დააჭირეთ 'conditions',
// წაშალეთ "აქტიური" კლასი "sideText"-დან, როდესაც დააჭირეთ "closeBtn" ან "crossButton".

conditions .addEventListener('click', () => {
    sideText.classList.toggle('active');
    conditions .classList.toggle('active');
    

});


closeBtn.addEventListener('click', () => {
    sideText.classList.remove("active");
});



BtnX.addEventListener('click', () => {
    sideText.classList.remove("active");
});





//scroll-logos 
// Set up a simple slider functionality with next, previous, and goToSlide actions,
// updating the slide position, pagination dots, and initializing on document load.
// შექმენით ძირითადი სლაიდერი ლოგოებისთვის:
// მიეცით საშუალება მომხმარებლებს გადაადგილდნენ წინ, უკან ან გადახტეს კონკრეტულ ლოგოზე,
// თვალყური ადევნეთ სლაიდის პოზიციას, განაახლეთ პაგინაცია და ინიციალიზება გვერდის ჩატვირთვაზე.

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const paginationDots = document.querySelectorAll('.slider-pagination ul li'); 
    const slideCont = document.getElementById('slider-container');
    let index = 0;

    window.nextSlide = function() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePosition();
    }

    window.previousSlide = function() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slideCont.clientWidth;
        const newTransformValue = -slideWidth * index;
        slideCont.style.transform = `translateX(${newTransformValue}px)`;
        updatePagination();
    }

    window.goToSlide = function(slideIndex) {
        index = slideIndex;
        updateSlidePosition();
    }

    function updatePagination() {
        paginationDots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    
    updatePagination();




// Set an interval to automatically advance slides every 10 seconds,
// and reset the interval on user interaction with left or right arrows.
// დააყენეთ ინტერვალი სლაიდების ავტომატური წინსვლისთვის ყოველ 10 წამში,
// და გადააყენეთ მომხმარებლის ინტერაქციის ინტერვალი მარცხენა ან მარჯვენა ისრებით.

    let slideInterval = setInterval(nextSlide, 10000); // ყოველ 10 წამში იცვლება სლაიდი

    // Clear interval on user interaction with arrows and restart
    document.querySelector('.left-arrow').addEventListener('click', function() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 10000);
    });

    document.querySelector('.right-arrow').addEventListener('click', function() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 10000);
    });
});


// Implement interactive accordion functionality:
// On header click, toggle active class, display or hide accordion content, and close other open sections.


//accordion card 
document.addEventListener('DOMContentLoaded', function() {
    const head = document.querySelectorAll('.accordion-header');
    head.forEach(header => {
        header.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;

            // Toggle active class on the header
            this.classList.toggle('active');

            // Toggle the accordion content
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
            } else {
                accordionContent.style.display = 'block';
            }

            // Close other open accordion sections
            head.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.display = 'none';
                }
            });
        });
    });
});









