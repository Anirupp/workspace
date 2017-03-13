sap.ui.controller("com.test.controller.Detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
	onInit: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.getRoute("page1").attachPatternMatched(this._onObjectMatched, this);
	},
	_onObjectMatched: function (oEvent) {
//		this.getView().bindElement({
//			path: "/" + oEvent.getParameter("arguments").invoicePath,
//			model: "invoice"
//		});
		var value = oEvent.getParameter("arguments").IV;
		var model = new sap.ui.model.json.JSONModel({
			"input1": value
		});
		this.getView().setModel(model, "model");
	//	this.byId('idPage2').setValue(value);
		},
		handleBackPage2: function(evt){
			
			var oHistory,sPreviousHash;
			oHistory=sap.ui.core.routing.History.getInstance();
			sPreviousHash=oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var router=sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("overview");
			}
			
			
			
		}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
*/
//	onExit: function() {
//
//	}

});