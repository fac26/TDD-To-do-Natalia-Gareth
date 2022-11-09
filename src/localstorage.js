const tasks = 'tasks';

const updateLocalStorage = (list) => {
  localStorage.setItem(tasks, JSON.stringify(list));
};
const getItemsFromLocalStorage = (list) => {
  const getStored = localStorage.getItem(tasks);
  if (getStored) {
    list = JSON.parse(getStored);
    for (const task of list) {
      addToDoItem(task.title, task.completed, task.id);
      if (task.completed) {
        const li = document.getElementById(task.id);
        const label = li.querySelector('label');
        label.append(addDone());
        toDoListDOMcompleted.prepend(li);
      }
    }
  }
};
