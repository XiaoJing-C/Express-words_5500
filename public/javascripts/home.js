function show() {
    //创建内置Date对象
    var date = new Date();
    //获取当前小时分钟和秒
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    //选择id为time的标签
    var element = document.getElementById("time");
    element.innerHTML = hour+" : "+minute+" : "+second;
}
    show();
    //每间隔1000毫秒执行一次程序，保证时间动态显示
    setInterval("show()",1000);
