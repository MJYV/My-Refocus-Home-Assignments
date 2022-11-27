pulse_reading = function(x){
    for(i=0; i<x.length; i++){
        let z = '';
        let text = '';

        z = x[i];
        text = get_oximeter_reading(z);
    }
}
    function get_oximeter_reading(pulse){
        if ((pulse >= 40) && (pulse <= 100)){
            console.log("Normal Reading.");
        } else if ((pulse >= 101) && (pulse <= 109)){
            console.log("Acceptable to continue home monitoring.");
        } else if ((pulse >= 110) && (pulse <= 130)){
            console.log("Seek advice from health professionals.");
        } else if (pulse <= 131){
            console.log("Seek urgent medical advice.");
        } else {
            console.log("The value is invalid. ");
        }
    }
    pulse_reading([131,130,131,131,"mjv"]);