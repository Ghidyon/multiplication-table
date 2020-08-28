function multiply() {
    //Define variables for  
    numberValue = document.querySelector('#numberValue').value;
    console.log(numberValue);
    multiplierRange = document.querySelector('#range').value;
    console.log(multiplierRange);
    sign = "\u00d7";
    multiplicationTable = document.querySelector('table');
    inputNumber = Number(numberValue);

    if (numberValue === "" && multiplierRange === "") {
        alert('Fill in the fields to generate table.');
        return false;
    } else if (numberValue == 0 && multiplierRange == 0) {
        alert('Input any number asides 0 to generate table.');
        return false;
    } else if (multiplierRange <= 0) {
        alert('Cannot calculate numbers below 1 in the range field.');
        return false;
    } else {
        for (i = 1; i <= Number(multiplierRange); i++) {
            result = Number(numberValue) * i;
            tableRow = document.createElement('tr');
            tableRow.innerHTML = `<td class="values" style="border: 2px solid orange;">${inputNumber}</td>
            <td class="sign" style="border: 2px solid red;">${sign}</td>
            <td class="ranges" style="border: 2px solid green;">${i}</td>
            <td class="output" style="border: 2px solid blue;">${result}</td>`;
            document.querySelector('tbody').appendChild(tableRow);
        }
    }
}