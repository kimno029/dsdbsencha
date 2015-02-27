Ext.define('app.controller.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function (){
		var refs = this.getReferences();
		values = refs.form.getForm().getValues();
		Ext.Ajax.request
		({
			url: 'php/login-form.php',
			method: 'POST',
			params: {
				username : values.username,
				password : values.password
			},

			success: function(xhr, params){
				alert('Success :' + xhr.responseText);
			},
			failure: function (xhr, params){
				alert('Failure :' + xhr.responseText);	
			}

		});

		// /*
		// localStorage.setItem("TutorialLoggedIn", true);

		// this.getView().destroy();
		// */
		// var refs = this.getReferences();
		// var formValues = refs.form.getForm().getValues();
		// console.log(formValues);
		// var user = formValues.username;
		// var pass = formValues.password;

		// // getForm().findField('username').getValue();
		// // var pass = form.getForm().findField('password').getValue();
		// console.info("form: " + user);
		// Ext.Msg.alert(user, pass);
		// formValues.username = "Ändrad";
		// // Ext.widget('app-main');
		// refs.form.submit();
	}


});