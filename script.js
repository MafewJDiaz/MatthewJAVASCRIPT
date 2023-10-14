window.addEventListener("load", function(){
    setTimeout(function open(event){
        document.querySelector(".popup").style.display = "block";
        document.body.classList.add("popup-open"); // Add a class to the body
    }, 1500);
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.body.classList.remove("popup-open"); // Remove the class from the body
});



