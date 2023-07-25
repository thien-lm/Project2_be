class WarrantyPolicy {
    constructor(warrantyType, timeUnderWarranty, typeOfWarranty, refundPolicy) {
        this.warrantyType = warrantyType;
        this.timeUnderWarranty = timeUnderWarranty;
        this.typeOfWarranty = typeOfWarranty;
        this.refundPolicy = refundPolicy;
    }
}


module.exports = WarrantyPolicy;