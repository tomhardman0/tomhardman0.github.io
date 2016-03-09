(function () {
  'use strict';

  var nodes = [{ "name": "HTML5", "group": 1 }, { "name": "CSS3", "group": 1 }, { "name": "JavaScript", "group": 1 }, { "name": "ES6", "group": 1 }, { "name": "ES7", "group": 1 }, { "name": "Babel", "group": 1 }, { "name": "AngularJS", "group": 1 }, { "name": "BackboneJS", "group": 1 }, { "name": "Node.js", "group": 1 }, { "name": "Express", "group": 1 }, { "name": "Koa", "group": 1 }, { "name": "Gulp", "group": 1 }, { "name": "Grunt", "group": 1 }, { "name": "Jasmine", "group": 1 }, { "name": "Karma", "group": 1 }, { "name": "Istanbul", "group": 1 }, { "name": "Ubuntu", "group": 1 }, { "name": "D3", "group": 1 }, { "name": "Jade", "group": 1 }, { "name": "GIT", "group": 1 }, { "name": "CLI", "group": 1 }];

  var svg = (function () {

      var width = window.innerWidth / 2;
      var height = window.innerHeight / 2;
      var container = document.querySelector('.js-nodes');

      var force = d3.layout.force().size([width, height]);

      var svg = d3.select('.js-nodes').append('svg').attr('class', 'svg-interaction');

      force.nodes(nodes).charge(-1000).friction(0.95).gravity(0.5).start();

      var node = svg.selectAll('.node').data(nodes).enter().append('g');

      node.append('text').attr('fill', fill).attr('stroke', fill).style('font-family', 'Poiret One').style('font-variant', 'small-caps').style('font-size', '1.5em').text(function (d) {
          return d.name;
      });

      force.on('tick', function () {
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

      function keepMoving() {
          var gravity = Math.random();
          var charge = Math.floor(Math.random() * 3000) + 1000;
          setTimeout(function () {
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
  })

  var intro = (function () {
      var container = document.querySelector('.js-cont');

      window.addEventListener('load', function () {
          container.classList.add('cont--visible');
      });
  })

  var controllers = [svg, intro];

  controllers.forEach(function (ctrl) {
    return ctrl();
  });

}());
//# sourceMappingURL=app.js.map