document.addEventListener('DOMContentLoaded', function(event) {

    var dataText = ["Hi there", "Welcome to my website", "Would you like to proceed to Sienna OS?"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + 
                '<span aria-hidden="true"></span>';

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 80);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 1000);
        }
    }

    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            // animation ended. now what?
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);
});
