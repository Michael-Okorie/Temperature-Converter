const myInput = document.getElementById("myInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const submitBtn = document.getElementById("submitBtn");
const myP = document.getElementById("myP");
let temp = Number(myInput.value);


submitBtn.onclick = function(){

    let result;


    if(myInput.value === "") {
        myP.textContent = "Please enter a temperature.";
        return;
    }

    if(toFahrenheit.checked){
        result = (temp * 9/5) + 32;
        myP.textContent = "Result: " + result.toFixed(2) + " °F";
    } else if(toCelsius.checked){
        result = (temp - 32) * 5/9;
        myP.textContent = "Result: " + result.toFixed(2) + " °C";
    } else if (toKelvin.checked){
        result = temp + 273.15;
        myP.textContent = "Result: " + result.toFixed(2) + " K"
    } else {
        myP.textContent = "Please select a unit";
    }

}



