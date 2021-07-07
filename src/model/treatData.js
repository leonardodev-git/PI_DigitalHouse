
let listAllProfessional = (listAll) => {
    let newList = []
    for (let professional of listAll) {
        newList.push({
            id: professional.id,
            nome: professional.dataValues.nome + " " + professional.dataValues.sobrenome,
            avatar: professional.dataValues.avatar
        })
    }
    return newList
}

let informationAndServices = (dados) => {

    let listaServicos = []
    for (servico of dados.dataValues.Servicos) {
        listaServicos.push(servico.dataValues.nome)
    }
    return {
        id: dados.dataValues.id,
        nome: dados.dataValues.nome + " " + dados.dataValues.sobrenome,
        avatar: dados.dataValues.avatar,
        servicos: listaServicos
    }

}





module.exports = {
    listAllProfessional,
    informationAndServices,
}