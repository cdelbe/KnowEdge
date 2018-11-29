created: 20181108075031526
creator: Charles Delbé
modified: 20181108075031526
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 7f1d53e9-23a1-4c5f-b6a6-cb5448f7b5af
type: text/vnd.tiddlywiki

created: 20181108074508259
creator: Charles Delbé
modified: 20181108074508260
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 807f8a4f-4fa6-457e-84f2-68fb254cad06
type: text/vnd.tiddlywiki

created: 20181108074213191
creator: Charles Delbé
modified: 20181108074213191
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 96ce19fe-c8f4-4915-a8db-4d4d2645a5f2
type: text/vnd.tiddlywiki

created: 20181108073416616
creator: Charles Delbé
modified: 20181108073416616
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: afed16ba-bd10-4bec-a4a8-17ee3a7b1d4b
type: text/vnd.tiddlywiki

created: 20181108070527312
creator: Charles Delbé
modified: 20181108070527312
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 00512a9b-45c1-4c3b-a5f2-42116b49f0c8
type: text/vnd.tiddlywiki

created: 20181108070318099
creator: Charles Delbé
modified: 20181108070318099
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: ba009850-11e6-4578-b0c1-dad6134537f1
type: text/vnd.tiddlywiki

created: 20181108063933546
creator: Charles Delbé
modified: 20181108063933546
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 7107e44b-41ff-4f6d-a01f-5a5a586f3a9d
type: text/vnd.tiddlywiki

created: 20181108063816454
creator: Charles Delbé
modified: 20181108063816454
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\textfield.js
tmap.id: 95dcff7d-4aef-4cde-bdda-02ed00c2d008
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("textfield",function(b){function e(a){a=a.element;var b=this.getValue();b?a.setAttribute(this.id,b):a.removeAttribute(this.id)}function f(a){a=a.hasAttribute(this.id)&&a.getAttribute(this.id);this.setValue(a||"")}var g={email:1,password:1,search:1,tel:1,text:1,url:1};return{title:b.lang.forms.textfield.title,minWidth:350,minHeight:150,onShow:function(){delete this.textField;var a=this.getParentEditor().getSelection().getSelectedElement();!a||"input"!=a.getName()||!g[a.getAttribute("type")]&&
a.getAttribute("type")||(this.textField=a,this.setupContent(a))},onOk:function(){var a=this.getParentEditor(),b=this.textField,c=!b;c&&(b=a.document.createElement("input"),b.setAttribute("type","text"));b={element:b};c&&a.insertElement(b.element);this.commitContent(b);c||a.getSelection().selectElement(b.element)},onLoad:function(){this.foreach(function(a){a.getValue&&(a.setup||(a.setup=f),a.commit||(a.commit=e))})},contents:[{id:"info",label:b.lang.forms.textfield.title,title:b.lang.forms.textfield.title,
elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"_cke_saved_name",type:"text",label:b.lang.forms.textfield.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){a=a.element;this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{id:"value",type:"text",label:b.lang.forms.textfield.value,"default":"",accessKey:"V",commit:function(a){if(CKEDITOR.env.ie&&
!this.getValue()){var d=a.element,c=new CKEDITOR.dom.element("input",b.document);d.copyAttributes(c,{value:1});c.replace(d);a.element=c}else e.call(this,a)}}]},{type:"hbox",widths:["50%","50%"],children:[{id:"size",type:"text",label:b.lang.forms.textfield.charWidth,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed)},{id:"maxLength",type:"text",label:b.lang.forms.textfield.maxChars,"default":"",accessKey:"M",style:"width:50px",
validate:CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed)}],onLoad:function(){CKEDITOR.env.ie7Compat&&this.getElement().setStyle("zoom","100%")}},{id:"type",type:"select",label:b.lang.forms.textfield.type,"default":"text",accessKey:"M",items:[[b.lang.forms.textfield.typeEmail,"email"],[b.lang.forms.textfield.typePass,"password"],[b.lang.forms.textfield.typeSearch,"search"],[b.lang.forms.textfield.typeTel,"tel"],[b.lang.forms.textfield.typeText,"text"],[b.lang.forms.textfield.typeUrl,
"url"]],setup:function(a){this.setValue(a.getAttribute("type"))},commit:function(a){var d=a.element;if(CKEDITOR.env.ie){var c=d.getAttribute("type"),e=this.getValue();c!=e&&(c=CKEDITOR.dom.element.createFromHtml('\x3cinput type\x3d"'+e+'"\x3e\x3c/input\x3e',b.document),d.copyAttributes(c,{type:1}),c.replace(d),a.element=c)}else d.setAttribute("type",this.getValue())}},{id:"required",type:"checkbox",label:b.lang.forms.textfield.required,"default":"",accessKey:"Q",value:"required",setup:CKEDITOR.plugins.forms._setupRequiredAttribute,
commit:function(a){a=a.element;this.getValue()?a.setAttribute("required","required"):a.removeAttribute("required")}}]}]}});