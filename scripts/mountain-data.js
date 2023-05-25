"use strict";



const mountainSelect = document.getElementById("mountainSelect");
console.log(mountainSelect);

const mountainDropDown = document.getElementById("mountainDropDown");
console.log(mountainDropDown);

const mountainDetailRow = document.getElementById("mountainDetailRow");


window.onload = () => {

    mountainDropDown.onclick = mountainDropDownClick;

    for (let mountain of mountainsArray) {
        console.log(mountain);
        let newOption = new Option(mountain.name);
        mountainDropDown.appendChild(newOption);

        console.log(mountain);
    }
};



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


    let mountainDesc =document.createElement("li");
    mountainDesc.className = "mountainDesc";
    mountainDesc.innerHTML = "Description: " + mountain.desc;
    h5Name.appendChild(mountainDesc);

    let mountainElevation = document.createElement("li");
    mountain








}

