Ext.define('app.controller.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	


	checkForSession: function(){
		var contr = this;
		Ext.Ajax.request
		({
			url: 'php/login-form.php',
			method: 'POST',
			params: {},

			success: function(xhr, params){
				// alert('Success :' + xhr.responseText);
				result =  Ext.JSON.decode(xhr.responseText.trim());
				contr.react(result);

			},
			failure: function (xhr, params){
				// alert('Failure :' + xhr.responseText);	
				result = xhr.responseText;
				contr.react(result);

			}			

		});
		

	},

	init: function (){
		this.checkForSession();
	},
	react: function (result){
		console.log("result.status: " + result.status); 
		if(result.status == 'success'){
			this.getView().destroy();
			Ext.Msg.alert("Success", "Welcome " + result.username);
			Ext.widget('app-main');
		}else{
			// for(e in result){
			// 	console.log("  " + e);
			// }
		}
	},
	onLoginClick: function (){
		var refs = this.getReferences();
		values = refs.form.getForm().getValues();
		var result;
		var contr = this;
		Ext.Ajax.request
		({
			url: 'php/login-form.php',
			method: 'POST',
			params: {
				username : values.username,
				password : values.password
			},

			success: function(xhr, params){
				// alert('Success :' + xhr.responseText);
				try{
					result =  Ext.JSON.decode(xhr.responseText.trim());
				}catch(e){
					console.log(xhr.responseText);
					return;
				}
				contr.react(result);

			},
			failure: function (xhr, params){
				// alert('Failure :' + xhr.responseText);	
				try{
					result = xhr.responseText;
				}catch(e){
					console.log(xhr.responseText);
					return;	
				}
				contr.react(result);

			}
			

		});

	}


});