export default function hasValuesFromArray(set, arr) {
    return arr.every(set.has.bind(set));
}
