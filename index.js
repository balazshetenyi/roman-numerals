const roman_letters = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' },
]

function convert(num) {
    let roman_letter = ''

    for (let i = 0; i < roman_letters.length; i++) {
        if (roman_letters[i].number <= num) {
            num = num - roman_letters[i].number

            roman_letter += roman_letters[i].roman
            i--
        }
    }
    document.getElementById('result').textContent = roman_letter
}

document.getElementById('btn').addEventListener('click', function () {
    const inputValue = document.getElementById('numberInput').value

    convert(inputValue)
})