created: 20181108075031564
creator: Charles Delbé
modified: 20181108075031564
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: 44677d94-aca1-4792-b0a2-58d4d6810c98
type: text/vnd.tiddlywiki

created: 20181108074508293
creator: Charles Delbé
modified: 20181108074508293
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: b01ec74a-9fb8-483d-a9a6-632e3a258914
type: text/vnd.tiddlywiki

created: 20181108074213225
creator: Charles Delbé
modified: 20181108074213225
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: a11b926e-57bc-46af-89a5-fd046fc1262c
type: text/vnd.tiddlywiki

created: 20181108073416662
creator: Charles Delbé
modified: 20181108073416662
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: 5c52ba01-cf32-4ffe-98a8-3d49c877429b
type: text/vnd.tiddlywiki

created: 20181108070527117
creator: Charles Delbé
modified: 20181108070527117
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: 83bacb5c-ffcd-4396-b1b1-ae00f9be3480
type: text/vnd.tiddlywiki

created: 20181108070318130
creator: Charles Delbé
modified: 20181108070318130
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: 865d52e0-1d7a-4318-9362-580a1c67012c
type: text/vnd.tiddlywiki

created: 20181108063933583
creator: Charles Delbé
modified: 20181108063933583
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\button.js
tmap.id: b7f25b23-af44-4557-a3aa-15a61a5c2395
type: text/vnd.tiddlywiki

created: 20181108063816484
creator: Charles Delbé
modified: 20181108063816484
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\button.js
tmap.id: 5d57413d-8b12-486b-9c2f-d5bf863df257
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("button",function(b){function d(a){var b=this.getValue();b?(a.attributes[this.id]=b,"name"==this.id&&(a.attributes["data-cke-saved-name"]=b)):(delete a.attributes[this.id],"name"==this.id&&delete a.attributes["data-cke-saved-name"])}return{title:b.lang.forms.button.title,minWidth:350,minHeight:150,onShow:function(){delete this.button;var a=this.getParentEditor().getSelection().getSelectedElement();a&&a.is("input")&&a.getAttribute("type")in{button:1,reset:1,submit:1}&&(this.button=
a,this.setupContent(a))},onOk:function(){var a=this.getParentEditor(),b=this.button,d=!b,c=b?CKEDITOR.htmlParser.fragment.fromHtml(b.getOuterHtml()).children[0]:new CKEDITOR.htmlParser.element("input");this.commitContent(c);var e=new CKEDITOR.htmlParser.basicWriter;c.writeHtml(e);c=CKEDITOR.dom.element.createFromHtml(e.getHtml(),a.document);d?a.insertElement(c):(c.replace(b),a.getSelection().selectElement(c))},contents:[{id:"info",label:b.lang.forms.button.title,title:b.lang.forms.button.title,elements:[{id:"name",
type:"text",bidi:!0,label:b.lang.common.name,"default":"",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:d},{id:"value",type:"text",label:b.lang.forms.button.text,accessKey:"V","default":"",setup:function(a){this.setValue(a.getAttribute("value")||"")},commit:d},{id:"type",type:"select",label:b.lang.forms.button.type,"default":"button",accessKey:"T",items:[[b.lang.forms.button.typeBtn,"button"],[b.lang.forms.button.typeSbm,"submit"],[b.lang.forms.button.typeRst,
"reset"]],setup:function(a){this.setValue(a.getAttribute("type")||"")},commit:d}]}]}});