var y = Math.floor(Math.random() * 10 + 1);
var guess=1;
var attempt=10;
document.getElementById("submit").onclick = function(){     
var x = document.getElementById("input").value;
if(attempt<=10&&attempt>1){
if(x == y) {    
       abc.textContent="Wow!You Guessed it right in "+ guess + " guess";
        document.getElementById("no").innerHTML=attempt;
   }
   else if(x > y)  {    
       guess++;
       attempt--;
       abc.textContent="Please,Try a smaller number";
       document.getElementById("no").innerHTML=attempt;
   }
   else{
       guess++;
       attempt--;
       abc.textContent="Please,Try a greater number";
       document.getElementById("no").innerHTML=attempt;
     }
 }
else{
        document.getElementById("over").innerHTML="Game Finished";
    }
}