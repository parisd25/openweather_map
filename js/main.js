var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc= document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value +'&appid=096cacceddd4c75bc4261fd0bdc8339d')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

.catch(err => alert("Wrong city name!"))
})

// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
// }

//unction temperatureConverter(valNum) {
//   valNum = parseFloat(valNum);
//   document.getElementById("outputCelsius").innerHTML = (valNum - 32) / 1.8;
//

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = ((valNum - 273.15) * 1.8) + 32;
}