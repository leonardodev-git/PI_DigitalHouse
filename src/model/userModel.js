const { Clientes } = require('../bd_models');


const searchUsers = async (email) => await Clientes.findOne({
    where: {
        email: email
    }
})

const deletar = async (id) => await Clientes.destroy({
    where: {
        id: id
    }
});

const update = async (params, userId) => await Clientes.update({
    nome: params.nome,
    sobrenome: params.sobrenome,
    email: params.email
},
    {
        where: {
            id: userId
        }
    });



module.exports = {
    searchUsers,
    deletar,
    update
}