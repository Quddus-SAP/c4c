/*global QUnit*/

sap.ui.define([
	"qs/c4c/controller/CA.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CA Controller");

	QUnit.test("I should test the CA controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
