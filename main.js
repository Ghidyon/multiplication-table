//Define variables for conditions
let numberValue = document.querySelector('#numberValue'),
    multiplierRange = document.querySelector('#range'),
    multiplicationTable = document.querySelector('tbody'),
    generateBtn = document.querySelector('.btn'),
    table = document.querySelector('table');

function multiply() {
    inputNumber = numberValue.value;
    range = multiplierRange.value;
    sign = "\u00d7";

    //Conditions for generation of table
    if (inputNumber === "" && range === "") {
        alert('Fill out fields to generate table.');
        return false;
    }

    else if (inputNumber === "") {
        alert('Input a value for "input number".');
        return false;
    }

    else if (range === "") {
        alert('Input a value for "range".');
        return false;
    }

    else if (inputNumber == 0 && range == 0) {
        alert('Input any number asides 0 to generate table.');
        return false;
    }

    else if (range <= 0) {
        alert('Input numbers above 0 in the range field.');
        return false;
    }

    else if (range > 100) {
        alert('Maximum range value exceeded.');
        return false;
    }

    else {
        //Loop through range for generation of table rows
        for (i = 1; i <= Number(range); i++) {
            result = Number(inputNumber) * i;
            tableRow = document.createElement('tr');
            tableRow.innerHTML = `<td>${inputNumber}</td>
                                  <td>${sign}</td>
                                  <td>${i}</td>
                                  <td>${result}</td>`;
            multiplicationTable.appendChild(tableRow);
            table.style.display = "block";
            generateBtn.disabled = true;
        }
    }
}


function clearAndEnable() {
    generateBtn.disabled = false;
    table.style.display = "none";
    multiplicationTable.innerHTML = '';
}

//Events to clear tables and enable button
multiplierRange.addEventListener('keydown', clearAndEnable);
numberValue.addEventListener('keydown', clearAndEnable);