var interval = 16000;                //轮播间隔时间
var slideBox = $('#slide');         //轮播图区域
var innerBox = $('#inner');         //内层大盒子
var img = innerBox.children('li');  //每个图片

// var imgW = $(img[0]).width();  //每个li标签的宽度
var imgW = 19.2;
console.log(imgW)
var imgCount = 4;                   //总图片个数（不同图片的个数）（实际dom上是有7张）
var i = 0;                          //初始化为第0张图片
var timer = null;                    //定时器

//自动轮播
timer = setInterval(function () {
    i++;
    innerBox.stop(false, true).animate({'left':-i*imgW+'rem'},200)
    innerBox.find('li').removeClass('animated').eq(i).addClass('animated')
    if(i > imgCount){
        innerBox.animate({'left':0*imgW+'rem'},50);
        innerBox.find('li').removeClass('animated').eq(0).addClass('animated')
        i = 0;
    }
},interval)


//鼠标经过轮播图区域时，清除定时器，停止自动轮播
slideBox.mouseenter(function () {
    clearInterval(timer);
})

//鼠标离开轮播图区域时，重新启动自动轮播
slideBox.mouseleave(function () {
    timer = setInterval(function () {
        i++;
        innerBox.stop(false, true).animate({'left':-i*imgW+'rem'},300)
        innerBox.find('li').removeClass('animated').eq(i).addClass('animated')
        if(i > imgCount){
            innerBox.animate({'left':-0*imgW+'rem'},200);
            innerBox.find('li').removeClass('animated').eq(0).addClass('animated')
            i = 0;
        }
    },interval)
})