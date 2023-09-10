let convert = document.querySelector('#convert')

convert.addEventListener('click', () => {
    let input = (Number)(document.querySelector('#input').value);
    let inputSelect=document.querySelector('#inputSelect').value;
    let outputSelect=document.querySelector('#outputSelect').value;
    let output = document.querySelector('#output');

    if (inputSelect === 'celsius' && outputSelect === 'fahrenheit') {
        output.innerHTML = `${input}&deg;C * 9/5 + 32 =  ${(input)*(9/5) + 32}F`;
    }

    if (inputSelect === 'celsius' && outputSelect === 'kelvin') {
        output.innerHTML = `${input}&deg;C + 273.15 = ${(input)+(273.15)}K`;
    }

    if (inputSelect === 'fahrenheit' && outputSelect === 'celsius') {
        output.innerHTML = `${input}F * 5/9 = ${(input-32)*(5/9)}&deg;C`;
    }

    if (inputSelect === 'fahrenheit' && outputSelect === 'kelvin') {
        output.innerHTML = `${input}F - 32 * 5/9 + 273.15 = ${(input-32)*(5/9)+(273.15)}K`;
    }

    if (inputSelect === 'kelvin' && outputSelect === 'celsius') {
        output.innerHTML = `${input}K - 273.15 ${(input)-(273.15)}&deg;C`;
    }

    if (inputSelect === 'kelvin' && outputSelect === 'fahrenheit') {
        output.innerHTML = `${input}K - 273.15 * 9/5 = ${(input-273.15)*(9/5)+(32)}K`;
    }

})