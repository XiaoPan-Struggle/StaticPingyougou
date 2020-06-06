function animate(obj, target, callback) {
  // 清除上一个定时器
  clearInterval(obj.timer);
  // 以对象的属性方式添加定时器
  obj.timer = setInterval(function() {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      //   动画结束后，判断有无回调函数
      callback && callback();
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
