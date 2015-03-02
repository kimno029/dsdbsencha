/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',

    requires: [
        'app.controller.MainController',
        'app.model.MainModel'
    ],


 
    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'north',
        // html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onClickLogout'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        title: 'Bands',
        items:[{
            xtype: 'grid',
            columns: [
                {header: 'Id', dataIndex: 'id'},
                {header: 'Name', dataIndex: 'name'},
                {header: 'Contact', dataIndex: 'contact'}
            ],

            store: 'BandStore',
            // store: Ext.data.StoreManager.lookup('BandStore'),
            flex: 1
        }]
    }]
});
