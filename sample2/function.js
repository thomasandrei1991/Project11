let pressMe = document.querySelector("#clickMe");
let header = document.querySelector("#header");
function sayHello(name){
    alert("Hello, " + name + "!");
}

if (pressMe) {
    pressMe.addEventListener("click", function() {
        sayHello("George");
        let changeBG = document.body.style.backgroundColor = "lightblue";
        alert("Background color changed to " + changeBG);
        header.style.color = "green";
        header.style.textAlign = "center";
        header.textContent = "You clicked the button!";
        header.style.fontSize = "40px";
    });
}