var degreeCelsius=document.getElementById('degreec');
var fahrenheit= document.getElementById('fahren');


function celToFar(){
    let output=(parseFloat(degreeCelsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));

}

function FarToCel(){
    let output=(parseFloat(fahrenheit.value)*5/9)+32;
    degreeCelsius.value=parseFloat(output.toFixed(2))
}

