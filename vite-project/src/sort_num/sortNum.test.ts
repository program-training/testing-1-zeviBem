import { describe, test, expect } from "vitest";
import { sortNumber } from "./sortNum";

describe("sort", () => {
    test("to sort", () => {
        const myArr = [3,8,5,4]
        const result = sortNumber(myArr)
        expect(result).toEqual([3,4,5,8])

    })
})
