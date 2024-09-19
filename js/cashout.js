document.getElementById('cashOutOption').addEventListener('click',function(){
    const div = document.getElementById('addMoneyInputFieldOut');
    div.style.display ='block';


    if(div.style.display ='block'){
        const div = document.getElementById('addMoneyInputField');
    div.style.display ='none';
    }
})



document.getElementById('cashOut').addEventListener('click', function (e) {
    e.preventDefault();
    const pin = document.getElementById('passwdOut').value;
    console.log(pin)
    if (pin === '1234') {
        const amount = document.getElementById('inputMoneyOut').value;
        const a = parseFloat(amount)

        const availableBlns = document.getElementById('availableBalance').innerText;
        
        const cb = parseFloat(availableBlns);

        if(cb<a){
            alert("insufficent balance")
        }

        const newBalance = cb - a;

        document.getElementById('availableBalance').innerText = newBalance;

        alert('cash out successfull');
    }
    else {
        alert('you entered wrong credectials');
    }
})