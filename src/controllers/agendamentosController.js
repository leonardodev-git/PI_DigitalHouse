const model = require("../model/agendamentoModel");

const create = async (req, res) => {
    // const { Start, End, Valor_Total, Profissional_ID, Cliente_ID, Servico_ID } = (req.body);
    try {
        await model.novoAgendamento( req.body );
        res.status(200).json({ message: "Agendamento successfully created!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        await model.destroy(id);
        res.status(200).json({ message: "Agendamento successfully deleted!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { Start, End } = req.body;

    try {
        await model.update(Start, End, id)
        res.status(200).json({ message: "Agendamento successfully updated!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

module.exports = {
    create,
    destroy,
    update
}