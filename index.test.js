test("map() should return an array with the same number of elements", () => {
    const result = map([1], () => {});
    equal(result.length, 1);
  });

  