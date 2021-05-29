$(function() {
    var intv = setInterval(function() {
        $(".copybutton").html('Copy');
    }, 2000);
    $("body").on('click', ".copybutton", function() {
        $(".copybutton").html('Copy');
        $(this).html('Copied');
        clearInterval(intv);
    });
});

var clipboard = new ClipboardJS('.copybutton');
clipboard.on('success', function(e) {
    //console.log(e);
});
clipboard.on('error', function(e) {
    //console.log(e);
});