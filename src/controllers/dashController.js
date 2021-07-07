//const listar = require('../../modelsOld/Dash');
//const { Profissionais, Servicos } = require('../bd_models');
const professionalQuery = require('../model/professionalModel')
const treatData = require('../model/treatData')


const index = async (req, res) => {

  let listAll = await professionalQuery.listAll()

  let profissionais = treatData.listAllProfessional(listAll)

  res.render('dash', { barbeiros: profissionais, userSession: req.session.userSession });
}

const agendamento = async (req, res) => {

  let dadosProfissional = await professionalQuery.getProfissional(req.params.nome)

  let informacoes = treatData.informationAndServices(dadosProfissional)

  res.render('agendamento', { barbeiro: informacoes, servicos: informacoes.servicos, userSession: req.session.userSession });
}


const checkout = (req, res) => {
  let teste = req.params
  console.log(teste)

  let lista = listar.listarProfissionais()
  res.render('checkout', { barbeiros: lista, userSession: req.session.userSession })
}

const confirm = (req, res) => {
  res.render('ServiceConfirm')
}



module.exports = {
  index,
  agendamento,
  checkout,
  confirm,
}
