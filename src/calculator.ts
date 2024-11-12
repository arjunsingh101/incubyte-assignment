export const add = (numbers: string): number => {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((acc, num) => acc + num, 0);
};
