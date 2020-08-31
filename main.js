//Define variables for conditions
let numberValue = document.querySelector('#numberValue'),
    multiplierRange = document.querySelector('#range'),
    multiplicationTable = document.querySelector('tbody'),
    generateBtn = document.querySelector('.btn'),
    table = document.querySelector('table');

function multiply() {
    inputNumber = Number(numberValue.value);
    range = Number(multiplierRange.value);
    sign = "\u00d7";

    //Conditions for generation of table
    if (numberValue.value === "" && multiplierRange.value === "") {
        alert('Fill in fields to generate table.');
        return false;
    }
    
    else if (numberValue.value === "") {
      alert('Input a value for "input number".');
      return false;
    }
    
    else if (multiplierRange.value === "") {
      alert('Input a value for "range".');
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

    else if (multiplierRange.value > 100) {
        alert('Maximum range value exceeded.');
        return false;
    }

    else {
        //Loop through range for generation of table rows
        for (i = 1; i <= range; i++) {
            result = inputNumber * i;
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