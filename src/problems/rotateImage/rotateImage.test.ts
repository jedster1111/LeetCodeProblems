import { rotateImage } from "./rotateImage";

it("input [[1, 2, 3], [4, 5, 6]] returns [[4, 1], [5, 2], [6, 3]]", () => {
  const result = rotateImage([[1, 2, 3], [4, 5, 6]]);
  const expected: number[][] = [[4, 1], [5, 2], [6, 3]];

  expect(result).toEqual(expected);
});

it("input [[1, 2, 3], [4, 5, 6], [7, 8, 9]] returns [[7, 4, 1], [8, 5, 2], [9, 6, 3]]", () => {
  const result = rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  const expected: number[][] = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

  expect(result).toEqual(expected);
});

it("input [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] returns [[9, 5, 1], [10, 6, 2], [11, 7, 3], [12, 8, 4]]", () => {
  const result = rotateImage([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
  const expected: number[][] = [[9, 5, 1], [10, 6, 2], [11, 7, 3], [12, 8, 4]];

  expect(result).toEqual(expected);
});

it("input [[1], [2], [3]] returns [[3, 2, 1]]", () => {
  const result = rotateImage([[1], [2], [3]]);
  const expected: number[][] = [[3, 2, 1]];

  expect(result).toEqual(expected);
});

it("input [] returns []", () => {
  const result = rotateImage([]);
  const expected: number[][] = [];

  expect(result).toEqual(expected);
});
