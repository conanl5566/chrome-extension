function test() {
    alert("test");

  
    //chrome.webNavigation.onDOMContentLoaded.addListener(details => {
    //    chrome.pageAction.show(details.tabId);

    //})


    //chrome.tabs.getSelected(null, function (tab) {

    //    chrome.pageAction.show(tab.id);


    //});

}


//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//    if (changeInfo.status == 'complete') {

//        alert("LOADED");
//        //setTimeout(runExtension, 1000);

//        chrome.webNavigation.onDOMContentLoaded.addListener(details => {
//            chrome.pageAction.show(details.tabId);

//        })


//    }
//})





//chrome.extension.onMessage.addListener(function (objRequest, _, sendResponse) {
//    var strText = objRequest.txt;

//    console.log(strText);
//    // ����Ϣ�ܹ�Ajax���͵�������
//    $.ajax({
//        url: 'https://www.cnblogs.com/',
//        type: 'GET',
//        data: { 'txt': strText },
//        dataType: 'json',
//    }).then(function () {
//        // ����ȷ��Ϣ����content_script
//        sendResponse({ 'status': 200 });
//    }, function () {
//        // ��������Ϣ����content_script
//        sendResponse({ 'status': 500 });
//    });
//});

//chrome.runtime.onMessage.addListener(
//    function (request, sender, sendResponse) {
//            sendResponse( "goodbye" );
//    });


chrome.runtime.onMessage.addListener(function (request, sender, callback) {


    $.ajax({
        url: 'https://www.cnblogs.com/',
        type: 'GET',
        //data: { 'txt': strText },
        dataType: 'html',
    }).then(function (response) {
        // ����ȷ��Ϣ����content_script
        callback(response);
        //callback({ 'status': 200 });
    }, function (response) {
        // ��������Ϣ����content_script
            console.log(response);
            callback({ 'status': 500 });
    });



    //setTimeout(function () {
    //    callback('hi!');
    //}, 2000);
    return true;//�����ص㣬û��return true�����淵�ص���undefined������"hi!"
});



chrome.runtime.onInstalled.addListener(function () {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {

     //   alert(1);
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains a 'g' ...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 's?' }, //url�������а�����ĸg�ģ�����Żᱻ����
                    })
                ],
                // And shows the extension's page action.
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});



chrome.tabs.onUpdated.addListener(function (id, info, tab) {
    if (tab.status === 'loading') {
        //updateBrowserAction(id, tab.url);

     
        if (tab.url.indexOf('s?') != -1) {
            //alert(tab.url);
            //   alert(444);
           
        }
        else {
            alert(tab.id);
            chrome.pageAction.hide(tab.id);
        }


    }
});



//chrome.tabs.onActivated.addListener(function (activeInfo) {
//    if (activeInfo.tabId) {
//        chrome.tabs.get(activeInfo.tabId, function (tab) {
//            //updateBrowserAction(tab.id, tab.url);
//            alert(333);
//            if (tab.url.index('s?') != -1) {

//                alert(444);
//                chrome.pageAction.hide(tab.id);
//            }

//        });
//    }
//});
