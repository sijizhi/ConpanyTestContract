/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * content3 module
 */
define(['knockout', 'jquery', 'ojs/ojcore', 'ojs/ojknockout', 'promise', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource'
], function (ko, $) {
    /**
     * The view model for the main content view template
     */
    function content3ContentViewModel() {
        var self = this;
        this.generateData = function (count)
        {
            var data, i;
            data = [];
            for (i = 0; i < 1; i++)
            {
                data.push({'id': "ID" + i, 'name': "销售合同审批"}, {'id': "ID" + i + 1, 'name': '销售合同'});
            }
            return data;
        };
        this.dataSource = ko.observable(new oj.ArrayTableDataSource(this.generateData(1),
                {idAttribute: 'id'}));
    }

    return content3ContentViewModel;
});
