function header(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, content-type, Accept"
    )
    next()
}

module.exports = header