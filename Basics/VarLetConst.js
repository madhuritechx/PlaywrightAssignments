const browserVersion = "chrome" ;

function getBrowserVersion() {
    let browserMessage;
    if (browserVersion === "chrome") {
        browserMessage = "You are using Chrome browser.";
    } else if (browserVersion === "firefox") {
        browserMessage = "You are using Firefox browser.";
    } else {
        browserMessage = "Browser not recognized.";
    }
 console.log(browserMessage);
}
getBrowserVersion();
