function allowDrop(event) {
    event.preventDefault();
}

function dropImage(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var preview = document.getElementById('preview');
        preview.src = event.target.result;
        // Display the image instantly in the instant-preview-card
        var instantPreview = document.getElementById('instant-image-preview');
        instantPreview.innerHTML = `<img src="${event.target.result}" alt="Instant Preview">`;
    };
    reader.readAsDataURL(file);
}

function openImagePreview() {
    var title = document.getElementById('image-title').value;
    var text = document.getElementById('image-text').value;
    var imageSrc = document.getElementById('preview').src;

    var imageTab = window.open("", "_blank");

    var imageHTML = `
    <html>
    <head>
        <title>Image Details</title>
        <link rel="stylesheet" href="admin.css">
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
            <img src="${imageSrc}" alt="${title}">
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

    imageTab.document.write(imageHTML);
}

// Function to handle edit image button click
function editImage(cardId) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            var card = document.getElementById(cardId);
            var image = card.querySelector('img');
            image.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click();
}
function previewCard() {
    var title = document.getElementById('image-title').value;
    var text = document.getElementById('image-text').value;
    var imageSrc = document.getElementById('preview').src;

    var cardWrapper = document.getElementById('card-wrapper');

    var newCard = document.createElement('div');
    newCard.classList.add('swiper-slide');
    newCard.classList.add('wide-card');
    newCard.innerHTML = `
        <img src="${imageSrc}" alt="${title}">
        <div class="card-title">${title}</div>
    `;

    cardWrapper.appendChild(newCard);
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Display 3 cards at a time
    spaceBetween: 30, // Add space between cards
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Add breakpoints for responsive design
    breakpoints: {
        // When window width is <= 768px, display only 1 card at a time
        768: {
            slidesPerView: 1,
        },
        // When window width is <= 992px, display 2 cards at a time
        992: {
            slidesPerView: 2,
        },
    },
});
