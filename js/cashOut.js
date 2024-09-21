document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('button is clicked...')
    let cashOut = document.getElementById('input-cash-out').value;
    let cashOutNumber = parseFloat(cashOut)
    let pin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pin)

    if(pin === '1234'){
        console.log('money is reducing...')
        let balance = document.getElementById('account-balance').innerText;
        let balanceNumber = parseFloat(balance)

        let newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance
    }


    else{
        alert('Failed to cash out.Please try again.!')
    }
})