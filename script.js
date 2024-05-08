window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.pageYOffset > 80) {
        document.getElementById("navbar").classList.add("nav-scrolled");
    } else {
        document.getElementById("navbar").classList.remove("nav-scrolled");
    }
}


let text = document.getElementById('text1');
let sah2 = document.getElementById('sah2');
let sah1 = document.getElementById('sah1');
let p2 = document.getElementById('2p');
let c1 = document.getElementById('c1');
let door=document.getElementById('door');

window.addEventListener('scroll', () => {
    console.log("Scrolling...");
    let value = window.scrollY;
    console.log("Scroll value:", value);
    text.style.left = value * -1.5 + 'px';
    //sah2.style.marginTop = value * -0.5 + 'px';
   // sah1.style.left = value * 0.5 + 'px';
    p2.style.marginTop = value * 1.5 + 'px';
    let scale = 1 + (value * 0.002); 
    door.style.transform = `scale(${scale})`;

    
});


function openImageTab(text, image, title) {
    // Create a new tab
    var imageTab = window.open("", "_blank");

    // HTML content for the new tab
    var imageHTML = `
    <html>
    <head>
        <title>Image Details</title>
        <style>
            body {
                background-color: black;
                color: white;
                font-family: Arial, sans-serif;
                padding: 20px;
                margin: 0;
                overflow: hidden; /* Hide horizontal scrollbar */
            }
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                position: relative;
            }
            .text-container {
                width: 50%;
                text-align: justify;
                position: relative;
                z-index: 1;
            }
            img {
                max-width: 25%; /* Adjusted to take 1/4th of the tab */
                height: auto;
                position: absolute;
                left: 50%; /* Center horizontally */
                transform: translateX(-50%); /* Adjust for center alignment */
                animation: slideIn 1s forwards; /* Slide animation */
            }
            h2 {
                margin-bottom: 20px;
            }
            p {
                opacity: 1;
                transition: opacity 3s ease-in-out;
                margin-top: 20px; /* Added margin */
            }
            .play-button {
                position: absolute;
                top: 20px;
                right: 20px;
                background-color: transparent;
                color: white;
                border: none;
                cursor: pointer;
                outline: none;
                z-index: 2;
            }
            .play-button:hover {
                color: lightblue;
            }
            .paused {
                display: none;
            }
            .voice-select {
                position: absolute;
                top: 70px; /* Adjusted position */
                right: 20px;
                background-color: transparent;
                color: white;
                border: 1px solid white;
                padding: 5px;
                outline: none;
                z-index: 2;
            }
            .go-to-museum-button {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 100px; /* Increased width */
                height: 50px; /* Increased height */
                background-color: transparent; /* Transparent background */
                color: white;
                border: none;
                cursor: pointer;
                z-index: 2;
                transition: all 0.3s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 18px; /* Increased font size */
            }
            .go-to-museum-button:hover {
                background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white on hover */
            }
            .museum-card {
                position: fixed;
                bottom: 100px; /* Adjusted position */
                right: 100px; /* Adjusted position */
                max-width: 300px; /* Adjusted max width */
                height: auto; /* Adjusted to auto height */
                background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
                border-radius: 10px;
                padding: 10px;
                display: none;
                z-index: 3;
            }
            .museum-card img {
                width: 100%; /* Fill the width of the card */
                height: auto; /* Adjusted to auto height */
                object-fit: cover; /* Maintain aspect ratio and cover the entire space */
                border-radius: 10px; /* Rounded corners */
            }
            @keyframes slideIn {
                0% {
                    transform: translateX(-100%);
                    opacity: 0;
                }
                100% {
                    transform: translateX(0%);
                    opacity: 1;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="text-container">
                <h2>${title}</h2>
                <p>${text}</p>
            </div>
            <img src="${image}" alt="${title}">
            <button class="play-button" onclick="toggleSpeech('${text}', this)">&#9658;</button>
            <button class="play-button paused" onclick="toggleSpeech('${text}', this)">&#10074;&#10074;</button>
            <select class="voice-select" onchange="changeVoice(this)">
                <option value="Google UK English Female">Google UK English Female</option>
                <option value="Google UK English Male">Google UK English Male</option>
                <option value="Google US English">Google US English</option>
                <option value="Google español">Google español</option>
                <option value="Google français">Google français</option>
                <!-- Add more voice options as needed -->
            </select>
        </div>
        <button class="go-to-museum-button" onmouseover="showMuseumImage()" onmouseout="hideMuseumImage()" onclick="window.location.href = 'SmithsonianMuseum.html'">Go to Museum</button>
        <div class="museum-card" id="museumCard">
            <img src="museum.jpg" alt="Museum">
        </div>
        <script>
            var isPlaying = false;
            var isPaused = false;
            var speechSynthesis = window.speechSynthesis;
            var speechText;
            var speechPosition = 0; // Variable to keep track of the speech position

            // Wait for voices to be loaded
            window.speechSynthesis.onvoiceschanged = function() {
                // Create speech text here to ensure that voices are available
                speechText = new SpeechSynthesisUtterance();
            };

            function toggleSpeech(text, button) {
                if (!isPlaying) {
                    if (!speechText) {
                        speechText = new SpeechSynthesisUtterance();
                    }
                    speechText.text = text.substring(speechPosition); // Set the text to play from the current position
                    speechText.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
                    speechText.lang = 'en-US'; // Set language to English (US)
                    speechText.rate = 1.0; // Set rate of speech
                    speechText.pitch = 1.0; // Set pitch of speech
                    speechText.volume = 1.0; // Set volume of speech

                    speechText.addEventListener('end', function() {
                        isPlaying = false;
                        button.classList.remove('paused');
                        button.nextElementSibling.classList.add('paused');
                    });

                    speechSynthesis.speak(speechText);
                    button.classList.add('paused');
                    button.nextElementSibling.classList.remove('paused');
                    isPlaying = true;
                } else if (isPaused) {
                    speechSynthesis.resume();
                    button.classList.add('paused');
                    button.nextElementSibling.classList.remove('paused');
                    isPaused = false;
                } else {
                    speechSynthesis.pause();
                    button.classList.remove('paused');
                    button.nextElementSibling.classList.add('paused');
                    isPaused = true;
                }
            }

            // Event listener to update the speech position when paused
            speechSynthesis.addEventListener('pause', function() {
                if (isPlaying) {
                    isPaused = true;
                }
            });

            // Event listener to update the speech position when resumed
            speechSynthesis.addEventListener('resume', function() {
                if (isPaused) {
                    isPaused = false;
                }
            });

            function changeVoice(selectElement) {
                var selectedVoice = selectElement.value;
                speechText.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);
            }

            function showMuseumImage() {
                var museumCard = document.getElementById('museumCard');
                museumCard.style.display = 'block';
            }

            function hideMuseumImage() {
                var museumCard = document.getElementById('museumCard');
                museumCard.style.display = 'none';
            }
        </script>
    </body>
    </html>
    `;

    // Write the HTML content to the new tab
    imageTab.document.write(imageHTML);
}





var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: false, // Disable loop
    breakpoints: {
        768: {
            slidesPerView: 4, // Show 4 cards on smaller screens
        },
        1024: {
            slidesPerView: 5, // Show 5 cards on larger screens
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const aboutMeToggler = document.querySelector(".aboutMe");
const AboutMeCloseBtn = document.querySelector(".close-btn");
const bookingCards = document.querySelectorAll(".booking-card");
// const windowWidth = window.innerWidth;
// swiper = document.querySelector('.swiper');


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// if (windowWidth <= 768) {
//   swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// } else if(windowWidth > 768){
//   swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }

function adjustCardLayout() {
    const windowWidth = window.innerWidth;
    const swiper = document.querySelector('.swiper');
    const bookingCards = document.querySelectorAll('.booking-card');

    if (windowWidth <= 768) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if(windowWidth > 768){
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
}

// Initial adjustment on page load
adjustCardLayout();

// Listen for resize events and adjust layout
window.addEventListener('resize', adjustCardLayout);

AboutMeCloseBtn.addEventListener("click", () => document.body.classList.remove("show-aboutMe"));
aboutMeToggler.addEventListener("click", () => document.body.classList.toggle("show-aboutMe"));
document.addEventListener('DOMContentLoaded', function() {
    const goToMuseumButton = document.querySelector('.go-to-museum-button');
    
    goToMuseumButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
