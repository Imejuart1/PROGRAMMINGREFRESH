var solution = function(s) {
    let maxcount =0
    let charcount ={};
    let mostRepeatedChar = '';
    for (let char of s){
        charcount[char] = (charcount[char] || 0) + 1
    }
    for (let char in charcount) {
    if (charcount[char]>maxcount){
        maxcount = charcount[char]
        mostRepeatedChar = char;
    }
}
return mostRepeatedChar;
}

const a = 'eeeeeeeeeeeeeerejioje0kl=eeeeeeeeeee';
const output = solution(a)
console.log(output);


function mostRepeatedChar(str) {
    let maxCount = 0;
    let mostRepeatedChar = '';

    for (let char of str) {
        let count = 0;
        for (let innerChar of str) {
            if (innerChar === char) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostRepeatedChar = char;
        }
    }

    return mostRepeatedChar;
}

console.log(mostRepeatedChar('eeeeeeeeeeeeeerejioje0kl=eeeeeeeeeee'))