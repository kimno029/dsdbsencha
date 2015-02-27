Ext.define("app.view.Login",{
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
		'app.controller.LoginController',
		'Ext.form.Panel'
	], 

	controller: 'login',
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,

	items: {
			xtype: 'form',
			reference: 'form',
			// url: 'php/login-form.php',
		items: [
			{
				xtype: 'textfield',
				name: 'username',
				fieldLabel: 'Username',
				allowBlank: false
			},{
				xtype: 'textfield',
				name: 'password',
				inputType: 'password',
				fieldLabel: 'Password',
				allowBlank: false
			},{
				xtype: 'displayfield',
				hideEmptyLabel: false,
				value: 'Enter any non-blank password'
			}
		],
		buttons: [
			{
				text: 'Login',
				formBind: true,
				listeners: {
					click: 'onLoginClick'
				}
			}
		]

	}
});