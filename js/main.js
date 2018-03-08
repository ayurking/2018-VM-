(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        f = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var b, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
            ], e = 0, d = g.length, c = {}; e < d; e++)
                if ((b = g[e]) && b[1] in a) {
                    for (e = 0; e < b.length; e++) c[g[0][e]] =
                        b[e];
                    return c
                }
            return !1
        }(),
        d = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        k = {
            request: function(d) {
                var g = c.requestFullscreen;
                d = d || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[g]();
                else d[g](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[c.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(b, g) {
                var e = d[b];
                e && a.addEventListener(e, g, !1)
            },
            off: function(b,
                g) {
                var e = d[b];
                e && a.removeEventListener(e, g, !1)
            },
            raw: c
        };
    c ? (Object.defineProperties(k, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
    }), f ? module.exports = k : window.screenfull = k) : f ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
    var f = a.toLowerCase(),
        b = window.document,
        c = b.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var d = b.createElement("body");
        d.id = "vpw-test-b";
        d.style.cssText = "overflow:scroll";
        var k = b.createElement("div");
        k.id = "vpw-test-d";
        k.style.cssText = "position:absolute;top:-1000px";
        k.innerHTML = "<style>@media(" + f + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + f + ":7px!important}}</style>";
        d.appendChild(k);
        c.insertBefore(d, b.head);
        a = 7 == k["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(d)
    } else a = window["inner" + a];
    return a
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var f = getSize("Width");
        _checkOrientation(f, a);
        var b = Math.min(a / CANVAS_HEIGHT, f / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var d = a - b;
            b += d;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * d
        } else c < f && (d = f - c, c += d, b += CANVAS_HEIGHT / CANVAS_WIDTH * d);
        d = a / 2 - b / 2;
        var k = f / 2 - c / 2,
            h = CANVAS_WIDTH / c;
        if (k * h < -EDGEBOARD_X || d * h < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), f / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, d = (a - b) / 2, k = (f - c) / 2, h = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * k * h;
        s_iOffsetY = -1 * d * h;
        0 <= d && (s_iOffsetY = 0);
        0 <= k && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oTeamChoose && s_oTeamChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oCongratulations && s_oCongratulations.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ?
            (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > d ? $("#canvas").css("top", d + "px") :
            $("#canvas").css("top", "0px");
        $("#canvas").css("left", k + "px");
        fullscreenHandler()
    }
}

function createBitmap(a, f, b) {
    var c = new createjs.Bitmap(a),
        d = new createjs.Shape;
    f && b ? d.graphics.beginFill("#fff").drawRect(-f / 2, -b / 2, f, b) : d.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = d;
    return c
}

function createSprite(a, f, b, c, d, k) {
    a = null !== f ? new createjs.Sprite(a, f) : new createjs.Sprite(a);
    f = new createjs.Shape;
    f.graphics.beginFill("#000000").drawRect(-b, -c, d, k);
    a.hitArea = f;
    return a
}

function _checkOrientation(a, f) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > f ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function randomFloatBetween(a, f, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (f - a), f).toFixed(b))
}

function shuffle(a) {
    for (var f = a.length, b, c; 0 !== f;) c = Math.floor(Math.random() * f), --f, b = a[f], a[f] = a[c], a[c] = b;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var f = Math.floor(a / 60);
    a = parseFloat(a - 60 * f).toFixed(1);
    var b = "";
    b = 10 > f ? b + ("0" + f + ":") : b + (f + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, f) {
    var b = getBounds(a, .9);
    var c = getBounds(f, .98);
    return calculateIntersection(b, c)
}

function calculateIntersection(a, f) {
    var b, c, d, k;
    var h = a.x + (b = a.width / 2);
    var g = a.y + (c = a.height / 2);
    var e = f.x + (d = f.width / 2);
    var n = f.y + (k = f.height / 2);
    h = Math.abs(h - e) - (b + d);
    g = Math.abs(g - n) - (c + k);
    return 0 > h && 0 > g ? (h = Math.min(Math.min(a.width, f.width), -h), g = Math.min(Math.min(a.height, f.height), -g), {
        x: Math.max(a.x, f.x),
        y: Math.max(a.y, f.y),
        width: h,
        height: g,
        rect1: a,
        rect2: f
    }) : null
}

function getBounds(a, f) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
            d = c.length,
            k;
        for (k = 0; k < d; k++) {
            var h = getBounds(c[k], 1);
            h.x < b.x && (b.x = h.x);
            h.y < b.y && (b.y = h.y);
            h.x + h.width > b.x2 && (b.x2 = h.x + h.width);
            h.y + h.height > b.y2 && (b.y2 = h.y + h.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            d =
                a.sourceRect || a.image;
            k = d.width * f;
            var g = d.height * f
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                d = a.spriteSheet.getFrame(a.currentFrame);
                k = d.rect.width;
                g = d.rect.height;
                c = d.regX;
                var e = d.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        c = c || 0;
        k = k || 0;
        e = e || 0;
        g = g || 0;
        b.regX = c;
        b.regY = e;
        d = a.localToGlobal(0 - c, 0 - e);
        h = a.localToGlobal(k - c, g - e);
        k = a.localToGlobal(k - c, 0 - e);
        c = a.localToGlobal(0 - c, g - e);
        b.x =
            Math.min(Math.min(Math.min(d.x, h.x), k.x), c.x);
        b.y = Math.min(Math.min(Math.min(d.y, h.y), k.y), c.y);
        b.width = Math.max(Math.max(Math.max(d.x, h.x), k.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(d.y, h.y), k.y), c.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var f = document.createEvent("MouseEvents");
            f.initEvent("click", !0, !0);
            a.dispatchEvent(f)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[f] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var f = "hidden";
    f in document ? document.addEventListener("visibilitychange", a) : (f = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (f = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (f = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function playSound(a, f, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(f), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(f)
}

function setMute(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(f)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var f = window.location.search.substring(1).split("&"), b = 0; b < f.length; b++) {
        var c = f[b].split("=");
        if (c[0] == a) return c[1]
    }
}

function distance(a, f) {
    var b = a.x - f.x,
        c = a.y - f.y;
    return Math.sqrt(b * b + c * c)
}

function distanceWithoutSQRT(a, f) {
    var b = a.x - f.x,
        c = a.y - f.y;
    return b * b + c * c
}

function randomRange(a, f) {
    return Math.floor(Math.random() * (f - a)) + a
}

function centerBetweenPointsV2(a, f) {
    var b = new CVector2;
    b.set(.5 * (a.getX() + f.getX()), .5 * (a.getY() + f.getY()));
    return b
}

function collideEdgeWithCircle(a, f, b, c) {
    a = closestPointOnLine(a.getPointA(), a.getPointB(), f);
    f = distanceV2(f, a);
    return b < f ? !1 : !0
}

function closestPointOnLine(a, f, b) {
    var c = new CVector2;
    c.setV(b);
    c.subtract(a);
    b = new CVector2;
    b.setV(f);
    b.subtract(a);
    b.normalize();
    c = dotProductV2(b, c);
    if (0 >= c) return a;
    if (c >= distanceV2(a, f)) return f;
    b.scalarProduct(c);
    b.addV(a);
    return b
}

function dotProductV2(a, f) {
    return a.getX() * f.getX() + a.getY() * f.getY()
}

function distanceV2(a, f) {
    return Math.sqrt((f.getX() - a.getX()) * (f.getX() - a.getX()) + (f.getY() - a.getY()) * (f.getY() - a.getY()))
}

function reflectVectorV2(a, f) {
    var b = dotProductV2(a, f);
    a.set(a.getX() - 2 * b * f.getX(), a.getY() - 2 * b * f.getY());
    return a
}

function angleBetweenVectors(a, f) {
    var b = Math.acos(dotProductV2(a, f) / (a.length() * f.length()));
    return 1 == isNaN(b) ? 0 : b
}

function distanceV2WithoutSQRT(a, f) {
    return (f.getX() - a.getX()) * (f.getX() - a.getX()) + (f.getY() - a.getY()) * (f.getY() - a.getY())
}

function classifySphere(a, f, b, c) {
    a = f.getX() * a.getX() + f.getY() * a.getY() + planeDistance(f, b);
    return Math.abs(a) < c ? 0 <= a ? "INTERSECT FRONT" : "INTERSECT BEHIND" : a >= c ? "FRONT" : "BEHIND"
}

function planeDistance(a, f) {
    return -(a.getX() * f.getX() + a.getY() * f.getY())
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
    null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut()
});

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var f = a.split("."),
        b = f.length;
    2 < b && (a = f[b - 2] + "." + f[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            f = !1;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    f = !0;
                    break
                }
        } catch (b) {
            f = !0
        }
        return {
            topFrame: a,
            err: f
        }
    },
    getBestPageUrl = function(a) {
        var f = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (d) {
                var c = window.location.ancestorOrigins;
                b = c[c.length - 1]
            }
        } catch (d) {
            b = f.document.referrer
        } else b = f.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function seekAndDestroy() {
    for (var a = extractRootDomain(PAGE_URL), f = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], b = 0; b < f.length; b++)
        if (f[b] === a) return !0;
    return !1
}

function CSpriteLibrary() {
    var a, f, b, c, d, k;
    this.init = function(h, g, e) {
        b = f = 0;
        c = h;
        d = g;
        k = e;
        a = {}
    };
    this.addSprite = function(b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, f++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        d.call(k)
    };
    this._onSpriteLoaded = function() {
        c.call(k);
        ++b == f && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return f
    }
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 640,
    CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
    CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
    EDGEBOARD_X = 275,
    EDGEBOARD_Y = 50,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "bd_cartoon_shoutregular",
    TEXT_COLOR = "#fcff00",
    FPS_TIME = 1E3 / 30,
    FPS_TIME_SECONDS = 1 / 30,
    TOT_TEAM = 32,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    LEFT_SCROLL_WORLD = 0,
    RIGHT_SCROLL_WORLD = 1,
    TEAM_ALGERIA = 0,
    TEAM_ARGENTINA = 1,
    TEAM_AUSTRALIA =
    2,
    TEAM_BRASIL = 3,
    TEAM_CAMEROON = 4,
    TEAM_CHILE = 5,
    TEAM_CROATIA = 6,
    TEAM_DENMARK = 7,
    TEAM_ENGLAND = 8,
    TEAM_FRANCE = 9,
    TEAM_GERMANY = 10,
    TEAM_GHANA = 11,
    TEAM_GREECE = 12,
    TEAM_HOUNDURAS = 13,
    TEAM_ITALY = 14,
    TEAM_IVORY_COAST = 15,
    TEAM_JAPAN = 16,
    TEAM_MEXICO = 17,
    TEAM_NETHERLANDS = 18,
    TEAM_NEWZELAND = 19,
    TEAM_NIGERIA = 20,
    TEAM_PARAGUAY = 21,
    TEAM_PORTUGAL = 22,
    TEAM_RUSSIA = 23,
    TEAM_SERBIA = 24,
    TEAM_SLOVENIA = 25,
    TEAM_SOUTH_AFRICA = 26,
    TEAM_SOUTH_KOREA = 27,
    TEAM_SPAIN = 28,
    TEAM_SWITZERLAND = 29,
    TEAM_URUGUAY = 30,
    TEAM_USA = 31,
    TOT_MATCH = 7,
    KEEPERS = [32, 33, 34],
    PLAYERS_USER =
    0,
    PLAYERS_OPPONENT = 1,
    BALL = 2,
    LOGIC_COLLISION = 3,
    TWEEN_END_MACTH_Y = .5 * CANVAS_HEIGHT,
    OFFSET_LIMIT_LEFT_SCROLL = -125,
    OFFSET_LIMIT_RIGHT_SCROLL = 125,
    SMOOTH_SCROLL_OFFSET = .1,
    PLAYERS_ON_FIELD = 8,
    LEFT_SIDE = 3,
    RIGHT_SIDE = 4,
    LINE_COLOR = "#0000ff",
    LINE_COLOR_GOALS = "#ff00ff",
    LINE_COLOR_EDGE_GOALS = "#ffff00",
    SHOW_EDGE_COLLISION = !1,
    SHOW_COLLISION = !1,
    LEVEL_DIAGRAM, DANGLE_DEGREE = 7,
    MIN_DIST_COLLISION_DETECT = 1E3,
    HALF_PI = Math.PI / 2,
    K_IMPACT_BALL = .95,
    TIME_TRY_TO_SHOT_BALL_OPPONENT = .7,
    START_POS_FLAG = {
        x: 337,
        y: 208
    },
    FLAG_ADDED_POS = {
        x: 61,
        y: 69
    },
    FLAG_LIMIT_POS_X = 750,
    OFFSET_ANGLE_ARROW = 180,
    Y_POS_ARROW_SELECTED = 10,
    OBJECT, Y_POS_ARROW_SELECTED_OFFSET = -100,
    FORCE_MULTIPLIER = .01,
    PLAYERS_FRICTION = .96,
    HIT_PLAYER_MIN_FORCE = .07,
    HIT_PLAYER_MAX_FORCE = 30,
    PLAYER_REGY_OFFSET = -11,
    MIN_PLAYER_FORCE_VEL = .02,
    STEP_POS_X_TURN_BALL = 33,
    FIRST_POS_X_TURN_BALL = 80,
    BALL_ROTATION_MULTIPLIER = 1,
    PLAYERS_RADIUS = 20,
    PLAYERS_RADIUS_HALF = 10,
    PLAYERS_KEEPER_RADIUS = 14,
    PLAYERS_KEEPER_RADIUS_HALF = 7,
    BALL_FRICTION = .97,
    SUPPORTERS_POS = {
        x: 0,
        y: 120
    },
    START_TIME_FLAG_TIME = 200,
    BALL_POSITION = {
        x: .5 * CANVAS_WIDTH,
        y: .5 * CANVAS_HEIGHT
    },
    USER_PLAYERS = [{
        x: 514,
        y: 319,
        goal_keeper: !1
    }, {
        x: 628,
        y: 234,
        goal_keeper: !1
    }, {
        x: 628,
        y: 431,
        goal_keeper: !1
    }, {
        x: 400,
        y: 201,
        goal_keeper: !1
    }, {
        x: 378,
        y: 489,
        goal_keeper: !1
    }, {
        x: 215,
        y: 295,
        goal_keeper: !1
    }, {
        x: 190,
        y: 378,
        goal_keeper: !1
    }, {
        x: 150,
        y: 335,
        goal_keeper: !0
    }],
    OPPONENT_PLAYERS = [{
        x: 835,
        y: 319,
        goal_keeper: !1
    }, {
        x: 729,
        y: 234,
        goal_keeper: !1
    }, {
        x: 729,
        y: 431,
        goal_keeper: !1
    }, {
        x: 943,
        y: 201,
        goal_keeper: !1
    }, {
        x: 966,
        y: 489,
        goal_keeper: !1
    }, {
        x: 1145,
        y: 295,
        goal_keeper: !1
    }, {
        x: 1170,
        y: 378,
        goal_keeper: !1
    }, {
        x: 1208,
        y: 335,
        goal_keeper: !0
    }],
    POS_GOAL_OPPONENT_FRONT = {
        x: 1246,
        y: 191
    },
    POS_GOAL_PLAYER_FRONT = {
        x: 115,
        y: 191
    },
    POS_GOAL_OPPONENT_BOTTOM = {
        x: 1254,
        y: 191
    },
    POS_GOAL_PLAYER_BOTTOM = {
        x: 107,
        y: 191
    },
    FIELD_DIAGRAM_BALL = [
        [{
            x: 171,
            y: 173
        }, {
            x: 1189,
            y: 173
        }],
        [{
            x: 1189,
            y: 173
        }, {
            x: 1220,
            y: 284
        }],
        [{
            x: 1220,
            y: 284
        }, {
            x: 1285,
            y: 283
        }],
        [{
            x: 1285,
            y: 283
        }, {
            x: 1320,
            y: 386
        }],
        [{
            x: 1320,
            y: 386
        }, {
            x: 1251,
            y: 387
        }],
        [{
            x: 1251,
            y: 387
        }, {
            x: 1293,
            y: 526
        }],
        [{
            x: 1293,
            y: 526
        }, {
            x: 63,
            y: 526
        }],
        [{
            x: 63,
            y: 526
        }, {
            x: 107,
            y: 388
        }],
        [{
            x: 107,
            y: 388
        }, {
            x: 41,
            y: 386
        }],
        [{
            x: 41,
            y: 386
        }, {
            x: 71,
            y: 283
        }],
        [{
            x: 71,
            y: 283
        }, {
            x: 138,
            y: 284
        }],
        [{
            x: 138,
            y: 284
        }, {
            x: 171,
            y: 173
        }]
    ],
    FIELD_DIAGRAM_PLAYERS = [
        [{
            x: 171,
            y: 173
        }, {
            x: 1189,
            y: 173
        }],
        [{
            x: 1189,
            y: 173
        }, {
            x: 1293,
            y: 526
        }],
        [{
            x: 1293,
            y: 526
        }, {
            x: 63,
            y: 526
        }],
        [{
            x: 63,
            y: 526
        }, {
            x: 171,
            y: 173
        }]
    ],
    EDGE_FOR_KEEPERS = [
        [{
            x: 193,
            y: 284
        }, {
            x: 165,
            y: 387
        }],
        [{
            x: 165,
            y: 387
        }, {
            x: 39,
            y: 383
        }],
        [{
            x: 39,
            y: 383
        }, {
            x: 72,
            y: 280
        }],
        [{
            x: 72,
            y: 280
        }, {
            x: 193,
            y: 284
        }],
        [{
            x: 1165,
            y: 284
        }, {
            x: 1284,
            y: 281
        }],
        [{
            x: 1284,
            y: 281
        }, {
            x: 1318,
            y: 387
        }],
        [{
            x: 1318,
            y: 387
        }, {
            x: 1194,
            y: 387
        }],
        [{
            x: 1194,
            y: 387
        }, {
            x: 1165,
            y: 284
        }]
    ],
    GOAL_USER = [{
        x: 137,
        y: 284
    }, {
        x: 105,
        y: 387
    }],
    GOAL_OPPONENT = [{
        x: 1221,
        y: 284
    }, {
        x: 1252,
        y: 387
    }],
    OTHER_COLLISION = [{
        x: 107,
        y: 387,
        radius: 5
    }, {
        x: 138,
        y: 284,
        radius: 5
    }, {
        x: 1220,
        y: 284,
        radius: 5
    }, {
        x: 1251,
        y: 387,
        radius: 5
    }],
    TIME_RESET_BALL, REGULAR_MATCH_TIME, EXTENDED_MATCH_TIME, OPPONENT_SPEEDS, CHARACTER_SPEED, OPPONENT_DISTANCE_PROTECTION, OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT, OPPONENT_DISTANCE_PROTECTION_AGG, OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT_AGG, REACT_OPP_FOR_HEEL_SHOOT, BALL_VELOCITY_X_REACTION, BALL_VELOCITY_X_REACTION_ATTACK, BALL_AND_CHARACTER_DISTANCE_PROTECTION,
    TIME_REACTION_FROM_SAVE_TO_GO, TIME_OPP_BECOME_AGGRESSIVE, TIME_AFTER_REACTION, TIME_INTERVAL_SHOOT, TIME_IN_PROTECT_STATE, SCORE_PLAYER_GOAL, SCORE_OPPONENT_GOAL, SCORE_WIN, SCORE_TIE, NUM_LEVEL_FOR_ADS, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_TEAM = "Algeria;Argentina;Australia;Brasil;Cameroon;Cile;South Corea;Ivory Coast;Croatia;Denmark;France;Germany;Ghana;Japan;Greece;Honduras;England;Italy;Mexico;Nigeria;New Zealand;Netherlands;Paraguay;Portugal;Russia;Serbia;Slovenia;Spain;South Africa;Switzerland;Uruguay;USA".split(";");
TEXT_TEAM_CODE = "ALG ARG AUS BRA CMR CHI KOR CIV CRO DEN FRA GER GHA JPN GRE HON ENG ITA MEX NIG NZL NED PAR POR RUS SRB SVN ESP RSA SUI URU USA".split(" ");
TEXT_CONTROLS = "CONTROLS";
TEXT_TIME = "TIME";
TEXT_TIME_EXT = "EXT TIME";
TEXT_VS = "VS";
TEXT_FINISH = "FINAL WHISTLE";
TEXT_SELECT_YOUR_TEAM = "SELECT YOUR TEAM";
TEXT_CREDITS_DEVELOPED = "Developed by";
TEXT_WIN = "YOU WON";
TEXT_LOSE = "YOU LOSE";
TEXT_SCORES = "SCORES";
TEXT_TIME_EXTENDED = "TIME EXTENDED";
TEXT_SCORE_GOAL_PLAYER = "SCORE PLAYER GOAL";
TEXT_SCORE_GOAL_OPPONENT = "SCORE OPPONENT GOAL";
TEXT_MACTH_SCORE = "SCORE MATCH";
TEXT_TOTAL_SCORE = "TOTAL SCORE";
TEXT_CONGRATULATIONS = "CONGRATULATIONS YOU WON ALL MATCHES!";
TEXT_SCORE_PLAYER_GOAL = "Score player goal";
TEXT_SCORE_OPPONENT_GOAL = "Score opponent goal";
TEXT_SCORE_DRAW_MATCH = "Score match draw";
TEXT_SCOR_WON_MATCH = "Score match won";
TEXT_MATCH = "MATCH";
TEXT_KICK_OFF = "KICK OFF";
TEXT_PAUSE = "PAUSE";
TEXT_ARE_SURE = "ARE SURE?";
TEXT_CPU_TURN = "CPU Turn";
TEXT_PLAYER_TURN = "PLAYER Turn";
TEXT_FOUL = "FOUL!!";
TEXT_PT = "PT";
TEXT_LAUNCH_DELAY_PENALTY = "LAUNCH DELAY PENALTY CPU TURN";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var a, f, b, c, d, k, h;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        h = new createjs.Container;
        s_oStage.addChild(h)
    };
    this.unload = function() {
        h.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(k).to({
                alpha: 1
            }, 500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        h.addChild(g);
        g = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(g);
        c.x = CANVAS_WIDTH / 2 - g.width / 2;
        c.y = CANVAS_HEIGHT - 150;
        h.addChild(c);
        a = g.width;
        f = g.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, 1, f);
        h.addChild(d);
        c.mask =
            d;
        b = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 150;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        h.addChild(b);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = 0;
        h.addChild(k)
    };
    this.refreshLoader = function(g) {
        b.text = g + "%";
        d.graphics.clear();
        g = Math.floor(g * a / 100);
        d.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, g, f)
    };
    this._init()
}

function CMain(a) {
    var f, b = 0,
        c = 0,
        d = STATE_LOADING,
        k, h;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = !1;
        a.opacity = .5;
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        // seekAndDestroy() ? k = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html";
        k = new CPreloader
        f = !0
    };
    this.soundLoaded = function() {
        b++;
        k.refreshLoader(Math.floor(b / c * 100));
        b === c && this._allResourcesLoaded()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "crowd",
            loop: !1,
            volume: 1,
            ingamename: "crowd"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "goal",
            loop: !1,
            volume: 1,
            ingamename: "goal"
        });
        a.push({
            path: "./sounds/",
            filename: "kick",
            loop: !1,
            volume: 1,
            ingamename: "kick"
        });
        a.push({
            path: "./sounds/",
            filename: "kick_off",
            loop: !1,
            volume: 1,
            ingamename: "kick_off"
        });
        a.push({
            path: "./sounds/",
            filename: "player_collision",
            loop: !1,
            volume: 1,
            ingamename: "player_collision"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_scroll", "./sprites/but_scroll.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_not", "./sprites/but_not.png");
        s_oSpriteLibrary.addSprite("but_continue_small", "./sprites/but_continue_small.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game",
            "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("arrow_frame",
            "./sprites/arrow_frame.png");
        s_oSpriteLibrary.addSprite("goal_top", "./sprites/goal_top.png");
        s_oSpriteLibrary.addSprite("goal_bottom", "./sprites/goal_bottom.png");
        s_oSpriteLibrary.addSprite("gui_box", "./sprites/gui_box.png");
        s_oSpriteLibrary.addSprite("goal_text", "./sprites/goal_text.png");
        s_oSpriteLibrary.addSprite("team_selection", "./sprites/team_selection.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("player_selected", "./sprites/player_selected.png");
        s_oSpriteLibrary.addSprite("player_shadow", "./sprites/player_shadow.png");
        s_oSpriteLibrary.addSprite("flags", "./sprites/flags.png");
        s_oSpriteLibrary.addSprite("flags_small", "./sprites/flags_small.png");
        s_oSpriteLibrary.addSprite("players", "./sprites/players.png");
        s_oSpriteLibrary.addSprite("turn_ball", "./sprites/turn_ball.png");
        s_oSpriteLibrary.addSprite("player_selected", "./sprites/player_selected.png");
        s_oSpriteLibrary.addSprite("help_mouse", "./sprites/help_mouse.png");
        s_oSpriteLibrary.addSprite("help_touch",
            "./sprites/help_touch.png");
        s_oSpriteLibrary.addSprite("arrow_fill", "./sprites/arrow_fill.png");
        s_oSpriteLibrary.addSprite("trophy", "./sprites/trophy.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var a = 0; a < TOT_TEAM; a++) s_oSpriteLibrary.addSprite("turn_" + a, "./sprites/turn_" + a + ".png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        k.refreshLoader(Math.floor(b / c * 100));
        b === c && this._allResourcesLoaded()
    };
    this._onAllImagesLoaded =
        function() {};
    this._allResourcesLoaded = function() {
        k.unload();
        isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
        s_oMain.gotoMenu()
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        f = !0
    };
    this.gotoMenu = function() {
        new CMenu;
        d = STATE_MENU
    };
    this.gotoTeamChoose = function() {
        new CTeamChoose;
        d = STATE_MENU
    };
    this.gotoGame = function(a) {
        h = new CGame(g, a);
        d = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        d = STATE_HELP
    };
    this.gotoCongratulations = function(a,
        b) {
        new CCongratulations(a, b);
        d = STATE_MENU
    };
    this.stopUpdate = function() {
        f = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        f = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== f) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime +=
                s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            d === STATE_GAME && h.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var g = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oPhysicsController, s_oAdsLevel = 1,
    s_oDrawLayer, s_oStage, s_oScrollStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_bFullscreen = !1,
    s_aSounds;

function CTextButton(a, f, b, c, d, k, h, g) {
    var e, n, l;
    this._init = function(a, b, d, g, c, h, f) {
        e = [];
        n = [];
        var k = createBitmap(d),
            u = Math.ceil(f / 20),
            q = new createjs.Text(g, "bold " + f + "px " + c, "#000000");
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        var t = q.getBounds();
        q.x = d.width / 2 + u;
        q.y = Math.floor(d.height / 2) + t.height / 3 + u;
        g = new createjs.Text(g, "bold " + f + "px " + c, h);
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        t = g.getBounds();
        g.x = d.width / 2;
        g.y = Math.floor(d.height / 2) + t.height / 3;
        l = new createjs.Container;
        l.x = a;
        l.y =
            b;
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        l.addChild(k, q, g);
        s_bMobile || (l.cursor = "pointer");
        p.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown");
        l.off("pressup");
        p.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this._initListener = function() {
        oParent = this;
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        e[a] = b;
        n[a] = d
    };
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click", 1, !1);
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(n[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY = .9;
        e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.getButtonImage = function() {
        return l
    };
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    var p = g;
    this._init(a, f, b, c, d, k, h);
    return this
}

function CToggle(a, f, b, c, d) {
    var k, h, g, e;
    this._init = function(a, b, d, c) {
        h = [];
        g = [];
        var f = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        k = c;
        e = createSprite(f, "state_" + k, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        e.x = a;
        e.y = b;
        e.stop();
        s_bMobile || (e.cursor = "pointer");
        n.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup", this.buttonRelease);
        n.removeChild(e)
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        h[a] = b;
        g[a] = d
    };
    this.setCursorType = function(a) {
        e.cursor = a
    };
    this.setActive = function(a) {
        k = a;
        e.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        playSound("click", 1, !1);
        k = !k;
        e.gotoAndStop("state_" + k);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP], k)
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    var n = d;
    this._init(a, f, b, c)
}

function CGfxButton(a, f, b, c) {
    var d, k, h, g, e, n, l = !1;
    this._init = function(a, b, c) {
        d = [];
        k = [];
        g = [];
        h = createBitmap(c);
        h.x = a;
        h.y = b;
        n = e = 1;
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        s_bMobile || (h.cursor = "pointer");
        p.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        p.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this.setCursorType = function(a) {
        h.cursor = a
    };
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup",
            this.buttonRelease)
    };
    this.addEventListener = function(a, b, g) {
        d[a] = b;
        k[a] = g
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        d[a] = b;
        k[a] = c;
        g[a] = e
    };
    this.buttonRelease = function() {
        l || (h.scaleX = 0 < e ? 1 : -1, h.scaleY = 1, playSound("click", 1, !1), d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(k[ON_MOUSE_UP], g[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        l || (h.scaleX = 0 < e ? .9 : -.9, h.scaleY = .9, d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], g[ON_MOUSE_DOWN]))
    };
    this.rotation = function(a) {
        h.rotation = a
    };
    this.getButton = function() {
        return h
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.getButtonImage = function() {
        return h
    };
    this.block = function(a) {
        l = a;
        h.scaleX = e;
        h.scaleY = n
    };
    this.setScaleX = function(a) {
        e = h.scaleX = a
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(h).to({
            scaleX: .9 * e,
            scaleY: .9 * n
        }, 850, createjs.Ease.quadOut).to({
            scaleX: e,
            scaleY: n
        }, 650, createjs.Ease.quadIn).call(function() {
            q.pulseAnimation()
        })
    };
    this.trebleAnimation =
        function() {
            createjs.Tween.get(h).to({
                rotation: 5
            }, 75, createjs.Ease.quadOut).to({
                rotation: -5
            }, 140, createjs.Ease.quadIn).to({
                rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
                q.trebleAnimation()
            })
        };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(h)
    };
    var p = c;
    this._init(a, f, b);
    var q = this;
    return this
}

function CMenu() {
    var a, f, b, c, d, k, h, g, e, n, l, p, q, u, w = null,
        t = null;
    this._init = function() {
        e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(e);
        var v = s_oSpriteLibrary.getSprite("but_play");
        d = CANVAS_WIDTH / 2;
        k = CANVAS_HEIGHT - 90;
        n = new CGfxButton(d, k, v, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        n.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"), h = CANVAS_WIDTH - v.height / 2 - 20, g = v.height / 2 + 20, q = new CToggle(h,
            g, v, s_bAudioActive, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var m = s_oSpriteLibrary.getSprite("but_info");
        b = v.height / 2 + 20;
        c = v.height / 2 + 20;
        l = new CGfxButton(b, c, m, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
        v = window.document;
        m = v.documentElement;
        w = m.requestFullscreen || m.mozRequestFullScreen || m.webkitRequestFullScreen || m.msRequestFullscreen;
        t = v.exitFullscreen || v.mozCancelFullScreen || v.webkitExitFullscreen || v.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (w = !1);
        w && screenfull.enabled && (v = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + v.width / 2 + 10, f = c, u = new CToggle(a, f, v, s_bFullscreen, s_oStage), u.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(p);
        createjs.Tween.get(p).to({
            alpha: 0
        }, 1E3).call(function() {
            p.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(e, m) {
        n.setPosition(d, k - m);
        l.setPosition(b +
            e, c + m);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(h - e, m + g);
        w && screenfull.enabled && u.setPosition(a + s_iOffsetX, f + s_iOffsetY)
    };
    this.unload = function() {
        n.unload();
        n = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q.unload(), q = null;
        w && screenfull.enabled && u.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButInfoRelease = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
        s_oMain.gotoTeamChoose()
    };
    this.resetFullscreenBut = function() {
        w && screenfull.enabled && u.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? t.call(window.document) : w.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a, f) {
    var b = !0,
        c = !1,
        d = !1,
        k = !1,
        h = !1,
        g = !1,
        e = !1,
        n = !1,
        l = !1,
        p = !1,
        q = !1,
        u = !1,
        w = !1,
        t, v, m, x, z, y, F, B, C, r, D, A, G, L, H, E, J, P, S, M, Z, V, W, Q, K, I, X, T, N, O, R, U, Y;
    this._init = function() {
        $(s_oMain).trigger("start_session");
        s_oScrollStage = new createjs.Container;
        s_oStage.addChild(s_oScrollStage);
        x = f;
        b = !1;
        m = v = t = 0;
        B = -1;
        R = 0;
        C = NUM_OF_SHOT;
        U = LAUNCH_PENALITY_SECOND;
        D = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oScrollStage.addChild(D);
        X = [];
        T = [];
        Q = [];
        K = [];
        I = [];
        M = this.createFieldEdges(FIELD_DIAGRAM_PLAYERS);
        Z = this.createFieldEdges(FIELD_DIAGRAM_BALL);
        this._createEdgeGoals();
        playSound("crowd", 1, !0);
        V = this._createEdgeGoalKeeper(EDGE_FOR_KEEPERS);
        W = new CEdge(EDGE_FOR_KEEPERS[4][0].x, EDGE_FOR_KEEPERS[4][0].y, EDGE_FOR_KEEPERS[7][0].x, EDGE_FOR_KEEPERS[7][0].y);
        H = new CArrow(0, 0, s_oScrollStage);
        H.setVisible(!1);
        L = new CGoal(s_oScrollStage);
        N = this._createRandomOpponentTeamOrder();
        var a = this._createPlayers(),
            d = s_oSpriteLibrary.getSprite("ball");
        this._createBall(d, BALL_POSITION.x, BALL_POSITION.y, a, s_oScrollStage);
        I.push(A);
        this._createOtherCollision(I, a);
        J = {
            x: s_oStage.mouseX / s_iScaleFactor - s_oScrollStage.x,
            y: s_oStage.mouseY
        };
        L.createGoalFront();
        z = y = 0;
        a = s_oSpriteLibrary.getSprite("player_selected");
        E = new CArrowPlayerSelected(0, 0, a, s_oScrollStage);
        E.setVisible(!1);
        r = new CInterface(f, N[m]);
        r.refreshResult(z, y);
        O = REGULAR_MATCH_TIME;
        r.refreshTime(TEXT_TIME + ": " + Math.ceil(O))
    };
    this._createPlayers = function() {
        for (var a = s_oSpriteLibrary.getSprite("players"), b = 0, d = 0; d < PLAYERS_ON_FIELD; d++) {
            var g = x,
                c = N[m];
            if (USER_PLAYERS[d].goal_keeper) {
                var e =
                    Math.floor(Math.random() * KEEPERS.length);
                g = KEEPERS[e]
            }
            if (OPPONENT_PLAYERS[d].goal_keeper) {
                for (e = Math.floor(Math.random() * KEEPERS.length); e === g;) e = Math.floor(Math.random() * KEEPERS.length);
                c = KEEPERS[e]
            }
            Q.push(T[d] = this.createPlayer(a, USER_PLAYERS[d].x, USER_PLAYERS[d].y, b, -1, !0, USER_PLAYERS[d].goal_keeper, g, PLAYERS_USER, s_oScrollStage));
            b++;
            Q.push(K[d] = this.createPlayer(a, OPPONENT_PLAYERS[d].x, OPPONENT_PLAYERS[d].y, b, 1, !1, OPPONENT_PLAYERS[d].goal_keeper, c, PLAYERS_OPPONENT, s_oScrollStage));
            b++;
            I.push(T[d]);
            I.push(K[d])
        }
        return b
    };
    this._createOtherCollision = function(a, b) {
        for (var d = 0; d < OTHER_COLLISION.length; d++) b++, a.push(new CInvisibleCollision(OTHER_COLLISION[d].x, OTHER_COLLISION[d].y, b, LOGIC_COLLISION, OTHER_COLLISION[d].radius, s_oScrollStage))
    };
    this._createEdgeGoalKeeper = function(a) {
        for (var b = [], d = 0; d < a.length; d++) b.push(new CEdge(a[d][0].x, a[d][0].y, a[d][1].x, a[d][1].y));
        return b
    };
    this._createEdgeGoals = function() {
        S = new CEdge(GOAL_OPPONENT[0].x, GOAL_OPPONENT[0].y, GOAL_OPPONENT[1].x, GOAL_OPPONENT[1].y);
        P = new CEdge(GOAL_USER[0].x, GOAL_USER[0].y, GOAL_USER[1].x, GOAL_USER[1].y);
        SHOW_EDGE_COLLISION && (this.createGraphicsCollision(GOAL_OPPONENT, !1, LINE_COLOR_GOALS), this.createGraphicsCollision(GOAL_USER, !1, LINE_COLOR_GOALS))
    };
    this._createRandomOpponentTeamOrder = function() {
        for (var a = [], b = 0, d = 0; d < TOT_TEAM; d++) x !== d && (a[b] = d, b++);
        return a = shuffle(a)
    };
    this.createFieldEdges = function(a) {
        for (var b = [], d = 0; d < a.length; d++) b.push(new CEdge(a[d][0].x, a[d][0].y, a[d][1].x, a[d][1].y));
        SHOW_EDGE_COLLISION && this.createGraphicsCollision(a, !0, LINE_COLOR);
        return b
    };
    this.createGraphicsCollision = function(a, b, d) {
        var g = new createjs.Shape;
        g.graphics.beginStroke(d);
        g.graphics.setStrokeStyle(2);
        for (d = 0; d < a.length; d++) b ? g.graphics.lineTo(a[d][0].x, a[d][0].y) : g.graphics.lineTo(a[d].x, a[d].y);
        g.graphics.closePath();
        s_oScrollStage.addChild(g)
    };
    this.unload = function() {
        b = !1;
        r.unload();
        for (var a = 0; a < Q.length; a++) Q[a].unload(), Q[a] = null;
        stopSound("crowd");
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        !1 === s_bMobile && (document.onkeydown =
            null, document.onkeyup = null)
    };
    this.createPlayer = function(a, b, d, g, e, c, h, f, k, l) {
        a = new CPlayer(b, d, a, g, c, h, k, l);
        a.rotate(e);
        a.changeTeam(f);
        return a
    };
    this.createOpponent = function(a, b, d, g) {
        a = s_oSpriteLibrary.getSprite("team_" + a);
        G = new COpponent(b, d, a, OPPONENT_SPEEDS[m], _oPhysicsObject, _oOpponentCollision, g);
        G.setDistanceProtection(OPPONENT_DISTANCE_PROTECTION[m])
    };
    this._createOpponentCollision = function() {
        return _oPhysicsObject.addCollisionShape(OPPONENT_COLLISION)
    };
    this.onPlayerSelect = function(a) {
        a.id ===
            B || n || (h = !0, B = a.id, E.setPosition(a.pos.x, a.pos.y + Y_POS_ARROW_SELECTED_OFFSET), E.setVisible(!0), E.animation(), H.setPosition(a.pos.x, a.pos.y), H.setVisible(!0))
    };
    this.arrowDraw = function() {
        if (h) {
            var a = J.x - H.getX(),
                b = J.y - H.getY();
            a = Math.atan2(b, a);
            a = 180 / Math.PI * a + OFFSET_ANGLE_ARROW;
            H.setAngle(a);
            a = Math.ceil(distance({
                x: H.getX(),
                y: H.getY()
            }, J));
            100 < a && (a = 100);
            this.setForce(-a);
            H.mask(a);
            H.circle(a)
        }
    };
    this.setForce = function(a) {
        Y = a * FORCE_MULTIPLIER
    };
    this.onPressMove = function() {
        h && !c && (J = {
            x: s_oStage.mouseX /
                s_iScaleFactor - s_oScrollStage.x,
            y: s_oStage.mouseY / s_iScaleFactor
        })
    };
    this.onPressUp = function() {
        if (h && null !== Q[B] && !c) {
            var a = new CVector2(Q[B].getX() - J.x, Q[B].getY() - J.y);
            a.scalarProduct(Y);
            var b = a.length();
            b > HIT_PLAYER_MIN_FORCE ? (b > HIT_PLAYER_MAX_FORCE && (a.normalize(), a.scalarProduct(HIT_PLAYER_MAX_FORCE)), a.set(-a.getX(), -a.getY()), s_oGame.addForceToPlayer(Q[B], a), s_oGame.upadtePhysics(!0), n = !0, C--, U = LAUNCH_PENALITY_SECOND, r.refreshTurnNumber(C, !1)) : console.log("TIRO NULLO");
            h = !1;
            J.x = 0;
            R = Y = J.y = 0;
            l = !0;
            E.setVisible(!1);
            E.removeTween();
            H.setVisible(!1)
        }
    };
    this.startSmootFollowBall = function() {
        var a = -A.getX() + CANVAS_WIDTH_HALF;
        a <= -iHalfOffsetX ? s_oScrollStage.x = -iHalfOffsetX : a >= iHalfOffsetX ? s_oScrollStage.x = iHalfOffsetX : createjs.Tween.get(s_oScrollStage).to({
            x: a
        }, 750, createjs.Ease.cubicOut).call(function() {
            l = !0
        })
    };
    this.addForceToPlayer = function(a, b) {
        a.addForce(b)
    };
    this._createBall = function(a, b, d, g, e) {
        A = new CBall(b, d, a, g, e)
    };
    this.getBallSpritePos = function() {
        return {
            x: _oBallSprite.getX(),
            y: _oBallSprite.getY()
        }
    };
    this.getCharacterPos = function() {
        return {
            x: (void 0).getX(),
            y: (void 0).getY()
        }
    };
    this.getPlayerTeam = function() {
        return x
    };
    this.getOpponentTeam = function() {
        return N[m]
    };
    this.playKickSound = function() {
        c || playSound("kick", 1, !1)
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        r.onExitFromHelp()
    };
    this._onExitVsPanel = function() {
        r._onExitVsPanel();
        r.createStartMatchText();
        $(s_oMain).trigger("start_level",
            m)
    };
    this.startMatch = function() {
        b = !0;
        c = !1;
        setVolume("soundtrack", .3);
        playSound("kick_off", 1, !1)
    };
    this.onContinue = function(a) {
        m++;
        this.nextLevel();
        this.resetLevel();
        this.tweenScrollStage(-A.getX() + CANVAS_WIDTH_HALF);
        var b = s_oSpriteLibrary.getSprite("msg_box");
        r.createVsPanel(b, x, N[m], a, m, 750)
    };
    this.nextLevel = function() {
        this.changeOpponenPlayersTeam();
        r.setTeams(x, N[m]);
        r.setTeamsFlagScoreBoard(N[m])
    };
    this.changeOpponenPlayersTeam = function() {
        for (var a = 0; a < K.length - 1; a++) K[a].changeTeam(N[m]);
        for (a = Math.floor(Math.random() *
            KEEPERS.length); a === T[T.length - 1].getTeam();) a = Math.floor(Math.random() * KEEPERS.length);
        K[K.length - 1].changeTeam(KEEPERS[a])
    };
    this.restartLevel = function() {
        this.resetLevel();
        r.refreshScore(t);
        r.createStartMatchText();
        this.tweenScrollStage(-A.getX() + CANVAS_WIDTH_HALF);
        $(s_oMain).trigger("restart_level", m)
    };
    this.resetLevel = function() {
        this.resetResult();
        this.resetAllObjectPos();
        w = p = q = e = u = h = l = n = c = !1;
        B = -1;
        v = 0;
        C = NUM_OF_SHOT;
        E.setVisible(!1);
        E.removeTween();
        H.setVisible(!1);
        this.activeAllTurnBall()
    };
    this.tweenScrollStage =
        function(a) {
            createjs.Tween.get(s_oScrollStage).to({
                x: a
            }, 800, createjs.Ease.cubicOut)
        };
    this.resetResult = function() {
        O = REGULAR_MATCH_TIME;
        r.refreshTime(TEXT_TIME + ": " + Math.ceil(O));
        z = y = 0;
        r.refreshResult(z, y)
    };
    this.matchTime = function(a) {
        0 < O ? (O -= a, r.refreshTime(TEXT_TIME + ": " + Math.ceil(O))) : this.finishTime()
    };
    this.finishTime = function() {
        c = !0;
        var a = !1;
        if (z === y && !1 === w) r.createExtendedTimeText(), w = !0;
        else {
            if (z > y) {
                var b = !0;
                playSound("goal", 1, !1);
                var d = this.calculateNewScore();
                this.storesResult();
                t = d.new_score +=
                    v;
                r.refreshScore(t);
                m === TOT_MATCH - 1 && (a = !0)
            } else b = !1, d = t + v, playSound("game_over", 1, !1);
            $(s_oMain).trigger("end_level", m);
            r.createEndMatchText(z, y, b, d, a)
        }
    };
    this.extendTime = function() {
        this.resetAllObjectPos();
        p = q = e = u = h = l = n = c = !1;
        B = -1;
        C = NUM_OF_SHOT;
        E.setVisible(!1);
        E.removeTween();
        H.setVisible(!1);
        this.activeAllTurnBall();
        this.tweenScrollStage(-A.getX() + CANVAS_WIDTH_HALF);
        O = EXTENDED_MATCH_TIME;
        r.refreshTime(TEXT_TIME_EXT + ": " + Math.ceil(O));
        c = !1;
        playSound("kick_off", 1, !1)
    };
    this.storesResult = function() {
        X[m] = {
            player_team: x,
            opponent_team: N[m],
            result: r.getScoreBoardResult()
        }
    };
    this.unpause = function(a) {
        b = a
    };
    this._onEnd = function() {
        this.unload();
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoCongratulations(X, t)
    };
    this.calculateNewScore = function() {
        var a = {
            score: t,
            player_goal_score: 0,
            opponent_goal_score: 0,
            score_match: 0,
            new_score: 0
        };
        a.player_goal_score = z * SCORE_PLAYER_GOAL;
        a.opponent_goal_score = y * SCORE_OPPONENT_GOAL;
        a.score_match = w ? SCORE_TIE : SCORE_WIN;
        a.new_score = a.score + a.player_goal_score +
            a.opponent_goal_score + a.score_match;
        return a
    };
    this.dirScrollWorld = function(a) {
        n || (k = a.press, F = a.dir, R = a.velocity)
    };
    this.objectsPhysics = function() {
        for (var a, b = !0, d = 0; d < I.length; d++) a = I[d], a.type() !== LOGIC_COLLISION && (a.vCurForce().addV(a.vTmpForce()), a.vTmpForce().set(0, 0), a.vPrevPos().setV(a.vPos()), a.setPosVector(), this.collideCircleWithEdges(a, M), a.vCurForce().scalarProduct(PLAYERS_FRICTION), a.vCurForce().length2() < MIN_PLAYER_FORCE_VEL ? a.vCurForce().set(0, 0) : b = !1, this.sortZIndex(d));
        b && this.allObjectsStop()
    };
    this.sortZIndex = function(a) {
        for (var b = 0; b < I.length; b++) a !== b && this.sortByY(I[a].getObject(), I[b].getObject())
    };
    this.sortByY = function(a, b) {
        null !== a && null !== b && (a.y < b.y ? s_oScrollStage.getChildIndex(a) > s_oScrollStage.getChildIndex(b) && s_oScrollStage.swapChildren(a, b) : a.y > b.y && s_oScrollStage.getChildIndex(b) > s_oScrollStage.getChildIndex(a) && s_oScrollStage.swapChildren(b, a))
    };
    this.allObjectsStop = function() {
        this.upadtePhysics(!1);
        n = !1;
        B = -1;
        q = l = p = !1;
        c || this.checkTurn()
    };
    this.checkTurn = function() {
        u ? 0 === C ?
            (C = NUM_OF_SHOT, this.activeAllTurnBall(), u = !1, r.turnAnim(TEXT_PLAYER_TURN), r.refreshTurnTeam(x)) : this.cpuTurn() : 0 === C && (C = NUM_OF_SHOT, this.activeAllTurnBall(), u = !0, 0 >= U ? r.turnAnim(TEXT_LAUNCH_DELAY_PENALTY) : r.turnAnim(TEXT_CPU_TURN), r.refreshTurnTeam(N[m]), this.cpuTurn())
    };
    this.activeAllTurnBall = function() {
        for (var a = 0; a < NUM_OF_SHOT; a++) r.refreshTurnNumber(a, !0)
    };
    this.goal = function(a) {
        c || (g = !0, a === LEFT_SIDE ? (y++, u = !1, playSound("game_over", 1, !1)) : (z++, u = !0, playSound("goal", 1, !1)), r.refreshResult(z, y),
            r.createGoalText(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF), l = !1, C = NUM_OF_SHOT, this.activeAllTurnBall(), r.refreshTurnTeam(x), createjs.Tween.get(s_oScrollStage).to({
                x: 0
            }, 1E3, createjs.Ease.cubicOut).call(function() {
                u ? (r.turnAnim(TEXT_CPU_TURN), C = NUM_OF_SHOT, s_oGame.activeAllTurnBall(), r.refreshTurnTeam(N[m])) : (r.turnAnim(TEXT_PLAYER_TURN), C = NUM_OF_SHOT, s_oGame.activeAllTurnBall(), r.refreshTurnTeam(x));
                s_oGame.resetAllObjectPos();
                g = !1
            }))
    };
    this.matchTime = function(a) {
        0 < O ? (O -= a, r.refreshTime(TEXT_TIME + ": " +
            Math.ceil(O))) : this.finishTime()
    };
    this.resetAllObjectPos = function() {
        for (var a = 0; a < I.length; a++) I[a].resetPos()
    };
    this.cpuTurn = function() {
        if (!c) {
            var a = new CVector2,
                b = new CVector2,
                d = new CVector2,
                g = new CVector2;
            b.set(GOAL_USER[0].x, GOAL_USER[0].y);
            d.set(GOAL_USER[1].x, GOAL_USER[1].y);
            var e = closestPointOnLine(b, d, T[T.length - 1].vPos()),
                h = distanceV2WithoutSQRT(e, b),
                f = distanceV2WithoutSQRT(e, d);
            b = h > f ? centerBetweenPointsV2(b, e) : centerBetweenPointsV2(d, e);
            a.setV(b);
            a.subtract(A.vPos());
            a.normalize();
            b = PRECISION_CPU_RATE[m].min;
            b = Math.random() * (PRECISION_CPU_RATE[m].max - b) + b;
            g.setV(a);
            g.invert();
            g.scalarProduct(A.getRadius() * b + .5 * PLAYERS_RADIUS_HALF);
            g.addV(A.vPos());
            a.invert();
            this.findPlayerCpU(A.getX(), a, g)
        }
    };
    this.findPlayerCpU = function(a, b, d) {
        var g = [];
        a = !0;
        for (var e = 0, c = HIT_PLAYER_MAX_FORCE; c > HIT_PLAYER_MIN_FORCE;) e += c, c *= PLAYERS_FRICTION;
        e *= e;
        c = new CVector2;
        c.set(A.getX(), A.getY());
        var h = classifySphere(c, W.getNormal(), W.m_pCenter(), A.getRadius());
        if ("FRONT" !== h && "INTERSECT FRONT" !== h && c.getY() > EDGE_FOR_KEEPERS[4][0].y &&
            c.getY() < EDGE_FOR_KEEPERS[7][0].y) this.prepareCpuForLaunch(K[K.length - 1], !1, d, !0);
        else {
            for (c = 0; c < K.length - 1; c++) {
                var f = new CEdge,
                    k, l = h = !1,
                    n = !1;
                f.set(K[c].vPos().getX(), K[c].vPos().getY(), d.getX(), d.getY());
                for (k = 0; k < I.length; k++)
                    if (I[k].getID() !== K[c].getID() && I[k].type() !== BALL && !0 === (l = collideEdgeWithCircle(f, I[k].vPos(), 2 * I[k].getRadius(), null))) {
                        n = !0;
                        break
                    }
                f = distanceV2WithoutSQRT(K[c].vPos(), d);
                e < f && !1 === n && (n = !0);
                k = new CVector2;
                k.setV(K[c].vPos());
                k.subtract(d);
                k.normalize();
                k = dotProductV2(b,
                    k);
                0 > k ? h = !0 : a = !1;
                g.push({
                    iAngle: k,
                    iDist2: f,
                    bLeft: h,
                    bObstacle: l,
                    bInsufficientPower: n,
                    oPlayer: K[c],
                    iScoreDist2: 0,
                    iScoreAngle: k,
                    iTotScore: 0
                })
            }
            b = this.evaluatePlayers(g, a);
            this.prepareCpuForLaunch(b, a, d, !1)
        }
    };
    this.prepareCpuForLaunch = function(a, b, d, g) {
        var c = new CVector2,
            h = CPU_POWER_PLAYER[m];
        C--;
        r.refreshTurnNumber(C, !1);
        a.isGoalKeeper() && (h = .5 * CPU_POWER_PLAYER[m]);
        b ? (a.getY() > A.getY() ? c.set(A.getX(), A.getY() + 2 * A.getRadius() - 5) : c.set(A.getX(), A.getY() - 2 * A.getRadius() + 5), c.subtract(a.vPos()), c.normalize(),
            h = .8 * CPU_POWER_PLAYER[m]) : (g ? c.setV(A.vPos()) : c.setV(d), c.subtract(a.vPos()), c.normalize());
        b = new CVector2;
        b.setV(c);
        b.scalarProduct(h * HIT_PLAYER_MAX_FORCE);
        a.addForce(b);
        e = n = l = !0
    };
    this.evaluatePlayers = function(a, b) {
        a = this.sortArrayDecrescending("iDist2", a);
        var d = a[0].oPlayer;
        a[0].iScoreDist2 = 1;
        var c = a[0].iDist2;
        var g = a[a.length - 1].iDist2;
        for (var e = 1; e < a.length - 1; e++) a[e].iScoreDist2 = 1 - (a[e].iDist2 - c) / (g - c);
        a = this.sortArrayDecrescending("iAngle", a);
        g = a[a.length - 1].iAngle;
        a[a.length - 1].iScoreAngle =
            1;
        c = a[0].iAngle;
        a[0].iScoreAngle = 0;
        for (e = 1; e < a.length - 1; e++) a[e].iScoreAngle = (a[e].iAngle - c) / (g - c);
        for (c = 0; c < a.length; c++) a[c].iTotScore = a[c].iScoreDist2 + a[c].iScoreAngle, !1 === a[c].bObstacle && (a[c].iTotScore += 1), !1 === a[c].bInsufficientPower && (a[c].iTotScore += 1);
        a = this.sortArrayDecrescending("iTotScore", a);
        return b ? d : a[a.length - 1].oPlayer
    };
    this.sortArrayDecrescending = function(a, b) {
        for (var d = [], c = 0; c < b.length; c++) d[c] = b[c];
        for (c = 0; c < d.length - 1; c++)
            for (var g = c + 1; g < d.length; g++)
                if (d[c][a] > d[g][a]) {
                    var e =
                        d[c];
                    d[c] = d[g];
                    d[g] = e
                }
        return d
    };
    this.collideCircleWithEdges = function(a, b) {
        var c, e = new CVector2;
        e.setV(a.vCurForce());
        e.normalize();
        var h = a.vCurForce().length(),
            f = Math.floor(h / 2),
            k = !1,
            l = new CVector2;
        l.setV(a.vPrevPos());
        e.normalize();
        e.scalarProduct(2);
        var n;
        for (n = 0; n < f + 1; n++) {
            n === f && (e.normalize(), e.scalarProduct(h - 2 * f));
            l.addV(e);
            if (a.isGoalKeeper())
                for (b = V, c = 0; c < V.length; c++) {
                    if (k = collideEdgeWithCircle(V[c], l, a.getRadius(), null), !0 === k) {
                        l.subtract(e);
                        break
                    }
                } else {
                    a.type() === BALL && (b = Z);
                    for (c = 0; c <
                        b.length; c++)
                        if (k = collideEdgeWithCircle(b[c], l, a.getRadius(), null), !0 === k) {
                            e.scalarProduct(1.3);
                            l.subtract(e);
                            break
                        }
                    if (a.type() === BALL && !g) {
                        if (a.getX() < CANVAS_WIDTH_HALF) {
                            d = collideEdgeWithCircle(P, l, 3, null);
                            var m = LEFT_SIDE
                        } else d = collideEdgeWithCircle(S, l, 3, null), m = RIGHT_SIDE; if (d) {
                            this.goal(m);
                            return
                        }
                    }
                    if (!0 === k) break
                }
            a.vPos().setV(l);
            if (!0 === this.collideObjectWithObjects(a)) return
        }!0 === k ? (c = reflectVectorV2(a.vCurForce(), b[c].getNormal()), a.vPos().setV(l), a.vCurForce().setV(c)) : a.vPos().addV(a.vCurForce());
        a.vPos().setV(l);
        this.collideObjectWithObjects(a)
    };
    this.upadtePhysics = function(a) {
        e = a
    };
    this.collideObjectWithObjects = function(a) {
        for (var b, d = MIN_DIST_COLLISION_DETECT, c, e = [], g = 0; g < I.length; g++) a.getID() !== I[g].getID() && (b = distanceV2WithoutSQRT(a.vPos(), I[g].vPos()), b <= a.getRadiusQuadro() + I[g].getRadiusQuadro() && (e.push({
            oObject: I[g],
            iDist: b
        }), d > b && (d = b, c = e.length - 1)));
        if (0 !== e.length) {
            d = new CVector2;
            b = new CVector2;
            g = new CVector2;
            g.setV(a.vCurForce());
            g.invert();
            g.normalize();
            b.setV(a.vPos());
            b.subtract(e[c].oObject.vPos());
            b.normalize();
            d.setV(b);
            d.scalarProduct(1.5 * a.getRadius());
            d.addV(e[c].oObject.vPos());
            a.vPos().setV(d);
            d = angleBetweenVectors(g, b) / HALF_PI;
            g = new CVector2;
            g.setV(a.vCurForce());
            g.normalize();
            var h = a.vCurForce().length();
            a.vCurForce().setV(reflectVectorV2(g, b));
            h *= K_IMPACT_BALL;
            a.vCurForce().normalize();
            a.vCurForce().scalarProduct(.15 * h);
            this.checkPlayersCollisionSound(a, e[c].oObject);
            this.checkPlayersCollisionAnimationDangle(a, e[c].oObject);
            this.checkPlayerBallCollision(a, e[c].oObject);
            this.checkThereIsAFoul(a,
                e[c].oObject);
            b.invert();
            b.normalize();
            b.scalarProduct(h * (1 - d) + .1 * h);
            e[c].oObject.type() !== LOGIC_COLLISION && e[c].oObject.addForce(b);
            return !0
        }
    };
    this.checkPlayersCollisionSound = function(a, b) {
        (a.type() === PLAYERS_OPPONENT && b.type() === PLAYERS_USER || a.type() === PLAYERS_USER && b.type() === PLAYERS_OPPONENT || a.type() === PLAYERS_USER && b.type() === PLAYERS_USER || a.type() === PLAYERS_OPPONENT && b.type() === PLAYERS_OPPONENT) && playSound("player_collision", 1, !1)
    };
    this.checkThereIsAFoul = function(a, b) {
        p || (a.type() === PLAYERS_OPPONENT &&
            b.type() === PLAYERS_USER || a.type() === PLAYERS_USER && b.type() === PLAYERS_OPPONENT ? this.foul() : p = !0)
    };
    this.checkPlayersCollisionAnimationDangle = function(a, b) {
        a.type() !== PLAYERS_OPPONENT && a.type() !== PLAYERS_USER || a.animDangle();
        b.type() !== PLAYERS_OPPONENT && b.type() !== PLAYERS_USER || b.animDangle()
    };
    this.checkPlayerBallCollision = function(a, b) {
        a.type() === BALL && b.type() === PLAYERS_USER || a.type() === PLAYERS_USER && b.type() === BALL ? (this.addScore(TOUCH_BALL_SCORE), playSound("kick", 1, !1)) : (a.type() === BALL && b.type() ===
            PLAYERS_OPPONENT || a.type() === PLAYERS_OPPONENT && b.type() === BALL) && playSound("kick", 1, !1)
    };
    this.foul = function() {
        if (!c && !q) {
            q = !0;
            playSound("kick_off", 1, !1);
            u ? (u = !1, r.turnAnim(TEXT_FOUL + " " + TEXT_PLAYER_TURN), r.refreshTurnTeam(x)) : (-1 < v + FOUL_SCORE ? this.addScore(FOUL_SCORE) : (v = 0, this.addScore(0)), u = !0, r.turnAnim(TEXT_FOUL + " " + TEXT_CPU_TURN), r.refreshTurnTeam(N[m]));
            C = NUM_OF_SHOT;
            for (var a = 0; a < NUM_OF_SHOT; a++) r.refreshTurnNumber(a, !0)
        }
    };
    this.addScore = function(a) {
        c || (v += a, r.refreshScore(t + v))
    };
    this.followBall =
        function() {
            if (l) {
                var a = -A.getX() + CANVAS_WIDTH_HALF;
                s_oScrollStage.x = a <= -s_iOffsetX ? -s_iOffsetX : a >= s_iOffsetX ? s_iOffsetX : s_oScrollStage.x + .25 * (a - s_oScrollStage.x)
            }
        };
    this.scrollWorld = function() {
        if (s_oScrollStage.x <= -s_iOffsetX && F === RIGHT_SCROLL_WORLD) s_oScrollStage.x = -s_iOffsetX;
        else if (s_oScrollStage.x >= s_iOffsetX && F === LEFT_SCROLL_WORLD) s_oScrollStage.x = s_iOffsetX;
        else {
            if (!k)
                if (F === RIGHT_SCROLL_WORLD) {
                    if (0 <= R) {
                        R = 0;
                        return
                    }
                    R += SMOOTH_SCROLL_OFFSET
                } else {
                    if (0 >= R) {
                        R = 0;
                        return
                    }
                    R -= SMOOTH_SCROLL_OFFSET
                }
            s_oScrollStage.x +=
                R
        }
    };
    this.launchDelayPenality = function(a) {
        c || (0 < U ? U -= a : (C = 0, B = -1, H.setVisible(!1), h = !1, E.setVisible(!1), E.removeTween(), this.checkTurn(), U = LAUNCH_PENALITY_SECOND))
    };
    this.update = function() {
        b && (n || u ? this.followBall() : (this.scrollWorld(), this.arrowDraw(), this.launchDelayPenality(FPS_TIME_SECONDS)), c || this.matchTime(FPS_TIME_SECONDS), e && (this.objectsPhysics(), A.rolls(), this.sortGoalsFront()))
    };
    this.sortGoalsFront = function() {
        var a = L.getGoalPlayerFront();
        A.getY() > CANVAS_WIDTH_HALF && (a = L.getGoalEnemyFront());
        for (var b = 0; b < I.length; b++) this.sortByY(a, I[b].getObject())
    };
    s_oGame = this;
    TIME_RESET_BALL = a.time_reset_ball;
    REGULAR_MATCH_TIME = a.regular_match_time;
    EXTENDED_MATCH_TIME = a.extend_match_time;
    LAUNCH_PENALITY_SECOND = a.launch_penality_second;
    SCORE_PLAYER_GOAL = a.add_score_player_goal;
    SCORE_OPPONENT_GOAL = a.remove_score_opponent_goal;
    SCORE_WIN = a.score_win;
    SCORE_TIE = a.score_tie;
    SCROLL_VELOCITY = a.scroll_velocity;
    TOUCH_BALL_SCORE = a.touch_ball_score;
    FOUL_SCORE = a.foul_score;
    NUM_OF_SHOT = a.num_of_shot;
    PRECISION_CPU_RATE =
        a.precision_cpu_rate;
    CPU_POWER_PLAYER = a.cpu_power_players;
    NUM_LEVEL_FOR_ADS = a.num_levels_for_ads;
    this._init()
}
var s_oGame;

function CInterface(a, f) {
    var b, c, d, k, h, g, e, n, l, p, q, u, w, t, v, m, x, z, y, F, B, C, r, D, A, G, L, H, E = null,
        J = null;
    this._init = function(a, f) {
        this.setTeams(a, f);
        var l = s_oSpriteLibrary.getSprite("gui_box"),
            m = .5 * l.height;
        y = new CScoreBoard(l, .5 * CANVAS_WIDTH, m, G, L);
        F = new CTimeBoard(l, 20, m - 4);
        B = new CTurnBoard(l, 20, CANVAS_HEIGHT - 2 * m - 20);
        C = new CLevelScoreBoard(l, CANVAS_WIDTH - l.width - 20, CANVAS_HEIGHT - 2 * m - 20);
        B.setTurn(a);
        this._createScrollButtons();
        l = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - l.height / 2 - 20;
        k = l.height /
            2 + 20;
        q = new CGfxButton(d, k, l, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        l = s_oSpriteLibrary.getSprite("but_pause");
        b = d - l.height - 20;
        c = k;
        u = new CGfxButton(b, c, l, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onPause, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (l = s_oSpriteLibrary.getSprite("audio_icon"), e = b - l.height - 20, n = k, t = new CToggle(e, n, l, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), l = s_oSpriteLibrary.getSprite("but_fullscreen"), h = e - l.width /
            2 - 10, g = n) : (l = s_oSpriteLibrary.getSprite("but_fullscreen"), h = b - l.height - 20, g = k);
        m = window.document;
        var r = m.documentElement;
        E = r.requestFullscreen || r.mozRequestFullScreen || r.webkitRequestFullScreen || r.msRequestFullscreen;
        J = m.exitFullscreen || m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (E = !1);
        E && screenfull.enabled && (H = new CToggle(h, g, l, s_bFullscreen, s_oStage), H.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        w = new CHelpPanel(0, 0, s_oSpriteLibrary.getSprite("bg_help"),
            G);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.setTeams = function(a, b) {
        G = a;
        L = b
    };
    this.setTeamsFlagScoreBoard = function(a) {
        y.changeOpponentTeamFlag(a)
    };
    this.refreshButtonPos = function(a, f) {
        q.setPosition(d - a, f + k);
        u.setPosition(b - a, f + c);
        D.setPosition(l.x + a, l.y);
        A.setPosition(p.x - a, p.y);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(e - a, f + n);
        E && screenfull.enabled && H.setPosition(h - s_iOffsetX, g + s_iOffsetY);
        var m = y.getStartPosition();
        y.setPosition(m.x, m.y + f);
        m = F.getStartPosition();
        F.setPosition(m.x +
            a, m.y + f);
        m = B.getStartPosition();
        B.setPosition(m.x + a, m.y - f);
        m = C.getStartPosition();
        C.setPosition(m.x - a, m.y - f)
    };
    this.unload = function() {
        q.unload();
        q = null;
        w && w.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
        E && screenfull.enabled && H.unload();
        s_oInterface = null
    };
    this.refreshResult = function(a, b) {
        y.refresh(a + " - " + b)
    };
    this.refreshTime = function(a) {
        F.refresh(a)
    };
    this.onExitFromHelp = function() {
        this.unloadHelpPanel();
        var a = s_oSpriteLibrary.getSprite("msg_box");
        this.createVsPanel(a, G, L,
            null, null, 0)
    };
    this.crowdEffectOn = function() {
        var a = (void 0).getPosition(),
            b = s_oSpriteLibrary.getSprite("crowd_on");
        a.y += .3 * b.height;
        (void 0).crowOn(s_oSpriteLibrary.getSprite("crowd_on"), a.x, a.y, 750)
    };
    this.createEndMatchText = function(a, b, d, c, g) {
        var e = new createjs.Container;
        e.x = .5 * CANVAS_WIDTH;
        e.y = -50;
        var h = new createjs.Text(TEXT_FINISH, "50px " + FONT_GAME, "#ff6000");
        h.x = 0;
        h.y = 0;
        h.textAlign = "center";
        h.outline = 5;
        e.addChild(h);
        h = new createjs.Text(TEXT_FINISH, "50px " + FONT_GAME, TEXT_COLOR);
        h.x = 0;
        h.y = 0;
        h.textAlign =
            "center";
        e.addChild(h);
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            y: TWEEN_END_MACTH_Y
        }, 1250, createjs.Ease.elasticOut).call(function() {
            createjs.Tween.get(e).to({
                scaleX: 0,
                scaleY: 0
            }, 500, createjs.Ease.quartIn).call(function() {
                d ? s_oInterface.createWinPanel(a, b, c, g) : s_oInterface.createLosePanel(a, b, c);
                setVolume("soundtrack", 1);
                s_oGame.unpause(!1);
                s_oStage.removeChild(e)
            })
        })
    };
    this.createExtendedTimeText = function() {
        var a = new createjs.Container;
        a.x = -100;
        a.y = .5 * CANVAS_HEIGHT;
        var b = new createjs.Text(TEXT_TIME_EXTENDED,
            "50px " + FONT_GAME, "#ff6000");
        b.x = 0;
        b.y = 0;
        b.textAlign = "center";
        b.outline = 5;
        a.addChild(b);
        b = new createjs.Text(TEXT_TIME_EXTENDED, "50px " + FONT_GAME, TEXT_COLOR);
        b.x = 0;
        b.y = 0;
        b.textAlign = "center";
        a.addChild(b);
        s_oStage.addChild(a);
        createjs.Tween.get(a).to({
            x: .5 * CANVAS_WIDTH
        }, 750, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(a).to({
                x: CANVAS_WIDTH + 100
            }, 750, createjs.Ease.cubicIn).call(function() {
                s_oGame.extendTime();
                s_oStage.removeChild(a)
            })
        })
    };
    this.createLosePanel = function(a, b, d) {
        x = new CLosePanel(s_oSpriteLibrary.getSprite("msg_box"));
        x.show(a, b, G, L, d)
    };
    this.createWinPanel = function(a, b, d, c) {
        z = new CWinPanel(s_oSpriteLibrary.getSprite("msg_box"), c);
        z.show(a, b, G, L, d)
    };
    this.createVsPanel = function(a, b, d, c, e, g) {
        v = new CVsPanel(a, b, d, e, g);
        null !== c && v.setChildIndex(c)
    };
    this.blockAllButton = function(a) {
        q.block(a);
        u.block(a)
    };
    this.getScoreBoardResult = function() {
        return y.getResult()
    };
    this.unloadHelpPanel = function() {
        w && (w.unload(), w = null)
    };
    this.createGoalText = function(a, b) {
        var d = s_oSpriteLibrary.getSprite("goal_text");
        var c = createBitmap(d);
        c.regX = .5 * d.width;
        c.regY = .5 * d.height;
        c.x = a;
        c.y = b;
        c.scaleX = 0;
        c.scaleY = 0;
        s_oStage.addChild(c);
        createjs.Tween.get(c).to({
            scaleX: 1,
            scaleY: 1
        }, 500, createjs.Ease.quadOut).call(function() {
            createjs.Tween.get(c).wait(500).to({
                scaleX: 0,
                scaleY: 0,
                alpha: 0
            }, 500, createjs.Ease.quadOut).call(function() {
                s_oStage.removeChild(c)
            })
        })
    };
    this._onExitVsPanel = function() {
        v.unload();
        v = null
    };
    this.createStartMatchText = function() {
        var a = new createjs.Container;
        a.x = .5 * CANVAS_WIDTH;
        a.y = -50;
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(-CANVAS_WIDTH_HALF, -CANVAS_HEIGHT_HALF, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .01;
        m.on("click", function() {});
        a.addChild(m);
        var b = new createjs.Text(TEXT_KICK_OFF, "50px " + FONT_GAME, "#ff6000");
        b.x = 0;
        b.y = 0;
        b.textAlign = "center";
        b.outline = 5;
        a.addChild(b);
        b = new createjs.Text(TEXT_KICK_OFF, "50px " + FONT_GAME, TEXT_COLOR);
        b.x = 0;
        b.y = 0;
        b.textAlign = "center";
        a.addChild(b);
        s_oStage.addChild(a);
        createjs.Tween.get(a).to({
            y: TWEEN_END_MACTH_Y
        }, 1250, createjs.Ease.elasticOut).call(function() {
            createjs.Tween.get(a).to({
                    scaleX: 0,
                    scaleY: 0
                }, 500,
                createjs.Ease.quartIn).call(function() {
                s_oGame.startMatch();
                m.off("click", function() {});
                s_oStage.removeChild(a)
            })
        })
    };
    this.createPauseInterface = function() {
        r = new CPause
    };
    this.refreshTurnNumber = function(a, b) {
        B.refreshTurn(a, b)
    };
    this.refreshTurnTeam = function(a) {
        B.setTurn(a)
    };
    this.refreshScore = function(a) {
        C.refresh(a)
    };
    this.turnAnim = function(a) {
        var b = new createjs.Container;
        b.x = -200;
        b.y = CANVAS_HEIGHT_HALF;
        var d = new createjs.Text(a, "50px " + FONT_GAME, "#ff6000");
        d.x = 0;
        d.y = 0;
        d.textAlign = "center";
        d.lineWidth =
            800;
        d.outline = 5;
        b.addChild(d);
        a = new createjs.Text(a, "50px " + FONT_GAME, TEXT_COLOR);
        a.x = 0;
        a.y = 0;
        a.textAlign = "center";
        a.lineWidth = d.lineWidth;
        b.addChild(a);
        s_oStage.addChild(b);
        createjs.Tween.get(b).to({
            x: CANVAS_WIDTH_HALF
        }, 750, createjs.Ease.quartOut).call(function() {
            createjs.Tween.get(b).wait(300).to({
                x: CANVAS_WIDTH + 200
            }, 750, createjs.Ease.quartIn).call(function() {
                s_oStage.removeChild(b)
            })
        })
    };
    this.unloadPause = function() {
        r.unload();
        r = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        (new CAreYouSurePanel(s_oStage)).show()
    };
    this._onPause = function() {
        s_oGame.unpause(!1);
        this.createPauseInterface()
    };
    this.getScoreBoardResult = function() {
        return y.getResult()
    };
    this._createScrollButtons = function() {
        var a = s_oSpriteLibrary.getSprite("but_scroll");
        l = {
            x: .5 * a.width + 10,
            y: .5 * CANVAS_HEIGHT
        };
        D = new CGfxButton(l.x, l.y, a, s_oStage);
        D.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.dirScrollWorld, this, {
            velocity: SCROLL_VELOCITY,
            press: !0,
            dir: LEFT_SCROLL_WORLD
        });
        D.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.dirScrollWorld, this, {
            velocity: SCROLL_VELOCITY,
            press: !1,
            dir: LEFT_SCROLL_WORLD
        });
        p = {
            x: CANVAS_WIDTH - .5 * a.width - 10,
            y: .5 * CANVAS_HEIGHT
        };
        A = new CGfxButton(p.x, p.y, a, s_oStage);
        A.setScaleX(-1);
        A.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.dirScrollWorld, this, {
            velocity: -SCROLL_VELOCITY,
            press: !0,
            dir: RIGHT_SCROLL_WORLD
        });
        A.addEventListenerWithParams(ON_MOUSE_UP, s_oGame.dirScrollWorld, this, {
            velocity: -SCROLL_VELOCITY,
            press: !1,
            dir: RIGHT_SCROLL_WORLD
        })
    };
    this.resetFullscreenBut =
        function() {
            E && screenfull.enabled && H.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? J.call(window.document) : E.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a, f);
    return this
}
var s_oInterface = null;

function CHelpPanel(a, f, b, c) {
    var d, k, h, g, e, n, l, p, q, u, w, t = !1;
    this._init = function(a, b, d, c) {
        h = createBitmap(d);
        h.x = .5 * CANVAS_WIDTH;
        h.y = .5 * CANVAS_HEIGHT;
        h.regX = .5 * d.width;
        h.regY = .5 * d.height;
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        n = new createjs.Shape;
        n.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = .5;
        n.on("pressup", function() {
            s_oHelpPanel._onExitHelp()
        }, null, !0);
        g.addChild(n);
        g.addChild(h);
        s_oStage.addChild(g);
        e = new createjs.Container;
        e.alpha = 0;
        this.page1(c, e);
        s_bMobile || (n.cursor =
            "pointer")
    };
    this.page1 = function(a, b) {
        var c = new createjs.Text(TEXT_CONTROLS, "32px " + FONT_GAME, "#ff6000");
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT - 160;
        c.textAlign = "center";
        c.outline = 5;
        b.addChild(c);
        var e = new createjs.Text(TEXT_CONTROLS, "32px " + FONT_GAME, TEXT_COLOR);
        e.x = .5 * CANVAS_WIDTH;
        e.y = c.y;
        e.textAlign = "center";
        b.addChild(e);
        c = s_oSpriteLibrary.getSprite("players");
        d = CANVAS_WIDTH_HALF;
        k = 270;
        p = new CArrow(d, k, b);
        p.animateMask(1E3);
        e = new CPlayer(d, k, c, 0, !1, !1, PLAYERS_USER, b);
        e.changeTeam(a);
        e.rotate(-1);
        e = s_bMobile ? s_oSpriteLibrary.getSprite("help_touch") : s_oSpriteLibrary.getSprite("help_mouse");
        u = createBitmap(e);
        u.x = d - 130;
        u.y = k - 10;
        u.regX = .5 * e.width;
        u.regY = .5 * e.height;
        b.addChild(u);
        this.animateInputPower(1E3);
        q = new CArrow(d, k + 120, b);
        q.animateRotation(1E3);
        q.mask(100);
        w = createBitmap(e);
        w.x = d - 150;
        w.y = k + 120;
        w.regX = .5 * e.width;
        w.regY = .5 * e.height;
        b.addChild(w);
        c = new CPlayer(d, k + 120, c, 0, !1, !1, PLAYERS_USER, b);
        c.changeTeam(a);
        c.rotate(-1);
        this.animateInputRotate(1E3);
        createjs.Tween.get(b).to({
                alpha: 1
            }, 300,
            createjs.Ease.cubicOut);
        c = s_oSpriteLibrary.getSprite("but_continue");
        l = new CGfxButton(.5 * CANVAS_WIDTH + 210, .5 * CANVAS_HEIGHT + 80, c, b);
        l.addEventListener(ON_MOUSE_UP, this._onExitHelp, this);
        l.pulseAnimation();
        s_oStage.addChild(b)
    };
    this.animateInputPower = function(a) {
        createjs.Tween.get(u).to({
            x: d - 230
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(u).to({
                x: d - 130
            }, a, createjs.Ease.cubicInOut).call(function() {
                s_oHelpPanel.animateInputPower(a)
            })
        })
    };
    this.animateInputRotate = function(a) {
        createjs.Tween.get(w).to({
            y: k +
                60
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(w).to({
                y: k + 180
            }, a, createjs.Ease.cubicInOut).call(function() {
                s_oHelpPanel.animateInputRotate(a)
            })
        })
    };
    this.unload = function() {
        s_oStage.removeChild(g);
        s_oHelpPanel = null;
        n.off("pressup", function() {
            s_oHelpPanel._onExitHelp()
        }, null, !0);
        l.unload();
        l = null;
        createjs.Tween.removeAllTweens()
    };
    this._onExitHelp = function() {
        t || (t = !0, playSound("click", 1, !1), createjs.Tween.get(e).to({
            alpha: 0
        }, 300, createjs.Ease.cubicOut).call(function() {
            s_oGame._onExitHelp()
        }))
    };
    s_oHelpPanel = this;
    this._init(a, f, b, c)
}
var s_oHelpPanel = null;

function CLosePanel(a) {
    var f, b, c, d, k, h, g, e, n, l, p;
    this._init = function(a) {
        p = new createjs.Shape;
        p.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.alpha = 0;
        s_oStage.addChild(p);
        e = new createjs.Container;
        e.alpha = 1;
        e.visible = !1;
        e.y = CANVAS_HEIGHT;
        f = createBitmap(a);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        f.regX = .5 * a.width;
        f.regY = .5 * a.height;
        e.addChild(f);
        d = new createjs.Text("", "30px " + FONT_GAME, "#ff6000");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 50;
        d.textAlign = "center";
        d.textBaseline =
            "middle";
        d.outline = 4;
        e.addChild(d);
        k = new createjs.Text("", "30px " + FONT_GAME, TEXT_COLOR);
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 50;
        k.textAlign = "center";
        k.textBaseline = "middle";
        e.addChild(k);
        b = new createjs.Text("", "26px " + FONT_GAME, "#ff6000");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 50;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.outline = 4;
        e.addChild(b);
        c = new createjs.Text("", "26px " + FONT_GAME, TEXT_COLOR);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 50;
        c.textAlign = "center";
        c.textBaseline = "middle";
        e.addChild(c);
        h = new createjs.Text("", "50px " + FONT_GAME, "#ff6000");
        h.x = CANVAS_WIDTH / 2;
        h.y = 174;
        h.textAlign = "center";
        h.outline = 5;
        h.textBaseline = "middle";
        e.addChild(h);
        g = new createjs.Text("", "50px " + FONT_GAME, TEXT_COLOR);
        g.x = CANVAS_WIDTH / 2;
        g.y = 174;
        g.textAlign = "center";
        g.textBaseline = "middle";
        e.addChild(g);
        s_oStage.addChild(e);
        a = s_oSpriteLibrary.getSprite("but_home");
        n = new CGfxButton(.5 * CANVAS_WIDTH - 310, .5 * CANVAS_HEIGHT + 150, a, e);
        n.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        a = s_oSpriteLibrary.getSprite("but_restart");
        l = new CGfxButton(.5 * CANVAS_WIDTH + 310, .5 * CANVAS_HEIGHT + 150, a, e);
        l.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
        l.pulseAnimation()
    };
    this.unload = function() {
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(e);
            n.unload();
            n = null;
            p.removeAllEventListeners();
            l.unload();
            l = null
        })
    };
    this.show = function(a, f, l, n, v) {
        var m = TEXT_TEAM_CODE[l],
            t = TEXT_TEAM_CODE[n];
        k.text = TEXT_TOTAL_SCORE + ": " + v;
        d.text = k.text;
        c.text = m + " " + a + " - " + f + " " + t;
        b.text = m + " " + a + " - " + f +
            " " + t;
        h.text = TEXT_LOSE;
        g.text = TEXT_LOSE;
        a = s_oSpriteLibrary.getSprite("flags_small");
        new CFlag(c.x - 160, c.y, l, !1, a, e);
        new CFlag(c.x + 160, c.y, n, !1, a, e);
        e.visible = !0;
        createjs.Tween.get(p).to({
            alpha: .5
        }, 500, createjs.Ease.cubicOut);
        p.on("click", function() {});
        createjs.Tween.get(e).wait(250).to({
            y: 0
        }, 1250, createjs.Ease.elasticOut).call(function() {
            s_oAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_oAdsLevel = 1) : s_oAdsLevel++
        })
    };
    this._onRestart = function() {
        this.unload();
        createjs.Tween.get(p).to({
                alpha: 0
            },
            400, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(p)
        });
        s_oGame.restartLevel()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CWinPanel(a, f) {
    var b, c, d, k, h, g, e, n, l, p, q, u, w, t, v, m, x;
    this._init = function(a, f) {
        x = new createjs.Shape;
        x.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        x.alpha = 0;
        s_oStage.addChild(x);
        t = new createjs.Container;
        t.alpha = 1;
        t.visible = !1;
        t.y = CANVAS_HEIGHT;
        b = createBitmap(a);
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF;
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        t.addChild(b);
        k = new createjs.Text("", "50px " + FONT_GAME, "#ff6000");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT_HALF - 200;
        k.textAlign = "center";
        k.outline = 5;
        t.addChild(k);
        h = new createjs.Text("", "50px " + FONT_GAME, TEXT_COLOR);
        h.x = CANVAS_WIDTH / 2;
        h.y = k.y;
        h.textAlign = "center";
        t.addChild(h);
        c = new createjs.Text("", "26px " + FONT_GAME, "#ff6000");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 - 90;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.outline = 5;
        t.addChild(c);
        d = new createjs.Text("", "26px " + FONT_GAME, TEXT_COLOR);
        d.x = CANVAS_WIDTH / 2;
        d.y = c.y;
        d.textAlign = "center";
        d.textBaseline = "middle";
        t.addChild(d);
        g = new createjs.Text("", "24px " + FONT_GAME, "#ff6000");
        g.x =
            CANVAS_WIDTH / 2;
        g.y = CANVAS_HEIGHT / 2 - 20;
        g.textAlign = "center";
        g.outline = 5;
        t.addChild(g);
        e = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        e.x = CANVAS_WIDTH / 2;
        e.y = g.y;
        e.textAlign = "center";
        t.addChild(e);
        n = new createjs.Text("", "24px " + FONT_GAME, "#ff6000");
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2 + 40;
        n.textAlign = "center";
        n.outline = 5;
        t.addChild(n);
        l = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        l.x = CANVAS_WIDTH / 2;
        l.y = n.y;
        l.textAlign = "center";
        t.addChild(l);
        p = new createjs.Text("", "24px " + FONT_GAME, "#ff6000");
        p.x = CANVAS_WIDTH / 2;
        p.y = CANVAS_HEIGHT / 2 + 100;
        p.textAlign = "center";
        p.outline = 5;
        t.addChild(p);
        q = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        q.x = CANVAS_WIDTH / 2;
        q.y = p.y;
        q.textAlign = "center";
        t.addChild(q);
        u = new createjs.Text("", "24px " + FONT_GAME, "#ff6000");
        u.x = CANVAS_WIDTH / 2;
        u.y = CANVAS_HEIGHT / 2 + 160;
        u.textAlign = "center";
        u.outline = 5;
        t.addChild(u);
        w = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        w.x = CANVAS_WIDTH / 2;
        w.y = u.y;
        w.textAlign = "center";
        t.addChild(w);
        var y = s_oSpriteLibrary.getSprite("but_continue");
        m = new CGfxButton(.5 * CANVAS_WIDTH + 310, .5 * CANVAS_HEIGHT + 150, y, t);
        m.pulseAnimation();
        !1 === f ? (y = s_oSpriteLibrary.getSprite("but_home"), v = new CGfxButton(.5 * CANVAS_WIDTH - 310, .5 * CANVAS_HEIGHT + 150, y, t), v.addEventListener(ON_MOUSE_DOWN, this._onExit, this), m.addEventListener(ON_MOUSE_DOWN, this._onContinue, this)) : m.addEventListener(ON_MOUSE_DOWN, this._onEnd, this);
        s_oStage.addChild(t)
    };
    this.unload = function() {
        s_oStage.removeChild(t);
        v && (v.unload(), v = null);
        m && (m.unload(), m = null)
    };
    this.show = function(a, b, f, m, v) {
        var r =
            TEXT_TEAM_CODE[f],
            y = TEXT_TEAM_CODE[m];
        d.text = r + " " + a + " - " + b + " " + y;
        c.text = r + " " + a + " - " + b + " " + y;
        k.text = TEXT_WIN;
        h.text = TEXT_WIN;
        g.text = TEXT_SCORE_GOAL_PLAYER + " " + v.player_goal_score;
        e.text = TEXT_SCORE_GOAL_PLAYER + " " + v.player_goal_score;
        n.text = TEXT_SCORE_GOAL_OPPONENT + " " + v.opponent_goal_score;
        l.text = TEXT_SCORE_GOAL_OPPONENT + " " + v.opponent_goal_score;
        p.text = TEXT_MACTH_SCORE + ": " + v.score_match;
        q.text = TEXT_MACTH_SCORE + ": " + v.score_match;
        u.text = TEXT_TOTAL_SCORE + ": " + v.new_score;
        w.text = TEXT_TOTAL_SCORE +
            ": " + v.new_score;
        a = s_oSpriteLibrary.getSprite("flags_small");
        new CFlag(d.x - 160, d.y, f, !1, a, t);
        new CFlag(d.x + 160, d.y, m, !1, a, t);
        t.visible = !0;
        createjs.Tween.get(x).to({
            alpha: .5
        }, 500, createjs.Ease.cubicOut);
        createjs.Tween.get(t).wait(250).to({
            y: 0
        }, 1250, createjs.Ease.bounceOut).call(function() {
            s_oAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_oAdsLevel = 1) : s_oAdsLevel++
        });
        $(s_oMain).trigger("save_score", v.new_score);
        $(s_oMain).trigger("share_event", v.new_score)
    };
    this._onContinue =
        function() {
            var a = this;
            createjs.Tween.get(t).to({
                y: CANVAS_HEIGHT
            }, 750, createjs.Ease.quartIn).call(function() {
                a.unload()
            });
            createjs.Tween.get(x).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                s_oStage.removeChild(x);
                x.removeAllEventListeners()
            });
            m.block(!0);
            v.block(!0);
            s_oGame.onContinue(s_oStage.getChildIndex(t))
        };
    this._onEnd = function() {
        m.block(!0);
        this.unload();
        s_oGame._onEnd()
    };
    this._onExit = function() {
        this.unload();
        x.off("click", function() {});
        s_oGame.onExit()
    };
    this._init(a, f);
    return this
}

function CBall(a, f, b, c, d) {
    var k, h, g, e, n, l, p, q, u, w, t, v, m = 0,
        x = 0;
    this._init = function(a, b, d, c) {
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        this.createShadow();
        var f = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 7,
                height: d.height,
                regX: d.width / 2 / 7,
                regY: d.height / 2
            }
        });
        e = createSprite(f, 0, d.width / 2 / 7, d.height / 2, d.width / 7, d.height / 2);
        e.stop();
        g.addChild(e);
        l = new CVector2;
        l.set(g.x, g.y);
        p = new CVector2;
        p.set(0, 0);
        q = new CVector2;
        q.set(0, 0);
        w = c;
        k = a;
        h = b;
        t = .5 * d.width / 7;
        v = t * t;
        u = new CVector2;
        u.set(0, 0);
        z.addChild(g)
    };
    this.createShadow = function() {
        var a = s_oSpriteLibrary.getSprite("player_shadow");
        n = createBitmap(a);
        n.regX = .5 * a.width;
        n.regY = -7;
        n.scaleX = .8;
        n.scaleY = .8;
        g.addChild(n)
    };
    this.unload = function() {
        z.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.resetPos = function() {
        g.x = k;
        g.y = h;
        l.set(g.x, g.y);
        q.set(0, 0);
        u.set(0, 0)
    };
    this.setAngle = function(a) {
        e.rotation = a
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.scale = function(a) {
        g.scaleX =
            a;
        g.scaleY = a
    };
    this.getScale = function() {
        return g.scaleX
    };
    this.vTmpForce = function() {
        return q
    };
    this.type = function() {
        return BALL
    };
    this.vCurForce = function() {
        return u
    };
    this.vPos = function() {
        return l
    };
    this.vPrevPos = function() {
        return p
    };
    this.getRadius = function() {
        return t
    };
    this.getRadiusQuadro = function() {
        return v
    };
    this.addForce = function(a) {
        q.addV(a)
    };
    this.setPosVector = function() {
        g.x = l.getX();
        g.y = l.getY()
    };
    this.isGoalKeeper = function() {
        return !1
    };
    this.getID = function() {
        return w
    };
    this.rolls = function() {
        var a = u.getX(),
            b = 1;
        0 > a && (b = -1);
        a = Math.abs(a);
        4 < a ? e.rotation += 10 * b : 3 < a ? (m++, 2 === m && (e.rotation += 8 * b, m = 0)) : 1 < a ? (m++, 3 === m && (e.rotation += 4 * b, m = 0)) : a > MIN_PLAYER_FORCE_VEL && (m++, 4 === m && (e.rotation += 2 * b, m = 0));
        a = Math.abs(u.getY());
        b = this._goToPrevFrame;
        0 > u.getY() && (b = this._goToNextFrame);
        5 < a ? b() : 3 < a ? (m++, 2 < m && (b(), m = 0)) : 1 < a ? (m++, 3 < m && (b(), m = 0)) : a > MIN_PLAYER_FORCE_VEL && (m++, 4 < m && (b(), m = 0))
    };
    this._goToPrevFrame = function() {
        0 === x ? x = 6 : x--;
        e.gotoAndStop(x)
    };
    this._goToNextFrame = function() {
        7 === x ? x = 1 : x++;
        e.gotoAndStop(x)
    };
    this.getChildIndex =
        function() {
            z.getChildIndex(g)
        };
    this.setChildIndex = function(a) {
        z.setChildIndex(g, a)
    };
    this.getObject = function() {
        return g
    };
    var z = d;
    this._init(a, f, b, c);
    return this
}

function CPlayer(a, f, b, c, d, k, h, g) {
    var e, n, l, p, q, u, w, t, v, m, x, z, y, F, B, C = !1,
        r;
    this._init = function(a, b, d, c, g, h, f) {
        u = d;
        q = new createjs.Container;
        q.x = a;
        q.y = b;
        this.createShadow();
        d = new createjs.SpriteSheet({
            images: [f],
            frames: {
                width: f.width / 12,
                height: f.height / 3,
                regX: f.width / 2 / 12,
                regY: f.height / 3 + PLAYER_REGY_OFFSET
            }
        });
        l = createSprite(d, 0, f.width / 2 / 12, f.height / 3 + PLAYER_REGY_OFFSET, f.width / 12, f.height / 3);
        l.stop();
        q.addChild(l);
        x = new CVector2;
        x.set(q.x, q.y);
        z = new CVector2;
        z.set(0, 0);
        y = new CVector2;
        y.set(0, 0);
        F =
            new CVector2;
        F.set(0, 0);
        (B = g) ? (w = PLAYERS_KEEPER_RADIUS, t = PLAYERS_KEEPER_RADIUS * PLAYERS_KEEPER_RADIUS) : (w = PLAYERS_RADIUS, t = PLAYERS_RADIUS * PLAYERS_RADIUS);
        v = h;
        e = a;
        n = b;
        if (r = c) this._initListner(), l.cursor = "pointer";
        p.x = l.x;
        p.y = l.y;
        D.addChild(q)
    };
    this._initListner = function() {
        l.on("mousedown", this.onSelect);
        l.on("pressmove", this.onPressMove);
        l.on("pressup", this.onPressUp)
    };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this.resetPos = function() {
        q.x = e;
        q.y = n;
        x.set(q.x, q.y);
        y.set(0, 0);
        F.set(0,
            0)
    };
    this.createShadow = function() {
        var a = s_oSpriteLibrary.getSprite("player_shadow");
        p = createBitmap(a);
        p.regX = .5 * a.width;
        q.addChild(p)
    };
    this.onSelect = function() {
        s_oGame.onPlayerSelect({
            pos: {
                x: q.x,
                y: q.y
            },
            id: u
        })
    };
    this.onPressMove = function() {
        s_oGame.onPressMove()
    };
    this.onPressUp = function() {
        s_oGame.onPressUp({
            x: q.x,
            y: q.y
        })
    };
    this.isGoalKeeper = function() {
        return B
    };
    this.setPosition = function(a, b) {
        null !== a && (q.x = a);
        null !== b && (q.y = b)
    };
    this.rotate = function(a) {
        q.scaleX = a
    };
    this.setVisible = function(a) {
        q.visible =
            a
    };
    this.changeTeam = function(a) {
        l.gotoAndStop(a);
        m = a
    };
    this.getTeam = function() {
        return m
    };
    this.vTmpForce = function() {
        return y
    };
    this.vCurForce = function() {
        return F
    };
    this.vPos = function() {
        return x
    };
    this.vPrevPos = function() {
        return z
    };
    this.animDangle = function() {
        C || (C = !0, createjs.Tween.get(l).to({
            rotation: DANGLE_DEGREE
        }, 250, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(l).to({
                rotation: -DANGLE_DEGREE
            }, 250, createjs.Ease.cubicOut).call(function() {
                createjs.Tween.get(l).to({
                        rotation: .5 * DANGLE_DEGREE
                    },
                    300, createjs.Ease.cubicOut).call(function() {
                    createjs.Tween.get(l).to({
                        rotation: .5 * -DANGLE_DEGREE
                    }, 300, createjs.Ease.cubicOut).call(function() {
                        createjs.Tween.get(l).to({
                            rotation: .1 * DANGLE_DEGREE
                        }, 300, createjs.Ease.cubicOut).call(function() {
                            createjs.Tween.get(l).to({
                                rotation: .1 * -DANGLE_DEGREE
                            }, 300, createjs.Ease.cubicOut).call(function() {
                                createjs.Tween.get(l).to({
                                    rotation: 0
                                }, 300, createjs.Ease.cubicOut).call(function() {
                                    C = !1
                                })
                            })
                        })
                    })
                })
            })
        }))
    };
    this.setPosVector = function() {
        q.x = x.getX();
        q.y = x.getY()
    };
    this.getRadius =
        function() {
            return w
        };
    this.getID = function() {
        return u
    };
    this.type = function() {
        return v
    };
    this.getRadiusQuadro = function() {
        return t
    };
    this.addForce = function(a) {
        y.addV(a)
    };
    this.getChildIndex = function() {
        return D.getChildIndex(q)
    };
    this.setChildIndex = function(a) {
        D.setChildIndex(q, a)
    };
    this.getObject = function() {
        return q
    };
    this.unload = function() {
        r && (l.off("mousedown", this.onSelect), l.off("pressmove", this.onPressMove), l.off("pressup", this.onPressUp));
        D.removeChild(l);
        l = null
    };
    var D = g;
    this._init(a, f, c, d, k, h, b)
}

function CTurnPlayer(a, f, b, c) {
    var d;
    this._init = function(a, b, c) {
        var e = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 10,
                height: c.height / 3,
                regX: c.width / 2 / 10,
                regY: c.height / 3
            },
            animations: {
                rotate: [0, 29, "rotate", .7]
            }
        });
        d = createSprite(e, "rotate", c.width / 2 / 10, c.height / 3, c.width / 10, c.height / 3);
        d.x = a;
        d.y = b;
        k.addChild(d)
    };
    this.gotoAndStopAnim = function(a) {
        d.gotoAndStop(a)
    };
    this.stopAnim = function() {
        d.stop()
    };
    this.playAnim = function() {
        d.play()
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.setScale = function(a) {
        d.scaleX = a;
        d.scaleY = a
    };
    this.setVisible = function(a) {
        d.visible = a
    };
    this.unload = function() {
        k.removeChild(d)
    };
    var k = c;
    this._init(a, f, b);
    return this
}

function CFlag(a, f, b, c, d, k) {
    var h = null,
        g = null,
        e, n = null,
        l, p, q = !1,
        u = !1;
    this._init = function(a, b, d, c, f) {
        var k = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 6,
                height: d.height / 6,
                regX: d.width / 2 / 6,
                regY: d.height / 2 / 6
            }
        });
        e = createSprite(k, c, d.width / 2 / 6, d.height / 2 / 6, d.width / 6, d.height / 6);
        e.gotoAndStop(c);
        e.x = a;
        e.y = b;
        p = l = 1;
        w.addChild(e);
        if (u = f) s_bMobile || (e.cursor = "pointer"), this._initListener(), h = [], g = []
    };
    this.unload = function() {
        u && (e.off("mousedown", this.buttonDown), e.off("pressup", this.buttonRelease));
        w.removeChild(e)
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this.setCursorType = function(a) {
        e.cursor = a
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        h[a] = b;
        g[a] = d
    };
    this.addEventListenerWithParams = function(a, b, d, c) {
        h[a] = b;
        g[a] = d;
        n = c
    };
    this.buttonRelease = function() {
        q || (e.scaleX = 0 < l ? l : -l, e.scaleY = 0 < p ? p : -p, playSound("click", 1, !1), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(g[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        q ||
            (e.scaleX = 0 < l ? l - .1 : -l + .1, e.scaleY = 0 < p ? p - .1 : -p + .1, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], n))
    };
    this.rotation = function(a) {
        e.rotation = a
    };
    this.getButton = function() {
        return e
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setX = function(a) {
        e.x = a
    };
    this.setY = function(a) {
        e.y = a
    };
    this.getButtonImage = function() {
        return e
    };
    this.block = function(a) {
        q = a;
        e.scaleX = l;
        e.scaleY = p
    };
    this.setScaleX = function(a) {
        l = e.scaleX = a
    };
    this.setScale = function(a) {
        e.scaleX = a;
        p = l = e.scaleY = a
    };
    this.changeTeam = function(a) {
        e.gotoAndStop(a)
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this.showAnimation = function(a, b) {
        e.scaleX = 0;
        e.scaleY = 0;
        createjs.Tween.get(e).wait(a).to({
            scaleY: p,
            scaleX: l
        }, b, createjs.Ease.elasticOut)
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(e)
    };
    var w = k;
    this._init(a, f, d, b, c);
    return this
}

function COpponent(a, f, b, c, d, k, h) {
    var g, e, n, l, p, q, u = 0,
        w, t, v, m, x, z, y, F, B = !1,
        C = !1,
        r = !1,
        D = !1,
        A = !1,
        G = !1,
        L = !1,
        H, E, J, P, S, M;
    this._init = function(a, b, d, c, f, h, k) {
        F = k;
        k = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 8,
                height: d.height / 7,
                regX: d.width / 2 / 8,
                regY: d.height / 2 / 7
            },
            animations: {
                idle: [0, 11, "idle", .5],
                run: [12, 22],
                shot: [23, 28],
                head_shot_run: [29, 37],
                head_shot_idle: [38, 48],
                heel_shot: [49, 55],
                reverse: {
                    frames: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
                }
            }
        });
        g = createSprite(k, "idle", d.width / 2 / 8, d.height / 2 / 7, d.width /
            8, d.height / 7);
        g.x = a;
        g.y = b;
        g.scaleX = -1;
        l = d.width / 8;
        S = E = P = J = 0;
        M = TIME_TRY_TO_SHOT_BALL_OPPONENT;
        y = h;
        a = l;
        e = CANVAS_WIDTH + -l;
        n = a;
        q = c;
        p = CHARACTER_SPEED * q;
        w = OPPONENT_DISTANCE_PROTECTION;
        z = f;
        F.addChild(g)
    };
    this.setChildIndex = function(a) {
        F.setChildIndex(g, a)
    };
    this.getChildIndex = function() {
        return F.getChildIndex(g)
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this.removeAllComponent = function() {
        !0 === B ? (s_oGame.removeLeg(v), B = !1) : !0 === C ? (s_oGame.removeHead(m), C = !1) : !0 === r && (s_oGame.removeLeg(x),
            r = !1)
    };
    this.setPosition = function(a, b) {
        null !== a && (g.x = a);
        null !== b && (g.y = b)
    };
    this.rotate = function(a) {
        g.scaleX = a
    };
    this.changeState = function(a) {
        g.gotoAndPlay(a);
        "shot" !== a && "head_shot_run" !== a && "head_shot_idle" !== a && "heel_shot" !== a || this._onFinishAnimation()
    };
    this.stopAnimation = function() {
        g.stop()
    };
    this.playAnimation = function() {
        g.play()
    };
    this._onFinishAnimation = function() {
        g.on("animationend", function() {
            0 === u ? (g.gotoAndPlay("idle"), t = "idle") : -1 === u ? (g.gotoAndPlay("reverse"), t = "reverse") : (g.gotoAndPlay("run"),
                t = "run");
            g.removeAllEventListeners()
        })
    };
    this.unload = function() {
        F.removeChild(g)
    };
    this.createHead = function() {
        m = z.addHead({
            x: g.x + OFFSET_HEAD_POS_OPPONENT.x,
            y: g.y + OFFSET_HEAD_POS_OPPONENT.y
        }, OPPONENT_HEAD);
        C = !0
    };
    this.createHeel = function() {
        x = z.addLeg({
            x: g.x + OFFSET_HEEL_POS_OPPONENT.x,
            y: g.y + OFFSET_HEEL_POS_OPPONENT.y
        }, OPPONENT_HEEL);
        r = !0
    };
    this.createLeg = function() {
        v = z.addLeg({
            x: g.x + OFFSET_LEG_POS_OPPONENT.x,
            y: g.y + OFFSET_LEG_POS_OPPONENT.y
        }, OPPONENT_LEG);
        B = !0
    };
    this.getLegShoot = function() {
        return B
    };
    this.getHeadShoot =
        function() {
            return C
        };
    this.getHeelShoot = function() {
        return r
    };
    this.protectTheGoal = function(a, b, d, c, e) {
        10 < a || -10 > a ? g.x < b ? this.move(1, y) : g.x > b && this.move(-1, y) : this.move(0, y);
        this.shot(d, c, e)
    };
    this.saveTheBallFromGoal = function(a, b) {
        A = !0;
        10 < b || -10 > b ? this.move(1, y) : this.move(0, y);
        a < HEEL_SHOOT_DISTANCE_OPPONENT && (0 >= H ? !1 === r && (this.createHeel(), this.changeState("heel_shot"), H = randomRange(REACT_OPP_FOR_HEEL_SHOOT.min, REACT_OPP_FOR_HEEL_SHOOT.max)) : H -= 1 / createjs.Ticker.framerate)
    };
    this.move = function(a) {
        1 ===
            a ? ("reverse" !== t && this.changeState("reverse"), t = "reverse") : -1 === a ? ("run" !== t && this.changeState("run"), t = "run") : 0 === a && ("idle" !== t && this.changeState("idle"), t = "idle");
        u = a;
        var b = s_oPhysicsController.getElementPosition(y.fixture1),
            d = s_oPhysicsController.getElementPosition(y.fixture2),
            c = s_oPhysicsController.getElementPosition(y.fixture3);
        b.x += p * a;
        b.x >= e ? b.x = e : b.x <= n && (b.x = n);
        d.x = b.x + OPPONENT_COLLISION.sph_offset.x - OPPONENT_COLLISION.rec_offset.x;
        c.x = b.x + OPPONENT_COLLISION.rec_neck.x - OPPONENT_COLLISION.rec_offset.x;
        s_oPhysicsController.setElementPosition(y.fixture1, b);
        s_oPhysicsController.setElementPosition(y.fixture2, d);
        s_oPhysicsController.setElementPosition(y.fixture3, c);
        g.x = b.x + OPPONENT_COLLISION.rec_center_width;
        g.y = b.y - OPPONENT_COLLISION.rec_offset.y
    };
    this.goToBall = function(a, b, d, c, e, f) {
        d > MIN_DISTANCE_BETWEEN_PLAYER && 0 < M || b.x < e.x || 1 > f ? this.move(-1, y) : 0 < M || g.x > STOP_BACK_WALK_POSITION ? (this.move(0, y), M = 0 >= M ? TIME_TRY_TO_SHOT_BALL_OPPONENT : M - c) : d < GO_TO_DISTANCE && e.x < b.x ? this.move(1, y) : M = TIME_TRY_TO_SHOT_BALL_OPPONENT;
        this.shot(a, b, c)
    };
    this.shot = function(a, b, d) {
        a < DISTANCE_START_SHOOT_OPPONENT && (0 >= P ? (b.y < g.y ? !1 === C && (this.createHead(), 1 === u || -1 === u ? this.changeState("head_shot_run") : this.changeState("head_shot_idle")) : !1 === B && (this.createLeg(), this.changeState("shot")), P = randomRange(TIME_INTERVAL_SHOOT.min, TIME_INTERVAL_SHOOT.max)) : P -= d)
    };
    this.checkAFinishedShoot = function() {
        if (!0 === B) {
            var a = s_oPhysicsController.getJointAngle(v.jointLeg),
                b = {
                    x: g.x + OFFSET_LEG_POS_OPPONENT.x,
                    y: g.y + OFFSET_LEG_POS_OPPONENT.y
                };
            s_oPhysicsController.setElementPosition(v.fixture2,
                b);
            a <= DELETE_LEG_ANGLE_OPPONENT && (s_oGame.removeLeg(v), B = !1)
        } else !0 === C ? (a = s_oPhysicsController.getJointTranslation(m.joint), b = {
            x: g.x + OFFSET_HEAD_POS_OPPONENT.x,
            y: g.y + OFFSET_HEAD_POS_OPPONENT.y
        }, s_oPhysicsController.setElementPosition(m.fixture2, b), a >= PLAYER_HEAD.distance - .1 && (s_oGame.removeHead(m), C = !1)) : !0 === r && (a = s_oPhysicsController.getJointAngle(x.jointLeg), b = {
                x: g.x + OFFSET_HEEL_POS_OPPONENT.x,
                y: g.y + OFFSET_HEEL_POS_OPPONENT.y
            }, s_oPhysicsController.setElementPosition(x.fixture2, b), a >= DELETE_HEEL_ANGLE_OPPONENT &&
            (s_oGame.removeLeg(x), r = !1))
    };
    this.getAggressive = function() {
        return L
    };
    this.setAggressive = function(a, b) {
        w = (L = a) ? OPPONENT_DISTANCE_PROTECTION_AGG : OPPONENT_DISTANCE_PROTECTION[b]
    };
    this.setDistanceProtection = function(a) {
        w = a
    };
    this.restart = function() {
        G = A = D = !1;
        S = E = P = J = 0;
        this.move(0, y)
    };
    this.activeProtectGoal = function() {
        !1 === D && (D = !0, G = !1, E = randomRange(TIME_REACTION_FROM_SAVE_TO_GO.min, TIME_REACTION_FROM_SAVE_TO_GO.max), P = randomRange(.5 * TIME_INTERVAL_SHOOT.min, .5 * TIME_INTERVAL_SHOOT.max), J = randomRange(TIME_IN_PROTECT_STATE.min,
            TIME_IN_PROTECT_STATE.max), M = TIME_TRY_TO_SHOT_BALL_OPPONENT)
    };
    this.activeGoToBall = function() {
        !1 === G && (P = randomRange(.5 * TIME_INTERVAL_SHOOT.min, .5 * TIME_INTERVAL_SHOOT.max), M = TIME_TRY_TO_SHOT_BALL_OPPONENT, D = !1, G = !0)
    };
    this.chooseAction = function(a, b, d) {
        A = !1;
        0 >= E ? a > w && b.x < BALL_VELOCITY_X_REACTION ? this.activeProtectGoal() : a < w || b.x > BALL_VELOCITY_X_REACTION_ATTACK ? this.activeGoToBall() : b.x < BALL_VELOCITY_X_REACTION_ATTACK ? this.activeProtectGoal() : this.activeGoToBall() : E -= d
    };
    this.decision = function(a, b, d, c,
        e) {
        g.x < a.x + b ? (!1 === A && (H = randomRange(REACT_OPP_FOR_HEEL_SHOOT.min, REACT_OPP_FOR_HEEL_SHOOT.max)), A = !0, G = D = !1) : this.chooseAction(d, c, e)
    };
    this.update = function(a, b, d, c) {
        var e = 1 / createjs.Ticker.framerate;
        this.checkAFinishedShoot();
        var f = s_oGame.getBallSpritePos(),
            h = OBJECT[1][0].x,
            k = h - g.x,
            l = distanceV2({
                x: g.x,
                y: g.y
            }, f),
            n = distanceV2({
                x: g.x,
                y: g.y
            }, d),
            r = OFFSET_OPPONENT_FORWOARD_BALL + .2 * (g.y - OPPONENT_COLLISION.recHeight - f.y);
        0 >= S ? (this.decision(f, r, l, b, e), S = TIME_REFRESH_AI[c]) : S -= e;
        D ? 0 < J ? (this.protectTheGoal(k,
            h, l, f, e), J -= e) : (D = !1, G = !0, E = randomRange(TIME_AFTER_REACTION.min, TIME_AFTER_REACTION.max)) : G ? this.goToBall(l, f, n, e, d, b.x * b.x + b.y * b.y) : A ? this.saveTheBallFromGoal(l, k) : this.move(0);
        s_oPhysicsController.setElementAngle(a.fixture1, 0)
    };
    this._init(a, f, b, c, d, k, h)
}

function CTeamChoose() {
    var a, f, b, c, d, k, h, g, e, n, l, p, q, u, w, t, v, m, x, z, y, F, B = null,
        C = null;
    this._init = function() {
        h = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(h);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        s_oStage.addChild(l);
        var r = s_oSpriteLibrary.getSprite("msg_box");
        g = createBitmap(r);
        g.x = .5 * CANVAS_WIDTH;
        g.y = .5 * CANVAS_HEIGHT;
        g.regX = .5 * r.width;
        g.regY = .5 * r.height;
        s_oStage.addChild(g);
        z = [];
        x = [];
        m = new createjs.Container;
        y = 0;
        r = s_oSpriteLibrary.getSprite("flags");
        w = new CFlag(928, 293, 0, !1, r, m);
        w.block(!0);
        r = START_POS_FLAG.x;
        for (var D = START_POS_FLAG.y, A = s_oSpriteLibrary.getSprite("flags_small"), G = 0; G < TOT_TEAM; G++) {
            this._createFlag(G, r, D, Math.floor(500 * Math.random()), 1500, A, m);
            var L = s_oSpriteLibrary.getSprite("turn_" + G);
            z[G] = new CTurnPlayer(976, 423, L, m);
            z[G].setVisible(!1);
            z[G].setScale(.92);
            z[G].stopAnim();
            r < FLAG_LIMIT_POS_X ? r += FLAG_ADDED_POS.x : (r = START_POS_FLAG.x, D += FLAG_ADDED_POS.y)
        }
        z[0].setVisible(!0);
        z[0].playAnim();
        r = s_oSpriteLibrary.getSprite("team_selection");
        u = createBitmap(r);
        u.x = x[0].getX();
        u.y = x[0].getY() + 3;
        u.regX = .5 * r.width;
        u.regY = .5 * r.height;
        s_oStage.addChild(m);
        m.y = 0;
        n = new createjs.Container;
        r = new createjs.Text(TEXT_SELECT_YOUR_TEAM, "48px " + FONT_GAME, TEXT_COLOR);
        r.textAlign = "center";
        r.x = 0;
        r.y = 0;
        D = new createjs.Text(TEXT_SELECT_YOUR_TEAM, "48px " + FONT_GAME, "#ff6000");
        D.textAlign = "center";
        D.x = 0;
        D.y = 0;
        D.outline = 5;
        n.x = 682;
        n.y = 115;
        n.addChild(D, r);
        s_oStage.addChild(n);
        v = new createjs.Text(TEXT_TEAM[0], "48px " +
            FONT_GAME, "#ff6000");
        v.textAlign = "center";
        v.textBaseline = "middle";
        v.x = 590;
        v.y = 498;
        v.outline = 4;
        s_oStage.addChild(v);
        t = new createjs.Text(TEXT_TEAM[0], "48px " + FONT_GAME, TEXT_COLOR);
        t.textAlign = "center";
        t.textBaseline = "middle";
        t.x = v.x;
        t.y = v.y;
        s_oStage.addChild(t);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r = s_oSpriteLibrary.getSprite("audio_icon"), d = CANVAS_WIDTH - r.width / 2 - 60, k = r.height / 2 + 20, p = new CToggle(d, k, r, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = window.document;
        D = r.documentElement;
        B = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        C = r.exitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen || r.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (B = !1);
        B && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), a = r.width / 4 + 10, f = r.height / 2 + 20, F = new CToggle(a, f, r, s_bFullscreen, s_oStage), F.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = s_oSpriteLibrary.getSprite("but_continue_small");
        e = new CGfxButton(997,
            481, r, s_oStage);
        e.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);
        e.pulseAnimation();
        r = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - r.height / 2 - 20;
        c = r.height / 2 + 20;
        q = new CGfxButton(b, c, r, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        }, 1E3).call(function() {
            l.visible = !1;
            m.addChild(u)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this._createFlag = function(a, b, d, c, e, g, f) {
        x[a] = new CFlag(b, d, a, !0, g, f);
        x[a].addEventListenerWithParams(ON_MOUSE_UP, this._onButTeamChoose, this, a);
        x[a].setScale(1);
        x[a].showAnimation(c, e)
    };
    this.refreshButtonPos = function(e, g) {
        q.setPosition(b - e, g + c);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(d - e, g + k);
        B && screenfull.enabled && F.setPosition(a + s_iOffsetX, f + s_iOffsetY)
    };
    this._onButTeamChoose = function(a) {
        y !== a && (z[a].setVisible(!0), z[a].playAnim(), w.changeTeam(a), u.x = x[a].getX(), u.y = x[a].getY() +
            3, t.text = TEXT_TEAM[a], v.text = t.text, z[y].setVisible(!1), z[y].stopAnim(), y = a)
    };
    this.unload = function() {
        for (var a = 0; a < x.length; a++) x[a].unload(), x[a] = null;
        q.unload();
        q = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
        B && screenfull.enabled && F.unload();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oTeamChoose = null
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButContinueRelease =
        function() {
            this.unload();
            s_oMain.gotoGame(y)
        };
    this.resetFullscreenBut = function() {
        B && screenfull.enabled && F.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? C.call(window.document) : B.call(window.document.documentElement);
        sizeHandler()
    };
    s_oTeamChoose = this;
    this._init()
}
var s_oTeamChoose = null;

function CVsPanel(a, f, b, c, d) {
    var k, h, g, e, n, l, p, q, u, w, t, v, m, x, z;
    this._init = function(a, b, d, c, f) {
        g = new createjs.Container;
        z = new createjs.Shape;
        z.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        z.alpha = .5;
        z.on("click", function() {});
        g.addChild(z);
        null !== a && (e = createBitmap(a), e.x = .5 * CANVAS_WIDTH, e.y = .5 * CANVAS_HEIGHT, e.regX = .5 * a.width, e.regY = .5 * a.height, g.addChild(e));
        t = new createjs.Container;
        v = new createjs.Container;
        m = new createjs.Container;
        a = c + 1;
        c = new createjs.Text(TEXT_MATCH + " " +
            a, "32px " + FONT_GAME, "#ff6000");
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT - 200;
        c.textAlign = "center";
        c.outline = 5;
        g.addChild(c);
        a = new createjs.Text(TEXT_MATCH + " " + a, "32px " + FONT_GAME, TEXT_COLOR);
        a.x = .5 * CANVAS_WIDTH;
        a.y = .5 * CANVAS_HEIGHT - 200;
        a.textAlign = "center";
        g.addChild(a);
        a = s_oSpriteLibrary.getSprite("flags");
        n = new CFlag(.5 * CANVAS_WIDTH - 225, 313, b, !1, a, t);
        n.setScale(.9);
        l = new CFlag(.5 * CANVAS_WIDTH + 225, 313, d, !1, a, v);
        l.setScale(.9);
        b = s_oSpriteLibrary.getSprite("turn_" + b);
        u = new CTurnPlayer(.5 * CANVAS_WIDTH -
            280, 451, b, t);
        u.gotoAndStopAnim(21);
        u.setScale(.9);
        d = s_oSpriteLibrary.getSprite("turn_" + d);
        w = new CTurnPlayer(.5 * CANVAS_WIDTH + 280, 451, d, v);
        w.gotoAndStopAnim(0);
        w.setScale(.9);
        m.x = .5 * CANVAS_WIDTH;
        m.y = .5 * CANVAS_HEIGHT;
        g.addChild(t, v, m);
        null === f && (f = 0);
        createjs.Tween.get(v).wait(f).to({
            x: 0
        }, 1E3, createjs.Ease.elasticOut);
        var h = this;
        createjs.Tween.get(t).wait(f).to({
            x: 0
        }, 1E3, createjs.Ease.elasticOut).call(function() {
            h._createVsText(m);
            m.scaleX = 9;
            m.scaleY = 9;
            createjs.Tween.get(m).to({
                    scaleX: 1,
                    scaleY: 1
                }, 1E3,
                createjs.Ease.bounceOut).call(function() {
                h._createButContinue(g, .5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 150)
            })
        });
        s_oStage.addChild(g)
    };
    this._createButContinue = function(a, b, d) {
        k = b;
        h = d;
        b = s_oSpriteLibrary.getSprite("but_continue");
        x = new CGfxButton(k, h, b, a);
        x.addEventListener(ON_MOUSE_UP, this._onExitVsPanel, this);
        x.pulseAnimation()
    };
    this._createVsText = function(a) {
        p = new createjs.Text(TEXT_VS, "75px " + FONT_GAME, "#ff6000");
        p.x = 0;
        p.y = 0;
        p.textAlign = "center";
        p.textBaseline = "middle";
        p.outline = 5;
        a.addChild(p);
        q = new createjs.Text(TEXT_VS,
            "75px " + FONT_GAME, TEXT_COLOR);
        q.x = 0;
        q.y = 0;
        q.textAlign = "center";
        q.textBaseline = "middle";
        a.addChild(q)
    };
    this.setChildIndex = function(a) {
        s_oStage.setChildIndex(g, a)
    };
    this.unload = function() {
        z.off("click", function() {});
        s_oStage.removeChild(g)
    };
    this._onExitVsPanel = function() {
        this.unload();
        s_oGame._onExitVsPanel();
        s_oInterface.unloadHelpPanel()
    };
    this._init(a, f, b, c, d);
    s_oVsPanel = this;
    return this
}
var s_oVsPanel = null;

function CGoal(a) {
    var f, b, c, d, k;
    this._init = function() {
        f = [];
        var a = s_oSpriteLibrary.getSprite("goal_bottom");
        b = createBitmap(a);
        b.x = POS_GOAL_PLAYER_BOTTOM.x;
        b.y = POS_GOAL_PLAYER_BOTTOM.y;
        b.regX = .5 * a.width;
        b.regy = .5 * a.heigth;
        h.addChild(b);
        f[0] = b;
        c = createBitmap(a);
        c.x = POS_GOAL_OPPONENT_BOTTOM.x;
        c.y = POS_GOAL_OPPONENT_BOTTOM.y;
        c.regX = .5 * a.width;
        c.regy = .5 * a.heigth;
        c.scaleX = -1;
        h.addChild(c);
        f[1] = c
    };
    this.createGoalFront = function() {
        var a = s_oSpriteLibrary.getSprite("goal_top");
        d = createBitmap(a);
        d.x = POS_GOAL_PLAYER_FRONT.x;
        d.y = POS_GOAL_PLAYER_FRONT.y + a.height;
        d.regX = .5 * a.width;
        d.regY = a.height;
        h.addChild(d);
        f[2] = d;
        k = createBitmap(a);
        k.x = POS_GOAL_OPPONENT_FRONT.x;
        k.y = POS_GOAL_OPPONENT_FRONT.y + a.height;
        k.regX = .5 * a.width;
        k.regY = a.height;
        k.scaleX = -1;
        h.addChild(k);
        f[3] = k
    };
    this.getGoalEnemyFront = function() {
        return k
    };
    this.getGoalPlayerFront = function() {
        return d
    };
    this.unload = function() {
        for (var a = 0; a < f.length; a++) h.removeChild(f[a])
    };
    var h = a;
    this._init();
    return this
}

function CScoreBoard(a, f, b, c, d) {
    var k, h, g, e, n, l, p;
    this._init = function(a, b, d, c, f) {
        k = {
            x: b,
            y: d
        };
        h = new createjs.Container;
        h.x = k.x;
        h.y = k.y;
        g = createBitmap(a);
        g.x = 0;
        g.y = -3;
        g.regX = .5 * a.width;
        g.regY = 0;
        h.addChild(g);
        n = new createjs.Text(" 0 - 0 ", "24px " + FONT_GAME, "#ff6000");
        n.x = 0;
        n.y = .5 * a.height - 3;
        n.textAlign = "center";
        n.textBaseline = "middle";
        n.outline = 5;
        h.addChild(n);
        e = new createjs.Text(" 0 - 0 ", "24px " + FONT_GAME, TEXT_COLOR);
        e.x = 0;
        e.y = n.y;
        e.textAlign = "center";
        e.textBaseline = "middle";
        h.addChild(e);
        a = s_oSpriteLibrary.getSprite("flags_small");
        l = new CFlag(-65, 23, c, !1, a, h);
        l.setScale(.7);
        p = new CFlag(65, 23, f, !1, a, h);
        p.setScale(.7);
        s_oStage.addChild(h)
    };
    this.changeOpponentTeamFlag = function(a) {
        p.changeTeam(a)
    };
    this.getStartPosition = function() {
        return k
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(h)
    };
    this.refresh = function(a) {
        n.text = a;
        e.text = a
    };
    this.getResult = function() {
        return e.text
    };
    this._init(a, f, b, c, d);
    return this
}

function CTimeBoard(a, f, b) {
    var c, d, k, h, g;
    this._init = function(a, b, f) {
        c = {
            x: b,
            y: f
        };
        d = new createjs.Container;
        d.x = c.x;
        d.y = c.y;
        k = createBitmap(a);
        k.x = 0;
        k.y = 0;
        k.regX = 0;
        k.regY = 0;
        d.addChild(k);
        g = new createjs.Text(TEXT_TIME + ": 0", "22px " + FONT_GAME, "#ff6000");
        g.x = .5 * a.width;
        g.y = .5 * a.height;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.outline = 4;
        d.addChild(g);
        h = new createjs.Text(TEXT_TIME + ": 0", "22px " + FONT_GAME, TEXT_COLOR);
        h.x = .5 * a.width;
        h.y = .5 * a.height;
        h.textAlign = "center";
        h.textBaseline = "middle";
        d.addChild(h);
        s_oStage.addChild(d)
    };
    this.getStartPosition = function() {
        return c
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this.refresh = function(a) {
        h.text = a;
        g.text = a
    };
    this._init(a, f, b);
    return this
}

function CTurnBoard(a, f, b) {
    var c, d, k, h, g;
    this._init = function(a, b, f) {
        g = [];
        c = {
            x: b,
            y: f
        };
        d = new createjs.Container;
        d.x = c.x;
        d.y = c.y;
        k = createBitmap(a);
        k.x = 0;
        k.y = 0;
        k.regX = 0;
        k.regY = 0;
        d.addChild(k);
        b = s_oSpriteLibrary.getSprite("players");
        h = new CPlayer(30, 27, b, -1, !1, !1, 0, d);
        h.rotate(-1);
        a = s_oSpriteLibrary.getSprite("turn_ball");
        b = FIRST_POS_X_TURN_BALL;
        f = 27;
        for (var e = 0; e < NUM_OF_SHOT; e++) g[e] = this.createTurnBall(b, f, a), d.addChild(g[e]), b += STEP_POS_X_TURN_BALL;
        s_oStage.addChild(d)
    };
    this.createTurnBall = function(a,
        b, d) {
        var c = createBitmap(d);
        c.x = a;
        c.y = b;
        c.regX = .5 * d.width;
        c.regY = .5 * d.height;
        return c
    };
    this.getStartPosition = function() {
        return c
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this.refreshTurn = function(a, b) {
        g[a].visible = b
    };
    this.setTurn = function(a) {
        h.changeTeam(a)
    };
    this._init(a, f, b);
    return this
}

function CCongratulations(a, f) {
    var b, c, d, k, h, g, e, n, l, p, q, u, w, t;
    this._init = function(a, f) {
        k = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(k);
        u = new createjs.Shape;
        u.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        u.alpha = .5;
        s_oStage.addChild(u);
        var m = s_oSpriteLibrary.getSprite("msg_box");
        h = createBitmap(m);
        h.x = .5 * CANVAS_WIDTH;
        h.y = .5 * CANVAS_HEIGHT;
        h.regX = .5 * m.width;
        h.regY = .5 * m.height;
        s_oStage.addChild(h);
        m = s_oSpriteLibrary.getSprite("but_home");
        b = CANVAS_WIDTH /
            2;
        g = new CGfxButton(b, 470, m, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onButMenuRelease, this);
        g.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - m.height / 2 - 10, d = m.height / 2 + 10, t = new CToggle(c, d, m, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        e = new createjs.Text(TEXT_CONGRATULATIONS, "36px " + FONT_GAME, "#ff6000");
        e.x = .5 * CANVAS_WIDTH;
        e.y = .5 * CANVAS_HEIGHT - 190;
        e.textAlign = "center";
        e.lineWidth = 800;
        e.outline = 5;
        s_oStage.addChild(e);
        n = new createjs.Text(TEXT_CONGRATULATIONS, "36px " + FONT_GAME, TEXT_COLOR);
        n.x = .5 * CANVAS_WIDTH;
        n.y = e.y;
        n.lineWidth = e.lineWidth;
        n.textAlign = "center";
        s_oStage.addChild(n);
        m = this.createResultText(a);
        l = new createjs.Text(TEXT_TOTAL_SCORE + ": " + f, "30px " + FONT_GAME, "#ff6000");
        l.x = .5 * CANVAS_WIDTH;
        l.y = .5 * CANVAS_HEIGHT + m.offsetY;
        l.textAlign = "center";
        l.outline = 5;
        s_oStage.addChild(l);
        p = new createjs.Text(TEXT_TOTAL_SCORE + ": " + f, "30px " + FONT_GAME, TEXT_COLOR);
        p.x = .5 * CANVAS_WIDTH;
        p.y =
            .5 * CANVAS_HEIGHT + m.offsetY;
        p.textAlign = "center";
        s_oStage.addChild(p);
        var v = s_oSpriteLibrary.getSprite("trophy");
        q = createBitmap(v);
        q.x = 406;
        q.y = .5 * -v.height;
        q.regX = .5 * v.width;
        q.regY = .5 * v.height;
        s_oStage.addChild(q);
        createjs.Tween.get(q).wait(m.time).to({
            y: 431
        }, 1E3, createjs.Ease.bounceOut);
        var w = new createjs.Shape;
        w.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(w);
        createjs.Tween.get(w).to({
            alpha: 0
        }, 1E3).call(function() {
            s_oStage.removeChild(w)
        });
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY)
    };
    this.createResultText = function(a) {
        w = new createjs.Container;
        var b = -120,
            d = 200,
            c = !1,
            e = 0;
        1 === TOT_MATCH % 2 && (c = !0, e = TOT_MATCH - 1);
        for (var g = 0; g < a.length; g++, d += 150) {
            var f = new createjs.Container;
            f.alpha = 0;
            var h = a[g].result,
                k = g + 1;
            var l = new createjs.Text(h, "28px " + FONT_GAME, "#ff6000");
            l.x = 0;
            l.y = 3;
            l.textAlign = "center";
            l.outline = 5;
            f.addChild(l);
            h = new createjs.Text(h, "28px " + FONT_GAME, TEXT_COLOR);
            h.x = 0;
            h.y = 3;
            h.textAlign = "center";
            f.addChild(h);
            h = new createjs.Text(k + ".", "28px " + FONT_GAME, "#ff6000");
            h.x = -100;
            h.y = 3;
            h.textAlign = "center";
            h.outline = 5;
            f.addChild(h);
            k = new createjs.Text(k + ".", "28px " + FONT_GAME, TEXT_COLOR);
            k.x = h.x;
            k.y = 3;
            k.textAlign = "center";
            f.addChild(k);
            k = s_oSpriteLibrary.getSprite("flags_small");
            (new CFlag(-65, 15, a[g].player_team, !1, k, f)).setScale(.7);
            (new CFlag(65, 15, a[g].opponent_team, !1, k, f)).setScale(.7);
            f.y = .5 * CANVAS_HEIGHT + b;
            0 === g % 2 ? (k = e === g && c ? .5 * CANVAS_WIDTH : .5 * CANVAS_WIDTH - 250, f.x = -100) : (f.x = CANVAS_WIDTH + 100, k = .5 * CANVAS_WIDTH + 250, b += 40);
            createjs.Tween.get(f).wait(d).to({
                x: k,
                alpha: 1
            }, 500, createjs.Ease.cubicIn);
            w.addChild(f)
        }
        s_oStage.addChild(w);
        return {
            offsetY: b + 50,
            time: d + 150
        }
    };
    this.refreshButtonPos = function(a, b) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(c - a, b + d)
    };
    this.unload = function() {
        g.unload();
        g = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oCongratulations = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButMenuRelease =
        function() {
            this.unload();
            s_oMain.gotoMenu()
        };
    s_oCongratulations = this;
    this._init(a, f)
}
var s_oCongratulations = null;

function CCreditsPanel() {
    var a, f, b, c, d, k, h, g, e, n;
    this._init = function() {
        n = new createjs.Container;
        s_oStage.addChild(n);
        var l = s_oSpriteLibrary.getSprite("msg_box");
        h = new createjs.Shape;
        h.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .5;
        h.on("click", this._onLogoButRelease);
        h.cursor = "pointer";
        n.addChild(h);
        f = createBitmap(l);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        f.regX = .5 * l.width;
        f.regY = .5 * l.height;
        n.addChild(f);
        l = s_oSpriteLibrary.getSprite("but_exit");
        a = .5 * CANVAS_WIDTH +
            330;
        c = new CGfxButton(a, 140, l, n);
        c.addEventListener(ON_MOUSE_UP, this.unload, this);
        k = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, "#ff6000");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 200;
        k.outline = 5;
        n.addChild(k);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, TEXT_COLOR);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = k.x;
        d.y = k.y;
        n.addChild(d);
        l = s_oSpriteLibrary.getSprite("logo_ctl");
        b = createBitmap(l);
        b.regX = l.width / 2;
        b.regY = l.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = 300;
        n.addChild(b);
        e = new createjs.Text("www.codethislab.com", "36px " + FONT_GAME, "#ff6000");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = 430;
        e.outline = 5;
        n.addChild(e);
        g = new createjs.Text("www.codethislab.com", "36px " + FONT_GAME, TEXT_COLOR);
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = e.x;
        g.y = e.y;
        n.addChild(g)
    };
    this.unload = function() {
        h.off("click", this._onLogoButRelease);
        c.unload();
        c = null;
        s_oStage.removeChild(n)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en",
            "_blank")
    };
    this._init()
}

function CPause() {
    var a;
    this._init = function() {
        var f = new createjs.Container;
        f.alpha = 0;
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        var b = new createjs.Shape;
        b.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.hitArea = b;
        a.on("click", function() {});
        f.addChild(a);
        b = new createjs.Text(TEXT_PAUSE, "50px " + FONT_GAME, "#000000");
        b.x = .5 * CANVAS_WIDTH;
        b.y = .5 * CANVAS_HEIGHT - 130;
        b.textAlign = "center";
        b.outline = 5;
        f.addChild(b);
        var c = new createjs.Text(TEXT_PAUSE,
            "50px " + FONT_GAME, TEXT_COLOR);
        c.x = b.x;
        c.y = b.y;
        c.textAlign = "center";
        f.addChild(c);
        b = s_oSpriteLibrary.getSprite("but_continue");
        (new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, b, f)).addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, f);
        s_oStage.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 1
        }, 300, createjs.quartOut)
    };
    this.unload = function() {
        a.off("click", function() {});
        s_oStage.removeChild(void 0)
    };
    this._onLeavePause = function(a) {
        createjs.Tween.get(a).to({
            alpha: 0
        }, 300, createjs.quartIn).call(function() {
            s_oInterface.unloadPause();
            s_oGame.unpause(!0)
        })
    };
    this._init();
    return this
}

function CAreYouSurePanel(a) {
    var f, b, c, d, k, h, g;
    this._init = function() {
        h = new createjs.Container;
        h.visible = !1;
        e.addChild(h);
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .5;
        g.on("click", function() {});
        h.addChild(g);
        var a = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(a);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        f.regX = .5 * a.width;
        f.regY = .5 * a.height;
        h.addChild(f);
        b = new createjs.Text(TEXT_ARE_SURE, "50px " + FONT_GAME, "#ff6000");
        b.x = CANVAS_WIDTH /
            2;
        b.y = 250;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.outline = 5;
        h.addChild(b);
        c = new createjs.Text(b.text, "50px " + FONT_GAME, TEXT_COLOR);
        c.x = b.x;
        c.y = b.y;
        c.textAlign = "center";
        c.textBaseline = "middle";
        h.addChild(c);
        d = new CGfxButton(CANVAS_WIDTH / 2 + 310, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_yes"), h);
        d.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        k = new CGfxButton(CANVAS_WIDTH / 2 - 310, .5 * CANVAS_HEIGHT + 150, s_oSpriteLibrary.getSprite("but_not"), h);
        k.addEventListener(ON_MOUSE_UP, this._onButNo,
            this)
    };
    this.show = function() {
        s_oGame.unpause(!1);
        h.visible = !0
    };
    this._onButYes = function() {
        s_oGame.unpause(!0);
        s_oGame.onExit();
        g.removeAllEventListeners()
    };
    this._onButNo = function() {
        s_oGame.unpause(!0);
        h.visible = !1;
        g.removeAllEventListeners()
    };
    var e = a;
    this._init()
}

function CVector2(a, f) {
    var b, c;
    this._init = function(a, f) {
        b = a;
        c = f
    };
    this.add = function(a, f) {
        b += a;
        c += f
    };
    this.addV = function(a) {
        b += a.getX();
        c += a.getY()
    };
    this.scalarDivision = function(a) {
        b /= a;
        c /= a
    };
    this.subtract = function(a) {
        b -= a.getX();
        c -= a.getY()
    };
    this.scalarProduct = function(a) {
        b *= a;
        c *= a
    };
    this.invert = function() {
        b *= -1;
        c *= -1
    };
    this.dotProduct = function(a) {
        return b * a.getX() + c * a.getY()
    };
    this.set = function(a, f) {
        b = a;
        c = f
    };
    this.setV = function(a) {
        b = a.getX();
        c = a.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + c * c)
    };
    this.length2 = function() {
        return b * b + c * c
    };
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a, c /= a)
    };
    this.angleBetweenVectors = function(a) {
        a = Math.acos(this.dotProduct(a) / (this.length() * a.length()));
        return !0 === isNaN(a) ? 0 : a
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(b, c);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = b;
        b = -c;
        c = a
    };
    this.rot90CW = function() {
        var a = b;
        b = c;
        c = -a
    };
    this.getRotCCW = function(a) {
        a.set(b, c);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(b, c);
        a.rot90CW()
    };
    this.ceil = function() {
        b =
            Math.ceil(b);
        c = Math.ceil(c)
    };
    this.round = function() {
        b = Math.round(b);
        c = Math.round(c)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " + c
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + c + "")
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return c
    };
    this.rotate = function(a) {
        var d = b,
            f = c;
        b = d * Math.cos(a) + f * Math.sin(a);
        c = d * -Math.sin(a) + f * Math.cos(a)
    };
    this._init(a, f)
}

function CEdge(a, f, b, c) {
    var d = null,
        k = null,
        h = null,
        g = null,
        e = null;
    this._init = function(a, b, d, c) {
        this.set(a, b, d, c)
    };
    this.destroy = function() {
        e = g = h = k = d = null
    };
    this.render = function(a) {
        a.moveTo(d.x, d.y);
        a.lineTo(k.x, k.y)
    };
    this.toString = function(a) {
        trace(a + " " + d.x + " " + d.y + " " + k.x + " " + k.y)
    };
    this.add = function(a) {
        d.addV(a);
        k.addV(a)
    };
    this.set = function(a, b, c, e) {
        d = new CVector2;
        k = new CVector2;
        d.set(a, b);
        k.set(c, e);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.scale = function(a) {
        d.scalarProduct(a);
        k.scalarProduct(a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.calculateNormal = function() {
        e = null;
        e = new CVector2;
        e.setV(k);
        e.subtract(d);
        e.rot90CCW();
        e.normalize()
    };
    this.calculateCenter = function() {
        h = null;
        h = centerBetweenPointsV2(d, k);
        g = new CVector2;
        g.setV(e);
        g.scalarProduct(5);
        g.addV(h)
    };
    this.getPointA = function() {
        return d
    };
    this.m_pCenter = function() {
        return h
    };
    this.getPointB = function() {
        return k
    };
    this.getNormal = function() {
        return e
    };
    this.renderNormal = function(a) {
        a.moveTo(h.x, h.y);
        a.lineTo(g.x, g.y)
    };
    this._init(a, f,
        b, c);
    return this
}

function CArrow(a, f, b) {
    var c, d, k, h, g, e, n, l, p;
    this._init = function(a, b) {
        c = new createjs.Container;
        c.x = a;
        c.y = b;
        q.addChild(c);
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.2)").drawCircle(0, 0, 2);
        c.addChild(l);
        p = new createjs.Shape;
        p.graphics.setStrokeDash([14, 14], 2);
        p.graphics.setStrokeStyle(5);
        p.graphics.beginStroke("rgba(255,255,255,1)");
        p.graphics.moveTo(0, 0);
        p.graphics.lineTo(0, 0);
        c.addChild(p);
        var f = s_oSpriteLibrary.getSprite("arrow");
        k = createBitmap(f);
        k.regY = .5 * f.height;
        c.addChild(k);
        h =
            createBitmap(s_oSpriteLibrary.getSprite("arrow_fill"));
        h.regY = .5 * f.height;
        c.addChild(h);
        e = f.width;
        n = f.height;
        d = new createjs.Shape;
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(k.x, k.y, 0, n);
        d.regY = .5 * n;
        c.addChild(d);
        f = s_oSpriteLibrary.getSprite("arrow_frame");
        g = createBitmap(f);
        g.regX = 0;
        g.regY = .5 * f.height;
        c.addChild(g);
        h.mask = d
    };
    this.unload = function() {
        q.removeChild(c)
    };
    this.setVisible = function(a) {
        c.visible = a
    };
    this.setAngle = function(a) {
        c.rotation = a
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    this.setX =
        function(a) {
            c.x = a
        };
    this.setY = function(a) {
        c.y = a
    };
    this.getX = function() {
        return c.x
    };
    this.getY = function() {
        return c.y
    };
    this.mask = function(a) {
        d.graphics.clear();
        a = Math.floor(a * e / 100);
        d.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(k.x, k.y, a, n)
    };
    this.circle = function(a) {
        a = Math.floor(a * e / 100);
        l.graphics.clear();
        l.graphics.beginFill("rgba(0,0,0,0.2)").drawCircle(0, 0, a);
        p.graphics.clear();
        p.graphics.setStrokeDash([14, 14], 2);
        p.graphics.setStrokeStyle(5);
        p.graphics.beginStroke("rgba(255,255,255,1)");
        p.graphics.moveTo(0,
            0);
        p.graphics.lineTo(-a, 0)
    };
    this.animateMask = function(a) {
        var b = this;
        createjs.Tween.get(d.graphics.command).to({
            w: e
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(d.graphics.command).to({
                w: 0
            }, a, createjs.Ease.cubicInOut).call(function() {
                b.animateMask(a)
            })
        });
        createjs.Tween.get(l.graphics.command).to({
            radius: e
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(l.graphics.command).to({
                radius: 0
            }, a, createjs.Ease.cubicInOut)
        });
        createjs.Tween.get(p.graphics.command).to({
                x: -e
            },
            a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(p.graphics.command).to({
                x: 0
            }, a, createjs.Ease.cubicInOut)
        })
    };
    this.animateRotation = function(a) {
        var b = this;
        createjs.Tween.get(c).to({
            rotation: 35
        }, a, createjs.Ease.cubicInOut).call(function() {
            createjs.Tween.get(c).to({
                rotation: -35
            }, a, createjs.Ease.cubicInOut).call(function() {
                b.animateRotation(a)
            })
        })
    };
    var q = b;
    this._init(a, f);
    return this
}

function CLevelScoreBoard(a, f, b) {
    var c, d, k, h, g;
    this._init = function(a, b, f) {
        c = {
            x: b,
            y: f
        };
        d = new createjs.Container;
        d.x = c.x;
        d.y = c.y;
        k = createBitmap(a);
        k.x = 0;
        k.y = 0;
        k.regX = 0;
        k.regY = 0;
        d.addChild(k);
        g = new createjs.Text("0 pt", "22px " + FONT_GAME, "#ff6000");
        g.x = .5 * a.width;
        g.y = .5 * a.height;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.outline = 5;
        d.addChild(g);
        h = new createjs.Text("0 pt", "22px " + FONT_GAME, TEXT_COLOR);
        h.x = .5 * a.width;
        h.y = .5 * a.height;
        h.textAlign = "center";
        h.textBaseline = "middle";
        d.addChild(h);
        s_oStage.addChild(d)
    };
    this.getStartPosition = function() {
        return c
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this.refresh = function(a) {
        h.text = a + " " + TEXT_PT;
        g.text = h.text
    };
    this._init(a, f, b);
    return this
}

function CArrowPlayerSelected(a, f, b, c) {
    var d, k;
    this._init = function(a, b, c) {
        k = createBitmap(c);
        k.x = a;
        k.y = b;
        k.regX = .5 * c.width;
        k.regY = .5 * c.height;
        d = b;
        h.addChild(k)
    };
    this.unload = function() {
        this.removeTween();
        h.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this.setPosition = function(a, b) {
        k.x = a;
        d = k.y = b
    };
    this.animation = function() {
        var a = this;
        createjs.Tween.get(k).to({
            y: d + Y_POS_ARROW_SELECTED
        }, 400, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(k).to({
                y: d - Y_POS_ARROW_SELECTED
            }, 400, createjs.Ease.cubicOut).call(function() {
                a.animation()
            })
        })
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this.removeTween = function() {
        createjs.Tween.removeTweens(k)
    };
    var h = c;
    this._init(a, f, b);
    return this
}

function CInvisibleCollision(a, f, b, c, d, k) {
    var h, g, e, n, l, p, q, u, w;
    this._init = function(a, b, c, d, f) {
        p = c;
        SHOW_COLLISION && (c = new createjs.Graphics, c.beginFill(createjs.Graphics.getRGB(255, 0, 0)), c.drawCircle(0, 0, f), e = new createjs.Shape(c), e.x = a, e.y = b, t.addChild(e));
        u = new CVector2;
        u.set(a, b);
        w = new CVector2;
        w.set(0, 0);
        n = f;
        l = f * f;
        q = d;
        h = a;
        g = b
    };
    this.getX = function() {
        return u.getX()
    };
    this.getY = function() {
        return u.getY()
    };
    this.resetPos = function() {
        SHOW_COLLISION && (e.x = h, e.y = g);
        u.set(h, g)
    };
    this.isGoalKeeper = function() {
        return !1
    };
    this.setPosition = function(a, b) {
        SHOW_COLLISION && (null !== a && (e.x = a), null !== b && (e.y = b))
    };
    this.rotate = function(a) {
        e.scaleX = a
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this.unload = function() {
        SHOW_COLLISION && t.removeChild(e)
    };
    this.vPos = function() {
        return u
    };
    this.getRadius = function() {
        return n
    };
    this.getID = function() {
        return p
    };
    this.type = function() {
        return q
    };
    this.getRadiusQuadro = function() {
        return l
    };
    this.getChildIndex = function() {
        SHOW_COLLISION && t.getChildIndex(e)
    };
    this.setChildIndex = function(a) {
        SHOW_COLLISION &&
            t.setChildIndex(e, a)
    };
    this.getObject = function() {
        return SHOW_COLLISION ? e : null
    };
    this.unload = function() {
        SHOW_COLLISION && t.removeChild(e);
        e = null
    };
    var t = k;
    this._init(a, f, b, c, d);
    return this
};