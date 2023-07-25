const { list } = require("mocha/lib/reporters");
const {ProductServicesInstance} = require("../service/ProductServices");
const { defaultLightTheme } = require("react-admin");

const checkTwoString = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let indexOfPrevChar = 0;//previous element's posistion of str1 that we found in str2
    outerlopp:
    for (let i = 0; i < str1.length; i++) {
        for (let j = indexOfPrevChar; j < str2.length; j++) {
            if (str1.charAt(i) == str2.charAt(j)) {
                indexOfPrevChar = j;
                if (i == str1.length - 1) return true;
                break;
            } else if (j == str2.length - 1) return false;
        }
    }
    return false;
}

class ProductDisplayingController {

    login(req,res, next) {
        ProductServicesInstance.getUserAccount(req.body)
        .then(
            () => {
                res.status(200).send('Dang nhap thanh cong')
            }
        )
        .catch(
            error => {
                console.log(error);
                res.status(500).send("tai khoan hoac mat khau khong ton tai");
            }
        )
    }

    getAllProduct(req, res, next) {
        ProductServicesInstance.getAllProduct()
            .then(
                data => res.json(data)
                )
            .catch(
                error => console.log('get all product bi loi')
                )
    };

    getProductOptions(req, res, next) {
        let productID = req.params.id
        ProductServicesInstance.getAllProductVariation(productID)
            .then(
                data => res.json(data)
            )
            .catch(
                error => console.log("khong the get variation options")
            )
    }

    getOneProduct(req, res, next) {
        let productID = req.params.id
        ProductServicesInstance.getOneProduct(productID)
            .then(
                data => res.json(data)
            )
            .catch(
                error => console.log("khong the get variation options")
            )
    }

    search(req, res, next) {
        ProductServicesInstance.getAllProduct()
        .then(
            data => {
                let productName = req.body.query || "asuck"
                let result = []
                for(let i = 0; i < data.length; i++) {
                    if(checkTwoString(productName, data[i]['name'])) {
                        result.push(data[i])
                    }
                }
                res.json(result)
            }
            )
        .catch(
            error => console.log('get all product bi loi')
            )

    }

    

}

module.exports = {
    ProductDisplayingControllerInstance: new ProductDisplayingController(),
    ProductDisplayingController : ProductDisplayingController
}