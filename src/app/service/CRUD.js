const config = require('../../config/db/dbconfig')
const sql = require('mssql')

class CRUD {
    static getRequest(queryString) {
        return sql.connect(config)
        .then(pool => {
            let products =  pool.request().query(queryString);
            return products;
        })
        .then(result => {
            return result.recordset;
        })
        .catch(err => {
            console.error('Error to use GET method to SQL Server:', err);
            throw err;
        });

    }

    static updateRequest(queryString) {
        return sql.connect(config)
        .then(pool => {
            let products =  pool.request().query(queryString);
            return products;
        })
        .then(result => {
            return result.recordset;
        })
        .catch(err => {
            console.error('Error to use PUT method to SQL Server:', err);
            throw err;
        });
    }

    static postRequest(queryString) {
        return sql.connect(config)
        .then(pool => {
            let products =  pool.request().query(queryString);
            return products;
        })
        .then(result => {
            return result.recordset;
        })
        .catch(err => {
            console.error('Error to use POST method to SQL Server:', err);
            throw err;
        });
    }

    static deleteRequest(queryString) {
        return sql.connect(config)
        .then(pool => {
            let products =  pool.request().query(queryString);
            return products;
        })
        .then(result => {
            return result.recordset;
        })
        .catch(err => {
            console.error('Error to use DELETE method to SQL Server:', err);
            throw err;
        });
    }
}

module.exports = CRUD