test("Submitting a new task adds it to the list", t => {
    const expected = [li];
    const result = document.getElementsByTagName("li");
    t.equal(result.length, expected.length)
    for (let i = 0; i < result.length; i++) {
        t.equal(result[i], expected[i])
    }
    
  });
