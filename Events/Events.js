var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('myCustomEvent', function (parameter1, parameter2) {
    console.log(parameter1 + parameter2);
});
eventEmitter.on('myCustomEvent', function (parameter1, parameter2, parameter3) {
    console.log(parameter1 + parameter2 + parameter3);
});
setTimeout(function () {
    eventEmitter.emit('myCustomEvent', 'After timeout, then ', 'display these two parameters.', 'This is for the functional of parameter3 only!');
}, 5000);