class User {
    constructor(id, userName, password, phoneNumber, emailAddress, status, RoleID, typeOfCustomer, fullName) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.RoleID = RoleID;
        this.typeOfCustomer = typeOfCustomer;
        this.fullName = fullName;
    }
}

module.exports = User;