function isPrime(intNumber) {
    const int = 5;
    if (intNumber === int || intNumber % int !== 0) {
        return true;
    } else {
        return false;
    }
}