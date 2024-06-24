const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cardsWrapper = document.querySelector('.cards-wrapper');
const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;
const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width

function showNextCard() {
    currentCardIndex = Math.min(currentCardIndex + 1, cards.length - 1);
    updateSliderPosition();
}

function showPrevCard() {
    currentCardIndex = Math.max(currentCardIndex - 1, 0);
    updateSliderPosition();
}

function updateSliderPosition() {
    const newPosition = -currentCardIndex * cardWidth;
    cardsWrapper.style.transform = `translateX(${newPosition}px)`;

    // Update card classes to control visibility
    cards.forEach((card, index) => {
        card.classList.remove('inactive'); // Remove inactive class from all cards
    });
}

function displayFunctionDescription(event) {
    const functionText = event.target.dataset.function;
    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = functionText;
    descriptionElement.classList.add('function-description');
    document.body.appendChild(descriptionElement);
}

function removeFunctionDescription() {
    const descriptionElement = document.querySelector('.function-description');
    if (descriptionElement) {
        descriptionElement.remove();
    }
}

prevBtn.addEventListener('click', showPrevCard);
nextBtn.addEventListener('click', showNextCard);

cards.forEach((card) => {
    card.addEventListener('mouseenter', displayFunctionDescription);
    card.addEventListener('mouseleave', removeFunctionDescription);
});

function openAdminPage() {
    window.location.href = 'admin.html';
}

function openHighPage() {
    window.location.href = 'admin1.html';
}

function openmapadmin() {
    window.location.href = 'adminmap.html';
}

function openregister() {
    window.location.href = 'index.html';
}

updateSliderPosition();
