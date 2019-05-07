const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const SYMBOL = '__SYMBOL__';
const MONEY = '__AMOUNT__';

const candidateCurrencyList = ['USD', 'VND', 'THB', 'CNY'];

function detectNum(target) {
    return _.isNumber(target) ? target : `'${target}'`;
}

function generator() {
    fs.readJSON(path.join(process.cwd(), 'currency-format.json'))
        .then(cjson => {
            const property = Object.keys(cjson)
                .filter(cKey => candidateCurrencyList.some(k => k == cKey))
                .map(nameISO => {
                    let target = cjson[nameISO];
                    target['nameISO'] = nameISO;
                    return target;
                })
                .map(c => ({
                    nameISO: c.nameISO,
                    name: c.name,
                    fractionSize: c.fractionSize,
                    grapheme: `${
                        c.symbol ? c.symbol.grapheme.replace('$', `\\$$`) : ''
                    }`,
                    template: `${c.symbol ? c.symbol.template : '$1'}`
                        .replace('$', SYMBOL)
                        .replace('1', MONEY),
                    rtl: c.symbol ? c.symbol.rtl : false,
                }))
                .map(
                    c =>
                        `\t\t'${c['nameISO']}':{${Object.keys(c)
                            .map(key => `'${key}':${detectNum(c[key])}`)
                            .join(',')}},`,
                )
                .join('\n');

            return `\tstatic const Map<String, Map<String, dynamic>> list = {\n${property}\n\t};\n`;
        })
        .then(cList =>
            fs.writeFile(
                path.join(process.cwd(), 'currency_data.dart'),
                `class CurrencyData {\n\tstatic const String SYMBAL = '${SYMBOL}';\n${cList}}`,
                { spaces: 4 },
            ),
        )
        .then((err, data) => console.log('ok'))
        .catch(err => console.log(err));
}

generator();
