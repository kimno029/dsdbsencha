Ext.define('app.store.CountryStore', {
	extend: 'Ext.data.Store',
	requires: [
		'app.model.CountryModel'
	],
	model: 'app.model.CountryModel',
	storeId: 'CountryStore',
	alias: 'CountryStore',
	proxy: {
		type: 'ajax',
		url: 'php/list-countries.php',
		id: 'countries',
		reader: {
			type: 'json',
			rootProperty: 'countries'
		}
	}
	,
	autoLoad: true
});