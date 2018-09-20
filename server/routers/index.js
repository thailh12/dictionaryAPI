const controller = require('../controllers');

module.exports = (app) =>{
    app.get('/lookup', (req, res) => {res.send('api ')});
    app.get('/lookup/:word', controller.ctrl.lookUp);
    app.param('word',controller.ctrl.lookUp );
    app.get('/search', (req, res) =>{ res.json('search')});
    app.get('/search/:string', controller.ctrl.search);
    app.param('string', controller.ctrl.search);
};