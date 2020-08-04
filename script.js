var contextMenuItem = {
    "id" : "terminal",
    "title" : "Run in terminal",
    "contexts" : ["selection"]
}
document.write('<script src="./jquery-3.5.1.min.js" type="text/javascript"></script>')
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(cmd){
    console.log(cmd.selectionText)
    $.ajax({
        url: "http://127.0.0.1:8000/run/?cmd=" + cmd.selectionText
    })
});
