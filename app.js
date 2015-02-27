Ext.application({
	name: 'dsdb',

	models: ['Main', 'Bands' ],
	controllers: ['Main', 'Bands'],
	
	autoCreateViewport: 'dsdb.view.Main',

	launch: function(){
		Console.info("Hello World!");
	}
});

var app = dsdb.getApplication();
