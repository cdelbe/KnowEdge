created: 20181108075032724
creator: Charles Delbé
modified: 20181108075032724
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: d9a42c80-e05b-4135-a0c4-3c12608012ee
type: text/vnd.tiddlywiki

created: 20181108074509094
creator: Charles Delbé
modified: 20181108074509094
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: e16e4c91-b500-4cb2-9c04-50c811cb4fbd
type: text/vnd.tiddlywiki

created: 20181108074214202
creator: Charles Delbé
modified: 20181108074214202
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: 3ef5bcb9-eafe-4f0c-9c8b-6c83a58d2105
type: text/vnd.tiddlywiki

created: 20181108073418047
creator: Charles Delbé
modified: 20181108073418047
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: df1742c5-68a6-4592-a6a2-88aaa68d3032
type: text/vnd.tiddlywiki

created: 20181108070528299
creator: Charles Delbé
modified: 20181108070528299
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: 1f7867e4-9bb7-4b33-b01c-100cfd79ee30
type: text/vnd.tiddlywiki

created: 20181108070319004
creator: Charles Delbé
modified: 20181108070319004
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: 29a16f04-8927-4623-a041-058b9c2ac2e0
type: text/vnd.tiddlywiki

created: 20181108063934785
creator: Charles Delbé
modified: 20181108063934785
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\js\sample.js
tmap.id: b5df1bd4-1a3b-44c6-9b33-513e3c4d8bde
type: text/vnd.tiddlywiki

created: 20181108063817544
creator: Charles Delbé
modified: 20181108063817544
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\samples\js\sample.js
tmap.id: 62ba5803-6592-4282-b60e-61a97caf87f6
type: text/vnd.tiddlywiki

﻿/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements( document );

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 150;
CKEDITOR.config.width = 'auto';

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById( 'editor' );

		// :(((
		if ( isBBCodeBuiltIn ) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygarea plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
			CKEDITOR.replace( 'editor' );
		} else {
			editorElement.setAttribute( 'contenteditable', 'true' );
			CKEDITOR.inline( 'editor' );

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ( '%RE' + 'V%' ) ) {
			return true;
		}

		return !!CKEDITOR.plugins.get( 'wysiwygarea' );
	}
} )();

