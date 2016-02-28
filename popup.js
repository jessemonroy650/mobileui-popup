var gWaittime    = 1000;
var gTimeouttime = 5000;
//
function onButtonClick() {
    console.log('onButtonClick');
    /* This could be done with callbacks, but I did it this way so it was obvious. */
    /* Set Popup message after a short delay */
    setTimeout(function() {
        console.log('popup');
        document.getElementById('popup').classList.remove("hidden");
    }, gWaittime);
    /* Set delay to fadeOut */
    setTimeout(function() {
        console.log('fadeout');
        document.getElementById('popup').classList.add("fadeout");
    }, gWaittime + gTimeouttime);
    /* Reset to Inital state. */
    setTimeout(function() {
        console.log('reset');
        document.getElementById('popup').classList.add("hidden");
        document.getElementById('popup').classList.remove("fadeout");
    }, gWaittime + gWaittime + gTimeouttime);
}
/* The same thing with nested callback(). For some this may be harder to grasp.
*/
function onButtonClick2() {
    console.log('onButtonClick2');
    setTimeout(function() {
        console.log('popup');
        document.getElementById('popup').classList.remove("hidden");
        /* Set delay to fadeOut */
        setTimeout(function() {
            console.log('fadeout');
            document.getElementById('popup').classList.add("fadeout");
            /* Reset to Inital state. */
            setTimeout(function() {
                console.log('reset');
                document.getElementById('popup').classList.add("hidden");
                document.getElementById('popup').classList.remove("fadeout");
            }, gWaittime);
        }, gTimeouttime);
    }, gWaittime);
}
