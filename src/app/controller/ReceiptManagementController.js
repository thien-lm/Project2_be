const TransactionService = require('../service/TransactionService')

class RecieptManagementController {

    getAllReceipt(req, res, next) {
        TransactionService.getAllReceipt()
            .then(
                data => res.json(data)
            )
            .catch(
                error => console.log(error)
            )
    }

    getOneReceipt(req, res, next) {
        let receiptID = req.params.id
        TransactionService.getOneReceipt(receiptID)
            .then(
                data => res.json(data)
            )
            .catch(
                error => console.log(error)
            )
    }

    updateReceipt(req, res, next) {
        TransactionService.updateReceipt(req.body)
            .then(
                () => {
                    res.send("update thanh cong")
                }
            )
            .catch(
                error => {
                    console.log(error);
                    res.status(500).send("Error occurred while updating receipt");
                }
            )
    }
}

module.exports = new RecieptManagementController();