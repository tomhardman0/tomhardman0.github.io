export default () => {
    const container = document.querySelector('.js-cont');

    window.addEventListener('load', () => {
        container.classList.add('cont--visible')
    });
}
