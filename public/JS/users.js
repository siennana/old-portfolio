document.getElementById("admin").addEventListener("click", EnterPassword);

function EnterPassword() {
    var a = document.getElementById("allUsers");
    var input = document.querySelectorAll('input');
    a.style.visibility = 'hidden';
    input[0].style.visibility = 'visible';
    input[1].style.visibility = 'visible';
}

document.querySelector('input[type=submit]').addEventListener("click", function() {
    alert("Incorrect");
});