class ProductVariationOption {
    constructor(typeOfSpecs, color, monitor, CPUID, GPUID, RAMID, DISKInforID, OSType, productID, price, quantity) {
        this.typeOfSpecs = typeOfSpecs;
        this.color = color; 
        this.monitor = monitor;
        this.CPUID = CPUID;
        this.GPUID = GPUID;
        this.RAMID = RAMID;
        this.DISKInforID = DISKInforID;
        this.OSType = OSType;
        this.productID = productID;
        this.price = price;
        this.quantity = quantity;
    }
}

module.exports = ProductVariationOption;