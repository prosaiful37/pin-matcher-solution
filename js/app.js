function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinSring = pin + '';
    if(pinSring.length == 4){
        return pin;

    }
    else{
        // console.log('got 3 digit and colling agin', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// calculator setup
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
        
        const priviousNumber = calcInput.value;
        const newNumber = priviousNumber + number;
        calcInput.value = newNumber;
    }
    
});

// type pin mathcer 
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-number').value;
    const notifySuccess = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if( pin == typeNumber){
        notifySuccess.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        notifySuccess.style.display = 'none';
        failError.style.display = 'block';
    }

}