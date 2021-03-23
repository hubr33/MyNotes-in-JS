const addBtn = document.querySelector('.add');
const removeAllBtn = document.querySelector('.remove-all')
const createNote = document.querySelector('.create-note')
const select = document.querySelector('#category');
const textarea = document.querySelector('textarea');
const error = document.querySelector('p');
const acceptBtn = document.querySelector('.addNote');
const delBtn = document.querySelector('.closeNote');
const noteArea = document.querySelector('.note-area')

let selectedValue;
let newText;
let array = [];
let cardID = 0;

const startCreating = () => {
    createNote.style.display = "block";
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const closeCreating = () => {
    createNote.style.display = "none";
}

const addCreatedNote = () => { //dodac obowiazkowo onclick ktory wykona mi po kliknieciu funkcje
    newText = document.createElement('div');
    newText.setAttribute('id', cardID);
    newText.innerHTML = `
    <div class="note" id="nn">
            <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note" onclick="delNote(${cardID})"> 
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-body">
            ${textarea.value}
                </div>
        </div>
        `;
    noteArea.appendChild(newText);
    cardID++;
    array.push(newText);
}


const adding = () => {
    if (category.options[category.selectedIndex].value !== '0' && textarea.value !== '') {
        createNote.style.display = "none";
        error.classList.remove('error');
        addCreatedNote();
        select.selectedIndex = 0;
        textarea.value = '';
    } else {
        error.classList.add('error');
    }
}

const removeAll = () => {
    for (let i = 0; i < array.length; i++) {
        document.querySelector('.note').remove();
    }
    array = [];

}

const delNote = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

removeAllBtn.addEventListener('click', removeAll)
acceptBtn.addEventListener('click', adding);
delBtn.addEventListener('click', closeCreating);
addBtn.addEventListener('click', startCreating);