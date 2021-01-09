const Jwt = require('../services/jwt')

module.exports = async (req, res, next) => {
    
    const token = req.headers['x-access-token']

    if (!token) {
        console.log('User with no token!')
        return res.json({ status: 500, auth: false, message: 'Token não informado.' });
    }
    else {
        try{
            const verify = await Jwt.verify(token)

            if (verify.auth) {
                req.userId = verify.decoded.id
                next();
            }
            else{
                console.log('User with no invalid token!')
                return res.json({ status: 500, auth: false, message: 'Token inválido.' })
            }
        }
        catch(err){
            console.log('User with no invalid token!')
            return res.json({ status: 500, auth: false, message: 'Token inválido.' })
        }
    }
}