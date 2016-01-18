export default (app) => {

    let canvas = document.querySelector('.canvas');
    let context = canvas.getContext('2d');

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    let bodyHeight = document.querySelector('body').clientHeight;

    let bsr = context.webkitBackingStorePixelRatio ? context.webkitBackingStorePixelRatio : 1;
    let dpd = window.devicePixelRatio ? window.devicePixelRatio : 1;
    let pixRatio = dpd === bsr ? 1 : dpd;

    canvas.width = winWidth * pixRatio;
    canvas.height = winHeight * pixRatio;

    let colours = ['255, 105, 180', '255, 131, 0', '102, 255, 0'];

    function draw() {

        setTimeout(() => {
            context.beginPath();
            context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            context.strokeStyle = `rgb(${colours[Math.floor(Math.random()*3)]})`;
            context.closePath();
            context.stroke();

            draw();
        });

    }

    function scroll() {

        setTimeout(() => {
            for (let y = 0; y < Math.floor(bodyHeight); y++) {

                setTimeout(() => {
                    window.scrollTo(0, y);
                }, y*5);

            }
        }, 2000);

    }

    draw();
    scroll();

}
