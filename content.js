
$(function () {
    $("#button").click(function () {
        chrome.runtime.sendMessage({ greet: 'hello' }, function (response) {
            console.log('content get response:', response);
            $("#item-list").html(response);
            

        });
    });
})
