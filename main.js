menu_list_array = ["Veg Margherita Pizza","nonveg Margherita pizza","veg tandoori pizza","panner tandoori pizza","nonveg tandoori pizza","veg supreme pizza",
"chicken supreme pizza","paneer tikka pizza","Delux veggie pizza","pasta pizza","oreo pizza","gummy bear pizza","skitles pizza","M and M pizza",
 "fruit pizza","custard pizza","jelly pizza","icream pizza","chiza"];            
 
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.lenght;i++){
 htmldata=htmldata+'<li>'+menu_list_array[i]+'</i>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_addmenu").innerHTML= htmldata;

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata+'section class="card">'
      +'<img src=images/pizzaImg.png"/>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}