

for( var i=0;i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick)
function handleClick(){

var buttonhtml=this.innerHTML;
keyandvoice(buttonhtml)
buttonAnimation(buttonhtml);
}

}

document.addEventListener("keypress",function(event){
    keyandvoice(event.key)
    buttonAnimation(event.key);
})

function keyandvoice(key){
    switch (key) {
        case "w":
            var audio1=new Audio('sounds/crash.mp3')
            audio1.play()
            break;
        case "a":
            var audio2=new Audio('sounds/kick-bass.mp3')
            audio2.play()
            break;
            case "s":
                var audio3=new Audio('sounds/snare.mp3')
                audio3.play()
                break;
                case "d":
                    var audio4=new Audio('sounds/tom-1.mp3')
                    audio4.play()
                    break;
                    case "j":
                        var audio5=new Audio('sounds/tom-2.mp3')
                        audio5.play()
                        break;
                        case "k":
                        var audio6=new Audio('sounds/tom-3.mp3')
                        audio6.play()
                        break;
                        case "l":
                        var audio7=new Audio('sounds/tom-4.mp3')
                        audio7.play()
                        break;
        default:
            alert("do better")
            break;
    }
    
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}