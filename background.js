function test() {
    alert("test");
}
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