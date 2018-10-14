/*
@param {number} x
@return {number}
*/

import reverseInteger from "./reverseInteger";

test("input 123 should return 321", () => {
  expect(reverseInteger(123)).toBe(321);
});
test("input -123 should return -321", () => {
  expect(reverseInteger(-123)).toBe(-321);
});
test("input 120 should return 21", () => {
  expect(reverseInteger(120)).toBe(21);
});
test("input 7,600,000,003 should return 0", () => {
  expect(reverseInteger(7600000003)).toBe(0);
});
