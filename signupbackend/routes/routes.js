const { response, request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        orgid: request.body.orgid,
        fullname: request.body.fullname,
        username: request.body.username,
        designation: request.body.designation,
        password: securePassword,
        age: request.body.age
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
            //response.send('home.ejs')
        })
        .catch(error => {
            response.json(error)
        })

})

module.exports = router