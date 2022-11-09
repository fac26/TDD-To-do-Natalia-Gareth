

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
    form.querySelector('input').value='remove-form-test';
    button.click();//we can't listen to submit event here? 
    const actual=document.body.contains(form);
    const expected=false;
    equal(actual, expected);
    const id = ToDoList.find(el=> el.title === 'remove-form-test').id;
    toDoListDOM.removeChild(document.getElementById(id));
    ToDoList.splice(ToDoList.findIndex(el=>el.id===id), 1);
});

test('addToDoItem("handle event listener") should add item to ToDoList array', ()=>{
    addToDoItem('add item to ToDoList');
    const task = ToDoList.find(el=>el.title==='add item to ToDoList');
    const actual= task? '[item in ToDoList]': '[item was\'t found in ToDoList]';
    const expected='[item in ToDoList]';
    equal(actual, expected); 
    console.log(ToDoList)
    toDoListDOM.innerHTML='';
    ToDoList.length=0;
    /*toDoListDOM.removeChild(document.getElementById(task.id));
    ToDoList.splice(ToDoList.findIndex(el=>el.id===task.id), 1);*/
});

test('createLi() should return li HTML element',()=>{
    const li = createLi({title:'test <li>', completed:false, id:'test-li'});
    const expected = 'LI'
    const actual = li.tagName;
    equal(actual, expected);
});

test('createLi({title:"test", completed: true}) should return input\'s dataset.completed equal to true ',()=>{
    const li = createLi({title:'test', completed: true, id:'test-li-dataset'});
    const expected = 'true';//from DOM
    const actual = li.dataset.completed;
    equal(actual, expected);
    toDoListDOM.innerHTML='';
    ToDoList.length=0;
});

test ('toggleCompleted() ev handler should toggle dataset.completed of li el',()=>{
    addToDoItem('test toggleCompleted function');
    const task = ToDoList.find(el=>el.title==='test toggleCompleted function');
    const input = document.getElementById(task.id).querySelector('input');
    input.click();
    console.log('clicked');
    let expected = 'data-completed = true';//from DOM
    let actual = `data-completed = ${input.closest('li').dataset.completed}`;
    equal(actual, expected);
    input.click();
    console.log('clicked');
    expected = 'data-completed = false';//from DOM
    actual = `data-completed = ${input.closest('li').dataset.completed}`;
    equal(actual, expected);
    ToDoList.length=0;
    toDoListDOM.innerHTML='';
    toDoListDOMcompleted.innerHTML='';
});

test ('toggleCompleted() ev handler should find the task in ToDoList array and toggle task.completed value',()=>{
    addToDoItem('toggle completed');
    const task = ToDoList.find(el=>el.title==='toggle completed');    
    const input = document.getElementById(task.id).querySelector('input[type="checkbox"]');   
    input.click();    
    console.log('clicked');
    let expected = `{title: 'toggle completed', completed: true}`;
    let actual = `{title: '${task.title}', completed: ${task.completed}}`;
    equal(actual, expected);
    ToDoList.length=0;
    toDoListDOM.innerHTML='';
    toDoListDOMcompleted.innerHTML='';
});
test ('toggleCompleted() ev handler should display task in appropriate list',()=>{
    addToDoItem('move list');
    const task = ToDoList.find(el=>el.title==='move list'); 
    const input = document.getElementById(task.id).querySelector('input[type="checkbox"]');   
    input.click();    
    console.log('clicked');
    let expected = '[completed tasks list contains task = true]';
    let actual = `[completed tasks list contains task = ${toDoListDOMcompleted.contains(toDoListDOMcompleted.childNodes[0])}]`;
    equal(actual, expected);
    input.click();    
    console.log('clicked');
    expected = '[incomplete tasks list contains task = true]';
    actual = `[incomplete tasks list contains task = ${toDoListDOM.contains(toDoListDOM.childNodes[0])}]`;
    equal(actual, expected);   
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
