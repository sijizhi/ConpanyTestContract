/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * employeemodify module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','promise'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function employeemodifyContentViewModel() {
        var self = this;

        //页面传值（一个）
        var result;
        var url=window.location.search; //获取url中"?"符后的字串  
        if(url.indexOf("?")!=-1){
            url=url.substr(url.indexOf("&"));
            if(url.indexOf("=")!=-1){
                 var result = url.substr(url.indexOf("=")+1);  
            }
        }
        //声明全局变量
        var gender,deptId,roleId;
        $.ajax({
            url:"http://localhost:8081/contract/users/queryuserById?indexValue="+result,
            type:"post",
            dataType:"json",
            async:false,
            success:function(data){
                    self.userIdValue=ko.observable(data.userId);
                    self.userNameValue=ko.observable(data.userName);
                    self.userCode=ko.observable(data.userCode);
                    gender=data.s_sex;
                    deptId=data.s_deptName;
                    roleId=data.s_roleName;
            }
        });
        
         //性别
        this.selectVal1 = ko.observable(gender);
        this.browsers1 = [
          {value:'0', label:'女'},
          {value:'1', label:'男'}
        ];
        self.browsersDP1 = new oj.ArrayDataProvider(this.browsers1, {keyAttributes: 'value'});
        
         //角色类型
        self.selectVal2=ko.observable(roleId);
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
        self.selectVal3=ko.observable(deptId);
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
       // console.log(deptId);
        self.browsersDP3 = new oj.ArrayDataProvider(browsers3, {keyAttributes: 'value'});
    }
    
    return employeemodifyContentViewModel;
});
