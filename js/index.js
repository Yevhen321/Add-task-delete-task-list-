const textInput = document.getElementById('task');
const createTaskBtn = document.getElementById('createTaskButton');
const deleteTaskBtn = document.getElementById('deleteTaskButton')
const ulElement = document.getElementById('taskList');
const checkBoxAllTasks = document.getElementById('deleteAllTasks');
const containerList = document.querySelector('.container-list');

let isDeleteAll = false;

//=========================События на кнопки========================================================================
textInput.addEventListener('keydown', (event) => {
    let value = event.target.value;
});

checkBoxAllTasks.addEventListener('change', (e) => {
    isDeleteAll = e.target.checked;
});

//===================================================================

createTaskBtn.addEventListener('click', () => {
    let listElement = document.createElement('li');
    listElement.classList.add('listElement');
    listElement.innerHTML = textInput.value;
    ulElement.appendChild(listElement);
    listElement.appendChild(addTimeTask())
    listElement.style.marginTop = '10px';
    listElement.style.fontSize = '20px';
    listElement.addEventListener('click', () => {
        listElement.style.color = 'blue';
    })
})

//Удаление задач
deleteTaskBtn.addEventListener('click', () => {
    if (isDeleteAll) {
        deleteAllTasks();
    } else {
        deleteTask();
    }
});

// Ввод текста с заглавной буквы
textInput.addEventListener('keydown', (event) => {
    let value = event.target.value;
    let strCheckUser = /(^[A-Z][a-z]|[A-Z]\s).+($)/gm;
    let valid = strCheckUser.test(value);
    if (valid) {
        textInput.style.border = '3px solid green';
    } else {
        textInput.style.border = '3px solid red';
    }
});

//===============================================================================================================
// Создание времени
function addTimeTask() {
    const timeElement = document.createElement('div')
    timeElement.classList.add('timeElement');
    const TIME = new Date();
    timeElement.textContent = TIME.getHours() + ':' + TIME.getMinutes() + ':' + TIME.getSeconds();
    timeElement.style.color = 'green';
    timeElement.style.fontSize = '13px';
    return timeElement;
}

function deleteTask() {
    if (ulElement.lastElementChild) {
        ulElement.removeChild(ulElement.lastElementChild);
    }
}

function deleteAllTasks() {
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
}