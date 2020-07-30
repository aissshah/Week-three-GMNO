// TESTS SHOULD BE SELF-CONTAINED AND ISOLATED,  IF ONE TEST FAILS IT DOESNT AFFECT ANOTHER TEST

test("Submitting a new task adds it to the list", t => {
    const expected = document.querySelector(".todo").childElementCount;
    const result = document.getElementsByTagName("li");
    t.equal(result.length, expected.length)
    for (let i = 0; i < result.length; i++) {
        t.equal(result[i], expected[i])
    }
    
});

// user clicks on to-do/done buttons 
// displayed panels change according to what the use has pressed
// create variable for toggle buttons
//  

// test("Checking a box removes it from the list and moves it to finished", t => {
//     const expected = document.querySelector(".todo").childElementCount;
//     const result = document.querySelectorAll()
// } )

test("clicking on todo button should hide finished section", t => {
    const result = document.querySelector(".finished__board").classList.contains("hidden");
    const expected = true;
    
    t.equal(result, expected)
})

test("addHidden adds class of hidden to an element", t => {
    addHidden(document.querySelector(".todo__board"));
    const result = document.querySelector(".todo__board").classList.contains('hidden')
    const expected = true;

    t.equal(result,expected);
})

test("removeHidden removes class of hidden from an element", t => {
    removeHidden(document.querySelector(".todo__board"));
    const result = document.querySelector(".todo__board").classList.contains('hidden')
    const expected = true;

    t.equal(result,expected);
})


//create a task and check if it exists querySelectorAll.length 

test("Clicking input should add a list item", t => {    
    const submitBtn = document.querySelector('#submitBtn');
    userInput.value = "Add a todo list item";
    submitBtn.click();  
    let listItems = document.querySelectorAll('li');
    t.equal(listItems.length, 1);
    userInput.value = "";
    orderedList.removeChild(listItems[0]);
    
  });

// const result = document.getElementsByTagName("li");

// test("Submitting a new task increases the list by one task", t => {
//     const expected = [li];
//     t.equal(result.length, expected.length)
//     for (let i = 0; i < result.length; i++) {
//         t.equal(result[i], expected[i])
//     }

//   });

test("Deleting an entry removes it from the list", t => {
    const deleteTasks = document.querySelectorAll('.delete__btn');
    let taskNum = deleteTasks.length;
    const expected = taskNum -1;
});



// ---------------------------------------------------------------------------------------------
//  Moving checked items into finished section
// ---------------------------------------------------------------------------------------------

// check what task has been checked
//  if a task has been checked -> remove from to do section
//                              -> add it to finished section
function check() {
    document.getElementById("taskCheckbox1").checked = true; 
}

function uncheck() {
    document.getElementById("taskCheckbox1").checked = false;
}

test("The selected task has been checked", t => {
    check();
    const result = document.getElementById("taskCheckbox1").checked 
    const expected = true; 

    t.equal(result, expected);
    uncheck();
})

test("Selected task is accessible", t => {
    check();
    const result = document.getElementById("taskCheckbox1").nextSibling.textContent
    const expected = "Add a todo list item"

    t.equal(result, expected);
    uncheck()
})

// test("Checking a task removes it from the to-do section and adds it to the finished section", t => {
//     const result = orderedList.childElementCount;
//     check()
//     orderedList.removeChild(document.getElementById("taskCheckbox1"))
//     const expected = orderedList.childElementCount;

//     t.notEqual(result, expected)
//     uncheck();
// })





// test("removeHidden removes class of hidden from an element", t => {
//     removeHidden(document.querySelector(".todo__board"));
//     const result = document.querySelector(".todo__board").classList.contains('hidden')
//     const expected = true;

//     t.equal(result,expected);
// })

// function check() {
//     document.getElementById("myCheck").checked = true;
// }

// function uncheck() {
//     document.getElementById("myCheck").checked = false;
// }