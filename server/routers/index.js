const controller = require('../controllers');

module.exports = (app) =>{
    app.get('/lookup', (req, res) => {res.send('api ')});
    app.get('/lookup/:word', controller.ctrl.lookUp);
    app.param('word',controller.ctrl.lookUp );
};