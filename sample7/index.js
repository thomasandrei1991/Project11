let mouseOver = document.querySelector("#myName");

function hoverName(){
    mouseOver.innerHTML = "George";
}

let fullName = {
    firstName: "George",
    middleName: "Michael",
    lastName: "Smith"
}

console.log(`My full name is ${fullName.firstName} ${fullName.middleName} ${fullName.lastName}`);