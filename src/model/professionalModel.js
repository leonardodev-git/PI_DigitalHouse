const { Profissionais, Servicos } = require('../bd_models');

const listAll = () => Profissionais.findAll()

let getProfissional = (paramId) => {
    return Profissionais.findOne({
        where: {
            id: paramId
        }, include: [{
            model: Servicos,
            attributes: ['nome']
        }]
    })
}


module.exports = {
    listAll,
    getProfissional,
}