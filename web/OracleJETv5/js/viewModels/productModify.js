/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * productModify module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function productModifyContentViewModel() {
        var self = this;
    }
    $(function(){
        
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
         
         $.ajax({
          url:"http://localhost:8081/contract/pro/getPro",
          type:"post",
          datatype:"json",
          async:false,
          success:function(data){
            $("#productId").val(data.productId);
            $("#productName").val(data.productName);
            $("#productCost").val(data.productCost);
            $("#salePrice").val(data.salePrice);
            $("#inventory").val(data.inventory);
            $("#remarks").val(data.remarks);
          
          } 
         });
      
      
      
      
      /*日期格式化*/
	function getYMDHMS(time){
	        var myDate = new Date(time);   
	           var YMD=myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
	           var HMS=myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
	           var YMDHMS=YMD;
	        return     YMDHMS;
	};
        
       //点击取消
       $("#turnback").click(function(){
           //alert("取消");
             window.history.back(); 
        }); 
        //点击保存
        $("#saveBut").click(function(){
           //alert("baocun");
         
           var modifyUser =$("#modifyUser").val();
           var modifyDeptName =$("#modifyDeptName").val();
           var modifyDate =$("#modifyDate").val();
           var productName =$("#productName").val();
           var productCost =$("#productCost").val();
           var salePrice =$("#salePrice").val();
           var inventory =$("#inventory").val();
           var remarks =$("#remarks").val();
           var productId =$("#productId").val();
           
           var price= /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/; //价格正则
           var numb= /^\d{1,}$/; //整数正则
            if(productName.length==0){
               alert("请填写产品名称");
           }else if(productCost.length==0){
               alert("请填写产品成本");
           }else if(salePrice.length==0){
               alert("请填写建议售价");
           }else if(inventory.length==0){
               alert("请填写产品数量");
           }else if(!(price.test(productCost))){
               alert("成本格式不对！");
               
           }else if(!(price.test(salePrice))){
               alert("建议售价格式不对！");
               
           }else if(!(numb.test(inventory))){
               alert("产品数量不对！");
               
           }
            else{
                 //ajax保存
                $.ajax({
                   async: false,
                   type: "POST",
                   url:"http://localhost:8081/contract/pro/modifyPro",
                   contentType : "application/x-www-form-urlencoded;charset=UTF-8",
                   data:{modifyUser:modifyUser,modifyDeptName:modifyDeptName,modifyDate:modifyDate,
                       productName:productName,productCost:productCost,salePrice:salePrice,inventory:inventory,remarks:remarks,productId:productId},
                   dataType: "json",
                   success: function (data) {
                       if(data.result=="true"){
                               alert("修改成功");
                               location.replace("http://localhost:8383/OracleJETv5/index.html?root=productList");
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
    return productModifyContentViewModel;
});
