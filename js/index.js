//轮播图
window.addEventListener("load", function () {
  var focus = this.document.querySelector(".focus");
  var prev = this.document.querySelector(".prev");
  var next = this.document.querySelector(".next");
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector(".circle");
  var focusWidth = focus.offsetWidth;
  // 鼠标移动上去，显示左右按钮，离开隐藏
  focus.addEventListener("mouseover", function() {
    prev.style.display = "inline-block";
    next.style.display = "inline-block";
    clearInterval(timer);
    timer = null;
  });
  focus.addEventListener("mouseout", function() {
    prev.style.display = "none";
    next.style.display = "none";
    timer = setInterval(nextFn, 1500);
  });
  // 动态生生小圆圈
  for (var i = 0; i < ul.children.length; i++) {
    var li = this.document.createElement("li");
    li.setAttribute("data-index", i);
    ol.appendChild(li);
    // 小圆圈点击，ul做动画，且给点击的圆圈加上current，其他取消
    li.addEventListener("click", function() {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = "";
      }
      this.className = "current";
      var index = this.getAttribute("data-index");
      num = current = index;
      animate(ul, -index * focusWidth);
    });
  }
  // 给第一俄国圆圈加上current
  ol.children[0].className = "current";
  // 复制第一张图片给最后一张
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  // 当为最后一张图片时，不做动画变为第一张
  var num = 0;
  var current = 0;
  // 节流阀
  var flag = true;
  // 下一张
  next.addEventListener("click", nextFn);
  function nextFn() {
    if (flag) {
      flag = false; //关闭节流阀
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function() {
        flag = true; //打开节流阀
      });
      current++;
      current = current == ol.children.length ? 0 : current;
      circle();
    }
  }

  // 上一张
  prev.addEventListener("click", function() {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + "px";
      }
      num--;
      animate(ul, -num * focusWidth, function() {
        flag = true;
      });
    }
    current--;
    current = current < 0 ? ol.children.length - 1 : current;
    circle();
  });

  // 小圆圈类名排他
  function circle() {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = "";
    }
    ol.children[current].className = "current";
  }
  var timer = this.setInterval(nextFn, 1500);
});
// end