function string_parameterize(str){
    if (typeof str == 'string'){
        let strToArr = str.split(" ");
        console.log(strToArr);
        let i;
        var newArr = [];
       for (i=0;i<strToArr.length;i++){
             newArr[newArr.length] = strToArr[i];
            }
            let joinedStr = newArr.join('-');
            let result = joinedStr.toLocaleLowerCase();
            console.log(result.replace(/\./g,''));
        }
}

string_parameterize("Robin Singh from USA.");
//"robin-singh-from-usa"