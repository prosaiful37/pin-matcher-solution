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