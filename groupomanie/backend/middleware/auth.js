const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' })

/*************************/
/*** Extraction du token */
const extractBearer = authorization => {

    if (typeof authorization !== 'string') {
        return false
    }

    // On isole le token
    const matches = authorization.match(/(Bearer)\s+(\S+)/i)

    return matches && matches[2]

}

/******************************************/
/*** Vérification de la présence du token */
const checkTokenMiddleware = (req, res, next) => {

    const token = req.headers.authorization && extractBearer(req.headers.authorization)
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'Bad Token' })
    }

    console.log("go verify")
    console.log(process.env.RANDOM_TOKEN_SECRET)
    // Vérifier la validité du token
    jwt.verify(token, process.env.RANDOM_TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Bad token' })
        }

        next()
    })
}

module.exports = checkTokenMiddleware
