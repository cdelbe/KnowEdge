created: 20181108075030969
creator: Charles Delbé
modified: 20181108075030969
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: d4cca7b5-190c-479d-909c-50ccd89c48f5
type: text/vnd.tiddlywiki

created: 20181108074507491
creator: Charles Delbé
modified: 20181108074507491
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: 835e86c4-22fd-4e05-8c9b-962223ca50f7
type: text/vnd.tiddlywiki

created: 20181108074211325
creator: Charles Delbé
modified: 20181108074211325
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: 0dc43dd3-c79f-4785-9d49-b761e0d1bca2
type: text/vnd.tiddlywiki

created: 20181108073416092
creator: Charles Delbé
modified: 20181108073416092
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: d629c572-6cfb-491b-8389-dec2e4eb0085
type: text/vnd.tiddlywiki

created: 20181108070526514
creator: Charles Delbé
modified: 20181108070526514
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: d3705e93-d48f-489c-adc9-449538d65e9e
type: text/vnd.tiddlywiki

created: 20181108070317437
creator: Charles Delbé
modified: 20181108070317437
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: d608937b-26a0-48cb-8c6d-ebe6f4952a74
type: text/vnd.tiddlywiki

created: 20181108063932881
creator: Charles Delbé
modified: 20181108063932881
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\adapters\jquery.js
tmap.id: d0bdda7a-94f0-4f78-9a2c-8b10590f93b9
type: text/vnd.tiddlywiki

created: 20181108063815649
creator: Charles Delbé
modified: 20181108063815649
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\adapters\jquery.js
tmap.id: f4139fab-3a3d-49b9-92b0-063e91a5d140
type: text/vnd.tiddlywiki

﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(a){if("undefined"==typeof a)throw Error("jQuery should be loaded before CKEditor jQuery adapter.");if("undefined"==typeof CKEDITOR)throw Error("CKEditor should be loaded before CKEditor jQuery adapter.");CKEDITOR.config.jqueryOverrideVal="undefined"==typeof CKEDITOR.config.jqueryOverrideVal?!0:CKEDITOR.config.jqueryOverrideVal;a.extend(a.fn,{ckeditorGet:function(){var a=this.eq(0).data("ckeditorInstance");if(!a)throw"CKEditor is not initialized yet, use ckeditor() with a callback.";return a},
ckeditor:function(g,d){if(!CKEDITOR.env.isCompatible)throw Error("The environment is incompatible.");if(!a.isFunction(g)){var m=d;d=g;g=m}var k=[];d=d||{};this.each(function(){var b=a(this),c=b.data("ckeditorInstance"),f=b.data("_ckeditorInstanceLock"),h=this,l=new a.Deferred;k.push(l.promise());if(c&&!f)g&&g.apply(c,[this]),l.resolve();else if(f)c.once("instanceReady",function(){setTimeout(function(){c.element?(c.element.$==h&&g&&g.apply(c,[h]),l.resolve()):setTimeout(arguments.callee,100)},0)},
null,null,9999);else{if(d.autoUpdateElement||"undefined"==typeof d.autoUpdateElement&&CKEDITOR.config.autoUpdateElement)d.autoUpdateElementJquery=!0;d.autoUpdateElement=!1;b.data("_ckeditorInstanceLock",!0);c=a(this).is("textarea")?CKEDITOR.replace(h,d):CKEDITOR.inline(h,d);b.data("ckeditorInstance",c);c.on("instanceReady",function(d){var e=d.editor;setTimeout(function(){if(e.element){d.removeListener();e.on("dataReady",function(){b.trigger("dataReady.ckeditor",[e])});e.on("setData",function(a){b.trigger("setData.ckeditor",
[e,a.data])});e.on("getData",function(a){b.trigger("getData.ckeditor",[e,a.data])},999);e.on("destroy",function(){b.trigger("destroy.ckeditor",[e])});e.on("save",function(){a(h.form).submit();return!1},null,null,20);if(e.config.autoUpdateElementJquery&&b.is("textarea")&&a(h.form).length){var c=function(){b.ckeditor(function(){e.updateElement()})};a(h.form).submit(c);a(h.form).bind("form-pre-serialize",c);b.bind("destroy.ckeditor",function(){a(h.form).unbind("submit",c);a(h.form).unbind("form-pre-serialize",
c)})}e.on("destroy",function(){b.removeData("ckeditorInstance")});b.removeData("_ckeditorInstanceLock");b.trigger("instanceReady.ckeditor",[e]);g&&g.apply(e,[h]);l.resolve()}else setTimeout(arguments.callee,100)},0)},null,null,9999)}});var f=new a.Deferred;this.promise=f.promise();a.when.apply(this,k).then(function(){f.resolve()});this.editor=this.eq(0).data("ckeditorInstance");return this}});CKEDITOR.config.jqueryOverrideVal&&(a.fn.val=CKEDITOR.tools.override(a.fn.val,function(g){return function(d){if(arguments.length){var m=
this,k=[],f=this.each(function(){var b=a(this),c=b.data("ckeditorInstance");if(b.is("textarea")&&c){var f=new a.Deferred;c.setData(d,function(){f.resolve()});k.push(f.promise());return!0}return g.call(b,d)});if(k.length){var b=new a.Deferred;a.when.apply(this,k).done(function(){b.resolveWith(m)});return b.promise()}return f}var f=a(this).eq(0),c=f.data("ckeditorInstance");return f.is("textarea")&&c?c.getData():g.call(f)}}))})(window.jQuery);