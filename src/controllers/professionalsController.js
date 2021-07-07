let querys = require('../model/professionalModel')
let treatData = require('../model/treatData')

let all = async (req, res) => {
    let allProfissionals = await querys.listAll()

    res.status(200).json({ allProfissionals })
}

let details = async (req, res) => {

    let allDetails = await querys.getProfissional(req.params.id)
    if (allDetails) {
        let professionalDetails = treatData.informationAndServices(allDetails)
        res.status(200).json({ professionalDetails })
    }
    res.status(400).json({ messege: 'Professional not found!' })
}
module.exports = {
    all,
    details
}