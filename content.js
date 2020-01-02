
$(function () {
    $("#button").click(function () {
        chrome.runtime.sendMessage({ greet: 'hello' }, function (response) {
            console.log('content get response:', response);
            $("#item-list").html(response);
            

        });
    });

    $("#button2").click(function () {
        // 先获取background页面
        var bg = chrome.extension.getBackgroundPage();
        //再在返回的对象上调用background.js 里面的函数
        bg.test();
    });


    //// 先获取background页面
    //var bg = chrome.extension.getBackgroundPage();
    ////再在返回的对象上调用background.js 里面的函数
    //bg.test();

})
