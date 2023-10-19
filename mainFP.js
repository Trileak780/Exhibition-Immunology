function sendsp() {
    ImSysPar = document.getElementById("cells").value;
    //ImSysSce = document.getElementById("scenario").value;
    localStorage.setItem('ImSysPar', ImSysPar);
    //localStorage.setItem('ImSysSce', ImSysSce);
    //console.log("User wants to learn about "+ImSysPar+"and User wants to simulate "+ImSysSce);
    window.location = "indexSP.html";
}
function sendip() {
    console.log("User wants to go to the index page");
    window.location = "indexIP.html";
}