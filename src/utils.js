/* ********************** *
 * *** STRING METHODS *** *
 * ********************** */

export function compareStrings(str1, str2) {
    let str1Sorted = str1.split("").sort().join(""),
        str2Sorted = str2.split("").sort().join("");

    return str1Sorted === str2Sorted;
}

export function ucfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* ********************* *
 * *** ARRAY METHODS *** *
 * ********************* */

export function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}