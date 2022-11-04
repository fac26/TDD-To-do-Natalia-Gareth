// Selected elements

const inputFormDiv = document.querySelector("#to-do-task-input-form-div");

// This function populates the inputFormDiv with the html form
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

