function subscribe(){
    document.getElementById("form").innerHTML = "Thank you for Subscribing <3";
}

// submitBtn.addEventListener("click", function (evt) {
//  evt.preventDefault();
//  window.location.replace("new target URL");
//  return false; 
// });

function createName(){
    let lastMeal=document.getElementById("lastMeal").value;
    let blahColor=document.getElementById("blahColor").value;
    let seasoning=document.getElementById("seasoning").value;
    alert(`${lastMeal} ${blahColor} ${seasoning}`)
}


}