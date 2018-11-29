created: 20181108075032940
creator: Charles Delbé
modified: 20181108075032940
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 6fd6976a-de07-47fe-a536-879018a61167
type: text/vnd.tiddlywiki

created: 20181108074509532
creator: Charles Delbé
modified: 20181108074509532
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 6416a4d7-e55c-42af-a6b2-80fbdafe37e8
type: text/vnd.tiddlywiki

created: 20181108074214341
creator: Charles Delbé
modified: 20181108074214341
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 89dfd36e-06a9-411b-ad98-f110eaa261de
type: text/vnd.tiddlywiki

created: 20181108073418131
creator: Charles Delbé
modified: 20181108073418131
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 83fcfb6c-0355-43c3-9842-f6943726e5c8
type: text/vnd.tiddlywiki

created: 20181108070528362
creator: Charles Delbé
modified: 20181108070528362
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 95c14bc6-e74f-4b2a-84ad-13e8768e6ea3
type: text/vnd.tiddlywiki

created: 20181108070319239
creator: Charles Delbé
modified: 20181108070319239
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: e7057a34-85af-4de6-a9cd-b5c19aa1e7a1
type: text/vnd.tiddlywiki

created: 20181108063935070
creator: Charles Delbé
modified: 20181108063935070
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\sample.js
tmap.id: 10951475-1c87-4bdf-9c60-752e6eff6c89
type: text/vnd.tiddlywiki

created: 20181108063817834
creator: Charles Delbé
modified: 20181108063817834
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\samples\old\sample.js
tmap.id: 5148b60b-82b6-4ba6-b448-37532eb81049
type: text/vnd.tiddlywiki

﻿/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// Tool scripts for the sample pages.
// This file can be ignored and is not required to make use of CKEditor.

( function() {
	CKEDITOR.on( 'instanceReady', function( ev ) {
		// Check for sample compliance.
		var editor = ev.editor,
			meta = CKEDITOR.document.$.getElementsByName( 'ckeditor-sample-required-plugins' ),
			requires = meta.length ? CKEDITOR.dom.element.get( meta[ 0 ] ).getAttribute( 'content' ).split( ',' ) : [],
			missing = [],
			i;

		if ( requires.length ) {
			for ( i = 0; i < requires.length; i++ ) {
				if ( !editor.plugins[ requires[ i ] ] )
					missing.push( '<code>' + requires[ i ] + '</code>' );
			}

			if ( missing.length ) {
				var warn = CKEDITOR.dom.element.createFromHtml(
					'<div class="warning">' +
						'<span>To fully experience this demo, the ' + missing.join( ', ' ) + ' plugin' + ( missing.length > 1 ? 's are' : ' is' ) + ' required.</span>' +
					'</div>'
				);
				warn.insertBefore( editor.container );
			}
		}

		// Set icons.
		var doc = new CKEDITOR.dom.document( document ),
			icons = doc.find( '.button_icon' );

		for ( i = 0; i < icons.count(); i++ ) {
			var icon = icons.getItem( i ),
				name = icon.getAttribute( 'data-icon' ),
				style = CKEDITOR.skin.getIconStyle( name, ( CKEDITOR.lang.dir == 'rtl' ) );

			icon.addClass( 'cke_button_icon' );
			icon.addClass( 'cke_button__' + name + '_icon' );
			icon.setAttribute( 'style', style );
			icon.setStyle( 'float', 'none' );

		}
	} );
} )();
