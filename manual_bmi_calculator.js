let BMI = 0;

let bmiInt = "";
function calculateBMI(weightInKG, heightInMtr){
  BMI = weightInKG / (heightInMtr * heightInMtr)
  bmiInt = "";
  if (BMI < 18.5){
      bmiInt = "Underweight";
  } else if (BMI > 18.5 && BMI < 28.9){
      bmiInt = "Healthy";
  } else if (BMI > 25 && BMI < 29.9){
      bmiInt = "Overweight"
  } else if (BMI > 30){
      bmiInt = "Obese";
  } else{
    return console.log("incorrect value!");
  }
  return console.log(`Basing on you're weight, ${weightInKG}Kg, and height, ${heightInMtr}m.\n${bmiInt} with a BMI of ${BMI.toFixed(2)}`)
}

calculateBMI(55, 1.60)

module.exports = {BMI, bmiInt};