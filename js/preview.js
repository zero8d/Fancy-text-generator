$(function() {
    /*if($.trim($("#fancytext").val())!='') { 
       generateFancy($("#fancytext").val());
     } else {
      generateFancy("Preview Text");
     }*/

    $(".fancytext").keyup(function() {
        $(".fancytext").val($(this).val());
        if ($.trim($(this).val()) != '') {
            generateFancy($(this).val());
        } else {
            generateFancy("Preview Text");
        }
    });
    var ct = 89;

    function generateFancy(txt) {
        var fancyText = '';
        var result = forward(txt);
        var finalRes = result.split('\n\n');
        var sn = 1;
        $.each(finalRes, function(inx, vl) {
            $("#copy_" + inx).val(vl);

            // fancyText  +=  '<div class="input-group mb-3"><input type="text" class="form-control text-'+sn+'" value="'+vl+'" id="copy_'+inx+'" readonly="readonly"><div class="input-group-append"><span class="input-group-text copybutton" style="cursor:pointer;" data-clipboard-action="copy" data-clipboard-target="#copy_'+inx+'">Copy</span></div></div>';
            sn++;
        });


        for (k = 89; k <= ct; k++) {
            //console.log(k);
            $("#copy_" + k).val(crazyWithFlourishOrSymbols(txt));
        }
        //$("#result").html(fancyText); 
    }

    $(".loadmore").click(function() {
        $(this).html('Loading...');
        var text = $.trim($(".fancytext").val());
        if (text == '') {
            text = 'Preview Text';
        }
        var that = $(this);
        var intvl = setInterval(function() {
            that.html('Load More');
            clearInterval(intvl);
        }, 1000);
        for (var i = 1; i <= 10; i++) {
            fancyText = '<div class="input-group mb-3"><input type="text" class="form-control" value="' + crazyWithFlourishOrSymbols(text) + '" id="copy_' + ct + '" readonly="readonly"><div class="input-group-append"><span class="input-group-text copybutton" style="cursor:pointer;" data-clipboard-action="copy" data-clipboard-target="#copy_' + ct + '">Copy</span></div></div>';
            ct++;
            $("#result").append(fancyText);
        }
    });

});