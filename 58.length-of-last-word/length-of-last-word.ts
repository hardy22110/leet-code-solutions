export function lengthOfLastWord(s: string): number {
    const temp = s.trim().split(' ')
    return temp[temp.length - 1].length
};