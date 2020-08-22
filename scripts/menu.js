$(function(){
    $("#menu").load("menu.html"); 
});
function menudrop(){
const menu = document.getElementById("views").style
    if(menu.visibility=="hidden"){
        menu.visibility="visible";
    }else{
        menu.visibility="hidden";
    }
}