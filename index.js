// function createTaskHtml() {
//   const newHtml = `<p></p>`
//   return newHtml;
// }
function createTaskHtml() {
  const newFormHtml = `<form action="">
  <fieldset>
    <legend>
      <label for="create-task">Create your to-do task</label>
      <input 
      type="text"
      id="create-task"
      name="create-task"
      required
      >
    </legend>
  </fieldset>
</form>`
  return newFormHtml;
}

