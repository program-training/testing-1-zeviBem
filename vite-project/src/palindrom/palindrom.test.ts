import { describe, test, expect } from "vitest"
import {checkStr} from './palindrom'

describe("palindrome", () => {
    test('check', () => {
        const myString = "aba"
        const funcPalindrome = checkStr(myString)
        expect(funcPalindrome).toBe(true)
    });
    test('not-palindrome', () => {
        const myString = "1234"
        const funcPalindrome = checkStr(myString)
        expect(funcPalindrome).toBe(false)
    })
})