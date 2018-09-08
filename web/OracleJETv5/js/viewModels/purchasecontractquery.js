/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * purchasecontractquery module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','ojs/ojdatetimepicker','promise','ojs/ojtimezonedata'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function purchasecontractqueryContentViewModel() {
        var self = this;
        
        //页面传值（一个）
        var result;
        var url=window.location.search; //获取url中"?"符后的字串  
        if(url.indexOf("?")!=-1){
            url=url.substr(url.indexOf("&"));
            if(url.indexOf("=")!=-1){
                result = url.substr(url.indexOf("=")+1);  
            }
        }

        
        $.ajax({
            url:"http://localhost:8081/contract/pcontract/getPurchaseContractById",
            type:"post",
            data:{result:result},
            dataType:"json",
            //async:false,
            success:function(data){
                $("#controllcreateDate").val(data.createDate);
                $("#controlName").val(data.providerName);
                $("#controlAddres").val(data.providerAddress);
                $("#paymoney").val(data.paymentAmount);
                $("#materialName").val(data.materialName);
                $("#importPrice").val(data.price);
                $("#importAmount").val(data.amount);
                $("#contractName").val(data.contractName);
                $("#importPeople").val(data.purchaseUser);
                if(data.remark==null){
                    $("#text-area").val("暂无数据");
                }else{
                    $("#text-area").val(data.remark);
                }
                if(data.modifyUser==null){
                    $("#modifyName").val("暂无信息")
                }else{
                    $("#modifyName").val(data.modifyUser)
                }
                if(data.modifyDate==null){
                    $("#modifydate").val("暂无数据") 
                }else{
                    $("#modifydate").val(data.modifyDate)
                }
            }
        });  
    }
    return purchasecontractqueryContentViewModel;
});
