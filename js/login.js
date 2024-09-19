// console.log('button cliking file added ')
// // step 01 -> set event handlar
// document.getElementById('button-login').addEventListener('click', function(event){
//     // step 02-> set pereventDefaut behaviour
//     event.preventDefault();
//     // console.log('login button clicked')
//     // step 03 -> get element by id get phone number
//     let phoneNumber = document.getElementById('phone-number').value;
//     let pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);

//     // this is temporary..you should do like this
//     // step -4
//     if(phoneNumber === '01747365915' && pinNumber === '12345'){
//         console.log('you are logged in')
//     }
//     else{
//         alert('wrong phone number or pin')
//     }
// })


document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();
    let phoneNumber = document.getElementById('phone-number').value;
    let pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    if (phoneNumber === '01747365915' && pinNumber === '12345') {
        console.log('You are logged in');
        window.location.href = 'https://arafatsani10.github.io/payyo-mobile-bank-app/home.html'
    }
    else {
        alert('wrong phone number or pin number')
    }
})