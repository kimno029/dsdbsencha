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
        'app.model.MainModel',
        'app.model.BandModel',
        'app.model.CountryModel'
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
        // height: 150,
        split: true,
        tbar: [{
            text: 'Logout',
            handler: 'onClickLogout'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        bodyPadding: 10,
        items:[
            {
                xtype: 'grid',
                title: 'Bands',            
                store: 'BandStore',
                columns: [
                    {header: 'Id', dataIndex: 'id'},
                    {header: 'Name', dataIndex: 'name'},
                    {header: 'Contact', dataIndex: 'contact'}
                ],

                // flex: 1
            },{
                xtype: 'panel',
                title: 'New Band',
                items:[{
                    xtype: 'form',
                    reference: 'newBandForm',
                    title: 'New Band',
                    // flex: 1,
                    items:[
                        {
                            xtype: 'textfield',
                            name: 'newbandContact',
                            fieldLabel: 'Contact',
                            allowBlank: false 
                        },
                        {
                            xtype: 'textfield',
                            name: 'newBandName',
                            fieldLabel: 'Name',
                            allowBlank: false
                        }
                        ,{
                            xtype: 'combobox',
                            store: 'CountryStore',
                            name: 'newbandCity',
                            fieldLabel: 'Country',
                            valueField: 'country_code',
                            displayField: 'country_name',
                            typeAhead: true
                         }
                    ]
                }]
            }
        ]
    }]
});
