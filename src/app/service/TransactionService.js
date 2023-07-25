const config = require('../../config/db/dbconfig')
const sql = require('mssql')
const CRUD = require('./CRUD')

class TransactionService {

    async generateReceipt(request) {
        let result = await CRUD.postRequest(`insert into cartItem (productOptionID, quantity, paymentMethod, cost, salePercent, totalCost, state, userName,productSpecs)
                                                    values( ${request.productOptionID}, ${request.quantity}, N'${request.paymentMethod}', ${request.cost},  ${request.salePercent},  ${request.totalCost}, N'${request.state}', '${request.userName}', ${request.productSpecs})
                                                     `
        );
        return result;
    }

    async getAllReceipt() {
        let result = await CRUD.getRequest(`select * from cartItem`);
        return result;
    }

    async getAllUserReceipt(userName) {
        let result = await CRUD.getRequest(`select * from cartItem where userName = '${userName}'`);
        return result;
    }

    async getOneReceipt(id) {
        let result = await CRUD.getRequest(`select * from cartItem where id = ${id}`);
        return result;
    }

    async updateReceipt(request) {
        try{
            let result = await CRUD.updateRequest(`update cartItem
                        set 
                        quantity = ${request.quantity},
                        paymentMethod = N'${request.paymentMethod}',
                        salePercent = ${request.salePercent},
                        totalCost = ${request.totalCost},
                        state =N'${request.state}',
                        userName = '${request.userName}'
                        where (id = ${request.id} );
                        `)
            return result;
        } catch (error) {
            throw new Error("Update failed");; // Rethrow the error to be caught later
        }
    }

    async updateQuantity(request) {
        let result = await CRUD.updateRequest(`update productVariationOption
                        set quantity = ${request.newQuantity}
                        where (typeOfSpecs = ${request.productSpecs} and productID = ${request.productOptionID});
        `)
        return result;
    }

}

module.exports = new TransactionService();
