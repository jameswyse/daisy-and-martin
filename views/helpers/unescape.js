var handlebars = require('handlebars')

module.exports = function(content) {
    return new handlebars.SafeString(content)
};