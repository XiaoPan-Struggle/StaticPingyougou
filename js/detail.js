window.addEventListener("load", function() {
  var preview_img = this.document.querySelector(".preview_img");
  var mask = this.document.querySelector(".mask");
  var big = this.document.querySelector(".big");
  var bigImg = this.document.querySelector(".bigImg");
  preview_img.addEventListener("mouseover", function() {
    mask.style.display = "block";
    big.style.display = "block";
  });
  preview_img.addEventListener("mouseout", function() {
    mask.style.display = "none";
    big.style.display = "none";
  });
  preview_img.addEventListener("mousemove", function(e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var maskMax = this.offsetWidth - mask.offsetWidth;
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    // console.log(maskX);
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";
    var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
    var bigX = (maskX * bigImgMax) / maskMax;
    bigImg.style.left = -bigX + "px";
    var bigY = (maskY * bigImgMax) / maskMax;
    bigImg.style.top = -bigY + "px";
  });
});
