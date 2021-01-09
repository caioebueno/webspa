var jwt = require('jsonwebtoken');
const secret = "asd9ewqdans88ds";

module.exports = class Jwt {

    static create(id) {
        return jwt.sign({ id }, secret, { expiresIn: 100000000 });
    }

    static verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve({
                        auth: true,
                        decoded: decoded
                    })
                }
            })
        })
    }

}