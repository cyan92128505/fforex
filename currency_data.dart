class CurrencyData {
	static const String SYMBAL = '__SYMBOL__';
	static const Map<String, Map<String, dynamic>> list = {
		'CNY':{'nameISO':'CNY','name':'Yuan Renminbi','fractionSize':2,'grapheme':'元','template':'__AMOUNT__ __SYMBOL__','rtl':'false'},
		'THB':{'nameISO':'THB','name':'Baht','fractionSize':2,'grapheme':'฿','template':'__SYMBOL____AMOUNT__','rtl':'false'},
		'USD':{'nameISO':'USD','name':'US Dollar','fractionSize':2,'grapheme':'\$','template':'__SYMBOL____AMOUNT__','rtl':'false'},
		'VND':{'nameISO':'VND','name':'Dong','fractionSize':0,'grapheme':'₫','template':'__AMOUNT__ __SYMBOL__','rtl':'false'},
	};
}