console.log('button cliking file added ')
// step 01 -> set event handlar
document.getElementById('button-login').addEventListener('click', function(event){
    // step 02-> set pereventDefaut behaviour
    event.preventDefault();
    console.log('login button clicked')
    // step 03 -> get element by id get phone number
    let phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber )

})