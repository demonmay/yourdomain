document.addEventListener("DOMContentLoaded", function() {
    var contactButton = document.getElementById("contactButton");
    var popupForm = document.getElementById("popupForm");
    // var closeBtn = document.querySelector(".close-btn");

    contactButton.addEventListener("click", function() {
        popupForm.style.display = "flex";
    });

    // closeBtn.addEventListener("click", function() {
    //     popupForm.style.display = "none";
    // });

    window.addEventListener("click", function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = "none";
        }
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


document.querySelectorAll('.content-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.image-container img').forEach(img => {
            img.classList.remove('active');
        });
        const imageId = this.getAttribute('data-image');
        document.getElementById(imageId).classList.add('active');
    });
});
