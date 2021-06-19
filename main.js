var menuarray=[];
function addtomenu(){
    item1=document.getElementById("Iteminpt").value;
    
    menuarray.push(item1);
    document.getElementById("Iteminpt").value="";
}
function showmenu(){
    document.getElementById("output").innerHTML=menuarray;   
}