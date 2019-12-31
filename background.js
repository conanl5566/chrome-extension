function test() {
    alert("test");
}
//chrome.extension.onMessage.addListener(function (objRequest, _, sendResponse) {
//    var strText = objRequest.txt;

//    console.log(strText);
//    // 将信息能过Ajax发送到服务器
//    $.ajax({
//        url: 'https://www.cnblogs.com/',
//        type: 'GET',
//        data: { 'txt': strText },
//        dataType: 'json',
//    }).then(function () {
//        // 将正确信息返回content_script
//        sendResponse({ 'status': 200 });
//    }, function () {
//        // 将错误信息返回content_script
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
        // 将正确信息返回content_script
        callback(response);
        //callback({ 'status': 200 });
    }, function (response) {
        // 将错误信息返回content_script
            console.log(response);
            callback({ 'status': 500 });
    });



    //setTimeout(function () {
    //    callback('hi!');
    //}, 2000);
    return true;//这是重点，没有return true，上面返回的是undefined而不是"hi!"
});