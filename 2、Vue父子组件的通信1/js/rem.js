
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',//屏幕旋转和窗口调整事件
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            //判断是否在安卓和ios运行
            var u = navigator.userAgent;
            if (!(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1)) {
                if (!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    docEl.style.fontSize = 40 + 'px';
                }
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);






