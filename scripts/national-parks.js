"use strict";


//define variable to hold html reference for radio button location
const locationOption = document.getElementById("locationOption");


//define variable to hold html reference for radio button park type
const parkTypeOption = document.getElementById("parkTypeOption");


//define variable to hold html reference for location dropdown 
const locationDropDown = document.getElementById("locationDropDown");


//define variable to hold html reference for park type dropdown 
const parkTypeDropDown = document.getElementById("parkTypeDropDown");




//define variable to hold html reference for park type selection row
const parkTypeSelect = document.getElementById("parkTypeSelect");


//define variable to hold html reference for location selection row
const locationSelect = document.getElementById("locationSelect");


//define variable to hold html reference for park detail row 
const parkDetailRow = document.getElementById("parkDetailRow");


//after window finsih loading,following functions will execute

window.onload = () => {

    //execute function if radio location button changed
    locationOption.onchange = onLocationOptionChange;

    //execute function if radio location button changed
    parkTypeOption.onchange = onParkTypeOptionChange;


    //when dropdown selected display states/territory
    locationDropDown.onchange = locationDropDownChange;

    //when dropdown selected display different park types
    parkTypeDropDown.onchange = parkTypeDropDownChange;


    //loop through location array , for of loop
    for (let state of locationsArray) {


        //define variiable to hold data for every state name
        let newOption = new Option(state);


        //create new options in locactions dropdown
        locationDropDown.appendChild(newOption);
    }

     //loop through location array , for of loop
    for (let type of parkTypesArray) {

        //define variable to hold type data
        let newOption = new Option(type);

        //create new options in park type dropdown
        parkTypeDropDown.appendChild(newOption);
    }

    
};


//function to hide or show location radio button
function onLocationOptionChange() {
    if (locationOption.checked) {

        //show location option if checked 
        locationSelect.style.display = "block";
        
         //hide park type option if location checked 
        parkTypeSelect.style.display = "none";

        parkDetailRow.innerHTML = ""; //notshow values

        locationDropDown.selectedIndex = 0; //base 0
      
    } else {
        //hide location related stuff.
        locationSelect.style.display = "none";
    }
}



//function to hide or show location radio button

function onParkTypeOptionChange() {

    if (parkTypeOption.checked) {
        

        //show location option if checked 
        parkTypeSelect.style.display = "block";


        //hide park type option if location checked 
        locationSelect.style.display = "none"

        parkDetailRow.innerHTML = "";

        parkTypeDropDown.selectedIndex = 0;

    } else {

        //hide park type related stuff.
        parkTypeSelect.style.display = "none";
    }

}


//function when location dropdown change
function locationDropDownChange() {

    //selected state is defined as user selected value
    let selectedState = locationDropDown.value;


    //parks filter is variable holding national parks array data.
    // variable park used to hold state name in array and is equal to user selected state
    const parksFilter = nationalParksArray.filter(park => park.State === selectedState);

    //don't show park details
    parkDetailRow.innerHTML = "";

    //A park must be selected ,at least 1
    if (parksFilter.length > 0) {

        //loop through array 
       for (let park of parksFilter) {

            //function to execute , passing park value to create cards for each
            createNationalParkCard(park);
          
        }


    }

}


//park type dropdown function on change

function parkTypeDropDownChange() {

    //selected type is defined as user selected value
    let selectedType = parkTypeDropDown.value;

    //parks type defined variable to hold national parks filtered data, location name includes same words as user selected type
    const parksType = nationalParksArray.filter(park => park.LocationName.includes(selectedType));

    
    parkDetailRow.innerHTML = "";


    //A park must be selected ,at least 1
    if(parksType.length>0){
        

        //loop through array 
        for(let park of parksType){

            //function to execute , passing park value to create cards for each
            createNationalParkCard(park)
        }

    }


}

//function to create cards , passing park values
function createNationalParkCard(park) {



    // Create div element
    let divCol = document.createElement("div");


    //styling for cards, class name
    divCol.className = "col-6 mt-4";
    
    parkDetailRow.appendChild(divCol);

    

    //Create div element for card
    let divCard = document.createElement("div");
    
    divCard.className = "card";
    
    divCol.appendChild(divCard);
    


    //Create div element for park name
    let divHeader = document.createElement("div");
    
    divHeader.className = "card-header";
    
    divHeader.innerHTML =  park.LocationName;
    
    divCard.appendChild(divHeader);
    
    
    //Create div element for card body
    let divCardBody = document.createElement("div");
    
    divCardBody.className = "card-body";
    
    divCard.appendChild(divCardBody);

    
    //Create unorderedlist element for list elements
    let unOrderedList = document.createElement("ul");
    
    unOrderedList.className = "card-list";
    
    divCardBody.appendChild(unOrderedList);
    
    
    //Create list element for park id
    let listId = document.createElement("li");
    
    listId.className = "parkId";
    
    listId.innerHTML = "Id: " + park.LocationID;
    
    unOrderedList.appendChild(listId);


    //Create list element for park city
    let listCity = document.createElement("li");
    
    listCity.className = "parkCity";
    
    
    listCity.innerHTML = "City: " + park.City;
    
    listId.appendChild(listCity);
    
    
    
    //Create list element for park zip code
    let listZipCode = document.createElement("li");
    
    listZipCode.className = "parkZipCode";
    
    listZipCode.innerHTML = "Zipcode: " + park.ZipCode;
    
    listCity.appendChild(listZipCode);
    

    //Create list element to show address
    let listAddress = document.createElement("li");
    
    listAddress.className = "parkAddress";
    
    listAddress.innerHTML = "Address: " + park.Address;
    
    listZipCode.appendChild(listAddress);
    
    
    //Create list element to show phone number
    let listPhone = document.createElement("li");
    
    listPhone.className = "parkPhone";
    
    listPhone.innerHTML = "Phone number: " + park.Phone;
    
    listAddress.appendChild(listPhone);
    
    
    //Create list element for fax number
    let listFax = document.createElement("li");
    
    listFax.className = "parkFax";
    
    listFax.innerHTML = "Fax number: " + park.Fax;
    
    listPhone.appendChild(listFax);
    
    
    //Create list element to show latitude
    let listLatitude = document.createElement("li");
    
    listLatitude.className = "parkLatitude";
    
    listLatitude.innerHTML = "Latitude: " + park.Latitude;
    
    
    listFax.appendChild(listLatitude);
    
    
    
    //Create list element to show longitude
    let listLongitude = document.createElement("li");
    
    listLongitude.className = "parkLongitude";
    
    listLongitude.innerHTML = "Longitude: " + park.Longitude;
    
    listLatitude.appendChild(listLongitude);
    
    
    
    //Create list element to show website
    let listVisit = document.createElement("li");
    
    listVisit.className = "parkVisit";
    
    listVisit.innerHTML = "Website: " + park.Visit;
    
    listLongitude.appendChild(listVisit);
    
    
    //Create list element element to show location
    let listLocation = document.createElement("li");
    
    listLocation.className = "parkLoaction";
    
    listLocation.innerHTML = "Location: " + park.Location.coordinates;
    
    
    listVisit.appendChild(listLocation);
    
    
    //Create list element to show state
    let listState = document.createElement("li");
    
    listState.className = "parkState";
    
    listState.innerHTML = "State: " + park.State;
    
    listLocation.appendChild(listState);
    
    
}






























// let mattTestp = document.createElement("p");
// mattTestp.innerHTML = park.LocationName;
// divCol.appendChild(mattTestp);