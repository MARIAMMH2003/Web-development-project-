var modals = document.querySelectorAll(".exm");
var spans = document.querySelectorAll(".close");
var editBtns = document.querySelectorAll(".edit-button");

var closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-button")) {
        var addModal = document.getElementById("exmp");
        addModal.style.display = "none"; 
    }
});


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-picture")) {
        pictureModal = document.getElementById("picture-edit");
        pictureModal.style.display = "none"; 
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-paragraph")) {
        var paragraphModal = document.getElementById("paragraph-edit");
        paragraphModal.style.display = "none"; 
    }

});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close-title")) {
        var titleModal = document.getElementById("title-edit");
        titleModal.style.display = "none"; 
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
    var addModal = document.getElementById("exmp");
    addModal.style.display = "block";
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
function handleImagePreview() {
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
function deleteElement() { 
    const choice = prompt('delete-button');
    if (choice.toLowerCase() === 'i') { 
        const img = targetDiv.querySelector('image');
        if (img) { img.remove(); } 
    } else if (choice.toLowerCase() === 't') { 
        targetDiv.textContent = ''; 
    } 
}

document.addEventListener("DOMContentLoaded", function() {
    handleImagePreview();
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
