export default () => {
    const textElems = document.querySelectorAll('.js-text');
    const string = 'Greater than development.';

    const updateText = (element, index) => {
        setTimeout(() => {
            element.innerHTML = string.substring(0, index);
        }, 70 * index);
    };

    const typeText = (element, index) => {
        for (var i=0; i<= string.length; i++) {
            updateText(element, i)
        }

        setTimeout(() => {
            element.innerHTML = ''
            Array.prototype.forEach.call(textElems, typeText);
        }, 5000);
    };

    Array.prototype.forEach.call(textElems, typeText);
}
