let num = process.argv[2];

function fibonacci(num) {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(num))