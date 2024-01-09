const inputSlider = document.querySelector('[data-lengthSlider]')
const lengthDisplay = document.querySelector('[data-length]')
const indicator = document.querySelector('[data-indicator]')
const copyMsg = document.querySelector('[data-copyMsg]')
const passwordDisplay = document.querySelector('[data-passwordDisplay]')
const copyBtn = document.querySelector('[data-copy]')

const upperCaseCheck = document.querySelector('#uppercase')
const lowerCaseCheck = document.querySelector('#lowercase')
const numbersCheck = document.querySelector('#numbers')
const symbolsCheck = document.querySelector('#symbols')

const generateBtn = document.querySelector('.generateButton')
const allCheckBox = document.querySelectorAll('input[type=checkbox]');

let password = ""
let checkcount = 0;
let passwordLength = 10
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

handleSlider()
function handleSlider() {
    if (inputSlider != null && inputSlider instanceof HTMLInputElement) {
        inputSlider.value = passwordLength;
    }
    lengthDisplay.textContent = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max-min)) + "% 100%";
}
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider()
})

function setIndicator(color) {
    // @ts-ignore
    indicator.style.backgroundColor = color;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomNumber() {
    return getRndInteger(0, 9);
}
function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}
function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}
function generateSymbol() {
    let index = getRndInteger(0, symbol.length)
    return symbol[index]
}
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (upperCaseCheck instanceof HTMLInputElement && upperCaseCheck.checked)
        hasUpper = true;
    if (lowerCaseCheck instanceof HTMLInputElement && lowerCaseCheck.checked) hasLower = true;
    if (numbersCheck instanceof HTMLInputElement && numbersCheck.checked) hasNumber = true;
    if (symbolsCheck instanceof HTMLInputElement && symbolsCheck.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.textContent = "copied"
    }
    catch (e) {
        copyMsg.textContent = "failed"
    }
    copyMsg?.classList.add('active')

    setTimeout(() => {
        copyMsg?.classList.remove('active')
    }, 2000);
}
copyBtn?.addEventListener('click', (e) => {
    if (passwordDisplay.value != null) {
        copyContent();
    }
})
function handleCheckBoxChange() {
    checkcount = 0; // every time fn gets called checkcount intitialize to 0
    allCheckBox.forEach(checkbox => {
        if (checkbox.checked) checkcount++;
    });

    //special condition
    if (checkcount > passwordLength) {
        passwordLength = checkcount;
        handleSlider();
    }
}
allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange)
})
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

generateBtn.addEventListener('click', () => {
    if (checkcount <= 0)
        return;

    if (passwordLength < checkcount) {
        console.log('yha p aaya h')
        passwordLength = checkcount;
        handleSlider();
    }

    // Remove Previous Password 
    password = "";

    let arrayOfCheckedFunction = [];

    if (upperCaseCheck.checked) arrayOfCheckedFunction.push(generateUpperCase);
    if (lowerCaseCheck.checked) arrayOfCheckedFunction.push(generateLowerCase);
    if (numbersCheck.checked) arrayOfCheckedFunction.push(generateRandomNumber);
    if (symbolsCheck.checked) arrayOfCheckedFunction.push(generateSymbol);

    // Compulsory Addition
    for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
        password += arrayOfCheckedFunction[i]();
    }

    // console.log("Password: " + password);

    // Additional addition
    for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
        let randIndex = getRndInteger(0, arrayOfCheckedFunction.length);
        password += arrayOfCheckedFunction[randIndex]();
    }
    // console.log("Password: " + password);

    // Shuffle Password 
    password = shuffle(Array.from(password));
    passwordDisplay.value = password;
    calcStrength();
});

const clearBtn = document.querySelector('[clr-button]')
function resetPassword() {
    if (passwordDisplay && passwordDisplay instanceof HTMLInputElement) {
        passwordDisplay.value = "";
        // passwordDisplay.placeholder = 'PASSWORD'
    }
}
clearBtn?.addEventListener('click', resetPassword)








