const backdrop = document.getElementById('backdrop');
const modal = document.querySelector('.modal');

const addToDoBtn= document.querySelector('#add-todo');

const USER_NAME = 'user-name';
const ADD_TO_DO='add-to-do';



const addModalContent=(type)=>{
    if(type===ADD_TO_DO){
        //call create form Gareth with different input type to add-to-do use input type text
        return true;
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
    modal.classList.remove('visible')
  }
const renderAddToDoForm=()=>{

}

const addToDoHandler=()=>{
showBackDrop(ADD_TO_DO);//form from Gareth code
}

addToDoBtn.addEventListener('click', addToDoHandler);
backdrop.addEventListener('click', hideBackdrop);
