var methods = {};
this.output = 5000;

methods.updateServer = function () {
    console.log('Important function');
};

methods.eatCookies = function () {
    console.log('Chocolate cookies');
};

methods.node = function () {
    console.log('Nodejs, is Awesome !');
};

methods.sumNumbers = function (a, b) {
    output = a + b;
    return a + b;
};

methods.circleCircum = function (r) {
    output = 2 * Math.PI * r;
    return 2 * Math.PI * r;
};

methods.rectangleArea = function (a, b) {
    return a * b;
};

exports.data = methods;