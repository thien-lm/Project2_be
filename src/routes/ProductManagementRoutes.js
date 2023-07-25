const express = require('express')
const router = express.Router()
const ProductManagementController = require("../app/controller/ProductManagementController")


router.get('/', ProductManagementController.getAllProduct);
router.get('/:id/productoptions', ProductManagementController.getProductOptions);
router.post('/:id/productoptions', ProductManagementController.createProductOptions)
router.put('/:id/productoptions', ProductManagementController.updateProductOptions)
router.get('/:id', ProductManagementController.getOneProduct);
router.put('/:id', ProductManagementController.updateProduct);
router.delete('/:id', ProductManagementController.deleteProduct);
router.post('/createproduct', ProductManagementController.createProduct)


module.exports = router;