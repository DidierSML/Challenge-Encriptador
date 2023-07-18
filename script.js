var encryptButton = document.querySelector(".encryptButton");
var decryptButton = document.querySelector(".decryptButton");
var animation = document.querySelector(".animationContainer");
var paragraphContainer = document.querySelector(".paragraphContainer");
var result = document.querySelector(".resultText");

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;


function encrypt(){
    hide();
    var textBox = saveText()// textContent
    result.textContent = encryptText(textBox);
}

function decrypt(){
    hide();
    var textBox = saveText()
    result.textContent = decryptText(textBox);
}

function saveText(){
    var textBox = document.querySelector(".textBox")
    return textBox.value
}

function hide(){
    animation.classList.add("ocultar");
    paragraphContainer.classList.add("ocultar");
}

function encryptText(message){
    var text = message;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai"
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i]
        }
    }
    return finalText;

}

function decryptText(menssage){
    var text = menssage;
    var finalText = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
            i = i+3;
        }
        
        else if(text[i] == "u"){
            finalText = finalText + "u"
            i = i+3;
        }
        else{
            finalText = finalText + text[i];
        }
        
    }

    return finalText;

}

const copyButton = document.querySelector(".copyButton"); 
    copyButton.addEventListener("click", copiar = () => {
    
    var content = document.querySelector(".resultText").textContent;
    navigator.clipboard.writeText(content);
    console.log("hola"); 
}

);