
chrome.runtime.onInstalled.addListener(function(details){
    console.log(details);
    if(details.reason == "install"){
        chrome.tabs.create({url: "options.html"});
    }
});