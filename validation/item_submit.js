const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateItemInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name must not be blank";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};