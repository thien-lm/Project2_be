class Promotion {
    constructor(id, description, startDate, finishDate, salePercentage, productID)  {
        this.id = id;
        this.description = description;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.salePercentage = salePercentage;
        this.productID = productID;
    }
}

module.exports = Promotion;