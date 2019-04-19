const _ = require('lodash');

const forexList = {
    USD: 30,
    TWD: 1,
    CNY: 5,
};

const defaultCurrent = 'TWD';

function detectCurrency(currency) {
    const _current = currency || defaultCurrent;
    return Object.keys(forexList).some(c => c == _current)
        ? _current
        : defaultCurrent;
}

function getOtherRateList(sourceCurrency, amount) {
    let dict = {};
    Object.keys(forexList)
        .filter(c => c != sourceCurrency)
        .forEach(c => {
            dict[c] = (amount * forexList[c]) / forexList[sourceCurrency];
        });

    return dict;
}

module.exports = function(currency, amount) {
    const _current = detectCurrency(currency);
    const _amount = _.isNumber(+amount) ? +amount : 0;

    return getOtherRateList(_current, _amount);
};
