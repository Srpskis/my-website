var anotherButton = document.getElementsByTagName("button")[0];
var inputBox = document.getElementsByTagName("input")[0];
anotherButton.addEventListener("click", function (event) {
    anotherButton.remove();
    var inputText = inputBox.value;
    inputBox.remove();
    var docBody = document.getElementsByTagName("body")[0];
    docBody.innerText = inputText === "" ? "Hello stranger" : "Hello " + inputText;
   
});
