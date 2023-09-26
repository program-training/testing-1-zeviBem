export function sumArray(arr: number[]) {
    let sum_arr: number = 0
    for (let i = 0; i < arr.length; i++) {
        sum_arr += arr[i]
    }
    return sum_arr
}