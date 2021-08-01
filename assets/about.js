function closeWindow(element) {
    var x = element.parentElement.parentElement.parentElement;  
    console.log(x);
    x.style.visibility='hidden';
}

var exits = document.getElementsByClassName("exit");
console.log(exits[0].parentElement.parentElement.parentElement);

for (var i = 0; i < exits.length; i++) {
    exits[i].addEventListener("click", function() {
        closeWindow(this);
    }, false);
}

function openWindow(element) {
    element.style.visibility='visible';
}

var resume = document.querySelector(".resume-button");
resume.addEventListener("click", function() {
    var x = document.querySelector(".resume");
    openWindow(x);
});
