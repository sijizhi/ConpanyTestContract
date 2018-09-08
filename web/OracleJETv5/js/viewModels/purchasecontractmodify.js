/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * purchasecontractmodify module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','ojs/ojdatetimepicker','promise','ojs/ojtimezonedata'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function purchasecontractmodifyContentViewModel() {
        var self = this;
        self.valuetime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
        self.valueremark = ko.observable();
        
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
          url:"http://localhost:8081/contract/getSijieUser",
          type:"post",
          datatype:"json",
          async:false,
          success:function(data){
            self.modifyName=data.user.userName;
            
          } 
      });
       
        //声明变量
        var providerId,materialName;
        //总查询
        $.ajax({
            url:"http://localhost:8081/contract/pcontract/getPurchaseContractById",
            type:"post",
            data:{result:result},
            async:false,
            success:function(data){
                providerId=data.providerId;
                materialName=data.materialName; 
                self.importPrice=data.price;
                self.importAmount=data.amount;
                self.contractName=data.contractName;
                self.importPeople=data.purchaseUser;
                self.paymoney=data.paymentAmount;
                self.valueremark1=data.remark;
                self.providerName=data.providerName;
                self.providerAddress=data.providerAddress;
   
            }
        });
        //供应商
        self.selectVal1 = ko.observable(providerId);
        var browsers1 = [];
         $.ajax({
            url:"http://localhost:8081/contract/provider/allProvider",
            type:"post",
            dataType:"json",
            success:function(data){
                $.each(data,function(index,item){
                    var b={value:item.providerId,label:item.providerId};
                    browsers1.push(b);
                })
            }
        });
        self.browsersDP1 = new oj.ArrayDataProvider(browsers1, {keyAttributes: 'value'});

        //物料名称
        self.selectVal2=ko.observable(materialName);
        var browsers2=[];
        $.ajax({
            url:"http://localhost:8081/contract/mat/matList",
            type:"post",
            dataType:"json",
            success:function(data){
                //console.log(data);
                $.each(data,function(index,item){
                    var b={value:item.materialName,label:item.materialName};
                    browsers2.push(b);
                })
            }
        });
        //console.log(browsers2.length)
        self.browsersDP2 = new oj.ArrayDataProvider(browsers2, {keyAttributes: 'value'});
    }
    
    return purchasecontractmodifyContentViewModel;
});
