const config = require('../../config/db/dbconfig')
const sql = require('mssql')
const CRUD = require('./CRUD')
const {ProductServices} = require('../service/ProductServices')

class ProductManagementServices extends ProductServices{

    async updateProduct(requestData) {
        let result =  await CRUD.updateRequest(`update product
                                                    set 
                                                    name = N'${requestData.name}',
                                                    description = N'${requestData.description}',
                                                    usage = N'${requestData.usage}',
                                                    image = '${requestData.image}',
                                                    categoryName = N'${requestData.categoryName}'
                                                    where productID = ${requestData.productID};
                                                    `
                                                );
        return result;
    }

    async deleteProduct(id) {
        let result =  await CRUD.deleteRequest(`delete from product where productID = ${id};`);
        return result;
    }

    async createProduct(request) {
        let result =   await CRUD.postRequest(`insert into product(name, description, usage, image, categoryName, manufacturer, productLineBase, warrantyType)
                                                values(N'${request.name}', N'${request.description}', '${request.usage}', '${request.image}', '${request.categoryName}', '${request.manufacturer}', '${request.productLineBase}', '${request.warrantyType}')
                                                 `
                                                );
        return result;
    }

    async updateProductOptions(requestData) {
        let result =  await CRUD.updateRequest(`update productVariationOption
                                                    set
                                                    color = N'${requestData.color}', 
                                                    monitor = ${requestData.monitor}, 
                                                    CPUID = ${requestData.CPUID}, 
                                                    GPUID = ${requestData.GPUID}, 
                                                    RAMID = ${requestData.RAMID}, 
                                                    DISKInforID = ${requestData.DISKInforID}, 
                                                    OSType = N'${requestData.OSTpe}', 
                                                    price = ${requestData.price}
                                                    
                                                    where typeOfSpecs = ${requestData.typeOfSpecs} and productID = ${requestData.productID}
                                                    `
                                                );
        return result;
    }

    // async deleteProductOptions(id) {
    //     let result =  await CRUD.deleteRequest(`delete from productVariationOptons where productID = ${id};`);
    //     return result;
    // }

    async createProductOptions(request) {
        let result =   await CRUD.postRequest(`insert into productVariationOption (typeOfSpecs, color, monitor, CPUID, GPUID, RAMID, DISKInforID, OSType, productID, price)
                                                values(${request.typeOfSpecs}, N'${request.color}', ${request.monitor}, ${request.CPUID}, ${request.GPUID}, ${request.RAMID}, ${request.DISKInforID}, N'${request.OSType}', ${request.productID}, ${request.price})
                                                 `
                                                );
        return result;
    }


}

module.exports = new ProductManagementServices();