
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

var previews = document.querySelectorAll("#preview");
var fileInputs = document.querySelectorAll("#image");

fileInputs.forEach(function(input, index) {
    input.addEventListener("change", function() {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            previews[index].src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
});
    function handleImagePreview() {
        var preview = document.querySelectorAll(".preview");
        var inputs = document.querySelectorAll(".image");

        inputs.forEach(function(input, index) {
            input.addEventListener("change", function() {
                var file = this.files[0];
                var reader = new FileReader();

                reader.onload = function(e) {
                    preview[index].src = e.target.result;
                };

                reader.readAsDataURL(file);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        handleImagePreview();
    });

var museumsSlider = new Swiper('.museums-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var nav = document.getElementById("bar");
  var image = document.querySelector(".blurry-container");
  var navTopOffset = image.offsetHeight;

  if (document.body.scrollTop > navTopOffset || document.documentElement.scrollTop > navTopOffset) {
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "static";
  }
}


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var images = document.querySelectorAll(".container .box img");
      var topOfWindow = window.scrollY + window.innerHeight;
      images.forEach(function(image) {
        var imagePos = image.offsetTop;
        if (imagePos < topOfWindow) {
          image.classList.add("fade-in");
        }
      });
    });
  });
  
 

  


  document.getElementById('addMonumentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    addNewMonument(event.target);
});

async function addNewMonument(formElement) {
    const formData = new FormData(formElement);

    try {
        const response = await fetch('/museums/addmonument', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to add monument');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.log('Success:', data);
            alert('Monument added successfully!');
        } else {
            throw new Error('Unexpected response from server');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the monument.');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const museumId = '<%= museum._id %>'; // Get the current museum ID from the template
    const monumentsContainer = document.getElementById('monumentsContainer');
    const addMonumentForm = document.getElementById('addMonumentForm');

    // Function to fetch monuments for the current museum
    const fetchMonuments = () => {
        fetch(`/monuments?museumId=${museumId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(monuments => {
                monumentsContainer.innerHTML = ''; // Clear existing content
                monuments.forEach(monument => {
                    appendMonument(monument);
                });
            })
            .catch(error => console.error('Error fetching monuments:', error));
    };

    // Function to append a monument to the monuments container
    const appendMonument = (monument) => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const imageMargin = document.createElement('div');
        imageMargin.classList.add('image-margin');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.style.backgroundImage = `url('${monument.picture}')`;

        const removeIcon = document.createElement('div');
        removeIcon.classList.add('remove-icon');
        removeIcon.innerHTML = `<ion-icon name="trash"></ion-icon><span class="remove-text">Delete</span>`;
        removeIcon.addEventListener('click', () => {
            deleteMonument(monument._id); // Function to handle delete monument
        });

        const editIcon = document.createElement('div');
        editIcon.classList.add('edit-icon');
        editIcon.innerHTML = `<ion-icon name="create-outline"></ion-icon><span class="edit-text">Edit</span>`;
        editIcon.addEventListener('click', () => {
            // Function to handle edit monument, if needed
        });

        imageContainer.appendChild(removeIcon);
        imageContainer.appendChild(editIcon);

        const swiperText = document.createElement('div');
        swiperText.classList.add('swiper-text');
        swiperText.innerHTML = `<p>${monument.description}</p>`;

        imageMargin.appendChild(imageContainer);
        imageMargin.appendChild(swiperText);

        swiperSlide.appendChild(imageMargin);
        monumentsContainer.appendChild(swiperSlide);
    };

    // Initial fetch of monuments when the page loads
    fetchMonuments();

    // Function to handle form submission for adding a new monument
    addMonumentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(addMonumentForm);
        const monumentData = {
            museumId: museumId,
            name: formData.get('name'),
            description: formData.get('description'),
            picture: formData.get('picture'),
        };

        fetch('/monuments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(monumentData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(newMonument => {
                appendMonument(newMonument); // Add the new monument to the UI
                addMonumentForm.reset(); // Clear the form fields after successful addition
            })
            .catch(error => console.error('Error adding monument:', error));
    });

    // Initial fetch of monuments when the page loads
    fetchMonuments();
});
document.addEventListener('DOMContentLoaded', () => {
    const museumId = '<%= museum._id %>'; // Get the current museum ID from the template
    fetch(`/monuments?museumId=${museumId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(monuments => {
            const monumentsContainer = document.getElementById('monumentsContainer');
            monuments.forEach(monument => {
                const swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide');

                const imageMargin = document.createElement('div');
                imageMargin.classList.add('image-margin');

                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.style.backgroundImage = `url('${monument.picture}')`;

                const removeIcon = document.createElement('div');
                removeIcon.classList.add('remove-icon');
                removeIcon.innerHTML = `<ion-icon name="trash"></ion-icon><span class="remove-text">Delete</span>`;

                const editIcon = document.createElement('div');
                editIcon.classList.add('edit-icon');
                editIcon.innerHTML = `<ion-icon name="create-outline"></ion-icon><span class="edit-text">Edit</span>`;

                imageContainer.appendChild(removeIcon);
                imageContainer.appendChild(editIcon);

                const swiperText = document.createElement('div');
                swiperText.classList.add('swiper-text');
                swiperText.innerHTML = `<p>${monument.description}</p>`;

                imageMargin.appendChild(imageContainer);
                imageMargin.appendChild(swiperText);

                swiperSlide.appendChild(imageMargin);
                monumentsContainer.appendChild(swiperSlide);
            });

            // Initialize Swiper after dynamically adding slides
            const swiper = new Swiper('.swiper-container', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        })
        .catch(error => console.error('Error fetching monuments:', error));
});
