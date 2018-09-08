/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * employeeadd module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','promise'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function employeeaddContentViewModel() {
         var self = this;
         
        //性别
        self.selectVal1 = ko.observable('0');
        self.browsers1 = [
          {value:'0', label:'女'},
          {value:'1', label:'男'}
        ];
        self.browsersDP1 = new oj.ArrayDataProvider(self.browsers1, {keyAttributes: 'value'});

        //角色类型
        self.selectVal2=ko.observable();
        var browsers2=[];
        $.ajax({
            url:"http://localhost:8081/contract/roler/getRolers",
            type:"post",
            dataType:"json",
            success:function(data){
                //console.log(data);
                $.each(data,function(index,item){
                    var b={value:item.roleId,label:item.roleName};
                    browsers2.push(b);
                })
            }
        });
        //console.log(browsers2.length)
        self.browsersDP2 = new oj.ArrayDataProvider(browsers2, {keyAttributes: 'value'});
        
        //部门类型
        self.selectVal3=ko.observable();
        var browsers3=[];
        $.ajax({
            url:"http://localhost:8081/contract/dept/getDept",
            type:"post",
            dataType:"json",
            success:function(data){
                //console.log(data);
                $.each(data,function(index,item){
                    var b={value:item.deptId,label:item.deptName};
                    browsers3.push(b);
                })
            }
        });
        //console.log(browsers2.length)
        self.browsersDP3 = new oj.ArrayDataProvider(browsers3, {keyAttributes: 'value'});

    } 
    return  employeeaddContentViewModel;
});
