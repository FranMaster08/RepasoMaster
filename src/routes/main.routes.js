const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.send('Soy la ruta pricipal')
})
router.get('/datos',(req, res, next) => {
    res.send('Soy la ruta pricipal datos')
})


module.exports = router