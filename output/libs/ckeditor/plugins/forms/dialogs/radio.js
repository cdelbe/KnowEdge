created: 20181108075031540
creator: Charles Delbé
modified: 20181108075031540
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 2bc4ce21-08a8-4a22-86c7-0724104b5ea4
type: text/vnd.tiddlywiki

created: 20181108074508274
creator: Charles Delbé
modified: 20181108074508274
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: e799462f-30c3-48fb-b5c9-41c427008ff3
type: text/vnd.tiddlywiki

created: 20181108074213204
creator: Charles Delbé
modified: 20181108074213204
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 61bed292-cbc6-4610-bed6-d4361eb7a755
type: text/vnd.tiddlywiki

created: 20181108073416634
creator: Charles Delbé
modified: 20181108073416634
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 7dc3f5fd-3d23-4349-a6bf-3e6462b0dadc
type: text/vnd.tiddlywiki

created: 20181108070527095
creator: Charles Delbé
modified: 20181108070527095
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 66b164fa-fd88-4219-b6de-15ce702ab084
type: text/vnd.tiddlywiki

created: 20181108070318113
creator: Charles Delbé
modified: 20181108070318113
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 49420c82-7329-474e-b11c-21643c89869c
type: text/vnd.tiddlywiki

created: 20181108063933562
creator: Charles Delbé
modified: 20181108063933562
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: 632bbaef-23db-41f1-bff2-7f1247ff8ca6
type: text/vnd.tiddlywiki

created: 20181108063816467
creator: Charles Delbé
modified: 20181108063816467
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\radio.js
tmap.id: cd8b257a-8483-49d4-89f6-b97537fc96e2
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("radio",function(c){return{title:c.lang.forms.checkboxAndRadio.radioTitle,minWidth:350,minHeight:140,onShow:function(){delete this.radioButton;var a=this.getParentEditor().getSelection().getSelectedElement();a&&"input"==a.getName()&&"radio"==a.getAttribute("type")&&(this.radioButton=a,this.setupContent(a))},onOk:function(){var a,b=this.radioButton;b||(a=this.getParentEditor(),b=a.document.createElement("input"),b.setAttribute("type","radio"),a.insertElement(b));this.commitContent({element:b})},
contents:[{id:"info",label:c.lang.forms.checkboxAndRadio.radioTitle,title:c.lang.forms.checkboxAndRadio.radioTitle,elements:[{id:"name",type:"text",label:c.lang.common.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){a=a.element;this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{id:"value",type:"text",label:c.lang.forms.checkboxAndRadio.value,"default":"",
accessKey:"V",setup:function(a){this.setValue(a.getAttribute("value")||"")},commit:function(a){a=a.element;this.getValue()?a.setAttribute("value",this.getValue()):a.removeAttribute("value")}},{id:"checked",type:"checkbox",label:c.lang.forms.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(a){this.setValue(a.getAttribute("checked"))},commit:function(a){var b=a.element;if(CKEDITOR.env.ie){var d=b.getAttribute("checked"),e=!!this.getValue();d!=e&&(d=CKEDITOR.dom.element.createFromHtml('\x3cinput type\x3d"radio"'+
(e?' checked\x3d"checked"':"")+"\x3e\x3c/input\x3e",c.document),b.copyAttributes(d,{type:1,checked:1}),d.replace(b),e&&d.setAttribute("checked","checked"),c.getSelection().selectElement(d),a.element=d)}else a=this.getValue(),CKEDITOR.env.webkit&&(b.$.checked=a),a?b.setAttribute("checked","checked"):b.removeAttribute("checked")}},{id:"required",type:"checkbox",label:c.lang.forms.checkboxAndRadio.required,"default":"",accessKey:"Q",value:"required",setup:CKEDITOR.plugins.forms._setupRequiredAttribute,
commit:function(a){a=a.element;this.getValue()?a.setAttribute("required","required"):a.removeAttribute("required")}}]}]}});