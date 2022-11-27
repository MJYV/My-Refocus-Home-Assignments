pulse_reading = function(x){
    for(i=0; i<x.length; i++){
        let z = '';
        let text = '';

        z = x[i];
        text = get_oximeter_reading(z);
    }
}
    function get_oximeter_reading(pulse){
        if (pulse >= 96){
            console.log("Normal Reading.");
        } else if (pulse >= 95){
            console.log("Acceptable to continue home monitoring.");
        } else if ((pulse >= 93) && (pulse <= 94)){
            console.log("Seek advice from health professionals.");
        } else if (pulse <= 92){
            console.log("Seek urgent medical advice.");
        } else {
            console.log("The value is invalid. ");
        }
    }
    pulse_reading([100,95,95,90,"mjv"]);