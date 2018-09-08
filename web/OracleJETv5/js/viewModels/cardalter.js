/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * cardalter module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function cardalterContentViewModel() {
        var self = this;
    }
    $(function(){
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth()+1;
        var date = myDate.getDate();
        var time = (year+"-"+month+"-"+date).toString();  
        $(".modifyDate").val(time);
        var num = location.search;
        //传递过来的url+ID
        var result = num.match(/\?.*indexValue=([^&]*).*/);
        //赋值给ID
        var id = result[1];
        $(".customerId").val(id);
        //修改人ajax获取
        $.ajax({
            url:"http://localhost:8081/contract/getSijieUser",
            type:"post",
            datatype:"json",
            success:function(data){
             $(".modifyUser").val(data.user.userName);
             $(".modifyDeptName").val(data.user.s_deptName);
            }
        })
        //ajax客户修改信息获取
        $.ajax({
            url:"http://localhost:8081/contract/customer/queryoneCustomer",
            type:"post",
            data:{customerId:id},
            success:function(data){
                $(".companyName").val(data.companyName);
                $(".email").val(data.email);
                $(".companyAddres").val(data.companyAddres);
                $(".linkMan").val(data.linkMan);
                $(".linkManPhone").val(data.linkManPhone);
                $(".remarks").val(data.remarks);
            }
        })
    })
    
    return cardalterContentViewModel;
});
