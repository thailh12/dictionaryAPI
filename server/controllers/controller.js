const model = require('../../models');

function lookUp(req, res) {
    console.log(req);
    model.Dictionary.find({where: {word: req.params.word}})
        .then(word => res.json(word))
        .catch(e => res.json(e));
}

module.exports = {
    lookUp
};
