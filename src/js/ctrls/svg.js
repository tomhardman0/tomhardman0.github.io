export default () => {

    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    let nodes = [];
    let container = document.querySelector('.js-nodes');
    let mouse;

    let force = d3.layout.force()
        .size([width, height]);

    let svg = d3.select('.js-nodes').append('svg')
        .attr('class', 'svg-interaction');

    for (let a=0; a<300; a++) {
        let node = {
            "name": a,
            "group": 1
        };
        nodes.push(node);
    }

    mouse = nodes[0];
    mouse.fixed = true;
    mouse.isMouse = true;

    force
        .nodes(nodes)
        .charge(charge)
        .friction(0.9)
        .gravity(0.4)
        .start();

    var node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('g');

    node.append('circle')
        .attr('fill', fill)
        .attr('r', radius);

    force.on('tick', () => {

        // container.onmousemove = (e) => {
        //     mouse.x = e.clientX;
        //     mouse.y = e.clientY;
        //     force.resume();
        // };
        node.attr('transform', (d) => 'translate(' + d.x + ',' + d.y + ')');
    });

    function fill() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function charge(d) {
        if (d.isMouse) return -800;
        else return -140;
    }

    function radius(d) {
        if (d.isMouse) return 100;
        else return Math.floor(Math.random() * 20) + 8;
    }

}
