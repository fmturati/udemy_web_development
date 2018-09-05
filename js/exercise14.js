var statusMsg = document.querySelector("#city");

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

statusMsg.innerHTML = "Welcome to " + capital;
