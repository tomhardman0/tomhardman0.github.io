var config = require('./config')

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('pages/home', {
            title: config.app.name
        })
    })

    app.get('/bg', function(req, res) {
        res.render('pages/bg', {
            title: config.app.name
        })
    })

}
