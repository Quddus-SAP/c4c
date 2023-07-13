//@ui5-bundle qs/c4c/Component-preload.js
sap.ui.require.preload({
	"qs/c4c/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","qs/c4c/model/models"],function(e,t,i){"use strict";return e.extend("qs.c4c.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"qs/c4c/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("qs.c4c.controller.App",{onInit(){}})});
},
	"qs/c4c/controller/CA.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("qs.c4c.controller.CA",{onInit:function(){}})});
},
	"qs/c4c/i18n/i18n.properties":'# This is the resource bundle for qs.c4c\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"qs/c4c/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"qs.c4c","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.10.2","toolsId":"74e584b1-61be-48e5-8293-17467195392c"},"dataSources":{"mainService":{"uri":"sap/c4c/odata/v1/c4codataapi/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.115.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"qs.c4c.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"qs.c4c.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteCA","pattern":":?query:","target":["TargetCA"]}],"targets":{"TargetCA":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"CA","viewName":"CA"}}},"rootView":{"viewName":"qs.c4c.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"qsc4c"}}',
	"qs/c4c/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"qs/c4c/view/App.view.xml":'<mvc:View controllerName="qs.c4c.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"qs/c4c/view/CA.view.xml":'<mvc:View controllerName="qs.c4c.controller.CA"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Table id="CA_TB" items="{/CorporateAccountCollection}"><columns><Column id="CA_TB_C_AI"><Text id="CA_TB_C_T_ID" text="Account ID"/></Column><Column id="CA_TB_C_N"><Text id="CA_TB_C_T_AN" text="Name"/></Column></columns><items><ColumnListItem id="CA_CLI"><cells><Text id="CA_TB_C_TV_ID" text="{AccountID}"/><Text id="CA_TB_C_TV_AN" text="{Name}"/></cells></ColumnListItem></items></Table></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
