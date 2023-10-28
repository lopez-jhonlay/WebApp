function isNumberOddOrEven() {
    let input = document.getElementById('input');

    if (!isNaN(input.value)){
        if (input.value % 2 === 0) {
            alert(`${input.value} is even number.`);
        }
        else {
            alert(`${input.value} is odd number.`);
        }
    }
    else {
        alert(`${input.value} is not a valid number.`);
    }
}