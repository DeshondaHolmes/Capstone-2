"use strict";


//define location dropdown is element id in national park html 
const locationDropDown = document.getElementById("locationDropDown");

//define park typedropdown is element id in national park html 
const parkTypeDropDown = document.getElementById("parkTypeDropDown");


//radio button option location
const locationOption = document.getElementById("locationOption");

//radio button option location
const parkTypeOption = document.getElementById("parkTypeOption");


const parkTypeSelect = document.getElementById("parkTypeSelect");


const locationSelect = document.getElementById("locationSelect");


//define parkdetails row element id in national park html
//const parkDetailRow = document.getElementById("parkDetailRow");

//define park name element id in national park html
//const parkName = document.getElementById("parkName");

//define park details element id in national park html
//const parkDetails = document.getElementById("parkDetails");
//define park  element id in national park html
//const parkId = document.getElementById("parkId");

//define park city element id in national park html
//const parkCity = document.getElementById("parkCity");

//define park state element id in national park html
//const parkState = document.getElementById("parkState");


//define park zip code element id in national park html
//const parkZipCode = document.getElementById("parkZipCode");

//define park fax element id in national park html 
//const parkFax = document.getElementById("parkFax");


//Arrow function
window.onload = () => {

    //when window finish loading "window load" in console window
    console.log("window load");

    locationOption.onchange = onLocationOptionChange;
    parkTypeOption.onchange = showParkType;



    //when dropdown selected display states/territory
    locationDropDown.onchange = locationDropDownChange;
    parkTypeDropDown.onchange = parkTypeDropDownChange;


    //add child nodes , create new state options to location dropdown
    for (let state of locationsArray) {

        let newOption = new Option(state);

        locationDropDown.appendChild(newOption);
    }

    for (let type of parkTypesArray) {

        let newOption = new Option(type);

        parkTypeDropDown.appendChild(newOption);
    }


};


function onLocationOptionChange() {

    if (locationOption.checked) {

        //show location  related stuff
        console.log("Hello");
        locationSelect.style.display = "block";

        parkTypeSelect.innerHTML = "";
    }
    else {
        //hide location related stuff.
        locationSelect.style.display = "none";
    }


}


function showParkType() {

    console.log("parkType");


    if (parkTypeOption.checked) {
        parkTypeSelect.style.display = "none";
       
    }
    else {
        locationSelect.style.display = "block";
    }
    
}



function locationDropDownChange() {
    //selected state is defined as user selected value
    let selectedState = locationDropDown.value;


    //show selected state in console
    //console.log(selectedState);

    //parks filter is defined as national parks array. Condition park variable body follows 
    // variable park get state  equal to user selected state
    const parksFilter = nationalParksArray.filter(park => park.State == selectedState);

    console.log(parksFilter);

    //console shows filtered states
    //console.log(parksFilter);

    //A park must be selected 
    if (parksFilter.length > 0) {



        parkDetailRow.innerHTML = "";

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

function parkTypeDropDownChange() {
    //selected type is defined as user selected value
    let selectedType = parkTypeDropDown.value;
    parkDetailRow.innerHTML = "";

    //show selected state in console
    

    //parks filter is defined as national parks array. Condition park variable body follows 
    // variable park get state  equal to user selected state
    const parksType = nationalParksArray.filter(park => park.LocationName.includes(selectedType));

    console.log(parksType);
}
//includes  

//console shows filtered states

//A park must be selected 
/* if (parksType.length > 0) {
   

  
     
 /*const park = parksFilter[0];
     
     parkName.innerHTML = park.LocationName;
     parkId.innerHTML = park.LocationID;
     parkCity.innerHTML = park.City;
     parkState.innerHTML = park.State;
     parkFax.innerHTML = park.Fax;*/





function createNationalParkcard(park) {

    /*let divClass = document.createElement("div");
    divClass.className = "row";
    parkDetailRow.appendChild(divClass);*/


    // 
    let divCol = document.createElement("div");

    //
    divCol.className = "col-6 p-4 ";
    //
    parkDetailRow.appendChild(divCol);

    // let mattTestp = document.createElement("p");
    // mattTestp.innerHTML = park.LocationName;
    // divCol.appendChild(mattTestp);

    //
    let divCard = document.createElement("div");
    //
    divCard.className = "card";
    //
    divCol.appendChild(divCard);


    //
    let divCardBody = document.createElement("div");
    //
    divCardBody.className = "card-body";
    //
    divCard.appendChild(divCardBody);


    //
    let h5Name = document.createElement("h5");
    //
    h5Name.className = "card-title";
    //
    h5Name.innerHTML = park.LocationName;
    //
    divCardBody.appendChild(h5Name);

    //
    let unOrderedList = document.createElement("ul");
    //
    unOrderedList.className = "card-list";
    //
    h5Name.appendChild(unOrderedList);


    //
    let listId = document.createElement("li");
    //
    listId.className = "parkId";
    //
    listId.innerHTML = "Id: " + park.LocationID;
    //
    unOrderedList.appendChild(listId);


    //
    let listCity = document.createElement("li");
    //
    listCity.className = "parkCity";

    //
    listCity.innerHTML = "City: " + park.City;
    //
    listId.appendChild(listCity);



    //
    let listZipCode = document.createElement("li");
    //
    listZipCode.className = "parkZipCode";
    //
    listZipCode.innerHTML = "Zipcode: " + park.ZipCode;
    //
    listCity.appendChild(listZipCode);


    //
    let listAddress = document.createElement("li");
    //
    listAddress.className = "parkAddress";
    //
    listAddress.innerHTML = "Address: " + park.Address;
    //
    listZipCode.appendChild(listAddress);


    //
    let listPhone = document.createElement("li");
    //
    listPhone.className = "parkPhone";
    //
    listPhone.innerHTML = "Phone number: " + park.Phone;
    //
    listAddress.appendChild(listPhone);


    //
    let listFax = document.createElement("li");
    //
    listFax.className = "parkFax";
    //
    listFax.innerHTML = "Fax number: " + park.Fax;
    //
    listPhone.appendChild(listFax);


    //
    let listLatitude = document.createElement("li");
    //
    listLatitude.className = "parkLatitude";
    //
    listLatitude.innerHTML = "Latitude: " + park.Latitude;

    //
    listFax.appendChild(listLatitude);


    //
    let listLongitude = document.createElement("li");
    //
    listLongitude.className = "parkLongitude";
    //
    listLatitude.innerHTML = "Longitude: " + park.Longitude;
    //
    listLatitude.appendChild(listLongitude);



    //
    let listVisit = document.createElement("li");
    //
    listVisit.className = "parkVisit";
    //
    listVisit.innerHTML = "Website: " + park.Visit;
    //
    listLongitude.appendChild(listVisit);


    //
    let listLocation = document.createElement("li");
    //
    listLocation.className = "parkLoaction";
    //
    listLocation.innerHTML = "Location: " + park.Location.coordinates;

    //
    listVisit.appendChild(listLocation);

    /* let listName = document.createElement("li");
     listName.classList = "parkId";
     unOrderedList.innerHTML = park.LocationID;
     unOrderedList.appendChild(listName);*/

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










