/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
// Ext.require('Ext.ux.displayField');

Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app',
 
    models: [
        'BandModel'
        ,
        'CountryModel'
    ],
    stores: [
        'BandStore'
        ,
        'CountryStore'
    ],
    views: [
        'Login',
        'Main'
    ],
    launch: function () {
         
        var supportsLocalStorage = Ext.supports.LocalStorage,
        loggedIn;

        if(!supportsLocalStorage){
            Ext.Msg.alert('Your Browser Does Not Support Local Storage');
            return;
        }

        loggedIn = localStorage.getItem("TutorialLoggedIn");
        // TODO hämta logged-in status från php
        Ext.widget(loggedIn ? 'app-main' :'login' );
        Ext.widget('login');
        Ext.data.StoreManager.lookup('BandStore').load();

    }
}); 

