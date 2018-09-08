/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * purchasecontractadd module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlabel',
           'ojs/ojinputtext','ojs/ojselectcombobox','ojs/ojarraydataprovider','ojs/ojdatetimepicker','promise','ojs/ojtimezonedata'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    function purchasecontractaddContentViewModel() {
        var self = this;
        self.valuetime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
        self.valueremark = ko.observable();
        $.ajax({
            url: "http://localhost:8081/contract/getSijieUser",
            type: "post",
            datatype: "json",
            async: false,
            success: function (data) {
                self.userName = data.user.userName;

            }
        });
        //供应商
        self.selectVal1 = ko.observableArray();
        var browsers1 = [];
         $.ajax({
            url:"http://localhost:8081/contract/provider/allProvider",
            type:"post",
            dataType:"json",
            success:function(data){
                $.each(data,function(index,item){
                    var a=[item.companyAddres,item.companyName,item.providerId]
                    var b={label:item.providerId,value:a};
                    browsers1.push(b);
                })
            }
        });
        self.browsersDP1 = new oj.ArrayDataProvider(browsers1, {keyAttributes: 'value'});

        //物料名称
        self.selectVal2=ko.observable();
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
    
    return purchasecontractaddContentViewModel;
});
