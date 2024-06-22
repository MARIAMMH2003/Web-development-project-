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
document.addEventListener('DOMContentLoaded',()=>{
    const logintxt=document.getElementById('logintext');
    const loginpic=document.getElementById('loginpic');
    if(sessionStorage.getItem('loggedIn')=='true'){
        logintxt.style.display='none';
        loginpic.style.display='inline';
    }
});
//museum


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

  

  
  
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var images = document.querySelectorAll(".container-museum .box img");
      var topOfWindow = window.scrollY + window.innerHeight;
      images.forEach(function(image) {
        var imagePos = image.offsetTop;
        if (imagePos < topOfWindow) {
          image.classList.add("fade-in");
        }
      });
    });
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