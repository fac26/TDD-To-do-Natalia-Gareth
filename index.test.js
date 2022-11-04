// Create form html tests
test('fn should return new html', () => {
  const actual = createTaskHtml();
  const expected = `<p></p>`;
  equal(actual, expected);
})

  