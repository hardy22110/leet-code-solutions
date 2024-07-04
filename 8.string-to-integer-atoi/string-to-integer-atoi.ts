export function myAtoi(s: string): number {
    // 去除空白
    let trimStrList = [...s.trim()]
    let result: string | number = ''
    for(let i = 0; i < trimStrList.length; i++) {
        const currentStr = trimStrList[i]
        // 第一碼
        if (i === 0) {
            // 第一碼不能是0, 正號排除
            if (currentStr === '0' || currentStr === '+') {
                continue
            }
            // 第一碼可以是負數
            if (currentStr === '-') {
                result += currentStr
                continue
            }
        }
        // 第一碼是負數第二碼不能是0
        if (i === 1 && trimStrList[0] === '-' && currentStr === '0') {
            continue
        }
        if (currentStr.match(/[0-9]+/)) {
            result += currentStr
        } else {
            break
        }
    }
    result = Number(result)
    // 非數字
    if (isNaN(result)) {
        result = 0
    }
    // 最大最小範圍
    if (result > 2147483647) {
        result = 2147483647
    }
    if (result < -2147483648) {
        result = -2147483648
    }  
    return result
};