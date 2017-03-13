sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
 
	return UIComponent.extend("com.test.Component", {
 
		metadata: {
			manifest: "json"
		},
		
		init: function(){
			
			// call the init function of the parent 
			UIComponent.prototype.init.apply(this, arguments);
			// initiaize the router instance
			this.getRouter().initialize();
			
	
			
		}
 
	});
 
});