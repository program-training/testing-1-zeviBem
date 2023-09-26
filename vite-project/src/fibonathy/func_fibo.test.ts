import { describe,test,expect } from "vitest";
import { isFibonacciArray, nextFibonacciNumber } from "./func_fibo";

describe("check_fibonacci", () => {
    test('its fibonacci', () => {
        const my_fibonacci: number[] = [0,1,1,2,3,5,8]
        const result = isFibonacciArray(my_fibonacci)
        expect(result).toBe(true)
    })
    test('its not fibonacci', () => {
        const my_fibonacci: number[] = [0,1,1,2,9]
        // const result = isFibonacciArray(my_fibonacci)
        expect(() => isFibonacciArray(my_fibonacci)).toThrowError(
            "Input array  it's not a Fibonacci sequence.")
    })

    test("input array with less than 3 numbers", () => {
        const shortArray = [0, 1];
        expect(() => isFibonacciArray(shortArray)).toThrowError(
            "Input array must have at least 3 numbers to check if it's a Fibonacci sequence.")
    })

})
describe("nextFibonacciNumber", () => {
    test("valid Fibonacci sequence", () => {
      const fibonacciArray = [0, 1, 1, 2, 3, 5, 8];
      const result = nextFibonacciNumber(fibonacciArray);
      expect(result).toBe(13);
      expect(fibonacciArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    })

    test("invalid Fibonacci sequence", () => {
        const nonFibonacciArray = [1, 2, 4, 8, 16];
        expect(() => nextFibonacciNumber(nonFibonacciArray)).toThrowError(
          "Input array  it's not a Fibonacci sequence."
        );
      });

      test("input array with less than 3 numbers", () => {
        const shortArray = [0, 1];
        expect(() => nextFibonacciNumber(shortArray)).toThrowError(
          "Input array must have at least 3 numbers to check if it's a Fibonacci sequence."
        );
      }) 
})