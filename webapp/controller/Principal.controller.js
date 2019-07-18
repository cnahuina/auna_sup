sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter"
], function(BaseController, MessageBox, Utilities, History,Filter) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.aunaCopyCopyCopy.controller.Principal", {
		handleRouteMatched: function(oEvent) {

			var sAppId = "App5d2df6fe45f56851c6a0a4ee";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype" && prop.includes("Set")) {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

			var data = [
				{
					titulo: "Clínica Delgado",
					description: "Lista 123456",
					authorName: "Kassiel Cons",
					datetime:"13/07/2019 12:10:32",
					priority:"High"
				},
				{
					titulo: "Clinica Miraflores",
					description: "Lista 123456",
					authorName: "Roy Cons",
					datetime:"14/07/2019 14:10:32",
					priority:"Low"
				},
				{
					titulo: "Clínica Vallesur",
					description: "Lista 123456",
					authorName: "Sergio Cons",
					datetime:"15/07/2019 15:20:32",
					priority:"Medium"
				},
				{
					titulo: "Clínica Bellavista",
					description: "Lista 123456",
					authorName: "Sebastian Cons",
					datetime:"16/07/2019 15:10:32",
					priority:"Low"
				}
			]
			this.getView().byId("idList").setModel(new sap.ui.model.json.JSONModel(data))
		},
		_onNotificationListItemClose: function(oEvent) {
			var oCtrl = oEvent.getSource();
			var oParent = oCtrl.getParent();
			if (oParent instanceof sap.m.NotificationListGroup || oParent['removeItem']) {
				oParent.removeItem(oCtrl);
			} else if (oParent['removeContent']) {
				oParent.removeContent(oCtrl);
			} else {
				throw new Error('Cannot delete control', oCtrl.getMetadata().getName());
			}

		},
		_onButtonPress: function(oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext();

			//console.log(oEvent.getSource().getBindingContext().getObject().priority)
			// console.log(oBindingContext);
			return new Promise(function(fnResolve) {
				var oBindingContext2 = oEvent.getSource().getBindingContext().getObject().priority;

				switch (oBindingContext2) {
					case "Low":
							this.doNavigate("Primera", oBindingContext, fnResolve, "");
						break;
					case "Medium":
							this.doNavigate("Segunda", oBindingContext, fnResolve, "");
						break;
					case "High":
							this.doNavigate("Tercera", oBindingContext, fnResolve, "");
						break;
				}
				


			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},
		_onButtonPress1: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Segunda", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNotificationListItemClose3: function(oEvent) {
			var oCtrl = oEvent.getSource();
			var oParent = oCtrl.getParent();
			if (oParent instanceof sap.m.NotificationListGroup || oParent['removeItem']) {
				oParent.removeItem(oCtrl);
			} else if (oParent['removeContent']) {
				oParent.removeContent(oCtrl);
			} else {
				throw new Error('Cannot delete control', oCtrl.getMetadata().getName());
			}

		},
		onSearch : function (oEvt) {

			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("titulo", sap.ui.model.FilterOperator.Contains, sQuery);
				var filter2 = new Filter("authorName", sap.ui.model.FilterOperator.Contains, sQuery);
				var filter3 = new Filter("datetime", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
				aFilters.push(filter2);
				aFilters.push(filter3);
				var filterObj = new sap.ui.model.Filter(aFilters, false);
			}

			// update list binding
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			console.log(binding)
			binding.filter(filterObj);
		},
		_onButtonPress2: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Historial", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNotificationListItemClose5: function(oEvent) {
			var oCtrl = oEvent.getSource();
			var oParent = oCtrl.getParent();
			if (oParent instanceof sap.m.NotificationListGroup || oParent['removeItem']) {
				oParent.removeItem(oCtrl);
			} else if (oParent['removeContent']) {
				oParent.removeContent(oCtrl);
			} else {
				throw new Error('Cannot delete control', oCtrl.getMetadata().getName());
			}

		},
		_onButtonPress3: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Historial", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onNotificationListItemClose6: function(oEvent) {
			var oCtrl = oEvent.getSource();
			var oParent = oCtrl.getParent();
			if (oParent instanceof sap.m.NotificationListGroup || oParent['removeItem']) {
				oParent.removeItem(oCtrl);
			} else if (oParent['removeContent']) {
				oParent.removeContent(oCtrl);
			} else {
				throw new Error('Cannot delete control', oCtrl.getMetadata().getName());
			}

		},
		_onButtonPress4: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Historial", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Principal").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
		}
	});
}, /* bExport= */ true);
