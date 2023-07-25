const config = require('../../config/db/dbconfig')
const sql = require('mssql')
const CRUD = require('./CRUD')

class ProductServices {

    async getUserAccount(request) {
        try {
            console.log(request)
            let result = await CRUD.getRequest(`SELECT * FROM userAccount where userName = '${request.userName}' and password = '${request.password}'`)
            return result != []
        }
        catch (error) {
            throw new Error("get user's account failed"); // Rethrow the error to be caught later
        }
    }

    async getAllProduct() {
        let result = await CRUD.getRequest('SELECT * FROM product')
        return result
    }

    async getAllProductVariation(id) {
        let result = await CRUD.getRequest(`SELECT * FROM productVariationOption where productID = ${id}`);
        for(let index = 0; index < result.length; index++) {
            let CPU = await CRUD.getRequest(`select CPUName from CPU where id = ${id}`);
            let GPU = await CRUD.getRequest(`select name from GPU where id = ${id}`);
            let Disk = await CRUD.getRequest(`select type, capacity from Disk where id = ${id}`);
            let Monitor = await CRUD.getRequest(`select resolution, size, monitorType from monitor where id = ${id}`);
            let Ram = await CRUD.getRequest(`select name, capacity from RAM where id = ${id}`);

            result[index]["CPU"] = CPU[0]['CPUName']
            result[index]["GPU"] = GPU[0]["name"]
            result[index]["Disk"] = Disk[0]["type"]+ " " + Disk[0]["capacity"]
            result[index]["Monitor"] = Monitor[0]["resolution"]+ " " + Monitor[0]["size"]+ " " +Monitor[0]["monitorType"] 
            result[index]["Ram"] = Ram[0]["name"]+ " " + Ram[0]["capacity"]
        }
        return result;
    }

    async getOneProduct(id) {
        let result = await CRUD.getRequest(`SELECT * FROM product where productID = ${id}`);
        return result;
    }

    async getCPU(id) {
        let result = await CRUD.getRequest(`select CPUName from CPU where id = ${id}`);
        return result;
    }

    async getGPU(id) {
        let result = await CRUD.getRequest(`select name from GPU where id = ${id}`);
        return result;
    }

    async getDisk(id) {
        let result = await CRUD.getRequest(`select type, capacity from Disk where id = ${id}`);
        return result;
    }

    async getMonitor(id) {
        let result = await CRUD.getRequest(`select resolution, size, monitorType from monitor where id = ${id}`);
        return result;
    }

    async getRAM(id) {
        let result = await CRUD.getRequest(`select name, capacity from RAM where id = ${id}`);
        return result;
    }

}


module.exports = {
    ProductServicesInstance: new ProductServices(),
    ProductServices: ProductServices
}