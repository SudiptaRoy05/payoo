// console.log("first")

// step1: event listener setup
document.getElementById('btnLogin').addEventListener('click', function (e) {
    e.preventDefault();

    // step2:get phone num and pin
    const num = document.getElementById('pNumber').value;
    const pin = document.getElementById('passwd').value;
    // step3: validate phone and pin 
    if (num === '123456' && pin === '1234') {
        window.location.href = './home.html'
    }
    else {
        alert('wrong phone number or pin');
    }
})