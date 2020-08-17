const form = document.getElementById('form')
const resultElement = document.getElementById('result')


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(e.target.number1.value != '' && e.target.number2.value != ''){
        const number1 = e.target.number1.value
        const number2 = e.target.number2.value
        const result = (parseInt(number1) + parseInt(number2))
        resultElement.textContent = `${number1} + ${number2}  = ${result}`

        e.target.reset()
    }
})