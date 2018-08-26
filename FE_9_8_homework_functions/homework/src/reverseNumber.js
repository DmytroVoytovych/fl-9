function reverseNumber(number) {
    let rev = number.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(number);
}