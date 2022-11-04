
const backdrop = document.getElementById('backdrop');
const modal = document.querySelector('.modal');

const addToDoBtn= document.querySelector('#add-todo');

const USER_NAME = 'user-name';
const ADD_TO_DO='add-to-do';

const removeBackdrop=()=>{
    backdrop.classList.remove('visible');
}


const addTaskHandler=(ev)=>{
    ev.preventDefault();
    console.log('form submitted handler');
    //implement logic to consume data here
    modal.innerHTML='';
    removeBackdrop();

}

const addModalContent=(type)=>{
    if(type===ADD_TO_DO){
        const titleEl= document.createElement('h3');
        const formWrapper=document.createElement('div');
        titleEl.innerHTML='title';
        //call create form Gareth with different input type to add-to-do use input type text
        formWrapper.innerHTML= createForm('add-task-form','Enter task', 'create-task');
        modal.append(titleEl, formWrapper);
        const formBtn = document.querySelector('#add-task-form button');
        formBtn.addEventListener('click', addTaskHandler);
    } else if (type===USER_NAME){
        //call add name from Gareth with different input type to handle user name and store it
        return 'user-name';
    }

}

const showBackDrop = (type) => {//will use it when greeting too, so different types will be
    backdrop.classList.add('visible');
    addModalContent(type);//will add form for name or todo input
    modal.classList.add('visible');

  };

  const hideBackdrop = ()=>{
    backdrop.classList.remove('visible');
    modal.innerHTML='';
    //modal.classList.remove('visible')
  }
const renderAddToDoForm=()=>{

}

const addToDoHandler=()=>{
    showBackDrop(ADD_TO_DO);//form from Gareth code
}

addToDoBtn.addEventListener('click', addToDoHandler);



// This function populates the inputFormDiv with the html form
function createForm(formId, labelText, inputId) {//Enter task, create-task
  return `<form id=${formId}>
      <label for="create-task">${labelText}</label>
      <input 
      type="text"
      id=${inputId}
      name=${inputId}
      required
      >
    <button type="submit">Submit</button>
</form>`
}


