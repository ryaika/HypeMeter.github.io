

var slider = document.getElementById("ranger");
var outputte = document.getElementById("value");


outputte.innerHTML=slider.value;
var x = 1;
slider.oninput=function(){
    outputte.innerHTML=this.value;
}

slider.addEventListener("mousemove", function(){
    var x =slider.value;
    var color ='linear-gradient(90deg, rgb(255, 1, 255)' + x +'%, rgb(210,120,172)'+ x +'%)';
    slider.style.background = color;
})


function replace(){
document.getElementById("rate").innerHTML = slider.value +"%";
}




    
var slider1 = document.getElementById("ranger1");
var outputte1 = document.getElementById("value1");


outputte1.innerHTML=slider1.value;
var t = 1;
slider1.oninput=function(){
    outputte1.innerHTML=this.value;
}

slider1.addEventListener("mousemove", function(){
    var t =slider1.value;
    var color1 ='linear-gradient(90deg, rgb(255, 120, 130)' + t +'%, rgb(225,173,172)'+ t +'%)';
    slider1.style.background = color1;
})


function replace1(){
    document.getElementById("rate1").innerHTML = slider1.value +"%";
    }
