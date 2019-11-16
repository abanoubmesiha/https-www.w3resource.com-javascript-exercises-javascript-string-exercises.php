//9. Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalize_Words(str){
    let splitted = str.split(' ');
    var Arr = [];
    for (let i=0;i<splitted.length;i++){
        let capitalized = splitted[i][0].toUpperCase()+splitted[i].toLowerCase().slice(1);
        Arr.push(capitalized)
    }
    return Arr.join(' ');
}

console.log(capitalize_Words('js strIUing exerciIses'));
//"Js String Exercises"