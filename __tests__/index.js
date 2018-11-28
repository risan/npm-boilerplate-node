/* global expect:false, test:false */
const foo = require("../src");

test("it resolves to bar", async () => {
  expect.assertions(1);

  const result = await foo("bar");

  expect(result).toBe("bar");
});
