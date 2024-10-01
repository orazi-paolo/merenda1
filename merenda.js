function sommaInteri(N) {
    const invalidInput = 'Invalid input';
    let numb = 0;
    let tot = 0;
    if (N < 0 || isNaN(N) || N === '') {
        return invalidInput
    }
    while (tot <= N) {
        numb += 1;
        tot += numb;
        if (tot > N) {
            numb -= 1
        }
    }
    return numb
}
