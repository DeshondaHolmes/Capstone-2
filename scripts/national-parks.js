"use strict";

const locationDropDown = document.getElementById("locationDropDown");

//arrow function
window.onload = () => {
    console.log("window load");
    //dropdown
    locationDropDown.onclick = showLocations();
    locationDropDown.onChange = rotateStates;
};


//
function showLocations() {
    for (let location of locationsArray ){
        let newOption = new Option (location);
        locationDropDown.appendChild(newOption);
    }    
};

let selectedValue = nationalParksArray.value;

function rotateStates (){


    for (let state of  nationalParksArray){
        state == nationalParksArray.state;


    }
}




   





