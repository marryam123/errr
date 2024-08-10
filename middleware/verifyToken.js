const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) =>{
    const { authorization } = req.headers
    console.log(authorization)
    try {
        if (authorization) {
            if (authorization.indexOf("Bearer") === -1) {

                res.send({
                    status: 200,
                    message: "haker no excess"
                })
            }else {
                const token = authorization.slice(7)
                console.log("token", token)

                const JWT_SECRET_KEY = 'attendence'
                const decode = jwt.verify(token, JWT_SECRET_KEY)
                console.log(decode)

                next()
    }
}
    }
catch (e) {
    res.send({
        status: 500,
        message: e.message,
    })
}

}
module.exports = verifyToken