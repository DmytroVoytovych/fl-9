function getMin(arrey) {
    let min = arrey[0];
    for (let i = 0; i < arrey.length; i++) {
        if (min > arrey[i]) {
            min = arrey[i];
        }
    }
    return min;
}