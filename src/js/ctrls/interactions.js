import {menu} from '../data/menu';


export default () => {

    let width = window.innerWidth;
    let height = window.innerHeight;

    let force = d3.layout.force()
        .size([width, height]);

    let svg = d3.select('body').append('svg')
        .attr('class', 'menu')
        .attr('width', width)
        .attr('height', height);

    force
        .nodes(menu.nodes)
        .links(menu.links)
        .charge(charge)
        .linkDistance(width/10)
        .friction(0.9)
        .gravity(0.4)
        .start();

    var link = svg.selectAll('.menu__link')
        .data(menu.links)
        .enter().append('line')
        .attr('class', 'menu__link')
        .style('stroke-width', 2);

    var node = svg.selectAll('.node')
        .data(menu.nodes)
        .enter().append('g')
        .attr('class', 'menu__node')
        .call(force.drag);

    node.append('circle')
        .attr('class', 'node__circle')
        .attr('r', radius)

    node.append('text')
        .attr('class', 'node__text')
        .attr('text-anchor', 'middle')
        .attr('y', 8)
        .text(function(d) { return d.name; });

    force.on('tick', function() {
        link.attr('x1', function(d) { return d.source.x; })
            .attr('y1', function(d) { return d.source.y; })
            .attr('x2', function(d) { return d.target.x; })
            .attr('y2', function(d) { return d.target.y; });

        node.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
    });

    function charge(d) {
        if (d.index === 0) return -20000;
        else return -5000;
    }

    function radius(d) {
        if (d.index === 0) return 45;
        else return 25;
    }

    // function origin() {
    //     for (let i = 0; i < menu.nodes.length; i++) {
    //         menu.nodes[i].x = width / 2;
    //         menu.nodes[i].y = height / 2;
    //     }
    // }
    // origin();

}
