export function rotateImage(image: number[][]): number[][] {
  const result: number[][] = [];

  if (image.length === 0) {
    return result;
  }

  for (let x = 0; x < image[0].length; x++) {
    const row: number[] = [];

    for (let y = 0; y < image.length; y++) {
      row.push(image[image.length - 1 - y][x]);
    }

    result.push(row);
  }

  return result;
}
