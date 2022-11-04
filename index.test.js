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

test('fn should populate div with new html form', () => {
  const actual = createTaskHtml();
  const expected = inputFormDiv.innerHTML;
  equal(actual, expected);
})

  