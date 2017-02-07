(function () {
    'use strict';

    var intro = (function () {
        var textElems = document.querySelectorAll('.js-text');
        var string = 'Greater than development.';

        var updateText = function updateText(element, index) {
            setTimeout(function () {
                element.innerHTML = string.substring(0, index);
            }, 70 * index);
        };

        var typeText = function typeText(element, index) {
            for (var i = 0; i <= string.length; i++) {
                updateText(element, i);
            }

            setTimeout(function () {
                element.innerHTML = '';
                Array.prototype.forEach.call(textElems, typeText);
            }, 5000);
        };

        Array.prototype.forEach.call(textElems, typeText);
    })

    var controllers = [intro];

    controllers.forEach(function (ctrl) {
      return ctrl();
    });

}());
//# sourceMappingURL=app.js.map