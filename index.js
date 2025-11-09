/*
1 meter = 3.281 feet, 1 feet = 0.3048
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// need to make the result to 3 decimal places only 

// 1. get the input value from the input field 
// 2. when convert button is clicked the convertfuntion should work 
// 3. convert() { let result = input.innervlaue * 3.281 -> result.number(3)}

inputEl = document.getElementById("input")
convertBtn = document.getElementById("convert-btn")
lengthEl = document.getElementById("length-result")
volumeEl = document.getElementById("volume-result")
massEl = document.getElementById("mass-result")




convertBtn.addEventListener('click', function () {

    let inputValue = parseFloat(inputEl.value) || 0

    let result_length = Number(inputValue * 3.281).toFixed(3)
    let volume_result = Number(inputValue * 0.264).toFixed(3)
    let kilogram = Number(inputValue * 2.204).toFixed(3)
    let inverse_result_length = Number(inputValue * 0.3048).toFixed(3)
    let inverse_result_volumeEl = Number(inputValue * 3.78541).toFixed(3)
    let inverse_kilogram = Number(inputValue * 0.453592).toFixed(3)

    let sentence1 = `${inputValue} meters = ${result_length} feet | ${inputValue} feet = ${inverse_result_length} meters`
    let sentence2 = `${inputValue} liters = ${volume_result} gallons | ${inputValue} gallons = ${inverse_result_volumeEl} liters`
    let sentence3 = `${inputValue} kilos = ${kilogram} pounds | ${inputValue} pounds = ${inverse_kilogram} kilos`

    lengthEl.textContent = sentence1
    volumeEl.textContent = sentence2
    massEl.textContent = sentence3
})

