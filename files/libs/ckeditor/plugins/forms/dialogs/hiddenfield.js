created: 20181108075031545
creator: Charles Delbé
modified: 20181108075031546
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: fdae7147-e062-4735-b03a-05325613b300
type: text/vnd.tiddlywiki

created: 20181108074508278
creator: Charles Delbé
modified: 20181108074508278
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 16502c74-21bc-472f-9401-923db81f26b4
type: text/vnd.tiddlywiki

created: 20181108074213209
creator: Charles Delbé
modified: 20181108074213209
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: c22ee537-7742-4617-a644-236d4f80ebfa
type: text/vnd.tiddlywiki

created: 20181108073416641
creator: Charles Delbé
modified: 20181108073416641
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 7dc43769-b66c-46f7-a19b-de62fd39dafc
type: text/vnd.tiddlywiki

created: 20181108070527100
creator: Charles Delbé
modified: 20181108070527100
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 03988757-15c7-44b2-9ec8-25d977ca17da
type: text/vnd.tiddlywiki

created: 20181108070318117
creator: Charles Delbé
modified: 20181108070318117
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 7407bdc3-ad6b-4fba-b71a-3023056d493c
type: text/vnd.tiddlywiki

created: 20181108063933568
creator: Charles Delbé
modified: 20181108063933568
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 72c51fe8-a0ee-4c95-9452-e728ddd13478
type: text/vnd.tiddlywiki

created: 20181108063816471
creator: Charles Delbé
modified: 20181108063816471
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\forms\dialogs\hiddenfield.js
tmap.id: 772e8cd9-759f-4f85-955b-20594306a7da
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("hiddenfield",function(d){return{title:d.lang.forms.hidden.title,hiddenField:null,minWidth:350,minHeight:110,onShow:function(){delete this.hiddenField;var a=this.getParentEditor(),b=a.getSelection(),c=b.getSelectedElement();c&&c.data("cke-real-element-type")&&"hiddenfield"==c.data("cke-real-element-type")&&(this.hiddenField=c,c=a.restoreRealElement(this.hiddenField),this.setupContent(c),b.selectElement(this.hiddenField))},onOk:function(){var a=this.getValueOf("info","_cke_saved_name"),
b=this.getParentEditor(),a=CKEDITOR.env.ie&&8>CKEDITOR.document.$.documentMode?b.document.createElement('\x3cinput name\x3d"'+CKEDITOR.tools.htmlEncode(a)+'"\x3e'):b.document.createElement("input");a.setAttribute("type","hidden");this.commitContent(a);a=b.createFakeElement(a,"cke_hidden","hiddenfield");this.hiddenField?(a.replace(this.hiddenField),b.getSelection().selectElement(a)):b.insertElement(a);return!0},contents:[{id:"info",label:d.lang.forms.hidden.title,title:d.lang.forms.hidden.title,elements:[{id:"_cke_saved_name",
type:"text",label:d.lang.forms.hidden.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.data("cke-saved-name")||a.getAttribute("name")||"")},commit:function(a){this.getValue()?a.setAttribute("name",this.getValue()):a.removeAttribute("name")}},{id:"value",type:"text",label:d.lang.forms.hidden.value,"default":"",accessKey:"V",setup:function(a){this.setValue(a.getAttribute("value")||"")},commit:function(a){this.getValue()?a.setAttribute("value",this.getValue()):a.removeAttribute("value")}}]}]}});