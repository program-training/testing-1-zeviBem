import { describe, test, expect } from "vitest";
import { sqrt } from "./numToSqrt"

describe("sqrt", () => {
    test("sqrt the num", () => {
        const myNum  = 25
    const result = sqrt(myNum)
    expect(result).toBe(5)
    })
})