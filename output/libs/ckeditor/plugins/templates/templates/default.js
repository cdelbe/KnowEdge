created: 20181108075032556
creator: Charles Delbé
modified: 20181108075032556
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: fa02a5da-6025-4605-b0a6-edb3a61d3f44
type: text/vnd.tiddlywiki

created: 20181108074509260
creator: Charles Delbé
modified: 20181108074509260
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: aa3a58bb-f9f5-4987-9b29-f85477d3a44d
type: text/vnd.tiddlywiki

created: 20181108074214118
creator: Charles Delbé
modified: 20181108074214118
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: 017280a8-b8cd-48e7-9b19-a8768682111f
type: text/vnd.tiddlywiki

created: 20181108073417726
creator: Charles Delbé
modified: 20181108073417726
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: 8c24ff14-97ad-4ef4-9b18-d00f4503dcb8
type: text/vnd.tiddlywiki

created: 20181108070528128
creator: Charles Delbé
modified: 20181108070528128
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: 6f7e5c94-68e8-4b26-b1ff-ea8514588ab4
type: text/vnd.tiddlywiki

created: 20181108070318858
creator: Charles Delbé
modified: 20181108070318858
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: 26e93ff9-e8d4-4616-b652-dbfba6aef6a4
type: text/vnd.tiddlywiki

created: 20181108063934921
creator: Charles Delbé
modified: 20181108063934921
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\templates\templates\default.js
tmap.id: b8116a49-145a-486b-9a7b-9744d315b344
type: text/vnd.tiddlywiki

created: 20181108063817351
creator: Charles Delbé
modified: 20181108063817351
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\templates\templates\default.js
tmap.id: e7bab62e-0e78-463f-81f1-56a64a631adc
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.addTemplates("default",{imagesPath:CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates")+"templates/images/"),templates:[{title:"Image and Title",image:"template1.gif",description:"One main image with a title and text that surround the image.",html:'\x3ch3\x3e\x3cimg src\x3d" " alt\x3d"" style\x3d"margin-right: 10px" height\x3d"100" width\x3d"100" align\x3d"left" /\x3eType the title here\x3c/h3\x3e\x3cp\x3eType the text here\x3c/p\x3e'},{title:"Strange Template",image:"template2.gif",description:"A template that defines two columns, each one with a title, and some text.",
html:'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" style\x3d"width:100%" border\x3d"0"\x3e\x3ctr\x3e\x3ctd style\x3d"width:50%"\x3e\x3ch3\x3eTitle 1\x3c/h3\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd style\x3d"width:50%"\x3e\x3ch3\x3eTitle 2\x3c/h3\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3eText 1\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3eText 2\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3cp\x3eMore text goes here.\x3c/p\x3e'},{title:"Text and Table",image:"template3.gif",description:"A title with some text and a table.",
html:'\x3cdiv style\x3d"width: 80%"\x3e\x3ch3\x3eTitle goes here\x3c/h3\x3e\x3ctable style\x3d"width:150px;float: right" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"1"\x3e\x3ccaption style\x3d"border:solid 1px black"\x3e\x3cstrong\x3eTable title\x3c/strong\x3e\x3c/caption\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3cp\x3eType the text here\x3c/p\x3e\x3c/div\x3e'}]});