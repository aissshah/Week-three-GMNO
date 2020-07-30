//Global Variables
let taskNumber = 0;

//Functions
const addNewTask = (text) => {
    taskNumber += 1; 
    let fragment = new DocumentFragment();
    let list = document.createElement("li")
    let checkBox = document.createElement("input")

    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", "taskCheckbox"+taskNumber)
    checkBox.classList.add("check__box")
    let userTask = document.createElement("label")
    userTask.setAttribute("for", "taskCheckbox"+taskNumber)
    let deleteBtn = document.createElement("button")

    deleteBtn.textContent = 'delete'
    userTask.innerHTML = text 

    fragment.appendChild(list);
    list.appendChild(checkBox);
    list.appendChild(userTask);
    list.appendChild(deleteBtn);
    
    
    const orderedList = document.querySelector('#ordered__list');
    orderedList.appendChild(fragment);
}

const deleteTask = () => {

}

const addHidden = elem => {
    elem.classList.add('hidden');
}

const removeHidden = elem => {
    elem.classList.remove('hidden');
}


//Event Listeners
// const addTask = document.getElementById('submitBtn') //refers to the submit button
// console.log(addTask)
// addTask.addEventListener('click', (event)=>{
//     event.preventDefault(); 
//     const task = document.getElementById("userInput").value
//     addNewTask(task);
// })

const todoSectionBoard = document.querySelector('.todo__board')
const finishSectionBoard = document.querySelector('.finished__board')
const todoButtonTog = document.getElementsByClassName('todo__toggle')[0]
const finishedButtonTog = document.getElementsByClassName('finished__toggle')[0]
todoButtonTog.addEventListener('click', () => {
    if (todoSectionBoard.classList.contains('hidden')) {
        removeHidden(todoSectionBoard)
        addHidden(finishSectionBoard)
    }
});
todoButtonTog.addEventListener('keyup', (e) => {
    if (e.keycode === 13) {
        if (todoSectionBoard.classList.contains('hidden')) {
            removeHidden(todoSectionBoard)
            addHidden(finishSectionBoard)
        }
    }
    
});
finishedButtonTog.addEventListener('click', () => {
    if (finishSectionBoard.classList.contains('hidden')) {
        addHidden(todoSectionBoard)
        removeHidden(finishSectionBoard)
    }
});
finishedButtonTog.addEventListener('keyup', (e) => {
    if (e.keycode === 13) {
        if (finishSectionBoard.classList.contains('hidden')) {
            addHidden(todoSectionBoard)
            removeHidden(finishSectionBoard)
        }
    }
    
});
