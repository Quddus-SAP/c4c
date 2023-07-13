/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"qs/c4c/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
