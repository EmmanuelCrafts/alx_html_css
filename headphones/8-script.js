document.addEventListener("DOMContentLoaded", function(){
    const list = document.querySelector(".nav-list");   
    const menu = document.querySelector(".hamburger");
     
    menu.addEventListener("click", function(){
        console.log("menu clicked");   
        list.classList.toggle("show");
        menu.classList.toggle("open");
     });
});