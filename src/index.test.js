//label, function
test('addModalContent expected to get an argument and return true if argument is add-to-do', ()=>{
    const actual=addModalContent('add-to-do');
    const expected=true;
    equal(actual, expected)
});
test('addModalContent expected to get an argument and return user-name if argument is user-name', ()=>{
    const actual=addModalContent('user-name');
    const expected='user-name';
    equal(actual, expected)
});

  