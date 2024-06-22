document.querySelector('.background').addEventListener('click', function() {
    document.getElementById('background-input').click();
});

document.querySelector('.foreground').addEventListener('click', function() {
    document.getElementById('foreground-input').click();
});

document.getElementById('background-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.background').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('foreground-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.foreground').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('input[type="checkbox"]'); 
    var nav = document.querySelector('.nav1'); 
    checkbox.addEventListener('change', function() { 
        if (checkbox.checked) { 
            nav.style.display = 'block'; 
        } 
        else if (!nav.contains(event.target) && event.target !== checkbox){ 
            nav.style.display = 'none'; 
        } 
    }); 
});

document.addEventListener("DOMContentLoaded", function() {
    const bioText = document.getElementById('bio-text');
    const bioInput = document.getElementById('bio-input');
    const editButton = document.getElementById('edit-bio');
    const saveButton = document.getElementById('save-bio');

    editButton.addEventListener('click', function() {
        bioInput.value = bioText.innerText;
        bioText.style.display = 'none';
        bioInput.style.display = 'block';
        editButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
    });

    saveButton.addEventListener('click', function() {
        bioText.innerText = bioInput.value;
        bioText.style.display = 'block';
        bioInput.style.display = 'none';
        editButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
    });
});

document.getElementById('Requests').addEventListener('click', function() {
    window.location.href = 'request.html';
});

document.getElementById('CardPreview').addEventListener('click', function() {
    window.location.href = 'cardpreview.html';
});

document.getElementById('tourGuideForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const tourGuide = {
        name: document.getElementById('name').value,
        profession: document.getElementById('profession').value,
        about: document.getElementById('about').value,
        image: document.getElementById('image').value,
        socialMedia: {
            facebook: document.getElementById('facebook').value,
            twitter: document.getElementById('twitter').value,
            instagram: document.getElementById('instagram').value,
            whatsapp: document.getElementById('whatsapp').value,
        },
        rating: document.getElementById('rating').value
    };
    await fetch('/tourGuides', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourGuide)
    });
    alert('Tour guide profile updated!');
});

document.getElementById('cardPreviewBtn').addEventListener('click', () => {
    window.location.href = 'cardpreview.html';
});

document.getElementById('requestBtn').addEventListener('click', () => {
    window.location.href = 'request.html';
})
