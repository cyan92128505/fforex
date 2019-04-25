const _ = require('lodash');
const Decimal = require('decimal.js');

const forexList = {
    USD: new Decimal(1),
    TWD: new Decimal(30),
    CNY: new Decimal(6),
};

const defaultCurrent = 'TWD';

function detectCurrency(currency) {
    const _current = currency || defaultCurrent;
    return Object.keys(forexList).some(c => c == _current)
        ? _current
        : defaultCurrent;
}

function getOtherRateList(sourceCurrency, amount) {
    const source = new Decimal(amount);
    let dict = {};
    Object.keys(forexList).forEach(c => {
        if (c === sourceCurrency) {
            dict[c] = source.valueOf();
            return;
        }

        dict[c] = source
            .mul(forexList[c])
            .div(forexList[sourceCurrency])
            .valueOf();
    });

    return dict;
}

module.exports = {
    convert: function(currency, amount) {
        const _current = detectCurrency(currency);
        const _amount = _.isNumber(+amount) ? +amount : 0;

        return getOtherRateList(_current, _amount);
    },
    list: () => forexList,
};
