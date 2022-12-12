const { BMI, bmiInt } = require("./bmi_calculator");

test("Checks if BMI of a 55kg and 1.60 is 21.48", () => {
    expect(BMI).toEqual(21.484374999999996);
});

test("Checks if a BMI of 21.48 is Healthy", () => {
    expect(bmiInt).toEqual("Healthy");
});
