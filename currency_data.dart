class CurrencyData {
	static const String SYMBAL = '[[SYMBOL]]';
	static const Map<String, Map<String, dynamic>> list = {
		'CNY':{'nameISO':'CNY','name':'Yuan Renminbi','fractionSize':2,'grapheme':'元','template':'1 [[SYMBOL]]','rtl':'false'},
		'TWD':{'nameISO':'TWD','name':'New Taiwan Dollar','fractionSize':0,'grapheme':'NT\$','template':'[[SYMBOL]]1','rtl':'false'},
		'USD':{'nameISO':'USD','name':'US Dollar','fractionSize':2,'grapheme':'\$','template':'[[SYMBOL]]1','rtl':'false'},
	};
}