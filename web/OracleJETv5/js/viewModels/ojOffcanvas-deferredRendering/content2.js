/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * content module
 */
define(['knockout', 'jquery', 'ojs/ojcore', 'ojs/ojknockout', 'promise', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource'
], function (ko, $) {
    /**
     * The view model for the main content view template
     */
    function contentContentViewModel() {
        this.generateData = function (count)
        {
            var data, i;
            data = [];
            for (i = 0; i < 1; i++)
            {
                data.push({'id': "ID" + i, 'name': "部门管理"}, {'id': "ID" + i + 1, 'name': '人员管理'});
            }
            return data;
        };
        this.dataSource = ko.observable(new oj.ArrayTableDataSource(this.generateData(1),
                {idAttribute: 'id'}));
                                                                
    }
    
    return contentContentViewModel;
});
