import express from 'express'
import controller from '../controllers/PinewoodBike'

const router = express.Router()

router.post('/create', controller.createPinewoodBike)
router.get('/get/:pinewoodBikeId', controller.readPinewoodBike)
router.get('/get', controller.readAll)
router.patch('/update/:pinewoodBikeId', controller.updatePinewoodBike)
router.delete('/delete/:pinewoodBikeId', controller.deletePinewoodBike)
router.get('/filterPrice', controller.filterByPriceRange)
router.get('/filterByCategory', controller.filterByCategory)
router.get('/getAllModels', controller.getAllModels)
router.get('/filterByPriceCategory', controller.filterByPriceCategory)

export = router
