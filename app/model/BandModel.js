Ext.define('app.model.BandModel',{
	extend: 'Ext.data.Model',

	// fields: ['id','name','contact','city','modtime'],
	fields:[
		{name: 'id', type: 'int'},
		{name: 'name', type: 'string'},
		{name: 'contact', type: 'string'},
		{name: 'city', type: 'int'},
		{name: 'modtime', type: 'date'}
	]

	// proxy: {
 //        type: 'rest',
 //        url : 'php/list-bands.php',
 //        reader: {
	// 		type: 'json',
	// 		rootProperty: 'bands',
	// 		root: 'bands'
	// 	}

 //    }
}); 