---
difficulty: Easy
source: LeetCode
tags:
  - array
  - hash-table
---

# 0001. Two Sum

Given an array of integers `nums` and an integer `target`, return the indices of two numbers whose sum is equal to `target`.

Each input has exactly one solution, and the same element cannot be used twice. The answer can be returned in any order.

## Input Format

- `nums`: an array of integers;
- `target`: the required sum.

## Output Format

An array containing the indices of the two values.

## Examples

### Example 1

```text
nums = [2, 7, 11, 15]
target = 9
Output: [0, 1]
```

### Example 2

```text
nums = [3, 2, 4]
target = 6
Output: [1, 2]
```

### Example 3

```text
nums = [3, 3]
target = 6
Output: [0, 1]
```

## Constraints

- `2 <= nums.length <= 10^4`;
- `-10^9 <= nums[i], target <= 10^9`;
- Exactly one valid answer exists.

## Solutions

### Hash Table (`solution.ts`)

While iterating through `nums`, calculate the complement of the current value: `complement = target - nums[index]`.

Store each visited value and its index in a `Map`. Before adding the current value, check whether its complement has already been visited. If it has, return both indices.

```ts
function twoSum(nums: number[], target: number): number[] {
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
```

**Time complexity:** `O(n)`, where `n` is the number of elements in `nums`.

**Space complexity:** `O(n)` for storing values and indices in the hash table.
