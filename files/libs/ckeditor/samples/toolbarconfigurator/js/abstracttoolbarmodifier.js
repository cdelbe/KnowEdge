created: 20181108075033029
creator: Charles Delbé
modified: 20181108075033029
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 6fd3571b-fb52-464d-8781-cc1345efd2d1
type: text/vnd.tiddlywiki

created: 20181108074509443
creator: Charles Delbé
modified: 20181108074509443
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: bb3447f0-0390-4d38-940c-2e90c159e484
type: text/vnd.tiddlywiki

created: 20181108074214498
creator: Charles Delbé
modified: 20181108074214498
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 9fbf3fe9-8752-4f2d-a888-46a1424c76aa
type: text/vnd.tiddlywiki

created: 20181108073418219
creator: Charles Delbé
modified: 20181108073418219
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 538fa1e1-6757-459b-8f73-4c3370f996c0
type: text/vnd.tiddlywiki

created: 20181108070528497
creator: Charles Delbé
modified: 20181108070528497
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 1c10c45e-7337-4c3b-a200-d17557e99837
type: text/vnd.tiddlywiki

created: 20181108070319346
creator: Charles Delbé
modified: 20181108070319347
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 98c001d1-8592-488b-8762-b79fe1e5c4a6
type: text/vnd.tiddlywiki

created: 20181108063935228
creator: Charles Delbé
modified: 20181108063935228
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: 83a00e7c-96f8-4eb3-95ab-d507c02e7f14
type: text/vnd.tiddlywiki

created: 20181108063817854
creator: Charles Delbé
modified: 20181108063817854
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\samples\toolbarconfigurator\js\abstracttoolbarmodifier.js
tmap.id: b49cd79b-b1d4-41db-9b40-c5de48fadd77
type: text/vnd.tiddlywiki

﻿"function"!=typeof Object.create&&function(){var a=function(){};Object.create=function(b){if(1<arguments.length)throw Error("Second argument not supported");if(null===b)throw Error("Cannot set a null [[Prototype]]");if("object"!=typeof b)throw TypeError("Argument must be an object");a.prototype=b;return new a}}();
CKEDITOR.plugins.add("toolbarconfiguratorarea",{afterInit:function(a){a.addMode("wysiwyg",function(b){var c=CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_wysiwyg_div cke_reset" hidefocus\x3d"true"\x3e\x3c/div\x3e');a.ui.space("contents").append(c);c=a.editable(c);c.detach=CKEDITOR.tools.override(c.detach,function(b){return function(){b.apply(this,arguments);this.remove()}});a.setData(a.getData(1),b);a.fire("contentDom")});a.dataProcessor.toHtml=function(b){return b};a.dataProcessor.toDataFormat=
function(b){return b}}});Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),e=c.length;return function(d){if("object"!==typeof d&&("function"!==typeof d||null===d))throw new TypeError("Object.keys called on non-object");var g=[],f;for(f in d)a.call(d,f)&&g.push(f);if(b)for(f=0;f<e;f++)a.call(d,c[f])&&g.push(c[f]);return g}}());
(function(){function a(b,c){this.cfg=c||{};this.hidden=!1;this.editorId=b;this.fullToolbarEditor=new ToolbarConfigurator.FullToolbarEditor;this.actualConfig=this.originalConfig=this.mainContainer=null;this.isEditableVisible=this.waitForReady=!1;this.toolbarContainer=null;this.toolbarButtons=[]}ToolbarConfigurator.AbstractToolbarModifier=a;a.prototype.setConfig=function(b){this._onInit(void 0,b,!0)};a.prototype.init=function(b){var c=this;this.mainContainer=new CKEDITOR.dom.element("div");if(null!==
this.fullToolbarEditor.editorInstance)throw"Only one instance of ToolbarModifier is allowed";this.editorInstance||this._createEditor(!1);this.editorInstance.once("loaded",function(){c.fullToolbarEditor.init(function(){c._onInit(b);if("function"==typeof c.onRefresh)c.onRefresh()},c.editorInstance.config)});return this.mainContainer};a.prototype._onInit=function(b,c){this.originalConfig=this.editorInstance.config;this.actualConfig=c?JSON.parse(c):JSON.parse(JSON.stringify(this.originalConfig));if(!this.actualConfig.toolbarGroups&&
!this.actualConfig.toolbar){for(var a=this.actualConfig,d=this.editorInstance.toolbar,g=[],f=d.length,k=0;k<f;k++){var h=d[k];"string"==typeof h?g.push(h):g.push({name:h.name,groups:h.groups?h.groups.slice():[]})}a.toolbarGroups=g}"function"===typeof b&&b(this.mainContainer)};a.prototype._createModifier=function(){this.mainContainer.addClass("unselectable");this.modifyContainer&&this.modifyContainer.remove();this.modifyContainer=new CKEDITOR.dom.element("div");this.modifyContainer.addClass("toolbarModifier");
this.mainContainer.append(this.modifyContainer);return this.mainContainer};a.prototype.getEditableArea=function(){return this.editorInstance.container.findOne("#"+this.editorInstance.id+"_contents")};a.prototype._hideEditable=function(){var b=this.getEditableArea();this.isEditableVisible=!1;this.lastEditableAreaHeight=b.getStyle("height");b.setStyle("height","0")};a.prototype._showEditable=function(){this.isEditableVisible=!0;this.getEditableArea().setStyle("height",this.lastEditableAreaHeight||"auto")};
a.prototype._toggleEditable=function(){this.isEditableVisible?this._hideEditable():this._showEditable()};a.prototype._refreshEditor=function(){function b(){c.editorInstance.destroy();c._createEditor(!0,c.getActualConfig());c.waitForReady=!1}var c=this,a=this.editorInstance.status;this.waitForReady||("unloaded"==a||"loaded"==a?(this.waitForReady=!0,this.editorInstance.once("instanceReady",function(){b()},this)):b())};a.prototype._createEditor=function(b,c){function e(){}var d=this;this.editorInstance=
CKEDITOR.replace(this.editorId);this.editorInstance.on("configLoaded",function(){var b=d.editorInstance.config;c&&CKEDITOR.tools.extend(b,c,!0);a.extendPluginsConfig(b)});this.editorInstance.on("uiSpace",function(b){"top"!=b.data.space&&b.stop()},null,null,-999);this.editorInstance.once("loaded",function(){var c=d.editorInstance.ui.instances,a;for(a in c)c[a]&&(c[a].click=e,c[a].onClick=e);d.isEditableVisible||d._hideEditable();d.currentActive&&d.currentActive.name&&d._highlightGroup(d.currentActive.name);
d.hidden?d.hideUI():d.showUI();if(b&&"function"===typeof d.onRefresh)d.onRefresh()})};a.prototype.getActualConfig=function(){return JSON.parse(JSON.stringify(this.actualConfig))};a.prototype._createToolbar=function(){if(this.toolbarButtons.length){this.toolbarContainer=new CKEDITOR.dom.element("div");this.toolbarContainer.addClass("toolbar");for(var b=this.toolbarButtons.length,c=0;c<b;c+=1)this._createToolbarBtn(this.toolbarButtons[c])}};a.prototype._createToolbarBtn=function(b){var c=ToolbarConfigurator.FullToolbarEditor.createButton("string"===
typeof b.text?b.text:b.text.inactive,b.cssClass);this.toolbarContainer.append(c);c.data("group",b.group);c.addClass(b.position);c.on("click",function(){b.clickCallback.call(this,c,b)},this);return c};a.prototype._fixGroups=function(b){b=b.toolbarGroups||[];for(var c=b.length,a=0;a<c;a+=1){var d=b[a];"/"==d?(d=b[a]={},d.type="separator",d.name="separator"+CKEDITOR.tools.getNextNumber()):(d.groups=d.groups||[],-1==CKEDITOR.tools.indexOf(d.groups,d.name)&&(this.editorInstance.ui.addToolbarGroup(d.name,
d.groups[d.groups.length-1],d.name),d.groups.push(d.name)),this._fixSubgroups(d))}};a.prototype._fixSubgroups=function(b){b=b.groups;for(var c=b.length,a=0;a<c;a+=1){var d=b[a];b[a]={name:d,totalBtns:ToolbarConfigurator.ToolbarModifier.getTotalSubGroupButtonsNumber(d,this.fullToolbarEditor)}}};a.stringifyJSONintoOneLine=function(b,a){a=a||{};var e=JSON.stringify(b,null,""),e=e.replace(/\n/g,"");a.addSpaces&&(e=e.replace(/(\{|:|,|\[|\])/g,function(a){return a+" "}),e=e.replace(/(\])/g,function(a){return" "+
a}));a.noQuotesOnKey&&(e=e.replace(/"(\w*)":/g,function(a,b){return b+":"}));a.singleQuotes&&(e=e.replace(/\"/g,"'"));return e};a.prototype.hideUI=function(){this.hidden=!0;this.mainContainer.hide();this.editorInstance.container&&this.editorInstance.container.hide()};a.prototype.showUI=function(){this.hidden=!1;this.mainContainer.show();this.editorInstance.container&&this.editorInstance.container.show()};a.extendPluginsConfig=function(a){var c=a.extraPlugins;a.extraPlugins=(c?c+",":"")+"toolbarconfiguratorarea"}})();