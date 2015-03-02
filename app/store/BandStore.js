Ext.define('app.store.BandStore',{
	extend: 'Ext.data.JsonStore',
	requires: [
		'app.model.BandModel'
	],
	model: 'app.model.BandModel',
	storeId: 'BandStore',
	alias: 'BandStore',
	proxy:{
		type: 'ajax',
		url: 'php/list-bands.php',
		reader: {
			type: 'json',
			rootProperty: 'bands',
			root: 'bands'
		}
	},
	autoLoad: true
});

