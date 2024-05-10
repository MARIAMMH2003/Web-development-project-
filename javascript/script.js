// Function to open image in new tab with image sliding animation
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
        </div>
        <script>
            var isPlaying = false;
            var isPaused = false;
            var speechSynthesis = window.speechSynthesis;
            var speechText;
            var speechPosition = 0; // Variable to keep track of the speech position

            function toggleSpeech(text, button) {
                if (!isPlaying) {
                    if (!speechText) {
                        speechText = new SpeechSynthesisUtterance(text);
                        speechText.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
                        speechText.addEventListener('end', function() {
                            isPlaying = false;
                            button.classList.remove('paused');
                            button.nextElementSibling.classList.add('paused');
                        });
                    }
                    speechText.text = text.substring(speechPosition); // Set the text to play from the current position
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


// search engine
document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 4, 
            },
            1024: {
                slidesPerView: 5, 
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        var search = searchInput.value.trim().toLowerCase(); 
        var images = document.querySelectorAll('.swiper-slide');
        var found = -1;
        images.forEach(function(slide, index) {
            var title = slide.querySelector('.card-title').innerText.toLowerCase(); 
            var card = slide.querySelector('.card');
            if (title.includes(search) && found === -1) {
                found = index;
            }
            if (found !== -1) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
        if (found !== -1) {
            swiper.slideTo(found, 500, false);
        }
    });
});
// document.addEventListener('DOMContentLoaded', function() {
//     var checkbox = document.querySelector('input[type="checkbox"]');
//     var nav = document.querySelector('.nav1');

//     checkbox.addEventListener('change', function() {
//         if (checkbox.checked) {
//             nav.style.display = 'block';
//         } else if (!nav.contains(event.target) && event.target !== checkbox){
//             nav.style.display = 'none';
//         }
//     });
// });
