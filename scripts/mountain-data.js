"use strict";



const mountainSelect = document.getElementById("mountainSelect");
console.log(mountainSelect);

const mountainDropDown = document.getElementById("mountainDropDown");
console.log(mountainDropDown);



window.onload = () => {

    mountainDropDown.onchange = mountainDropDownChange;



    for (let mountain of mountainsArray.name) {
            console.log(mountain);
        let newOption = new Option(mountain.name);

        mountainDropDown.appendChild(newOption);

        console.log(mountainsArray.name);
    }
};



function mountainDropDownChange () {


    let selectedMountain = mountainDropDown.value;

    const mountainFind = mountainsArray.find(mountain => mountain.name === selectedMountain);
    console.log(mountainFind);



    if (mountainFind){
        createMountainParkCard(mountainFind);
        
    }


}

