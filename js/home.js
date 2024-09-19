document.getElementById('addMoneyOption').addEventListener('click',function(){
    const div = document.getElementById('addMoneyInputField');
    div.style.display ='block';
})

document.getElementById('addMoney').addEventListener('click', function (e) {
    e.preventDefault();
    const pin = document.getElementById('passwd').value;
    if(pin === '1234'){
        const amount = document.getElementById('inputMoney').value;

        // console.log(amount)
        const availableBlns = document.getElementById('availableBalance').innerText;
        const cb = parseFloat(availableBlns);
        // console.log(cb);
        const a = parseFloat(amount);
        // console.log(a)
        const newBalance = cb + a
       
        
        document.getElementById('availableBalance').innerText = newBalance;
        alert('transaction successfull');
        
    }
})