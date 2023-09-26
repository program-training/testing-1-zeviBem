// export function fibo(arr: number[]) {
//     if (arr.length >= 3) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] + arr[i+1] === arr[i+2]) {
//                 continue
//             }
//             return arr.push(arr[i]+arr[i-1])
//         }
        
//     }
//     else {
//         return 'this is not a fibonathi arrey'
//     }
// }
export function fibo(arr: number[]): number[] | string {
    if (arr.length < 2) {
      return 'this is not a fibonacci array';
    }
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        return 'this is not a fibonacci array';
      }
    }
  
    return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
  }
       
    
