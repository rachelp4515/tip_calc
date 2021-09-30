const tipInput = document.querySelector('#tip')
const billInput = document.querySelector('#bill')
const numOfPeople = document.querySelector('#num-of-people')
const tipOutput = document.querySelector('#tip-output')
const total = document.querySelector('#total-output')

tipInput.addEventListener('input', handleStuff)

billInput.addEventListener('input', handleStuff)

numOfPeople.addEventListener('input', handleStuff)


function handleStuff(e){
    const people = parseFloat(numOfPeople.value)  
    const percent = parseFloat(tipInput.value)
    const bill = parseInt(billInput.value)
    const tip = bill * percent / 100
    const totalCost = bill + tip
    const perPerson = totalCost / people
    tipOutput.innerHTML = `$ ${tip}`
    total.innerHTML = `$ ${perPerson}`
}
