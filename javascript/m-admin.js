document.addEventListener('DOMContentLoaded', () => {
    const civilizationsDiv = document.getElementById('civilizations');
    const addBtn = document.getElementById('add-btn');
    const addNewBtn = document.getElementById('add-new-btn');
    const fileInput = document.getElementById('file-input');

    const addSectionHTML = () => {
        const newSection = document.createElement('div');
        newSection.classList.add('civi1');
        newSection.innerHTML = `
            <div class="info3">
                <h2 class="infom">New Section Title</h2>
                <p>New section content goes here...</p>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="change-btn">Change Image</button>
            </div>
            <div class="imag">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image">
            </div>
        `;
        civilizationsDiv.appendChild(newSection);
        addEventListeners(newSection);
    };

    const addNewDivHTML = () => {
        const con1Div = document.querySelector('.con1');
        const newDiv = document.createElement('div');
        newDiv.classList.add('cla1');
        newDiv.innerHTML = `
            <div class="image1">
                <img src="https://via.placeholder.com/150" alt="Placeholder Image">
            </div>
            <div class="info5">
                <p>New Location</p>
            </div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="change-btn">Change Image</button>
        `;
        con1Div.appendChild(newDiv);
        addEventListeners(newDiv);
    };

    const editSection = (event) => {
        const target = event.target.parentElement;
        const title = target.querySelector('h2, p');
        const content = target.querySelector('p');
        const newTitle = prompt('Edit Title:', title.innerText);
        const newContent = prompt('Edit Content:', content.innerText);

        if (newTitle !== null) {
            title.innerText = newTitle;
        }
        if (newContent !== null) {
            content.innerText = newContent;
        }
    };

    const deleteSection = (event) => {
        const target = event.target.closest('.civi1, .cla1');
        target.remove();
    };

    const changeImage = (event) => {
        const target = event.target.closest('.civi1, .cla1').querySelector('img');
        fileInput.click();

        fileInput.onchange = (e) => {
            const reader = new FileReader();
            reader.onload = () => {
                target.src = reader.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };

    const addEventListeners = (element) => {
        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');
        const changeBtn = element.querySelector('.change-btn');

        editBtn.addEventListener('click', editSection);
        deleteBtn.addEventListener('click', deleteSection);
        changeBtn.addEventListener('click', changeImage);
    };

    document.querySelectorAll('.edit-btn').forEach(btn => btn.addEventListener('click', editSection));
    document.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', deleteSection));
    document.querySelectorAll('.change-btn').forEach(btn => btn.addEventListener('click', changeImage));

    addBtn.addEventListener('click', addSectionHTML);
    addNewBtn.addEventListener('click', addNewDivHTML);
});
