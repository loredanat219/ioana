function calculateBMI(){
var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;
var bmi =weight / (height * height);
document.getElementById("bmi").innerHTML = bmi.toFixed(2);
}