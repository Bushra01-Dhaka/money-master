
function calculateBtnClicked() {
    const incomeValue = getInputFieldValue('income-field');
    console.log(incomeValue);

    const foodValue = getInputFieldValue('food-field');
    console.log(foodValue);

    const rentValue = getInputFieldValue('rent-field');
    console.log(rentValue);

    const clothsValue = getInputFieldValue('cloths-field');
    console.log(clothsValue);

    const totalExpense = foodValue + rentValue + clothsValue;
    console.log(totalExpense);

   

    const balance = incomeValue - totalExpense;

    // setting expenses and balance into the right place 
    settingValueIntoElement('total-expense', totalExpense);
    settingValueIntoElement('total-balance', balance);


}

function calculateSaveBtnClicked() {
    // save % field data
    const savePercentage = getInputFieldValue('save-field');
    console.log(savePercentage);

    //expenses and balance calcu taken frm previous function
    const incomeValue = getInputFieldValue('income-field');
    console.log(incomeValue);

    const foodValue = getInputFieldValue('food-field');
    console.log(foodValue);

    const rentValue = getInputFieldValue('rent-field');
    console.log(rentValue);

    const clothsValue = getInputFieldValue('cloths-field');
    console.log(clothsValue);

    const totalExpense = foodValue + rentValue + clothsValue;
    console.log(totalExpense);

    const balance = incomeValue - totalExpense;

    const savingAmount = parseFloat(incomeValue * (savePercentage/100));
    console.log(savingAmount);

    // const remainingBalance = balance - savingAmount;
    const remainingBalance = parseFloat(balance - (incomeValue * (savePercentage/100))) ;
    console.log(remainingBalance);

    // setting saving amount and remaining balance into the right element 
    settingValueIntoElement('total-saving', savingAmount);
    settingValueIntoElement('total-remaining', remainingBalance);



}

// common input getting input
function getInputFieldValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

//seting value into element 
function settingValueIntoElement(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}