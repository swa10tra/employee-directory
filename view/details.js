sap.ui.jsview("employee_details.detail", {
	getControllerName : function() {
		return "employee_details.detail";
	},
	createContent : function(oController) {
			var formo = new sap.ui.layout.form.SimpleForm({
			layout: "ResponsiveGridLayout",
			editable : true,
			content : [
		           new sap.m.Label({ text : "Employee ID" }),
		           new sap.m.Text({text : "{JSONData>/d/Eno}" }),
		           
		           new sap.m.Label({ text : "Name" }),
		           new sap.m.Text({ text : "{JSONData>/d/Ename}" }),
		           
		           new sap.m.Label({ text : "Designation" }),
		           new sap.m.Text({ text : "{JSONData>/d/Edeg}" }),
		           
		           new sap.m.Label({ text : "Mobile No" }),
		           new sap.m.Text({ text : "{JSONData>/d/Emob}"})
		           ]
		});
		
		var oFooter = new sap.m.Bar({
			design : sap.m.BarDesign.Footer
		});
		
		return new sap.m.Page({
			title: "Employee Details",
			content: [
			          formo, oFooter
			]
		});
	}

});
