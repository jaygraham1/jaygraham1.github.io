// on click code
var clicks = 0;
function whenClicked(number) {
   clicks = clicks + number;
   document.getElementById("clicks").innerHTML = clicks;
}
// upgrades code
var clicksPerSecond = 0
function updateClicksPerSecond(numberIncrease) {
   clicksPerSecond = clicksPerSecond + numberIncrease
   document.getElementById('clicksPerSecond').innerHTML = clicksPerSecond
}
// cursor
var cursors = 0;
function buyCursor() {
       var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));    
       if(clicks >= cursorCost){                                  
           cursors = cursors + 1;                                  
           clicks = clicks - cursorCost;                         
           document.getElementById('cursors').innerHTML = cursors; 
           document.getElementById("clicks").innerHTML = clicks;
           updateClicksPerSecond(1);
       };
       var nextCost = Math.floor(10 * Math.pow(1.1,cursors));      
       document.getElementById('cursorCost').innerHTML = nextCost;
};
 
// monkey
var monkeys = 0
function buyMonkey() {
       var monkeyCost = Math.floor(100 * Math.pow(1.1,monkeys));    
       if(clicks >= monkeyCost){                                  
           monkeys = monkeys + 1;                                  
           clicks = clicks - monkeyCost;                         
           document.getElementById('monkeys').innerHTML = monkeys; 
           document.getElementById("clicks").innerHTML = clicks;
           updateClicksPerSecond(5);
       };
       var nextCost = Math.floor(100 * Math.pow(1.1,monkeys));      
       document.getElementById('monkeyCost').innerHTML = nextCost;
};
// paperclip
var paperclips = 0
function buyPaperclip() {
       var paperclipCost = Math.floor(1000 * Math.pow(1.1,paperclips));    
       if(clicks >= paperclipCost){                                  
           paperclips = paperclips + 1;                                  
           clicks = clicks - paperclipCost;                         
           document.getElementById('paperclips').innerHTML = paperclips; 
           document.getElementById("clicks").innerHTML = clicks;
           updateClicksPerSecond(20)
       };
       var nextCost = Math.floor(1000 * Math.pow(1.1,paperclips));      
       document.getElementById('paperclipCost').innerHTML = nextCost;
};
 
 
 
 
 
 
 
 
// update code
window.setInterval(function(){
  
   whenClicked(monkeys)
   whenClicked(paperclips * 4)
}, 200);
 
window.setInterval(function(){
   whenClicked(cursors)
}, 1000);
 
 
 






