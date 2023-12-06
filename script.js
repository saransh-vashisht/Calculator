let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}
// Previous functions remain the same, adding a new function for deleting the last element
function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}
