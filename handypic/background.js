chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "add-to-blog",
        title: "添加到博客",
        contexts: ["image"]
    });

    chrome.contextMenus.create({
        id: "show-qr-code",
        title: "显示二维码",
        contexts: ["image"]
    });

    chrome.contextMenus.create({
        id: "show-class",
        title: "智能分类",
        contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, evt){
    console.log(info.srcUrl);
    if(info.menuItemId==="add-to-blog"){
        chrome.tabs.sendMessage(evt.id, {
            url: info.srcUrl,
            type: "src",
            job: 1
        });
    }
    else if(info.menuItemId==="show-qr-code"){
        chrome.tabs.sendMessage(evt.id, {
            url: info.srcUrl,
            type: "src",
            job: 2
        });
    }
    else{
        chrome.tabs.sendMessage(evt.id, {
            url: info.srcUrl,
            type: "src",
            job: 3
        });
    }

});
