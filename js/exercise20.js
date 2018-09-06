var btn = document.querySelector("#btn-bg");
var body = document.querySelector("body");
var isOrange = false;

// toggle:
btn.addEventListener("click", function(){
    body.classList.toggle("orange");
});


// OTHER WAY:

// btn.addEventListener("click", function(){
//     if (isOrange){ 
//         body.style.background = "white";        
//     } else {
//     body.style.background = "orange";
//     }
//     isOrange = !isOrange;
// });


