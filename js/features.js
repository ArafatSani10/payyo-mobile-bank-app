document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    console.log('button er kaj hosee...')
    document.getElementById('cash-out-form').classList.remove('hidden')

    document.getElementById('add-money-form').classList.add('hidden')
})

// show add money form and hide the cash out form

document.getElementById('btn-show-add-money').addEventListener('click', function(){
 console.log('button kaj hosse')
 document.getElementById('add-money-form').classList.remove('hidden')
 document.getElementById('cash-out-form').classList.add('hidden')
})