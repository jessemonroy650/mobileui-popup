/*
    Date: 2016-02-27
*/
var app = {
    onDeviceReady : function () {
        //alert("device ready.");
        console.log("device ready.");
        if (device.platform === "iOS") {
            // hide Exit button. They don't have one on iOS devices.
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body); },
                false);
            // get the [exit] button
            document.getElementById('exitApp').addEventListener('click', function() {
                navigator.app.exitApp();
            });
        }
        if (device.platform == 'browser') {
            // hide Exit button. Browser does not exit.
            document.getElementById('exitApp').classList.add("hidden");
        } else {
        }
        document.getElementById('timeouttime').innerHTML = gTimeouttime/1000;
        document.getElementById('button1').addEventListener('click', function() {
            onButtonClick();
        });
        document.getElementById('button2').addEventListener('click', function() {
            onButtonClick2();
        });
    }
};

//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    // Detect if we are using Cordova/Phonegap or a browser.
    // https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
    var isCordovaApp = (typeof window.cordova !== "undefined");

    // Is it a device we know?
    if ( isCordovaApp === true ) {
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", app.onDeviceReady, false);
    } else {
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        app.onDeviceReady();
    }
});
