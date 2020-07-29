//Global Variables
let taskNumber = 0;

//Functions
const addNewTask = (text) => {
    taskNumber += 1; 
    let fragment = new DocumentFragment();
    let list = document.createElement("li")
    let inputTask = document.createElement("input")

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




//Event Listeners
const addTask = document.getElementById('submitBtn') //refers to the submit button
console.log(addTask)
addTask.addEventListener('click', (event)=>{
    event.preventDefault(); 
    const task = document.getElementById("userInput").value
    addNewTask(task);
})

// HTML CSS JSResult
// EDIT ON
// let button = document.querySelector('#button');
// let msg = document.querySelector('#message');

// button.addEventListener('click', ()=>{
//   msg.classList.toggle('reveal');
// })


