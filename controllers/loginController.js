const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const authUser = (req, res) => {
  const user = modelsLogin.userValidation(req.body);
  if (user.status) {
    req.session.userSession = user;
    return res.redirect('/dash')
  }
  
  return res.render('login', { msg: user.msg });


}

module.exports = {
  index,
  authUser,
};