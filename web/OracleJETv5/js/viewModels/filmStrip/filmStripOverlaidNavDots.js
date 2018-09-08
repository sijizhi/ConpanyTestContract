define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],
function(oj, ko)
{     
    var ViewModel = function(moduleParams)
    {
      var self = this;
      self.pagingModel = ko.observable(null);
      self.chemicals = [
          { name: 'Hydrogen' },
          { name: 'Helium' },
          { name: 'Lithium' },
          { name: 'Beryllium' },
          { name: 'Boron' },
          { name: 'Carbon' }
      ];

      getItemInitialDisplay = function(index)
      {
        return index < 1 ? '' : 'none';
      };
      
      self.handleBindingsApplied = function()
      {
        var filmStrip = document.getElementById('filmStrip');
        var busyContext = oj.Context.getContext(filmStrip).getBusyContext();
        busyContext.whenReady().then(function ()
        {
          // Set the Paging Control pagingModel
          self.pagingModel(filmStrip.getPagingModel());
        });
      };
    }

    return ViewModel;
});