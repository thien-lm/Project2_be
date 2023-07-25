const TransactionService = require('../service/TransactionService')


class TransactionController {

    buyProduct(req, res, next) {
        try {
            TransactionService.generateReceipt(req.body)
                .then(
                    data => console.log("received request")
                )
                .catch(
                    error => console.log(error)
                )

            TransactionService.updateQuantity(req.body)
                .then(
                    data => res.status(200).send("OK")
                )
                .catch()
        }
        catch (err) {
            console.log(err)
            res.status(500).send("can not create receipt to buy product")
        }
    }

    showReceipt(req, res, next) {
        console.log(req.headers.username)
        TransactionService.getAllUserReceipt(req.headers.username)
            .then(
                data => res.json(data)
            )
            .catch(
                error => console.log(error)
            )
    }
}

module.exports = new TransactionController();