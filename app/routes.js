var path = require('path');
var config = require('./config')

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views', 'index.html'));
  })

  app.get('/wip/', function(req, res) {
    res.render('pages/home', {
      title: config.app.name
    })
  })

}
