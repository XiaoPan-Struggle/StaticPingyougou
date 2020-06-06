$(function() {
  // 两个的全选  $('.checkall')
  // 所有的单选  $('.j-checkbox')
  //小计  $('.b-money')
  // 数量  $('.b-num').children() .minus #pieces .plus
  // 删除当前 $('.bar-action')
  //删除选中 .removebath
  // 清理购物车 .clearcar
  // 件数  .amout-sum.children(em)
  // 总计：.totalprice.children(em)

    
    // 全选模块
  //   一个总按钮点击，其他几个单按钮和另外一个总按钮跟随变化chexked
  $(".checkall").change(function() {
      $(".checkall,.j-checkbox").prop("checked", $(this).prop("checked"));
      if ($('.checkall').prop('checked')) {
        //   当全选选中时给li都添加current类
        $('.j-checkbox').parents('.item').addClass('current');
      }
      else {
        //   全选没有选中时
        $('.j-checkbox').parents('.item').removeClass('current');
      }
  });
    // 单选样式
  //   当每个单按钮发生变化时，判断单按钮选中的个数是多少个
  $(".j-checkbox").change(function() {
    // 判断是否全部选中
    if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
      }
      
    //   选中的添加类名current
      if ($(this).prop('checked')) {
    //   选中的添加current类
      $(this).parents(".item").addClass("current");
    } else {
        // 没选中的移除current类
        $(this).parents('.item').removeClass('current');
    }
  });
    // 数量模块
    // 加
    $('.plus').click(function () {
        // 获取当前的value的数量
        var num = $(this).siblings('.pieces').val();
        // $('.b-money').text(num * $('.b-price').text());
        num++;
        $(this).siblings('.pieces').val(num);
        // 小计模块
        var price = $(this).parent().siblings('.b-price').text().substr(1)
        $(this).parent().siblings('.b-money').text('￥' + (num * price).toFixed(2));
        getSum();
    })
    // 减
    $('.minus').click(function () {
        // 获取当前的value的数量
        var num = $(this).siblings('.pieces').val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings('.pieces').val(num);
        // 小计模块
        var price = $(this).parent().siblings('.b-price').text().substr(1)
        $(this).parent().siblings('.b-money').text('￥' + (num * price).toFixed(2));
        getSum();
    })
    // 修改文本框数量，计算小计
    $('.pieces').change(function () {
        // 拿到更改的值与单价相乘复制给小计
        var num = $(this).val();
        var price = $(this).parent().siblings('.b-price').text().substr(1)
        $(this).parent().siblings('.b-money').text('￥' + (num * price).toFixed(2))
        getSum();
    })
    // 总额和总价
    getSum();
    function getSum() {
        var count = 0;
        var money = 0;
        // 总件
        $('.pieces').each(function (index, ele) {
            count += parseInt($(ele).val());
            $('.amout-sum em').text(count);
        })
        // 总金额
        $('.b-money').each(function (index, ele) {
            money += parseFloat($(ele).text().substr(1));
            $('.totalprice em').text('￥'+money.toFixed(2))
        })
    }
    //删除模块
    // 每做一次删除操作就执行一次总计总e
    $('.b-action').click(function () {
        $(this).parent().remove();
        getSum();
    })
    // 清理购物车
    $('.clearcar').click(function () {
        $('.item').remove();
        $('.totalprice em').text('￥00.00');
        $('.amout-sum em').text('0')
    })
    // 选中删除
    $('.removebath').click(function () {
        $(".j-checkbox").each(function (index, ele) {
            if ($(ele).prop('checked')) {
                $(ele).parents('.item').remove();
            }
        })
        if ($('.j-checkbox').length == 0) {
            $('.checkall').prop('checked', false)
            // 当删除完最后一个时
            $('.totalprice em').text('￥00.00');
            $('.amout-sum em').text('0')
        }
        // 每做一次删除操作就执行一次总计总e
        getSum();
    })
});