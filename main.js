function multiply() {
    let numberValue = Number(document.querySelector('#numberValue').value);
    console.log(numberValue);
    multiplierRange = Number(document.querySelector('#range').value);
    console.log(multiplierRange);
    console.log(typeof numberValue);
    console.log(typeof multiplierRange);
    sign = "\u00d7";
    result = "";

    for (i = 1; i <= multiplierRange; i++) {
        result = numberValue * i;
        console.log(result);
        document.querySelector('.values').innerHTML = numberValue;
        document.querySelector('.sign').innerHTML = sign;
        document.querySelector('.ranges').innerHTML = i;
        document.querySelector('.output').innerHTML = result;
    }
}