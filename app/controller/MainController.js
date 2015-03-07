/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.controller.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickLogout: function () {

        Ext.Ajax.request({
            url: 'php/kill-session.php',
            method: 'GET',
            params: {},
            success : function(response, sm){
                console.log("Logged out");
            },

            failure : function(response, sm){
                console.error("Failed to logout");
            }
        });
        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');
    },

    init: function() {
        console.log("Hello from MainController" );
        Ext.data.StoreManager.lookup('BandStore').load();
        
    }

});
