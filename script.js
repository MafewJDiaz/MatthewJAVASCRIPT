for (let i = 0; i<5; i++){

    document.querySelector(".dropdown").style.display = "block";
    count = 0;

}


window.addEventListener("load", function(){
    document.querySelector("#response").style.display = "none";
    document.querySelector("#textbutton").style.display = "none";
    document.querySelector("#colorp").style.display = "none";
    document.querySelector(".colors").style.display = "none";
    document.querySelector(".inputoutput").style.display = "none";

    setTimeout(function open(event){
        document.querySelector(".popup").style.display = "block";
        document.body.classList.add("popup-open"); 
    }, 1500);
    
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.body.classList.remove("popup-open"); 
    console.log("close")
    setTimeout(popup2,1500);
    
});

function popup2(event) {
    console.log("worked")
    // make the thing appear
    document.querySelector(".popup2").style.display = "block";
    document.body.classList.add("popup2-blur"); 
    document.querySelector("#textbutton").style.display = "none";
}
//Question3//
document.querySelector("#close2").addEventListener("click", function () {
    count++;
    adder = document.getElementById('counter');
    adder.textContent = count;

});

document.querySelector("#leave").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
    document.body.classList.remove("popup2-blur"); 

    // one of these increases the box a few pixels
    document.querySelector("#textbutton").style.display = "block";
    document.querySelector("#colorp").style.display = "block";
    document.querySelector(".colors").style.display = "block";
    document.querySelector(".inputoutput").style.display = "block";

});

//Question 2//
function hideTextButton(){

    document.querySelector("#response").style.display = "none";

}

document.querySelector("#textbutton").addEventListener("click", function(){
     document.querySelector("#response").style.display = "block";
     setTimeout(hideTextButton,500);
});

//Question4//
document.querySelector("#R").addEventListener("click", function(){
    document.body.classList.remove("GreenScreen", "BlueScreen");
    document.body.classList.add("RedScreen");
});


document.querySelector("#G").addEventListener("click", function(){
    document.body.classList.remove("RedScreen", "BlueScreen");
    document.body.classList.add("GreenScreen");
});


document.querySelector("#B").addEventListener("click", function(){
    document.body.classList.remove("RedScreen", "GreenScreen");
    document.body.classList.add("BlueScreen");
});

//Question6//
document.querySelector("#f1").addEventListener("click", function(){
    // put inside event listener
    const element = document.body
    console.log(element)


            element.style.fontFamily = 'Impact, Haettenschweiler, sans-serif';


})

document.querySelector("#f2").addEventListener("click", function(){
    // put inside event listener
    const element = document.body
     element.style.fontFamily = 'Cambria, Cochin, Georgia, Times, serif';
})

document.querySelector("#f3").addEventListener("click", function(){
    // put inside event listener
    const element = document.body
     element.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
})

document.querySelector("#f4").addEventListener("click", function(){
    // put inside event listener
    const element = document.body
     element.style.fontFamily = 'Brush Script MT';
})


//Question5//
const txt1 = document.getElementById('input');
const bnt1 = document.getElementById('button1');
const out1 = document.getElementById('output1');

function fun1(){
    out1.innerHTML = txt1.value;
}

bnt1.addEventListener('click',fun1)





