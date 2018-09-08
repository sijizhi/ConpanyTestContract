/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox","ojs/ojoption"],function(e,t){!function(){e.__registerWidget("oj.ojCheckboxset",t.oj.editableValue,{version:"1.0.0",defaultElement:"<div>",widgetEventPrefix:"oj",options:{disabled:!1,labelledBy:null,required:!1,value:[]},refresh:function(){this._super(),this._setup()},widget:function(){return this.uiCheckboxset},validate:e.EditableValueUtils.validate,_InitOptions:function(i,n){var o,s,a=new Array;this._super(i,n),this._IsCustomElement()||e.EditableValueUtils.initializeOptionsFromDom([{attribute:"disabled",validateOption:!0},{attribute:"title"},{attribute:"required",coerceDomValue:!0,validateOption:!0}],n,this),this._IsCustomElement()?this._checkValueType(this.options.value):void 0===n.value?(this.$checkboxes=this._findCheckboxesWithMatchingName(),(o=this.$checkboxes.filter(":checked")).length>0&&(o.each(function(){a.push(t(this).val())}),s=a,this.option("value",s,{_context:{writeback:!0,internalSet:!0}})),void 0===this.options.value&&(this.options.value=[])):this._checkValueType(this.options.value)},_ComponentCreate:function(){var e=this.element;if(this._super(),e.is("fieldset"))throw new Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");e.uniqueId(),this._processOjOptions(),this.$checkboxes=this._findCheckboxesWithMatchingName(),this.$checkboxes._ojRadioCheckbox().attr("data-oj-internal",""),this.uiCheckboxset=e.addClass("oj-checkboxset oj-component").attr("role","group"),t(e.get(0).childNodes).filter(function(){return!this.getAttribute||"contextMenu"!==this.getAttribute("slot")}).wrapAll("<div class='oj-checkboxset-wrapper'></div>"),this._on(this._events),this._setup()},_ResetComponentState:function(){this._processOjOptions(),this.$checkboxes=this._findCheckboxesWithMatchingName(),this.$checkboxes.filter(".oj-checkbox").each(function(){var e=void 0!==t(this).attr("disabled")&&!!t(this).prop("disabled");t(this)._ojRadioCheckbox("option","disabled",e)}),this.$checkboxes.not(".oj-checkbox")._ojRadioCheckbox()},GetFocusElement:function(){return this._GetContentElement().filter(":focusable").first()[0]},_SetDisabledDom:function(e){},_IsRequired:function(){return this.options.required},_refreshRequired:e.EditableValueUtils._refreshRequired,_ValidateReturnBoolean:e.EditableValueUtils._ValidateReturnBoolean,_processOjOptions:function(){if(this._IsCustomElement()){var e,t,i=this._customOptionRenderer.bind(this),n=this.element.children("oj-option");if(n.length>0)for(e=0,t=n.length;e<t;e++)n[e].customOptionRenderer=i,this._initInputLabelFromOjOption(n[e]);if((n=this.element.children(".oj-checkboxset-wrapper").find("oj-option")).length>0)for(e=0,t=n.length;e<t;e++)n[e].customOptionRenderer=i,this._initInputLabelFromOjOption(n[e])}},_initInputLabelFromOjOption:function(e){var i,n,o=e;t(o).uniqueId();var s=o.getAttribute("id"),a=s+"|cb",r=document.getElementById(a);if(null!==r){for(n=o;(n=n.parentElement)&&"LABEL"!==n.tagName;);n&&(o.textContent&&""!==o.textContent?n.classList.remove("oj-helper-hidden"):n.classList.add("oj-helper-hidden"))}else i=document.createElement("span"),r=document.createElement("input"),n=document.createElement("label"),i.setAttribute("class","oj-choice-item"),r.setAttribute("type","checkbox"),r.setAttribute("id",a),n.setAttribute("for",a),o.textContent&&""!==o.textContent||n.classList.add("oj-helper-hidden"),o.parentElement.insertBefore(i,o),n.appendChild(o),i.appendChild(r),i.appendChild(n);var l=this.element[0].id,c=o.getAttribute("aria-label"),h=o.getAttribute("aria-labelledby");r.setAttribute("data-oj-option-id",s),l&&""!=l?r.setAttribute("name",l):r.removeAttribute("name"),c&&""!=c?r.setAttribute("aria-label",c):r.removeAttribute("aria-label"),h&&""!=h?r.setAttribute("aria-labelledby",h):r.removeAttribute("aria-labelledby"),o.disabled?r.setAttribute("disabled",!0):r.removeAttribute("disabled")},_customOptionRenderer:function(e){var i=e,n=i.getAttribute("id")+"|cb",o=document.getElementById(n);null!==o&&o.classList.contains("oj-checkbox")&&t(o)._ojRadioCheckbox("option","disabled",i.disabled)},_updateLabelledBy:e.EditableValueUtils._updateLabelledBy,_findCheckboxesWithMatchingName:function(){var t,i,n=this.element.find("input[type=checkbox]:first");return 0===n.length&&e.Logger.warn("Could not find any input type=checkbox within this element"),void 0===(t=n.attr("name"))?this.element.find("input[type=checkbox]").not("[name]"):(i="input[type=checkbox][name="+t+"]",this.element.find(i))},_NotifyContextMenuGesture:function(e,t,i){var n=this.element.find("input[type=checkbox]:tabbable").first();this._OpenContextMenu(t,i,{launcher:n})},_GetMessagingLauncherElement:function(){return this.widget()},_setup:function(){this._propagateDisabled(this.options.disabled),null!==this.$checkboxes&&(1===this.$checkboxes.length?this.element.addClass("oj-checkboxset-single"):this.element.removeClass("oj-checkboxset-single")),this.element.hasClass("oj-choice-direction-column")||this.element.hasClass("oj-choice-direction-row")||this.element.addClass("oj-choice-direction-column"),this._refreshRequired(this.options.required),this._updateLabelledBy(null,this.options.labelledBy,this.widget())},_events:{change:function(e){this._HandleChangeEvent(e)}},_checkValueType:function(e){void 0===e?this.option("value",[],{_context:{writeback:!0,internalSet:!0}}):this._confirmValueIsArray(e)},_confirmValueIsArray:function(e){if(!Array.isArray(e))throw new Error("Invalid 'value' set on JET Checkboxset: "+e+".It must be an Array. ")},_HandleChangeEvent:function(e){var n,o;(o=this.$checkboxes).length>0&&o.each(function(){this===e.target&&t(this)._ojRadioCheckbox("setSelectedClass",e.target.checked)}),n=this._GetDisplayValue(),this._SetValue(n,e,i)},_GetDisplayValue:function(e){return this._GetElementValue()},_SetDisplayValue:function(e){var i,n,o,s,a=this.$checkboxes.length;if(this._checkValueType(e),null==e||0===e.length)this.$checkboxes._ojRadioCheckbox("option","checked",!1);else for(i=0;i<a;i++){o=this.$checkboxes[i],s=t(o),n=this._GetOptionValue(o);var r=this._GetOptionIndex(e,n),l=s._ojRadioCheckbox("option","checked");-1!==r?l||s._ojRadioCheckbox("option","checked",!0):l&&s._ojRadioCheckbox("option","checked",!1)}},_GetElementValue:function(){var e=this,t=new Array,i=this.$checkboxes.filter(":checked");return 0===i.length?[]:(i.each(function(){t.push(e._GetOptionValue(this))}),t)},_GetOptionIndex:function(t,i){var n,o=t.indexOf(i);if(-1==o){n=t.length;for(var s=0;s<n;s++)if(e.Object.compareValues(t[s],i)){o=s;break}}return o},_GetOptionValue:function(e){var t,i;return this._IsCustomElement()?(t=document.getElementById(e.getAttribute("data-oj-option-id")))&&(i=t.value):i=e.value,i},_GetDefaultStyleClass:function(){return"oj-checkboxset"},_GetContentElement:function(){return null!=this.$checkboxes?this.$checkboxes:(this.$checkboxes=this._findCheckboxesWithMatchingName(),this.$checkboxes)},_AriaRequiredUnsupported:function(){return!0},_AfterSetOptionRequired:e.EditableValueUtils._AfterSetOptionRequired,_propagateDisabled:function(e){e=!!e,this.$checkboxes.each(function(){t(this).data("oj-_ojRadioCheckbox").__setAncestorComponentDisabled(e)}),this.$checkboxes._ojRadioCheckbox("refreshDisabled")},_setOption:function(e,t,i){var n=this.options.labelledBy;switch(this._super(e,t,i),e){case"disabled":this._propagateDisabled(t);break;case"labelledBy":this._updateLabelledBy(n,t,this.widget())}},_AfterSetOption:function(e,t,i){switch(this._superApply(arguments),e){case"required":this._AfterSetOptionRequired(e)}},getNodeBySubId:function(e){var t,i,n=this._super(e);if(!n)switch(t=this.$checkboxes.get(),e.subId){case"oj-checkboxset-inputs":n=t;break;case"oj-checkboxset-checkbox":if(void 0!==(i=e.value)){var o,s,a=t.length,r=[];for(o=0;o<a;o++)r[o]=this._GetOptionValue(t[o]);-1!==(s=this._GetOptionIndex(r,i))&&(n=t[s])}}return n||null},getSubIdByNode:function(e){for(var t=this._GetContentElement()[0].parentElement.parentElement.parentElement,i=e;i&&i!=t;){if("LABEL"==i.nodeName&&(i=document.getElementById(i.for)),"INPUT"==i.nodeName)return{subId:"oj-checkboxset-checkbox",value:this._GetOptionValue(i)};i=i.parentElement}return this._super(e)},_destroy:function(){var e=this._super(),i=this.element[0].firstElementChild;return this.$checkboxes&&this.$checkboxes._ojRadioCheckbox("destroy"),t(i).contents().unwrap(),e}});var i={doValueChangeCheck:!1}}(),e.CustomElementBridge.registerMetadata("oj-checkboxset","editableValue",{properties:{disabled:{type:"boolean"},labelledBy:{type:"string"},required:{type:"boolean"},value:{type:"Array"},translations:{type:"Object",properties:{required:{type:"Object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}}},methods:{validate:{}},extension:{_WIDGET_NAME:"ojCheckboxset"}}),e.CustomElementBridge.register("oj-checkboxset",{metadata:e.CustomElementBridge.getMetadata("oj-checkboxset")})});