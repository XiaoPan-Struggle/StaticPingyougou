$(function () {
    var flag = true; // 节流阀 互斥锁
    
    // 页面滚动
        $(window).scroll(function () {
            toggleTool()
            scrollClass()
        })
    // 页面滚动到某个位置时，对应电梯添加类
    function scrollClass() {
        if (flag) {
            $('.floor .container').each(function (index, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool li').eq(index).children('a').addClass('current').parent().siblings().children().removeClass('current')
                }
            })
        }
    }
    // 电梯导航显示与隐藏
    toggleTool()
    function toggleTool() {
        if ($(document).scrollTop() >= $('.recommend').offset().top) {
            $('.fixedtool').stop().fadeIn(100);
        } else {
            $('.fixedtool').stop().fadeOut(100);
        }
    }
    // 点击导航
    $('.fixedtool li').click(function () {
        flag = false;
        // 获得对应的楼层的距离
        var current = $('.floor .container').eq($(this).index()).offset().top;
        // 用动画让body html滚动到当前
        $('body,html').stop().animate({
            scrollTop: current
        }, function () {
                flag = true;
        })
        // 给点击的li添加类
        $(this).children('a').addClass('current')
        // 给父级的其他兄弟删除类current
        $(this).siblings().children('a').removeClass('current')
    })
})