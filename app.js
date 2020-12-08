var url="https://api.funtranslations.com/translate/navi.json";
var input=document.querySelector("#input-text");
var output=document.querySelector("#output");
var button=document.querySelector("#btn");
console.log("js connected");
function geturl(input){
    return url + "?" + "text=" + input
}

function errorHandler(error){
    alert("Please try again after some time!!");
}
function onclickevent(){
    inputText=input.value;
    fetch(geturl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedoutput=json.contents.translated;
        output.innerText=translatedoutput;
    })
    .catch(errorHandler)
};

function changeColor(){
    btn.style.backgroundColor = "#0F2347"
}

btn.addEventListener("click",onclickevent)
btn.addEventListener("click",changeColor);