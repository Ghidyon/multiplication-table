function multiply() {
    numberValue = Number(document.querySelector('#numberValue').value);
    console.log(numberValue);
    multiplierRange = Number(document.querySelector('#range').value);
    console.log(multiplierRange);
    sign = "\u00d7";
    multiplicationTable = document.querySelector('table');

    if (multiplierRange <= 0) {
        alert('Cannot calculate numbers below 1 in the range field.');
        return false;
    } else if (numberValue == 0) {
        alert('Input any number asides 0 in the input number field');
        return false;
    } else {
        for (i = 1; i <= multiplierRange; i++) {
            result = numberValue * i;
            tableRow = document.createElement('tr');
            tableRow.innerHTML = `<td class="values" style="border: 2px solid orange;">${numberValue}</td>
            <td class="sign" style="border: 2px solid red;">${sign}</td>
            <td class="ranges" style="border: 2px solid green;">${i}</td>
            <td class="output" style="border: 2px solid blue;">${result}</td>`;
            document.querySelector('tbody').appendChild(tableRow);
        }
    }
}