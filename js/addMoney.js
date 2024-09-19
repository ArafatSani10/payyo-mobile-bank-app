document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    let addMoney = document.getElementById('input-add-money').value;
    let addMoneynumber = parseFloat(addMoney);
    let pinNumber = document.getElementById('input-pin-money').value;
    console.log(addMoney,pinNumber)
    if(pinNumber === '1234'){
        console.log('adding money to your account');
        let balance = document.getElementById('account-balance').innerText;
        let balanceNumber = parseFloat(balance);

        let newBalance = balanceNumber + addMoneynumber;

        document.getElementById('account-balance').innerText = newBalance

    }
    else{
        alert('failed to add money.! Please try again. ')
    }

})