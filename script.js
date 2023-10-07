
// The Countdown clock
var countDownDate = new Date("Dec 17, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00"; 
    }

},1000);

// Get all the navigation links
const navlinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove the 'active' classfrom all links
        navlinks.forEach(link =>link.classList.remove('active'));

        // Add the 'active' class to the clickedLink
        e.target.classList.add('active');
    });
});

let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider-slide');
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % 3;
        showSlide(currentSlide);
    }

    // Automatic sliding every 3 seconds
    setInterval(showNextSlide, 8000);

    // Menu button
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.links');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            menu.style.display = 'flex';
            
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            menu.style.display = 'none';
        }
    });

    // Video content on the Home Page
    var video = document.getElementById("myVideo");

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Add an event listener to the video element
video.addEventListener('click', togglePlayPause());

// Custom Play/Pause Button
var playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener('click', function() {
    togglePlayPause();
});

// Custom Progress Bar
var progressBar = document.getElementById("progressBar");

video.addEventListener('timeupdate', function() {
    var value = (video.currentTime / video.duration) * 100;
    progressBar.style.width = value + "%";
});

// Fullscreen Functionality
var fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener('click', function() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
});

// Volume Control
var volumeSlider = document.getElementById("volumeSlider");

volumeSlider.addEventListener('input', function() {
    video.volume = volumeSlider.value;
});



