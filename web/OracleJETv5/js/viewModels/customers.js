/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'diagramLayouts/DemoGridLayout',
          'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojdiagram','ojs/ojjsondiagramdatasource','ojs/ojmenu'],
 function(oj, ko, $, layout) {
  
    function CustomerViewModel() {
      var self = this;
      var colorHandler = new oj.ColorAttributeGroupHandler();
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      this.onDrop1 = function (event, context) {
        onDrop(event, context, self.nodes1, true);
      };
      this.onDrop2 = function (event, context) {
        onDrop(event, context, self.nodes2, false);
      };
      this.onLinkDrop = function (event, context) {
        onDrop(event, context, self.nodes2, false);
      };
            //context menu bindings
      var node, link;
      self.selectedMenuItem = ko.observable("(None selected yet)");
      self.beforeOpenFunction = function (event) {
        var target = event.detail.originalEvent.target;
        var diagram = document.getElementById("diagram1");
        var context = diagram.getContextByNode(target);
        node = null, link = null;
        if (context != null) {
          if (context.subId == "oj-diagram-node")
            node = diagram.getNode(context["index"]);
          else if (context.subId == "oj-diagram-link")
            link = diagram.getLink(context["index"]);
        }
      };
      self.menuItemAction = function (event) {
        var text = event.target.textContent;
        if (node) {
          self.selectedMenuItem(text + " from Node " + node.id);
        } else if (link) {
          self.selectedMenuItem(text + " from Link " + link.id);
        } else {
          self.selectedMenuItem(text + " from diagram background");
        }
      };
      function onDrop (event, context, nodes, linkCleanUp) {
        var diagramData = event.dataTransfer.getData('text/nodes1') || event.dataTransfer.getData('text/nodes2');
        var newNodeId;        
        // create new node
        if (diagramData) {
          var dataContext = JSON.parse(diagramData)[0];
          //remove specific node from from it's current location
          self.nodes1.remove(function (s) {return s.id === dataContext.id});
          self.nodes2.remove(function (s) {return s.id === dataContext.id});
          if (linkCleanUp)
            self.links2.remove(function (s) {return s.startNode === dataContext.id || s.endNode === dataContext.id});
          //add node to the target
          dataContext.data.x = context.nodeContext ? context.x + 100 : context.x;
          dataContext.data.y = context.y;
          newNodeId=dataContext.data.id;
          nodes.push(dataContext.data);
        }
        if (context.nodeContext) {
          var startNodeId = context.nodeContext.id;
          self.links2.push(createLink('L' + startNodeId + '_' + newNodeId, startNodeId, newNodeId));
        }
        else if (context.linkContext){
          var linkId = context.linkContext.id, 
            startNode = context.linkContext.data.startNode, 
            endNode = context.linkContext.data.endNode;
          self.links2.remove(function (s) {return s.id === linkId});
          self.links2.push(createLink('L' + startNode + '_' + newNodeId, startNode, newNodeId));
          self.links2.push(createLink('L' + newNodeId + '_' + endNode, newNodeId, endNode));
        }
      };
      function createNode(prefix, index, category, color) {
        var shape = category == 0 ? 'square' : category == 1 ? 'circle' : 'human';
        return {
          id: prefix + index,
          label: prefix + index,
          shortDesc: 'Node ' + prefix + index  + ', category ' + category,
          icon: {color: color, width: 40, height: 40, shape:shape},
          x: index*70+15, y:index*70+15
        };
      }
      function createLink(index, startId, endId) {
        return {
          id: 'L' + index,
          shortDesc: 'Link L' + index + ', connects ' + startId + ' to ' + endId,
          startNode: startId,
          endNode: endId, width:2
        };
      }
      function generateNodes (prefix, count) {
        var nodes = [];
        for (var i = 0; i < count; i++) {
          var category = i % 3; //3 categories of nodes
          nodes.push(createNode(prefix, i, category, colorHandler.getValue(category)));
        }
        return nodes;
      };
      function generateLinks (prefix, count) {
        var links = [];
        for (var i = 0; i < count; i++) {
          links.push(createLink(i, prefix + i, prefix + (i + 1)));
        }
        return links;
      };
      
      function labelLayoutFunc (layoutContext, node) {
        var nodeBounds = node.getContentBounds();
        var nodePos = node.getPosition();
        var labelLayout = {
          'x':nodeBounds.x + nodePos.x + .5 * (nodeBounds.w),
          'y':nodeBounds.y + nodePos.y + .5 * (nodeBounds.h),
          'halign':'center',
          'valign':'middle'
        };
        return labelLayout;
      };
      
      function linkPathFunc(layoutContext, link) {
        var node1 = layoutContext.getNodeById(link.getStartId());
        var node2 = layoutContext.getNodeById(link.getEndId());
        var n1Pos = node1.getPosition(), n2Pos = node2.getPosition();
        var n1Bounds = node1.getBounds(), n2Bounds = node2.getBounds();          
        var startX = n1Pos.x + .5*n1Bounds.w;
        var startY = n1Pos.y + .5*n1Bounds.h;
        var endX = n2Pos.x + .5*n2Bounds.w;
        var endY = n2Pos.y + .5*n2Bounds.h;
        return [startX, startY, endX, endY];
      };

      this.nodes1 = ko.observableArray(generateNodes('A', 12));
      this.nodes2 = ko.observableArray(generateNodes('B', 3));
      this.links2 = ko.observableArray(generateLinks('B', 2));
      this.data1 = ko.pureComputed(function() {
        return new oj.JsonDiagramDataSource({'nodes':self.nodes1()});
      });
      this.data2 = ko.pureComputed(function() {
        return new oj.JsonDiagramDataSource({'nodes':self.nodes2(),'links':self.links2()});
      });
      this.gridLayout = layout.gridLayout();
      this.dropLayout = ko.pureComputed(function() { 
        return oj.DiagramUtils.getLayout({
            'nodes':  this.nodes2(),
            'links':  this.links2(),
            'nodeDefaults':{'labelLayout':labelLayoutFunc},
            'linkDefaults':{'path': linkPathFunc},
            'viewport': function (layoutContext) {
              if (layoutContext.getCurrentViewport()) {
                return layoutContext.getCurrentViewport();
              }
              else
                return layoutContext.getComponentSize();
              }
          }) 
        }, this);
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new CustomerViewModel();
  }
);
