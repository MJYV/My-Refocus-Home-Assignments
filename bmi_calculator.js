function bmi(weight, height) {

  let bmi = weight / (height ** 2)

  let c = "Normal"

  switch (true) {
    case bmi <= 18.5:
      c = "Underweight";
      break;

    case bmi <= 25.0:
      c = "Normal";
      break;

    case bmi <= 30.0:
    
      c = "Overweight";
      break;

    default:
      c = "Obese"

  }
  return c;
}

console.log(bmi(8, 1.80))
console.log(bmi(80, 1.80))
console.log(bmi(800, 1.80))