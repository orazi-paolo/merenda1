document.getElementById('run-tests').addEventListener('click', function () {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const testCases = [
        { N: 20, expected: 5 },
        { N: 15, expected: 5 },
        { N: 1, expected: 1 },
        { N: 0, expected: 0 },
        { N: 100, expected: 13 },
        { N: 50, expected: 9 },
        { N: 3, expected: 2 },
        { N: 6, expected: 3 },
        { N: '', expected: 'Invalid input' },
        { N: -5, expected: 'Invalid input' },
    ];

    testCases.forEach((test, index) => {
        try {
            const result = sommaInteri(test.N);
            const passed = result === test.expected;
            const message = `Test ${index + 1}: N = ${test.N} => Risultato: ${result} | Atteso: ${test.expected} | ${passed ? 'Successo' : 'Fallito'}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = message;
            resultElement.style.color = passed ? 'green' : 'red';
            resultsContainer.appendChild(resultElement);
        } catch (error) {
            const message = `Test ${index + 1}: N = ${test.N} ha generato un errore: ${error.message}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = message;
            resultElement.style.color = 'red';
            resultsContainer.appendChild(resultElement);
        }
    });
});
