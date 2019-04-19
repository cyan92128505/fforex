const express = require('express');
const path = require('path');
const currencyConvert = require(path.join(
    process.cwd(),
    'convert',
    'currency.js',
));

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(currencyConvert(req.query.currency, req.query.amount));
});

module.exports = router;
