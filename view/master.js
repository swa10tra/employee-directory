sap.ui.jsview("employee_details.master", {
	getControllerName : function() {
		return "employee_details.master";
	},
	createContent : function(oController) {
		oList = new sap.m.List("listID", {
			includeItemInSelection : true,
			inset : false,
			itemPress : function(oEvent) {
				oController.onSelect(oEvent);
			}
		});

		oList.bindItems({
			path : "/ZEMP_TABLESet",
			template : new sap.m.StandardListItem({
				title : "{Ename}",
				type : "Navigation",
				description : "{Title}"
			})
		});

		return new sap.m.Page({
			title : "Employee List",
			content : [ oList ]
		});
	}

});
