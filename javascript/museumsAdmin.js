
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
  const search = document.getElementById('searchInput');
  const museum = document.querySelectorAll('.museums-slide');
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');

  search.addEventListener('input', function() {
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
  
 

  let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')
  
  next.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').appendChild(items[0])
  })
  
  prev.addEventListener('click', function(){
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
  })
  document.querySelectorAll('.delete-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.closest('.item').remove();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const removeIcons = document.querySelectorAll('.remove-icon');

    removeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
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
      <!DOCTYPE html>
<html lang="en">

  <head>

    <title>New museum</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="../css/map-testing.css">
    <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="./images/favicon-32x32.png"
  />
  <link rel="stylesheet" href="../css/admin.css">
  </head>
    

  <body>
    <section>  <div class="blurry-container">
      <div class="blurry-background" style="background-image: url('https://i.pinimg.com/564x/66/5e/7f/665e7f6ca98e4e14551bf9d02e7c2ca0.jpg')"></div>
      <div class="text-overlay">
        <h1 style="color: beige; font-size: 20px;">Title</h1><br>
        <h2 style="color: beige; font-size: 15px;"> Slogan</h2><br>
        <p style="color: beige; font-size: 10px;" >  Date. </p>
        <button id="edit-title-slogan-date" class="inner-buttons" >Add Museum Title</button>

      </div>
  </div>
  <div id="bar">
  <nav id="ahh" >
      
      <a href="#overview">Overview</a>
      <a href="#details">Famous Monuments</a>
      <a href="#comments-section">Comments</a>
  </nav></div>
  <hr></section>
  <br>
  <br>
  <section id="overview" class="section-content">
    <div id="text-over" >
              <h1 >Title</h1><br>
                 <h2 >Slogan</h2><br>
                 <p  >  Date. </p>
              <br>
              <p id="paragraph1">
                museum overview....</p>
            </div>
            <div class="button-box">
              <button id="edit-overview-paragraph" class="inner-buttons">Add Paragraph</button>
            </div>
  </section>
    <section class="famous-monuments"id="details">
      <br>
      <span class="before-hr">Famous Monuments</span>
        <hr id="line">
        <br>  <br> <br> 
    <div class="swiper-container">
      <div class="swiper-wrapper">
     
          <div class="swiper-slide">
            <div class="image-margin">
              <div class="image-container" style="background-image: url('https://i.pinimg.com/564x/66/5e/7f/665e7f6ca98e4e14551bf9d02e7c2ca0.jpg');">
              <div class="add-icon">
                  <ion-icon name="add-outline"></ion-icon>
                  <span class="add-text">Add</span>
             </div>    </div>        <div class="swiper-text">
             <!-- <h2>The Statue of Ramses II</h2>-->
              <p> The monument discription goes here.</p>
          
         
          </div>
          </div>
          
         
          </div></div></div>
          </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
    </section>

  <div id="addModal2" class="modal">
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>Add Monument</h2>
      <form id="addSlideForm">
          <label for="addImage">Image:</label>
          <input type="file" id="addImage" name="image" accept="image/*" required>
          <div class="image-preview2" id="image-preview">
              <img class="preview" src="" alt="Image Preview">
          </div>
          <label for="addDescription">Description:</label>
          <textarea id="addDescription" rows="4" cols="8" required></textarea>
          <button class="inner-buttons" type="submit">Add Slide</button>
      </form>
    </div>
  </div>
    <div id="editModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Edit Monument</h2>
        <form id="editForm">
          <label for="editImage">Image:</label>
          <input type="file" id="editImage" accept="image/*">
          <div class="image-preview" id="imagePreview">
            <img src="" alt="Image Preview" class="image-preview">
          </div>
          <label for="editText">Description:</label>
          <textarea id="editText" rows="4"></textarea>
          <button type="button"class="inner-buttons" id="saveChanges">Save Changes</button>
        </form>
      </div>
    </div>

    
    <section id="comments-section" class="reviews-section">

      <div class="container-comment">
        <div class="container__left">
          <h1>"Discover why countless visitors choose to explore this museum.

            
          </h1>
          <p>
            With a diverse array of exhibits and interactive displays, it caters to various interests, ensuring each guest finds something to admire
          </p>
          <p>
            The commitment to providing enriching experiences has garnered praise from thousands of guests annually. Families bond, friends debate, and individuals reflect within its walls, creating cherished memories that last a lifetime.
          </p>
          <p>
            Join the satisfied reviewers. Leave a comment now .
          </p>
          
        </div>
        <div class="container__right">
          <div class="card">
            <div class="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              
            </div>
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
                <p>
                  Captivating artifacts, interactive displays, and engaging tours.
                </p>
                <h4>- Mariam Most</h4>
              </div>
            </div>
          </div>
          <div class="card">
            
            <div class="rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <div class="card__content">
              <span><i class="ri-double-quotes-l"></i></span>
              <div class="card__details">
                <p>
                  Immersive exhibits, knowledgeable guides, and rich historical insights.
                </p>
                <h4>- Zeina Mohamed</h4>
              </div>
            </div>
          </div>
        
<div class="card">


<div class="rating">
<ion-icon name="star"></ion-icon>
<ion-icon name="star"></ion-icon>
<ion-icon name="star"></ion-icon>
<ion-icon name="star"></ion-icon>
<ion-icon name="star"></ion-icon>
</div>
<div class="card__content">
<span><i class="ri-double-quotes-l"></i></span>
<div class="card__details">
  <p>
    Well-curated collections, stunning architecture, and memorable experiences.
  </p>
  <h4>- Mariam Shaddad </h4>
</div>
</div>
</div>



</div>

    
</section>
<footer class="footer">
  <div class="footer-container">
    <div class="row">
      <div class="footer-col" id="footer-col1">
        <div class="map-container">
          <a href="#" class="link"><h4>Museum Name </h4></a>
          <div id="map"></div></div>
      </div>
    
      <div class="footer-col" id="footer-col2">
        <h4>follow us</h4>
        <div class="social-links">
         
          <a href="https://www.instagram.com/explore/locations/298970781/coptic-museum?igsh=eW5td211OTg3NzQ3"><i class="fab fa-instagram"></i></a>
          <a href="https://youtu.be/cd2WmTqIprc?si=b-FnZCeYnwCSiWIv"><i class="fab fa-youtube"></i></a>
        </div>
    </div>
  </div>
</footer>


<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script src="js/swiper-bundle.min.js"></script>
    <script src="../javascript/admin.js"></script>
    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYfgrabCkaQmKOH2VWYnRREOKAk7M43Ow&loading=async&callback=initMap" >
    </script>
    <script src="../javascript/map-testing.js"></script>
  </body>

</html>
    `;
    newDocument.write(content);
    newDocument.close();
  }

  if (createNewPageBtn) {
    createNewPageBtn.addEventListener('click', createNewPage);
  } else {
    console.error('Create New Page button not found');
  }