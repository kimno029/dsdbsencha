
Ext.define('app.model.MainModel', {
    extend: 'Ext.app.ViewController',
    alias: 'model.main',

    onClickButton: function (){
    	// localStorage.removeItem('TutorialLoggedIn');

    	this.getView().destroy();

    	Ext.widget('login');
    }

});