function generateFibonacciSeries() {
    let input = document.getElementById('input');

    if (!isNaN(input.value) && input.value >= 0) {    
        let fibonacci = [0, 1];
        for (let i = 2; i <= input.value; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        alert("Fibonacci Series: " + fibonacci.slice(0, input.value + 1).join(", "));
    }
    else {
        alert("Please enter a valid non-negative number.");
    }
}