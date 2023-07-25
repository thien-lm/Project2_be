class Receipt {
    constructor(id, productOptionID, quantity, paymentMethod, cost, salePercent, state, userName, productSpecs) {
        this.id = id;
        this.productOptionId = productOptionID;
        this.quantity = quantity;
        this.paymentMethod = paymentMethod;
        this.cost = cost;
        this.salePercent = salePercent;
        this.state = state;
        this.userName = userName;
        this.productSpecs = productSpecs;
    }
}

module.exports =  Receipt;