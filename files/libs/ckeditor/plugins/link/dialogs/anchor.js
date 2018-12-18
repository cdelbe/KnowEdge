created: 20181108075031463
creator: Charles Delbé
modified: 20181108075031463
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: fa74ee6c-60a0-4564-a680-f2c66b563081
type: text/vnd.tiddlywiki

created: 20181108074508209
creator: Charles Delbé
modified: 20181108074508209
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: 01b28c46-fbfb-4179-ba62-2cb6c01f0d76
type: text/vnd.tiddlywiki

created: 20181108074213148
creator: Charles Delbé
modified: 20181108074213148
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: 16b2f9b6-f26b-440d-9703-b396c5b426db
type: text/vnd.tiddlywiki

created: 20181108073417164
creator: Charles Delbé
modified: 20181108073417164
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: c8fd11da-5436-4811-ab2a-b03ce52ff3ec
type: text/vnd.tiddlywiki

created: 20181108070527276
creator: Charles Delbé
modified: 20181108070527276
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: 4e415e0b-63d4-496e-85f2-763a845e1071
type: text/vnd.tiddlywiki

created: 20181108070318229
creator: Charles Delbé
modified: 20181108070318229
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: 27dbe7ae-214f-4132-872e-10c750f22748
type: text/vnd.tiddlywiki

created: 20181108063933500
creator: Charles Delbé
modified: 20181108063933500
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: 8885009b-0b15-413c-935b-4454b991cd32
type: text/vnd.tiddlywiki

created: 20181108063816413
creator: Charles Delbé
modified: 20181108063816413
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\link\dialogs\anchor.js
tmap.id: ed6840ac-8bc2-4458-94a0-06c5edec4c58
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("anchor",function(c){function e(b,a){return b.createFakeElement(b.document.createElement("a",{attributes:a}),"cke_anchor","anchor")}return{title:c.lang.link.anchor.title,minWidth:300,minHeight:60,onOk:function(){var b=CKEDITOR.tools.trim(this.getValueOf("info","txtName")),a={id:b,name:b,"data-cke-saved-name":b};this._.selectedElement?this._.selectedElement.data("cke-realelement")?(b=e(c,a),b.replace(this._.selectedElement),CKEDITOR.env.ie&&c.getSelection().selectElement(b)):this._.selectedElement.setAttributes(a):
(b=(b=c.getSelection())&&b.getRanges()[0],b.collapsed?(a=e(c,a),b.insertNode(a)):(CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(a["class"]="cke_anchor"),a=new CKEDITOR.style({element:"a",attributes:a}),a.type=CKEDITOR.STYLE_INLINE,a.applyToRange(b)))},onHide:function(){delete this._.selectedElement},onShow:function(){var b=c.getSelection(),a;a=b.getRanges()[0];var d=b.getSelectedElement();a.shrink(CKEDITOR.SHRINK_ELEMENT);a=(d=a.getEnclosedNode())&&d.type===CKEDITOR.NODE_ELEMENT&&("anchor"===d.data("cke-real-element-type")||
d.is("a"))?d:void 0;var f=(d=a&&a.data("cke-realelement"))?CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,a):CKEDITOR.plugins.link.getSelectedLink(c);if(f){this._.selectedElement=f;var e=f.data("cke-saved-name");this.setValueOf("info","txtName",e||"");!d&&b.selectElement(f);a&&(this._.selectedElement=a)}this.getContentElement("info","txtName").focus()},contents:[{id:"info",label:c.lang.link.anchor.title,accessKey:"I",elements:[{type:"text",id:"txtName",label:c.lang.link.anchor.name,required:!0,validate:function(){return this.getValue()?
!0:(alert(c.lang.link.anchor.errorName),!1)}}]}]}});