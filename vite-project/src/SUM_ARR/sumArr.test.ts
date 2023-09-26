import { describe, test, expect } from "vitest";
import { sumArray } from "./sumArr"

describe("sum_of_arr", () => {
    test("sum", () => {
        const my_arr = [10,20,30,40]
        const result = sumArray(my_arr)
        expect(result).toBe(100)
    })
    test("sum of arr is smaller then 9", () => {
        const my_arr = [1,2,3,1]
        const result = sumArray(my_arr)
        expect(result).toBeGreaterThan(9)
    })
})