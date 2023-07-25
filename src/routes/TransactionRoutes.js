const express = require('express')
const router = express.Router()
const transactionController = require("../app/controller/TransactionController")


router.post('/buyproduct/:id', transactionController.buyProduct);
router.get('/receipt', transactionController.showReceipt)

module.exports = router;