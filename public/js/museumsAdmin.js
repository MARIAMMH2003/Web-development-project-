function allowDrop(event) {
    event.preventDefault();
}

function dropImage(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
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
var modals = document.querySelectorAll(".modal");
var spans = document.querySelectorAll(".close");
var editBtns = document.querySelectorAll(".edit-btn");

var closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-btn")) {
        var addModal = document.getElementById("addModal");
        addModal.style.display = "none";
    }
});
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-btn")) {
        var addModal = document.getElementById("addModal2");
        addModal.style.display = "none";
    }
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-picture")) {
        pictureModal = document.getElementById("picture-edit");
        pictureModal.style.display = "none";
    }
}); document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-paragraph")) {
        var paragraphModal = document.getElementById("paragraph-edit");
        paragraphModal.style.display = "none";
    }
}); document.addEventListener("click", function (event) {
    if (event.target.classList.contains("close-title")) {
        var titleModal = document.getElementById("title-edit");
        titleModal.style.display = "none";
    }
});
function editPicturePopup() {
    var editPicture = document.getElementById("picture-edit");

    editPicture.style.display = "block";
}
function editParagraphPopup() {
    var editParagraph = document.getElementById("paragraph-edit");

    editParagraph.style.display = "block";
} function ediTitlePopup() {
    var editTitle = document.getElementById("title-edit");

    editTitle.style.display = "block";
}


function openAddPopup() {
    var addModal = document.getElementById("addModal");

    addModal.style.display = "block";
}

function openAddPopupMonuments() {
    var addModal2 = document.getElementById("addModal2");

    addModal2.style.display = "block";
}
editBtns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        modals[index].style.display = "block";
    });
});



spans.forEach(function (span, index) {
    span.onclick = function () {
        modals[index].style.display = "none";
    };
});

window.onclick = function (event) {
    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }

    });
};

var previews = document.querySelectorAll("#preview");
var fileInputs = document.querySelectorAll("#image");

fileInputs.forEach(function (input, index) {
    input.addEventListener("change", function () {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            previews[index].src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
});
function handleImagePreview() {
    var preview = document.querySelectorAll(".preview");
    var inputs = document.querySelectorAll(".image");

    inputs.forEach(function (input, index) {
        input.addEventListener("change", function () {
            var file = this.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                preview[index].src = e.target.result;
            };

            reader.readAsDataURL(file);
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    handleImagePreview();

    document.getElementById('addMuseumForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        addNewMuseum(event.target);
    });
});

async function addNewMuseum(formElement) {
    const formData = new FormData(formElement);

    fetch('/admin/museums/add', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Museum added successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while adding the museum.');
        });
}

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

allStar.forEach((item, idx) => {
    item.addEventListener('click', function () {
        let click = 0
        ratingValue.value = idx + 1

        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active')
        })
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
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
window.onscroll = function () { scrollFunction() };

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

document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('searchInput');
    const museum = document.querySelectorAll('.museums-slide');
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');

    search.addEventListener('input', function () {
        const searchTerm = search.value.toLowerCase().trim();
        museum.forEach((slide, index) => {
            const museumName = slide.querySelector('.museum-name').innerText.toLowerCase();
            if (museumName.includes(searchTerm)) {
                slide.classList.add('highlighted');
                bullets[index].click();
            } else {
                slide.classList.remove('highlighted');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var images = document.querySelectorAll(".container .box img");
        var topOfWindow = window.scrollY + window.innerHeight;
        images.forEach(function (image) {
            var imagePos = image.offsetTop;
            if (imagePos < topOfWindow) {
                image.classList.add("fade-in");
            }
        });
    });
});



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
document.querySelectorAll('.delete-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        this.closest('.item').remove();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const removeIcons = document.querySelectorAll('.remove-icon');

    removeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const slide = this.closest('.swiper-slide');
            slide.remove();
            // Update the Swiper instance if necessary
            swiper.update();
        });
    });
});
function createNewPage() {
    const newWindow = window.open('', '_blank');
    const newDocument = newWindow.document.open();
    const content = `
     `;
    newDocument.write(content);
    newDocument.close();
}

if (createNewPageBtn) {
    createNewPageBtn.addEventListener('click', createNewPage);
} else {
    console.error('Create New Page button not found');
}
ddocument.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded");
    var openModalDiv = document.getElementById('openModalDiv');
    var modal = document.getElementById('addMuseumModal');
    var closeModal = modal.querySelector('.close-btn');

    openModalDiv.addEventListener('click', function() {
        console.log("Open modal clicked");
        modal.classList.add('modal-open');
    });

    closeModal.addEventListener('click', function() {
        console.log("Close modal clicked");
        modal.classList.remove('modal-open');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            console.log("Clicked outside modal");
            modal.classList.remove('modal-open');
        }
    });
});

