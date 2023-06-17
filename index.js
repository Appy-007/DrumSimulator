var drumKitsNumber = document.querySelectorAll(".drum").length;
for(var i=0;i<drumKitsNumber;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var drumAlphabet=this.innerHTML;
       makeSound(drumAlphabet);
       buttonAnimation(drumAlphabet);
    })
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

         case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(drumAlphabet) ;       
       }
}
function buttonAnimation(currentKey){
    var currentButtonClass=document.querySelector("."+currentKey);
    currentButtonClass.classList.add("pressed");
    setTimeout(function(){
        currentButtonClass.classList.remove("pressed")
    },100);
}
 