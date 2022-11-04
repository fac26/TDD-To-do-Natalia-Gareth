// function createTaskHtml() {
//   const newHtml = `<p></p>`
//   return newHtml;
// }

// function createTaskHtml() {
//   const newFormHtml = `<form action="">
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
// </form>`
//   return newFormHtml;
// }

const inputFormDiv = document.querySelector("#to-do-task-input-form-div");

function createTaskHtml() {
  const newFormHtml = `<form action="">
  <fieldset>
    <legend>Create your to-do task</legend>
      <label for="create-task">Enter task</label>
      <input 
      type="text"
      id="create-task"
      name="create-task"
      required
      >
  </fieldset>
</form>`

  inputFormDiv.innerHTML = newFormHtml;

  return inputFormDiv.innerHTML;
}

