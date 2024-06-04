const inputNumber = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

function validatePhoneNumber(phoneNumber) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    if (regex.test(phoneNumber)) {
        return true;
    }
    return false;
}

function checkNumber() {
    const value = inputNumber.value;
    
    if (value === '' || value === ' ') {
        alert('Please provide a phone number');
    } else {
        const isValid = validatePhoneNumber(value);
        if (isValid) {
            result.innerHTML += `<span class="valid">Valid US number: ${value}</span>`;
            inputNumber.value = '';
        } else {
            result.innerHTML += `<span class="invalid">Invalid US number: ${value}</span>`;
            inputNumber.value = '';
        }
    }
};

checkButton.addEventListener('click', checkNumber);

clearButton.addEventListener('click', () => {
    inputNumber.value = '';
    result.innerHTML = '';
});

inputNumber.addEventListener('keyup', (e) => {
    const number = e.target.value;
    const key = e.key;
    const isEnterKeyPressed = key === 'Enter';
    if (isEnterKeyPressed) {
        checkNumber(number)
        e.target.value = '';
    };
});