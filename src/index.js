const backdrop = document.getElementById('backdrop');
const modal = document.querySelector('.modal');
const filterEl = document.querySelector('#filter-form');
const toDoListsContainer = document.querySelector(".todo-list--container");
const uncompletedContainer = document.querySelector(
  '.todo-list--container-uncompleted'
);
const completedContainer = document.querySelector(
  '.todo-list--container-completed'
);
const modalCloseBtn = document.querySelector('.modal-close-btn');
const addToDoBtn = document.querySelector('#add-todo');
const toDoListDOM = document.querySelector('.todo-list');
const toDoListDOMcompleted = document.querySelector('.completed-todo-list');
const USER_NAME = 'user-name';
const ADD_TO_DO = 'add-to-do';
const ToDoList = [];

const showBackDrop = (type) => {
  //will use it when greeting too, so different types will be
  backdrop.classList.add('visible');
  addModalContent(type); //will add form for name or todo input
  modal.classList.add('visible');
};

const removeBackdrop = () => {
  backdrop.classList.remove('visible');
};

const hideBackdrop = () => {
  backdrop.classList.remove('visible');
  modal.innerHTML = '';
  //modal.classList.remove('visible')
};

const resetModal = () => {
  modal.querySelector('.form-title').innerHTML = '';
  modal.removeChild(modal.querySelector('.form-wrapper'));
  removeBackdrop();
};

const addDone = () => {
  const div = document.createElement('span');
  div.classList.add('done');
  return div;
};

const toggleCompleted = (ev) => {
  
  const li = ev.target.closest('li');
  const task = ToDoList.find((el) => el.id === li.getAttribute('id'));
  task.completed = !task.completed; //toggle
  li.dataset.completed = task.completed;
  const label = li.querySelector('label');
  if (task.completed === true) {
    label.append(addDone());
    toDoListDOMcompleted.prepend(li);
  } else {
    label.removeChild(label.querySelector('.done'));
    toDoListDOM.prepend(li);
  }
  updateLocalStorage(ToDoList);
};

const createLi = (newTask) => {
  const template = document.querySelector('template');
  const content = template.content.cloneNode(true);
  const li = content.querySelector('li');
  const span = li.querySelector('span');
  span.innerHTML = newTask.title;
  const input = li.querySelector('input[type="checkbox"]');
  input.addEventListener('change', toggleCompleted);
  li.setAttribute('id', newTask.id);
  li.setAttribute('data-completed', newTask.completed);
  return li;
};

const renderTask = (task) => {
  const taskElement = createLi(task);
  toDoListDOM.prepend(taskElement); //add task to the top
};

const addToDoItem = (value, completed, taskId) => {
  const task = {
    title: value,
    completed: completed||false,
    id: taskId||new Date().getTime().toString(),
  };
  ToDoList.push(task);
  updateLocalStorage(ToDoList);
  renderTask(task);
};

const addTaskHandler = (ev) => {
  ev.preventDefault();
  const input = ev.target.querySelector('input');
  if (input.value.trim()) {
    addToDoItem(input.value.trim());
    resetModal();
  } else {
    input.classList.add('error');
  }
};

const addModalContent = (type) => {
  if (type === ADD_TO_DO) {
    const titleEl = modal.querySelector('.form-title');
    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');
    titleEl.innerHTML = 'Create your to-do task';
    //call create form Gareth with different input type to add-to-do use input type text
    formWrapper.innerHTML = createForm(
      'add-task-form',
      'Enter task',
      'create-task'
    );
    modal.append(formWrapper);
    const form = document.querySelector('#add-task-form');
    form.querySelector('input').focus();
    form.addEventListener('submit', addTaskHandler);
  } else if (type === USER_NAME) {
    //call add name from Gareth with different input type to handle user name and store it
    return 'user-name';
  }
};

const addToDoHandler = () => {
  showBackDrop(ADD_TO_DO); //form from Gareth code
};
// This function populates the inputFormDiv with the html form
function createForm(formId, labelText, inputId) {
  //Enter task, create-task
  return `<form id=${formId}>
      <label for="create-task">${labelText}</label>
      <input 
      type="text"
      id=${inputId}
      name=${inputId}
      required
      >
    <button type="submit">Submit</button>
</form>`;
}


function taskDeleteHandler(e) {
  if (e.target.tagName.toLowerCase() === 'button'
  ) {
  const li = e.target.closest('li');
  const id = li.getAttribute('id');
  console.log(li);
  console.log(id);
  const task = ToDoList.find(el => el.id === id);
  console.log(task);
  if (task.completed) {
    toDoListDOMcompleted.removeChild(li);
  } else {
    toDoListDOM.removeChild(li);
  }

  ToDoList.splice(ToDoList.findIndex(el => el.id === id), 1);
}
}




const filterHandler = (ev) => {
  const value = ev.target.value;
  if (value === 'uncompleted') {
    completedContainer.classList.add('invisible');
    uncompletedContainer.classList.remove('invisible');
  } else if (value === 'completed') {
    uncompletedContainer.classList.add('invisible');
    completedContainer.classList.remove('invisible');
  } else if (value === 'all') {
    completedContainer.classList.remove('invisible');
    uncompletedContainer.classList.remove('invisible');
  }
};

getItemsFromLocalStorage(ToDoList);
addToDoBtn.addEventListener('click', addToDoHandler);
modalCloseBtn.addEventListener('click', resetModal);
filterEl.addEventListener('change', filterHandler);
toDoListsContainer.addEventListener('click', taskDeleteHandler);

