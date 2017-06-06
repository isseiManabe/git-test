$(function () {
    // 
    var duration = 300;

    // buttons1 ----------------------------------------
    // buttons1  1行目
    $("#buttons1 button:nth-child(-n+4)")
    .on("mouseover",function(){
        $(this).stop(true).animate({
            "background-color":"red",
            "color":"white"
        });
    })
    .on("mouseout",function(){
        $(this).stop(true).animate({
            "background-color":"white",
            "color":"black"
        });
    });
    // buttons1  2行目
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
        .on('mouseover', function () {
            $(this).stop(true).animate({
                borderWidth: '12px',
                color: '#ae5e9b'
            }, duration, 'easeOutSine');
        })
        .on('mouseout', function () {
            $(this).stop(true).animate({
                borderWidth: '0px',
                color: '#ebc000'
            }, duration, 'easeOutSine');
        });
    });
    // buttons1  3行目
    $("#buttons1 button:nth-child(n+9)")
    .on("mouseover",function(){
        $(this).find(">span").stop(true).animate({
            "width":"100%"
        },duration,"easeOutSine"
        );
    })
    .on("mouseout",function(){
        $(this).find(">span").stop(true).animate({
            "width":"0%"
        },duration,"easeOutSine"
        );
    });