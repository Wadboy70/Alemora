var bars = document.querySelector(".fas.fa-bars");
var box = document.getElementById("mainBox");
var menu = document.getElementById("menu");
var topBar = document.getElementById("topBar");
var content = document.getElementById("content");
var moving = true;

bars.addEventListener("click", ()=>{
    if(((!box.classList.contains("grow") && !box.classList.contains("shrink")) || box.classList.contains("grow"))&& moving){
        moving = false;
        setTimeout(function(){
            moving = true;
        },1000);
        box.classList.remove("grow");
        box.classList.add("shrink");
        menu.classList.add("reveal");
        menu.classList.remove("hide");
        menu.classList.remove("dn");
        topBar.classList.remove("dn");
        topBar.classList.remove("hide");
        topBar.classList.add("reveal");
        content.classList.add("round");
        content.classList.remove("square");        
    }else if (moving) {
        moving = false;
        box.classList.remove("shrink");
        box.classList.add("grow");
        menu.classList.add("hide");
        menu.classList.remove("reveal");
        topBar.classList.add("hide");
        topBar.classList.remove("reveal");
        content.classList.add("square");
        content.classList.remove("round");
        setTimeout(function(){
            menu.classList.add("dn");
            topBar.classList.add("dn");
            moving = true;
            if(menu.classList.contains("reveal")){
                menu.classList.remove("dn");
                topBar.classList.remove("dn");
            }
        },1000);
    }
});