const tempInput = document.querySelector('#temp');
const selectUnit = document.querySelector('#unit');
const convertButton = document.querySelector('button');
const result = document.querySelector('#conversion-text');

convertButton.addEventListener('click', function() {
  const temp = parseFloat(tempInput.value);
  let hasError = false;

  tempInput.classList.remove('input-error');
  selectUnit.classList.remove('input-error');
  result.classList.remove('error-message');
  
  if (isNaN(temp)) {
    result.textContent = 'Please enter a valid number';
    result.classList.add('error-message');
    tempInput.classList.add('input-error');
    hasError = true;
  }

  const unit = selectUnit.value;

  if (!unit) {
    result.textContent = 'Please select a unit';
    result.classList.add('error-message');
    selectUnit.classList.add('input-error');
    hasError = true;
  }

  if (hasError) return;

  let convertedTemp;

  if (unit === 'celsius') {
    convertedTemp = (temp - 32) * 5 / 9;
  } else {
    convertedTemp = (temp * 9 / 5) + 32;
  }

  result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unit === 'celsius' ? 'C' : 'F'}`;
});