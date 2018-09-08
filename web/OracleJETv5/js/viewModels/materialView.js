/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * materialView module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext'
], function (oj,ko,$) {
    /**
     * The view model for the main content view template
     */
    function materialViewContentViewModel() {
        var self = this;
    }


  $(function(){
        
        
        
         $.ajax({
          url:"http://localhost:8081/contract/mat/getMat",
          type:"post",
          datatype:"json",
          async:false,
          success:function(data){
            $("#materialId").val(data.materialId);
            $("#materialName").val(data.materialName);
            $("#importPrice").val(data.importPrice);
            $("#inventory").val(data.inventory);
            $("#remarks").val(data.remarks);
          
          
            $("#createUser").val(data.createUser);
            $("#createDeptName").val(data.createDeptName);
            $("#createDate").val(data.createDate);
          } 
         });
        
       //点击返回
       $("#turnback").click(function(){
           //alert("取消");
             window.history.back(); 
        }); 
     
   });


    return materialViewContentViewModel;
});
