const express = require('express')
const router = express.Router()
const {ProductDisplayingControllerInstance} = require("../app/controller/ProductDisplayingController")


router.get('/', ProductDisplayingControllerInstance.getAllProduct);
router.post('/login', ProductDisplayingControllerInstance.login);
router.post('/search', ProductDisplayingControllerInstance.search);
router.get('/:id/productoptions', ProductDisplayingControllerInstance.getProductOptions);
router.get('/:id', ProductDisplayingControllerInstance.getOneProduct);

module.exports = router;