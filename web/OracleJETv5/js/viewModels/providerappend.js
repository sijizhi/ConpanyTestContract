/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * providerappend module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function providerappendContentViewModel() {
        var self = this;
    }
        $(function(){
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth()+1;
        var date = myDate.getDate();
        var time = (year+"-"+month+"-"+date).toString();  
        $(".createDate").val(time);
        $.ajax({
            url:"http://localhost:8081/contract/getSijieUser",
            type:"post",
            datatype:"json",
            success:function(data){
             $(".createUser").val(data.user.userName);
             $(".createDeptName").val(data.user.s_deptName);
            }
        })
    })
    
    return providerappendContentViewModel;
});
