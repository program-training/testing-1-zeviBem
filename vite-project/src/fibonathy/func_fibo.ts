export function isFibonacciArray(arr: number[]): boolean {
    if (arr.length < 3) {
      throw new Error(
        "Input array must have at least 3 numbers to check if it's a Fibonacci sequence."
      );
    }
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        throw new Error("Input array  it's not a Fibonacci sequence.");
      }
    }
    return true;
  }
  
  export function nextFibonacciNumber(arr: number[]): number {
    if (isFibonacciArray(arr)) {
      const len = arr.length;
      const nextNumber = arr[len - 1] + arr[len - 2];
      arr.push(nextNumber);
      return nextNumber;
    } else {
      throw new Error(
        "Input array must be a Fibonacci sequence to calculate the next Fibonacci number."
      );
    }
  }
    
