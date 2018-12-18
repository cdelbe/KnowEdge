created: 20181108075031558
creator: Charles Delbé
modified: 20181108075031558
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: 12d2fb01-d83a-4df2-a4fb-c91f2c345a75
type: text/vnd.tiddlywiki

created: 20181108074508288
creator: Charles Delbé
modified: 20181108074508288
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: ba517bf1-1410-4f48-b6b1-2d419dbf96cb
type: text/vnd.tiddlywiki

created: 20181108074213220
creator: Charles Delbé
modified: 20181108074213220
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: f5576adf-b7d4-41bd-957e-0e8f86c921f2
type: text/vnd.tiddlywiki

created: 20181108073416658
creator: Charles Delbé
modified: 20181108073416658
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: ed1b15aa-da9d-4151-a35a-c643be6528a1
type: text/vnd.tiddlywiki

created: 20181108070527110
creator: Charles Delbé
modified: 20181108070527110
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: b8c35dc9-ffb8-4239-8596-647bb135f1d2
type: text/vnd.tiddlywiki

created: 20181108070318126
creator: Charles Delbé
modified: 20181108070318126
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: f684a734-57b3-43bb-9453-b38ccde0614e
type: text/vnd.tiddlywiki

created: 20181108063933578
creator: Charles Delbé
modified: 20181108063933578
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: 9a472e9b-c738-4c40-95a7-cc50d7beb2a6
type: text/vnd.tiddlywiki

created: 20181108063816479
creator: Charles Delbé
modified: 20181108063816479
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\checkbox.js
tmap.id: 353db93b-1037-406f-854c-fc8d1ee827a5
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("checkbox",function(d){return{title:d.lang.forms.checkboxAndRadio.checkboxTitle,minWidth:350,minHeight:140,onShow:function(){delete this.checkbox;var a=this.getParentEditor().getSelection().getSelectedElement();a&&"checkbox"==a.getAttribute("type")&&(this.checkbox=a,this.setupContent(a))},onOk:function(){var a,b=this.checkbox;b||(a=this.getParentEditor(),b=a.document.createElement("input"),b.setAttribute("type","checkbox"),a.insertElement(b));this.commitContent({element:b})},contents:[{id:"info",
label:d.lang.forms.checkboxAndRadio.checkboxTitle,title:d.lang.forms.checkboxAndRadio.checkboxTitle,startupFocus:"txtName",elements:[{id:"txtName",type:"text",label:d.lang.common.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){a=a.element;this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{id:"txtValue",type:"text",label:d.lang.forms.checkboxAndRadio.value,
"default":"",accessKey:"V",setup:function(a){a=a.getAttribute("value");this.setValue(CKEDITOR.env.ie&&"on"==a?"":a)},commit:function(a){var b=a.element,c=this.getValue();!c||CKEDITOR.env.ie&&"on"==c?CKEDITOR.env.ie?(c=new CKEDITOR.dom.element("input",b.getDocument()),b.copyAttributes(c,{value:1}),c.replace(b),d.getSelection().selectElement(c),a.element=c):b.removeAttribute("value"):b.setAttribute("value",c)}},{id:"cmbSelected",type:"checkbox",label:d.lang.forms.checkboxAndRadio.selected,"default":"",
accessKey:"S",value:"checked",setup:function(a){this.setValue(a.getAttribute("checked"))},commit:function(a){var b=a.element;if(CKEDITOR.env.ie){var c=!!b.getAttribute("checked"),e=!!this.getValue();c!=e&&(c=CKEDITOR.dom.element.createFromHtml('\x3cinput type\x3d"checkbox"'+(e?' checked\x3d"checked"':"")+"/\x3e",d.document),b.copyAttributes(c,{type:1,checked:1}),c.replace(b),d.getSelection().selectElement(c),a.element=c)}else a=this.getValue(),CKEDITOR.env.webkit&&(b.$.checked=a),a?b.setAttribute("checked",
"checked"):b.removeAttribute("checked")}},{id:"required",type:"checkbox",label:d.lang.forms.checkboxAndRadio.required,"default":"",accessKey:"Q",value:"required",setup:CKEDITOR.plugins.forms._setupRequiredAttribute,commit:function(a){a=a.element;this.getValue()?a.setAttribute("required","required"):a.removeAttribute("required")}}]}]}});