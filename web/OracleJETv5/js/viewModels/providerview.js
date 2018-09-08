/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * providerview module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function providerviewContentViewModel() {
        var self = this;
    }
        $(function(){
        var num = location.search;
        //传递过来的url+ID
        var result = num.match(/\?.*indexValue=([^&]*).*/);
        //赋值给ID
        var id = result[1];
        $(".providerId").val(id);
        $.ajax({
            url:"http://localhost:8081/contract/provider/queryoneProvider",
            type:"post",
            data:{providerId:id},
            datatype:"json",
            success:function(data){
                $(".companyName").val(data.companyName);
                $(".email").val(data.email);
                $(".companyAddres").val(data.companyAddres);
                $(".linkMan").val(data.linkMan);
                $(".linkManPhone").val(data.linkManPhone);
                $(".remarks").val(data.remarks);
                $(".createUser").val(data.createUser);
                $(".createDeptName").val(data.createDeptName);
                $(".createDate").val(data.createDate);
                $(".modifyUser").val(data.modifyUser);
                $(".modifyDeptName").val(data.modifyDeptName);
                $(".modifyDate").val(data.modifyDate);
            }
        })
    })
    
    
    return providerviewContentViewModel;
});
