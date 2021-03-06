//Global Variables
let taskNumber = 0;
const orderedList = document.querySelector("#ordered__list");

//Functions
const addNewTask = (text) => {
  taskNumber += 1;
  let fragment = new DocumentFragment();
  let task = document.createElement("li");
  let checkBox = document.createElement("input");

  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "taskCheckbox" + taskNumber);
  checkBox.classList.add("check__box");
  checkBox.value = text;
  // let userTask = document.createElement("label");
  // userTask.setAttribute("for", "taskCheckbox" + taskNumber);
  let deleteBtn = document.createElement("button");
  let deleteIcon = document.createElement("i");
  deleteBtn.classList.add("delete__btn");
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-trash-alt");
  deleteBtn.setAttribute("aria-label", "delete");
  deleteBtn.appendChild(deleteIcon);

  //   deleteBtn.textContent = "delete";
  // userTask.innerHTML = text;

  fragment.appendChild(task);

  
  task.textContent = text;
  task.insertBefore(checkBox, task.firstChild);
  // task.innerHTML = "<input type='checkbox' id='taskCheckbox'"+ taskNumber + "class='check__box/>" + text;
  // task.appendChild(userTask);
  task.appendChild(deleteBtn);

  orderedList.appendChild(fragment);
};

const addHidden = (elem) => {
  elem.classList.add("hidden");
};

const removeHidden = (elem) => {
  elem.classList.remove("hidden");
};

//Event Listeners
// const addTask = document.getElementById('submitBtn') //refers to the submit button
// console.log(addTask)
// addTask.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const task = document.getElementById("userInput").value
//     addNewTask(task);
// })

const todoSectionBoard = document.querySelector(".todo__board");
const finishSectionBoard = document.querySelector(".finished__board");
const todoButtonTog = document.getElementsByClassName("todo__toggle")[0];
const finishedButtonTog = document.getElementsByClassName("finished__toggle")[0];
todoButtonTog.addEventListener("click", () => {
  if (todoSectionBoard.classList.contains("hidden")) {
    removeHidden(todoSectionBoard);
    addHidden(finishSectionBoard);
    finishedButtonTog.classList.add("inactive__button");
    todoButtonTog.classList.remove("inactive__button");
  }
});
todoButtonTog.addEventListener("keyup", (e) => {
  if (e.keycode === 13) {
    if (todoSectionBoard.classList.contains("hidden")) {
      removeHidden(todoSectionBoard);
      addHidden(finishSectionBoard);
      finishedButtonTog.classList.add("inactive__button");
      todoButtonTog.classList.remove("inactive__button");
    }
  }
});
finishedButtonTog.addEventListener("click", () => {
  if (finishSectionBoard.classList.contains("hidden")) {
    addHidden(todoSectionBoard);
    todoButtonTog.classList.add("inactive__button");
    finishedButtonTog.classList.remove("inactive__button");
    removeHidden(finishSectionBoard);
  }
});
finishedButtonTog.addEventListener("keyup", (e) => {
  if (e.keycode === 13) {
    if (finishSectionBoard.classList.contains("hidden")) {
      addHidden(todoSectionBoard);
      removeHidden(finishSectionBoard);
      todoButtonTog.classList.add("inactive__button");
      finishedButtonTog.classList.remove("inactive__button");
    }
  }
});
//Submit task
const addTask = document.getElementById("submitBtn"); //refers to the submit button
addTask.addEventListener("click", (event) => {
  event.preventDefault();
  const task = document.getElementById("userInput").value;
  if (task) {
    addNewTask(task);
    document.querySelector("#userInput").value = "";
  }
});

//Delete task
orderedList.addEventListener("click", (event) => {
  if (event.target.className == "delete__btn") {
    const li = event.target.parentElement;
    orderedList.removeChild(li);
  }
});


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
  console.log(e.target.type)
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