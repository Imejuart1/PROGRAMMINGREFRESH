export function customSubString(startIndex, endIndex){

    if(endIndex === undefined){
        endIndex = this.length;
    }

    if(startIndex === endIndex){
        let temp = startIndex;
        startIndex = endIndex;
        endIndex = temp;
    }

    let result = '';

    for (i=startIndex; i<endIndex; i++){
        result += this[i];
    }

    return result;
}
