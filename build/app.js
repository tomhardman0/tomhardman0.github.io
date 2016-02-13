(function () {
    'use strict';

    var svg = (function () {

        var width = window.innerWidth / 2;
        var height = window.innerHeight / 2;
        var nodes = [];
        var container = document.querySelector('.js-nodes');
        var mouse = undefined;

        var force = d3.layout.force().size([width, height]);

        var svg = d3.select('.js-nodes').append('svg').attr('class', 'svg-interaction');

        for (var a = 0; a < 300; a++) {
            var _node = {
                "name": a,
                "group": 1
            };
            nodes.push(_node);
        }

        mouse = nodes[0];
        mouse.fixed = true;
        mouse.isMouse = true;

        force.nodes(nodes).charge(charge).friction(0.9).gravity(0.4).start();

        var node = svg.selectAll('.node').data(nodes).enter().append('g');

        node.append('circle').attr('fill', fill).attr('r', radius);

        force.on('tick', function () {

            // container.onmousemove = (e) => {
            //     mouse.x = e.clientX;
            //     mouse.y = e.clientY;
            //     force.resume();
            // };
            node.attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });
        });

        function fill() {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }

        function charge(d) {
            if (d.isMouse) return -800;else return -140;
        }

        function radius(d) {
            if (d.isMouse) return 100;else return Math.floor(Math.random() * 20) + 8;
        }
    })

    var controllers = [svg];

    controllers.forEach(function (ctrl) {
      return ctrl();
    });

}());
//# sourceMappingURL=app.js.map