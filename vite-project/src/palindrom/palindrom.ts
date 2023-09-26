export function checkStr(str: string): boolean {
    const palindrome =  str.split('').reverse().join('')
    if (str === palindrome) {
        return true
    }
    else {
        return false
    }
}