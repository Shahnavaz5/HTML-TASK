let index = 0;

// Function to show slides
function showSlide() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${index * 25}%)`;
}

// Function for next slide
function nextSlide() {
    index++;
    showSlide();
}

// Function for previous slide
function prevSlide() {
    index--;
    showSlide();
}

// Auto-slide every 4 seconds
setInterval(() => {
    nextSlide();
}, 4000);

// Attach event listeners AFTER DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});
