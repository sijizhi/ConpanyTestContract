/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * employeequery module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function employeequeryContentViewModel() {
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
        $.ajax({
            url:"http://localhost:8081/contract/users/queryuserById?indexValue="+result,
            type:"post",
            dataType:"json",
            //async:false,
            success:function(data){
                    $("#control1").val(data.userId);
                    $("#control2").val(data.userName);
                    $("#control3").val(data.userCode);
                    $("#control4").val(data.s_sex);
                    $("#control5").val(data.s_roleName);
                    $("#control6").val(data.s_deptName);
            }
        });
    }
    
    return employeequeryContentViewModel;
});
