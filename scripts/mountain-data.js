"use strict";


//global variables 
const mountainSelect = document.getElementById("mountainSelect");
console.log(mountainSelect);

const mountainDropDown = document.getElementById("mountainDropDown");
console.log(mountainDropDown);

const mountainDetailRow = document.getElementById("mountainDetailRow");



//arow function shorthand
window.onload = () => {

    mountainDropDown.onclick = mountainDropDownClick;//execute 
    mountainSelect.onchange = mountainSelectChange; //excute 


    //mountain of mountains
    //for loop 
    for (let mountain of mountainsArray) {
        console.log(mountain);
        let newOption = new Option(mountain.name);
        mountainDropDown.appendChild(newOption);

        console.log(mountain);
    }
};


function mountainSelectChange() {


    let mountainImage = mountainSelected.value;

    const mountainImages = mountainsArray.find(mountainImg => mountainImg.img === mountainImage);
    console.log(mountainImage);

}



let mountainSelected = mountainDropDown.value;
function mountainDropDownClick() {


    let mountainSelected = mountainDropDown.value;

    const mountain = mountainsArray.find(mountain => mountain.name === mountainSelected);
    console.log(mountain);

    mountainDetailRow.innerHTML = "";

    if (mountain) {
        createMountainCard(mountain);
    }

}




function createMountainCard(mountain) {

    /*let divClass = document.createElement("div");
    divClass.className = "row";
    parkDetailRow.appendChild(divClass);*/


    // 
    let divCol = document.createElement("div");

    //
    divCol.className = "col-5 px-5 ";
    //
    mountainDetailRow.appendChild(divCol);

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
    h5Name.innerHTML = mountain.name;
    //
    divCardBody.appendChild(h5Name);


    let mountainDesc = document.createElement("li");
    mountainDesc.className = "mountainDesc";
    mountainDesc.innerHTML = "Description: " + mountain.desc;
    h5Name.appendChild(mountainDesc);

    let mountainElevation = document.createElement("li");
    mountainElevation.className = "mountainElevation";
    mountainElevation.innerHTML = "Elevation: " + mountain.elevation;
    mountainDesc.appendChild(mountainElevation);

    let mountainEffort = document.createElement("li");
    mountainEffort.className = "mountainEffort";
    mountainEffort.innerHTML = "Effort: " + mountain.effort;
    mountainElevation.appendChild(mountainEffort);




    let mountainImage = document.createElement("img");
    mountainImage.className = "mountainImage";
    mountainImage.src = "images/" + mountain.img;
    mountainImage.alt = "mountain image";
    mountainEffort.appendChild(mountainImage);

    console.log(mountainImage);
}




// Fetch the sunset/sunrise times for a specific mountain 
getSunsetForMountain(mountain.coords.lat, mountain.coords.lng).then(data => {
    const sunrise = data.results.sunrise;


    const sunsetTime = data.results.sunset;

    console.log(data.results)
});
   



// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
}

