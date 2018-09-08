/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * dept module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojcheckboxset',
    'ojs/ojarraytabledatasource','ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource'
], function (oj, ko,$) {
    /**
     * The view model for the main content view template
     */
    
    function deptContentViewModel() {
        var self = this;
        var deptArray=[];
        var datasource=ko.observableArray();
        var testdept= getCookie("the_cookie");
        if(testdept.length==0){
            window.location.href="login.html";
        }else{
            ifLogin(testdept);
        }
        $.ajax({
            url:"http://localhost:8081/contract/dept/getDept",
            type:"post",
            dataType:"json",
            async:false,
            success:function(data){
                $.each(data,function(index,item){
                     var a={Selected: ko.observable([]), DepartmentId:item.deptId , DepartmentName:item.deptName };                     
                     deptArray.push(a); 
                });
            }
        });
    self.datasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'}));
    
    self.columnArray = [{"renderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_tmpl", true),
                         "headerRenderer": oj.KnockoutTemplateUtils.getRenderer("checkbox_hdr_tmpl", true),
                         "id": "column1"},
                        {"headerText": "部门编号",
                         "field": "DepartmentId",
                         "id": "column2"},
                        {"headerText": "部门名称",
                         "field": "DepartmentName",
                         "id": "column3"}];
                 
    self.selectionListener = function(event)
    {
        var data = event.detail;
        if (data != null)
        {
            var selectionObj = data.value;
            var totalSize = self.datasource.totalSize();
            var i, j;
            for (i = 0; i < totalSize; i++)
            {
                self.datasource.at(i).then(function(row) {
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
    self.delete=function(){
        alert("ssss");
    };

    self.currentSelection = function()
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
                selectionTxt = selectionTxt+ startKey.row + "\n";
            }

//            if (startIndex != null && startIndex.column != null)
//            {
//                selectionTxt = selectionTxt + "start column index: " + startIndex.column +"\n";
//            }
            if (startKey != null && startKey.column != null)
            {
                selectionTxt = selectionTxt + startKey.column +"\n";
            }
        }
        $('.selectionCurrent').val(selectionTxt);
    };
    
    
    self.currentSelection1 = function()
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
                selectionTxt = selectionTxt+ startKey.row + "\n";
            }
            if (startKey != null && startKey.column != null)
            {
                selectionTxt = selectionTxt + startKey.column +"\n";
            }
        }
        $('.selectionCurrent1').val(selectionTxt);
    };
    
    self.currentSelection2 = function()
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
                selectionTxt = selectionTxt+ startKey.row + "\n";
            }
            if (startKey != null && startKey.column != null)
            {
                selectionTxt = selectionTxt + startKey.column +"\n";
            }
        }
        $('.selectionCurrent2').val(selectionTxt);
    };
    

    
    var self = this;
    self.syncCheckboxes = function(event)
    {
        event.stopPropagation();
        if (event.currentTarget.id != 'table_checkboxset_hdr')
        {
            self._clearCheckboxHdr = true;
            $('#table_checkboxset_hdr')[0].value = [];
            self._clearCheckboxHdr = true;
        }
        setTimeout(function()
        {
            // sync the checkboxes with selection obj
            var selectionObj = [];
            var totalSize = self.datasource.totalSize();
            var i;
            for (i = 0; i < totalSize; i++)
            {
                self.datasource.at(i).then(function(row) {
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
    var vm = new deptContentViewModel;

    $(document).ready
    (
      function()
      {
        
          $('#selectionButton').on('click', vm.currentSelection);
          $('#selectionButton1').on('click', vm.currentSelection1);
          $('#selectionButton2').on('click', vm.currentSelection2);
//          $('#table').on('click', '.oj-checkboxset', vm.syncCheckboxes);
      }
    );
    return new deptContentViewModel();
});
