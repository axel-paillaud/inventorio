export function createPairs(initialArray, newArray = [], index = 0) {
    newArray[index] = [];
    initialArray.forEach((element) => {
        if (newArray[index].length < 2) {
            newArray[index].push(element);
        }
        else {
            index++;
            newArray[index] = [];
            newArray[index].push(element);
        }
    });
    return newArray;
}

export function createActivePairs(initialArray) {
    return createPairs(initialArray.filter((element) => element.isActive));
}
