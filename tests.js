
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



  