let caloriesPerHour = 225;
let numTimesSamRuns = 15;
let runHoursPerDay = 30/60;
let totalHoursRunning = numTimesSamRuns * runHoursPerDay;
let totalCaloriesBurned = caloriesPerHour * numTimesSamRuns;
console.log(`Great work, Sam! After ${runHoursPerDay} hour/s of running every day for a week, you may lose a total of ${totalCaloriesBurned} calories.`);