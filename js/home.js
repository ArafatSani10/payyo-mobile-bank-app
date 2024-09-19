// add money to the account 

// step-01-> add an event handlar to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // step-02
    let addMoneyInput = document.getElementById('input-add-money').value;
    let addPinInput = document.getElementById('input-pin-money').value;
    console.log(addMoneyInput, addPinInput);

    // step-03
    if (addPinInput === '12345') {
        console.log('adding money to your account ')
        // step-04
        let balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step-05
        let addMoneynumber = parseFloat(addMoneyInput);
        let balanceNumber = parseFloat(balance);
        let updateNumber = addMoneynumber + balanceNumber;
        console.log(updateNumber);

        // step-06

        document.getElementById('account-balance').innerText = updateNumber;
    }
    else {
        alert('failed to add money.! Please try again.')
    }



})