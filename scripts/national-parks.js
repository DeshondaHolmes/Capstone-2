"use strict";



/*All html element id */

//define variable to hold html reference for radio button location
const locationOption = document.getElementById("locationOption");
const viewAllOption = document.getElementById("viewAllOption");

//define variable to hold html reference for radio button park type
const parkTypeOption = document.getElementById("parkTypeOption");



//define variable to hold html reference for location dropdown 
const locationDropDown = document.getElementById("locationDropDown");


//define variable to hold html reference for park type dropdown 
const parkTypeDropDown = document.getElementById("parkTypeDropDown");




//define variable to hold html reference for location selection row
const locationSelect = document.getElementById("locationSelect");


//define variable to hold html reference for park type selection row
const parkTypeSelect = document.getElementById("parkTypeSelect");



//define variable to hold html reference for park detail row 
const parkDetailRow = document.getElementById("parkDetailRow");



//after window finsih loading,following functions and loop will execute 

window.onload = () => {

    //execute function if radio location button change
    locationOption.onchange = onLocationOptionChange;

    //execute function if radio park type button change
    parkTypeOption.onchange = onParkTypeOptionChange;
 parkTypeOption.onchange = onParkTypeOptionChange;




    //execute function if location dropdown change
    locationDropDown.onchange = locationDropDownChange;

   //execute function if park type dropdown change
    parkTypeDropDown.onchange = parkTypeDropDownChange;


    //f
    for (let state of locationsArray) {

        let newOption = new Option(state);

        locationDropDown.appendChild(newOption);
       
     
    }

    for (let type of parkTypesArray) {

        let newOption = new Option(type);

        parkTypeDropDown.appendChild(newOption);
    }

    
};


//locationhideorshow
function onLocationOptionChange() {
    if (locationOption.checked) {

      
        //show location  related stuff
       
        locationSelect.style.display = "block";
        
        parkTypeSelect.style.display = "none";
        parkDetailRow.innerHTML = "";//notshow values
        locationDropDown.selectedIndex = 0; //base 0
      
    } else {
        //hide location related stuff.
      
        locationSelect.style.display = "none";
    }
}


function onParkTypeOptionChange() {


    if (parkTypeOption.checked) {
        
        parkTypeSelect.style.display = "block";

        locationSelect.style.display = "none"
        parkDetailRow.innerHTML = "";
        parkTypeDropDown.selectedIndex = 0;

    } else {
        parkTypeSelect.style.display = "none";
    }

}



function locationDropDownChange() {
    //selected state is defined as user selected value
    let selectedState = locationDropDown.value;


    //show selected state in console
    //console.log(selectedState);

    //parks filter is defined as national parks array. Condition park variable body follows 
    // variable park get state  equal to user selected state
    const parksFilter = nationalParksArray.filter(park => park.State === selectedState);

    console.log(parksFilter);

    //console shows filtered states
    //console.log(parksFilter);


    parkDetailRow.innerHTML = "";

    //A park must be selected 
    if (parksFilter.length > 0) {

        for (let park of parksFilter) {
            createNationalParkCard(park);
          
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
    const parksType = nationalParksArray.filter(park => park.LocationName.includes(selectedType));
    console.log(parksType);

    
    //show selected state in console
    
    parkDetailRow.innerHTML = "";

    if(parksType.length>0){
        for(let park of parksType){
            createNationalParkCard(park)
        }

    }

    //parks filter is defined as national parks array. Condition park variable body follows 
    // variable park get state  equal to user selected state

}



/*if (parksType.length > 0) {    
const park = parksFilter[0];
parkName.innerHTML = park.LocationName;
parkId.innerHTML = park.LocationID;
parkCity.innerHTML = park.City;
parkState.innerHTML = park.State;
parkFax.innerHTML = park.Fax;}*/

function createNationalParkCard(park) {

    // 
    let divCol = document.createElement("div");

    //
    divCol.className = "col-6 mt-4";
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


    let divHeader = document.createElement("div");

    divHeader.className = "card-header";

    divHeader.innerHTML =  park.LocationName;

    divCard.appendChild(divHeader);


    //
    let divCardBody = document.createElement("div");
    //
    divCardBody.className = "card-body";
    //
    divCard.appendChild(divCardBody);

    //
    let unOrderedList = document.createElement("ul");
    //
    unOrderedList.className = "card-list";
    //
    divCardBody.appendChild(unOrderedList);


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
    listLongitude.innerHTML = "Longitude: " + park.Longitude;
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



    let listState = document.createElement("li");
    //
    listState.className = "parkState";
    //
    listState.innerHTML = "State: " + park.State;

    //
    listLocation.appendChild(listState);
 

}


/*each card in column

/*let statesArray = [];

let allStates = nationalParksArray.length;

let states = nationalParksArray.filter(currentState => currentState.State === "Maine");


/*let state = nationalParksArray.filter(n =>n.State = "")

for (let i = 0 ; i <state.length;i++){
console.log(state[i]);
    
}







/*function getStatesInDropDown (nationalParksArray){
if (nationalParksArray.state == "Maine") {
return true;
}
else {
return false;
}
}


function showLocations() {
   
};



function isState (){
for (let state of  nationalParksArray){
let state = nationalParksArray.state;


}
}*/










