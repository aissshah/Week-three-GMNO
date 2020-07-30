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
    checkBox.setAttribute("id", "taskCheckbox" + taskNumber)
    checkBox.classList.add("check__box")
    let userTask = document.createElement("label")

    userTask.setAttribute("for", "taskCheckbox"+ taskNumber)
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
//Submit task   
const addTask = document.getElementById('submitBtn') //refers to the submit button
addTask.addEventListener('click', (event)=>{
    event.preventDefault(); 
    const task = document.getElementById("userInput").value;    
    if (task) {
        addNewTask(task);
        document.querySelector('#userInput').value = '';
    }    
})

//Delete task
orderedList.addEventListener('click', (event) => {
    if(event.target.className == 'delete__btn'){
        const li = event.target.parentElement
        orderedList.removeChild(li)
    }
})



// Get checked tasks 

// find the checked task , return its text content
// for (let i = 0; i < myNodeList.length; i++) {
//     let item = myNodeList[i];
//   }

// const list = document.querySelectorAll('input[type=checkbox]');
// {
//   checkbox.checked = true;
// }

const finishedSection = document.getElementById("finished")

document.addEventListener("click", e => {
    if (e.target.type === "checkbox"){
        if(e.target.checked) {
            orderedList.removeChild(e.target.parentElement)
            finishedSection.appendChild(e.target.parentElement)
        }
        else{
            finishedSection.removeChild(e.target.parentElement)
            orderedList.appendChild(e.target.parentElement)  
        }
    }
})

