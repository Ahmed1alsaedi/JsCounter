let counter = 0;
document.getElementById("first").textContent=counter;
document.getElementById("dicrease").onclick = function(){
     if(counter !=0){
    counter--;
    document.getElementById("first").textContent=counter;
     }
}
document.getElementById("rest").onclick = function(){
  counter=0;
    document.getElementById("first").textContent=counter;
}
document.getElementById("increase").onclick = function(){
    counter++;
    document.getElementById("first").textContent=counter;
}