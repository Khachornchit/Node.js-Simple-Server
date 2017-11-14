function Customer() {
    var fullName;
    return {
        SetName: function (firstName, lastName) {
            fullName = firstName + ' ' + lastName;
        },
        Display: function () {
            console.log(fullName);
        }
    }
}

module.exports = Customer;