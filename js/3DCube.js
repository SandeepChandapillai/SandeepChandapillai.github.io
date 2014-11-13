// JavaScript source code
var xAngle = 0, yAngle = 0;
document.getElementById('body').keydown(function (evt) {
    switch (evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;
        case 38: // up
            xAngle += 90;
            evt.preventDefault();
            break;
        case 39: // right
            yAngle += 90;
            break;
        case 40: // down
            xAngle -= 90;
            evt.preventDefault();
            break;
    };
    document.getElementById('cube').style[prop] = "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)";
});