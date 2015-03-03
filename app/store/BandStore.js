Ext.define('app.store.BandStore',{
	extend: 'Ext.data.Store',
	requires: [
		'app.model.BandModel'
	],
	model: 'app.model.BandModel',
	storeId: 'BandStore',
	alias: 'BandStore',
	proxy:{
		type: 'ajax',
		url: 'php/list-bands.php',
		id: 'bands',
		reader: {
			type: 'json',
			rootProperty: 'bands'
		}
	},
	autoLoad: true
});

