/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * SalesContractApprovalAdd module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
    'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojarraydataprovider', 'ojs/ojdatetimepicker', 'promise', 'ojs/ojtimezonedata'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function SalesContractApprovalAddContentViewModel() {
        var self = this;
        //客户
        self.selectVal2 = ko.observable();
        var browsers1 = [];



        $.ajax({
            url: "http://localhost:8081/contract/customer/allCustomer",
            type: "post",
            dataType: "json",
            success: function (data) {
                $.each(data, function (index, item) {
                    var b = {label: item.customerId, value: item.companyName};
                    browsers1.push(b);
                })
            }
        });
        self.browsersDP2 = new oj.ArrayDataProvider(browsers1, {keyAttributes: 'value'});
        //供应商
        self.selectVal1 = ko.observableArray();
        var browsers2 = [];
        $.ajax({
            url: "http://localhost:8081/contract/pro/proList",
            type: "post",
            dataType: "json",
            success: function (data) {
                $.each(data, function (index, item) {
                    var c = [item.productCost, item.salePrice, item.productName];
                    var b = {label: item.productId, value: c};
                    browsers2.push(b);
                })
            }
        });

        self.browsersDP1 = new oj.ArrayDataProvider(browsers2, {keyAttributes: 'value'});

    }
    $(function () {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var time = (year + "-" + month + "-" + date).toString();
        //客户编号自动生成公司名称
//        $("#select1").click(function () {
//            var value = $("#selectedval2").text();
//            if (value != "") {
//                $.ajax({
//                    url: "http://localhost:8081/contract/customer/queryoneCustomer",
//                    type: "post",
//                    data: {customerId: value},
//                    datatype: "json",
//                    success: function (data) {
//                        $(".companyName").val(data.companyName);
//                    }
//                })
//            }
//        })
        $(".companyName").val();
        //产品名称自动生成成本价建议售价
//        $("#select2").click(function () {
//            var value = $("#selectedval1").text();
//            if (value != "") {
//                $.ajax({
//                    url: "http://localhost:8081/contract/pro/getPro2",
//                    type: "post",
//                    data: {productId: value},
//                    datatype: "json",
//                    success: function (data) {
//                        $(".productCost").val(data.productCost);
//                        $(".salePrice").val(data.salePrice);
//                        $(".productName").text(data.productName);
//                    }
//                })
//            }   
//        })
        var amout = $(".amount").val();
        var salePrices = $(".salePrices").val();
        $("#sampleDemo").click(function () {
            amout = $(".amount").val();
            salePrices = $(".salePrices").val();
            if (amout != "" && salePrices != "") {
                $(".totalSales").val(salePrices * amout);
            }
        })

//        $(".salePrices").click(function () {
//            var amout = $(".amout").val();
//           var salePrices = $(".salePrices").val();
//            if (amout != "" && salePrices != "") {
//                $(".totalSales").val(salePrices * amout);
//            }
//        })




        $(".createDate").val(time);
        $.ajax({
            url: "http://localhost:8081/contract/getSijieUser",
            type: "post",
            datatype: "json",
            success: function (data) {
                $(".createUser").val(data.user.userName);
                $(".createDeptName").val(data.user.s_deptName);
            }
        })

    })


    return SalesContractApprovalAddContentViewModel;
});
