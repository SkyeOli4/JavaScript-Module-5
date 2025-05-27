
//Click ME! Button Function script. Opens up a pop up alert
document.getElementById('ClickMeButton').addEventListener('click', function()
{alert('You Just Took Orders From A Button!');});

//Click me too Button Function. Turns the Body Text from black to lightblue and lightblue to black when you click
let button=document.getElementById("ClickMeToo");
let body=document.getElementById("Body");
button.addEventListener('click',function(){
body.style.color=body.style.color==="lightblue"?"black":"lightblue";
});