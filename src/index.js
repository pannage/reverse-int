module.exports = function reverse (n) {
    if (n>0) {
        let nStr = n + ''
        return nStr.split('').reverse().join('')*1

    } else {
        let nStr = n*-1 + ''
        return nStr.split('').reverse().join('')*1

    }

}
