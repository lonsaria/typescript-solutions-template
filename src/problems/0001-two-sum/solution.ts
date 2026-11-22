export function twoSum(nums: number[], target: number): number[] {
  const indicesByValue = new Map<number, number>();

  for (let index = 0; index < nums.length; index += 1) {
    const complement = target - nums[index];
    const complementIndex = indicesByValue.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, index];
    }

    indicesByValue.set(nums[index], index);
  }

  return [];
}
