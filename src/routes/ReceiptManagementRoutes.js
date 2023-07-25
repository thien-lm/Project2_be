const express = require('express')
const router = express.Router()
const RecieptManagementController = require("../app/controller/ReceiptManagementController")


router.get('/', RecieptManagementController.getAllReceipt);
router.get('/:id', RecieptManagementController.getOneReceipt);
router.put('/:id', RecieptManagementController.updateReceipt)

module.exports = router;