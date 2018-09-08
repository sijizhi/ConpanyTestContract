/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//判断点击用户
function choiceone(id) {
    var a = document.getElementsByClassName("oj-pagingcontrol-nav");
    a.style = "margin-left:35%";
    var iframe_1 = document.getElementById("iframe_1");
    var iframe_2 = document.getElementById("iframe_3");
    //判断如果为客户信息显示隐藏相关内容
    if (id.innerHTML == "客户信息") {
        if (iframe_1.style.display == "none") {
            iframe_1.style = "display:block;width:80%;height:100%;margin-top:-100px";
            iframe_2.style = "display:none";
        } else if (iframe_1.style.display == "block") {
            iframe_1.style = "display:none";
        }
    }
    //判断如果为供应商信息显示隐藏相关内容
    if (id.innerHTML == "供应商信息") {
        if (iframe_2.style.display == "none") {
            iframe_2.style = "display:block;width:80%;height:100%;margin-top:-100px;padding-bottom:-500px";
            iframe_1.style = "display:none";
        } else if (iframe_2.style.display == "block") {
            iframe_2.style = "display:none";
        }
    }
}
function oncc() {
    alert("aa");
}
//判断生产管理
function choicetwo(id) {
    var a = document.getElementsByClassName("oj-pagingcontrol-nav");
    a.style = "margin-left:35%";
    var iframe_1 = document.getElementById("iframe_1");
    var iframe_2 = document.getElementById("iframe_3");
    //判断如果为客户信息显示隐藏相关内容
    if (id.innerHTML == "产品管理") {

        if (iframe_1.style.display == "none") {
            iframe_2.style = "display:none";
            iframe_1.style = "display:block;width:80%;height:100%;margin-top:-100px";
        } else if (iframe_1.style.display == "block") {
            iframe_1.style = "display:none";
        }
    }
    //判断如果为供应商信息显示隐藏相关内容
    if (id.innerHTML == "物料管理") {

        if (iframe_2.style.display == "none") {
            iframe_1.style = "display:none";
            iframe_2.style = "display:block;width:80%;height:100%;margin-top:-100px;padding-bottom:-500px";
        } else if (iframe_2.style.display == "block") {
            iframe_2.style = "display:none";
        }
    }

}

//判断系统管理
function choicethree(id) {
    var a = document.getElementsByClassName("oj-pagingcontrol-nav");
    a.style = "margin-left:35%";
    var iframe_1 = document.getElementById("iframe_1");
    var iframe_2 = document.getElementById("iframe_3");
    //判断如果为客户信息显示隐藏相关内容

    if (id.innerHTML == "部门管理") {

        if (iframe_1.style.display == "none") {
            iframe_2.style = "display:none";
            iframe_1.style = "display:block;width:80%;height:100%;margin-top:-100px";
        } else if (iframe_1.style.display == "block") {
            iframe_1.style = "display:none";
        }
    }
    //判断如果为供应商信息显示隐藏相关内容
    if (id.innerHTML == "人员管理") {
        if (iframe_2.style.display == "none") {
            iframe_1.style = "display:none";
            iframe_2.style = "display:block;width:80%;height:100%;margin-top:-100px;padding-bottom:-500px";
        } else if (iframe_2.style.display == "block") {
            iframe_2.style = "display:none";
        }
    }
}
//销售管理模块
function choicefour(id) {
    var a = document.getElementsByClassName("oj-pagingcontrol-nav");
    a.style = "margin-left:35%";
    var iframe_1 = document.getElementById("iframe_1");
    var iframe_2 = document.getElementById("iframe_3");
    //判断如果为客户信息显示隐藏相关内容
    if (id.innerHTML == "销售合同审批") {
        if (iframe_1.style.display == "none") {
            iframe_1.style = "display:block;width:80%;height:100%;margin-top:-100px";
            iframe_2.style = "display:none";
        } else if (iframe_1.style.display == "block") {
            iframe_1.style = "display:none";
        }
    }
    //判断如果为供应商信息显示隐藏相关内容
    if (id.innerHTML == "销售合同") {
        if (iframe_2.style.display == "none") {
            iframe_2.style = "display:block;width:80%;height:100%;margin-top:-100px;padding-bottom:-500px";
            iframe_1.style = "display:none";
        } else if (iframe_2.style.display == "block") {
            iframe_2.style = "display:none";
        }
    }


}


//判断采购合同
function choicefive(id) {
    var a = document.getElementsByClassName("oj-pagingcontrol-nav");
    a.style = "margin-left:35%";
    var iframe_1 = document.getElementById("iframe_1");
    //判断如果为客户信息显示隐藏相关内容
    if (id.innerHTML == "采购合同") {
        if (iframe_1.style.display == "none") {
            iframe_1.style = "display:block;width:80%;height:100%;margin-top:-100px";
        } else if (iframe_1.style.display == "block") {
            iframe_1.style = "display:none";
        }
    }
}

function cardadd() {
    var createUser = $(".createUser").val();
    var createDeptName = $(".createDeptName").val();
    var companyName = $(".companyName").val();
    var email = $(".email").val();
    var remarks = $(".remarks").val();
    var companyAddres = $(".companyAddres").val();
    var linkMan = $(".linkMan").val();
    var linkManPhone = $(".linkManPhone").val();
    var mobilePhone = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    var emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (createUser != "" && createDeptName != "" && companyName != "" && email != "" && companyAddres != "" && linkMan != "" && linkManPhone != "") {
        if ((emailreg.test(email))) {
            if ((mobilePhone.test(linkManPhone))) {
                $.ajax({
                    url: "http://localhost:8081/contract/customer/addCustomer",
                    type: "post",
                    data: {createUser: createUser, createDeptName: createDeptName, companyName: companyName, email: email, companyAddres: companyAddres, linkMan: linkMan, linkManPhone: linkManPhone, remarks: remarks},
                    dataytpe: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("添加成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=card");
                        } else if (data.result == "false") {
                            alert("添加失败!");
                        }
                    }
                })
            } else {
                alert("请手机号输入是否正确！");
            }
        } else {
            alert("请检查邮箱格式！");
        }

    } else {
        alert("请检查是否全部填写");
    }
}
function provideradd() {
    var createUser = $(".createUser").val();
    var createDeptName = $(".createDeptName").val();
    var companyName = $(".companyName").val();
    var email = $(".email").val();
    var remarks = $(".remarks").val();
    var companyAddres = $(".companyAddres").val();
    var linkMan = $(".linkMan").val();
    var linkManPhone = $(".linkManPhone").val();
    var mobilePhone = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    var emailreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (createUser != "" && createDeptName != "" && companyName != "" && email != "" && companyAddres != "" && linkMan != "" && linkManPhone != "") {

        if ((emailreg.test(email))) {
            if ((mobilePhone.test(linkManPhone))) {
                $.ajax({
                    url: "http://localhost:8081/contract/provider/addProvider",
                    type: "post",
                    data: {createUser: createUser, createDeptName: createDeptName, companyName: companyName, email: email, companyAddres: companyAddres, linkMan: linkMan, linkManPhone: linkManPhone, remarks: remarks},
                    dataytpe: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("添加成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=provider");
                        } else if (data.result == "false") {
                            alert("添加失败!");
                        }
                    }
                })
            } else {
                alert("请手机号输入是否正确！");
            }
        } else {
            alert("请检查邮箱格式！");
        }
    } else {
        alert("请检查是否全部填写");
    }
}
//返回客户管理
function cardback() {
    location.replace("http://localhost:8383/OracleJETv5/index.html?root=card");
}
//返回供应商管理
function providerback() {
    location.replace("http://localhost:8383/OracleJETv5/index.html?root=provider");
}
//返回销售合同审批
function approvalback() {
    location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
}

function modifysave() {
    var customerId = $(".customerId").val();
    var modifyUser = $(".modifyUser").val();
    var modifyDeptName = $(".modifyDeptName").val();
    var companyName = $(".companyName").val();
    var email = $(".email").val();
    var remarks = $(".remarks").val();
    var companyAddres = $(".companyAddres").val();
    var linkMan = $(".linkMan").val();
    var linkManPhone = $(".linkManPhone").val();
    $.ajax({
        url: "http://localhost:8081/contract/customer/modifyCustomer",
        type: "post",
        data: {customerId: customerId, modifyUser: modifyUser, modifyDeptName: modifyDeptName, companyName: companyName, email: email, remarks: remarks, companyAddres: companyAddres, linkMan: linkMan, linkManPhone: linkManPhone},
        datatype: "json",
        success: function (data) {
            if (data.result == "true") {
                alert("修改成功!");
                location.replace("http://localhost:8383/OracleJETv5/index.html?root=card");
            } else if (data.result == "false") {
                alert("修改失败!");
            }
        }
    })
}
function providermodifysave() {
    var providerId = $(".providerId").val();
    var modifyUser = $(".modifyUser").val();
    var modifyDeptName = $(".modifyDeptName").val();
    var companyName = $(".companyName").val();
    var email = $(".email").val();
    var remarks = $(".remarks").val();
    var companyAddres = $(".companyAddres").val();
    var linkMan = $(".linkMan").val();
    var linkManPhone = $(".linkManPhone").val();
    $.ajax({
        url: "http://localhost:8081/contract/provider/modifyProvider",
        type: "post",
        data: {providerId: providerId, modifyUser: modifyUser, modifyDeptName: modifyDeptName, companyName: companyName, email: email, remarks: remarks, companyAddres: companyAddres, linkMan: linkMan, linkManPhone: linkManPhone},
        datatype: "json",
        success: function (data) {
            if (data.result == "true") {
                alert("修改成功!");
                location.replace("http://localhost:8383/OracleJETv5/index.html?root=provider");
            } else if (data.result == "false") {
                alert("修改失败!");
            }
        }
    })
}
//添加合同审批
function approvaladd() {
    var selectedval2 = $("#selectedval2").text();
    var selectedval1 = $("#selectedval1").text();
    var salePrices = $(".salePrices").val();
    var amount = $(".amount").val();
    var totalSales = $(".totalSales").val();
    var companyName = $(".companyName").val();
    var salePrice = $(".salePrice").val();
    var productCost = $(".productCost").val();
    var createUser = $(".createUser").val();
    var createDate = $(".createDate").val();
    var remarks = $(".remarks").val();
    var productName = $(".productName").val();
    var salePrice = $(".salePrice").val();
    var pricereg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
    var numreg = /^\d{1,}$/;
    if (selectedval2 != "" && selectedval1 != "" && salePrices != "" && amount != "" && totalSales != "") {
        if (pricereg.test(salePrices)) {
            if (numreg.test(amount)) {
                $.ajax({
                    url: "http://localhost:8081/contract/approval/addApproval",
                    type: "post",
                    data: {salePrice: salePrices, amount: amount, totalSales: totalSales, createUser: createUser, remarks: remarks, companyName: companyName, productName: productName.toString(), cost: Number(productCost), price: Number(salePrice)},
                    datatype: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("添加成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
                        } else if (data.result == "false") {
                            alert("添加失败!");
                        }
                    }
                })
            } else {
                alert("销售量请输入正整数");
            }
        } else {
            alert("销售价格式错误请输入数字（最多两位小数）");
        }

    } else {
        alert("请注意填写完整");
    }
}
//通过销售合同审批
function beapproved() {
    var num = location.search;
    //传递过来的url+ID
    var result = num.match(/\?.*indexValue=([^&]*).*/);
    //赋值给ID
    var id = result[1];
    $.ajax({
        url: "http://localhost:8081/contract/getSijieUser",
        type: "post",
        datatype: "json",
        async: false,
        success: function (data) {
            var deptId = data.user.deptId;
            if (deptId == 8) {
                $.ajax({
                    url: "http://localhost:8081/contract/approval/modifyApproval",
                    type: "post",
                    data: {salesApprovalId: id, approvalStatus: 1},
                    datatype: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("审批成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
                        } else if (data.result == "false") {
                            alert("审批失败!");
                        }
                    }
                })
            } else if (deptId == 4) {
                $.ajax({
                    url: "http://localhost:8081/contract/approval/modifyApproval",
                    type: "post",
                    data: {salesApprovalId: id, approvalStatus: 2},
                    datatype: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("审批成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
                        } else if (data.result == "false") {
                            alert("审批失败!");
                        }
                    }
                })
            } else if (deptId == 5) {
                $.ajax({
                    url: "http://localhost:8081/contract/approval/modifyApproval",
                    type: "post",
                    data: {salesApprovalId: id, approvalStatus: 3},
                    datatype: "json",
                    success: function (data) {
                        if (data.result == "true") {
                            alert("审批成功!");
                            location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
                        } else if (data.result == "false") {
                            alert("审批失败!");
                        }
                    }
                })
            }

        }
    })

}
//拒绝审批
function refusedapproval() {
    var num = location.search;
    //传递过来的url+ID
    var result = num.match(/\?.*indexValue=([^&]*).*/);
    //赋值给ID
    var id = result[1];
    $.ajax({
        url: "http://localhost:8081/contract/approval/modifyApproval",
        type: "post",
        data: {salesApprovalId: id, approvalStatus: 4},
        datatype: "json",
        success: function (data) {
            if (data.result == "true") {
                alert("拒绝成功!");
                location.replace("http://localhost:8383/OracleJETv5/index.html?root=SalesContractApproval");
            } else if (data.result == "false") {
                alert("拒绝失败!");
            }
        }
    })
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//部门更新
function save_dept() {
    var deptId = $("#control1").val();
    var deptName = $("#control2").val();

    $.ajax({
        url: "http://localhost:8081/contract/dept/update_saveDept",
        type: "post",
        data: {deptId: deptId, deptName: deptName},
        dataType: "json",
        success: function (data) {
            if (data == true) {
                alert("更新成功");
                location.replace("http://localhost:8383/OracleJETv5/index.html?root=dept");
            } else {
                alert("更新失败(该部门已存在)");
            }
        }
    });
}
//取消
function reset_dept() {
    url = "http://localhost:8383/OracleJETv5/index.html?root=dept";
    location.replace(url);
}
//取消
function reset_employee() {
    url = "http://localhost:8383/OracleJETv5/index.html?root=employee";
    location.replace(url);
}

//部门新增
function save_adddept() {
    var deptName = $("#control2").val();
    // alert(deptName)
    if (deptName != "") {
        $.ajax({
            url: "http://localhost:8081/contract/dept/add_saveDept",
            type: "post",
            data: {deptName: deptName},
            dataType: "json",
            success: function (data) {
                if (data == true) {
                    alert("添加成功");
                    location.replace("http://localhost:8383/OracleJETv5/index.html?root=dept");
                } else {
                    alert("添加失败(该部门已存在)");
                }
            }
        });
    } else {
        alert("请输入部门名称");
    }
}

//添加用户信息
function save_employee() {
    //姓名

    var userName = $("#control2").val();
    //账号
    var userCode = $("#control3").val();
    //密码
    var userPassword = $("#control4").val();
    //性别
    var gender = $("#selectedval1").text();
    //角色
    var rolerId = $("#selectedval2").text();
    //部门
    var deptId = $("#selectedval3").text();

    if (userName != "" && userCode != "" && userPassword != "" && gender != "" && rolerId != "" && deptId != "") {

        $.ajax({
            url: "http://localhost:8081/contract/users/insertUsers",
            type: "post",
            data: {userName: userName, userCode: userCode, userPassword: userPassword, gender: gender, rolerId: rolerId, deptId: deptId},
            dataType: "json",
            async: false,
            success: function (data) {
                if (data == true) {
                    alert("添加成功");
                    location.replace("http://localhost:8383/OracleJETv5/index.html?root=employee");
                } else {
                    alert("添加失败");
                }
            }
        });
    } else {
        alert("请将信息填写完整");
    }

}

//修改用户信息
function modify_employee() {

    //页面传值（一个）
    var result;
    var url = window.location.search; //获取url中"?"符后的字串  
    if (url.indexOf("?") != -1) {
        url = url.substr(url.indexOf("&"));
        if (url.indexOf("=") != -1) {
            var result = url.substr(url.indexOf("=") + 1);
        }
    }
    //姓名
    var userName = $("#control2").val();
    //账号
    var userCode = $("#control3").val();
    //性别
    var gender = $("#selectedval1").text();
    //alert(gender);
    //角色
    var rolerId = $("#selectedval2").text();
    //alert(rolerId);
    //部门
    var deptId = $("#selectedval3").text();
    //alert(deptId);
    if (userName != "" && userCode != "" && gender != "" && rolerId != "" && deptId != "") {
        //alert("22");
        $.ajax({
            url: "http://localhost:8081/contract/users/modifyUsers",
            type: "post",
            data: {indexValue: result, userName: userName, userCode: userCode, gender: gender, rolerId: rolerId, deptId: deptId},
            dataType: "json",
            async: false,
            success: function (data) {
                if (data == true) {
                    alert("修改成功");
                    location.replace("http://localhost:8383/OracleJETv5/index.html?root=employee");
                } else {
                    alert("修改失败");
                }
            }
        });
    } else {
        alert("请将信息填写完整");
    }
}


//采购合同的取消
function reset_purchase() {
    url = "http://localhost:8383/OracleJETv5/index.html?root=purchasecontract";
    location.replace(url);
}
//采购合同的新增保存
function save_purchase(){
    var pprice= /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/; //价格正则
    var pprice1= /^\d{1,}$/; //整数正则
   
    //创建人
    var createUser = $("#createUser").val();
    //创建部门
    var createDept = $("#createDept").val();
    //创建时间
    var createDate = $("#createDate").text();
    //供应商编号
    var providerId = $("#providerId").val().toString();
    //alert(providerId);
    //公司名称
    var companyName = $("#controlName").val().toString();
    //公司地址
    var companyAddres = $("#controlAddres").val().toString();
    //物料名称
    var material = $("#selectedval2").text();
    //进价
    var importPrice = $("#importPrice").val();
    //进货量
    var importAmount = $("#importAmount").val();
    //合同名称
    var contractName = $("#contractName").val();
    //alert(contractName);
    //备注
    var valueremark = $(".remark_value").val();
    //alert(valueremark);
    //采购人员
    var importPeople = $("#importPeople").val();
    // alert(importPeople);
    //已付款金额
    var paymoney = $("#paymoney").val();
    //alert(paymoney);
   
    if(paymoney!=""&&importPeople!=""&&createUser!=""&&createDept!=""&&createDate!=""&&providerId!=""&&companyName!=""&&companyAddres!=""&&material!=""&&importPrice!=""&&importAmount!=""&&contractName!=""){
      
       if(!pprice.test(importPrice)){
           alert("进价的格式不正确（有两位小数）");
       }else{
           if(!pprice1.test(importAmount)){
               alert("数量格式不正确（整数）");
           }else{
              if(!pprice.test(paymoney)){
                  alert("付款价格格式不正确（有两位小数）")
              } else{
                  $.ajax({
                        url:"http://localhost:8081/contract/pcontract/insertPurchaseContract",
                        type:"post",
                        data:{createDate:createDate,companyName:companyName,companyAddres:companyAddres,
                            material:material,importPrice:importPrice,importAmount:importAmount,contractName:contractName,
                            valueremark:valueremark,importPeople:importPeople,paymoney:paymoney,providerId:providerId,createUser:createUser},
                        dataType:"json",
                        success:function(data){
                            if(data==true){
                                alert("添加成功");
                                location.replace("http://localhost:8383/OracleJETv5/index.html?root=purchasecontract")
                            }else{
                                alert("添加失败");
                            }
                        }
                    });
              }
           }
       } 
    }else {
        alert("数据不完整");
    }
}

//修改并保存销售合同信息
function save_purchasemodify(){
    var pprice= /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/; //价格正则
    var pprice1= /^\d{1,}$/; //整数正则
    //页面传值（一个）
    var result;
    var url = window.location.search; //获取url中"?"符后的字串  
    if (url.indexOf("?") != -1) {
        url = url.substr(url.indexOf("&"));
        if (url.indexOf("=") != -1) {
            result = url.substr(url.indexOf("=") + 1);
        }
    }

    //修改人
    var modifyUser = $("#modifyUser").val();
    //修改时间
    var modifydate = $("#createDate").text();
    //供应商编号
    var providerId = $("#selectedval1").text();
    //供应商名称
    var providerName = $("#controlName").val();
    //供应商地址
    var providerAddress = $("#controlAddres").val();
    //物料名称
    var material = $("#selectedval2").text();
    //进价
    var importPrice = $("#importPrice").val();
    //进货量
    var importAmount = $("#importAmount").val();
    //合同名
    var contractName = $("#contractName").val();
    //采购人
    var importPeople = $("#importPeople").val();
    //已付款
    var paymoney = $("#paymoney").val();
    //备注
    var value_remark = $(".value_remark").val();
    //alert("--"+value_remark);
    if(paymoney!=""&&importPeople!=""&&modifyUser!=""&&modifydate!=""&&providerName!=""&&providerId!=""&&providerAddress!=""&&material!=""&&importPrice!=""&&importAmount!=""&&contractName!=""){
        if(!pprice.test(importPrice)){
           alert("进价的格式不正确（有两位小数）");
       }else{
           if(!pprice1.test(importAmount)){
               alert("数量格式不正确（整数）");
           }else{
              if(!pprice.test(paymoney)){
                  alert("付款价格格式不正确（有两位小数）")
              } else{
                  $.ajax({
                        url:"http://localhost:8081/contract/pcontract/updatePurchaseById",
                        type:"post",
                        data:{modifyUser:modifyUser,modifydate:modifydate,providerId:providerId,contractName:contractName,providerAddress:providerAddress,
                              material:material,importPrice:importPrice,importAmount:importAmount,providerName:providerName,importPeople:importPeople,paymoney:paymoney,
                                value_remark:value_remark,result:result},
                        dataType:"json",
                        success:function(data){
                            if(data==true){
                                alert("更新成功");
                                location.replace("http://localhost:8383/OracleJETv5/index.html?root=purchasecontract")
                            }else{
                                alert("更新失败");
                            }
                        }
                    }); 
              }
          }
      }        
    }else {
        alert("请将数据填写完整");
    }
}



function getCookie(c_name)
            {
            if (document.cookie.length>0)
              {
              c_start=document.cookie.indexOf(c_name + "=")
              if (c_start!=-1)
                { 
                c_start=c_start + c_name.length+1 
                c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
                } 
              }
            return "";
            }
            
  function ifLogin(param){
      $.ajax({
            url:"http://localhost:8081/contract/getLoginUser/"+param,
            type:"post",
            dataType:"json",
            async:false,
            success:function(data){
               // console.log(data);
              //  alert(data.user.userName);
                if(data.user.length==0){
                    window.location.href="login.html";
                }else{
                    alert("此页面能直接用！");
                }
            }
        });
  }