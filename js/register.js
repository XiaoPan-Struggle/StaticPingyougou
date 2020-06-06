window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regmsg = /^\d{6}$/;
    var regpsw = /^[a-zA-Z]\w{5,17}$/;
    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var psw = document.querySelector('#psw');
    var psw2 = document.querySelector('#psw2');
    regexp(tel, regtel);
    regexp(msg, regmsg);
    regexp(psw, regpsw);
    psw2.onblur = function () {
        if (psw.value == this.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不一致';
        }
    }
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(ele.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请从新输入';
            }
        }
    }
}