$(function(){
    var duration = 300;
    var $images = $("#images p");
    
    
    //一つ目の写真
    $images.filter(":nth-child(1)")
    .on("mouseover",function(){
        $(this).find("strong,span").stop(true).animate({
            "opacity":"1"
        },duration);
    })
    .on("mouseout",function(){
        $(this).find("strong,span").stop(true).animate({
            "opacity":"0"
        },duration);
    });
    
    $images.filter(":nth-child(2)")
    .on("mouseover",function(){
        $(this).find("strong").stop(true).animate({"opacit y":"1","left":"0"},duration);
        $(this).find("span").stop(true).animate({"opacity":"1"},duration);
    })
    .on("mouseout",function(){
        $(this).find("strong").stop(true).animate({"opacity":"0","left":"-200%"})
        $(this).find("span").stop(true).animate({"opacity":"0"});
    });
    
    
    
    $images.filter(":nth-child(3)")
    .on("mouseover",function(){
        $(this).find("img").stop(true).animate({"top":"-40px"},duration);
        $(this).find("strong").stop(true).animate({"bottom":"0"},duration);
        $(this).find("span").stop(true).animate({"opacity":"1"},duration);
    })
    .on("mouseout",function(){
        $(this).find("img").stop(true).animate({"top":"0px"},duration);
        $(this).find("strong").stop(true).animate({"bottom":"-80px"},duration);
        $(this).find("span").stop(true).animate({"opacity":"0"},duration);
    });
        
    });
    
    
    
    
    
    
    
    
//    $images.filter(':nth-child(3)')
//        .on('mouseover', function(){
//            $(this).find('strong').stop(true).animate({bottom: '0px'}, duration);
//            $(this).find('span').stop(true).animate({opacity: 1}, duration);
//            $(this).find('img').stop(true).animate({top: '-20px'}, duration * 1.3);
//        })
//        .on('mouseout', function(){
//            $(this).find('strong').stop(true).animate({bottom: '-80px'}, duration);
//            $(this).find('span').stop(true).animate({opacity: 0}, duration);
//            $(this).find('img').stop(true).animate({top: '0px'}, duration);
//        });
    
    
    
















//$(function(){
//    // 
//    var duration = 300;
//
//    // images ----------------------------------------
//    var $images = $('#images p');
//
//    // images 1つ目の画像
//    $images.filter(':nth-child(1)')
//        .on('mouseover', function(){
//            $(this).find('strong, span').stop(true).animate({opacity: 1}, duration);
//        })
//        .on('mouseout', function(){
//            $(this).find('strong, span').stop(true).animate({opacity: 0}, duration);
//        });
//
//    // images 2つ目の画像
//    $images.filter(':nth-child(2)')
//        .on('mouseover', function(){
//            $(this).find('strong').stop(true).animate({opacity: 1, left: '0%'}, duration);
//            $(this).find('span').stop(true).animate({opacity: 1}, duration);
//        })
//        .on('mouseout', function(){
//            $(this).find('strong').stop(true).animate({opacity: 0, left: '-200%'}, duration);
//            $(this).find('span').stop(true).animate({opacity: 0}, duration);
//        });
//
//    // images 3つ目の画像
    

//});
