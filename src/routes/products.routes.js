const express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    res.send('Soy una ruta principal de productos')
})



module.exports = router