Ext.define('app.model.CountryModel', {
	
	extend: 'Ext.data.Model',
	fields:[
		{name: 'id', type: 'int'},
		{name: 'country_code', type: 'string'},
		{name: 'country_name', type: 'string'}
	]
});