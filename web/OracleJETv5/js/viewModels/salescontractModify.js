/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * salescontractModify module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','promise'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function salescontractModifyContentViewModel() {
        var self = this;
         
      
        
//        var browsers2=[];
//        $.ajax({
//            url:"http://localhost:8081/contract/approval/allApproval",
//            type:"post",
//            dataType:"json",
//            success:function(data){
//                $.each(data,function(index,item){
//                    var b={value:item.salesApprovalId,label:item.salesApprovalId};
//                    browsers2.push(b);
//                });
//            }
//        });
//        //console.log(browsers2.length)
//        self.browsersDP2 = new oj.ArrayDataProvider(browsers2, {keyAttributes: 'value'});
        
    }
    
    
      $(function(){
          
        var num = location.search;
        //传递过来的url+ID
        var result = num.match(/\?.*indexValue=([^&]*).*/);
        //赋值给ID
        var id = result[1];
       
        
         $.ajax({
          url:"http://localhost:8081/contract/getSijieUser",
          type:"post",
          datatype:"json",
          async:false,
          success:function(data){
             
            $("#modifyUser").val(data.user.userName);
            $("#modifyDeptName").val(data.user.s_deptName);
            $("#modifyDate").val(getYMDHMS(new Date()));

          } 
      });
      
      /*日期格式化*/
	function getYMDHMS(time){
	        var myDate = new Date(time);   
	           var YMD=myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
	           var HMS=myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
	           var YMDHMS=YMD;
	        return  YMDHMS;
	};
        
        
      //查看单个信息
      $.ajax({
          url:"http://localhost:8081/contract/sales/getSale",
          type:"post",
          data:{salesContractId:id},
          datatype:"json",
          async:false,
          success:function(data){
              $("#contractName").val(data.contractName);
             $("#customerName").val(data.customerName);
             $("#productName").val(data.productName);
             $("#salePrice").val(data.salePrice);
             $("#amount").val(data.amount);
             $("#contractAmount").val(data.contractAmount);
             $("#invoiceAmount").val(data.invoiceAmount);
             $("#getMoneyAmount").val(data.getMoneyAmount);
             $("#remark").val(data.remark);
             $("#saleUser").val(data.saleUser);
             $("#salesContractId").val(data.salesContractId);
             
          } 
      });
        
       //点击取消
       $("#turnback").click(function(){
           //alert("取消");
             window.history.back(); 
        });
        
        //获取审批信息
//         $("#salesApprovalId").click(function(){
//            var salesApprovalId =$("#salesApprovalId").val();
//             if(salesApprovalId.length!=0){
//                  $.ajax({
//                    url:"http://localhost:8081/contract/approval/queryoneApproval",
//                    data:{salesApprovalId:salesApprovalId},
//                    type:"post",
//                    datatype:"json",
//                    success:function(data){
//                        $("#customerName").val(data.companyName);
//                        $("#productName").val(data.productName);
//                        $("#salePrice").val(data.salePrice);
//                        $("#amount").val(data.amount);
//                        $("#contractAmount").val(data.totalSales);
//                        $("#saleUser").val(data.createUser);
//                       
//                    } 
//                });
//             }
//         });
        
         //点击保存
        $("#saveBut").click(function(){
           var modifyUser =$("#modifyUser").val();
           var modifyDeptName =$("#modifyDeptName").val();
           var modifyDate =$("#modifyDate").val();
          
           var contractName =$("#contractName").val();
           var customerName =$("#customerName").val();
           var productName =$("#productName").val();
           var salePrice =$("#salePrice").val();
           var amount =$("#amount").val();
           var contractAmount =$("#contractAmount").val();
           var invoiceAmount =$("#invoiceAmount").val();
           var getMoneyAmount =$("#getMoneyAmount").val();
         //  var accessory =$("#accessory").val(); 
           var remark =$("#remark").val();
           var saleUser =$("#saleUser").val();
          // var salesApprovalId =$("#salesApprovalId").val();
           
           var price= /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/; //价格正则
           var numb= /^\d{1,}$/; //整数正则
           if(contractName.length==0){
               alert("请填写合同名称");
           }else if(customerName.length==0){
               alert("请填写客户名称");
           }else if(productName.length==0){
               alert("请填写产品名称");
           }else if(salePrice.length==0){
               alert("请填写产品单价");
           }else if(amount.length==0){
               alert("请填写销售数量");
           }else if(contractAmount.length==0){
               alert("请填写合同总金额");
           }else if(getMoneyAmount.length==0){
               alert("请填写收款总金额");
           }else if(invoiceAmount.length==0){
               alert("请填写开票总金额");
           }else if(saleUser.length==0){
               alert("请填写销售负责人");
           }else if(!(price.test(salePrice))){
               alert("产品单价格式不对！");
           }else if(!(numb.test(amount))){
               alert("销售数量格式不对！");
           }else if(!(price.test(contractAmount))){
               alert("合同总金额格式不对！");
           }else if(!(price.test(getMoneyAmount))){
               alert("收款金额格式不对！");
           }else if(!(price.test(invoiceAmount))){
               alert("开票金额格式不对！");
           }
           else{
             
            $.ajax({
               async: false,
               type: "POST",
               url:"http://localhost:8081/contract/sales/modifySale",
               contentType : "application/x-www-form-urlencoded;charset=UTF-8",
               data:{modifyUser:modifyUser,modifyDeptName:modifyDeptName,modifyDate:modifyDate,
                   contractName:contractName,customerName:customerName,productName:productName,salePrice:salePrice,
               amount:amount,contractAmount:contractAmount,invoiceAmount:invoiceAmount,getMoneyAmount:getMoneyAmount,
             remark:remark,saleUser:saleUser,salesContractId:id},
               dataType: "json",
               success: function (data) {
                   if(data.result=="true"){
                           alert("修改成功");
                           location.replace("http://localhost:8383/OracleJETv5/index.html?root=salescontractList");
                   }else{
                           alert("失败");
                   }
                 },
               error: function () {
                   alert("请查看是否正确填写");
               }
           });
           
           }
        }); 

    
    });
    
    
    
    
    return salescontractModifyContentViewModel;
});
