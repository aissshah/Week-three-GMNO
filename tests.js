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

