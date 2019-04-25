const express = require('express');
const path = require('path');
const currency = require(path.join(process.cwd(), 'convert', 'currency.js'));

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const _currency = req.query.c ? `${req.query.c}`.toUpperCase() : 'USD';
    const _amount = req.query.a || 0;
    res.json(currency.convert(_currency, _amount));
});

router.get('/list', function(req, res, next) {
    res.json(currency.list());
});

module.exports = router;
