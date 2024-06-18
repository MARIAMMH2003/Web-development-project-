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
var modals = document.querySelectorAll(".modal");
var spans = document.querySelectorAll(".close");
var editBtns = document.querySelectorAll(".edit-btn");

var closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-btn")) {
        var addModal = document.getElementById("addModal");
        addModal.style.display = "none"; 
    }
});
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-btn")) {
        var addModal = document.getElementById("addModal2");
        addModal.style.display = "none"; 
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-picture")) {
        pictureModal = document.getElementById("picture-edit");
        pictureModal.style.display = "none"; 
    }
});document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-paragraph")) {
        var paragraphModal = document.getElementById("paragraph-edit");
        paragraphModal.style.display = "none"; 
    }
});document.addEventListener("click", function(event) {
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

    editParagraph .style.display = "block";
}function ediTitlePopup() {
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
editBtns.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        modals[index].style.display = "block";
    });
});



spans.forEach(function(span, index) {
    span.onclick = function() {
        modals[index].style.display = "none";
    };
});

window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal ) {
            modal.style.display = "none";
        }
    
    });
};

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

  document.addEventListener('DOMContentLoaded', function() {
    const removeIcons = document.querySelectorAll('.remove-icon');
    const editIcons = document.querySelectorAll('.edit-icon');
    const modal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close');
    const editImageInput = document.getElementById('editImage');
    const imagePreview = document.getElementById('imagePreview').querySelector('img');
    const editText = document.getElementById('editText');
    const saveChangesBtn = document.getElementById('saveChanges');
    let currentSlide = null;

    removeIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const slide = this.closest('.swiper-slide');
        slide.remove();
        swiper.update();
      });
    });

    editIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        currentSlide = this.closest('.swiper-slide');
        const currentImage = currentSlide.querySelector('.image-container').style.backgroundImage;
        const currentText = currentSlide.querySelector('.swiper-text p').textContent;

        // Set the current values to the modal inputs
        imagePreview.src = currentImage.slice(5, -2); // Remove 'url(' and ')' from the style string
        editText.value = currentText;

        // Show the modal
        modal.style.display = 'block';
      });
    });

    closeModal.onclick = function() {
      modal.style.display = 'none';
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    editImageInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    saveChangesBtn.addEventListener('click', function() {
      if (currentSlide) {
        const newImage = imagePreview.src;
        const newText = editText.value;

        // Update the slide with new values
        currentSlide.querySelector('.image-container').style.backgroundImage = `url(${newImage})`;
        currentSlide.querySelector('.swiper-text p').textContent = newText;

        // Hide the modal
        modal.style.display = 'none';
      }
    });
  });
  const addIcon = document.querySelector('.add-icon');
  const addModal = document.getElementById('addModal2');
  const closeModalBtn = document.querySelector('.close-btn');
  const addSlideForm = document.getElementById('addSlideForm');
  const imagePreview = document.getElementById('image-preview img');

  addIcon.addEventListener('click', function() {
      addModal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function() {
      addModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == addModal) {
          addModal.style.display = 'none';
      }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const addSlideForm = document.getElementById('addSlideForm');
  
    addSlideForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const addImageInput = document.getElementById('addImage');
      const addDescriptionInput = document.getElementById('addDescription');
  
      const reader = new FileReader();
      reader.onload = function(e) {
        const newSlideHTML = `
          <div class="swiper-slide">
            <div class="image-margin">
              <div class="image-container" style="background-image: url('${e.target.result}');">
                <div class="remove-icon">
                  <ion-icon name="trash"></ion-icon>
                  <span class="remove-text">Delete</span>
                </div>
                <div class="edit-icon">
                  <ion-icon name="create-outline"></ion-icon>
                  <span class="edit-text">Edit</span>
                </div>
              </div>
              <div class="swiper-text">
                <p>${addDescriptionInput.value}</p>
              </div>
            </div>
          </div>
        `;
  
        const newSlide = document.createElement('div');
        newSlide.innerHTML = newSlideHTML;
  
        // Insert the new slide before the last "add" slide
        const addSlideIndex = swiper.slides.length - 1;
        swiper.addSlide(addSlideIndex, newSlide.children);
  
        document.getElementById('addModal2').style.display = 'none';
        addSlideForm.reset();
        document.getElementById('imagePreview').querySelector('img').src = '';
      };
  
      reader.readAsDataURL(addImageInput.files[0]);
    });
  
    document.getElementById('addImage').addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const imagePreview = document.getElementById('imagePreview').querySelector('img');
          imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
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



 

  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  
  next.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
  })
  
  prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 10
  })
  document.querySelectorAll('.delete-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.closest('.item').remove();
    })
});



