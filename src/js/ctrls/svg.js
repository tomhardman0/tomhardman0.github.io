import { nodes } from '../data/nodes'

export default () => {

    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    let container = document.querySelector('.js-nodes');

    let force = d3.layout.force()
        .size([width, height]);

    let svg = d3.select('.js-nodes').append('svg')
        .attr('class', 'svg-interaction');

    force
        .nodes(nodes)
        .charge(-1000)
        .friction(0.95)
        .gravity(0.5)
        .start();

    var node = svg.selectAll('.node')
        .data(nodes)
        .enter().append('g');

    node.append('text')
        .attr('fill', fill)
        .attr('stroke', fill)
        .style('font-family', 'Poiret One')
        .style('font-variant', 'small-caps')
        .style('font-size', '1.5em')
        .text((d) => d.name);

    force.on('tick', () => {
        node.attr('transform', (d) => 'translate(' + d.x + ',' + d.y + ')');
    });

    function fill() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function keepMoving() {
        let gravity = Math.random();
        let charge = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            force.gravity(gravity);
            force.charge(-charge);
            force.start();
            keepMoving();
        }, 1500);
    }
    keepMoving();

    function radius(d) {
        return Math.floor(Math.random() * 20) + 8;
    }

}
