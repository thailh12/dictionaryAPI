const model = require('../../models');
const Op = model.Sequelize.Op;
const sequelize = require('../../models').sequelize;

function lookUp(req, res) {
  model.Dictionary.find({ where: { word: req.params.word } })
    .then(word => res.json(word))
    .catch(e => res.json(e));
}

function search(req, res) {
  let a = `^${req.params.string}`;
  console.log(a);
  sequelize
    .query(`SELECT word FROM dictionary WHERE word REGEXP "${a}"`, {
      model: model.Dictionary
    })
    .then(words => res.json(words))
    .catch(e => res.json(e));
}

module.exports = {
  search,
  lookUp
};
