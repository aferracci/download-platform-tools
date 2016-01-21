var CryptoJS = require("crypto-js");

var exports = module.exports;

exports.test = function (req, res) {
    res.send("Hello from my first controller!!!");
    console.log("test");
};

exports.decodeToken = function (req, res) {
    var plainToken = req.params.token;
    
    //var ciphertext = CryptoJS.AES.encrypt(plainToken, 'secret key 123');
    var ciphertext = CryptoJS.DES.encrypt(plainToken, 'secret key 123');
    
    res.send("Token: " + ciphertext);
    console.log("test");
};