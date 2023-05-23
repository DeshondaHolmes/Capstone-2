"use strict";


//define location dropdown is element id in national park html 
const locationDropDown = document.getElementById("locationDropDown");


//define parkdetails row element id in national park html
const parkDetailRow = document.getElementById("parkDetailRow");

//define park name element id in national park html
const parkName = document.getElementById("parkName");

//define park details element id in national park html
const parkDetails = document.getElementById("parkDetails");

//define park  element id in national park html
const parkId = document.getElementById("parkId");

//define park city element id in national park html
const parkCity = document.getElementById("parkCity");

//define park state element id in national park html
const parkState = document.getElementById("parkState");


//define park zip code element id in national park html
const parkZipCode = document.getElementById("parkZipCode");

//define park fax element id in national park html 
const parkFax = document.getElementById("parkFax");


//Arrow function
window.onload = () => {

    //when window finish loading "window load" in console window
    console.log("window load");

    //when dropdown selected display states/territory
    locationDropDown.onchange = locationDropDownChange;

    //add child nodes , create new state options to location dropdown
    for (let state of locationsArray) {

        let newOption = new Option(state);

        locationDropDown.appendChild(newOption);
    }


};

function locationDropDownChange() {
    //selected state is equal to user selected value
    let selectedState = locationDropDown.value;

    //show selected state in console
    console.log(selectedState);

    //parks filter is equal to national parks array filtered from object property , equal to user selected state 
    const parksFilter = nationalParksArray.filter(park => park.State === selectedState);

    console.log(parksFilter);


     parkDetailRow.innerHTML ="";


    //
    if (parksFilter.length > 0) {

        for (let park of parksFilter) {
            createNationalParkcard(park);
        }

        /*const park = parksFilter[0];
        
        parkName.innerHTML = park.LocationName;
        parkId.innerHTML = park.LocationID;
        parkCity.innerHTML = park.City;
        parkState.innerHTML = park.State;
        parkFax.innerHTML = park.Fax;*/
    }

}


function createNationalParkcard(park) {

    let divCol = document.createElement("div");
    divCol.className = "col" ;
    parkDetailRow.appendChild(divCol);

    // let mattTestp = document.createElement("p");
    // mattTestp.innerHTML = park.LocationName;
    // divCol.appendChild(mattTestp);

    let divCard = document.createElement("div");
    divCard.className = "card" ;
    divCol.appendChild(divCard);

    let divCardBody = document.createElement("div");
    divCardBody.className = "card-body" ;
    divCard.appendChild(divCardBody);

    let h5Name = document.createElement("h5");
    h5Name.className = "card-title" ;
    h5Name.innerHTML = park.LocationName;
    divCardBody.appendChild(h5Name);


}


//each card in column






/*let statesArray = [];

let allStates = nationalParksArray.length;

let states = nationalParksArray.filter(currentState => currentState.State === "Maine");


/*let state = nationalParksArray.filter(n =>n.State = "")

for (let i = 0 ; i <state.length;i++){
    console.log(state[i]);
    
}*/







/*function getStatesInDropDown (nationalParksArray){
    if (nationalParksArray.state == "Maine") {
        return true;
    }
    else {
        return false;
    }
}*/

/*
function showLocations() {
   
};



function isState (){
    for (let state of  nationalParksArray){
        let state = nationalParksArray.state;


    }
}*/










