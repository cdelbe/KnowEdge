created: 20181108075031531
creator: Charles Delbé
modified: 20181108075031531
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: f1970fa8-c28d-4e90-9bef-b0f58446c9ac
type: text/vnd.tiddlywiki

created: 20181108074508264
creator: Charles Delbé
modified: 20181108074508264
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 707698a2-fda6-4d02-908b-29fc24821653
type: text/vnd.tiddlywiki

created: 20181108074213196
creator: Charles Delbé
modified: 20181108074213196
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 2080a86f-b516-47ac-ae1e-22144ed952b1
type: text/vnd.tiddlywiki

created: 20181108073416624
creator: Charles Delbé
modified: 20181108073416624
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 1cf42548-3513-4ab0-92f7-01bfa02b8e72
type: text/vnd.tiddlywiki

created: 20181108070527316
creator: Charles Delbé
modified: 20181108070527316
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 2ab28d79-2a00-45e9-8c42-f96a26476c34
type: text/vnd.tiddlywiki

created: 20181108070318104
creator: Charles Delbé
modified: 20181108070318104
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 272f3a03-fb8a-4dfd-850b-1eb3a16ebec5
type: text/vnd.tiddlywiki

created: 20181108063933552
creator: Charles Delbé
modified: 20181108063933552
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: d867c889-263d-4f55-853b-8343c6bcd27e
type: text/vnd.tiddlywiki

created: 20181108063816458
creator: Charles Delbé
modified: 20181108063816458
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\textarea.js
tmap.id: 93392a10-e451-4e42-8255-1a4cbd086dcf
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("textarea",function(b){return{title:b.lang.forms.textarea.title,minWidth:350,minHeight:220,onShow:function(){delete this.textarea;var a=this.getParentEditor().getSelection().getSelectedElement();a&&"textarea"==a.getName()&&(this.textarea=a,this.setupContent(a))},onOk:function(){var a,b=this.textarea,c=!b;c&&(a=this.getParentEditor(),b=a.document.createElement("textarea"));this.commitContent(b);c&&a.insertElement(b)},contents:[{id:"info",label:b.lang.forms.textarea.title,title:b.lang.forms.textarea.title,
elements:[{id:"_cke_saved_name",type:"text",label:b.lang.common.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){this.getValue()?a.data("cke-saved-name",this.getValue()):(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{type:"hbox",widths:["50%","50%"],children:[{id:"cols",type:"text",label:b.lang.forms.textarea.cols,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed),
setup:function(a){a=a.hasAttribute("cols")&&a.getAttribute("cols");this.setValue(a||"")},commit:function(a){this.getValue()?a.setAttribute("cols",this.getValue()):a.removeAttribute("cols")}},{id:"rows",type:"text",label:b.lang.forms.textarea.rows,"default":"",accessKey:"R",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(b.lang.common.validateNumberFailed),setup:function(a){a=a.hasAttribute("rows")&&a.getAttribute("rows");this.setValue(a||"")},commit:function(a){this.getValue()?a.setAttribute("rows",
this.getValue()):a.removeAttribute("rows")}}]},{id:"value",type:"textarea",label:b.lang.forms.textfield.value,"default":"",setup:function(a){this.setValue(a.$.defaultValue)},commit:function(a){a.$.value=a.$.defaultValue=this.getValue()}},{id:"required",type:"checkbox",label:b.lang.forms.textfield.required,"default":"",accessKey:"Q",value:"required",setup:CKEDITOR.plugins.forms._setupRequiredAttribute,commit:function(a){this.getValue()?a.setAttribute("required","required"):a.removeAttribute("required")}}]}]}});