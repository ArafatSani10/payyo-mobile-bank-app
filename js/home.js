// add money to the account 

// step-01-> add an event handlar to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    // step-02
    let addMoneyInput = document.getElementById('input-add-money').value;
    let addPinInput = document.getElementById('input-pin-money').value;
    console.log(addMoneyInput,addPinInput);
 


})