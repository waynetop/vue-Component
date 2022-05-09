
(function (doc, win) {
    function client() {
        if (window.innerWidth != undefined) {
            return {
                "width": window.innerWidth,
                "height": window.innerHeight
            }
        }
        else if (document.compatMode === "CSS1Compat") {
            return {
                "width": document.documentElement.clientWidth,
                "height": document.documentElement.clientHeight
            }
        }
        else {
            return {
                "width": document.body.clientWidth,
                "height": document.body.clientHeight
            }
        }
    };
    var width = client().width;
    width > 640 ? width = 640 : "";
    document.documentElement.style.fontSize = 100 * (width / 750) + "px";
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            clientWidth > 640 ? clientWidth = 640 : "";
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';

        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


