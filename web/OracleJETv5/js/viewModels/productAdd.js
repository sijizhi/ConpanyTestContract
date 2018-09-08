/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * productAdd module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function productAddContentViewModel() {
        var self = this;
      // alert("我xian走了");
     //dadfadsfsafsafasf
     
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
           
           var productName =$("#productName").val();
           var productCost =$("#productCost").val();
           var salePrice =$("#salePrice").val();
           var inventory =$("#inventory").val();
           var remarks =$("#remarks").val();
           
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
                   url:"http://localhost:8081/contract/pro/savePro",
                   contentType : "application/x-www-form-urlencoded;charset=UTF-8",
                   data:{createUser:createUser,createDeptName:createDeptName,createDate:createDate,
                       productName:productName,productCost:productCost,salePrice:salePrice,inventory:inventory,remarks:remarks},
                   dataType: "json",
                   success: function (data) {
                       if(data.result=="true"){
                               alert("添加成功");
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
        /*提交表单*/
        function subform(){
        
        };
       
   });
    return productAddContentViewModel();
});
