function capitalize_Words(str){
    let splitted = str.split(' ');
    var Arr = [];
    for (let i=0;i<splitted.length;i++){
        let capitalized = splitted[i][0].toUpperCase()+splitted[i].slice(1);
        Arr.push(capitalized)
    }
    return Arr.join(' ');
}

console.log(capitalize_Words('js string exercises'));
//"Js String Exercises"