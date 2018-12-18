created: 20181108075031551
creator: Charles Delbé
modified: 20181108075031551
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: 169ff202-e2b1-440a-b122-d9319d7caae0
type: text/vnd.tiddlywiki

created: 20181108074508283
creator: Charles Delbé
modified: 20181108074508283
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: 44617fc2-375d-4712-8c49-0ec16ec4d310
type: text/vnd.tiddlywiki

created: 20181108074213215
creator: Charles Delbé
modified: 20181108074213215
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: 3ed685e2-a879-4dd8-b52f-e580520a5207
type: text/vnd.tiddlywiki

created: 20181108073416649
creator: Charles Delbé
modified: 20181108073416649
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: ce558671-f289-42fc-83aa-4bb466656781
type: text/vnd.tiddlywiki

created: 20181108070527106
creator: Charles Delbé
modified: 20181108070527106
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: b83b35af-1387-4369-896e-d572b7731035
type: text/vnd.tiddlywiki

created: 20181108070318121
creator: Charles Delbé
modified: 20181108070318121
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: 76ab5993-fdae-488c-ac2b-898ee315a3c3
type: text/vnd.tiddlywiki

created: 20181108063933573
creator: Charles Delbé
modified: 20181108063933573
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\form.js
tmap.id: e7687b7e-71e0-44ee-955e-6a82abd38c85
type: text/vnd.tiddlywiki

created: 20181108063816475
creator: Charles Delbé
modified: 20181108063816475
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\form.js
tmap.id: b955bd87-72b7-47cf-870d-5d56b292acd1
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("form",function(a){var d={action:1,id:1,method:1,enctype:1,target:1};return{title:a.lang.forms.form.title,minWidth:350,minHeight:200,onShow:function(){delete this.form;var b=this.getParentEditor().elementPath().contains("form",1);b&&(this.form=b,this.setupContent(b))},onOk:function(){var b,a=this.form,c=!a;c&&(b=this.getParentEditor(),a=b.document.createElement("form"),a.appendBogus());c&&b.insertElement(a);this.commitContent(a)},onLoad:function(){function a(b){this.setValue(b.getAttribute(this.id)||
"")}function e(a){this.getValue()?a.setAttribute(this.id,this.getValue()):a.removeAttribute(this.id)}this.foreach(function(c){d[c.id]&&(c.setup=a,c.commit=e)})},contents:[{id:"info",label:a.lang.forms.form.title,title:a.lang.forms.form.title,elements:[{id:"txtName",bidi:!0,type:"text",label:a.lang.common.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){this.getValue()?a.data("cke-saved-name",this.getValue()):
(a.data("cke-saved-name",!1),a.removeAttribute("name"))}},{id:"action",type:"text",label:a.lang.forms.form.action,"default":"",accessKey:"T"},{type:"hbox",widths:["45%","55%"],children:[{id:"id",type:"text",label:a.lang.common.id,"default":"",accessKey:"I"},{id:"enctype",type:"select",label:a.lang.forms.form.encoding,style:"width:100%",accessKey:"E","default":"",items:[[""],["text/plain"],["multipart/form-data"],["application/x-www-form-urlencoded"]]}]},{type:"hbox",widths:["45%","55%"],children:[{id:"target",
type:"select",label:a.lang.common.target,style:"width:100%",accessKey:"M","default":"",items:[[a.lang.common.notSet,""],[a.lang.common.targetNew,"_blank"],[a.lang.common.targetTop,"_top"],[a.lang.common.targetSelf,"_self"],[a.lang.common.targetParent,"_parent"]]},{id:"method",type:"select",label:a.lang.forms.form.method,accessKey:"M","default":"GET",items:[["GET","get"],["POST","post"]]}]}]}]}});