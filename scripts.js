"use strict";
window.onload = function() {
   const calcEstBtn = document.getElementById("calcEstBtn");
   calcEstBtn.onclick = calcPayEstClicked;
}
function calcPayEstClicked() {

    const numberOfDayField = document.getElementById("numberOfDay");
    let numberOfDay = Number(numberOfDayField.value);

    let rentalPerDay = 29.99;
    let carRental = numberOfDay * rentalPerDay; 


    let carOptions = 0;
    const eTagCheckbox = document.getElementById("eTag");
    if (eTagCheckbox.checked == true) {
        carOptions = 3.95 * numberOfDay;
    }
    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        carOptions = 2.95 * numberOfDay;
    }    const roadsideACheckbox = document.getElementById("roadsideA");
    if (roadsideACheckbox.checked == true) {
        carOptions = 2.95 * numberOfDay;
    }

    let surCharge = 0;
    const yesunderRadioBtn = document.getElementById("yesunder");
    if (yesunderRadioBtn.checked == true) {
        surCharge = .3 * carRental;
    } 

    let totalDue = carRental + carOptions + surCharge;




    // put net pay total in <p id="netPay">
    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);

    const carOptionsPara = document.getElementById("carOptions");
    carOptionsPara.innerHTML = "Options:  $" + carOptions.toFixed(2);

    
    const surChargePara = document.getElementById("surCharge");
    surChargePara.innerHTML = "Under 25 surcharge:  $" + surCharge.toFixed(2);

    const totalDuePara = document.getElementById("totalDue");
    totalDuePara.innerHTML = "Total Due:  $" + totalDue.toFixed(2);
}


