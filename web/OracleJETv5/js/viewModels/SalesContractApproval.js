/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * SalesContractApproval module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojcheckboxset',
    'ojs/ojarraytabledatasource', 'ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function SalesContractApprovalContentViewModel() {
        var self = this;
        var deptArray = [];
        var datasource = ko.observableArray();
        $.ajax({
            url: "http://localhost:8081/contract/getSijieUser",
            type: "post",
            datatype: "json",
            async: false,
            success: function (data) {
                var deptId = data.user.deptId;
                if (deptId == 8) {
                    $(document).ready(function () {
                        document.getElementById("selectionButton3").style.display = 'block';
                    })
                    $.ajax({
                        url: "http://localhost:8081/contract/approval/allApproval",
                        type: "post",
                        dataType: "json",
                        async: false,
                        success: function (data) {
                            $.each(data, function (index, item) {
                                if (item.approvalStatus == 0) {
                                    item.approvalStatus = "进行中";
                                } else if (item.approvalStatus == 3) {
                                    item.approvalStatus = "全部通过"
                                } else if (item.approvalStatus == 4) {
                                    item.approvalStatus = "不通过";
                                } else if (item.approvalStatus == 1) {
                                    item.approvalStatus = "销售部通过";
                                } else if (item.approvalStatus == 2) {
                                    item.approvalStatus = "法务部通过";
                                }
                                var a = {Selected: ko.observable([]), SalesApprovalId: item.salesApprovalId, CompanyName: item.companyName, ProductName: item.productName, Cost: item.cost, Price: item.price, SalePrice: item.salePrice, CreateUser: item.createUser, ApprovalStatus: item.approvalStatus};
                                deptArray.push(a);
                            })
                        }
                    });
                } else if (deptId == 4) {
                    $.ajax({
                        url: "http://localhost:8081/contract/approval/deptIdApproval",
                        type: "post",
                        data: {approvalStatus: 1},
                        dataType: "json",
                        async: false,
                        success: function (data) {
                            $.each(data, function (index, item) {
                                if (item.approvalStatus == 0) {
                                    item.approvalStatus = "进行中";
                                } else if (item.approvalStatus == 3) {
                                    item.approvalStatus = "全部通过"
                                } else if (item.approvalStatus == 4) {
                                    item.approvalStatus = "不通过";
                                } else if (item.approvalStatus == 1) {
                                    item.approvalStatus = "销售部通过";
                                } else if (item.approvalStatus == 2) {
                                    item.approvalStatus = "法务部通过";
                                }
                                var a = {Selected: ko.observable([]), SalesApprovalId: item.salesApprovalId, CompanyName: item.companyName, ProductName: item.productName, Cost: item.cost, Price: item.price, SalePrice: item.salePrice, CreateUser: item.createUser, ApprovalStatus: item.approvalStatus};
                                deptArray.push(a);
                            })
                        }
                    });
                } else if (deptId == 5) {
                    $.ajax({
                        url: "http://localhost:8081/contract/approval/deptIdApproval",
                        type: "post",
                        data: {approvalStatus: 2},
                        dataType: "json",
                        async: false,
                        success: function (data) {
                            $.each(data, function (index, item) {
                                if (item.approvalStatus == 0) {
                                    item.approvalStatus = "进行中";
                                } else if (item.approvalStatus == 3) {
                                    item.approvalStatus = "全部通过"
                                } else if (item.approvalStatus == 4) {
                                    item.approvalStatus = "不通过";
                                } else if (item.approvalStatus == 1) {
                                    item.approvalStatus = "销售部通过";
                                } else if (item.approvalStatus == 2) {
                                    item.approvalStatus = "法务部通过";
                                }
                                var a = {Selected: ko.observable([]), SalesApprovalId: item.salesApprovalId, CompanyName: item.companyName, ProductName: item.productName, Cost: item.cost, Price: item.price, SalePrice: item.salePrice, CreateUser: item.createUser, ApprovalStatus: item.approvalStatus};
                                deptArray.push(a);
                            })
                        }
                    });
                }
            }
        });
        self.datasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(deptArray, {idAttribute: 'SalesApprovalId'}));

        self.columnArray = [{"renderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_tmpl", true),
                "headerRenderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_hdr_tmpl", true),
                "id": "column1"},
            {"headerText": "编号",
                "field": "SalesApprovalId",
                "id": "column2"},
            {"headerText": "公司名称",
                "field": "CompanyName",
                "id": "column3"},
            {"headerText": "产品名称",
                "field": "ProductName",
                "id": "column4"},
            {"headerText": "产品成本",
                "field": "Cost",
                "id": "column5"},
            {"headerText": "建议售价",
                "field": "Price",
                "id": "column4"},
            {"headerText": "真实售价",
                "field": "SalePrice",
                "id": "column5"},
            {"headerText": "申请人",
                "field": "CreateUser",
                "id": "column5"},
            {"headerText": "审核结果",
                "field": "ApprovalStatus",
                "id": "column5"}];

        self.selectionListener = function (event)
        {
            var data = event.detail;
            if (data != null)
            {
                var selectionObj = data.value;
                var totalSize = self.datasource.totalSize();
                var i, j;
                for (i = 0; i < totalSize; i++)
                {
                    self.datasource.at(i).then(function (row) {
                        var foundInSelection = false;
                        if (selectionObj)
                        {
                            for (j = 0; j < selectionObj.length; j++)
                            {
                                var range = selectionObj[j];
                                var startIndex = range.startIndex;
                                var endIndex = range.endIndex;

                                if (startIndex != null && startIndex.row != null)
                                {
                                    if (row.index >= startIndex.row && row.index <= endIndex.row)
                                    {
                                        row.data.Selected(['checked']);
                                        foundInSelection = true;
                                    }
                                }
                            }
                        }
                        if (!foundInSelection)
                        {
                            row.data.Selected([]);
                        }
                    });
                }
            }
        };
//    self.selectAllListener = function(event)
//    {
//        if (self._clearCheckboxHdr)
//        {
//            return;
//        }
//        var data = event.detail;
//        if (data != null)
//        {
//            var table = document.getElementById('table');
//            if (data['value'].length > 0)
//            {
//                var totalSize = self.datasource.totalSize();
//                table.selection = [{startIndex: {"row":0}, endIndex:{"row": totalSize - 1}}];
//            }
//            else
//            {
//                table.selection = [];
//            }
//        }
//    };
        self.currentSelection = function ()
        {
            var element = document.getElementById('table');
            var selectionObj = element.selection;
            var selectionTxt = "";
            var len = selectionObj ? selectionObj.length : 0;

            var i = 0;
            for (i = 0; i < len; i++)
            {
                var range = selectionObj[i];
                var startIndex = range.startIndex;
                var endIndex = range.endIndex;
                var startKey = range.startKey;
                var endKey = range.endKey;

//            if (startIndex != null && startIndex.row != null)
//            {
//               
//                selectionTxt = selectionTxt + "start row index: " + startIndex.row + "\n";
//            }
                if (startKey != null && startKey.row != null)
                {
                    selectionTxt = selectionTxt + startKey.row + "\n";
                }

//            if (startIndex != null && startIndex.column != null)
//            {
//                selectionTxt = selectionTxt + "start column index: " + startIndex.column +"\n";
//            }
                if (startKey != null && startKey.column != null)
                {
                    selectionTxt = selectionTxt + startKey.column + "\n";
                }
            }
            $('.selectionCurrent').val(selectionTxt);
        };


        self.currentSelection1 = function ()
        {
            var element = document.getElementById('table');
            var selectionObj = element.selection;
            var selectionTxt = "";
            var len = selectionObj ? selectionObj.length : 0;

            var i = 0;
            for (i = 0; i < len; i++)
            {
                var range = selectionObj[i];
                var startIndex = range.startIndex;
                var endIndex = range.endIndex;
                var startKey = range.startKey;
                var endKey = range.endKey;

                if (startKey != null && startKey.row != null)
                {
                    selectionTxt = selectionTxt + startKey.row + "\n";
                }
                if (startKey != null && startKey.column != null)
                {
                    selectionTxt = selectionTxt + startKey.column + "\n";
                }
            }
            $('.selectionCurrent1').val(selectionTxt);
        };

        self.currentSelection2 = function ()
        {
            var element = document.getElementById('table');
            var selectionObj = element.selection;
            var selectionTxt = "";
            var len = selectionObj ? selectionObj.length : 0;

            var i = 0;
            for (i = 0; i < len; i++)
            {
                var range = selectionObj[i];
                var startIndex = range.startIndex;
                var endIndex = range.endIndex;
                var startKey = range.startKey;
                var endKey = range.endKey;

                if (startKey != null && startKey.row != null)
                {
                    selectionTxt = selectionTxt + startKey.row + "\n";
                }
                if (startKey != null && startKey.column != null)
                {
                    selectionTxt = selectionTxt + startKey.column + "\n";
                }
            }
            $('.selectionCurrent2').val(selectionTxt);
        };

        self.currentSelection3 = function ()
        {
            var element = document.getElementById('table');
            var selectionObj = element.selection;
            var selectionTxt = "";
            var len = selectionObj ? selectionObj.length : 0;

            var i = 0;
            for (i = 0; i < len; i++)
            {
                var range = selectionObj[i];
                var startIndex = range.startIndex;
                var endIndex = range.endIndex;
                var startKey = range.startKey;
                var endKey = range.endKey;

                if (startKey != null && startKey.row != null)
                {
                    selectionTxt = selectionTxt + startKey.row + "\n";
                }
                if (startKey != null && startKey.column != null)
                {
                    selectionTxt = selectionTxt + startKey.column + "\n";
                }
            }
            $('.selectionCurrent3').val(selectionTxt);
        };


        var self = this;
        self.syncCheckboxes = function (event)
        {
            event.stopPropagation();
            if (event.currentTarget.id != 'table_checkboxset_hdr')
            {
                self._clearCheckboxHdr = true;
                $('#table_checkboxset_hdr')[0].value = [];
                self._clearCheckboxHdr = true;
            }
            setTimeout(function ()
            {
                // sync the checkboxes with selection obj
                var selectionObj = [];
                var totalSize = self.datasource.totalSize();
                var i;
                for (i = 0; i < totalSize; i++)
                {
                    self.datasource.at(i).then(function (row) {
                        if (row.data.Selected().length > 0 &&
                                row.data.Selected()[0] == 'checked')
                        {
                            selectionObj.push({startIndex: {row: row.index}, endIndex: {row: row.index}});
                        }

                        if (row.index == totalSize - 1)
                        {
                            table.selection = selectionObj;
                        }
                    });
                }
            }, 0);
        }


    }
    var vm = new SalesContractApprovalContentViewModel;

    $(document).ready
            (
                    function ()
                    {
                        // var table = document.getElementById('table');
                        // ko.applyBindings(vm, table);
                        // table.addEventListener('selectionChanged', vm.selectionListener);
                        $('#selectionButton').on('click', vm.currentSelection);
                        $('#selectionButton1').on('click', vm.currentSelection1);
                        $('#selectionButton2').on('click', vm.currentSelection2);
                        $('#selectionButton3').on('click', vm.currentSelection3);
//          $('#table').on('click', '.oj-checkboxset', vm.syncCheckboxes);
                    }
            )

    return SalesContractApprovalContentViewModel;
});
