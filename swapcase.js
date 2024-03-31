// The following function will swap the case of each character of any string it accepts:
function changeCase(string) {
return string.replace(/[a-zA-Z]/g,
function(char) {
    return char ===
    char.toUpperCase() ?
    char.toLowerCase() :
    char.toUpperCase();
}
);

}

// Example of use:
console.log(changeCase('Nice Haircut'));  // Output: nICE hAIRCUT