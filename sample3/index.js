function samplefunc(){
    alert("Button clicked!");
}
const btn = document.querySelector("#click-me");
const originalColor = btn.style.backgroundColor || "";

function hoverfunc(){
    btn.style.backgroundColor = "yellow";
}

function unhoverfunc(){
    btn.style.backgroundColor = originalColor;
}
/*
function hoverfunc(){
    let hoverme = document.querySelector("#click-me");
    hoverme.style.backgroundColor = "yellow";
}

function unhoverfunc(){
    let unhoverme = document.querySelector("#click-me");
    unhoverme.style.backgroundColor = "transparent";
}
*/