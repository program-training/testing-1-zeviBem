import {lenStr} from "./lengthString"
import { describe, test, expect } from "vitest"

describe("length", () => {
    test("len", () => {
        const myStr:string = "zev"
        const result: number = lenStr(myStr)
        expect(result).toBe(3)
    })
})