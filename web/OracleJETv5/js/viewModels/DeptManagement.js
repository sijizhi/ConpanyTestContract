/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * DeptManagement module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojoffcanvas', 'ojs/ojbutton', 'ojs/ojmodule', 'ojs/ojdefer'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function DeptManagementContentViewModel() {
        var self = this;
                this.drawer =
      {
        "displayMode": "push",
        "selector": "#drawer",
        "content": "#main"
      };
      this.toggleDrawer = function()
      {
        return oj.OffcanvasUtils.toggle(self.drawer);
      };
    }
    
    return DeptManagementContentViewModel;
});
