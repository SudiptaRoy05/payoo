document.getElementById('addMoneyOption').addEventListener('click', function () {
    const div = document.getElementById('addMoneyInputField');
    div.style.display = 'block';
    if (div.style.display = 'block') {
        const div = document.getElementById('addMoneyInputFieldOut');
        div.style.display = 'none';

    }
})

document.getElementById('addMoney').addEventListener('click', function (e) {
    e.preventDefault();
    const pin = document.getElementById('passwd').value;
    // && Number(amount) === true
    if (pin === '1234') {
        const amount = document.getElementById('inputMoney').value;

        const availableBlns = document.getElementById('availableBalance').innerText;
        const cb = parseFloat(availableBlns);

        const a = parseFloat(amount);

        const newBalance = cb + a


        document.getElementById('availableBalance').innerText = newBalance;
        alert('transaction successfull');

    } else {
        alert("you entered wrong credentials")
    }
})
