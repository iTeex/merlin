/* ********************** *
 * *** STRING METHODS *** *
 * ********************** */

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