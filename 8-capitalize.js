function capitalize(str){
    let Char = str.charAt(0).toUpperCase();
    let restS = str.substring(1,str.length);
    return Char+restS;
    }


console.log(capitalize('js string exercises'));
//"Js string exercises"
