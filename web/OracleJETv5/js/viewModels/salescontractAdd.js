/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * salescontractAdd module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','promise'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function salescontractAddContentViewModel() {
      var self = this;
         
        //下拉框
        self.selectVal2=ko.observableArray();
        var browsers2=[];
        $.ajax({
            url:"http://localhost:8081/contract/approval/allApproval",
            type:"post",
            dataType:"json",
            success:function(data){
                $.each(data,function(index,item){
                    var c=[item.companyName,item.productName,item.salePrice,item.amount,item.totalSales,item.createUser,item.salesApprovalId];
                    var b={value:c,label:item.salesApprovalId};
                    browsers2.push(b);
                });
            }
        });
        //console.log(browsers2.length)
        self.browsersDP2 = new oj.ArrayDataProvider(browsers2, {keyAttributes: 'value'});
        
         
        
    }
    
     $(function(){
        
         $.ajax({
          url:"http://localhost:8081/contract/getSijieUser",
          type:"post",
          datatype:"json",
          async:false,
          success:function(data){
             
            $("#createUser").val(data.user.userName);
            $("#createDeptName").val(data.user.s_deptName);
            $("#createDate").val(getYMDHMS(new Date()));

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
        
        
      
        
       //点击取消
       $("#turnback").click(function(){
           //alert("取消");
             window.history.back(); 
        });
        

        
         //点击保存
        $("#saveBut").click(function(){
           
     
           var createUser =$("#createUser").val();
           var createDeptName =$("#createDeptName").val();
           var createDate =$("#createDate").val();
           var contractName =$("#contractName").val();
           var invoiceAmount =$("#invoiceAmount").val();
           var getMoneyAmount =$("#getMoneyAmount").val();
           var remark =$("#remark").val();
           
           var customerName =$("#customerName").val().toString();
           var productName =$("#productName").val().toString();
           var salePrice =Number($("#salePrice").val());
           var amount =Number($("#amount").val());
           var contractAmount =Number($("#contractAmount").val());
          
         //  var accessory =$("#accessory").val(); 
           
           var saleUser =$("#saleUser").val().toString();
           var salesApprovalId =Number($("#salesApprovalId").val());
           
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
           }else if(salesApprovalId.length==0){
               alert("销售审批号不能为空");
           }
           //正则
           else if(!(price.test(salePrice))){
               alert("产品单价格式不对！");
           }else if(!(numb.test(amount))){
               alert("销售数量格式不对！");
           }else if(!(price.test(contractAmount))){
               alert("合同总金额格式不对！");
           }else if(!(price.test(getMoneyAmount))){
               alert("收款金额格式不对！");
           }else if(!(price.test(invoiceAmount))){
               alert("开票金额格式不对！");
           }else if(!(numb.test(salesApprovalId))){
               alert("审批号格式不对！");
           }
            else{
             
            $.ajax({
               async: false,
               type: "POST",
               url:"http://localhost:8081/contract/sales/addSale",
               contentType : "application/x-www-form-urlencoded;charset=UTF-8",
               data:{createUser:createUser,createDeptName:createDeptName,createDate:createDate,
                   contractName:contractName,customerName:customerName,productName:productName,salePrice:salePrice,
               amount:amount,contractAmount:contractAmount,invoiceAmount:invoiceAmount,getMoneyAmount:getMoneyAmount,
             remark:remark,saleUser:saleUser},
               dataType: "json",
               success: function (data) {
                   if(data.result=="true"){
                           alert("添加成功");
                           location.replace("http://localhost:8383/OracleJETv5/index.html?root=salescontractList");
                   }else{
                           alert("失败");
                   }
                 },
               error: function () {
                   alert("error");
               }
           });
           
           }
        }); 
        
    
    });
    return salescontractAddContentViewModel;
});
