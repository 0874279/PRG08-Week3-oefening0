"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ball = (function () {
    function Ball(minWidth, maxWidth, type) {
        if (type === void 0) { type = "ball"; }
        this.gravity = 0.1;
        this.friction = 0.9;
        this.x = 0;
        this.y = 0;
        this.speedX = 5;
        this.speedY = -3;
        this.minWidth = 0;
        this.maxWidth = 0;
        this.maxHeight = 0;
        var content = document.getElementsByTagName("content")[0];
        this.htmlElement = document.createElement(type);
        content.appendChild(this.htmlElement);
        maxWidth -= this.htmlElement.clientWidth;
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth;
        this.y = 100;
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.maxHeight = window.innerHeight - this.htmlElement.clientHeight;
    }
    Ball.prototype.draw = function () {
        this.htmlElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Bouncing = (function () {
    function Bouncing(s) {
        s.x += s.speedX;
        s.y += s.speedY;
        if (s.x < s.minWidth || s.x > s.maxWidth) {
            s.speedX *= -1;
        }
        if (s.y < 0 || s.y > s.maxHeight) {
            s.speedY *= -1;
        }
        s.draw();
    }
    return Bouncing;
}());
var Floating = (function () {
    function Floating(m) {
        if (m.x < m.minWidth) {
            m.x = m.minWidth;
            m.speedX *= -1;
            m.speedX *= m.friction;
        }
        if (m.x > m.maxWidth) {
            m.x = m.maxWidth;
            m.speedX *= -1;
            m.speedX *= m.friction;
        }
        if (m.y + m.speedY > m.maxHeight) {
            m.y = m.maxHeight;
            m.speedY *= -1;
            m.speedY *= m.friction;
            m.speedX *= m.friction;
        }
        else {
            m.speedY += m.gravity;
        }
        m.x += m.speedX;
        m.y += m.speedY;
        m.draw();
    }
    return Floating;
}());
var Main = (function () {
    function Main() {
        this.balls = [];
        this.balls.push(new MoonBall(0, window.innerWidth / 2));
        this.balls.push(new SpaceBall(window.innerWidth / 2, window.innerWidth));
        this.gameLoop();
    }
    Main.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Main;
}());
window.addEventListener("load", function () { return new Main(); });
var MoonBall = (function (_super) {
    __extends(MoonBall, _super);
    function MoonBall(minWidth, maxWidth) {
        var _this = _super.call(this, minWidth, maxWidth, "basketball") || this;
        _this.behaviour = Floating;
        return _this;
    }
    MoonBall.prototype.update = function () {
        new Floating(this);
    };
    return MoonBall;
}(Ball));
var SpaceBall = (function (_super) {
    __extends(SpaceBall, _super);
    function SpaceBall(minWidth, maxWidth) {
        var _this = _super.call(this, minWidth, maxWidth) || this;
        _this.behaviour = Bouncing;
        return _this;
    }
    SpaceBall.prototype.update = function () {
        new Bouncing(this);
    };
    return SpaceBall;
}(Ball));
//# sourceMappingURL=main.js.map