function getClosestToZero(arrey) {
    let min = arrey[0];
    for (let i = 0; i < arrey.length; i++) {
        if (Math.abs(min) > Math.abs(arrey[i])) {
            min = arrey[i];
        }
    }
    return min;
}