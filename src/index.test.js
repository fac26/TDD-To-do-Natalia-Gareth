

test('addModalContent expected to get an argument and return user-name if argument is user-name', ()=>{
    const actual=addModalContent('user-name');
    const expected='user-name';
    equal(actual, expected)
});

test('when button Add-to-do was clicked, modal shows form with id=add-task-form',()=>{
    const button = document.getElementById('add-todo');
    button.click();
    const form = document.getElementById('add-task-form');
    const actual=document.body.contains(form);
    const expected= true;
    equal(actual, expected)
});
test('click submit should remove form from modal',()=>{
    const form = document.getElementById('add-task-form');
    const button = form.querySelector('button[type="submit"]');
    form.querySelector('input').value='xxx';
    button.click();//we can't listen to submit event here?    
    const actual=document.body.contains(form);
    const expected=false
    equal(actual, expected);
    ToDoList.length=0;
});

test('addToDoItem("handle event listener") should add item to ToDoList array', ()=>{
    addToDoItem('handle event listener');
    const actual=ToDoList[0].title;
    const expected='handle event listener';
    equal(actual, expected); 
    ToDoList.length=0;
});

/***************************************************************** */
// Create form html tests

// test('fn should return new html', () => {
//   const actual = createTaskHtml();
//   const expected = `<p></p>`;
//   equal(actual, expected);
// })

// test('fn should return new html form', () => {
//   const actual = createTaskHtml();
//   const expected = `<form action="">
//   <fieldset>
//     <legend>
//       <label for="create-task">Create your to-do task</label>
//       <input 
//       type="text"
//       id="create-task"
//       name="create-task"
//       required
//       >
//     </legend>
//   </fieldset>
// </form>`;
//   equal(actual, expected);
// })

test('createForm() should return form', () => {
  const form = createForm();
  const actual = /^\<form/.test(form);
  const expected = true;
  equal(actual, expected);
})


  