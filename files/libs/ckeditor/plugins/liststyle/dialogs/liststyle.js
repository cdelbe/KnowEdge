created: 20181108075031804
creator: Charles Delbé
modified: 20181108075031804
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: ee6239a9-9c2f-47dd-ba7e-3af10a984b48
type: text/vnd.tiddlywiki

created: 20181108074508374
creator: Charles Delbé
modified: 20181108074508374
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: c88873ab-ad16-45fa-9921-8e907cf5d0ab
type: text/vnd.tiddlywiki

created: 20181108074213123
creator: Charles Delbé
modified: 20181108074213123
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: 084a5b4d-9c28-4a2a-857f-8040336c9188
type: text/vnd.tiddlywiki

created: 20181108073417128
creator: Charles Delbé
modified: 20181108073417128
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: 5c168ceb-8888-493b-ab0f-518f96c7e4a1
type: text/vnd.tiddlywiki

created: 20181108070527261
creator: Charles Delbé
modified: 20181108070527261
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: 8df9c2fd-9584-47b1-85d1-78d3fd198c6c
type: text/vnd.tiddlywiki

created: 20181108070318209
creator: Charles Delbé
modified: 20181108070318209
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: 63726e9c-6225-4267-9fb2-1f260ce79abc
type: text/vnd.tiddlywiki

created: 20181108063933476
creator: Charles Delbé
modified: 20181108063933476
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: 0be76461-cf10-4d48-90d9-a89bd113b4d7
type: text/vnd.tiddlywiki

created: 20181108063816392
creator: Charles Delbé
modified: 20181108063816392
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\liststyle\dialogs\liststyle.js
tmap.id: edf491b8-541f-4c49-8532-5fa6b4f28bb5
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){function d(c,d){var b;try{b=c.getSelection().getRanges()[0]}catch(f){return null}b.shrink(CKEDITOR.SHRINK_TEXT);return c.elementPath(b.getCommonAncestor()).contains(d,1)}function e(c,e){var b=c.lang.liststyle;if("bulletedListStyle"==e)return{title:b.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:b.type,id:"type",align:"center",style:"width:150px",items:[[b.notset,""],[b.circle,"circle"],[b.disc,"disc"],[b.square,"square"]],setup:function(a){a=
a.getStyle("list-style-type")||g[a.getAttribute("type")]||a.getAttribute("type")||"";this.setValue(a)},commit:function(a){var b=this.getValue();b?a.setStyle("list-style-type",b):a.removeStyle("list-style-type")}}]}],onShow:function(){var a=this.getParentEditor();(a=d(a,"ul"))&&this.setupContent(a)},onOk:function(){var a=this.getParentEditor();(a=d(a,"ul"))&&this.commitContent(a)}};if("numberedListStyle"==e){var h=[[b.notset,""],[b.lowerRoman,"lower-roman"],[b.upperRoman,"upper-roman"],[b.lowerAlpha,
"lower-alpha"],[b.upperAlpha,"upper-alpha"],[b.decimal,"decimal"]];return{title:b.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:b.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(b.validateStartNumber),setup:function(a){a=a.getFirst(f).getAttribute("value")||a.getAttribute("start")||1;this.setValue(a)},commit:function(a){var b=a.getFirst(f),c=b.getAttribute("value")||a.getAttribute("start")||
1;a.getFirst(f).removeAttribute("value");var d=parseInt(this.getValue(),10);isNaN(d)?a.removeAttribute("start"):a.setAttribute("start",d);a=b;b=c;for(d=isNaN(d)?1:d;(a=a.getNext(f))&&b++;)a.getAttribute("value")==b&&a.setAttribute("value",d+b-c)}},{type:"select",label:b.type,id:"type",style:"width: 100%;",items:h,setup:function(a){a=a.getStyle("list-style-type")||g[a.getAttribute("type")]||a.getAttribute("type")||"";this.setValue(a)},commit:function(a){var b=this.getValue();b?a.setStyle("list-style-type",
b):a.removeStyle("list-style-type")}}]}]}],onShow:function(){var a=this.getParentEditor();(a=d(a,"ol"))&&this.setupContent(a)},onOk:function(){var a=this.getParentEditor();(a=d(a,"ol"))&&this.commitContent(a)}}}}var f=function(c){return c.type==CKEDITOR.NODE_ELEMENT&&c.is("li")},g={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman",1:"decimal",disc:"disc",circle:"circle",square:"square"};CKEDITOR.dialog.add("numberedListStyle",function(c){return e(c,"numberedListStyle")});CKEDITOR.dialog.add("bulletedListStyle",
function(c){return e(c,"bulletedListStyle")})})();