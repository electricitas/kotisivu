const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

item.addEventListener('dragstart', dragStart);
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    const data = e.dataTransfer.getData('text/plain');

    if (data === 'Lis‰‰ teht‰v‰') {
        // Lis‰‰ uusi siirrett‰v‰ objekti
        const newTask = document.createElement('div');
        newTask.textContent = 'Teht‰v‰ ' + (boxes[0].childElementCount + 1);
        newTask.draggable = true;
        newTask.classList.add('item');
        newTask.addEventListener('dragstart', dragStart);
        boxes[0].appendChild(newTask);
    } else {
        // Siirr‰ olemassa oleva siirrett‰v‰ objekti
        const draggable = document.querySelector('.item');
        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
    }
}
function lisaaTehtava() {
    // Lis‰‰ uusi siirrett‰v‰ objekti
    const newTask = document.createElement('div');
    newTask.textContent = 'Uusi teht‰v‰ ' + (document.querySelectorAll('.box')[0].childElementCount + 1);
    newTask.draggable = true;
    newTask.classList.add('item');
    newTask.addEventListener('dragstart', dragStart);
    document.querySelectorAll('.box')[0].appendChild(newTask);
}