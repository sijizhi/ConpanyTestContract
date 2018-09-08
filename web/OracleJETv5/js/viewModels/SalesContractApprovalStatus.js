/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * SalesContractApprovalStatus module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
    'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function SalesContractApprovalStatusContentViewModel() {
        var self = this;
    }

    $(function () {
        var num = location.search;
        //传递过来的url+ID
        var result = num.match(/\?.*indexValue=([^&]*).*/);
        //赋值给ID
        var id = result[1];
        $(".providerId").val(id);
        $.ajax({
            url: "http://localhost:8081/contract/approval/queryoneApproval",
            type: "post",
            data: {salesApprovalId: id},
            datatype: "json",
            success: function (data) {
                $(".createUser").val(data.createUser);
                $(".createDate").val(data.createDate);
                $(".companyName").val(data.companyName);
                $(".productName").val(data.productName);
                $(".cost").val(data.cost);
                $(".price").val(data.price);
                $(".salePrice").val(data.salePrice);
                $(".amount").val(data.amount);
                $(".remarks").val(data.remarks);
                $(".totalSales").val(data.totalSales);
                $(".earnedValue").val(data.salePrice*data.amount-data.cost*data.amount);
                $(".profitMargin").val(Math.floor((((data.salePrice*data.amount-data.cost*data.amount)/(data.cost*data.amount))*100))+"%");
            }
        })
    })

    return SalesContractApprovalStatusContentViewModel;
});
