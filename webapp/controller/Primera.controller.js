sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./Dialog2",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment"
], function(BaseController, MessageBox, Dialog2, Utilities, History, Fragment) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.aunaCopyCopyCopy.controller.Primera", {
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

		},
		_onPageNavButtonPress: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Principal", oBindingContext, fnResolve, "");
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
		_onInputLiveChange: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange1: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange2: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange3: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange4: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange5: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		_onInputLiveChange6: function() {
			return new Promise(function(fnResolve) {
				var sTargetPos = "center center";
				sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
				sap.m.MessageToast.show("Actualizando SAP", {
					onClose: fnResolve,
					duration: 2000 || 3000,
					at: sTargetPos,
					my: sTargetPos
				});
			}).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		closeDialog: function(){
			this.byId("dialog2").close();
		},
		closeDialog2: function(){
			this.byId("dialog3").close();
		},
		closeDialog3: function(){
			this.byId("dialog4").close();
		},
		goPrincipal: function(oEvent) {

			oEvent = jQuery.extend(true, {}, oEvent);
			return new Promise(function(fnResolve) {
					fnResolve(true);
				})
				.then(function(result) {

					var oBindingContext = oEvent.getSource().getBindingContext();

					return new Promise(function(fnResolve) {

						this.doNavigate("Principal", oBindingContext, fnResolve, "");
					}.bind(this));

				}.bind(this))
				.then(function(result) {
					if (result === false) {
						return false;
					} else {
						return new Promise(function(fnResolve) {
							var sTargetPos = "center center";
							sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
							sap.m.MessageToast.show("Datos Guardados", {
								onClose: fnResolve,
								duration: 2000 || 3000,
								at: sTargetPos,
								my: sTargetPos
							});
						});

					}
				}.bind(this)).catch(function(err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});
		},
		_onButtonPress: function(oEvent) {
			var mainicontab=this.getView().byId("mainicontab");
			console.log(mainicontab.getSelectedKey());
			var key=mainicontab.getSelectedKey();
			switch(key){
				case "tab1":
						var oView = this.getView();

						// create dialog lazily
						if (!this.byId("dialog2")) {
							// load asynchronous XML fragment
							Fragment.load({
								id: oView.getId(),
								name: "com.sap.build.standard.aunaCopyCopyCopy.view.Dialog2",
								controller: this
							}).then(function (oDialog) {
								// connect dialog to the root view of this component (models, lifecycle)
								oView.addDependent(oDialog);
								oDialog.open();
							});
						} else {
							this.byId("dialog2").open();
						}
					break
				case "tab2":
						var oView = this.getView();

						// create dialog lazily
						if (!this.byId("dialog3")) {
							// load asynchronous XML fragment
							Fragment.load({
								id: oView.getId(),
								name: "com.sap.build.standard.aunaCopyCopyCopy.view.Dialog3",
								controller: this
							}).then(function (oDialog) {
								// connect dialog to the root view of this component (models, lifecycle)
								oView.addDependent(oDialog);
								oDialog.open();
							});
						} else {
							this.byId("dialog3").open();
						}
					break
					case "tab3":
						var oView = this.getView();

						// create dialog lazily
						if (!this.byId("dialog4")) {
							// load asynchronous XML fragment
							Fragment.load({
								id: oView.getId(),
								name: "com.sap.build.standard.aunaCopyCopyCopy.view.Dialog4",
								controller: this
							}).then(function (oDialog) {
								// connect dialog to the root view of this component (models, lifecycle)
								oView.addDependent(oDialog);
								oDialog.open();
							});
						} else {
							this.byId("dialog4").open();
						}
					break
			}
			// oEvent = jQuery.extend(true, {}, oEvent);
			// return new Promise(function(fnResolve) {
			// 		fnResolve(true);
			// 	})
			// 	.then(function(result) {
					
			// 		var sDialogName = "Dialog2";
			// 		this.mDialogs = this.mDialogs || {};
			// 		var oDialog = this.mDialogs[sDialogName];
			// 		if (!oDialog) {
			// 			oDialog = new Dialog2(this.getView());
			// 			this.mDialogs[sDialogName] = oDialog;

			// 			// For navigation.
			// 			oDialog.setRouter(this.oRouter);
			// 		}

			// 		var context = oEvent.getSource().getBindingContext();
			// 		oDialog._oControl.setBindingContext(context);

			// 		oDialog.open();

			// 	}.bind(this))
			// 	.then(function(result) {
			// 		if (result === false) {
			// 			return false;
			// 		} else {
			// 			var oView = this.getView(),
			// 				oController = this,
			// 				status = true,
			// 				requiredFieldInfo = [];
			// 			if (requiredFieldInfo.length) {
			// 				status = this.handleChangeValuestate(requiredFieldInfo, oView);
			// 			}
			// 			if (status) {
			// 				return new Promise(function(fnResolve, fnReject) {
			// 					var oModel = oController.oModel;

			// 					var fnResetChangesAndReject = function(sMessage) {
			// 						oModel.resetChanges();
			// 						fnReject(new Error(sMessage));
			// 					};
			// 					if (oModel && oModel.hasPendingChanges()) {
			// 						oModel.submitChanges({
			// 							success: function(oResponse) {
			// 								var oBatchResponse = oResponse.__batchResponses[0];
			// 								var oChangeResponse = oBatchResponse.__changeResponses && oBatchResponse.__changeResponses[0];
			// 								if (oChangeResponse && oChangeResponse.data) {
			// 									var sNewContext = oModel.getKey(oChangeResponse.data);
			// 									oView.unbindObject();
			// 									oView.bindObject({
			// 										path: "/" + sNewContext
			// 									});
			// 									if (window.history && window.history.replaceState) {
			// 										window.history.replaceState(undefined, undefined, window.location.hash.replace(encodeURIComponent(oController.sContext), encodeURIComponent(sNewContext)));
			// 									}
			// 									oModel.refresh();
			// 									fnResolve();
			// 								} else if (oChangeResponse && oChangeResponse.response) {
			// 									fnResetChangesAndReject(oChangeResponse.message);
			// 								} else if (!oChangeResponse && oBatchResponse.response) {
			// 									fnResetChangesAndReject(oBatchResponse.message);
			// 								} else {
			// 									oModel.refresh();
			// 									fnResolve();
			// 								}
			// 							},
			// 							error: function(oError) {
			// 								fnReject(new Error(oError.message));
			// 							}
			// 						});
			// 					} else {
			// 						fnResolve();
			// 					}
			// 				});
			// 			}
			// 		}
			// 	}.bind(this)).catch(function(err) {
			// 		if (err !== undefined) {
			// 			MessageBox.error(err.message);
			// 		}
			// 	});
		},
		handleChangeValuestate: function(requiredFieldInfo, oView) {
			var status = true;
			if (requiredFieldInfo) {
				requiredFieldInfo.forEach(function(requiredinfo) {
					var input = oView.byId(requiredinfo.id);
					if (input) {
						input.setValueState("None"); //initially set ValueState to None
						if (input.getValue() === '') {
							input.setValueState("Error"); //input is blank set ValueState to error
							status = false;
						} else if (input.getDateValue && !input._bValid) { //since 1.64 ui5 will be providing a function 'isValidValue' that can be used here.
							input.setValueState("Error"); //Invalid Date set ValueState to error
							status = false;
						}
					}
				});
			}
			return status;

		},
		_onButtonPress1: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {

				this.doNavigate("Principal", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("Primera").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			this.oModel = this.getOwnerComponent().getModel();

		}
	});
}, /* bExport= */ true);
