const  inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("data-indicator");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelector("input[type=checkbox]");
const symbols = ',./!@#$%^&*()_+=-\{}[]`~</>?|';

let password = "";
let passwordLength = 10;
let checkCount = 1;

handleSlider();
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = "10px 10px color";
}
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}
function generateRandomNumber(){
    return getRndInteger(0,9);
}
function generateUpperCase(){
    return getRndInteger(97,123);
}
function generateLowerCase(){
    return getRndInteger(65,91);
}
function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = True;
    if(lowercaseCheck.checked) hasLower = True;
    if(numbersCheck.checked) hasNum = True;
    if(symbolsCheck.checked) hasSym = True;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength>=8)
    {
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper)&&(hasNum||hasSym)&&passwordLength>=6)
    {
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

function copyContent(){
    
}

