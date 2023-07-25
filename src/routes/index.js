const ProductDisplayingRoutes = require('./ProductDispalyingRoutes')
const ProductManagementRoutes = require('./ProductManagementRoutes')
const TransactionRoutes = require("./TransactionRoutes")
const ReceiptManagementRoutes = require('./ReceiptManagementRoutes')

function route(app) {
    app.use("/product", ProductDisplayingRoutes);
    app.use("/admin/product", ProductManagementRoutes);
    app.use("/buy", TransactionRoutes);
    app.use("/receipt", ReceiptManagementRoutes)
}


module.exports = route;