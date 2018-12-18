created: 20181108075032819
creator: Charles Delbé
modified: 20181108075032819
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: 07d20121-5a89-4497-abf0-cbb63ae246bf
type: text/vnd.tiddlywiki

created: 20181108074509404
creator: Charles Delbé
modified: 20181108074509404
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: 7a7f4d79-e9f1-4317-aa48-4381c05d65ec
type: text/vnd.tiddlywiki

created: 20181108074214315
creator: Charles Delbé
modified: 20181108074214315
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: cf9ecba7-5e55-4f7f-aac2-6f67dbacf027
type: text/vnd.tiddlywiki

created: 20181108073417977
creator: Charles Delbé
modified: 20181108073417977
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: dc6a998d-5b5e-4d57-9bc4-7e054521b3e0
type: text/vnd.tiddlywiki

created: 20181108070528244
creator: Charles Delbé
modified: 20181108070528244
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: 7f847c98-73cb-485e-9b36-056bab63c502
type: text/vnd.tiddlywiki

created: 20181108070318946
creator: Charles Delbé
modified: 20181108070318946
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: 3a082e6b-90ec-4929-b92b-9f9557c055ec
type: text/vnd.tiddlywiki

created: 20181108063934724
creator: Charles Delbé
modified: 20181108063934724
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: 52f9dda7-acc7-4047-bc86-f3caeffacc24
type: text/vnd.tiddlywiki

created: 20181108063817692
creator: Charles Delbé
modified: 20181108063817692
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\samples\old\dialog\assets\my_dialog.js
tmap.id: e30fdb8c-4b68-4859-8f5e-d9f402c19c3c
type: text/vnd.tiddlywiki

﻿/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.dialog.add( 'myDialog', function() {
	return {
		title: 'My Dialog',
		minWidth: 400,
		minHeight: 200,
		contents: [
			{
				id: 'tab1',
				label: 'First Tab',
				title: 'First Tab',
				elements: [
					{
						id: 'input1',
						type: 'text',
						label: 'Text Field'
					},
					{
						id: 'select1',
						type: 'select',
						label: 'Select Field',
						items: [
							[ 'option1', 'value1' ],
							[ 'option2', 'value2' ]
						]
					}
				]
			},
			{
				id: 'tab2',
				label: 'Second Tab',
				title: 'Second Tab',
				elements: [
					{
						id: 'button1',
						type: 'button',
						label: 'Button Field'
					}
				]
			}
		]
	};
} );

