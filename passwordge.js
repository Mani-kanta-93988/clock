// let range2=document.getElementById("range1");
// let spanvalue2=document.getElementById("spanvalue");
// let passBox=document.getElementById("passbox");
// let Lowercase=document.getElementById("Lowercase");
// let Uppercaseletters=document.getElementById("Uppercaseletters");
// let Numbers=document.getElementById("Numbers");
// let Symbols=document.getElementById("Symbols");
// let buttonn=document.getElementById("button");
// spanvalue2.textContent=range2.value;
// range2.addEventListener('input',()=>{
//     spanvalue2.textContent=range2.value;
// })
// buttonn.addEventListener('click', ()=>{
//     passBox.value=ge();
// })
// function ge(){
//     let genpassword=" ";
//     genpassword=Math.random();
//     return genpassword;
// }
// // generatePassword
let range2 = document.getElementById("range1");
let spanvalue2 = document.getElementById("spanvalue");
let passBox = document.querySelector(".passbox");  // Use class instead of id
let Lowercase = document.getElementById("Lowercase");
let Uppercaseletters = document.getElementById("Uppercaseletters");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let buttonn = document.getElementById("button");
let icon1=document.getElementById("iconn");

spanvalue2.textContent = range2.value;

// Update the password length display when the slider is adjusted
range2.addEventListener('input', () => {
    spanvalue2.textContent = range2.value;
});

// Generate the password when the button is clicked
buttonn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

// Function to generate the password based on selected options
function generatePassword() {
    let password = '';
    let length = range2.value; // Get the length from the range slider

    // Characters available for password generation
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols="!@#$%^&*()_+}{::?><";

    // Pool of characters to use for generating the password
    let character = '';

    if (Lowercase.checked) {
        character+= lowerCaseLetters;
    }
    if (Uppercaseletters.checked) {
        character += upperCaseLetters;
    }
    if (Numbers.checked) {
        character += numbers;
    }
    if (Symbols.checked) {
        character+= symbols;
    }
    
          if (!character) {
            // document.getElementById('result').textContent = 'Please select at least one option.';
            return;
          }
    // Generate a password by picking random characters from the pool
    for (let i = 0; i < length; i++) {
        password += character.charAt(Math.random() * character.length);
    }
    // document.getElementById('result').textContent = password;
    return password;
}
icon1.addEventListener('click',()=>{
    if(passBox.value!="" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
    }
    
})
