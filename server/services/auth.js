const { PrismaClient } =  require('@prisma/client')
const prisma = new PrismaClient()

const Jwt = require('./jwt')

module.exports = class Auth{

    static login(email, password) {

        return new Promise(async (resolve, reject) => {

            try {
                const dev = await prisma.recruiter.findFirst({ where: { email: email } })

                if(dev.password === password){
                    const token = await Jwt.create(dev.id)
                    resolve(token)
                }
                else{
                    reject('Wrong password!')
                }

            }
            catch(err){
                reject('User not found!')
            }

        })

    }
}