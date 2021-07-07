const { check, body } = require('express-validator');

const auth = (req, res, next) => {
    req.session.userSession ? next() : res.redirect("/login")
}

const dateValidation = () => {
    return [
        check("email").isEmail().withMessage("Email invalido"),
        check("senha").isLength({min: 3}).withMessage("Senha deve conter mínimo 6 caracteres"),
        body('confirmarSenha').custom((value, {req}) => {
            if (value !== req.body.senha) {
                throw new Error('Campo senha e confimar senha não coincidem');
            }
            return true;
        })
    ]
}

const inputsValidationSignin = () => {
    return [
        check("email").isEmail().withMessage("Email invalido"),
        check("senha").isLength({min: 3}).withMessage("Senha deve conter mínimo 6 caracteres"),
    ]

}

module.exports = {
    auth,
    dateValidation,
    inputsValidationSignin

}