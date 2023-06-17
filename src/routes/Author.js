'use strict'
var express = require('express')
var Author_1 = require('../controllers/Author')
var router = express.Router()
router.post('/create', Author_1.default.createAuthor)
router.get('/get/:authorId', Author_1.default.readAuthor)
router.get('/get', Author_1.default.readAll)
router.patch('/update/:authorId', Author_1.default.UpdateAuthor)
router.delete('/delete/:authorId', Author_1.default.DeleteAuthor)
module.exports = router
