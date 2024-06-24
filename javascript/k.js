function showTitleInput() {
    document.getElementById('title-input').style.display = 'block';
    document.querySelector('.save-title-btn').style.display = 'block';
}

function showDescriptionInput() {
    document.getElementById('description-input').style.display = 'block';
    document.querySelector('.save-description-btn').style.display = 'block';
}

function saveTitle() {
    const title = document.getElementById('title-input').value;
    const circle = document.querySelector('.circle');
    circle.innerHTML += `<h1 class="typ">${title}</h1>`;
    document.getElementById('title-input').style.display = 'none';
    document.querySelector('.save-title-btn').style.display = 'none';
}

function saveDescription() {
    const description = document.getElementById('description-input').value;
    const circle = document.querySelector('.circle');
    circle.innerHTML += `<h3>${description}</h3>`;
    document.getElementById('description-input').style.display = 'none';
    document.querySelector('.save-description-btn').style.display = 'none';
}

function addTitleAndParagraph() {
    document.querySelectorAll('.input-container')[1].style.display = 'block';
}

function saveTitleAndParagraph() {
    const title = document.getElementById('section2-title-input').value;
    const paragraph = document.getElementById('section2-paragraph-input').value;
    const imageSrc = document.getElementById('section2-image-preview').src;

    const section = document.querySelector('.cop');
    section.innerHTML += `<h2 class="title1">${title}</h2><div class="content"><img src="${imageSrc}" alt="${title}"><p>${paragraph}</p></div>`;
    document.querySelectorAll('.input-container')[1].style.display = 'none';
}

function addMuseum() {
    document.querySelectorAll('.input-container')[2].style.display = 'block';
}

function saveMuseum() {
    const museumImage = document.getElementById('museum-image-preview').src;
    const section = document.querySelector('.peoject1');
    section.innerHTML += `<div class="cla1"><div class="image1"><img src="${museumImage}" alt="Museum Image"></div><div class="info5"><p id="museum-name-placeholder"></p></div></div>`;
    document.querySelectorAll('.input-container')[2].style.display = 'none';
}

function addMuseumName() {
    const museumName = document.getElementById('museum-name-input').value;
    document.getElementById('museum-name-placeholder').textContent = museumName;
}

function triggerImageUpload(inputId) {
    document.getElementById(inputId).click();
}

function previewImage(event, previewId) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById(previewId);
        preview.src = reader.result;
        preview.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}
