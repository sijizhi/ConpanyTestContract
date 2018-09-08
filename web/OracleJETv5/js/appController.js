/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'ojs/ojmodule-element', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas'],
  function(oj, ko, moduleUtils) {
     function ControllerViewModel() {
       var self = this;
      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'CardManagement': {label: 'CardManagement'},
         'card':{label:'card'},
         'unfold':{label:'unfold'},
         'customerInf':{label:'customerInf'},
         'ProductManagement':{label:'ProductManagement'},
         'productList':{label:'productList'},
         'productAdd':{label:'productAdd'},
         'productModify':{label:'productModify'},
         'productView':{label:'productView'},
         'materialList':{label:'materialList'},
         'materialAdd':{label:'materialAdd'},
         'materialModify':{label:'materialModify'},
         'materialView':{label:'materialView'},
         'DeptManagement':{label:'DeptManagement', isDefault: true},
         'dept':{label:'dept'},
         'deptadd':{label:'deptadd'},

         'cardappend':{label:'cardappend'},
         'cardalter':{label:'cardalter'},
         'cardview':{label:'cardview'},
         'provider':{label:'provider'},
         'providerappend':{label:'providerappend'},
         'provideralter':{label:'provideralter'},
         'providerview':{label:'providerview'},
         'SalesContractManagement':{label:'SalesContractManagement'},
         'SalesContractApproval':{label:'SalesContractApproval'},
         'SalesContractApprovalAdd':{label:'SalesContractApprovalAdd'},
         'SalesContractApprovalStatus':{label:'SalesContractApprovalStatus'},
         //植思杰（销售合同）
         'salescontractList':{label:'salescontractList'},
         'salescontractAdd':{label:'salescontractAdd'},
         'salescontractView':{label:'salescontractView'},
         'salescontractModify':{label:'salescontractModify'},
         //施春林（采购合同）
         'purchasecontractManagement':{label:'purchasecontractManagement'},
         'purchasecontract':{label:'purchasecontract'},
         'purchasecontractadd':{label:'purchasecontractadd'},
         'purchasecontractquery':{label:'purchasecontractquery'},
         'purchasecontractmodify':{label:'purchasecontractmodify'},
         
         

         'deptmodify':{label:'deptmodify'},
         'deptquery':{label:'deptmodify'},
         'employee':{label:'employee'},
         'employeequery':{label:'employeemodify'},
         'employeeadd':{label:'employeeadd'},
         'employeemodify':{label:'employeemodify'},
         'purchasecontract':{label:'purchasecontract'},
         'purchasecontractadd':{label:'purchasecontractadd'}

       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      self.moduleConfig = ko.observable({'view':[], 'viewModel':null});
      ko.computed(function() {
        var name = self.router.moduleConfig.name();
        var viewPath = 'views/' + name + '.html';
        var modelPath = 'viewModels/' + name;
        var masterPromise = Promise.all([
          moduleUtils.createView({'viewPath':viewPath}),
          moduleUtils.createViewModel({'viewModelPath':modelPath})
        ]);
        masterPromise.then(
          function(values){ 
            self.moduleConfig({'view':values[0],'viewModel':values[1]}); 
          },
          function(reason){}
        );
      });
       
      // Navigation setup
      var navData = [
      {name: '卡片管理', id: 'CardManagement',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: '生产管理', id: 'ProductManagement',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: '系统管理', id: 'DeptManagement',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: '销售管理', id: 'SalesContractManagement',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: '采购管理', id: 'purchasecontractManagement',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'}
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("合同管理系统");
//      //获取 上一个搜索页面传来的参数
//      var searchUrl =window.location.href;
//      var searchData =searchUrl.split("=");        //截取 url中的“=”,获得“=”后面的参数
//      var searchText =decodeURI(searchData[1]);   //decodeURI解码
      var userName;
      // User Info used in Global Navigation area
      $.ajax({
        url: "http://localhost:8081/contract/getSijieUser",
        type: "post",
        datatype: "json",
        async: false,
          success:function(param){
               userName = param.user.userName;
          }
      })
      self.userLogin = ko.observable(userName);
      $("#out").click(function(){
          location.href="login.html"
      })
      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
     }

     return new ControllerViewModel();
  }
);
