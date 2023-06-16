'use strict'
var express = require('express')
var PinewoodBike_1 = require('../controllers/PinewoodBike')
var router = express.Router()
router.post('/create', PinewoodBike_1.default.createPinewoodBike)
router.get('/get/:pinewoodBikeId', PinewoodBike_1.default.readPinewoodBike)
router.get('/get', PinewoodBike_1.default.readAll)
router.patch('/update/:pinewoodBikeId', PinewoodBike_1.default.updatePinewoodBike)
router.delete('/delete/:pinewoodBikeId', PinewoodBike_1.default.deletePinewoodBike)
router.get('/filterPrice', PinewoodBike_1.default.filterByPriceRange)
router.get('/filterByCategory', PinewoodBike_1.default.filterByCategory)
router.get('/getAllModels', PinewoodBike_1.default.getAllModels)
router.get('/filterByPriceCategory', PinewoodBike_1.default.filterByPriceCategory)
module.exports = router
