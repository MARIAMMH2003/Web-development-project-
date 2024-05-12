var modals = document.querySelectorAll(".exm");
var spans = document.querySelectorAll(".close");
var editButtons = document.querySelectorAll(".edit-button");

var closeBtn = document.querySelector(".close-button");
var delets =  document.querySelector(".delete-button");
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-button")) {
        var addMod = document.getElementById("exmp");
        addMod.style.display = "none"; 
    }
});


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-picture")) {
        pictureMod = document.getElementById("picture-edit");
        pictureMod.style.display = "none"; 
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-paragraph")) {
        var paragraphMod = document.getElementById("paragraph-edit");
        paragraphMod.style.display = "none"; 
    }

});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-title")) {
        var titleMod = document.getElementById("title-edit");
        titleMod.style.display = "none"; 
    }
});

function editPicturePopup() {
    var editPicture = document.getElementById("picture-edit");
    editPicture.style.display = "block";
}

function ediTitlePopup() {
    var editTitle = document.getElementById("title-edit");
    editTitle.style.display = "block";
}


function openAddPopup() {
    var addMod = document.getElementById("exmp");
    addMod.style.display = "block";
}


editButtons.forEach(function(btn, index) {
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
    modals.forEach(function(mod) {
        if (event.target == mod ) {
            mod.style.display = "none";
        }
    
    });
};

var previews = document.querySelectorAll("#view");
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
function handleImageview() {
    var preview = document.querySelectorAll(".view");
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
function handleDeleteButtonClick(event) {
   
    var civiElement = event.target.closest('.civi');
  
  
    var imElement = civiElement.querySelector('.im');
    var info2Element = civiElement.querySelector('.info2');
    var buttonsElement = civiElement.querySelector('.buttons');
  
   
    if (imElement && info2Element && buttonsElement) {
    
      imElement.remove();
      info2Element.remove();
      buttonsElement.remove();
    }
  }
  

  var deleteButtons = document.querySelectorAll('.delete-button');
  
 
  deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener('click', handleDeleteButtonClick);
  });
  
 
  

  var deleteButtons = document.querySelectorAll('.delete-button');
  
  
  deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener('click', handleDeleteButtonClick);
  });
  

document.addEventListener("DOMContentLoaded", function() {
    handleImageview();
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
