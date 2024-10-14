function fibs(length) {
  if (length <= 0) return [];
  if (length === 1) return [0];
  if (length === 2) return [0, 1];

  const array = fibs(length - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(fibs(10));