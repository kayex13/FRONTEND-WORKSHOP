const counter = document.querySelector('#counter-text');
const incrementButton = document.querySelector('#button-add');
const decrementButton = document.querySelector('#button-subtract');

counterValue = 0;

function updateCounter() {
    counter.textContent = counterValue;
}

incrementButton.addEventListener('click', function(callback) {
    if (counterValue < 100) {
        counterValue++;
        updateCounter();
    } else {
        alert('Counter cannot be more than 100');
    }
});

decrementButton.addEventListener('click', function(callback) {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    } else {
        alert('Counter cannot be less than 0');
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        if (counterValue < 100) {
            incrementButton.click();
        } else {
            alert('Counter cannot be more than 100');
        }
    } else if (event.key === 'ArrowDown') {
        if (counterValue > 0) {
            decrementButton.click();
        } else {
            alert('Counter cannot be less than 0');
        }
    }
});
