created: 20181108075031487
creator: Charles Delbé
modified: 20181108075031487
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: a64bcdc8-8d05-4ff2-98ba-b07a6fde8d1d
type: text/vnd.tiddlywiki

created: 20181108074508229
creator: Charles Delbé
modified: 20181108074508229
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: 5ca4058d-2a7b-4839-a531-3fa231cf19bd
type: text/vnd.tiddlywiki

created: 20181108074213171
creator: Charles Delbé
modified: 20181108074213171
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: 84773352-7a6e-44c4-8a2c-aa73f607e773
type: text/vnd.tiddlywiki

created: 20181108073416447
creator: Charles Delbé
modified: 20181108073416447
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: a262b7bc-c3db-4d21-881c-ab0029d69a8c
type: text/vnd.tiddlywiki

created: 20181108070527293
creator: Charles Delbé
modified: 20181108070527293
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: f35a4c9a-081e-482b-a85a-0b568258290b
type: text/vnd.tiddlywiki

created: 20181108070318246
creator: Charles Delbé
modified: 20181108070318246
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: a9f63163-a4d5-434b-9369-b5418b496a65
type: text/vnd.tiddlywiki

created: 20181108063933523
creator: Charles Delbé
modified: 20181108063933523
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: e1d1d145-b432-4001-b73e-51f0fed88a4e
type: text/vnd.tiddlywiki

created: 20181108063816433
creator: Charles Delbé
modified: 20181108063816433
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\iframe\dialogs\iframe.js
tmap.id: 83777be1-e60e-4f1b-b3e6-a05e48b61de6
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){function c(b){var c=this instanceof CKEDITOR.ui.dialog.checkbox;b.hasAttribute(this.id)&&(b=b.getAttribute(this.id),c?this.setValue(e[this.id]["true"]==b.toLowerCase()):this.setValue(b))}function d(b){var c=""===this.getValue(),a=this instanceof CKEDITOR.ui.dialog.checkbox,d=this.getValue();c?b.removeAttribute(this.att||this.id):a?b.setAttribute(this.id,e[this.id][d]):b.setAttribute(this.att||this.id,d)}var e={scrolling:{"true":"yes","false":"no"},frameborder:{"true":"1","false":"0"}};
CKEDITOR.dialog.add("iframe",function(b){var f=b.lang.iframe,a=b.lang.common,e=b.plugins.dialogadvtab;return{title:f.title,minWidth:350,minHeight:260,onShow:function(){this.fakeImage=this.iframeNode=null;var a=this.getSelectedElement();a&&a.data("cke-real-element-type")&&"iframe"==a.data("cke-real-element-type")&&(this.fakeImage=a,this.iframeNode=a=b.restoreRealElement(a),this.setupContent(a))},onOk:function(){var a;a=this.fakeImage?this.iframeNode:new CKEDITOR.dom.element("iframe");var c={},d={};
this.commitContent(a,c,d);a=b.createFakeElement(a,"cke_iframe","iframe",!0);a.setAttributes(d);a.setStyles(c);this.fakeImage?(a.replace(this.fakeImage),b.getSelection().selectElement(a)):b.insertElement(a)},contents:[{id:"info",label:a.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{id:"src",type:"text",label:a.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(f.noUrl),setup:c,commit:d}]},{type:"hbox",children:[{id:"width",type:"text",requiredContent:"iframe[width]",
style:"width:100%",labelLayout:"vertical",label:a.width,validate:CKEDITOR.dialog.validate.htmlLength(a.invalidHtmlLength.replace("%1",a.width)),setup:c,commit:d},{id:"height",type:"text",requiredContent:"iframe[height]",style:"width:100%",labelLayout:"vertical",label:a.height,validate:CKEDITOR.dialog.validate.htmlLength(a.invalidHtmlLength.replace("%1",a.height)),setup:c,commit:d},{id:"align",type:"select",requiredContent:"iframe[align]","default":"",items:[[a.notSet,""],[a.left,"left"],[a.right,
"right"],[a.alignTop,"top"],[a.alignMiddle,"middle"],[a.alignBottom,"bottom"]],style:"width:100%",labelLayout:"vertical",label:a.align,setup:function(a,b){c.apply(this,arguments);if(b){var d=b.getAttribute("align");this.setValue(d&&d.toLowerCase()||"")}},commit:function(a,b,c){d.apply(this,arguments);this.getValue()&&(c.align=this.getValue())}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"scrolling",type:"checkbox",requiredContent:"iframe[scrolling]",label:f.scrolling,setup:c,commit:d},{id:"frameborder",
type:"checkbox",requiredContent:"iframe[frameborder]",label:f.border,setup:c,commit:d}]},{type:"hbox",widths:["50%","50%"],children:[{id:"name",type:"text",requiredContent:"iframe[name]",label:a.name,setup:c,commit:d},{id:"title",type:"text",requiredContent:"iframe[title]",label:a.advisoryTitle,setup:c,commit:d}]},{id:"longdesc",type:"text",requiredContent:"iframe[longdesc]",label:a.longDescr,setup:c,commit:d}]},e&&e.createAdvancedTab(b,{id:1,classes:1,styles:1},"iframe")]}})})();