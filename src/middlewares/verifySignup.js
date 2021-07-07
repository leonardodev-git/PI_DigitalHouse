const search = require('../model/userModel')

const checkUserExist = async (req, res, next) => {

    await search.searchUsers(req.body.email).then(user => {
        if (user) {
            res.status(400).json({ message: "User already has registration!" })
            return;
        }
        next();
    });
};

const checkUserCorrect = async (req, res, next) => {
    console.log(req.body.email)
    await search.searchUsers(req.body.email).then(user => {
        console.log(user)

        if (!user) res.status(400).json({ message: "User not registered!" })

    });
    next()
};



module.exports = {
    checkUserExist,
    checkUserCorrect
}