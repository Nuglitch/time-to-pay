export function joinArrays(firstArray, secondArray, firstKey, secondKey) {
    return firstArray.map(
        (elemFirst) => (
            Object.assign({}, secondArray.find((elemSecond) => (elemFirst[firstKey] === elemSecond[secondKey])), elemFirst)
        )
    )
};