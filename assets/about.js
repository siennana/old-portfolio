
document.getElementsById("close").addEventListener("click", closeWindow);

function closeWindow() {
    var x = document.getElementById("close").parentElement.parentElement;  
    x.style.display = "none";
}
