//Define variables for conditions
let numberValue = document.querySelector('#numberValue'),
    multiplierRange = document.querySelector('#range'),
    multiplicationTable = document.querySelector('table'),
    generateBtn = document.querySelector('.btn'),
    table = document.querySelector('table');

function multiply() {
    inputNumber = Number(numberValue.value);
    sign = "\u00d7";

    //Conditions to generate table
    if (numberValue.value === "" && multiplierRange.value === "") {
        alert('Fill in the fields to generate table.');
        return false;
    }

    else if (numberValue.value == 0 && multiplierRange.value == 0) {
        alert('Input any number asides 0 to generate table.');
        return false;
    }

    else if (multiplierRange.value <= 0) {
        alert('Input numbers above 0 in the range field.');
        return false;
    }

    else {
        //Loop through multiplier range for generation of table rows
        for (i = 1; i <= inputNumber; i++) {
            result = inputNumber * i;
            tableRow = document.createElement('tr');
            tableRow.innerHTML = `<td class="values" style="border: 2px solid orange;">${inputNumber}</td>
                                  <td class="sign" style="border: 2px solid red;">${sign}</td>
                                  <td class="ranges" style="border: 2px solid green;">${i}</td>
                                  <td class="output" style="border: 2px solid blue;">${result}</td>`;
            document.querySelector('tbody').appendChild(tableRow);
        }

        //Disable button
        generateBtn.disabled = true;
    }
}

function enableBtn() {
    generateBtn.disabled = false;
}

multiplierRange.addEventListener('keydown', enableBtn);
numberValue.addEventListener('keydown', enableBtn);


