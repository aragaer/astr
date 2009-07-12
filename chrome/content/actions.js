var status;
var tab1, tab2;

function onLoad() {
    status = document.getElementById('status');
    tab1 = document.getElementById('lvl0');
    tab2 = document.getElementById('levels');

    status.value = "Initialized";
}

function quit() {
    if (confirm(document.getElementById('quit-label').value))
        doQuit(false);
}

function doQuit (aForceQuit) {
    var appStartup = Cc['@mozilla.org/toolkit/app-startup;1'].
            getService(Ci.nsIAppStartup);

    appStartup.quit(aForceQuit
            ? Ci.nsIAppStartup.eForceQuit
            : Ci.nsIAppStartup.eAttemptQuit);
}

function onAbout (event) {
    println("onAbout activated.");
    window.openDialog("dialogs/about.xul", "_blank", "chrome,close,modal");
}

function get_image(relation) {
    return "chrome://astr/content/img/.gif";
}

function get_planet_img(planet_num) {
    return "_01-sun.gif";
}

