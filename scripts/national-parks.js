"use strict";

const locationRadioBtn = document.getElementById("locationRadioBtn");

const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");

const locationSelect = document.getElementById("locationSelect");


window.onload = function () {
    locationRadioBtn.onclick = showLocations
    console.log("radio click");
};

function showLocations() {
   let stateOrTerritory = locationsArray.length;
    if (locationRadioBtn.checked) {
        console.log("show");
        locationSelect.style.display = showLocations;
    }

}

