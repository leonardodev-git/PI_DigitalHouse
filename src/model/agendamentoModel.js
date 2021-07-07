const { Agendamentos } = require('../bd_models');

const novoAgendamento = async (params) => await Agendamentos.create(params);

const destroy = async (paramId) => {
    await Agendamentos.destroy({
        where: {
            id: paramId
        }
    });
}

const update = async (Start, End, id) => {
    await Agendamentos.update({
            Start: Start,
            End: End,
        },
        {
            where: {
                id: id
            }
        });
}


module.exports = {
    novoAgendamento,
    destroy,
    update
}