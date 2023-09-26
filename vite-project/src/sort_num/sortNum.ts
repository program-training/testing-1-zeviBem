export function sortNumber(arr: number[]): number[] {
    const sorted = arr.slice().sort((num1, num2) => num1 - num2)
    return sorted
}