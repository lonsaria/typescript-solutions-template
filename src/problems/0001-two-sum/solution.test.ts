import { describe, expect, it } from "vitest";
import { twoSum } from "./solution";

describe("0001. Two Sum", () => {
  it("returns indices of two values that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("works when the values are separated by other elements", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("works with duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("returns an empty array when no pair exists", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
