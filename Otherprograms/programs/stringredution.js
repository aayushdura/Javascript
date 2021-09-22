function StringReduction(str) {

    var i = 0;
    var letters = str.split("");
    do {
        if ((letters[i] == "a" && letters[i + 1] == "b") || (letters[i] == "b" && letters[i + 1] == "a")) {
            letters.splice(i + 1, 1);
            letters[i] = "c";
            i = 0;
        } else if ((letters[i] == "b" && letters[i + 1] == "c") || (letters[i] == "c" && letters[i + 1] == "b")) {
            letters.splice(i + 1, 1);
            letters[i] = "a";
            i = 0;
        } else if ((letters[i] == "c" && letters[i + 1] == "a") || (letters[i] == "a" && letters[i + 1] == "c")) {
            letters.splice(i + 1, 1);
            letters[i] = "b";
            i = 0;
        } else {
            i++;
        }
    } while (i < letters.length);
    // Return the length of the transformed string
    return letters.length;
}
console.log(StringReduction("cccc"));