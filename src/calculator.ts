export const add = (numbers: string): number => {
  if (!numbers) return 0;

  const nums = numbers.split(/,|\n/).map(Number);
  return nums.reduce((acc, num) => acc + num, 0);
};
