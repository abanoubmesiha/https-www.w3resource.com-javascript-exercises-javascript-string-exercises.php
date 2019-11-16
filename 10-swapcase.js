/*10. Write a JavaScript function that takes a string which has lower 
and upper case letters as a parameter and converts upper case letters 
to lower case, and lower case letters to upper case. */
function swapcase(str) {
    let Arr = str.split('');
    var newArr = [];
    let i;
    for (i=0 ; i<Arr.length ; i++){
        let regex1 = /[A-Z]/;
        let regex2 = /[a-z]/;
        if (regex1.test(Arr[i])){
            newArr.push(Arr[i].toLowerCase())
        }
        else if (regex2.test(Arr[i])){
            newArr.push(Arr[i].toUpperCase())
        }
        else  newArr.push(Arr[i]);
    }
    return newArr;
}

console.log(swapcase('AaBbc3'));