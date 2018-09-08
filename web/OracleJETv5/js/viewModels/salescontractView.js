/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * salescontractView module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','promise'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function salescontractViewContentViewModel() {
        var self = this;
    }
    
    $(function(){
          
        var num = location.search;
        //传递过来的url+ID
        var result = num.match(/\?.*indexValue=([^&]*).*/);
        //赋值给ID
        var id = result[1];
      // alert(id);
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
             $("#createUser").val(data.createUser);
             $("#createDate").val(data.createDate);
             $("#createDeptName").val(data.createDeptName);
         
             
          } 
      });
        
       //点击取消
       $("#turnback").click(function(){
           //alert("取消");
             window.history.back(); 
        });
        
        
        
        

    
    });
    
    
    return salescontractViewContentViewModel;
});
