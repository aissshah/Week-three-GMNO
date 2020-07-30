//Global Variables
let taskNumber = 0;
const orderedList = document.querySelector('#ordered__list');

//Functions
const addNewTask = (text) => {
    taskNumber += 1; 
    let fragment = new DocumentFragment();
    let task = document.createElement("li")
    let checkBox = document.createElement("input")

    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", "taskCheckbox"+taskNumber)
    checkBox.classList.add("check__box")
    let userTask = document.createElement("label")

    userTask.setAttribute("for", "taskCheckbox"+taskNumber)
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete__btn")

    deleteBtn.textContent = 'delete'
    userTask.innerHTML = text 

    fragment.appendChild(task);
    task.appendChild(checkBox);
    task.appendChild(userTask);
    task.appendChild(deleteBtn);

    orderedList.appendChild(fragment);
}


//Submit task   
const addTask = document.getElementById('submitBtn') //refers to the submit button
addTask.addEventListener('click', (event)=>{
    event.preventDefault(); 
    const task = document.getElementById("userInput").value
    addNewTask(task);
})

//Delete task
orderedList.addEventListener('click', (event) => {
    if(event.target.className == 'delete__btn'){
        const li = event.target.parentElement
        orderedList.removeChild(li)
    }
})
