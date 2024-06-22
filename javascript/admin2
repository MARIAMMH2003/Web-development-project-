var modals = document.querySelectorAll(".exm");
var spans = document.querySelectorAll(".close");
var editButtons = document.querySelectorAll(".edit-button");

var closeBtn = document.querySelector(".close-button");
var deleteButtons = document.querySelectorAll('.delete-button');

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
    if (civiElement) {
        civiElement.remove();
    }
}

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

function openAddPopup() {
    document.getElementById("exmp").style.display = "block";
}

document.getElementById("adds").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("inp1").value;
    const description = document.getElementById("input4").value;
    const imageInput = document.querySelector('#exmp input[type="file"]');
    const imageFile = imageInput.files[0];

    if (title && description && imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newCategoryHTML = `
                <div class="civi">
                    <div class="im">
                        <img src="${e.target.result}" alt="${title}">
                    </div>
                    <div class="info2">
                        <h2 class="proinfo">${title}</h2>
                        <p>${description}</p>
                        <div class="buttons">
                            <button class="edit-button" data-modal="new-modal-id">Edit</button>
                            <button class="delete-button">Delete</button>
                        </div>
                    </div>
                </div>`;
            
            const container = document.querySelector('.con');
            container.insertAdjacentHTML('beforeend', newCategoryHTML);

            document.querySelectorAll(".delete-button").forEach(button => {
                button.addEventListener("click", function () {
                    button.closest(".civi").remove();
                });
            });

            document.querySelectorAll(".edit-button").forEach(button => {
                button.addEventListener("click", function () {
                    const modalId = button.getAttribute("data-modal");
                    const modal = document.getElementById(modalId);
                    modal.style.display = "block";
                });
            });

            document.getElementById("exmp").style.display = "none";
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please fill in all fields and select an image.');
    }
});

document.getElementById('adds').addEventListener('submit', addNewCategory);
