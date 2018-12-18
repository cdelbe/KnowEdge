created: 20181108075031637
creator: Charles Delbé
modified: 20181108075031637
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: ddfec809-2be4-49ed-a2be-ba05b97f1322
type: text/vnd.tiddlywiki

created: 20181108074507859
creator: Charles Delbé
modified: 20181108074507859
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: 286af359-39ae-463e-a83e-eca1ba680bc2
type: text/vnd.tiddlywiki

created: 20181108074213094
creator: Charles Delbé
modified: 20181108074213094
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: 94dcfdbe-b5ce-4e1b-a020-ff8eb828cb3a
type: text/vnd.tiddlywiki

created: 20181108073416748
creator: Charles Delbé
modified: 20181108073416748
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: abfd2a92-77b3-421c-8bfd-3467bc43e480
type: text/vnd.tiddlywiki

created: 20181108070527193
creator: Charles Delbé
modified: 20181108070527193
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: 42971165-2557-487e-be7c-8affa7d64a33
type: text/vnd.tiddlywiki

created: 20181108070317985
creator: Charles Delbé
modified: 20181108070317985
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: 774d5196-2d6f-4e69-8e8c-f7a56dc1bdc7
type: text/vnd.tiddlywiki

created: 20181108063933666
creator: Charles Delbé
modified: 20181108063933666
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\plugins\about\dialogs\about.js
tmap.id: 5e0b8a9f-0c0d-4b85-af49-be5558716651
type: text/vnd.tiddlywiki

created: 20181108063816568
creator: Charles Delbé
modified: 20181108063816568
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\plugins\about\dialogs\about.js
tmap.id: 0a546a02-4a8a-400c-98af-4528e6b18aff
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("about",function(a){a=a.lang.about;var b=CKEDITOR.getUrl(CKEDITOR.plugins.get("about").path+"dialogs/"+(CKEDITOR.env.hidpi?"hidpi/":"")+"logo_ckeditor.png");return{title:a.dlgTitle,minWidth:390,minHeight:210,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[{type:"html",html:'\x3cstyle type\x3d"text/css"\x3e.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:81px;background-color:#fff;background-image:url('+
b+");"+(CKEDITOR.env.hidpi?"background-size:194px 58px;":"")+'background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}.cke_about_container \x3e p,.cke_rtl .cke_about_container \x3e p{text-align:center;}\x3c/style\x3e\x3cdiv class\x3d"cke_about_container"\x3e\x3cdiv class\x3d"cke_about_logo"\x3e\x3c/div\x3e\x3cp\x3eCKEditor '+CKEDITOR.version+" (revision "+CKEDITOR.revision+
')\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/"\x3ehttps://ckeditor.com\x3c/a\x3e\x3c/p\x3e\x3cp\x3e'+a.moreInfo+'\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/legal/ckeditor-oss-license/"\x3ehttps://ckeditor.com/legal/ckeditor-oss-license/\x3c/a\x3e\x3c/p\x3e\x3cp\x3e'+a.copy.replace("$1",'\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://cksource.com/"\x3eCKSource\x3c/a\x3e - Frederico Knabben')+
"\x3c/p\x3e\x3c/div\x3e"}]}],buttons:[CKEDITOR.dialog.cancelButton]}});