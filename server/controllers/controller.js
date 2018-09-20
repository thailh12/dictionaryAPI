const model = require('../../models');
const Op = model.Sequelize.Op;

function lookUp(req, res) {
    model.Dictionary.find({where: {word: req.params.word}})
        .then(word => res.json(word))
        .catch(e => res.json(e));
}

function search(req, res) {
    let a = `^${req.params.string}`;
    console.log(a);
    model.Dictionary.findAll({
        where: {
            word: {[Op.regexp]: a}
        }
    })
        .then(words => res.json(words))
        .catch(e => res.json(e));
}

module.exports = {
    search,
    lookUp
};
