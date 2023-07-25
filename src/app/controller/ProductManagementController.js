const ProductManagementServices = require("../service/ProductManagementServices")
const {ProductDisplayingController} = require ("./ProductDisplayingController")


class ProductManagementController extends ProductDisplayingController{
    
    updateProduct(req, res, next) {
        ProductManagementServices.updateProduct(req.body)
        .then(
            data => res.send('update product thanh cong')
        )
        .catch(
            error => {
                console.log("khong the update product")
                res.status(500).send("can not update product ")
            }
        )
    }

    deleteProduct(req, res, next) {
        let productID  = req.params.id
        ProductManagementServices.deleteProduct(productID)
        .then(
            data => res.send('xoa product thanh cong')
        )
        .catch(
            error => {
                console.log("khong the xoa product")
                res.status(500).send("can not delete product ")
            }
        )
    }

    createProduct(req, res, next) {
        ProductManagementServices.createProduct(req.body)
        .then(
            data => res.send('tao moi product thanh cong')
        )
        .catch(
            error => {console.log("khong the get variation options")
            res.status(500).send("can not create product ")
        }
        )
    }

    updateProductOptions(req, res, next) {
        ProductManagementServices.updateProductOptions(req.body)
        .then(
            data => res.send('update product options thanh cong')
        )
        .catch(
            error => {
                console.log("update product options failed")
                res.status(500).send("can not update product options")
            }
        )
    }
    
    createProductOptions(req, res, next) {
        ProductManagementServices.createProductOptions(req.body)
        .then(
            data => res.send('create product options thanh cong')
        )
        .catch(
            error => {
                console.log("create product options failed")
            res.status(500).send("can not create product options")
            }
        )
    }
}

module.exports = new ProductManagementController();