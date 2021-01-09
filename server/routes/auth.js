const Auth = require('../services/auth')

module.exports = (app) => {

    app.post('/api/login', async (req, res) => {

        console.log(req.body)

        const { email, password } = req.body

        try {
            const token = await Auth.login(email, password)
            res.json(token)
        }
        catch (err) {
            res.status(500).send(err)
        }

    })

}