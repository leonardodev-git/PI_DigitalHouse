const { default: axios } = require('axios');
const { Servico } = require('../bd_models');

const teste = (req, res) => {
  const agendamento = [];
  agendamento.push(req.body)
  console.log(agendamento)

}

const events = async (req, res) => {
  const { start, end } = req.body //como pegar esse cara

  return {
    title,
    startt,
    endd,
  };
}



module.exports = {
  teste,
  events
};